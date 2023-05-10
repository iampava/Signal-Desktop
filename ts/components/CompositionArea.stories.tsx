// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import type { DecoratorFunction } from '@storybook/addons';
import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import { IMAGE_JPEG } from '../types/MIME';
import type { Props } from './CompositionArea';
import { CompositionArea } from './CompositionArea';
import { setupI18n } from '../util/setupI18n';
import enMessages from '../../_locales/en/messages.json';
import { StorybookThemeContext } from '../../.storybook/StorybookThemeContext';

import { fakeDraftAttachment } from '../test-both/helpers/fakeAttachment';
import { landscapeGreenUrl } from '../storybook/Fixtures';
import { RecordingState } from '../types/AudioRecorder';
import { ConversationColors } from '../types/Colors';
import { getDefaultConversation } from '../test-both/helpers/getDefaultConversation';
import { PaymentEventKind } from '../types/Payment';

const i18n = setupI18n('en', enMessages);

export default {
  title: 'Components/CompositionArea',
  decorators: [
    // necessary for the add attachment button to render properly
    storyFn => <div className="file-input">{storyFn()}</div>,
  ] as Array<DecoratorFunction<JSX.Element>>,
};

const useProps = (overrideProps: Partial<Props> = {}): Props => ({
  addAttachment: action('addAttachment'),
  conversationId: '123',
  discardEditMessage: action('discardEditMessage'),
  focusCounter: 0,
  sendCounter: 0,
  i18n,
  isDisabled: false,
  isFormattingFlagEnabled:
    overrideProps.isFormattingFlagEnabled === false
      ? overrideProps.isFormattingFlagEnabled
      : true,
  isFormattingSpoilersFlagEnabled:
    overrideProps.isFormattingSpoilersFlagEnabled === false
      ? overrideProps.isFormattingSpoilersFlagEnabled
      : true,
  isFormattingEnabled:
    overrideProps.isFormattingEnabled === false
      ? overrideProps.isFormattingEnabled
      : true,
  messageCompositionId: '456',
  sendEditedMessage: action('sendEditedMessage'),
  sendMultiMediaMessage: action('sendMultiMediaMessage'),
  platform: 'darwin',
  processAttachments: action('processAttachments'),
  removeAttachment: action('removeAttachment'),
  theme: React.useContext(StorybookThemeContext),
  setComposerFocus: action('setComposerFocus'),
  setQuoteByMessageId: action('setQuoteByMessageId'),
  showToast: action('showToast'),

  // AttachmentList
  draftAttachments: overrideProps.draftAttachments || [],
  onClearAttachments: action('onClearAttachments'),
  // AudioCapture
  cancelRecording: action('cancelRecording'),
  completeRecording: action('completeRecording'),
  errorRecording: action('errorRecording'),
  recordingState: select(
    'recordingState',
    RecordingState,
    overrideProps.recordingState || RecordingState.Idle
  ),
  startRecording: action('startRecording'),
  // StagedLinkPreview
  linkPreviewLoading: Boolean(overrideProps.linkPreviewLoading),
  linkPreviewResult: overrideProps.linkPreviewResult,
  onCloseLinkPreview: action('onCloseLinkPreview'),
  // Quote
  quotedMessageProps: overrideProps.quotedMessageProps,
  scrollToMessage: action('scrollToMessage'),
  // MediaEditor
  imageToBlurHash: async () => 'LDA,FDBnm+I=p{tkIUI;~UkpELV]',
  // MediaQualitySelector
  setMediaQualitySetting: action('setMediaQualitySetting'),
  shouldSendHighQualityAttachments: Boolean(
    overrideProps.shouldSendHighQualityAttachments
  ),
  // CompositionInput
  onEditorStateChange: action('onEditorStateChange'),
  onTextTooLong: action('onTextTooLong'),
  draftText: overrideProps.draftText || undefined,
  clearQuotedMessage: action('clearQuotedMessage'),
  getPreferredBadge: () => undefined,
  getQuotedMessage: action('getQuotedMessage'),
  sortedGroupMembers: [],
  // EmojiButton
  onPickEmoji: action('onPickEmoji'),
  onSetSkinTone: action('onSetSkinTone'),
  recentEmojis: [],
  skinTone: 1,
  // StickerButton
  knownPacks: overrideProps.knownPacks || [],
  receivedPacks: [],
  installedPacks: [],
  blessedPacks: [],
  recentStickers: [],
  clearInstalledStickerPack: action('clearInstalledStickerPack'),
  pushPanelForConversation: action('pushPanelForConversation'),
  sendStickerMessage: action('sendStickerMessage'),
  clearShowIntroduction: action('clearShowIntroduction'),
  showPickerHint: false,
  clearShowPickerHint: action('clearShowPickerHint'),
  // Message Requests
  conversationType: 'direct',
  acceptConversation: action('acceptConversation'),
  blockConversation: action('blockConversation'),
  blockAndReportSpam: action('blockAndReportSpam'),
  deleteConversation: action('deleteConversation'),
  messageRequestsEnabled: boolean(
    'messageRequestsEnabled',
    overrideProps.messageRequestsEnabled || false
  ),
  title: '',
  // GroupV1 Disabled Actions
  showGV2MigrationDialog: action('showGV2MigrationDialog'),
  // GroupV2
  announcementsOnly: boolean(
    'announcementsOnly',
    Boolean(overrideProps.announcementsOnly)
  ),
  areWeAdmin: boolean('areWeAdmin', Boolean(overrideProps.areWeAdmin)),
  areWePendingApproval: boolean(
    'areWePendingApproval',
    Boolean(overrideProps.areWePendingApproval)
  ),
  groupAdmins: [],
  cancelJoinRequest: action('cancelJoinRequest'),
  showConversation: action('showConversation'),
  // SMS-only
  isSMSOnly: overrideProps.isSMSOnly || false,
  isFetchingUUID: overrideProps.isFetchingUUID || false,
  renderSmartCompositionRecording: _ => <div>RECORDING</div>,
  renderSmartCompositionRecordingDraft: _ => <div>RECORDING DRAFT</div>,
  // Select mode
  selectedMessageIds: undefined,
  toggleSelectMode: action('toggleSelectMode'),
  toggleForwardMessagesModal: action('toggleForwardMessagesModal'),
});

export function Default(): JSX.Element {
  const props = useProps();

  return <CompositionArea {...props} />;
}

export function StartingText(): JSX.Element {
  const props = useProps({
    draftText: "here's some starting text",
  });

  return <CompositionArea {...props} />;
}

export function StickerButton(): JSX.Element {
  const props = useProps({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    knownPacks: [{} as any],
  });

  return <CompositionArea {...props} />;
}

export function MessageRequest(): JSX.Element {
  const props = useProps({
    messageRequestsEnabled: true,
  });

  return <CompositionArea {...props} />;
}

export function SmsOnlyFetchingUuid(): JSX.Element {
  const props = useProps({
    isSMSOnly: true,
    isFetchingUUID: true,
  });

  return <CompositionArea {...props} />;
}

SmsOnlyFetchingUuid.story = {
  name: 'SMS-only fetching UUID',
};

export function SmsOnly(): JSX.Element {
  const props = useProps({
    isSMSOnly: true,
  });

  return <CompositionArea {...props} />;
}

SmsOnly.story = {
  name: 'SMS-only',
};

export function Attachments(): JSX.Element {
  const props = useProps({
    draftAttachments: [
      fakeDraftAttachment({
        contentType: IMAGE_JPEG,
        url: landscapeGreenUrl,
      }),
    ],
  });

  return <CompositionArea {...props} />;
}

export function PendingApproval(): JSX.Element {
  return (
    <CompositionArea
      {...useProps({
        areWePendingApproval: true,
      })}
    />
  );
}

AnnouncementsOnlyGroup.story = {
  name: 'Announcements Only group',
};

export function AnnouncementsOnlyGroup(): JSX.Element {
  return (
    <CompositionArea
      {...useProps({
        announcementsOnly: true,
        areWeAdmin: false,
      })}
    />
  );
}

AnnouncementsOnlyGroup.story = {
  name: 'Announcements Only group',
};

export function Quote(): JSX.Element {
  return (
    <CompositionArea
      {...useProps({
        quotedMessageProps: {
          text: 'something',
          conversationColor: ConversationColors[10],
          conversationTitle: getDefaultConversation().title,
          isGiftBadge: false,
          isViewOnce: false,
          referencedMessageNotFound: false,
          authorTitle: 'Someone',
          isFromMe: false,
        },
      })}
    />
  );
}

export function QuoteWithPayment(): JSX.Element {
  return (
    <CompositionArea
      {...useProps({
        quotedMessageProps: {
          text: '',
          conversationColor: ConversationColors[10],
          conversationTitle: getDefaultConversation().title,
          isGiftBadge: false,
          isViewOnce: false,
          referencedMessageNotFound: false,
          authorTitle: 'Someone',
          isFromMe: false,
          payment: {
            kind: PaymentEventKind.Notification,
            note: 'Thanks',
          },
        },
      })}
    />
  );
}

QuoteWithPayment.story = {
  name: 'Quote with payment',
};

export function NoFormattingMenu(): JSX.Element {
  return <CompositionArea {...useProps({ isFormattingEnabled: false })} />;
}

export function NoFormattingFlag(): JSX.Element {
  return <CompositionArea {...useProps({ isFormattingFlagEnabled: false })} />;
}

export function NoSpoilerFormattingFlag(): JSX.Element {
  return (
    <CompositionArea
      {...useProps({ isFormattingSpoilersFlagEnabled: false })}
    />
  );
}
