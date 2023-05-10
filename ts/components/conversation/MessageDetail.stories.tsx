// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';

import type { PropsData as MessageDataPropsType } from './Message';
import { TextDirection } from './Message';
import type { Props } from './MessageDetail';
import { MessageDetail } from './MessageDetail';
import { SendStatus } from '../../messages/MessageSendState';
import { ReadStatus } from '../../messages/MessageReadStatus';
import { getDefaultConversation } from '../../test-both/helpers/getDefaultConversation';
import { setupI18n } from '../../util/setupI18n';
import enMessages from '../../../_locales/en/messages.json';
import { getFakeBadge } from '../../test-both/helpers/getFakeBadge';
import { ThemeType } from '../../types/Util';

const i18n = setupI18n('en', enMessages);

export default {
  title: 'Components/Conversation/MessageDetail',
};

const defaultMessage: MessageDataPropsType = {
  author: getDefaultConversation({
    id: 'some-id',
    title: 'Max',
  }),
  canDeleteForEveryone: true,
  conversationColor: 'crimson',
  conversationId: 'my-convo',
  conversationTitle: 'Conversation Title',
  conversationType: 'direct',
  direction: 'incoming',
  id: 'my-message',
  renderingContext: 'storybook',
  renderMenu: undefined,
  isBlocked: false,
  isMessageRequestAccepted: true,
  isSelected: false,
  isSelectMode: false,
  isSpoilerExpanded: {},
  previews: [],
  readStatus: ReadStatus.Read,
  status: 'sent',
  text: 'A message from Max',
  textDirection: TextDirection.Default,
  timestamp: Date.now(),
};

const createProps = (overrideProps: Partial<Props> = {}): Props => ({
  contacts: overrideProps.contacts || [
    {
      ...getDefaultConversation({
        title: 'Just Max',
      }),
      isOutgoingKeyError: false,
      isUnidentifiedDelivery: false,
      status: SendStatus.Delivered,
    },
  ],
  errors: overrideProps.errors || [],
  message: overrideProps.message || defaultMessage,
  receivedAt: number('receivedAt', overrideProps.receivedAt || Date.now()),
  sentAt: number('sentAt', overrideProps.sentAt || Date.now()),

  getPreferredBadge: () => getFakeBadge(),
  i18n,
  platform: 'darwin',
  interactionMode: 'keyboard',
  theme: ThemeType.light,

  toggleSafetyNumberModal: action('toggleSafetyNumberModal'),

  checkForAccount: action('checkForAccount'),
  clearTargetedMessage: action('clearTargetedMessage'),
  showLightboxForViewOnceMedia: action('showLightboxForViewOnceMedia'),
  doubleCheckMissingQuoteReference: action('doubleCheckMissingQuoteReference'),
  kickOffAttachmentDownload: action('kickOffAttachmentDownload'),
  markAttachmentAsCorrupted: action('markAttachmentAsCorrupted'),
  messageExpanded: action('messageExpanded'),
  showConversation: action('showConversation'),
  openGiftBadge: action('openGiftBadge'),
  renderAudioAttachment: () => <div>*AudioAttachment*</div>,
  saveAttachment: action('saveAttachment'),
  showSpoiler: action('showSpoiler'),
  retryMessageSend: action('retryMessageSend'),
  pushPanelForConversation: action('pushPanelForConversation'),
  showContactModal: action('showContactModal'),
  showExpiredIncomingTapToViewToast: action(
    'showExpiredIncomingTapToViewToast'
  ),
  showExpiredOutgoingTapToViewToast: action(
    'showExpiredOutgoingTapToViewToast'
  ),
  showLightbox: action('showLightbox'),
  startConversation: action('startConversation'),
  viewStory: action('viewStory'),
});

export function DeliveredIncoming(): JSX.Element {
  const props = createProps({
    contacts: [
      {
        ...getDefaultConversation({
          color: 'forest',
          title: 'Max',
        }),
        status: undefined,
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
      },
    ],
  });
  return <MessageDetail {...props} />;
}

export function DeliveredOutgoing(): JSX.Element {
  const props = createProps({
    message: {
      ...defaultMessage,
      direction: 'outgoing',
      text: 'A message to Max',
    },
  });
  return <MessageDetail {...props} />;
}

export function MessageStatuses(): JSX.Element {
  const props = createProps({
    contacts: [
      {
        ...getDefaultConversation({
          title: 'Max',
        }),
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
        status: SendStatus.Sent,
      },
      {
        ...getDefaultConversation({
          title: 'Sally',
        }),
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
        status: SendStatus.Pending,
      },
      {
        ...getDefaultConversation({
          title: 'Terry',
        }),
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
        status: SendStatus.Failed,
      },
      {
        ...getDefaultConversation({
          title: 'Theo',
        }),
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
        status: SendStatus.Delivered,
      },
      {
        ...getDefaultConversation({
          title: 'Nikki',
        }),
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: false,
        status: SendStatus.Read,
      },
    ],
    message: {
      ...defaultMessage,
      conversationType: 'group',
      text: 'A message to you all!',
    },
  });
  return <MessageDetail {...props} />;
}

export function NotDelivered(): JSX.Element {
  const props = createProps({
    message: {
      ...defaultMessage,
      direction: 'outgoing',
      text: 'A message to Max',
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props.receivedAt = undefined as any;

  return <MessageDetail {...props} />;
}

export function NoContacts(): JSX.Element {
  const props = createProps({
    contacts: [],
    message: {
      ...defaultMessage,
      direction: 'outgoing',
      text: 'Is anybody there?',
    },
  });
  return <MessageDetail {...props} />;
}

export function AllErrors(): JSX.Element {
  const props = createProps({
    errors: [
      {
        name: 'Another Error',
        message: 'Wow, that went bad.',
      },
    ],
    message: {
      ...defaultMessage,
    },
    contacts: [
      {
        ...getDefaultConversation({
          title: 'Max',
        }),
        isOutgoingKeyError: true,
        isUnidentifiedDelivery: false,
        status: SendStatus.Failed,
      },
      {
        ...getDefaultConversation({
          title: 'Sally',
        }),
        errors: [
          {
            name: 'Big Error',
            message: 'Stuff happened, in a bad way.',
          },
        ],
        isOutgoingKeyError: false,
        isUnidentifiedDelivery: true,
        status: SendStatus.Failed,
      },
      {
        ...getDefaultConversation({
          title: 'Terry',
        }),
        isOutgoingKeyError: true,
        isUnidentifiedDelivery: true,
        status: SendStatus.Failed,
      },
    ],
  });
  return <MessageDetail {...props} />;
}
