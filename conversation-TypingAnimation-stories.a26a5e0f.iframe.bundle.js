/*! For license information please see conversation-TypingAnimation-stories.a26a5e0f.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[6137,3905],{"./ts/components/conversation/TypingAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _util_setupI18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./_locales/en/messages.json"),_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/TypingAnimation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_1__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/TypingAnimation"};var createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,color:overrideProps.color||""}};function Default(){var props=createProps();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__.y,Object.assign({},props))}function Light(){var props=createProps({color:"light"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{padding:"2em",backgroundColor:"grey"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__.y,Object.assign({},props))})}Default.displayName="Default",Light.displayName="Light";var __namedExportsOrder=["Default","Light"]},"./ts/components/conversation/TypingAnimation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>TypingAnimation});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TypingAnimation(_ref){var i18n=_ref.i18n,color=_ref.color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"module-typing-animation",title:i18n("icu:typingAlt"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-typing-animation__dot","module-typing-animation__dot--first",color?`module-typing-animation__dot--${color}`:null)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"module-typing-animation__spacer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-typing-animation__dot","module-typing-animation__dot--second",color?`module-typing-animation__dot--${color}`:null)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"module-typing-animation__spacer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-typing-animation__dot","module-typing-animation__dot--third",color?`module-typing-animation__dot--${color}`:null)})]})}TypingAnimation.displayName="TypingAnimation"},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);