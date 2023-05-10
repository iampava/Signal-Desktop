// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { groupBy, isEmpty, isNumber, isObject, map, omit } from 'lodash';
import { createSelector } from 'reselect';
import filesize from 'filesize';
import getDirection from 'direction';
import emojiRegex from 'emoji-regex';
import LinkifyIt from 'linkify-it';
import type { ReadonlyDeep } from 'type-fest';

import type { StateType } from '../reducer';
import type {
  LastMessageStatus,
  MessageAttributesType,
  MessageReactionType,
  ShallowChallengeError,
} from '../../model-types.d';

import type {
  Contact as SmartMessageDetailContact,
  OwnProps as SmartMessageDetailPropsType,
} from '../smart/MessageDetail';
import type { TimelineItemType } from '../../components/conversation/TimelineItem';
import type { PropsData } from '../../components/conversation/Message';
import type { PropsData as TimelineMessagePropsData } from '../../components/conversation/TimelineMessage';
import { TextDirection } from '../../components/conversation/Message';
import type { PropsData as TimerNotificationProps } from '../../components/conversation/TimerNotification';
import type { PropsData as ChangeNumberNotificationProps } from '../../components/conversation/ChangeNumberNotification';
import type { PropsData as SafetyNumberNotificationProps } from '../../components/conversation/SafetyNumberNotification';
import type { PropsData as VerificationNotificationProps } from '../../components/conversation/VerificationNotification';
import type { PropsDataType as GroupsV2Props } from '../../components/conversation/GroupV2Change';
import type { PropsDataType as GroupV1MigrationPropsType } from '../../components/conversation/GroupV1Migration';
import type { PropsDataType as DeliveryIssuePropsType } from '../../components/conversation/DeliveryIssueNotification';
import type { PropsType as PaymentEventNotificationPropsType } from '../../components/conversation/PaymentEventNotification';
import type { PropsDataType as ConversationMergePropsType } from '../../components/conversation/ConversationMergeNotification';
import type {
  PropsData as GroupNotificationProps,
  ChangeType,
} from '../../components/conversation/GroupNotification';
import type { PropsType as ProfileChangeNotificationPropsType } from '../../components/conversation/ProfileChangeNotification';
import type { QuotedAttachmentType } from '../../components/conversation/Quote';

import { getDomain, isStickerPack } from '../../types/LinkPreview';
import type { UUIDStringType } from '../../types/UUID';

import type { EmbeddedContactType } from '../../types/EmbeddedContact';
import { embeddedContactSelector } from '../../types/EmbeddedContact';
import type {
  HydratedBodyRangeMention,
  HydratedBodyRangesType,
} from '../../types/BodyRange';
import { BodyRange, hydrateRanges } from '../../types/BodyRange';
import type { AssertProps } from '../../types/Util';
import type { LinkPreviewType } from '../../types/message/LinkPreviews';
import { getMentionsRegex } from '../../types/Message';
import { CallMode } from '../../types/Calling';
import { SignalService as Proto } from '../../protobuf';
import type { AttachmentType } from '../../types/Attachment';
import { isVoiceMessage, canBeDownloaded } from '../../types/Attachment';
import { ReadStatus } from '../../messages/MessageReadStatus';

import type { CallingNotificationType } from '../../util/callingNotification';
import { missingCaseError } from '../../util/missingCaseError';
import { getRecipients } from '../../util/getRecipients';
import { getOwn } from '../../util/getOwn';
import { isNotNil } from '../../util/isNotNil';
import { isMoreRecentThan } from '../../util/timestamp';
import * as iterables from '../../util/iterables';
import { strictAssert } from '../../util/assert';
import { canEditMessages } from '../../util/canEditMessages';

import { getAccountSelector } from './accounts';
import {
  getContactNameColorSelector,
  getConversationSelector,
  getSelectedMessageIds,
  getTargetedMessage,
  isMissingRequiredProfileSharing,
  getMessages,
} from './conversations';
import {
  getIntl,
  getRegionCode,
  getUserACI,
  getUserConversationId,
  getUserNumber,
  getUserPNI,
} from './user';

import type {
  ConversationType,
  MessageWithUIFieldsType,
} from '../ducks/conversations';

import type { AccountSelectorType } from './accounts';
import type { CallSelectorType, CallStateType } from './calling';
import type {
  GetConversationByIdType,
  ContactNameColorSelectorType,
} from './conversations';
import {
  SendStatus,
  isDelivered,
  isFailed,
  isMessageJustForMe,
  isRead,
  isSent,
  isViewed,
  maxStatus,
  someSendStatus,
} from '../../messages/MessageSendState';
import * as log from '../../logging/log';
import { getConversationColorAttributes } from '../../util/getConversationColorAttributes';
import { DAY, HOUR, DurationInSeconds } from '../../util/durations';
import { getStoryReplyText } from '../../util/getStoryReplyText';
import type { MessageAttributesWithPaymentEvent } from '../../messages/helpers';
import {
  isIncoming,
  isOutgoing,
  messageHasPaymentEvent,
  isStory,
} from '../../messages/helpers';

import { calculateExpirationTimestamp } from '../../util/expirationTimer';
import { isSignalConversation } from '../../util/isSignalConversation';
import type { AnyPaymentEvent } from '../../types/Payment';
import { isPaymentNotificationEvent } from '../../types/Payment';
import { getTitleNoDefault, getNumber } from '../../util/getTitle';

export { isIncoming, isOutgoing, isStory };

const MAX_EDIT_COUNT = 10;
const THREE_HOURS = 3 * HOUR;
const linkify = LinkifyIt();

type FormattedContact = Partial<ConversationType> &
  Pick<
    ConversationType,
    | 'acceptedMessageRequest'
    | 'id'
    | 'isMe'
    | 'sharedGroupNames'
    | 'title'
    | 'type'
    | 'unblurredAvatarPath'
  >;
export type PropsForMessage = Omit<TimelineMessagePropsData, 'interactionMode'>;
export type MessagePropsType = Omit<
  PropsForMessage,
  'renderingContext' | 'menu' | 'contextMenu'
>;
type PropsForUnsupportedMessage = {
  canProcessNow: boolean;
  contact: FormattedContact;
};

export type GetPropsForBubbleOptions = Readonly<{
  conversationSelector: GetConversationByIdType;
  ourConversationId?: string;
  ourNumber?: string;
  ourACI?: UUIDStringType;
  ourPNI?: UUIDStringType;
  targetedMessageId?: string;
  targetedMessageCounter?: number;
  selectedMessageIds: ReadonlyArray<string> | undefined;
  regionCode?: string;
  callSelector: CallSelectorType;
  activeCall?: CallStateType;
  accountSelector: AccountSelectorType;
  contactNameColorSelector: ContactNameColorSelectorType;
}>;

export function hasErrors(
  message: Pick<MessageWithUIFieldsType, 'errors'>
): boolean {
  return message.errors ? message.errors.length > 0 : false;
}

export function getSource(
  message: Pick<MessageAttributesType, 'type' | 'source'>,
  ourNumber: string | undefined
): string | undefined {
  if (isIncoming(message)) {
    return message.source;
  }
  if (!isOutgoing(message)) {
    log.warn('message.getSource: Called for non-incoming/non-outoing message');
  }

  return ourNumber;
}

export function getSourceDevice(
  message: MessageWithUIFieldsType,
  ourDeviceId: number
): string | number | undefined {
  const { sourceDevice } = message;

  if (isIncoming(message)) {
    return sourceDevice;
  }
  if (!isOutgoing(message)) {
    log.warn(
      'message.getSourceDevice: Called for non-incoming/non-outoing message'
    );
  }

  return sourceDevice || ourDeviceId;
}

export function getSourceUuid(
  message: Pick<MessageAttributesType, 'type' | 'sourceUuid'>,
  ourACI: string | undefined
): string | undefined {
  if (isIncoming(message)) {
    return message.sourceUuid;
  }
  if (!isOutgoing(message)) {
    log.warn(
      'message.getSourceUuid: Called for non-incoming/non-outoing message'
    );
  }

  return ourACI;
}

export type GetContactOptions = Pick<
  GetPropsForBubbleOptions,
  | 'conversationSelector'
  | 'ourConversationId'
  | 'ourNumber'
  | 'ourACI'
  | 'ourPNI'
>;

export function getContactId(
  message: MessageWithUIFieldsType,
  {
    conversationSelector,
    ourConversationId,
    ourNumber,
    ourACI,
  }: GetContactOptions
): string | undefined {
  const source = getSource(message, ourNumber);
  const sourceUuid = getSourceUuid(message, ourACI);

  if (!source && !sourceUuid) {
    return ourConversationId;
  }

  const conversation = conversationSelector(sourceUuid || source);
  return conversation.id;
}

// TODO: DESKTOP-2145
export function getContact(
  message: MessageWithUIFieldsType,
  {
    conversationSelector,
    ourConversationId,
    ourNumber,
    ourACI,
  }: GetContactOptions
): ConversationType {
  const source = getSource(message, ourNumber);
  const sourceUuid = getSourceUuid(message, ourACI);

  if (!source && !sourceUuid) {
    return conversationSelector(ourConversationId);
  }

  return conversationSelector(sourceUuid || source);
}

export function getConversation(
  message: Pick<MessageWithUIFieldsType, 'conversationId'>,
  conversationSelector: GetConversationByIdType
): ConversationType {
  return conversationSelector(message.conversationId);
}

// Message

export const getAttachmentsForMessage = ({
  sticker,
  attachments = [],
}: MessageWithUIFieldsType): Array<AttachmentType> => {
  if (sticker && sticker.data) {
    const { data } = sticker;

    // We don't show anything if we don't have the sticker or the blurhash...
    if (!data.blurHash && (data.pending || !data.path)) {
      return [];
    }

    return [
      {
        ...data,
        // We want to show the blurhash for stickers, not the spinner
        pending: false,
        url: data.path
          ? window.Signal.Migrations.getAbsoluteAttachmentPath(data.path)
          : undefined,
      },
    ];
  }

  return attachments
    .filter(attachment => !attachment.error || canBeDownloaded(attachment))
    .map(attachment => getPropsForAttachment(attachment))
    .filter(isNotNil);
};

export const processBodyRanges = (
  { bodyRanges }: Pick<MessageWithUIFieldsType, 'bodyRanges'>,
  options: { conversationSelector: GetConversationByIdType }
): HydratedBodyRangesType | undefined => {
  if (!bodyRanges) {
    return undefined;
  }

  return hydrateRanges(bodyRanges, options.conversationSelector)?.sort(
    (a, b) => b.start - a.start
  );
};

export const extractHydratedMentions = (
  { bodyRanges }: Pick<MessageWithUIFieldsType, 'bodyRanges'>,
  options: { conversationSelector: GetConversationByIdType }
): ReadonlyArray<HydratedBodyRangeMention> | undefined => {
  if (!bodyRanges) {
    return undefined;
  }

  return bodyRanges
    .filter(BodyRange.isMention)
    .map(range => {
      const { conversationSelector } = options;
      const conversation = conversationSelector(range.mentionUuid);

      return {
        ...range,
        conversationID: conversation.id,
        replacementText: conversation.title,
      };
    })
    .sort((a, b) => b.start - a.start);
};

const getAuthorForMessage = (
  message: MessageWithUIFieldsType,
  options: GetContactOptions
): PropsData['author'] => {
  const {
    acceptedMessageRequest,
    avatarPath,
    badges,
    color,
    id,
    isMe,
    name,
    phoneNumber,
    profileName,
    sharedGroupNames,
    title,
    unblurredAvatarPath,
  } = getContact(message, options);

  const unsafe = {
    acceptedMessageRequest,
    avatarPath,
    badges,
    color,
    id,
    isMe,
    name,
    phoneNumber,
    profileName,
    sharedGroupNames,
    title,
    unblurredAvatarPath,
  };

  const safe: AssertProps<PropsData['author'], typeof unsafe> = unsafe;

  return safe;
};

const getPreviewsForMessage = ({
  preview: previews = [],
}: MessageWithUIFieldsType): Array<LinkPreviewType> => {
  return previews.map(preview => ({
    ...preview,
    isStickerPack: isStickerPack(preview.url),
    domain: getDomain(preview.url),
    image: preview.image ? getPropsForAttachment(preview.image) : undefined,
  }));
};

const getReactionsForMessage = (
  { reactions = [] }: MessageWithUIFieldsType,
  { conversationSelector }: { conversationSelector: GetConversationByIdType }
) => {
  const reactionBySender = new Map<string, MessageReactionType>();
  for (const reaction of reactions) {
    const existingReaction = reactionBySender.get(reaction.fromId);
    if (!existingReaction || reaction.timestamp > existingReaction.timestamp) {
      reactionBySender.set(reaction.fromId, reaction);
    }
  }

  const reactionsWithEmpties = reactionBySender.values();
  const reactionsWithEmoji = iterables.filter(
    reactionsWithEmpties,
    re => re.emoji
  );
  const formattedReactions = iterables.map(reactionsWithEmoji, re => {
    const c = conversationSelector(re.fromId);

    type From = NonNullable<PropsData['reactions']>[0]['from'];

    const {
      acceptedMessageRequest,
      avatarPath,
      badges,
      color,
      id,
      isMe,
      name,
      phoneNumber,
      profileName,
      sharedGroupNames,
      title,
    } = c;

    const unsafe = {
      acceptedMessageRequest,
      avatarPath,
      badges,
      color,
      id,
      isMe,
      name,
      phoneNumber,
      profileName,
      sharedGroupNames,
      title,
    };

    const from: AssertProps<From, typeof unsafe> = unsafe;

    strictAssert(re.emoji, 'Expected all reactions to have an emoji');

    return {
      emoji: re.emoji,
      timestamp: re.timestamp,
      from,
    };
  });

  return [...formattedReactions];
};

const getPropsForStoryReplyContext = (
  message: Pick<
    MessageWithUIFieldsType,
    'body' | 'conversationId' | 'storyReaction' | 'storyReplyContext'
  >,
  {
    conversationSelector,
    ourConversationId,
  }: {
    conversationSelector: GetConversationByIdType;
    ourConversationId?: string;
  }
): PropsData['storyReplyContext'] => {
  const { storyReaction, storyReplyContext } = message;
  if (!storyReplyContext) {
    return undefined;
  }

  const contact = conversationSelector(storyReplyContext.authorUuid);

  const authorTitle = contact.firstName || contact.title;
  const isFromMe = contact.id === ourConversationId;

  const conversation = getConversation(message, conversationSelector);

  const { conversationColor, customColor } =
    getConversationColorAttributes(conversation);

  return {
    authorTitle,
    conversationColor,
    customColor,
    emoji: storyReaction?.emoji,
    isFromMe,
    rawAttachment: storyReplyContext.attachment
      ? processQuoteAttachment(storyReplyContext.attachment)
      : undefined,
    storyId: storyReplyContext.messageId,
    text: getStoryReplyText(window.i18n, storyReplyContext.attachment),
  };
};

export const getPropsForQuote = (
  message: ReadonlyDeep<
    Pick<MessageWithUIFieldsType, 'conversationId' | 'quote'>
  >,
  {
    conversationSelector,
    ourConversationId,
  }: {
    conversationSelector: GetConversationByIdType;
    ourConversationId?: string;
  }
): PropsData['quote'] => {
  const { quote } = message;
  if (!quote) {
    return undefined;
  }

  const {
    author,
    authorUuid,
    id: sentAt,
    isViewOnce,
    isGiftBadge: isTargetGiftBadge,
    referencedMessageNotFound,
    payment,
    text = '',
  } = quote;

  const contact = conversationSelector(authorUuid || author);

  const authorId = contact.id;
  const authorName = contact.name;
  const authorPhoneNumber = contact.phoneNumber;
  const authorProfileName = contact.profileName;
  const authorTitle = contact.title;
  const isFromMe = authorId === ourConversationId;

  const firstAttachment = quote.attachments && quote.attachments[0];
  const conversation = getConversation(message, conversationSelector);

  const { conversationColor, customColor } =
    getConversationColorAttributes(conversation);

  return {
    authorId,
    authorName,
    authorPhoneNumber,
    authorProfileName,
    authorTitle,
    bodyRanges: processBodyRanges(quote, { conversationSelector }),
    conversationColor,
    conversationTitle: conversation.title,
    customColor,
    isFromMe,
    rawAttachment: firstAttachment
      ? processQuoteAttachment(firstAttachment)
      : undefined,
    payment,
    isGiftBadge: Boolean(isTargetGiftBadge),
    isViewOnce,
    referencedMessageNotFound,
    sentAt: Number(sentAt),
    text,
  };
};

export type GetPropsForMessageOptions = Pick<
  GetPropsForBubbleOptions,
  | 'conversationSelector'
  | 'ourConversationId'
  | 'ourACI'
  | 'ourPNI'
  | 'ourNumber'
  | 'targetedMessageId'
  | 'targetedMessageCounter'
  | 'selectedMessageIds'
  | 'regionCode'
  | 'accountSelector'
  | 'contactNameColorSelector'
>;

function getTextAttachment(
  message: MessageWithUIFieldsType
): AttachmentType | undefined {
  return (
    message.bodyAttachment && getPropsForAttachment(message.bodyAttachment)
  );
}

function getPayment(
  message: MessageWithUIFieldsType
): AnyPaymentEvent | undefined {
  return message.payment;
}

export function cleanBodyForDirectionCheck(text: string): string {
  const MENTIONS_REGEX = getMentionsRegex();
  const EMOJI_REGEX = emojiRegex();
  const initial = text.replace(MENTIONS_REGEX, '').replace(EMOJI_REGEX, '');

  const linkMatches = linkify.match(initial);

  if (!linkMatches || linkMatches.length === 0) {
    return initial;
  }

  let result = '';
  let lastIndex = 0;

  linkMatches.forEach(match => {
    if (lastIndex < match.index) {
      result += initial.slice(lastIndex, match.index);
    }

    // drop the actual contents of the match

    lastIndex = match.lastIndex;
  });

  if (lastIndex < initial.length) {
    result += initial.slice(lastIndex);
  }

  return result;
}

function getTextDirection(body?: string): TextDirection {
  if (!body) {
    return TextDirection.None;
  }

  const cleaned = cleanBodyForDirectionCheck(body);
  const direction = getDirection(cleaned);
  switch (direction) {
    case 'ltr':
      return TextDirection.LeftToRight;
    case 'rtl':
      return TextDirection.RightToLeft;
    case 'neutral':
      return TextDirection.Default;
    default: {
      const unexpected: never = direction;
      log.warn(`getTextDirection: unexpected direction ${unexpected}`);
      return TextDirection.None;
    }
  }
}

export const getPropsForMessage = (
  message: MessageWithUIFieldsType,
  options: GetPropsForMessageOptions
): Omit<PropsForMessage, 'renderingContext' | 'menu' | 'contextMenu'> => {
  const attachments = getAttachmentsForMessage(message);
  const bodyRanges = processBodyRanges(message, options);
  const author = getAuthorForMessage(message, options);
  const previews = getPreviewsForMessage(message);
  const reactions = getReactionsForMessage(message, options);
  const quote = getPropsForQuote(message, options);
  const storyReplyContext = getPropsForStoryReplyContext(message, options);
  const textAttachment = getTextAttachment(message);
  const payment = getPayment(message);

  const {
    accountSelector,
    conversationSelector,
    ourConversationId,
    ourNumber,
    ourACI,
    regionCode,
    targetedMessageId,
    targetedMessageCounter,
    selectedMessageIds,
    contactNameColorSelector,
  } = options;

  const { expireTimer, expirationStartTimestamp, conversationId } = message;
  const expirationLength = expireTimer
    ? DurationInSeconds.toMillis(expireTimer)
    : undefined;

  const conversation = getConversation(message, conversationSelector);
  const isGroup = conversation.type === 'group';
  const { sticker } = message;

  const isMessageTapToView = isTapToView(message);

  const isTargeted = message.id === targetedMessageId;
  const isSelected = selectedMessageIds?.includes(message.id) ?? false;
  const isSelectMode = selectedMessageIds != null;

  const selectedReaction = (
    (message.reactions || []).find(re => re.fromId === ourConversationId) || {}
  ).emoji;

  const authorId = getContactId(message, {
    conversationSelector,
    ourConversationId,
    ourNumber,
    ourACI,
  });
  const contactNameColor = contactNameColorSelector(conversationId, authorId);

  const { conversationColor, customColor } =
    getConversationColorAttributes(conversation);

  return {
    attachments,
    author,
    bodyRanges,
    previews,
    quote,
    reactions,
    storyReplyContext,
    textAttachment,
    payment,
    canCopy: canCopy(message),
    canEditMessage: canEditMessage(message),
    canDeleteForEveryone: canDeleteForEveryone(message),
    canDownload: canDownload(message, conversationSelector),
    canReact: canReact(message, ourConversationId, conversationSelector),
    canReply: canReply(message, ourConversationId, conversationSelector),
    canRetry: hasErrors(message),
    canRetryDeleteForEveryone: canRetryDeleteForEveryone(message),
    contact: getPropsForEmbeddedContact(message, regionCode, accountSelector),
    contactNameColor,
    conversationColor,
    conversationId,
    conversationTitle: conversation.title,
    conversationType: isGroup ? 'group' : 'direct',
    customColor,
    deletedForEveryone: message.deletedForEveryone || false,
    direction: isIncoming(message) ? 'incoming' : 'outgoing',
    displayLimit: message.displayLimit,
    expirationLength,
    expirationTimestamp: calculateExpirationTimestamp({
      expireTimer,
      expirationStartTimestamp,
    }),
    giftBadge: message.giftBadge,
    id: message.id,
    isBlocked: conversation.isBlocked || false,
    isEditedMessage: Boolean(message.editHistory),
    isMessageRequestAccepted: conversation?.acceptedMessageRequest ?? true,
    isSelected,
    isSelectMode,
    isSpoilerExpanded: message.isSpoilerExpanded,
    isSticker: Boolean(sticker),
    isTargeted,
    isTargetedCounter: isTargeted ? targetedMessageCounter : undefined,
    isTapToView: isMessageTapToView,
    isTapToViewError:
      isMessageTapToView && isIncoming(message) && message.isTapToViewInvalid,
    isTapToViewExpired: isMessageTapToView && message.isErased,
    readStatus: message.readStatus ?? ReadStatus.Read,
    selectedReaction,
    status: getMessagePropStatus(message, ourConversationId),
    text: message.body,
    textDirection: getTextDirection(message.body),
    timestamp: message.sent_at,
  };
};

// This is getPropsForMessage but wrapped in reselect's createSelector so that
// we can derive all of the selector dependencies that getPropsForMessage
// requires and you won't have to pass them in. For use within a smart/connected
// component that has access to selectors.
export const getMessagePropsSelector = createSelector(
  getConversationSelector,
  getUserConversationId,
  getUserACI,
  getUserPNI,
  getUserNumber,
  getRegionCode,
  getAccountSelector,
  getContactNameColorSelector,
  getTargetedMessage,
  getSelectedMessageIds,
  (
      conversationSelector,
      ourConversationId,
      ourACI,
      ourPNI,
      ourNumber,
      regionCode,
      accountSelector,
      contactNameColorSelector,
      targetedMessage,
      selectedMessageIds
    ) =>
    (message: MessageWithUIFieldsType) => {
      return getPropsForMessage(message, {
        accountSelector,
        contactNameColorSelector,
        conversationSelector,
        ourConversationId,
        ourNumber,
        ourACI,
        ourPNI,
        regionCode,
        targetedMessageCounter: targetedMessage?.counter,
        targetedMessageId: targetedMessage?.id,
        selectedMessageIds,
      });
    }
);

// Top-level prop generation for the message bubble
export function getPropsForBubble(
  message: MessageWithUIFieldsType,
  options: GetPropsForBubbleOptions
): TimelineItemType {
  const { received_at_ms: receivedAt, timestamp: messageTimestamp } = message;
  const timestamp = receivedAt || messageTimestamp;

  if (isUnsupportedMessage(message)) {
    return {
      type: 'unsupportedMessage',
      data: getPropsForUnsupportedMessage(message, options),
      timestamp,
    };
  }
  if (isGroupV2Change(message)) {
    return {
      type: 'groupV2Change',
      data: getPropsForGroupV2Change(message, options),
      timestamp,
    };
  }
  if (isGroupV1Migration(message)) {
    return {
      type: 'groupV1Migration',
      data: getPropsForGroupV1Migration(message, options),
      timestamp,
    };
  }
  if (isExpirationTimerUpdate(message)) {
    return {
      type: 'timerNotification',
      data: getPropsForTimerNotification(message, options),
      timestamp,
    };
  }
  if (isKeyChange(message)) {
    return {
      type: 'safetyNumberNotification',
      data: getPropsForSafetyNumberNotification(message, options),
      timestamp,
    };
  }
  if (isVerifiedChange(message)) {
    return {
      type: 'verificationNotification',
      data: getPropsForVerificationNotification(message, options),
      timestamp,
    };
  }
  if (isGroupUpdate(message)) {
    return {
      type: 'groupNotification',
      data: getPropsForGroupNotification(message, options),
      timestamp,
    };
  }
  if (isEndSession(message)) {
    return {
      type: 'resetSessionNotification',
      data: null,
      timestamp,
    };
  }
  if (isCallHistory(message)) {
    return {
      type: 'callHistory',
      data: getPropsForCallHistory(message, options),
      timestamp,
    };
  }
  if (isProfileChange(message)) {
    return {
      type: 'profileChange',
      data: getPropsForProfileChange(message, options),
      timestamp,
    };
  }
  if (isUniversalTimerNotification(message)) {
    return {
      type: 'universalTimerNotification',
      data: null,
      timestamp,
    };
  }
  if (isContactRemovedNotification(message)) {
    return {
      type: 'contactRemovedNotification',
      data: null,
      timestamp,
    };
  }
  if (isChangeNumberNotification(message)) {
    return {
      type: 'changeNumberNotification',
      data: getPropsForChangeNumberNotification(message, options),
      timestamp,
    };
  }
  if (isChatSessionRefreshed(message)) {
    return {
      type: 'chatSessionRefreshed',
      data: null,
      timestamp,
    };
  }
  if (isDeliveryIssue(message)) {
    return {
      type: 'deliveryIssue',
      data: getPropsForDeliveryIssue(message, options),
      timestamp,
    };
  }
  if (isConversationMerge(message)) {
    return {
      type: 'conversationMerge',
      data: getPropsForConversationMerge(message, options),
      timestamp,
    };
  }

  if (
    messageHasPaymentEvent(message) &&
    !isPaymentNotificationEvent(message.payment)
  ) {
    return {
      type: 'paymentEvent',
      data: getPropsForPaymentEvent(message, options),
      timestamp,
    };
  }

  const data = getPropsForMessage(message, options);

  return {
    type: 'message' as const,
    data,
    timestamp: data.timestamp,
  };
}

function getPropsForPaymentEvent(
  message: MessageAttributesWithPaymentEvent,
  { conversationSelector }: GetPropsForBubbleOptions
): Omit<PaymentEventNotificationPropsType, 'i18n'> {
  return {
    sender: conversationSelector(message.sourceUuid),
    conversation: getConversation(message, conversationSelector),
    event: message.payment,
  };
}

// Unsupported Message

export function isUnsupportedMessage(
  message: MessageWithUIFieldsType
): boolean {
  const versionAtReceive = message.supportedVersionAtReceive;
  const requiredVersion = message.requiredProtocolVersion;

  return (
    isNumber(versionAtReceive) &&
    isNumber(requiredVersion) &&
    versionAtReceive < requiredVersion
  );
}

function getPropsForUnsupportedMessage(
  message: MessageWithUIFieldsType,
  options: GetContactOptions
): PropsForUnsupportedMessage {
  const CURRENT_PROTOCOL_VERSION = Proto.DataMessage.ProtocolVersion.CURRENT;

  const requiredVersion = message.requiredProtocolVersion;
  const canProcessNow = Boolean(
    CURRENT_PROTOCOL_VERSION &&
      requiredVersion &&
      CURRENT_PROTOCOL_VERSION >= requiredVersion
  );

  return {
    canProcessNow,
    contact: getContact(message, options),
  };
}

// GroupV2 Change

export function isGroupV2Change(message: MessageWithUIFieldsType): boolean {
  return Boolean(message.groupV2Change);
}

function getPropsForGroupV2Change(
  message: MessageWithUIFieldsType,
  { conversationSelector, ourACI, ourPNI }: GetPropsForBubbleOptions
): GroupsV2Props {
  const change = message.groupV2Change;

  if (!change) {
    throw new Error('getPropsForGroupV2Change: Change is missing!');
  }

  const conversation = getConversation(message, conversationSelector);

  return {
    areWeAdmin: Boolean(conversation.areWeAdmin),
    conversationId: conversation.id,
    groupName: conversation?.type === 'group' ? conversation?.name : undefined,
    groupMemberships: conversation.memberships,
    groupBannedMemberships: conversation.bannedMemberships,
    ourACI,
    ourPNI,
    change,
  };
}

// GroupV1 Migration

export function isGroupV1Migration(message: MessageWithUIFieldsType): boolean {
  return message.type === 'group-v1-migration';
}

function getPropsForGroupV1Migration(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): GroupV1MigrationPropsType {
  const migration = message.groupMigration;
  if (!migration) {
    // Backwards-compatibility with data schema in early betas
    const invitedGV2Members = message.invitedGV2Members || [];
    const droppedGV2MemberIds = message.droppedGV2MemberIds || [];

    const invitedMembers = invitedGV2Members.map(item =>
      conversationSelector(item.uuid)
    );
    const droppedMembers = droppedGV2MemberIds.map(conversationId =>
      conversationSelector(conversationId)
    );

    return {
      areWeInvited: false,
      conversationId: message.conversationId,
      droppedMembers,
      invitedMembers,
    };
  }

  const {
    areWeInvited,
    droppedMemberIds,
    invitedMembers: rawInvitedMembers,
  } = migration;
  const invitedMembers = rawInvitedMembers.map(item =>
    conversationSelector(item.uuid)
  );
  const droppedMembers = droppedMemberIds.map(conversationId =>
    conversationSelector(conversationId)
  );

  return {
    areWeInvited,
    conversationId: message.conversationId,
    droppedMembers,
    invitedMembers,
  };
}

// Note: props are null!

// Expiration Timer Update

export function isExpirationTimerUpdate(
  message: Pick<MessageWithUIFieldsType, 'flags'>
): boolean {
  const flag = Proto.DataMessage.Flags.EXPIRATION_TIMER_UPDATE;
  // eslint-disable-next-line no-bitwise
  return Boolean(message.flags && message.flags & flag);
}

function getPropsForTimerNotification(
  message: MessageWithUIFieldsType,
  { ourConversationId, conversationSelector }: GetPropsForBubbleOptions
): TimerNotificationProps {
  const timerUpdate = message.expirationTimerUpdate;
  if (!timerUpdate) {
    throw new Error(
      'getPropsForTimerNotification: missing expirationTimerUpdate!'
    );
  }

  const { expireTimer, fromSync, source, sourceUuid } = timerUpdate;
  const disabled = !expireTimer;
  const sourceId = sourceUuid || source;
  const { id: formattedContactId, title } = conversationSelector(sourceId);

  // Pacify typescript
  type MaybeExpireTimerType =
    | { disabled: true }
    | {
        disabled: false;
        expireTimer: DurationInSeconds;
      };

  const maybeExpireTimer: MaybeExpireTimerType = disabled
    ? {
        disabled: true,
      }
    : {
        disabled: false,
        expireTimer,
      };

  const basicProps = {
    title,
    ...maybeExpireTimer,
    type: 'fromOther' as const,
  };

  if (fromSync) {
    return {
      ...basicProps,
      type: 'fromSync' as const,
    };
  }
  if (formattedContactId === ourConversationId) {
    return {
      ...basicProps,
      type: 'fromMe' as const,
    };
  }
  if (!sourceId) {
    return {
      ...basicProps,
      type: 'fromMember' as const,
    };
  }

  return basicProps;
}

// Key Change

export function isKeyChange(message: MessageWithUIFieldsType): boolean {
  return message.type === 'keychange';
}

function getPropsForSafetyNumberNotification(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): SafetyNumberNotificationProps {
  const conversation = getConversation(message, conversationSelector);
  const isGroup = conversation?.type === 'group';
  const identifier = message.key_changed;

  if (isGroup && !identifier) {
    throw new Error(
      'getPropsForSafetyNumberNotification: isGroup = true, but no identifier!'
    );
  }

  const contact = identifier ? conversationSelector(identifier) : conversation;

  return {
    isGroup,
    contact,
  };
}

// Verified Change

export function isVerifiedChange(message: MessageWithUIFieldsType): boolean {
  return message.type === 'verified-change';
}

function getPropsForVerificationNotification(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): VerificationNotificationProps {
  const type = message.verified ? 'markVerified' : 'markNotVerified';
  const isLocal = message.local || false;
  const identifier = message.verifiedChanged;

  return {
    type,
    isLocal,
    contact: conversationSelector(identifier),
  };
}

// Gift Badge

export function isGiftBadge(
  message: Pick<MessageWithUIFieldsType, 'giftBadge'>
): boolean {
  return Boolean(message.giftBadge);
}

// Group Update (V1)

export function isGroupUpdate(
  message: Pick<MessageWithUIFieldsType, 'group_update'>
): boolean {
  return Boolean(message.group_update);
}

function getPropsForGroupNotification(
  message: MessageWithUIFieldsType,
  options: GetContactOptions
): GroupNotificationProps {
  const groupUpdate = message.group_update;
  if (!groupUpdate) {
    throw new Error(
      'getPropsForGroupNotification: Message missing group_update'
    );
  }

  const { conversationSelector } = options;

  const changes = [];

  if (
    !groupUpdate.avatarUpdated &&
    !groupUpdate.left &&
    !groupUpdate.joined &&
    !groupUpdate.name
  ) {
    changes.push({
      type: 'general' as ChangeType,
    });
  }

  if (groupUpdate.joined?.length) {
    changes.push({
      type: 'add' as ChangeType,
      contacts: map(
        Array.isArray(groupUpdate.joined)
          ? groupUpdate.joined
          : [groupUpdate.joined],
        identifier => conversationSelector(identifier)
      ),
    });
  }

  if (groupUpdate.left === 'You') {
    changes.push({
      type: 'remove' as ChangeType,
    });
  } else if (groupUpdate.left) {
    changes.push({
      type: 'remove' as ChangeType,
      contacts: map(
        Array.isArray(groupUpdate.left) ? groupUpdate.left : [groupUpdate.left],
        identifier => conversationSelector(identifier)
      ),
    });
  }

  if (groupUpdate.name) {
    changes.push({
      type: 'name' as ChangeType,
      newName: groupUpdate.name,
    });
  }

  if (groupUpdate.avatarUpdated) {
    changes.push({
      type: 'avatar' as ChangeType,
    });
  }

  const from = getContact(message, options);

  return {
    from,
    changes,
  };
}

// End Session

export function isEndSession(
  message: Pick<MessageWithUIFieldsType, 'flags'>
): boolean {
  const flag = Proto.DataMessage.Flags.END_SESSION;
  // eslint-disable-next-line no-bitwise
  return Boolean(message.flags && message.flags & flag);
}

// Call History

export function isCallHistory(message: MessageWithUIFieldsType): boolean {
  return message.type === 'call-history';
}

export type GetPropsForCallHistoryOptions = Pick<
  GetPropsForBubbleOptions,
  'conversationSelector' | 'callSelector' | 'activeCall'
>;

export function getPropsForCallHistory(
  message: MessageWithUIFieldsType,
  {
    conversationSelector,
    callSelector,
    activeCall,
  }: GetPropsForCallHistoryOptions
): CallingNotificationType {
  const { callHistoryDetails } = message;
  if (!callHistoryDetails) {
    throw new Error('getPropsForCallHistory: Missing callHistoryDetails');
  }

  const activeCallConversationId = activeCall?.conversationId;

  switch (callHistoryDetails.callMode) {
    // Old messages weren't saved with a call mode.
    case undefined:
    case CallMode.Direct:
      return {
        ...callHistoryDetails,
        activeCallConversationId,
        callMode: CallMode.Direct,
      };
    case CallMode.Group: {
      const { conversationId } = message;
      if (!conversationId) {
        throw new Error('getPropsForCallHistory: missing conversation ID');
      }

      let call = callSelector(conversationId);
      if (call && call.callMode !== CallMode.Group) {
        log.error(
          'getPropsForCallHistory: there is an unexpected non-group call; pretending it does not exist'
        );
        call = undefined;
      }

      const creator = conversationSelector(callHistoryDetails.creatorUuid);
      const deviceCount = call?.peekInfo?.deviceCount ?? 0;

      return {
        activeCallConversationId,
        callMode: CallMode.Group,
        conversationId,
        creator,
        deviceCount,
        ended:
          callHistoryDetails.eraId !== call?.peekInfo?.eraId || !deviceCount,
        maxDevices: call?.peekInfo?.maxDevices ?? Infinity,
        startedTime: callHistoryDetails.startedTime,
      };
    }
    default:
      throw new Error(
        `getPropsForCallHistory: missing case ${missingCaseError(
          callHistoryDetails
        )}`
      );
  }
}

// Profile Change

export function isProfileChange(message: MessageWithUIFieldsType): boolean {
  return message.type === 'profile-change';
}

function getPropsForProfileChange(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): ProfileChangeNotificationPropsType {
  const change = message.profileChange;
  const { changedId } = message;
  const changedContact = conversationSelector(changedId);

  if (!change) {
    throw new Error('getPropsForProfileChange: profileChange is undefined');
  }

  return {
    changedContact,
    change,
  } as ProfileChangeNotificationPropsType;
}

// Universal Timer Notification

// Note: smart, so props not generated here

export function isUniversalTimerNotification(
  message: MessageWithUIFieldsType
): boolean {
  return message.type === 'universal-timer-notification';
}

// Contact Removed Notification

// Note: smart, so props not generated here

export function isContactRemovedNotification(
  message: MessageWithUIFieldsType
): boolean {
  return message.type === 'contact-removed-notification';
}

// Change Number Notification

export function isChangeNumberNotification(
  message: MessageWithUIFieldsType
): boolean {
  return message.type === 'change-number-notification';
}

function getPropsForChangeNumberNotification(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): ChangeNumberNotificationProps {
  return {
    sender: conversationSelector(message.sourceUuid),
    timestamp: message.sent_at,
  };
}

// Chat Session Refreshed

export function isChatSessionRefreshed(
  message: MessageWithUIFieldsType
): boolean {
  return message.type === 'chat-session-refreshed';
}

// Note: props are null

export function isConversationMerge(message: MessageWithUIFieldsType): boolean {
  return message.type === 'conversation-merge';
}
export function getPropsForConversationMerge(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): ConversationMergePropsType {
  const { conversationMerge } = message;
  if (!conversationMerge) {
    throw new Error(
      'getPropsForConversationMerge: message is missing conversationMerge!'
    );
  }

  const conversation = getConversation(message, conversationSelector);
  const conversationTitle = conversation.title;

  const { renderInfo } = conversationMerge;
  const obsoleteConversationTitle = getTitleNoDefault(renderInfo);
  const obsoleteConversationNumber = getNumber(renderInfo);

  return {
    conversationTitle,
    obsoleteConversationTitle,
    obsoleteConversationNumber,
  };
}

// Delivery Issue

export function isDeliveryIssue(message: MessageWithUIFieldsType): boolean {
  return message.type === 'delivery-issue';
}

function getPropsForDeliveryIssue(
  message: MessageWithUIFieldsType,
  { conversationSelector }: GetPropsForBubbleOptions
): DeliveryIssuePropsType {
  const sender = conversationSelector(message.sourceUuid);
  const conversation = getConversation(message, conversationSelector);

  return {
    sender,
    inGroup: conversation.type === 'group',
  };
}

// Other utility functions

export function isTapToView(message: MessageWithUIFieldsType): boolean {
  // If a message is deleted for everyone, that overrides all other styling
  if (message.deletedForEveryone) {
    return false;
  }

  return Boolean(message.isViewOnce || message.messageTimer);
}

export function getMessagePropStatus(
  message: Pick<
    MessageWithUIFieldsType,
    | 'deletedForEveryone'
    | 'deletedForEveryoneFailed'
    | 'deletedForEveryoneSendStatus'
    | 'errors'
    | 'sendStateByConversationId'
    | 'type'
  >,
  ourConversationId: string | undefined
): LastMessageStatus | undefined {
  if (!isOutgoing(message)) {
    return hasErrors(message) ? 'error' : undefined;
  }

  if (getLastChallengeError(message)) {
    return 'paused';
  }

  const {
    deletedForEveryone,
    deletedForEveryoneFailed,
    deletedForEveryoneSendStatus,
    sendStateByConversationId = {},
  } = message;

  // Note: we only do anything here if deletedForEveryoneSendStatus exists, because old
  //   messages deleted for everyone won't have send status.
  if (deletedForEveryone && deletedForEveryoneSendStatus) {
    if (deletedForEveryoneFailed) {
      const anySuccessfulSends = Object.values(
        deletedForEveryoneSendStatus
      ).some(item => item);

      return anySuccessfulSends ? 'partial-sent' : 'error';
    }
    const missingSends = Object.values(deletedForEveryoneSendStatus).some(
      item => !item
    );
    if (missingSends) {
      return 'sending';
    }
  }

  if (
    ourConversationId &&
    isMessageJustForMe(sendStateByConversationId, ourConversationId)
  ) {
    const status =
      sendStateByConversationId[ourConversationId]?.status ??
      SendStatus.Pending;
    const sent = isSent(status);
    if (
      hasErrors(message) ||
      someSendStatus(sendStateByConversationId, isFailed)
    ) {
      return sent ? 'partial-sent' : 'error';
    }
    return sent ? 'viewed' : 'sending';
  }

  const sendStates = Object.values(
    ourConversationId
      ? omit(sendStateByConversationId, ourConversationId)
      : sendStateByConversationId
  );
  const highestSuccessfulStatus = sendStates.reduce(
    (result: SendStatus, { status }) => maxStatus(result, status),
    SendStatus.Pending
  );

  if (
    hasErrors(message) ||
    someSendStatus(sendStateByConversationId, isFailed)
  ) {
    return isSent(highestSuccessfulStatus) ? 'partial-sent' : 'error';
  }
  if (isViewed(highestSuccessfulStatus)) {
    return 'viewed';
  }
  if (isRead(highestSuccessfulStatus)) {
    return 'read';
  }
  if (isDelivered(highestSuccessfulStatus)) {
    return 'delivered';
  }
  if (isSent(highestSuccessfulStatus)) {
    return 'sent';
  }
  return 'sending';
}

export function getPropsForEmbeddedContact(
  message: MessageWithUIFieldsType,
  regionCode: string | undefined,
  accountSelector: (identifier?: string) => UUIDStringType | undefined
): EmbeddedContactType | undefined {
  const contacts = message.contact;
  if (!contacts || !contacts.length) {
    return undefined;
  }

  const firstContact = contacts[0];
  const numbers = firstContact?.number;
  const firstNumber = numbers && numbers[0] ? numbers[0].value : undefined;

  return embeddedContactSelector(firstContact, {
    regionCode,
    getAbsoluteAttachmentPath: getAttachmentUrlForPath,
    firstNumber,
    uuid: accountSelector(firstNumber),
  });
}

export function getAttachmentUrlForPath(path: string): string {
  return window.Signal.Migrations.getAbsoluteAttachmentPath(path);
}

export function getPropsForAttachment(
  attachment: AttachmentType
): AttachmentType | undefined {
  if (!attachment) {
    return undefined;
  }

  const { path, pending, size, screenshot, thumbnail } = attachment;

  return {
    ...attachment,
    fileSize: size ? filesize(size) : undefined,
    isVoiceMessage: isVoiceMessage(attachment),
    pending,
    url: path ? getAttachmentUrlForPath(path) : undefined,
    screenshot: screenshot?.path
      ? {
          ...screenshot,
          url: getAttachmentUrlForPath(screenshot.path),
        }
      : undefined,
    thumbnail: thumbnail?.path
      ? {
          ...thumbnail,
          url: getAttachmentUrlForPath(thumbnail.path),
        }
      : undefined,
  };
}

function processQuoteAttachment(
  attachment: AttachmentType
): QuotedAttachmentType {
  const { thumbnail } = attachment;
  const path =
    thumbnail && thumbnail.path && getAttachmentUrlForPath(thumbnail.path);
  const objectUrl = thumbnail && thumbnail.objectUrl;

  const thumbnailWithObjectUrl =
    (!path && !objectUrl) || !thumbnail
      ? undefined
      : { ...thumbnail, objectUrl: path || objectUrl };

  return {
    ...attachment,
    isVoiceMessage: isVoiceMessage(attachment),
    thumbnail: thumbnailWithObjectUrl,
  };
}

function canReplyOrReact(
  message: Pick<
    MessageWithUIFieldsType,
    | 'canReplyToStory'
    | 'deletedForEveryone'
    | 'sendStateByConversationId'
    | 'payment'
    | 'type'
  >,
  ourConversationId: string | undefined,
  conversation: undefined | Readonly<ConversationType>
): boolean {
  const { deletedForEveryone, sendStateByConversationId } = message;

  if (!conversation) {
    return false;
  }

  if (conversation.isGroupV1AndDisabled) {
    return false;
  }

  if (isMissingRequiredProfileSharing(conversation)) {
    return false;
  }

  if (!conversation.acceptedMessageRequest) {
    return false;
  }

  if (deletedForEveryone) {
    return false;
  }

  if (isSignalConversation(conversation)) {
    return false;
  }

  if (isOutgoing(message)) {
    return (
      isMessageJustForMe(sendStateByConversationId, ourConversationId) ||
      someSendStatus(
        ourConversationId
          ? omit(sendStateByConversationId, ourConversationId)
          : sendStateByConversationId,
        isSent
      )
    );
  }

  // If we get past all the other checks above then we can always reply or
  // react if the message type is "incoming" | "story"
  if (isIncoming(message)) {
    return true;
  }

  if (isStory(message)) {
    return (
      Boolean(message.canReplyToStory) && conversation.id !== ourConversationId
    );
  }

  // Fail safe.
  return false;
}

export function canReply(
  message: Pick<
    MessageWithUIFieldsType,
    | 'canReplyToStory'
    | 'conversationId'
    | 'deletedForEveryone'
    | 'sendStateByConversationId'
    | 'type'
  >,
  ourConversationId: string | undefined,
  conversationSelector: GetConversationByIdType
): boolean {
  const conversation = getConversation(message, conversationSelector);
  if (
    !conversation ||
    (conversation.announcementsOnly && !conversation.areWeAdmin)
  ) {
    return false;
  }
  return canReplyOrReact(message, ourConversationId, conversation);
}

export function canReact(
  message: Pick<
    MessageWithUIFieldsType,
    | 'conversationId'
    | 'deletedForEveryone'
    | 'sendStateByConversationId'
    | 'type'
  >,
  ourConversationId: string | undefined,
  conversationSelector: GetConversationByIdType
): boolean {
  const conversation = getConversation(message, conversationSelector);
  return canReplyOrReact(message, ourConversationId, conversation);
}

export function canCopy(
  message: Pick<MessageWithUIFieldsType, 'body' | 'deletedForEveryone'>
): boolean {
  return !message.deletedForEveryone && Boolean(message.body);
}

export function canDeleteForEveryone(
  message: Pick<
    MessageWithUIFieldsType,
    'type' | 'deletedForEveryone' | 'sent_at' | 'sendStateByConversationId'
  >
): boolean {
  return (
    // Is this a message I sent?
    isOutgoing(message) &&
    // Has the message already been deleted?
    !message.deletedForEveryone &&
    // Is it too old to delete?
    isMoreRecentThan(message.sent_at, THREE_HOURS) &&
    // Is it sent to anyone?
    someSendStatus(message.sendStateByConversationId, isSent)
  );
}

export const canDeleteMessagesForEveryone = createSelector(
  [getMessages, (_state, messageIds: ReadonlyArray<string>) => messageIds],
  (messagesLookup, messageIds) => {
    return messageIds.every(messageId => {
      const message = getOwn(messagesLookup, messageId);
      return message != null && canDeleteForEveryone(message);
    });
  }
);

export function canRetryDeleteForEveryone(
  message: Pick<
    MessageWithUIFieldsType,
    'deletedForEveryone' | 'deletedForEveryoneFailed' | 'sent_at'
  >
): boolean {
  return Boolean(
    message.deletedForEveryone &&
      message.deletedForEveryoneFailed &&
      // Is it too old to delete?
      isMoreRecentThan(message.sent_at, DAY)
  );
}

export function canEditMessage(message: MessageWithUIFieldsType): boolean {
  return (
    canEditMessages() &&
    !message.deletedForEveryone &&
    isOutgoing(message) &&
    isMoreRecentThan(message.sent_at, THREE_HOURS) &&
    (message.editHistory?.length ?? 0) <= MAX_EDIT_COUNT &&
    someSendStatus(message.sendStateByConversationId, isSent) &&
    Boolean(message.body)
  );
}

export function canDownload(
  message: MessageWithUIFieldsType,
  conversationSelector: GetConversationByIdType
): boolean {
  if (isOutgoing(message)) {
    return true;
  }

  const conversation = getConversation(message, conversationSelector);
  const isAccepted = Boolean(
    conversation && conversation.acceptedMessageRequest
  );
  if (!isAccepted) {
    return false;
  }

  // Ensure that all attachments are downloadable
  const { attachments } = message;
  if (attachments && attachments.length) {
    return attachments.every(attachment => Boolean(attachment.path));
  }

  return true;
}

export function getLastChallengeError(
  message: Pick<MessageWithUIFieldsType, 'errors'>
): ShallowChallengeError | undefined {
  const { errors } = message;
  if (!errors) {
    return undefined;
  }

  const challengeErrors = errors
    .filter((error): error is ShallowChallengeError => {
      return (
        error.name === 'SendMessageChallengeError' &&
        isNumber(error.retryAfter) &&
        isObject(error.data)
      );
    })
    .sort((a, b) => a.retryAfter - b.retryAfter);

  return challengeErrors.pop();
}

const getTargetedMessageForDetails = (
  state: StateType
): MessageAttributesType | undefined =>
  state.conversations.targetedMessageForDetails;

const OUTGOING_KEY_ERROR = 'OutgoingIdentityKeyError';

export const getMessageDetails = createSelector(
  getAccountSelector,
  getContactNameColorSelector,
  getConversationSelector,
  getIntl,
  getRegionCode,
  getTargetedMessageForDetails,
  getUserACI,
  getUserPNI,
  getUserConversationId,
  getUserNumber,
  getSelectedMessageIds,
  (
    accountSelector,
    contactNameColorSelector,
    conversationSelector,
    i18n,
    regionCode,
    message,
    ourACI,
    ourPNI,
    ourConversationId,
    ourNumber,
    selectedMessageIds
  ): SmartMessageDetailPropsType | undefined => {
    if (!message || !ourConversationId) {
      return;
    }

    const {
      errors: messageErrors = [],
      sendStateByConversationId = {},
      unidentifiedDeliveries = [],
      unidentifiedDeliveryReceived,
    } = message;

    const unidentifiedDeliveriesSet = new Set(
      map(
        unidentifiedDeliveries,
        identifier =>
          window.ConversationController.getConversationId(identifier) as string
      )
    );

    let conversationIds: Array<string>;
    if (isIncoming(message)) {
      conversationIds = [
        getContactId(message, {
          conversationSelector,
          ourConversationId,
          ourNumber,
          ourACI,
        }),
      ].filter(isNotNil);
    } else if (!isEmpty(sendStateByConversationId)) {
      if (isMessageJustForMe(sendStateByConversationId, ourConversationId)) {
        conversationIds = [ourConversationId];
      } else {
        conversationIds = Object.keys(sendStateByConversationId).filter(
          id => id !== ourConversationId
        );
      }
    } else {
      const messageConversation = window.ConversationController.get(
        message.conversationId
      );
      const conversationRecipients = messageConversation
        ? getRecipients(messageConversation.attributes) || []
        : [];
      // Older messages don't have the recipients included on the message, so we fall back
      //   to the conversation's current recipients
      conversationIds = conversationRecipients
        .map((id: string) =>
          window.ConversationController.getConversationId(id)
        )
        .filter(isNotNil);
    }

    // This will make the error message for outgoing key errors a bit nicer
    const allErrors = messageErrors.map(error => {
      if (error.name === OUTGOING_KEY_ERROR) {
        return {
          ...error,
          message: i18n('icu:newIdentity'),
        };
      }

      return error;
    });

    // If an error has a specific number it's associated with, we'll show it next to
    //   that contact. Otherwise, it will be a standalone entry.
    const errors = allErrors.filter(error =>
      Boolean(error.identifier || error.number)
    );
    const errorsGroupedById = groupBy(allErrors, error => {
      const identifier = error.identifier || error.number;
      if (!identifier) {
        return null;
      }

      return window.ConversationController.getConversationId(identifier);
    });

    const hasUnidentifiedDeliveryIndicators = window.storage.get(
      'unidentifiedDeliveryIndicators',
      false
    );

    const contacts: ReadonlyArray<SmartMessageDetailContact> =
      conversationIds.map(id => {
        const errorsForContact = getOwn(errorsGroupedById, id);
        const isOutgoingKeyError = Boolean(
          errorsForContact?.some(error => error.name === OUTGOING_KEY_ERROR)
        );

        let isUnidentifiedDelivery = false;
        if (hasUnidentifiedDeliveryIndicators) {
          isUnidentifiedDelivery = isIncoming(message)
            ? Boolean(unidentifiedDeliveryReceived)
            : unidentifiedDeliveriesSet.has(id);
        }

        const sendState = getOwn(sendStateByConversationId, id);

        let status = sendState?.status;

        // If a message was only sent to yourself (Note to Self or a lonely group), it
        //   is shown read.
        if (id === ourConversationId && status && isSent(status)) {
          status = SendStatus.Read;
        }

        const statusTimestamp = sendState?.updatedAt;

        return {
          ...conversationSelector(id),
          errors: errorsForContact,
          isOutgoingKeyError,
          isUnidentifiedDelivery,
          status,
          statusTimestamp:
            statusTimestamp === message.timestamp ? undefined : statusTimestamp,
        };
      });

    return {
      contacts,
      errors,
      message: getPropsForMessage(message, {
        accountSelector,
        contactNameColorSelector,
        conversationSelector,
        ourACI,
        ourConversationId,
        ourNumber,
        ourPNI,
        regionCode,
        selectedMessageIds,
      }),
      receivedAt: Number(message.received_at_ms || message.received_at),
    };
  }
);
