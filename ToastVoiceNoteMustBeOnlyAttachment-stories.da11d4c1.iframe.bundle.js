/*! For license information please see ToastVoiceNoteMustBeOnlyAttachment-stories.da11d4c1.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[5319,3905],{"./ts/components/Toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Toast});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),_hooks_useRestoreFocus__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/hooks/useRestoreFocus.ts"),_util_clearTimeoutIfNecessary__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/clearTimeoutIfNecessary.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function ToastInner(_ref){var _ref$autoDismissDisab=_ref.autoDismissDisabled,autoDismissDisabled=void 0!==_ref$autoDismissDisab&&_ref$autoDismissDisab,children=_ref.children,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,className=_ref.className,_ref$disableCloseOnCl=_ref.disableCloseOnClick,disableCloseOnClick=void 0!==_ref$disableCloseOnCl&&_ref$disableCloseOnCl,onClose=_ref.onClose,style=_ref.style,_ref$timeout=_ref.timeout,timeout=void 0===_ref$timeout?8e3:_ref$timeout,toastAction=_ref.toastAction,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(null),2),root=_React$useState2[0],setRoot=_React$useState2[1],focusRef=_slicedToArray((0,_hooks_useRestoreFocus__WEBPACK_IMPORTED_MODULE_3__.H)(),1)[0];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var div=document.createElement("div");return document.body.appendChild(div),setRoot(div),function(){document.body.removeChild(div),setRoot(null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(root&&!autoDismissDisabled){var timeoutId=setTimeout(onClose,timeout);return function(){(0,_util_clearTimeoutIfNecessary__WEBPACK_IMPORTED_MODULE_5__.S)(timeoutId)}}}),[autoDismissDisabled,onClose,root,timeout]),root?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{"aria-live":"assertive",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("Toast",`Toast--align-${align}`,className),onClick:function(){disableCloseOnClick||onClose()},onKeyDown:function(ev){"Enter"!==ev.key&&" "!==ev.key||disableCloseOnClick||onClose()},role:"button",tabIndex:0,style,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"Toast__content",children}),toastAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"Toast__button",onClick:function(ev){ev.stopPropagation(),ev.preventDefault(),toastAction.onClick(),onClose()},onKeyDown:function(ev){"Enter"!==ev.key&&" "!==ev.key||(ev.stopPropagation(),ev.preventDefault(),toastAction.onClick(),onClose())},ref:focusRef,role:"button",tabIndex:0,children:toastAction.label})]}),root):null}))},"./ts/components/ToastVoiceNoteMustBeOnlyAttachment.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_ToastVoiceNoteMustBeOnlyAttachment:()=>_ToastVoiceNoteMustBeOnlyAttachment,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_ToastVoiceNoteMustBeOnlyAttachment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/ToastVoiceNoteMustBeOnlyAttachment.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultProps={i18n:(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__),onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onClose")};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ToastVoiceNoteMustBeOnlyAttachment"};var _ToastVoiceNoteMustBeOnlyAttachment=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ToastVoiceNoteMustBeOnlyAttachment__WEBPACK_IMPORTED_MODULE_2__.$,Object.assign({},defaultProps))};_ToastVoiceNoteMustBeOnlyAttachment.displayName="_ToastVoiceNoteMustBeOnlyAttachment",_ToastVoiceNoteMustBeOnlyAttachment.story={name:"ToastVoiceNoteMustBeOnlyAttachment"};var __namedExportsOrder=["_ToastVoiceNoteMustBeOnlyAttachment"]},"./ts/components/ToastVoiceNoteMustBeOnlyAttachment.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>ToastVoiceNoteMustBeOnlyAttachment});__webpack_require__("./node_modules/react/index.js");var _Toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/Toast.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ToastVoiceNoteMustBeOnlyAttachment(_ref){var i18n=_ref.i18n,onClose=_ref.onClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_1__.F,{onClose,children:i18n("icu:voiceNoteMustBeOnlyAttachment")})}ToastVoiceNoteMustBeOnlyAttachment.displayName="ToastVoiceNoteMustBeOnlyAttachment"},"./ts/hooks/useRestoreFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>useRestoreFocus,e:()=>useDelayedRestoreFocus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]},useDelayedRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){var timeout=setTimeout((function setFocus(){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),250);return function(){clearTimeout(timeout)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]}},"./ts/util/clearTimeoutIfNecessary.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function clearTimeoutIfNecessary(timeout){timeout&&clearTimeout(timeout)}__webpack_require__.d(__webpack_exports__,{S:()=>clearTimeoutIfNecessary})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);