"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[9800],{"./ts/components/conversation/ScrollDownButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./_locales/en/messages.json"),_ScrollDownButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/conversation/ScrollDownButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/ScrollDownButton",component:_ScrollDownButton__WEBPACK_IMPORTED_MODULE_4__.$,argTypes:{unreadCount:{control:{type:"radio"},options:{None:void 0,Some:5,Plenty:85,"Please Stop":1e3}}}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ScrollDownButton__WEBPACK_IMPORTED_MODULE_4__.$,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({i18n,scrollDown:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("scrollDown"),conversationId:"fake-conversation-id"},overrideProps)}({}),Default.story={name:"Default"};var __namedExportsOrder=["Default"]},"./ts/components/conversation/ScrollDownButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>ScrollDownButton});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ScrollDownButton(_ref){var badgeText,conversationId=_ref.conversationId,unreadCount=_ref.unreadCount,i18n=_ref.i18n,scrollDown=_ref.scrollDown,altText=i18n(unreadCount?"icu:messagesBelow":"icu:scrollDown");return unreadCount&&(badgeText=unreadCount<100?unreadCount.toString():"99+"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ScrollDownButton",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{type:"button",className:"ScrollDownButton__button",onClick:function(){scrollDown(conversationId)},title:altText,children:[badgeText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ScrollDownButton__button__badge",children:badgeText}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ScrollDownButton__button__icon"})]})})}ScrollDownButton.displayName="ScrollDownButton"}}]);