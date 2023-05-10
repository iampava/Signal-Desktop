/*! For license information please see Inbox-stories.07f19ccb.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7402,3905],{"./ts/components/Inbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Inbox_stories});var noop=__webpack_require__("./node_modules/lodash/noop.js"),noop_default=__webpack_require__.n(noop),react=__webpack_require__("./node_modules/react/index.js"),log=__webpack_require__("./ts/logging/log.ts"),durations=__webpack_require__("./ts/util/durations/index.ts"),ToastStickerPackInstallFailed=__webpack_require__("./ts/components/ToastStickerPackInstallFailed.tsx"),Intl=__webpack_require__("./ts/components/Intl.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function WhatsNewLink(props){var i18n=props.i18n,showWhatsNewModal=props.showWhatsNewModal;return(0,jsx_runtime.jsx)(Intl.R,{i18n,id:"icu:whatsNew",components:{whatsNew:(0,jsx_runtime.jsx)("button",{className:"WhatsNew",type:"button",onClick:showWhatsNewModal,children:i18n("icu:viewReleaseNotes")})}})}WhatsNewLink.displayName="WhatsNewLink";var ComposerStep,OneTimeModalState,ConversationVerificationState,TargetedMessageSource,showToast=__webpack_require__("./ts/util/showToast.tsx"),assert=__webpack_require__("./ts/util/assert.ts");!function(ComposerStep){ComposerStep.StartDirectConversation="StartDirectConversation",ComposerStep.ChooseGroupMembers="ChooseGroupMembers",ComposerStep.SetGroupMetadata="SetGroupMetadata"}(ComposerStep||(ComposerStep={})),function(OneTimeModalState){OneTimeModalState[OneTimeModalState.NeverShown=0]="NeverShown",OneTimeModalState[OneTimeModalState.Showing=1]="Showing",OneTimeModalState[OneTimeModalState.Shown=2]="Shown"}(OneTimeModalState||(OneTimeModalState={})),function(ConversationVerificationState){ConversationVerificationState.PendingVerification="PendingVerification",ConversationVerificationState.VerificationCancelled="VerificationCancelled"}(ConversationVerificationState||(ConversationVerificationState={})),function(TargetedMessageSource){TargetedMessageSource.Reset="Reset",TargetedMessageSource.NavigateToMessage="NavigateToMessage",TargetedMessageSource.Focus="Focus"}(TargetedMessageSource||(TargetedMessageSource={}));var usePrevious=__webpack_require__("./ts/hooks/usePrevious.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Inbox(_ref){var activeModal,firstEnvelopeTimestamp=_ref.firstEnvelopeTimestamp,envelopeTimestamp=_ref.envelopeTimestamp,hasInitialLoadCompleted=_ref.hasInitialLoadCompleted,i18n=_ref.i18n,isCustomizingPreferredReactions=_ref.isCustomizingPreferredReactions,onConversationClosed=_ref.onConversationClosed,onConversationOpened=_ref.onConversationOpened,renderConversationView=_ref.renderConversationView,renderCustomizingPreferredReactionsModal=_ref.renderCustomizingPreferredReactionsModal,renderLeftPane=_ref.renderLeftPane,renderMiniPlayer=_ref.renderMiniPlayer,scrollToMessage=_ref.scrollToMessage,selectedConversationId=_ref.selectedConversationId,targetedMessage=_ref.targetedMessage,targetedMessageSource=_ref.targetedMessageSource,showConversation=_ref.showConversation,showWhatsNewModal=_ref.showWhatsNewModal,_useState2=_slicedToArray((0,react.useState)(hasInitialLoadCompleted),2),internalHasInitialLoadCompleted=_useState2[0],setInternalHasInitialLoadCompleted=_useState2[1],prevConversationId=(0,usePrevious.D)(selectedConversationId,selectedConversationId),now=(0,react.useMemo)((function(){return Date.now()}),[]),midnight=(0,react.useMemo)((function(){var date=new Date(now);return date.setHours(0),date.setMinutes(0),date.setSeconds(0),date.setMilliseconds(0),date.getTime()}),[now]);if((0,react.useEffect)((function(){if(prevConversationId!==selectedConversationId?(prevConversationId&&onConversationClosed(prevConversationId,"opened another conversation"),selectedConversationId&&onConversationOpened(selectedConversationId,targetedMessage)):selectedConversationId&&targetedMessage&&targetedMessageSource!==TargetedMessageSource.Focus&&scrollToMessage(selectedConversationId,targetedMessage),selectedConversationId){var conversation=window.ConversationController.get(selectedConversationId);(0,assert.Yj)(conversation,"Conversation must be found"),conversation.setMarkedUnread(!1)}}),[onConversationClosed,onConversationOpened,prevConversationId,scrollToMessage,selectedConversationId,targetedMessage,targetedMessageSource]),(0,react.useEffect)((function(){function refreshConversation(_ref2){var newId=_ref2.newId,oldId=_ref2.oldId;prevConversationId===oldId&&showConversation({conversationId:newId})}function unload(){prevConversationId&&onConversationClosed(prevConversationId,"force unload requested")}function packInstallFailed(){(0,showToast.C)(ToastStickerPackInstallFailed.$)}return window.Whisper.events.on("pack-install-failed",packInstallFailed),window.Whisper.events.on("refreshConversation",refreshConversation),window.Whisper.events.on("setupAsNewDevice",unload),function(){window.Whisper.events.off("pack-install-failed",packInstallFailed),window.Whisper.events.off("refreshConversation",refreshConversation),window.Whisper.events.off("setupAsNewDevice",unload)}}),[onConversationClosed,prevConversationId,showConversation]),(0,react.useEffect)((function(){if(!internalHasInitialLoadCompleted){var interval=setInterval((function(){var status=window.getSocketStatus();switch(status){case"CONNECTING":break;case"OPEN":clearInterval(interval);break;case"CLOSING":case"CLOSED":clearInterval(interval),setInternalHasInitialLoadCompleted(!0);break;default:log.warn(`startConnectionListener: Found unexpected socket status ${status}; setting load to done manually.`),setInternalHasInitialLoadCompleted(!0)}}),durations.sh);return function(){clearInterval(interval)}}}),[internalHasInitialLoadCompleted]),(0,react.useEffect)((function(){setInternalHasInitialLoadCompleted(hasInitialLoadCompleted)}),[hasInitialLoadCompleted]),!internalHasInitialLoadCompleted){var message,loadingProgress=0;if(void 0!==firstEnvelopeTimestamp&&void 0!==envelopeTimestamp&&(loadingProgress=100*Math.max(0,Math.min(1,Math.max(0,envelopeTimestamp-firstEnvelopeTimestamp)/Math.max(1e-23,now-firstEnvelopeTimestamp)))),void 0!==envelopeTimestamp){var daysBeforeMidnight=Math.ceil((midnight-envelopeTimestamp)/durations.x4);message=daysBeforeMidnight<=0?i18n("icu:loadingMessages--today"):1===daysBeforeMidnight?i18n("icu:loadingMessages--yesterday"):i18n("icu:loadingMessages--other",{daysAgo:daysBeforeMidnight})}return(0,jsx_runtime.jsxs)("div",{className:"app-loading-screen",children:[(0,jsx_runtime.jsx)("div",{className:"module-title-bar-drag-area"}),(0,jsx_runtime.jsx)("div",{className:"module-splash-screen__logo module-img--150"}),void 0===envelopeTimestamp?(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsx)("span",{className:"dot"}),(0,jsx_runtime.jsx)("span",{className:"dot"}),(0,jsx_runtime.jsx)("span",{className:"dot"})]}):(0,jsx_runtime.jsx)("div",{className:"app-loading-screen__progress--container",children:(0,jsx_runtime.jsx)("div",{className:"app-loading-screen__progress--bar",style:{transform:`translateX(${loadingProgress-100}%)`}})}),void 0===message?(0,jsx_runtime.jsx)("div",{className:"message-placeholder"}):(0,jsx_runtime.jsx)("div",{className:"message",children:message}),(0,jsx_runtime.jsx)("div",{id:"toast"})]})}return isCustomizingPreferredReactions&&(activeModal=renderCustomizingPreferredReactionsModal()),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"Inbox",children:[(0,jsx_runtime.jsx)("div",{className:"module-title-bar-drag-area"}),(0,jsx_runtime.jsx)("div",{className:"left-pane-wrapper",children:renderLeftPane()}),(0,jsx_runtime.jsxs)("div",{className:"conversation-stack",children:[(0,jsx_runtime.jsx)("div",{id:"toast"}),selectedConversationId&&(0,jsx_runtime.jsx)("div",{className:"conversation",id:`conversation-${selectedConversationId}`,children:renderConversationView()}),!prevConversationId&&(0,jsx_runtime.jsxs)("div",{className:"no-conversation-open",children:[renderMiniPlayer({shouldFlow:!1}),(0,jsx_runtime.jsx)("div",{className:"module-splash-screen__logo module-img--128 module-logo-blue"}),(0,jsx_runtime.jsx)("h3",{children:i18n("icu:welcomeToSignal")}),(0,jsx_runtime.jsx)("p",{className:"whats-new-placeholder",children:(0,jsx_runtime.jsx)(WhatsNewLink,{i18n,showWhatsNewModal})})]})]})]}),activeModal]})}var setupI18n=__webpack_require__("./ts/util/setupI18n.ts"),messages=__webpack_require__("./_locales/en/messages.json"),_excluded=["daysAgo"];function Inbox_stories_slicedToArray(arr,i){return function Inbox_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Inbox_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Inbox_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Inbox_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Inbox_stories_arrayLikeToArray(o,minLen)}(arr,i)||function Inbox_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Inbox_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Inbox_stories={title:"Components/Inbox",argTypes:{i18n:{defaultValue:(0,setupI18n.E5)("en",messages)},hasInitialLoadCompleted:{defaultValue:!1},daysAgo:{control:"select",defaultValue:void 0,options:[void 0,1,2,3,7,14,21]},isCustomizingPreferredReactions:{defaultValue:!1},onConversationClosed:{action:!0},onConversationOpened:{action:!0},scrollToMessage:{action:!0},showConversation:{action:!0},showWhatsNewModal:{action:!0}}};var Template=function(_ref){var daysAgo=_ref.daysAgo,args=_objectWithoutProperties(_ref,_excluded),now=(0,react.useMemo)((function(){return Date.now()}),[]),_useState2=Inbox_stories_slicedToArray((0,react.useState)(0),2),dayOffset=_useState2[0],setDayOffset=_useState2[1];(0,react.useEffect)((function(){if(void 0===daysAgo)return setDayOffset(0),noop_default();var interval=setInterval((function(){setDayOffset((function(prevValue){return(prevValue+1/24)%daysAgo}))}),durations.sh/10);return function(){return clearInterval(interval)}}),[now,daysAgo]);var firstEnvelopeTimestamp=void 0===daysAgo?void 0:now-daysAgo*durations.x4,envelopeTimestamp=void 0===firstEnvelopeTimestamp?void 0:firstEnvelopeTimestamp+dayOffset*durations.x4;return(0,jsx_runtime.jsx)(Inbox,Object.assign({},args,{firstEnvelopeTimestamp,envelopeTimestamp,renderConversationView:function(){return(0,jsx_runtime.jsx)("div",{})},renderCustomizingPreferredReactionsModal:function(){return(0,jsx_runtime.jsx)("div",{})},renderLeftPane:function(){return(0,jsx_runtime.jsx)("div",{})},renderMiniPlayer:function(){return(0,jsx_runtime.jsx)("div",{})}}))};Template.displayName="Template";var Default=Template.bind({});Default.story={name:"Default"};var __namedExportsOrder=["Default"]},"./ts/components/Intl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Intl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_logging_log__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/logging/log.ts"),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var defaultRenderText=function(_ref){var text=_ref.text,key=_ref.key;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:text},key)};defaultRenderText.displayName="defaultRenderText";var Intl=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intl,_React$Component);var _super=_createSuper(Intl);function Intl(){return _classCallCheck(this,Intl),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intl,[{key:"getComponent",value:function getComponent(index,placeholderName,key){var _this$props=this.props,id=_this$props.id,components=_this$props.components;if(!components)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl component prop not provided; Metadata: id '${id}', index ${index}, placeholder '${placeholderName}'`),null;if(Array.isArray(components))return!components||!components.length||components.length<=index?(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', index ${index}`),null):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:components[index]},key);var value=components[placeholderName];return value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:value},key):(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', placeholder '${placeholderName}'`),null)}},{key:"render",value:function render(){var _this$props2=this.props,components=_this$props2.components,id=_this$props2.id,localizer=_this$props2.i18n,_this$props2$renderTe=_this$props2.renderText,renderText=void 0===_this$props2$renderTe?defaultRenderText:_this$props2$renderTe;if(!id)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error("Error: Intl id prop not provided"),null;if(!localizer.isLegacyFormat(id))return(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.Yj)(!Array.isArray(components),`components cannot be an array for ICU message ${id}`),localizer.getIntl().formatMessage({id},components);var text=localizer(id),results=[],FIND_REPLACEMENTS=/\$([^$]+)\$/g;if(Array.isArray(components)&&components.length>1)throw new Error("Array syntax is not supported with more than one placeholder");var componentIndex=0,key=0,lastTextIndex=0,match=FIND_REPLACEMENTS.exec(text);if(!match)return renderText({text,key:0});for(;match;){if(lastTextIndex<match.index){var textWithNoReplacements=text.slice(lastTextIndex,match.index);results.push(renderText({text:textWithNoReplacements,key})),key+=1}var placeholderName=match[1];results.push(this.getComponent(componentIndex,placeholderName,key)),componentIndex+=1,key+=1,lastTextIndex=FIND_REPLACEMENTS.lastIndex,match=FIND_REPLACEMENTS.exec(text)}return lastTextIndex<text.length&&(results.push(renderText({text:text.slice(lastTextIndex),key})),key+=1),results}}]),Intl}(react__WEBPACK_IMPORTED_MODULE_0__.Component)},"./ts/components/Toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Toast});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),_hooks_useRestoreFocus__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/hooks/useRestoreFocus.ts"),_util_clearTimeoutIfNecessary__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/clearTimeoutIfNecessary.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function ToastInner(_ref){var _ref$autoDismissDisab=_ref.autoDismissDisabled,autoDismissDisabled=void 0!==_ref$autoDismissDisab&&_ref$autoDismissDisab,children=_ref.children,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,className=_ref.className,_ref$disableCloseOnCl=_ref.disableCloseOnClick,disableCloseOnClick=void 0!==_ref$disableCloseOnCl&&_ref$disableCloseOnCl,onClose=_ref.onClose,style=_ref.style,_ref$timeout=_ref.timeout,timeout=void 0===_ref$timeout?8e3:_ref$timeout,toastAction=_ref.toastAction,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(null),2),root=_React$useState2[0],setRoot=_React$useState2[1],focusRef=_slicedToArray((0,_hooks_useRestoreFocus__WEBPACK_IMPORTED_MODULE_3__.H)(),1)[0];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var div=document.createElement("div");return document.body.appendChild(div),setRoot(div),function(){document.body.removeChild(div),setRoot(null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(root&&!autoDismissDisabled){var timeoutId=setTimeout(onClose,timeout);return function(){(0,_util_clearTimeoutIfNecessary__WEBPACK_IMPORTED_MODULE_5__.S)(timeoutId)}}}),[autoDismissDisabled,onClose,root,timeout]),root?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{"aria-live":"assertive",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("Toast",`Toast--align-${align}`,className),onClick:function(){disableCloseOnClick||onClose()},onKeyDown:function(ev){"Enter"!==ev.key&&" "!==ev.key||disableCloseOnClick||onClose()},role:"button",tabIndex:0,style,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"Toast__content",children}),toastAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"Toast__button",onClick:function(ev){ev.stopPropagation(),ev.preventDefault(),toastAction.onClick(),onClose()},onKeyDown:function(ev){"Enter"!==ev.key&&" "!==ev.key||(ev.stopPropagation(),ev.preventDefault(),toastAction.onClick(),onClose())},ref:focusRef,role:"button",tabIndex:0,children:toastAction.label})]}),root):null}))},"./ts/components/ToastStickerPackInstallFailed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>ToastStickerPackInstallFailed});__webpack_require__("./node_modules/react/index.js");var _Toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/Toast.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ToastStickerPackInstallFailed(_ref){var i18n=_ref.i18n,onClose=_ref.onClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_1__.F,{onClose,children:i18n("icu:stickers--toast--InstallFailed")})}ToastStickerPackInstallFailed.displayName="ToastStickerPackInstallFailed"},"./ts/hooks/usePrevious.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(initialValue,currentValue){var previousValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue),result=previousValueRef.current;return previousValueRef.current=currentValue,result}},"./ts/hooks/useRestoreFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>useRestoreFocus,e:()=>useDelayedRestoreFocus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]},useDelayedRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){var timeout=setTimeout((function setFocus(){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),250);return function(){clearTimeout(timeout)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]}},"./ts/util/clearTimeoutIfNecessary.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function clearTimeoutIfNecessary(timeout){timeout&&clearTimeout(timeout)}__webpack_require__.d(__webpack_exports__,{S:()=>clearTimeoutIfNecessary})},"./ts/util/durations/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{EB:()=>MINUTE,kr:()=>HOUR,ps:()=>WEEK,sh:()=>SECOND,vc:()=>MONTH,x4:()=>DAY});var SECOND=1e3,MINUTE=60*SECOND,HOUR=60*MINUTE,DAY=24*HOUR,WEEK=7*DAY,MONTH=30*DAY},"./ts/util/durations/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x4:()=>constants.x4,kC:()=>DurationInSeconds,kr:()=>constants.kr,EB:()=>constants.EB,vc:()=>constants.vc,sh:()=>constants.sh,ps:()=>constants.ps});var DurationInSeconds,_DurationInSeconds,constants=__webpack_require__("./ts/util/durations/constants.ts");(_DurationInSeconds=DurationInSeconds||(DurationInSeconds={})).fromMillis=function(ms){return ms/constants.sh},_DurationInSeconds.fromSeconds=function(seconds){return seconds},_DurationInSeconds.fromMinutes=function(m){return m*constants.EB/constants.sh},_DurationInSeconds.fromHours=function(h){return h*constants.kr/constants.sh},_DurationInSeconds.fromDays=function(d){return d*constants.x4/constants.sh},_DurationInSeconds.fromWeeks=function(d){return d*constants.ps/constants.sh},_DurationInSeconds.fromMonths=function(d){return d*constants.vc/constants.sh},_DurationInSeconds.toSeconds=function(d){return d},_DurationInSeconds.toMillis=function(d){return d*constants.sh},_DurationInSeconds.toHours=function(d){return d*constants.sh/constants.kr},_DurationInSeconds.ZERO=DurationInSeconds.fromSeconds(0),_DurationInSeconds.HOUR=DurationInSeconds.fromHours(1),_DurationInSeconds.MINUTE=DurationInSeconds.fromMinutes(1),_DurationInSeconds.DAY=DurationInSeconds.fromDays(1),_DurationInSeconds.WEEK=DurationInSeconds.fromWeeks(1)},"./ts/util/showToast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>showToast});__webpack_require__("./node_modules/react/index.js");var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function showToast(Toast){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},node=document.getElementById("toast");function onClose(){node&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(node)}(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Toast,Object.assign({i18n:window.i18n,onClose},props)),node)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);