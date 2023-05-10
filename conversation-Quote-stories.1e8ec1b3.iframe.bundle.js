"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[441],{"./ts/components/conversation/Quote.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AudioAttachment:()=>AudioAttachment,AudioOnly:()=>AudioOnly,CustomColor:()=>CustomColor,GiftBadge:()=>GiftBadge,ImageAttachment:()=>ImageAttachment,ImageAttachmentNoThumbnail:()=>ImageAttachmentNoThumbnail,ImageOnly:()=>ImageOnly,ImageTapToView:()=>ImageTapToView,IncomingByAnotherAuthor:()=>IncomingByAnotherAuthor,IncomingByMe:()=>IncomingByMe,IncomingOutgoingColors:()=>IncomingOutgoingColors,IsStoryReply:()=>IsStoryReply,IsStoryReplyEmoji:()=>IsStoryReplyEmoji,LongMessageAttachmentShouldBeHidden:()=>LongMessageAttachmentShouldBeHidden,MediaTapToView:()=>MediaTapToView,MentionIncomingAnotherAuthor:()=>MentionIncomingAnotherAuthor,MentionIncomingMe:()=>MentionIncomingMe,MentionOutgoingAnotherAuthor:()=>MentionOutgoingAnotherAuthor,MentionOutgoingMe:()=>MentionOutgoingMe,MessageNotFound:()=>MessageNotFound,MissingTextAttachment:()=>MissingTextAttachment,NoCloseButton:()=>NoCloseButton,OtherFileAttachment:()=>OtherFileAttachment,OtherFileOnly:()=>OtherFileOnly,OutgoingByAnotherAuthor:()=>OutgoingByAnotherAuthor,OutgoingByMe:()=>OutgoingByMe,Payment:()=>Payment,VideoAttachment:()=>VideoAttachment,VideoAttachmentNoThumbnail:()=>VideoAttachmentNoThumbnail,VideoOnly:()=>VideoOnly,VideoTapToView:()=>VideoTapToView,VoiceMessageAttachment:()=>VoiceMessageAttachment,VoiceMessageOnly:()=>VoiceMessageOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_types_Colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/types/Colors.ts"),_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/storybook/Fixtures.ts"),_TimelineMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/conversation/TimelineMessage.tsx"),_Message__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/conversation/Message.tsx"),_types_MIME__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/types/MIME.ts"),_Quote__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/components/conversation/Quote.tsx"),_messages_MessageReadStatus__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/messages/MessageReadStatus.ts"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./_locales/en/messages.json"),_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./ts/test-both/helpers/getDefaultConversation.ts"),_util__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./ts/components/_util.ts"),_types_Util__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./ts/types/Util.ts"),_types_Payment__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./ts/types/Payment.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_9__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_10__);const __WEBPACK_DEFAULT_EXPORT__={component:_Quote__WEBPACK_IMPORTED_MODULE_7__.p,title:"Components/Conversation/Quote",argTypes:{authorTitle:{defaultValue:"Default Sender"},conversationColor:{defaultValue:"forest"},doubleCheckMissingQuoteReference:{action:!0},i18n:{defaultValue:i18n},platform:{defautlValue:"darwin"},isFromMe:{control:{type:"checkbox"},defaultValue:!1},isGiftBadge:{control:{type:"checkbox"},defaultValue:!1},isIncoming:{control:{type:"checkbox"},defaultValue:!1},isViewOnce:{control:{type:"checkbox"},defaultValue:!1},onClick:{action:!0},onClose:{action:!0},rawAttachment:{defaultValue:void 0},referencedMessageNotFound:{control:{type:"checkbox"},defaultValue:!1},text:{defaultValue:"A sample message from a pal"}}};var defaultMessageProps={author:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__.E$)({id:"some-id",title:"Person X"}),canEditMessage:!0,canReact:!0,canReply:!0,canRetry:!0,canRetryDeleteForEveryone:!0,canDeleteForEveryone:!0,canDownload:!0,checkForAccount:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("checkForAccount"),clearTargetedMessage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--clearTargetedMessage"),containerElementRef:react__WEBPACK_IMPORTED_MODULE_0__.createRef(),containerWidthBreakpoint:_util__WEBPACK_IMPORTED_MODULE_12__.Up.Wide,conversationColor:"crimson",conversationId:"conversationId",conversationTitle:"Conversation Title",conversationType:"direct",direction:"incoming",showLightboxForViewOnceMedia:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--showLightboxForViewOnceMedia"),doubleCheckMissingQuoteReference:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--doubleCheckMissingQuoteReference"),getPreferredBadge:function(){},i18n,platform:"darwin",id:"messageId",interactionMode:"keyboard",isBlocked:!1,isMessageRequestAccepted:!0,isSelected:!1,isSelectMode:!1,isSpoilerExpanded:!1,toggleSelectMessage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("toggleSelectMessage"),kickOffAttachmentDownload:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--kickOffAttachmentDownload"),markAttachmentAsCorrupted:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--markAttachmentAsCorrupted"),messageExpanded:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--message-expanded"),showConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--showConversation"),openGiftBadge:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("openGiftBadge"),previews:[],reactToMessage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--reactToMessage"),readStatus:_messages_MessageReadStatus__WEBPACK_IMPORTED_MODULE_8__.N.Read,renderEmojiPicker:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{})},renderReactionPicker:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{})},renderAudioAttachment:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{children:"*AudioAttachment*"})},setMessageToEdit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("setMessageToEdit"),setQuoteByMessageId:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--setQuoteByMessageId"),retryMessageSend:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--retryMessageSend"),retryDeleteForEveryone:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--retryDeleteForEveryone"),saveAttachment:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("saveAttachment"),scrollToQuotedMessage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--scrollToQuotedMessage"),targetMessage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--targetMessage"),shouldCollapseAbove:!1,shouldCollapseBelow:!1,shouldHideMetadata:!1,showSpoiler:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("showSpoiler"),pushPanelForConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--pushPanelForConversation"),showContactModal:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--showContactModal"),showExpiredIncomingTapToViewToast:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("showExpiredIncomingTapToViewToast"),showExpiredOutgoingTapToViewToast:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("showExpiredOutgoingTapToViewToast"),toggleDeleteMessagesModal:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--toggleDeleteMessagesModal"),toggleForwardMessagesModal:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--toggleForwardMessagesModal"),showLightbox:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--showLightbox"),startConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("default--startConversation"),status:"sent",text:"This is really interesting.",textDirection:_Message__WEBPACK_IMPORTED_MODULE_5__.m5.Default,theme:_types_Util__WEBPACK_IMPORTED_MODULE_13__.f8.light,timestamp:Date.now(),viewStory:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("viewStory")},renderInMessage=function(_ref){var authorTitle=_ref.authorTitle,conversationColor=_ref.conversationColor,isFromMe=_ref.isFromMe,rawAttachment=_ref.rawAttachment,isViewOnce=_ref.isViewOnce,isGiftBadge=_ref.isGiftBadge,referencedMessageNotFound=_ref.referencedMessageNotFound,quoteText=_ref.text,messageProps=Object.assign({},defaultMessageProps,{conversationColor,quote:{authorId:"an-author",authorTitle,conversationColor,conversationTitle:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__.E$)().title,isFromMe,rawAttachment,isViewOnce,isGiftBadge,referencedMessageNotFound,sentAt:Date.now()-3e4,text:quoteText}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{style:{overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TimelineMessage__WEBPACK_IMPORTED_MODULE_4__.M,Object.assign({},messageProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TimelineMessage__WEBPACK_IMPORTED_MODULE_4__.M,Object.assign({},messageProps,{direction:"outgoing"}))]})};renderInMessage.displayName="renderInMessage";var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Quote__WEBPACK_IMPORTED_MODULE_7__.p,Object.assign({},args))};Template.displayName="Template";var TemplateInMessage=function(args){return renderInMessage(args)},OutgoingByAnotherAuthor=Template.bind({});OutgoingByAnotherAuthor.args={authorTitle:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__.E$)().title},OutgoingByAnotherAuthor.story={name:"Outgoing by Another Author"};var OutgoingByMe=Template.bind({});OutgoingByMe.args={isFromMe:!0},OutgoingByMe.story={name:"Outgoing by Me"};var IncomingByAnotherAuthor=Template.bind({});IncomingByAnotherAuthor.args={authorTitle:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__.E$)().title,isIncoming:!0},IncomingByAnotherAuthor.story={name:"Incoming by Another Author"};var IncomingByMe=Template.bind({});function IncomingOutgoingColors(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment,{children:_types_Colors__WEBPACK_IMPORTED_MODULE_2__.cU.map((function(color){return renderInMessage(Object.assign({},args,{conversationColor:color}))}))})}IncomingByMe.args={isFromMe:!0,isIncoming:!0},IncomingByMe.story={name:"Incoming by Me"},IncomingOutgoingColors.args={},IncomingOutgoingColors.story={name:"Incoming/Outgoing Colors"};var ImageOnly=Template.bind({});ImageOnly.args={text:"",rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,fileName:"sax.png",isVoiceMessage:!1,thumbnail:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,height:100,width:100,path:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ,objectUrl:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ}}};var ImageAttachment=Template.bind({});ImageAttachment.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,fileName:"sax.png",isVoiceMessage:!1,thumbnail:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,height:100,width:100,path:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ,objectUrl:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ}}};var ImageAttachmentNoThumbnail=Template.bind({});ImageAttachmentNoThumbnail.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,fileName:"sax.png",isVoiceMessage:!1}},ImageAttachmentNoThumbnail.story={name:"Image Attachment w/o Thumbnail"};var ImageTapToView=Template.bind({});ImageTapToView.args={text:"",isViewOnce:!0,rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,fileName:"sax.png",isVoiceMessage:!1}},ImageTapToView.story={name:"Image Tap-to-View"};var VideoOnly=Template.bind({});VideoOnly.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ml,fileName:"great-video.mp4",isVoiceMessage:!1,thumbnail:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,height:100,width:100,path:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ,objectUrl:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ}},text:void 0};var VideoAttachment=Template.bind({});VideoAttachment.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ml,fileName:"great-video.mp4",isVoiceMessage:!1,thumbnail:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,height:100,width:100,path:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ,objectUrl:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ}}};var VideoAttachmentNoThumbnail=Template.bind({});VideoAttachmentNoThumbnail.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ml,fileName:"great-video.mp4",isVoiceMessage:!1}},VideoAttachmentNoThumbnail.story={name:"Video Attachment w/o Thumbnail"};var VideoTapToView=Template.bind({});VideoTapToView.args={text:"",isViewOnce:!0,rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ml,fileName:"great-video.mp4",isVoiceMessage:!1}},VideoTapToView.story={name:"Video Tap-to-View"};var GiftBadge=TemplateInMessage.bind({});GiftBadge.args={text:"Some text which shouldn't be rendered",isGiftBadge:!0};var AudioOnly=Template.bind({});AudioOnly.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ty,fileName:"great-video.mp3",isVoiceMessage:!1},text:void 0};var AudioAttachment=Template.bind({});AudioAttachment.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ty,fileName:"great-video.mp3",isVoiceMessage:!1}};var VoiceMessageOnly=Template.bind({});VoiceMessageOnly.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ty,fileName:"great-video.mp3",isVoiceMessage:!0},text:void 0};var VoiceMessageAttachment=Template.bind({});VoiceMessageAttachment.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ty,fileName:"great-video.mp3",isVoiceMessage:!0}};var OtherFileOnly=Template.bind({});OtherFileOnly.args={rawAttachment:{contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_6__.cJ)("application/json"),fileName:"great-data.json",isVoiceMessage:!1},text:void 0};var MediaTapToView=Template.bind({});MediaTapToView.args={text:"",isViewOnce:!0,rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ty,fileName:"great-video.mp3",isVoiceMessage:!1}},MediaTapToView.story={name:"Media Tap-to-View"};var OtherFileAttachment=Template.bind({});OtherFileAttachment.args={rawAttachment:{contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_6__.cJ)("application/json"),fileName:"great-data.json",isVoiceMessage:!1}};var LongMessageAttachmentShouldBeHidden=Template.bind({});LongMessageAttachmentShouldBeHidden.args={rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.rJ,fileName:"signal-long-message-123.txt",isVoiceMessage:!1}},LongMessageAttachmentShouldBeHidden.story={name:"Long message attachment (should be hidden)"};var NoCloseButton=Template.bind({});NoCloseButton.args={onClose:void 0};var MessageNotFound=TemplateInMessage.bind({});MessageNotFound.args={referencedMessageNotFound:!0};var MissingTextAttachment=Template.bind({});MissingTextAttachment.args={text:void 0},MissingTextAttachment.story={name:"Missing Text & Attachment"};var MentionOutgoingAnotherAuthor=Template.bind({});MentionOutgoingAnotherAuthor.args={authorTitle:"Tony Stark",text:"@Captain America Lunch later?"},MentionOutgoingAnotherAuthor.story={name:"@mention + outgoing + another author"};var MentionOutgoingMe=Template.bind({});MentionOutgoingMe.args={isFromMe:!0,text:"@Captain America Lunch later?"},MentionOutgoingMe.story={name:"@mention + outgoing + me"};var MentionIncomingAnotherAuthor=Template.bind({});MentionIncomingAnotherAuthor.args={authorTitle:"Captain America",isIncoming:!0,text:"@Tony Stark sure"},MentionIncomingAnotherAuthor.story={name:"@mention + incoming + another author"};var MentionIncomingMe=Template.bind({});function CustomColor(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Quote__WEBPACK_IMPORTED_MODULE_7__.p,Object.assign({},args,{customColor:{start:{hue:82,saturation:35}}})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Quote__WEBPACK_IMPORTED_MODULE_7__.p,Object.assign({},args,{isIncoming:!1,text:"A gradient",customColor:{deg:192,start:{hue:304,saturation:85},end:{hue:231,saturation:76}}}))]})}MentionIncomingMe.args={isFromMe:!0,isIncoming:!0,text:"@Tony Stark sure"},MentionIncomingMe.story={name:"@mention + incoming + me"},CustomColor.args={isIncoming:!0,text:"Solid + Gradient"};var IsStoryReply=Template.bind({});IsStoryReply.args={text:"Wow!",authorTitle:"Amanda",isStoryReply:!0,moduleClassName:"StoryReplyQuote",onClose:void 0,rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.ml,fileName:"great-video.mp4",isVoiceMessage:!1}},IsStoryReply.story={name:"isStoryReply"};var IsStoryReplyEmoji=Template.bind({});IsStoryReplyEmoji.args={authorTitle:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_11__.E$)().firstName,isStoryReply:!0,moduleClassName:"StoryReplyQuote",onClose:void 0,rawAttachment:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,fileName:"sax.png",isVoiceMessage:!1,thumbnail:{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_6__.Ih,height:100,width:100,path:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ,objectUrl:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_3__.UJ}},reactionEmoji:"🏋️"},IsStoryReplyEmoji.story={name:"isStoryReply emoji"};var Payment=Template.bind({});Payment.args={text:"",payment:{kind:_types_Payment__WEBPACK_IMPORTED_MODULE_14__.s.Notification,note:null}};var __namedExportsOrder=["OutgoingByAnotherAuthor","OutgoingByMe","IncomingByAnotherAuthor","IncomingByMe","IncomingOutgoingColors","ImageOnly","ImageAttachment","ImageAttachmentNoThumbnail","ImageTapToView","VideoOnly","VideoAttachment","VideoAttachmentNoThumbnail","VideoTapToView","GiftBadge","AudioOnly","AudioAttachment","VoiceMessageOnly","VoiceMessageAttachment","OtherFileOnly","MediaTapToView","OtherFileAttachment","LongMessageAttachmentShouldBeHidden","NoCloseButton","MessageNotFound","MissingTextAttachment","MentionOutgoingAnotherAuthor","MentionOutgoingMe","MentionIncomingAnotherAuthor","MentionIncomingMe","CustomColor","IsStoryReply","IsStoryReplyEmoji","Payment"]},"./ts/storybook/Fixtures.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yl:()=>gifUrl,L$:()=>landscapeGreenUrl,UJ:()=>pngUrl,K$:()=>portraitTealUrl,e7:()=>squareStickerUrl});const giphy_GVNvOUpeYmI7e_namespaceObject=__webpack_require__.p+"static/media/giphy-GVNvOUpeYmI7e.5fb55e50.gif",freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject=__webpack_require__.p+"static/media/freepngs-2cd43b_bed7d1327e88454487397574d87b64dc_mv2.f13513c6.png",_1000x50_green_namespaceObject=__webpack_require__.p+"static/media/1000x50-green.221b1d06.jpeg",_50x1000_teal_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/50x1000-teal.e07215d6.jpeg"),_512x515_thumbs_up_lincoln_namespaceObject=__webpack_require__.p+"static/media/512x515-thumbs-up-lincoln.1e1e8fb6.webp";var gifUrl=`/${giphy_GVNvOUpeYmI7e_namespaceObject}`,pngUrl=`/${freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject}`,landscapeGreenUrl=`/${_1000x50_green_namespaceObject}`,portraitTealUrl=`/${_50x1000_teal_namespaceObject}`,squareStickerUrl=`/${_512x515_thumbs_up_lincoln_namespaceObject}`}}]);