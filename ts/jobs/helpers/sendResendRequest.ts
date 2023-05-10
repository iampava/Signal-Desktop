// Copyright 2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { PlaintextContent } from '@signalapp/libsignal-client';

import { handleMessageSend } from '../../util/handleMessageSend';
import { getSendOptions } from '../../util/getSendOptions';
import { isDirectConversation } from '../../util/whatTypeOfConversation';
import { SignalService as Proto } from '../../protobuf';
import {
  handleMultipleSendErrors,
  maybeExpandErrors,
} from './handleMultipleSendErrors';

import type { ConversationModel } from '../../models/conversations';
import type {
  ConversationQueueJobBundle,
  ResendRequestJobData,
} from '../conversationJobQueue';
import { isConversationUnregistered } from '../../util/isConversationUnregistered';
import {
  OutgoingIdentityKeyError,
  UnregisteredUserError,
} from '../../textsecure/Errors';
import { drop } from '../../util/drop';
import { strictAssert } from '../../util/assert';
import type { DecryptionErrorEventData } from '../../textsecure/messageReceiverEvents';
import type { LoggerType } from '../../types/Logging';
import { startAutomaticSessionReset } from '../../util/handleRetry';

function failoverToLocalReset(
  logger: LoggerType,
  options: Pick<
    DecryptionErrorEventData,
    'senderUuid' | 'senderDevice' | 'timestamp'
  >
) {
  logger.error('Failing over to local reset');
  startAutomaticSessionReset(options);
}

export async function sendResendRequest(
  conversation: ConversationModel,
  {
    isFinalAttempt,
    messaging,
    shouldContinue,
    timeRemaining,
    log,
  }: ConversationQueueJobBundle,
  data: ResendRequestJobData
): Promise<void> {
  const {
    contentHint,
    groupId,
    plaintext: plaintextBase64,
    receivedAtCounter,
    receivedAtDate,
    timestamp,
  } = data;

  if (!shouldContinue) {
    log.info('Ran out of time. Giving up on sending resend request');
    failoverToLocalReset(log, data);
    return;
  }

  log.info(
    `starting resend request send to ${conversation.idForLogging()} with timestamp ${timestamp}`
  );

  if (!isDirectConversation(conversation.attributes)) {
    log.error('conversation is not direct, cancelling job.');
    return;
  }

  if (isConversationUnregistered(conversation.attributes)) {
    log.error('conversation is unregistered, cancelling job.');
    failoverToLocalReset(log, data);
    return;
  }

  // Note: we will send to blocked users, to those still in message request state, etc.
  //   Any needed blocking should still apply once the decryption error is fixed.

  const senderUuid = conversation.get('uuid');
  if (!senderUuid) {
    log.error('conversation was missing a uuid, cancelling job.');
    failoverToLocalReset(log, data);
    return;
  }

  const plaintext = PlaintextContent.deserialize(
    Buffer.from(plaintextBase64, 'base64')
  );
  const { ContentHint } = Proto.UnidentifiedSenderMessage.Message;

  // We run this job on the queue for the individual sender we want the resend from, but
  //   the original message might have been sent in a group - and that's where we'll put
  //   the error or placeholder.
  const groupConversationId = window.ConversationController.get(groupId)?.id;
  const targetConversationId = groupConversationId ?? conversation.get('id');

  try {
    const options = await getSendOptions(conversation.attributes);
    await handleMessageSend(
      messaging.sendMessageProtoAndWait({
        timestamp,
        recipients: [senderUuid],
        proto: plaintext,
        contentHint: ContentHint.DEFAULT,
        groupId,
        options,
        urgent: false,
      }),
      { messageIds: [], sendType: 'retryRequest' }
    );

    // Now that we've successfully sent, represent this to the user. Three options:

    // 1. We believe that it could be successfully re-sent, so we'll add a placeholder.
    if (contentHint === ContentHint.RESENDABLE) {
      const { retryPlaceholders } = window.Signal.Services;
      strictAssert(retryPlaceholders, 'sendResendRequest: adding placeholder');

      log.info('contentHint is RESENDABLE, adding placeholder');

      const state = window.reduxStore.getState();
      const selectedId = state.conversations.selectedConversationId;
      const wasOpened = selectedId === targetConversationId;

      await retryPlaceholders.add({
        conversationId: targetConversationId,
        receivedAt: receivedAtDate,
        receivedAtCounter,
        sentAt: timestamp,
        senderUuid,
        wasOpened,
      });

      return;
    }

    // 2. This message cannot be resent. We'll show no error and trust the other side to
    //   reset their session.
    if (contentHint === ContentHint.IMPLICIT) {
      log.info('contentHint is IMPLICIT, adding no timeline item.');
      return;
    }

    // 3. We don't know what kind of message this was, and add an eror
    log.warn('No contentHint, adding error in conversation immediately');
    drop(
      conversation.queueJob('addDeliveryIssue', async () => {
        await conversation.addDeliveryIssue({
          receivedAt: receivedAtDate,
          receivedAtCounter,
          senderUuid,
          sentAt: timestamp,
        });
      })
    );
  } catch (error: unknown) {
    if (
      error instanceof OutgoingIdentityKeyError ||
      error instanceof UnregisteredUserError
    ) {
      log.info(
        'Group send failures were all OutgoingIdentityKeyError or UnregisteredUserError. Cancelling job.'
      );

      return;
    }

    if (isFinalAttempt) {
      failoverToLocalReset(log, data);
    }

    await handleMultipleSendErrors({
      errors: maybeExpandErrors(error),
      isFinalAttempt,
      log,
      timeRemaining,
      toThrow: error,
    });
  }
}
