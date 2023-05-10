// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

/* eslint-disable no-bitwise */
/* eslint-disable max-classes-per-file */

import { z } from 'zod';
import Long from 'long';
import PQueue from 'p-queue';
import type { PlaintextContent } from '@signalapp/libsignal-client';
import {
  ProtocolAddress,
  SenderKeyDistributionMessage,
} from '@signalapp/libsignal-client';

import type { ConversationModel } from '../models/conversations';
import { GLOBAL_ZONE } from '../SignalProtocolStore';
import { assertDev, strictAssert } from '../util/assert';
import { parseIntOrThrow } from '../util/parseIntOrThrow';
import { Address } from '../types/Address';
import { QualifiedAddress } from '../types/QualifiedAddress';
import { SenderKeys } from '../LibSignalStores';
import type {
  TextAttachmentType,
  UploadedAttachmentType,
} from '../types/Attachment';
import type { UUID } from '../types/UUID';
import type {
  ChallengeType,
  GetGroupLogOptionsType,
  GetProfileOptionsType,
  GetProfileUnauthOptionsType,
  GroupCredentialsType,
  GroupLogResponseType,
  ProfileRequestDataType,
  ProxiedRequestOptionsType,
  UploadAvatarHeadersType,
  WebAPIType,
} from './WebAPI';
import createTaskWithTimeout from './TaskWithTimeout';
import type {
  CallbackResultType,
  StorageServiceCallOptionsType,
  StorageServiceCredentials,
} from './Types.d';
import type {
  SerializedCertificateType,
  SendLogCallbackType,
} from './OutgoingMessage';
import OutgoingMessage from './OutgoingMessage';
import * as Bytes from '../Bytes';
import { getRandomBytes } from '../Crypto';
import {
  MessageError,
  SignedPreKeyRotationError,
  SendMessageProtoError,
  HTTPError,
  NoSenderKeyError,
} from './Errors';
import { BodyRange } from '../types/BodyRange';
import type { RawBodyRange } from '../types/BodyRange';
import type { StoryContextType } from '../types/Util';
import type {
  LinkPreviewImage,
  LinkPreviewMetadata,
} from '../linkPreviews/linkPreviewFetch';
import { concat, isEmpty, map } from '../util/iterables';
import type { SendTypesType } from '../util/handleMessageSend';
import { shouldSaveProto, sendTypesEnum } from '../util/handleMessageSend';
import { uuidToBytes } from '../util/uuidToBytes';
import type { DurationInSeconds } from '../util/durations';
import { SignalService as Proto } from '../protobuf';
import * as log from '../logging/log';
import type { EmbeddedContactWithUploadedAvatar } from '../types/EmbeddedContact';
import {
  numberToPhoneType,
  numberToEmailType,
  numberToAddressType,
} from '../types/EmbeddedContact';
import { missingCaseError } from '../util/missingCaseError';

export type SendMetadataType = {
  [identifier: string]: {
    accessKey: string;
    senderCertificate?: SerializedCertificateType;
  };
};

export type SendOptionsType = {
  sendMetadata?: SendMetadataType;
  online?: boolean;
};

export type OutgoingQuoteAttachmentType = Readonly<{
  contentType: string;
  fileName?: string;
  thumbnail: UploadedAttachmentType;
}>;

export type OutgoingQuoteType = Readonly<{
  isGiftBadge?: boolean;
  id?: number;
  authorUuid?: string;
  text?: string;
  attachments: ReadonlyArray<OutgoingQuoteAttachmentType>;
  bodyRanges?: ReadonlyArray<RawBodyRange>;
}>;

export type OutgoingLinkPreviewType = Readonly<{
  title?: string;
  description?: string;
  domain?: string;
  url: string;
  isStickerPack?: boolean;
  image?: Readonly<UploadedAttachmentType>;
  date?: number;
}>;

export type OutgoingTextAttachmentType = Omit<TextAttachmentType, 'preview'> & {
  preview?: OutgoingLinkPreviewType;
};

export type GroupV2InfoType = {
  groupChange?: Uint8Array;
  masterKey: Uint8Array;
  revision: number;
  members: ReadonlyArray<string>;
};

type GroupCallUpdateType = {
  eraId: string;
};

export type OutgoingStickerType = Readonly<{
  packId: string;
  packKey: string;
  stickerId: number;
  emoji?: string;
  data: Readonly<UploadedAttachmentType>;
}>;

export type ReactionType = {
  emoji?: string;
  remove?: boolean;
  targetAuthorUuid?: string;
  targetTimestamp?: number;
};

export const singleProtoJobDataSchema = z.object({
  contentHint: z.number(),
  identifier: z.string(),
  isSyncMessage: z.boolean(),
  messageIds: z.array(z.string()).optional(),
  protoBase64: z.string(),
  type: sendTypesEnum,
  urgent: z.boolean().optional(),
});

export type SingleProtoJobData = z.infer<typeof singleProtoJobDataSchema>;

export type MessageOptionsType = {
  attachments?: ReadonlyArray<UploadedAttachmentType>;
  body?: string;
  bodyRanges?: ReadonlyArray<RawBodyRange>;
  contact?: ReadonlyArray<EmbeddedContactWithUploadedAvatar>;
  editedMessageTimestamp?: number;
  expireTimer?: DurationInSeconds;
  flags?: number;
  group?: {
    id: string;
    type: number;
  };
  groupV2?: GroupV2InfoType;
  needsSync?: boolean;
  preview?: ReadonlyArray<OutgoingLinkPreviewType>;
  profileKey?: Uint8Array;
  quote?: OutgoingQuoteType;
  recipients: ReadonlyArray<string>;
  sticker?: OutgoingStickerType;
  reaction?: ReactionType;
  deletedForEveryoneTimestamp?: number;
  timestamp: number;
  groupCallUpdate?: GroupCallUpdateType;
  storyContext?: StoryContextType;
};
export type GroupSendOptionsType = {
  attachments?: ReadonlyArray<UploadedAttachmentType>;
  bodyRanges?: ReadonlyArray<RawBodyRange>;
  contact?: ReadonlyArray<EmbeddedContactWithUploadedAvatar>;
  deletedForEveryoneTimestamp?: number;
  editedMessageTimestamp?: number;
  expireTimer?: DurationInSeconds;
  flags?: number;
  groupCallUpdate?: GroupCallUpdateType;
  groupV2?: GroupV2InfoType;
  messageText?: string;
  preview?: ReadonlyArray<OutgoingLinkPreviewType>;
  profileKey?: Uint8Array;
  quote?: OutgoingQuoteType;
  reaction?: ReactionType;
  sticker?: OutgoingStickerType;
  storyContext?: StoryContextType;
  timestamp: number;
};

class Message {
  attachments: ReadonlyArray<UploadedAttachmentType>;

  body?: string;

  bodyRanges?: ReadonlyArray<RawBodyRange>;

  contact?: ReadonlyArray<EmbeddedContactWithUploadedAvatar>;

  expireTimer?: DurationInSeconds;

  flags?: number;

  group?: {
    id: string;
    type: number;
  };

  groupV2?: GroupV2InfoType;

  needsSync?: boolean;

  preview?: ReadonlyArray<OutgoingLinkPreviewType>;

  profileKey?: Uint8Array;

  quote?: OutgoingQuoteType;

  recipients: ReadonlyArray<string>;

  sticker?: OutgoingStickerType;

  reaction?: ReactionType;

  timestamp: number;

  dataMessage?: Proto.DataMessage;

  deletedForEveryoneTimestamp?: number;

  groupCallUpdate?: GroupCallUpdateType;

  storyContext?: StoryContextType;

  constructor(options: MessageOptionsType) {
    this.attachments = options.attachments || [];
    this.body = options.body;
    this.bodyRanges = options.bodyRanges;
    this.contact = options.contact;
    this.expireTimer = options.expireTimer;
    this.flags = options.flags;
    this.group = options.group;
    this.groupV2 = options.groupV2;
    this.needsSync = options.needsSync;
    this.preview = options.preview;
    this.profileKey = options.profileKey;
    this.quote = options.quote;
    this.recipients = options.recipients;
    this.sticker = options.sticker;
    this.reaction = options.reaction;
    this.timestamp = options.timestamp;
    this.deletedForEveryoneTimestamp = options.deletedForEveryoneTimestamp;
    this.groupCallUpdate = options.groupCallUpdate;
    this.storyContext = options.storyContext;

    if (!(this.recipients instanceof Array)) {
      throw new Error('Invalid recipient list');
    }

    if (!this.group && !this.groupV2 && this.recipients.length !== 1) {
      throw new Error('Invalid recipient list for non-group');
    }

    if (typeof this.timestamp !== 'number') {
      throw new Error('Invalid timestamp');
    }

    if (this.expireTimer != null) {
      if (typeof this.expireTimer !== 'number' || !(this.expireTimer >= 0)) {
        throw new Error('Invalid expireTimer');
      }
    }

    if (this.attachments) {
      if (!(this.attachments instanceof Array)) {
        throw new Error('Invalid message attachments');
      }
    }
    if (this.flags !== undefined) {
      if (typeof this.flags !== 'number') {
        throw new Error('Invalid message flags');
      }
    }
    if (this.isEndSession()) {
      if (
        this.body != null ||
        this.group != null ||
        this.attachments.length !== 0
      ) {
        throw new Error('Invalid end session message');
      }
    } else {
      if (
        typeof this.timestamp !== 'number' ||
        (this.body && typeof this.body !== 'string')
      ) {
        throw new Error('Invalid message body');
      }
      if (this.group) {
        if (
          typeof this.group.id !== 'string' ||
          typeof this.group.type !== 'number'
        ) {
          throw new Error('Invalid group context');
        }
      }
    }
  }

  isEndSession() {
    return (this.flags || 0) & Proto.DataMessage.Flags.END_SESSION;
  }

  toProto(): Proto.DataMessage {
    if (this.dataMessage) {
      return this.dataMessage;
    }
    const proto = new Proto.DataMessage();

    proto.timestamp = Long.fromNumber(this.timestamp);
    proto.attachments = this.attachments.slice();

    if (this.body) {
      proto.body = this.body;

      const mentionCount = this.bodyRanges
        ? this.bodyRanges.filter(BodyRange.isMention).length
        : 0;
      const otherRangeCount = this.bodyRanges
        ? this.bodyRanges.length - mentionCount
        : 0;
      const placeholders = this.body.match(/\uFFFC/g);
      const placeholderCount = placeholders ? placeholders.length : 0;
      const storyInfo = this.storyContext
        ? `, story: ${this.storyContext.timestamp}`
        : '';
      log.info(
        `Sending a message with ${mentionCount} mentions, ` +
          `${placeholderCount} placeholders, ` +
          `and ${otherRangeCount} other ranges${storyInfo}`
      );
    }
    if (this.flags) {
      proto.flags = this.flags;
    }
    if (this.groupV2) {
      proto.groupV2 = new Proto.GroupContextV2();
      proto.groupV2.masterKey = this.groupV2.masterKey;
      proto.groupV2.revision = this.groupV2.revision;
      proto.groupV2.groupChange = this.groupV2.groupChange || null;
    }
    if (this.sticker) {
      proto.sticker = new Proto.DataMessage.Sticker();
      proto.sticker.packId = Bytes.fromHex(this.sticker.packId);
      proto.sticker.packKey = Bytes.fromBase64(this.sticker.packKey);
      proto.sticker.stickerId = this.sticker.stickerId;
      proto.sticker.emoji = this.sticker.emoji;
      proto.sticker.data = this.sticker.data;
    }
    if (this.reaction) {
      proto.reaction = new Proto.DataMessage.Reaction();
      proto.reaction.emoji = this.reaction.emoji || null;
      proto.reaction.remove = this.reaction.remove || false;
      proto.reaction.targetAuthorUuid = this.reaction.targetAuthorUuid || null;
      proto.reaction.targetTimestamp =
        this.reaction.targetTimestamp === undefined
          ? null
          : Long.fromNumber(this.reaction.targetTimestamp);
    }

    if (Array.isArray(this.preview)) {
      proto.preview = this.preview.map(preview => {
        const item = new Proto.DataMessage.Preview();
        item.title = preview.title;
        item.url = preview.url;
        item.description = preview.description || null;
        item.date = preview.date || null;
        if (preview.image) {
          item.image = preview.image;
        }
        return item;
      });
    }
    if (Array.isArray(this.contact)) {
      proto.contact = this.contact.map(
        (contact: EmbeddedContactWithUploadedAvatar) => {
          const contactProto = new Proto.DataMessage.Contact();
          if (contact.name) {
            const nameProto: Proto.DataMessage.Contact.IName = {
              givenName: contact.name.givenName,
              familyName: contact.name.familyName,
              prefix: contact.name.prefix,
              suffix: contact.name.suffix,
              middleName: contact.name.middleName,
              displayName: contact.name.displayName,
            };
            contactProto.name = new Proto.DataMessage.Contact.Name(nameProto);
          }
          if (Array.isArray(contact.number)) {
            contactProto.number = contact.number.map(number => {
              const numberProto: Proto.DataMessage.Contact.IPhone = {
                value: number.value,
                type: numberToPhoneType(number.type),
                label: number.label,
              };

              return new Proto.DataMessage.Contact.Phone(numberProto);
            });
          }
          if (Array.isArray(contact.email)) {
            contactProto.email = contact.email.map(email => {
              const emailProto: Proto.DataMessage.Contact.IEmail = {
                value: email.value,
                type: numberToEmailType(email.type),
                label: email.label,
              };

              return new Proto.DataMessage.Contact.Email(emailProto);
            });
          }
          if (Array.isArray(contact.address)) {
            contactProto.address = contact.address.map(address => {
              const addressProto: Proto.DataMessage.Contact.IPostalAddress = {
                type: numberToAddressType(address.type),
                label: address.label,
                street: address.street,
                pobox: address.pobox,
                neighborhood: address.neighborhood,
                city: address.city,
                region: address.region,
                postcode: address.postcode,
                country: address.country,
              };

              return new Proto.DataMessage.Contact.PostalAddress(addressProto);
            });
          }
          if (contact.avatar?.avatar) {
            const avatarProto = new Proto.DataMessage.Contact.Avatar();
            avatarProto.avatar = contact.avatar.avatar;
            avatarProto.isProfile = Boolean(contact.avatar.isProfile);
            contactProto.avatar = avatarProto;
          }

          if (contact.organization) {
            contactProto.organization = contact.organization;
          }

          return contactProto;
        }
      );
    }

    if (this.quote) {
      const { BodyRange: ProtoBodyRange, Quote } = Proto.DataMessage;

      proto.quote = new Quote();
      const { quote } = proto;

      if (this.quote.isGiftBadge) {
        quote.type = Proto.DataMessage.Quote.Type.GIFT_BADGE;
      } else {
        quote.type = Proto.DataMessage.Quote.Type.NORMAL;
      }

      quote.id =
        this.quote.id === undefined ? null : Long.fromNumber(this.quote.id);
      quote.authorUuid = this.quote.authorUuid || null;
      quote.text = this.quote.text || null;
      quote.attachments = this.quote.attachments.slice() || [];
      const bodyRanges = this.quote.bodyRanges || [];
      quote.bodyRanges = bodyRanges.map(range => {
        const bodyRange = new ProtoBodyRange();
        bodyRange.start = range.start;
        bodyRange.length = range.length;
        if (BodyRange.isMention(range)) {
          bodyRange.mentionUuid = range.mentionUuid;
        } else if (BodyRange.isFormatting(range)) {
          bodyRange.style = range.style;
        } else {
          throw missingCaseError(range);
        }
        return bodyRange;
      });
      if (
        quote.bodyRanges.length &&
        (!proto.requiredProtocolVersion ||
          proto.requiredProtocolVersion <
            Proto.DataMessage.ProtocolVersion.MENTIONS)
      ) {
        proto.requiredProtocolVersion =
          Proto.DataMessage.ProtocolVersion.MENTIONS;
      }
    }
    if (this.expireTimer) {
      proto.expireTimer = this.expireTimer;
    }
    if (this.profileKey) {
      proto.profileKey = this.profileKey;
    }
    if (this.deletedForEveryoneTimestamp) {
      proto.delete = {
        targetSentTimestamp: Long.fromNumber(this.deletedForEveryoneTimestamp),
      };
    }
    if (this.bodyRanges) {
      proto.requiredProtocolVersion =
        Proto.DataMessage.ProtocolVersion.MENTIONS;
      proto.bodyRanges = this.bodyRanges.map(bodyRange => {
        const { start, length } = bodyRange;

        if (BodyRange.isMention(bodyRange)) {
          return {
            start,
            length,
            mentionUuid: bodyRange.mentionUuid,
          };
        }
        if (BodyRange.isFormatting(bodyRange)) {
          return {
            start,
            length,
            style: bodyRange.style,
          };
        }
        throw missingCaseError(bodyRange);
      });
    }

    if (this.groupCallUpdate) {
      const { GroupCallUpdate } = Proto.DataMessage;

      const groupCallUpdate = new GroupCallUpdate();
      groupCallUpdate.eraId = this.groupCallUpdate.eraId;

      proto.groupCallUpdate = groupCallUpdate;
    }

    if (this.storyContext) {
      const { StoryContext } = Proto.DataMessage;

      const storyContext = new StoryContext();
      if (this.storyContext.authorUuid) {
        storyContext.authorUuid = this.storyContext.authorUuid;
      }
      storyContext.sentTimestamp = Long.fromNumber(this.storyContext.timestamp);

      proto.storyContext = storyContext;
    }

    this.dataMessage = proto;
    return proto;
  }

  encode(): Uint8Array {
    return Proto.DataMessage.encode(this.toProto()).finish();
  }
}

type AddPniSignatureMessageToProtoOptionsType = Readonly<{
  conversation?: ConversationModel;
  proto: Proto.Content;
  reason: string;
}>;

function addPniSignatureMessageToProto({
  conversation,
  proto,
  reason,
}: AddPniSignatureMessageToProtoOptionsType): void {
  if (!conversation) {
    return;
  }

  const pniSignatureMessage = conversation?.getPniSignatureMessage();
  if (!pniSignatureMessage) {
    return;
  }

  log.info(
    `addPniSignatureMessageToProto(${reason}): ` +
      `adding pni signature for ${conversation.idForLogging()}`
  );

  // eslint-disable-next-line no-param-reassign
  proto.pniSignatureMessage = {
    pni: uuidToBytes(pniSignatureMessage.pni),
    signature: pniSignatureMessage.signature,
  };
}

export default class MessageSender {
  pendingMessages: {
    [id: string]: PQueue;
  };

  constructor(public readonly server: WebAPIType) {
    this.pendingMessages = {};
  }

  async queueJobForIdentifier<T>(
    identifier: string,
    runJob: () => Promise<T>
  ): Promise<T> {
    const { id } = await window.ConversationController.getOrCreateAndWait(
      identifier,
      'private'
    );
    this.pendingMessages[id] =
      this.pendingMessages[id] || new PQueue({ concurrency: 1 });

    const queue = this.pendingMessages[id];

    const taskWithTimeout = createTaskWithTimeout(
      runJob,
      `queueJobForIdentifier ${identifier} ${id}`
    );

    return queue.add(taskWithTimeout);
  }

  // Attachment upload functions

  static getRandomPadding(): Uint8Array {
    // Generate a random int from 1 and 512
    const buffer = getRandomBytes(2);
    const paddingLength = (new Uint16Array(buffer)[0] & 0x1ff) + 1;

    // Generate a random padding buffer of the chosen size
    return getRandomBytes(paddingLength);
  }

  // Proto assembly

  getTextAttachmentProto(
    attachmentAttrs: OutgoingTextAttachmentType
  ): Proto.TextAttachment {
    const textAttachment = new Proto.TextAttachment();

    if (attachmentAttrs.text) {
      textAttachment.text = attachmentAttrs.text;
    }

    textAttachment.textStyle = attachmentAttrs.textStyle
      ? Number(attachmentAttrs.textStyle)
      : 0;

    if (attachmentAttrs.textForegroundColor) {
      textAttachment.textForegroundColor = attachmentAttrs.textForegroundColor;
    }

    if (attachmentAttrs.textBackgroundColor) {
      textAttachment.textBackgroundColor = attachmentAttrs.textBackgroundColor;
    }

    if (attachmentAttrs.preview) {
      textAttachment.preview = {
        image: attachmentAttrs.preview.image,
        title: attachmentAttrs.preview.title,
        url: attachmentAttrs.preview.url,
      };
    }

    if (attachmentAttrs.gradient) {
      textAttachment.gradient = attachmentAttrs.gradient;
      textAttachment.background = 'gradient';
    } else {
      textAttachment.color = attachmentAttrs.color;
      textAttachment.background = 'color';
    }

    return textAttachment;
  }

  async getDataMessage(
    options: Readonly<MessageOptionsType>
  ): Promise<Uint8Array> {
    const message = await this.getHydratedMessage(options);
    return message.encode();
  }

  async getStoryMessage({
    allowsReplies,
    bodyRanges,
    fileAttachment,
    groupV2,
    profileKey,
    textAttachment,
  }: {
    allowsReplies?: boolean;
    bodyRanges?: Array<RawBodyRange>;
    fileAttachment?: UploadedAttachmentType;
    groupV2?: GroupV2InfoType;
    profileKey: Uint8Array;
    textAttachment?: OutgoingTextAttachmentType;
  }): Promise<Proto.StoryMessage> {
    const storyMessage = new Proto.StoryMessage();

    storyMessage.profileKey = profileKey;

    if (fileAttachment) {
      if (bodyRanges) {
        storyMessage.bodyRanges = bodyRanges;
      }
      try {
        storyMessage.fileAttachment = fileAttachment;
      } catch (error) {
        if (error instanceof HTTPError) {
          throw new MessageError(storyMessage, error);
        } else {
          throw error;
        }
      }
    }

    if (textAttachment) {
      storyMessage.textAttachment = this.getTextAttachmentProto(textAttachment);
    }

    if (groupV2) {
      const groupV2Context = new Proto.GroupContextV2();
      groupV2Context.masterKey = groupV2.masterKey;
      groupV2Context.revision = groupV2.revision;

      if (groupV2.groupChange) {
        groupV2Context.groupChange = groupV2.groupChange;
      }

      storyMessage.group = groupV2Context;
    }

    storyMessage.allowsReplies = Boolean(allowsReplies);

    return storyMessage;
  }

  async getContentMessage(
    options: Readonly<MessageOptionsType> &
      Readonly<{
        includePniSignatureMessage?: boolean;
      }>
  ): Promise<Proto.Content> {
    const message = await this.getHydratedMessage(options);
    const dataMessage = message.toProto();

    const contentMessage = new Proto.Content();
    if (options.editedMessageTimestamp) {
      const editMessage = new Proto.EditMessage();
      editMessage.dataMessage = dataMessage;
      editMessage.targetSentTimestamp = Long.fromNumber(
        options.editedMessageTimestamp
      );
      contentMessage.editMessage = editMessage;
    } else {
      contentMessage.dataMessage = dataMessage;
    }

    const { includePniSignatureMessage } = options;
    if (includePniSignatureMessage) {
      strictAssert(
        message.recipients.length === 1,
        'getContentMessage: includePniSignatureMessage is single recipient only'
      );

      const conversation = window.ConversationController.get(
        message.recipients[0]
      );

      addPniSignatureMessageToProto({
        conversation,
        proto: contentMessage,
        reason: `getContentMessage(${message.timestamp})`,
      });
    }

    return contentMessage;
  }

  async getHydratedMessage(
    attributes: Readonly<MessageOptionsType>
  ): Promise<Message> {
    const message = new Message(attributes);

    return message;
  }

  getTypingContentMessage(
    options: Readonly<{
      recipientId?: string;
      groupId?: Uint8Array;
      groupMembers: ReadonlyArray<string>;
      isTyping: boolean;
      timestamp?: number;
    }>
  ): Proto.Content {
    const ACTION_ENUM = Proto.TypingMessage.Action;
    const { recipientId, groupId, isTyping, timestamp } = options;

    if (!recipientId && !groupId) {
      throw new Error(
        'getTypingContentMessage: Need to provide either recipientId or groupId!'
      );
    }

    const finalTimestamp = timestamp || Date.now();
    const action = isTyping ? ACTION_ENUM.STARTED : ACTION_ENUM.STOPPED;

    const typingMessage = new Proto.TypingMessage();
    if (groupId) {
      typingMessage.groupId = groupId;
    }
    typingMessage.action = action;
    typingMessage.timestamp = Long.fromNumber(finalTimestamp);

    const contentMessage = new Proto.Content();
    contentMessage.typingMessage = typingMessage;

    if (recipientId) {
      addPniSignatureMessageToProto({
        conversation: window.ConversationController.get(recipientId),
        proto: contentMessage,
        reason: `getTypingContentMessage(${finalTimestamp})`,
      });
    }

    return contentMessage;
  }

  getAttrsFromGroupOptions(
    options: Readonly<GroupSendOptionsType>
  ): MessageOptionsType {
    const {
      attachments,
      bodyRanges,
      contact,
      deletedForEveryoneTimestamp,
      editedMessageTimestamp,
      expireTimer,
      flags,
      groupCallUpdate,
      groupV2,
      messageText,
      preview,
      profileKey,
      quote,
      reaction,
      sticker,
      storyContext,
      timestamp,
    } = options;

    if (!groupV2) {
      throw new Error(
        'getAttrsFromGroupOptions: No groupv2 information provided!'
      );
    }

    const myE164 = window.textsecure.storage.user.getNumber();
    const myUuid = window.textsecure.storage.user.getUuid()?.toString();

    const groupMembers = groupV2?.members || [];

    // We should always have a UUID but have this check just in case we don't.
    let isNotMe: (recipient: string) => boolean;
    if (myUuid) {
      isNotMe = r => r !== myE164 && r !== myUuid.toString();
    } else {
      isNotMe = r => r !== myE164;
    }

    const blockedIdentifiers = new Set(
      concat(
        window.storage.blocked.getBlockedUuids(),
        window.storage.blocked.getBlockedNumbers()
      )
    );

    const recipients = groupMembers.filter(
      recipient => isNotMe(recipient) && !blockedIdentifiers.has(recipient)
    );

    return {
      attachments,
      bodyRanges,
      body: messageText,
      contact,
      deletedForEveryoneTimestamp,
      editedMessageTimestamp,
      expireTimer,
      flags,
      groupCallUpdate,
      groupV2,
      preview,
      profileKey,
      quote,
      reaction,
      recipients,
      sticker,
      storyContext,
      timestamp,
    };
  }

  static createSyncMessage(): Proto.SyncMessage {
    const syncMessage = new Proto.SyncMessage();

    syncMessage.padding = this.getRandomPadding();

    return syncMessage;
  }

  // Low-level sends

  async sendMessage({
    messageOptions,
    contentHint,
    groupId,
    options,
    urgent,
    story,
    includePniSignatureMessage,
  }: Readonly<{
    messageOptions: MessageOptionsType;
    contentHint: number;
    groupId: string | undefined;
    options?: SendOptionsType;
    urgent: boolean;
    story?: boolean;
    includePniSignatureMessage?: boolean;
  }>): Promise<CallbackResultType> {
    const proto = await this.getContentMessage({
      ...messageOptions,
      includePniSignatureMessage,
    });

    return new Promise((resolve, reject) => {
      this.sendMessageProto({
        callback: (res: CallbackResultType) => {
          if (res.errors && res.errors.length > 0) {
            reject(new SendMessageProtoError(res));
          } else {
            resolve(res);
          }
        },
        contentHint,
        groupId,
        options,
        proto,
        recipients: messageOptions.recipients || [],
        timestamp: messageOptions.timestamp,
        urgent,
        story,
      });
    });
  }

  sendMessageProto({
    callback,
    contentHint,
    groupId,
    options,
    proto,
    recipients,
    sendLogCallback,
    story,
    timestamp,
    urgent,
  }: Readonly<{
    callback: (result: CallbackResultType) => void;
    contentHint: number;
    groupId: string | undefined;
    options?: SendOptionsType;
    proto: Proto.Content | Proto.DataMessage | PlaintextContent;
    recipients: ReadonlyArray<string>;
    sendLogCallback?: SendLogCallbackType;
    story?: boolean;
    timestamp: number;
    urgent: boolean;
  }>): void {
    const rejections = window.textsecure.storage.get(
      'signedKeyRotationRejected',
      0
    );
    if (rejections > 5) {
      throw new SignedPreKeyRotationError();
    }

    const outgoing = new OutgoingMessage({
      callback,
      contentHint,
      groupId,
      identifiers: recipients,
      message: proto,
      options,
      sendLogCallback,
      server: this.server,
      story,
      timestamp,
      urgent,
    });

    recipients.forEach(identifier => {
      void this.queueJobForIdentifier(identifier, async () =>
        outgoing.sendToIdentifier(identifier)
      );
    });
  }

  async sendMessageProtoAndWait({
    timestamp,
    recipients,
    proto,
    contentHint,
    groupId,
    options,
    urgent,
    story,
  }: Readonly<{
    timestamp: number;
    recipients: Array<string>;
    proto: Proto.Content | Proto.DataMessage | PlaintextContent;
    contentHint: number;
    groupId: string | undefined;
    options?: SendOptionsType;
    urgent: boolean;
    story?: boolean;
  }>): Promise<CallbackResultType> {
    return new Promise((resolve, reject) => {
      const callback = (result: CallbackResultType) => {
        if (result && result.errors && result.errors.length > 0) {
          reject(new SendMessageProtoError(result));
          return;
        }
        resolve(result);
      };

      this.sendMessageProto({
        callback,
        contentHint,
        groupId,
        options,
        proto,
        recipients,
        timestamp,
        urgent,
        story,
      });
    });
  }

  async sendIndividualProto({
    contentHint,
    groupId,
    identifier,
    options,
    proto,
    timestamp,
    urgent,
  }: Readonly<{
    contentHint: number;
    groupId?: string;
    identifier: string | undefined;
    options?: SendOptionsType;
    proto: Proto.DataMessage | Proto.Content | PlaintextContent;
    timestamp: number;
    urgent: boolean;
  }>): Promise<CallbackResultType> {
    assertDev(identifier, "Identifier can't be undefined");
    return new Promise((resolve, reject) => {
      const callback = (res: CallbackResultType) => {
        if (res && res.errors && res.errors.length > 0) {
          reject(new SendMessageProtoError(res));
        } else {
          resolve(res);
        }
      };
      this.sendMessageProto({
        callback,
        contentHint,
        groupId,
        options,
        proto,
        recipients: [identifier],
        timestamp,
        urgent,
      });
    });
  }

  // You might wonder why this takes a groupId. models/messages.resend() can send a group
  //   message to just one person.
  async sendMessageToIdentifier({
    attachments,
    bodyRanges,
    contact,
    contentHint,
    deletedForEveryoneTimestamp,
    editedMessageTimestamp,
    expireTimer,
    groupId,
    identifier,
    messageText,
    options,
    preview,
    profileKey,
    quote,
    reaction,
    sticker,
    storyContext,
    story,
    timestamp,
    urgent,
    includePniSignatureMessage,
  }: Readonly<{
    attachments: ReadonlyArray<UploadedAttachmentType> | undefined;
    bodyRanges?: ReadonlyArray<RawBodyRange>;
    contact?: ReadonlyArray<EmbeddedContactWithUploadedAvatar>;
    contentHint: number;
    deletedForEveryoneTimestamp: number | undefined;
    editedMessageTimestamp?: number;
    expireTimer: DurationInSeconds | undefined;
    groupId: string | undefined;
    identifier: string;
    messageText: string | undefined;
    options?: SendOptionsType;
    preview?: ReadonlyArray<OutgoingLinkPreviewType> | undefined;
    profileKey?: Uint8Array;
    quote?: OutgoingQuoteType;
    reaction?: ReactionType;
    sticker?: OutgoingStickerType;
    storyContext?: StoryContextType;
    story?: boolean;
    timestamp: number;
    urgent: boolean;
    includePniSignatureMessage?: boolean;
  }>): Promise<CallbackResultType> {
    return this.sendMessage({
      messageOptions: {
        attachments,
        bodyRanges,
        body: messageText,
        contact,
        deletedForEveryoneTimestamp,
        editedMessageTimestamp,
        expireTimer,
        preview,
        profileKey,
        quote,
        reaction,
        recipients: [identifier],
        sticker,
        storyContext,
        timestamp,
      },
      contentHint,
      groupId,
      options,
      story,
      urgent,
      includePniSignatureMessage,
    });
  }

  // Support for sync messages

  // Note: this is used for sending real messages to your other devices after sending a
  //   message to others.
  async sendSyncMessage({
    editedMessageTimestamp,
    encodedDataMessage,
    timestamp,
    destination,
    destinationUuid,
    expirationStartTimestamp,
    conversationIdsSentTo = [],
    conversationIdsWithSealedSender = new Set(),
    isUpdate,
    urgent,
    options,
    storyMessage,
    storyMessageRecipients,
  }: Readonly<{
    editedMessageTimestamp?: number;
    encodedDataMessage?: Uint8Array;
    timestamp: number;
    destination: string | undefined;
    destinationUuid: string | null | undefined;
    expirationStartTimestamp: number | null;
    conversationIdsSentTo?: Iterable<string>;
    conversationIdsWithSealedSender?: Set<string>;
    isUpdate?: boolean;
    urgent: boolean;
    options?: SendOptionsType;
    storyMessage?: Proto.StoryMessage;
    storyMessageRecipients?: ReadonlyArray<Proto.SyncMessage.Sent.IStoryMessageRecipient>;
  }>): Promise<CallbackResultType> {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const sentMessage = new Proto.SyncMessage.Sent();
    sentMessage.timestamp = Long.fromNumber(timestamp);

    if (editedMessageTimestamp && encodedDataMessage) {
      const dataMessage = Proto.DataMessage.decode(encodedDataMessage);
      const editMessage = new Proto.EditMessage();
      editMessage.dataMessage = dataMessage;
      editMessage.targetSentTimestamp = Long.fromNumber(editedMessageTimestamp);
      sentMessage.editMessage = editMessage;
    } else if (encodedDataMessage) {
      const dataMessage = Proto.DataMessage.decode(encodedDataMessage);
      sentMessage.message = dataMessage;
    }
    if (destination) {
      sentMessage.destination = destination;
    }
    if (destinationUuid) {
      sentMessage.destinationUuid = destinationUuid;
    }
    if (expirationStartTimestamp) {
      sentMessage.expirationStartTimestamp = Long.fromNumber(
        expirationStartTimestamp
      );
    }
    if (storyMessage) {
      sentMessage.storyMessage = storyMessage;
    }
    if (storyMessageRecipients) {
      sentMessage.storyMessageRecipients = storyMessageRecipients.slice();
    }

    if (isUpdate) {
      sentMessage.isRecipientUpdate = true;
    }

    // Though this field has 'unidentified' in the name, it should have entries for each
    //   number we sent to.
    if (!isEmpty(conversationIdsSentTo)) {
      sentMessage.unidentifiedStatus = [
        ...map(conversationIdsSentTo, conversationId => {
          const status =
            new Proto.SyncMessage.Sent.UnidentifiedDeliveryStatus();
          const conv = window.ConversationController.get(conversationId);
          if (conv) {
            const e164 = conv.get('e164');
            if (e164) {
              status.destination = e164;
            }
            const uuid = conv.get('uuid');
            if (uuid) {
              status.destinationUuid = uuid;
            }
          }
          status.unidentified =
            conversationIdsWithSealedSender.has(conversationId);
          return status;
        }),
      ];
    }

    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.sent = sentMessage;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendIndividualProto({
      identifier: myUuid.toString(),
      proto: contentMessage,
      timestamp,
      contentHint: ContentHint.RESENDABLE,
      options,
      urgent,
    });
  }

  static getRequestBlockSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const request = new Proto.SyncMessage.Request();
    request.type = Proto.SyncMessage.Request.Type.BLOCKED;
    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.request = request;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'blockSyncRequest',
      urgent: false,
    };
  }

  static getRequestConfigurationSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const request = new Proto.SyncMessage.Request();
    request.type = Proto.SyncMessage.Request.Type.CONFIGURATION;
    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.request = request;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'configurationSyncRequest',
      urgent: false,
    };
  }

  static getRequestGroupSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const request = new Proto.SyncMessage.Request();
    request.type = Proto.SyncMessage.Request.Type.GROUPS;
    const syncMessage = this.createSyncMessage();
    syncMessage.request = request;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'groupSyncRequest',
      urgent: false,
    };
  }

  static getRequestContactSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const request = new Proto.SyncMessage.Request();
    request.type = Proto.SyncMessage.Request.Type.CONTACTS;
    const syncMessage = this.createSyncMessage();
    syncMessage.request = request;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'contactSyncRequest',
      urgent: true,
    };
  }

  static getFetchManifestSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const fetchLatest = new Proto.SyncMessage.FetchLatest();
    fetchLatest.type = Proto.SyncMessage.FetchLatest.Type.STORAGE_MANIFEST;

    const syncMessage = this.createSyncMessage();
    syncMessage.fetchLatest = fetchLatest;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'fetchLatestManifestSync',
      urgent: false,
    };
  }

  static getFetchLocalProfileSyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const fetchLatest = new Proto.SyncMessage.FetchLatest();
    fetchLatest.type = Proto.SyncMessage.FetchLatest.Type.LOCAL_PROFILE;

    const syncMessage = this.createSyncMessage();
    syncMessage.fetchLatest = fetchLatest;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'fetchLocalProfileSync',
      urgent: false,
    };
  }

  static getRequestKeySyncMessage(): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const request = new Proto.SyncMessage.Request();
    request.type = Proto.SyncMessage.Request.Type.KEYS;

    const syncMessage = this.createSyncMessage();
    syncMessage.request = request;
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'keySyncRequest',
      urgent: true,
    };
  }

  async syncReadMessages(
    reads: ReadonlyArray<{
      senderUuid?: string;
      senderE164?: string;
      timestamp: number;
    }>,
    options?: Readonly<SendOptionsType>
  ): Promise<CallbackResultType> {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.read = [];
    for (let i = 0; i < reads.length; i += 1) {
      const proto = new Proto.SyncMessage.Read({
        ...reads[i],
        timestamp: Long.fromNumber(reads[i].timestamp),
      });

      syncMessage.read.push(proto);
    }
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendIndividualProto({
      identifier: myUuid.toString(),
      proto: contentMessage,
      timestamp: Date.now(),
      contentHint: ContentHint.RESENDABLE,
      options,
      urgent: true,
    });
  }

  async syncView(
    views: ReadonlyArray<{
      senderUuid?: string;
      senderE164?: string;
      timestamp: number;
    }>,
    options?: SendOptionsType
  ): Promise<CallbackResultType> {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.viewed = views.map(
      view =>
        new Proto.SyncMessage.Viewed({
          ...view,
          timestamp: Long.fromNumber(view.timestamp),
        })
    );
    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendIndividualProto({
      identifier: myUuid.toString(),
      proto: contentMessage,
      timestamp: Date.now(),
      contentHint: ContentHint.RESENDABLE,
      options,
      urgent: false,
    });
  }

  async syncViewOnceOpen(
    viewOnceOpens: ReadonlyArray<{
      senderUuid?: string;
      senderE164?: string;
      timestamp: number;
    }>,
    options?: Readonly<SendOptionsType>
  ): Promise<CallbackResultType> {
    if (viewOnceOpens.length !== 1) {
      throw new Error(
        `syncViewOnceOpen: ${viewOnceOpens.length} opens provided. Can only handle one.`
      );
    }
    const { senderE164, senderUuid, timestamp } = viewOnceOpens[0];

    if (!senderUuid) {
      throw new Error('syncViewOnceOpen: Missing senderUuid');
    }

    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const syncMessage = MessageSender.createSyncMessage();

    const viewOnceOpen = new Proto.SyncMessage.ViewOnceOpen();
    if (senderE164 !== undefined) {
      viewOnceOpen.sender = senderE164;
    }
    viewOnceOpen.senderUuid = senderUuid;
    viewOnceOpen.timestamp = Long.fromNumber(timestamp);
    syncMessage.viewOnceOpen = viewOnceOpen;

    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendIndividualProto({
      identifier: myUuid.toString(),
      proto: contentMessage,
      timestamp: Date.now(),
      contentHint: ContentHint.RESENDABLE,
      options,
      urgent: false,
    });
  }

  static getMessageRequestResponseSync(
    options: Readonly<{
      threadE164?: string;
      threadUuid?: string;
      groupId?: Uint8Array;
      type: number;
    }>
  ): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    const syncMessage = MessageSender.createSyncMessage();

    const response = new Proto.SyncMessage.MessageRequestResponse();
    if (options.threadE164 !== undefined) {
      response.threadE164 = options.threadE164;
    }
    if (options.threadUuid !== undefined) {
      response.threadUuid = options.threadUuid;
    }
    if (options.groupId) {
      response.groupId = options.groupId;
    }
    response.type = options.type;
    syncMessage.messageRequestResponse = response;

    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'messageRequestSync',
      urgent: false,
    };
  }

  static getStickerPackSync(
    operations: ReadonlyArray<{
      packId: string;
      packKey: string;
      installed: boolean;
    }>
  ): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();
    const ENUM = Proto.SyncMessage.StickerPackOperation.Type;

    const packOperations = operations.map(item => {
      const { packId, packKey, installed } = item;

      const operation = new Proto.SyncMessage.StickerPackOperation();
      operation.packId = Bytes.fromHex(packId);
      operation.packKey = Bytes.fromBase64(packKey);
      operation.type = installed ? ENUM.INSTALL : ENUM.REMOVE;

      return operation;
    });

    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.stickerPackOperation = packOperations;

    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'stickerPackSync',
      urgent: false,
    };
  }

  static getCallEventSync(
    peerUuid: string,
    callId: string,
    isVideoCall: boolean,
    isIncoming: boolean,
    isAccepted: boolean
  ): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();
    const syncMessage = MessageSender.createSyncMessage();

    const type = isVideoCall
      ? Proto.SyncMessage.CallEvent.Type.VIDEO_CALL
      : Proto.SyncMessage.CallEvent.Type.AUDIO_CALL;
    const direction = isIncoming
      ? Proto.SyncMessage.CallEvent.Direction.INCOMING
      : Proto.SyncMessage.CallEvent.Direction.OUTGOING;
    const event = isAccepted
      ? Proto.SyncMessage.CallEvent.Event.ACCEPTED
      : Proto.SyncMessage.CallEvent.Event.NOT_ACCEPTED;

    syncMessage.callEvent = new Proto.SyncMessage.CallEvent({
      peerUuid: uuidToBytes(peerUuid),
      callId: Long.fromString(callId),
      type,
      direction,
      event,
      timestamp: Long.fromNumber(Date.now()),
    });

    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'callEventSync',
      urgent: false,
    };
  }

  static getVerificationSync(
    destinationE164: string | undefined,
    destinationUuid: string | undefined,
    state: number,
    identityKey: Readonly<Uint8Array>
  ): SingleProtoJobData {
    const myUuid = window.textsecure.storage.user.getCheckedUuid();

    if (!destinationE164 && !destinationUuid) {
      throw new Error('syncVerification: Neither e164 nor UUID were provided');
    }

    const padding = MessageSender.getRandomPadding();

    const verified = new Proto.Verified();
    verified.state = state;
    if (destinationE164) {
      verified.destination = destinationE164;
    }
    if (destinationUuid) {
      verified.destinationUuid = destinationUuid;
    }
    verified.identityKey = identityKey;
    verified.nullMessage = padding;

    const syncMessage = MessageSender.createSyncMessage();
    syncMessage.verified = verified;

    const contentMessage = new Proto.Content();
    contentMessage.syncMessage = syncMessage;

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return {
      contentHint: ContentHint.RESENDABLE,
      identifier: myUuid.toString(),
      isSyncMessage: true,
      protoBase64: Bytes.toBase64(
        Proto.Content.encode(contentMessage).finish()
      ),
      type: 'verificationSync',
      urgent: false,
    };
  }

  // Sending messages to contacts

  async sendCallingMessage(
    recipientId: string,
    callingMessage: Readonly<Proto.ICallingMessage>,
    options?: Readonly<SendOptionsType>
  ): Promise<CallbackResultType> {
    const recipients = [recipientId];
    const finalTimestamp = Date.now();

    const contentMessage = new Proto.Content();
    contentMessage.callingMessage = callingMessage;

    const conversation = window.ConversationController.get(recipientId);

    addPniSignatureMessageToProto({
      conversation,
      proto: contentMessage,
      reason: `sendCallingMessage(${finalTimestamp})`,
    });

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendMessageProtoAndWait({
      timestamp: finalTimestamp,
      recipients,
      proto: contentMessage,
      contentHint: ContentHint.DEFAULT,
      groupId: undefined,
      options,
      urgent: true,
    });
  }

  async sendDeliveryReceipt(
    options: Readonly<{
      senderE164?: string;
      senderUuid?: string;
      timestamps: Array<number>;
      isDirectConversation: boolean;
      options?: Readonly<SendOptionsType>;
    }>
  ): Promise<CallbackResultType> {
    return this.sendReceiptMessage({
      ...options,
      type: Proto.ReceiptMessage.Type.DELIVERY,
    });
  }

  async sendReadReceipt(
    options: Readonly<{
      senderE164?: string;
      senderUuid?: string;
      timestamps: Array<number>;
      isDirectConversation: boolean;
      options?: Readonly<SendOptionsType>;
    }>
  ): Promise<CallbackResultType> {
    return this.sendReceiptMessage({
      ...options,
      type: Proto.ReceiptMessage.Type.READ,
    });
  }

  async sendViewedReceipt(
    options: Readonly<{
      senderE164?: string;
      senderUuid?: string;
      timestamps: Array<number>;
      isDirectConversation: boolean;
      options?: Readonly<SendOptionsType>;
    }>
  ): Promise<CallbackResultType> {
    return this.sendReceiptMessage({
      ...options,
      type: Proto.ReceiptMessage.Type.VIEWED,
    });
  }

  private async sendReceiptMessage({
    senderE164,
    senderUuid,
    timestamps,
    type,
    isDirectConversation,
    options,
  }: Readonly<{
    senderE164?: string;
    senderUuid?: string;
    timestamps: Array<number>;
    type: Proto.ReceiptMessage.Type;
    isDirectConversation: boolean;
    options?: Readonly<SendOptionsType>;
  }>): Promise<CallbackResultType> {
    if (!senderUuid && !senderE164) {
      throw new Error(
        'sendReceiptMessage: Neither uuid nor e164 was provided!'
      );
    }

    const timestamp = Date.now();

    const receiptMessage = new Proto.ReceiptMessage();
    receiptMessage.type = type;
    receiptMessage.timestamp = timestamps.map(receiptTimestamp =>
      Long.fromNumber(receiptTimestamp)
    );

    const contentMessage = new Proto.Content();
    contentMessage.receiptMessage = receiptMessage;

    if (isDirectConversation) {
      const conversation = window.ConversationController.get(
        senderUuid || senderE164
      );

      addPniSignatureMessageToProto({
        conversation,
        proto: contentMessage,
        reason: `sendReceiptMessage(${type}, ${timestamp})`,
      });
    }

    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

    return this.sendIndividualProto({
      identifier: senderUuid || senderE164,
      proto: contentMessage,
      timestamp,
      contentHint: ContentHint.RESENDABLE,
      options,
      urgent: false,
    });
  }

  static getNullMessage(
    options: Readonly<{
      padding?: Uint8Array;
    }> = {}
  ): Proto.Content {
    const nullMessage = new Proto.NullMessage();
    nullMessage.padding = options.padding || MessageSender.getRandomPadding();

    const contentMessage = new Proto.Content();
    contentMessage.nullMessage = nullMessage;

    return contentMessage;
  }

  // Group sends

  // Used to ensure that when we send to a group the old way, we save to the send log as
  //   we send to each recipient. Then we don't have a long delay between the first send
  //   and the final save to the database with all recipients.
  makeSendLogCallback({
    contentHint,
    messageId,
    proto,
    sendType,
    timestamp,
    urgent,
    hasPniSignatureMessage,
  }: Readonly<{
    contentHint: number;
    messageId?: string;
    proto: Buffer;
    sendType: SendTypesType;
    timestamp: number;
    urgent: boolean;
    hasPniSignatureMessage: boolean;
  }>): SendLogCallbackType {
    let initialSavePromise: Promise<number>;

    return async ({
      identifier,
      deviceIds,
    }: {
      identifier: string;
      deviceIds: Array<number>;
    }) => {
      if (!shouldSaveProto(sendType)) {
        return;
      }

      const conversation = window.ConversationController.get(identifier);
      if (!conversation) {
        log.warn(
          `makeSendLogCallback: Unable to find conversation for identifier ${identifier}`
        );
        return;
      }
      const recipientUuid = conversation.get('uuid');
      if (!recipientUuid) {
        log.warn(
          `makeSendLogCallback: Conversation ${conversation.idForLogging()} had no UUID`
        );
        return;
      }

      if (initialSavePromise === undefined) {
        initialSavePromise = window.Signal.Data.insertSentProto(
          {
            contentHint,
            proto,
            timestamp,
            urgent,
            hasPniSignatureMessage,
          },
          {
            recipients: { [recipientUuid]: deviceIds },
            messageIds: messageId ? [messageId] : [],
          }
        );
        await initialSavePromise;
      } else {
        const id = await initialSavePromise;
        await window.Signal.Data.insertProtoRecipients({
          id,
          recipientUuid,
          deviceIds,
        });
      }
    };
  }

  // No functions should really call this; since most group sends are now via Sender Key
  async sendGroupProto({
    contentHint,
    groupId,
    options,
    proto,
    recipients,
    sendLogCallback,
    story,
    timestamp = Date.now(),
    urgent,
  }: Readonly<{
    contentHint: number;
    groupId: string | undefined;
    options?: SendOptionsType;
    proto: Proto.Content;
    recipients: ReadonlyArray<string>;
    sendLogCallback?: SendLogCallbackType;
    story?: boolean;
    timestamp: number;
    urgent: boolean;
  }>): Promise<CallbackResultType> {
    const myE164 = window.textsecure.storage.user.getNumber();
    const myUuid = window.textsecure.storage.user.getUuid()?.toString();
    const identifiers = recipients.filter(id => id !== myE164 && id !== myUuid);

    if (identifiers.length === 0) {
      const dataMessage = proto.dataMessage
        ? Proto.DataMessage.encode(proto.dataMessage).finish()
        : undefined;

      const editMessage = proto.editMessage
        ? Proto.EditMessage.encode(proto.editMessage).finish()
        : undefined;

      return Promise.resolve({
        dataMessage,
        editMessage,
        errors: [],
        failoverIdentifiers: [],
        successfulIdentifiers: [],
        unidentifiedDeliveries: [],
        contentHint,
        urgent,
      });
    }

    return new Promise((resolve, reject) => {
      const callback = (res: CallbackResultType) => {
        if (res.errors && res.errors.length > 0) {
          reject(new SendMessageProtoError(res));
        } else {
          resolve(res);
        }
      };

      this.sendMessageProto({
        callback,
        contentHint,
        groupId,
        options,
        proto,
        recipients: identifiers,
        sendLogCallback,
        story,
        timestamp,
        urgent,
      });
    });
  }

  async getSenderKeyDistributionMessage(
    distributionId: string,
    {
      throwIfNotInDatabase,
      timestamp,
    }: { throwIfNotInDatabase?: boolean; timestamp: number }
  ): Promise<Proto.Content> {
    const ourUuid = window.textsecure.storage.user.getCheckedUuid();
    const ourDeviceId = parseIntOrThrow(
      window.textsecure.storage.user.getDeviceId(),
      'getSenderKeyDistributionMessage'
    );

    const protocolAddress = ProtocolAddress.new(
      ourUuid.toString(),
      ourDeviceId
    );
    const address = new QualifiedAddress(
      ourUuid,
      new Address(ourUuid, ourDeviceId)
    );

    const senderKeyDistributionMessage =
      await window.textsecure.storage.protocol.enqueueSenderKeyJob(
        address,
        async () => {
          const senderKeyStore = new SenderKeys({ ourUuid, zone: GLOBAL_ZONE });

          if (throwIfNotInDatabase) {
            const key = await senderKeyStore.getSenderKey(
              protocolAddress,
              distributionId
            );
            if (!key) {
              throw new NoSenderKeyError(
                `getSenderKeyDistributionMessage: Distribution ${distributionId} was not in database as expected`
              );
            }
          }

          return SenderKeyDistributionMessage.create(
            protocolAddress,
            distributionId,
            senderKeyStore
          );
        }
      );

    log.info(
      `getSenderKeyDistributionMessage: Building ${distributionId} with timestamp ${timestamp}`
    );
    const contentMessage = new Proto.Content();
    contentMessage.senderKeyDistributionMessage =
      senderKeyDistributionMessage.serialize();

    return contentMessage;
  }

  // The one group send exception - a message that should never be sent via sender key
  async sendSenderKeyDistributionMessage(
    {
      contentHint,
      distributionId,
      groupId,
      identifiers,
      throwIfNotInDatabase,
      story,
      urgent,
    }: Readonly<{
      contentHint?: number;
      distributionId: string;
      groupId: string | undefined;
      identifiers: ReadonlyArray<string>;
      throwIfNotInDatabase?: boolean;
      story?: boolean;
      urgent: boolean;
    }>,
    options?: Readonly<SendOptionsType>
  ): Promise<CallbackResultType> {
    const timestamp = Date.now();
    const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;
    const contentMessage = await this.getSenderKeyDistributionMessage(
      distributionId,
      {
        throwIfNotInDatabase,
        timestamp,
      }
    );

    const sendLogCallback =
      identifiers.length > 1
        ? this.makeSendLogCallback({
            contentHint: contentHint ?? ContentHint.IMPLICIT,
            proto: Buffer.from(Proto.Content.encode(contentMessage).finish()),
            sendType: 'senderKeyDistributionMessage',
            timestamp,
            urgent,
            hasPniSignatureMessage: false,
          })
        : undefined;

    return this.sendGroupProto({
      contentHint: contentHint ?? ContentHint.IMPLICIT,
      groupId,
      options,
      proto: contentMessage,
      recipients: identifiers,
      sendLogCallback,
      story,
      timestamp,
      urgent,
    });
  }

  // Simple pass-throughs

  // Note: instead of updating these functions, or adding new ones, remove these and go
  //   directly to window.textsecure.messaging.server.<function>

  async getProfile(
    uuid: UUID,
    options: GetProfileOptionsType | GetProfileUnauthOptionsType
  ): ReturnType<WebAPIType['getProfile']> {
    if (options.accessKey !== undefined) {
      return this.server.getProfileUnauth(uuid.toString(), options);
    }

    return this.server.getProfile(uuid.toString(), options);
  }

  async getAvatar(path: string): Promise<ReturnType<WebAPIType['getAvatar']>> {
    return this.server.getAvatar(path);
  }

  async getSticker(
    packId: string,
    stickerId: number
  ): Promise<ReturnType<WebAPIType['getSticker']>> {
    return this.server.getSticker(packId, stickerId);
  }

  async getStickerPackManifest(
    packId: string
  ): Promise<ReturnType<WebAPIType['getStickerPackManifest']>> {
    return this.server.getStickerPackManifest(packId);
  }

  async createGroup(
    group: Readonly<Proto.IGroup>,
    options: Readonly<GroupCredentialsType>
  ): Promise<void> {
    return this.server.createGroup(group, options);
  }

  async uploadGroupAvatar(
    avatar: Readonly<Uint8Array>,
    options: Readonly<GroupCredentialsType>
  ): Promise<string> {
    return this.server.uploadGroupAvatar(avatar, options);
  }

  async getGroup(
    options: Readonly<GroupCredentialsType>
  ): Promise<Proto.Group> {
    return this.server.getGroup(options);
  }

  async getGroupFromLink(
    groupInviteLink: string | undefined,
    auth: Readonly<GroupCredentialsType>
  ): Promise<Proto.GroupJoinInfo> {
    return this.server.getGroupFromLink(groupInviteLink, auth);
  }

  async getGroupLog(
    options: GetGroupLogOptionsType,
    credentials: GroupCredentialsType
  ): Promise<GroupLogResponseType> {
    return this.server.getGroupLog(options, credentials);
  }

  async getGroupAvatar(key: string): Promise<Uint8Array> {
    return this.server.getGroupAvatar(key);
  }

  async modifyGroup(
    changes: Readonly<Proto.GroupChange.IActions>,
    options: Readonly<GroupCredentialsType>,
    inviteLinkBase64?: string
  ): Promise<Proto.IGroupChange> {
    return this.server.modifyGroup(changes, options, inviteLinkBase64);
  }

  async fetchLinkPreviewMetadata(
    href: string,
    abortSignal: AbortSignal
  ): Promise<null | LinkPreviewMetadata> {
    return this.server.fetchLinkPreviewMetadata(href, abortSignal);
  }

  async fetchLinkPreviewImage(
    href: string,
    abortSignal: AbortSignal
  ): Promise<null | LinkPreviewImage> {
    return this.server.fetchLinkPreviewImage(href, abortSignal);
  }

  async makeProxiedRequest(
    url: string,
    options?: Readonly<ProxiedRequestOptionsType>
  ): Promise<ReturnType<WebAPIType['makeProxiedRequest']>> {
    return this.server.makeProxiedRequest(url, options);
  }

  async getStorageCredentials(): Promise<StorageServiceCredentials> {
    return this.server.getStorageCredentials();
  }

  async getStorageManifest(
    options: Readonly<StorageServiceCallOptionsType>
  ): Promise<Uint8Array> {
    return this.server.getStorageManifest(options);
  }

  async getStorageRecords(
    data: Readonly<Uint8Array>,
    options: Readonly<StorageServiceCallOptionsType>
  ): Promise<Uint8Array> {
    return this.server.getStorageRecords(data, options);
  }

  async modifyStorageRecords(
    data: Readonly<Uint8Array>,
    options: Readonly<StorageServiceCallOptionsType>
  ): Promise<Uint8Array> {
    return this.server.modifyStorageRecords(data, options);
  }

  async getGroupMembershipToken(
    options: Readonly<GroupCredentialsType>
  ): Promise<Proto.GroupExternalCredential> {
    return this.server.getGroupExternalCredential(options);
  }

  public async sendChallengeResponse(
    challengeResponse: Readonly<ChallengeType>
  ): Promise<void> {
    return this.server.sendChallengeResponse(challengeResponse);
  }

  async putProfile(
    jsonData: Readonly<ProfileRequestDataType>
  ): Promise<UploadAvatarHeadersType | undefined> {
    return this.server.putProfile(jsonData);
  }

  async uploadAvatar(
    requestHeaders: Readonly<UploadAvatarHeadersType>,
    avatarData: Readonly<Uint8Array>
  ): Promise<string> {
    return this.server.uploadAvatar(requestHeaders, avatarData);
  }
}
