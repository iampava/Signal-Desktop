"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[878],{"./ts/components/conversation/TimelineMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>TimelineMessage});var noop=__webpack_require__("./node_modules/lodash/noop.js"),noop_default=__webpack_require__.n(noop),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),es6=__webpack_require__("./node_modules/react-contextmenu/es6/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Manager=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),Popper=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),Reference=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),Attachment=__webpack_require__("./ts/types/Attachment.ts"),handleOutsideClick=__webpack_require__("./ts/util/handleOutsideClick.ts"),popperUtil=__webpack_require__("./ts/util/popperUtil.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function StopPropagation(_ref){var children=_ref.children,className=_ref.className;return(0,jsx_runtime.jsx)("div",{className,onClick:function(ev){return ev.stopPropagation()},onKeyDown:function(ev){return ev.stopPropagation()},children})}StopPropagation.displayName="StopPropagation";var _util=__webpack_require__("./ts/components/_util.ts"),Message=__webpack_require__("./ts/components/conversation/Message.tsx"),MessageBodyReadMore=__webpack_require__("./ts/components/conversation/MessageBodyReadMore.tsx"),useKeyboardShortcuts=__webpack_require__("./ts/hooks/useKeyboardShortcuts.tsx"),Panels=__webpack_require__("./ts/types/Panels.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TimelineMessage(props){var attachments=props.attachments,author=props.author,canDownload=props.canDownload,canCopy=props.canCopy,canEditMessage=props.canEditMessage,canReact=props.canReact,canReply=props.canReply,canRetry=props.canRetry,canRetryDeleteForEveryone=props.canRetryDeleteForEveryone,contact=props.contact,containerElementRef=props.containerElementRef,containerWidthBreakpoint=props.containerWidthBreakpoint,conversationId=props.conversationId,deletedForEveryone=props.deletedForEveryone,direction=props.direction,giftBadge=props.giftBadge,i18n=props.i18n,id=props.id,isTargeted=props.isTargeted,isSticker=props.isSticker,isTapToView=props.isTapToView,kickOffAttachmentDownload=props.kickOffAttachmentDownload,payment=props.payment,copyMessageText=props.copyMessageText,pushPanelForConversation=props.pushPanelForConversation,reactToMessage=props.reactToMessage,renderEmojiPicker=props.renderEmojiPicker,renderReactionPicker=props.renderReactionPicker,retryDeleteForEveryone=props.retryDeleteForEveryone,retryMessageSend=props.retryMessageSend,saveAttachment=props.saveAttachment,selectedReaction=props.selectedReaction,setQuoteByMessageId=props.setQuoteByMessageId,setMessageToEdit=props.setMessageToEdit,text=props.text,timestamp=props.timestamp,toggleDeleteMessagesModal=props.toggleDeleteMessagesModal,toggleForwardMessagesModal=props.toggleForwardMessagesModal,toggleSelectMessage=props.toggleSelectMessage,_useState2=_slicedToArray((0,react.useState)(void 0),2),reactionPickerRoot=_useState2[0],setReactionPickerRoot=_useState2[1],menuTriggerRef=(0,react.useRef)(null),isWindowWidthNotNarrow=containerWidthBreakpoint!==_util.Up.Narrow,popperPreventOverflowModifier=(0,react.useCallback)((function(){return{name:"preventOverflow",options:{altAxis:!0,boundary:containerElementRef.current||void 0,padding:{bottom:16,left:8,right:8,top:16}}}}),[containerElementRef]),triggerId=String(id||`${author.id}-${timestamp}`),toggleReactionPicker=(0,react.useCallback)((function(){var onlyRemove=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(reactionPickerRoot)return document.body.removeChild(reactionPickerRoot),void setReactionPickerRoot(void 0);if(!onlyRemove){var root=document.createElement("div");document.body.appendChild(root),setReactionPickerRoot(root)}}),[reactionPickerRoot]);(0,react.useEffect)((function(){var cleanUpHandler;return reactionPickerRoot&&(cleanUpHandler=(0,handleOutsideClick.p)((function(){return toggleReactionPicker(!0),!0}),{containerElements:[reactionPickerRoot],name:"Message.reactionPicker"})),function(){var _cleanUpHandler;null===(_cleanUpHandler=cleanUpHandler)||void 0===_cleanUpHandler||_cleanUpHandler()}}));var openGenericAttachment=(0,react.useCallback)((function(event){if(event&&(event.preventDefault(),event.stopPropagation()),attachments&&1===attachments.length){var attachment=attachments[0];(0,Attachment.TG)(attachment)?saveAttachment(attachment,timestamp):kickOffAttachmentDownload({attachment,messageId:id})}}),[kickOffAttachmentDownload,saveAttachment,attachments,id,timestamp]),handleContextMenu=react.useCallback((function(event){var selection=window.getSelection();selection&&!selection.isCollapsed||event.target instanceof HTMLAnchorElement||menuTriggerRef.current&&menuTriggerRef.current.handleContextClick(event)}),[menuTriggerRef]),canForward=!(isTapToView||deletedForEveryone||giftBadge||contact||payment),shouldShowAdditional=(0,MessageBodyReadMore._)(text||"")||!isWindowWidthNotNarrow,multipleAttachments=attachments&&attachments.length>1,firstAttachment=attachments&&attachments[0],handleDownload=!canDownload||isSticker||multipleAttachments||isTapToView||!firstAttachment||firstAttachment.pending?void 0:openGenericAttachment,handleReplyToMessage=(0,react.useCallback)((function(){canReply&&setQuoteByMessageId(conversationId,id)}),[canReply,conversationId,id,setQuoteByMessageId]),handleReact=(0,react.useCallback)((function(){canReact&&toggleReactionPicker()}),[canReact,toggleReactionPicker]),toggleReactionPickerKeyboard=(0,useKeyboardShortcuts.sP)(handleReact||noop_default());(0,react.useEffect)((function(){return isTargeted&&document.addEventListener("keydown",toggleReactionPickerKeyboard),function(){document.removeEventListener("keydown",toggleReactionPickerKeyboard)}}),[isTargeted,toggleReactionPickerKeyboard]);var renderMenu=(0,react.useCallback)((function(){return(0,jsx_runtime.jsxs)(Manager.dK,{children:[(0,jsx_runtime.jsx)(MessageMenu,{i18n,triggerId,isWindowWidthNotNarrow,direction,menuTriggerRef,showMenu:handleContextMenu,onDownload:handleDownload,onReplyToMessage:handleReplyToMessage,onReact:handleReact}),reactionPickerRoot&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(Popper.r,{placement:"top",modifiers:[(0,popperUtil.E)(4),popperPreventOverflowModifier()],children:function(_ref){var ref=_ref.ref,style=_ref.style;return renderReactionPicker({ref,style,selected:selectedReaction,onClose:toggleReactionPicker,onPick:function(emoji){toggleReactionPicker(!0),reactToMessage(id,{emoji,remove:emoji===selectedReaction})},renderEmojiPicker})}}),reactionPickerRoot)]})}),[i18n,triggerId,isWindowWidthNotNarrow,direction,menuTriggerRef,handleContextMenu,handleDownload,handleReplyToMessage,handleReact,reactionPickerRoot,popperPreventOverflowModifier,renderReactionPicker,selectedReaction,reactToMessage,renderEmojiPicker,toggleReactionPicker,id]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Message.v0,Object.assign({},props,{renderingContext:"conversation/TimelineItem",onContextMenu:handleContextMenu,renderMenu,onToggleSelect:function(selected,shift){toggleSelectMessage(conversationId,id,shift,selected)},onReplyToMessage:handleReplyToMessage})),(0,jsx_runtime.jsx)(MessageContextMenu,{i18n,triggerId,shouldShowAdditional,onDownload:handleDownload,onEdit:canEditMessage?function(){return setMessageToEdit(conversationId,id)}:void 0,onReplyToMessage:handleReplyToMessage,onReact:handleReact,onRetryMessageSend:canRetry?function(){return retryMessageSend(id)}:void 0,onRetryDeleteForEveryone:canRetryDeleteForEveryone?function(){return retryDeleteForEveryone(id)}:void 0,onCopy:canCopy?function(){return copyMessageText(id)}:void 0,onSelect:function(){return toggleSelectMessage(conversationId,id,!1,!0)},onForward:canForward?function(){return toggleForwardMessagesModal([id])}:void 0,onDeleteMessage:function(){toggleDeleteMessagesModal({conversationId,messageIds:[id]})},onMoreInfo:function(){return pushPanelForConversation({type:Panels.w.MessageDetails,args:{messageId:id}})}})]})}function MessageMenu(_ref2){var i18n=_ref2.i18n,triggerId=_ref2.triggerId,direction=_ref2.direction,isWindowWidthNotNarrow=_ref2.isWindowWidthNotNarrow,menuTriggerRef=_ref2.menuTriggerRef,showMenu=_ref2.showMenu,onDownload=_ref2.onDownload,onReplyToMessage=_ref2.onReplyToMessage,onReact=_ref2.onReact,menuButton=(0,jsx_runtime.jsx)(Reference.s,{children:function(_ref3){var popperRef=_ref3.ref,maybePopperRef=isWindowWidthNotNarrow?void 0:popperRef;return(0,jsx_runtime.jsx)(StopPropagation,{className:"module-message__buttons__menu--container",children:(0,jsx_runtime.jsx)(es6.W4,{id:triggerId,ref:menuTriggerRef,children:(0,jsx_runtime.jsx)("div",{ref:maybePopperRef,role:"button",onClick:showMenu,"aria-label":i18n("icu:messageContextMenuButton"),className:classnames_default()("module-message__buttons__menu",`module-message__buttons__download--${direction}`),onDoubleClick:function(ev){ev.stopPropagation()}})})})}});return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("module-message__buttons",`module-message__buttons--${direction}`),children:[isWindowWidthNotNarrow&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[onReact&&(0,jsx_runtime.jsx)(Reference.s,{children:function(_ref4){var popperRef=_ref4.ref,maybePopperRef=isWindowWidthNotNarrow?popperRef:void 0;return(0,jsx_runtime.jsx)("div",{ref:maybePopperRef,onClick:function(event){event.stopPropagation(),event.preventDefault(),onReact()},role:"button",className:"module-message__buttons__react","aria-label":i18n("icu:reactToMessage"),onDoubleClick:function(ev){ev.stopPropagation()}})}}),onDownload&&(0,jsx_runtime.jsx)("div",{onClick:onDownload,role:"button","aria-label":i18n("icu:downloadAttachment"),className:classnames_default()("module-message__buttons__download",`module-message__buttons__download--${direction}`),onDoubleClick:function(ev){ev.stopPropagation()}}),onReplyToMessage&&(0,jsx_runtime.jsx)("div",{onClick:function(event){event.stopPropagation(),event.preventDefault(),onReplyToMessage()},role:"button","aria-label":i18n("icu:replyToMessage"),className:classnames_default()("module-message__buttons__reply",`module-message__buttons__download--${direction}`),onDoubleClick:function(ev){ev.stopPropagation()}})]}),menuButton]})}MessageMenu.displayName="MessageMenu";var MessageContextMenu=function(_ref5){var i18n=_ref5.i18n,triggerId=_ref5.triggerId,shouldShowAdditional=_ref5.shouldShowAdditional,onDownload=_ref5.onDownload,onEdit=_ref5.onEdit,onReplyToMessage=_ref5.onReplyToMessage,onReact=_ref5.onReact,onMoreInfo=_ref5.onMoreInfo,onCopy=_ref5.onCopy,onSelect=_ref5.onSelect,onRetryMessageSend=_ref5.onRetryMessageSend,onRetryDeleteForEveryone=_ref5.onRetryDeleteForEveryone,onForward=_ref5.onForward,onDeleteMessage=_ref5.onDeleteMessage,menu=(0,jsx_runtime.jsxs)(es6.xV,{id:triggerId,children:[shouldShowAdditional&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[onDownload&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__download"},onClick:onDownload,children:i18n("icu:MessageContextMenu__download")}),onReplyToMessage&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__reply"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onReplyToMessage()},children:i18n("icu:MessageContextMenu__reply")}),onReact&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__react"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onReact()},children:i18n("icu:MessageContextMenu__react")})]}),onForward&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__forward-message"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onForward()},children:i18n("icu:MessageContextMenu__forward")}),onEdit&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__edit-message"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onEdit()},children:i18n("icu:edit")}),(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__select"},onClick:function(){onSelect()},children:i18n("icu:MessageContextMenu__select")}),onCopy&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__copy-timestamp"},onClick:function(){onCopy()},children:i18n("icu:copy")}),(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__more-info"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onMoreInfo()},children:i18n("icu:MessageContextMenu__info")}),(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__delete-message"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onDeleteMessage()},children:i18n("icu:MessageContextMenu__deleteMessage")}),onRetryMessageSend&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__retry-send"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onRetryMessageSend()},children:i18n("icu:retrySend")}),onRetryDeleteForEveryone&&(0,jsx_runtime.jsx)(es6.sN,{attributes:{className:"module-message__context--icon module-message__context__delete-message-for-everyone"},onClick:function(event){event.stopPropagation(),event.preventDefault(),onRetryDeleteForEveryone()},children:i18n("icu:retryDeleteForEveryone")})]});return react_dom.createPortal(menu,document.body)}},"./ts/components/emoji/Emoji.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Emoji,g:()=>EmojiSizes});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/emoji/lib.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),EmojiSizes=[16,18,20,24,28,32,48,64,66],Emoji=react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,emoji=_ref.emoji,shortName=_ref.shortName,_ref$size=_ref.size,size=void 0===_ref$size?28:_ref$size,skinTone=_ref.skinTone,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,title=_ref.title,image="";return shortName?image=(0,_lib__WEBPACK_IMPORTED_MODULE_2__.al)(shortName,skinTone):emoji&&(image=(0,_lib__WEBPACK_IMPORTED_MODULE_2__.rl)(emoji)||""),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{ref,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-emoji",`module-emoji--${size}px`,className),style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{className:`module-emoji__image--${size}px`,src:image,"aria-label":null!=title?title:emoji,title:null!=title?title:emoji})})})))},"./ts/hooks/useKeyboardShortcuts.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Al:()=>useActiveCallShortcuts,Gu:()=>useStartCallShortcuts,aL:()=>useKeyboardShortcuts,dn:()=>useAttachFileShortcut,oN:()=>useIncomingCallShortcuts,py:()=>useStartRecordingShortcut,sP:()=>useToggleReactionPicker});var lodash_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/get.js"),lodash_get__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/services/keyboardLayout.ts");function isCmdOrCtrl(ev){var ctrlKey=ev.ctrlKey,metaKey=ev.metaKey,commandKey="darwin"===lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window,"platform")&&metaKey,controlKey="darwin"!==lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window,"platform")&&ctrlKey;return commandKey||controlKey}function isCtrlOrAlt(ev){var altKey=ev.altKey,ctrlKey=ev.ctrlKey,controlKey="darwin"===lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window,"platform")&&ctrlKey,theAltKey="darwin"!==lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window,"platform")&&altKey;return controlKey||theAltKey}function useActiveCallShortcuts(hangUp){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return!(!isCtrlOrAlt(ev)||!shiftKey||"e"!==key&&"E"!==key)&&(ev.preventDefault(),ev.stopPropagation(),hangUp("Keyboard shortcut"),!0)}),[hangUp])}function useIncomingCallShortcuts(acceptAudioCall,acceptVideoCall,declineCall){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return isCtrlOrAlt(ev)&&shiftKey&&("v"===key||"V"===key)?(ev.preventDefault(),ev.stopPropagation(),acceptVideoCall(),!0):isCtrlOrAlt(ev)&&shiftKey&&("a"===key||"A"===key)?(ev.preventDefault(),ev.stopPropagation(),acceptAudioCall(),!0):!(!isCtrlOrAlt(ev)||!shiftKey||"d"!==key&&"D"!==key)&&(ev.preventDefault(),ev.stopPropagation(),declineCall(),!0)}),[acceptAudioCall,acceptVideoCall,declineCall])}function useStartCallShortcuts(startAudioCall,startVideoCall){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return isCtrlOrAlt(ev)&&shiftKey&&("c"===key||"C"===key)?(ev.preventDefault(),ev.stopPropagation(),startAudioCall(),!0):!(!isCtrlOrAlt(ev)||!shiftKey||"y"!==key&&"Y"!==key)&&(ev.preventDefault(),ev.stopPropagation(),startVideoCall(),!0)}),[startAudioCall,startVideoCall])}function useStartRecordingShortcut(startAudioRecording){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return!(!isCmdOrCtrl(ev)||!shiftKey||"v"!==key&&"V"!==key)&&(ev.preventDefault(),ev.stopPropagation(),startAudioRecording(),!0)}),[startAudioRecording])}function useAttachFileShortcut(attachFile){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return!(!isCmdOrCtrl(ev)||shiftKey||"u"!==key&&"U"!==key)&&(ev.preventDefault(),ev.stopPropagation(),attachFile(),!0)}),[attachFile])}function useToggleReactionPicker(handleReact){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ev){var shiftKey=ev.shiftKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_2__.P(ev);return!(!isCmdOrCtrl(ev)||!shiftKey||"e"!==key&&"E"!==key)&&(ev.preventDefault(),ev.stopPropagation(),handleReact(),!0)}),[handleReact])}function useKeyboardShortcuts(){for(var _len=arguments.length,eventHandlers=new Array(_len),_key=0;_key<_len;_key++)eventHandlers[_key]=arguments[_key];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){function handleKeydown(ev){eventHandlers.some((function(eventHandler){return eventHandler(ev)}))}return document.addEventListener("keydown",handleKeydown),function(){document.removeEventListener("keydown",handleKeydown)}}),[eventHandlers])}},"./ts/services/keyboardLayout.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>lookup});var layoutMap,_util_assert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/assert.ts");function lookup(_ref){var _layoutMap$get,code=_ref.code,key=_ref.key;return(0,_util_assert__WEBPACK_IMPORTED_MODULE_0__.Yj)(void 0!==layoutMap,"keyboardLayout not initialized"),null!==(_layoutMap$get=layoutMap.get(code))&&void 0!==_layoutMap$get?_layoutMap$get:key}},"./ts/util/popperUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>offsetDistanceModifier,W:()=>sameWidthModifier});var offsetDistanceModifier=function(distance){return{name:"offset",options:{offset:[void 0,distance]}}},sameWidthModifier={name:"sameWidth",enabled:!0,phase:"write",fn:function(_ref){var state=_ref.state;state.elements.popper.style.width=`${state.rects.reference.width}px`}}}}]);