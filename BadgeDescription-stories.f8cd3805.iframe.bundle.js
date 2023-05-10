/*! For license information please see BadgeDescription-stories.f8cd3805.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[5824,3905],{"./ts/components/BadgeDescription.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NameWithRtlOverrides:()=>NameWithRtlOverrides,NormalName:()=>NormalName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _BadgeDescription__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/BadgeDescription.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/BadgeDescription"};function NormalName(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BadgeDescription__WEBPACK_IMPORTED_MODULE_1__.o,{template:"{short_name} is here! Hello, {short_name}! {short_name}, I think you're great. This is not replaced: {not_replaced}",firstName:"Alice",title:"Should not be seen"})}function NameWithRtlOverrides(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BadgeDescription__WEBPACK_IMPORTED_MODULE_1__.o,{template:"Hello, {short_name}! {short_name}, I think you're great.",title:"Flip-‮flop"})}NormalName.displayName="NormalName",NormalName.story={name:"Normal name"},NameWithRtlOverrides.displayName="NameWithRtlOverrides",NameWithRtlOverrides.story={name:"Name with RTL overrides"};var __namedExportsOrder=["NormalName","NameWithRtlOverrides"]},"./ts/components/BadgeDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>BadgeDescription});__webpack_require__("./node_modules/react/index.js");var _conversation_ContactName__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/ContactName.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function BadgeDescription(_ref){var _step,firstName=_ref.firstName,template=_ref.template,title=_ref.title,result=[],lastIndex=0,_iterator=_createForOfIteratorHelper(template.matchAll(/\{short_name\}/g));try{for(_iterator.s();!(_step=_iterator.n()).done;){var matchIndex=_step.value.index||0;result.push(template.slice(lastIndex,matchIndex)),result.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_conversation_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{firstName,title,preferFirstName:!0},matchIndex)),lastIndex=matchIndex+12}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result.push(template.slice(lastIndex)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:result})}},"./ts/components/conversation/ContactName.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ContactName});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Emojify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/Emojify.tsx"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactName(_ref){var text,contactNameColor=_ref.contactNameColor,firstName=_ref.firstName,isSignalConversation=_ref.isSignalConversation,isMe=_ref.isMe,module=_ref.module,preferFirstName=_ref.preferFirstName,title=_ref.title,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__.h)("module-contact-name",module);return text=preferFirstName?firstName||title||"":title||"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName(""),contactNameColor?getClassName(`--${contactNameColor}`):null),dir:"auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Emojify__WEBPACK_IMPORTED_MODULE_2__.u,{text}),(isSignalConversation||isMe)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"ContactModal__official-badge"})]})}ContactName.displayName="ContactName"},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);