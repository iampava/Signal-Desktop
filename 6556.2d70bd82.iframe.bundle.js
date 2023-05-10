"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[6556],{"./ts/components/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u_:()=>Modal,P2:()=>ModalPage,wo:()=>PagedModal});var noop=__webpack_require__("./node_modules/lodash/noop.js"),noop_default=__webpack_require__.n(noop),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-measure/dist/index.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react_spring_web_esm=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),ModalHost=__webpack_require__("./ts/components/ModalHost.tsx"),assert=__webpack_require__("./ts/util/assert.ts"),getClassNamesFor=__webpack_require__("./ts/util/getClassNamesFor.ts"),useAnimated=__webpack_require__("./ts/hooks/useAnimated.tsx"),last=__webpack_require__("./node_modules/lodash/last.js"),last_default=__webpack_require__.n(last),first=__webpack_require__("./node_modules/lodash/first.js"),first_default=__webpack_require__.n(first);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function getTop(element){return element.getBoundingClientRect().top}function isWrapped(element){if(!element)return!1;var children=element.children,firstChild=first_default()(children),lastChild=last_default()(children);return Boolean(firstChild&&lastChild&&firstChild!==lastChild&&getTop(firstChild)!==getTop(lastChild))}var useRefMerger=__webpack_require__("./ts/hooks/useRefMerger.ts"),log=__webpack_require__("./ts/logging/log.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Modal_slicedToArray(arr,i){return function Modal_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Modal_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Modal_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Modal_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Modal_arrayLikeToArray(o,minLen)}(arr,i)||function Modal_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Modal_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Modal(_ref){var children=_ref.children,modalName=_ref.modalName,hasXButton=_ref.hasXButton,i18n=_ref.i18n,modalFooter=_ref.modalFooter,moduleClassName=_ref.moduleClassName,noMouseClose=_ref.noMouseClose,onBackButtonClick=_ref.onBackButtonClick,_ref$onClose=_ref.onClose,onClose=void 0===_ref$onClose?noop_default():_ref$onClose,theme=_ref.theme,title=_ref.title,useFocusTrap=_ref.useFocusTrap,_ref$hasHeaderDivider=_ref.hasHeaderDivider,hasHeaderDivider=void 0!==_ref$hasHeaderDivider&&_ref$hasHeaderDivider,_ref$hasFooterDivider=_ref.hasFooterDivider,hasFooterDivider=void 0!==_ref$hasFooterDivider&&_ref$hasFooterDivider,_ref$noTransform=_ref.noTransform,noTransform=void 0!==_ref$noTransform&&_ref$noTransform,_ref$padded=_ref.padded,padded=void 0===_ref$padded||_ref$padded,_useAnimated=(0,useAnimated.F)(onClose,noTransform?{getFrom:function(){return{opacity:0,marginTop:"48px"}},getTo:function(isOpen){return isOpen?{opacity:1,marginTop:"0px"}:{opacity:0,marginTop:"48px"}}}:{getFrom:function(){return{opacity:0,transform:"translateY(48px)"}},getTo:function(isOpen){return isOpen?{opacity:1,transform:"translateY(0px)"}:{opacity:0,transform:"translateY(48px)"}}}),close=_useAnimated.close,isClosed=_useAnimated.isClosed,modalStyles=_useAnimated.modalStyles,overlayStyles=_useAnimated.overlayStyles;return(0,react.useEffect)((function(){if(!isClosed)return noop_default();var timer=setTimeout((function(){log.error(`Modal ${modalName} is closed, but still visible`),(0,assert.q8)(!1,`Invisible modal ${modalName}`)}),0);return function(){clearTimeout(timer)}}),[modalName,isClosed]),isClosed?null:(0,jsx_runtime.jsx)(ModalHost.l,{modalName,moduleClassName,noMouseClose,onClose:close,overlayStyles,theme,useFocusTrap,children:(0,jsx_runtime.jsx)(react_spring_web_esm.animated.div,{style:modalStyles,children:(0,jsx_runtime.jsx)(ModalPage,{modalName,hasXButton,i18n,modalFooter,moduleClassName,onBackButtonClick,onClose:close,title,padded,hasHeaderDivider,hasFooterDivider,children})})})}function ModalPage(_ref2){var children=_ref2.children,hasXButton=_ref2.hasXButton,i18n=_ref2.i18n,modalFooter=_ref2.modalFooter,moduleClassName=_ref2.moduleClassName,onBackButtonClick=_ref2.onBackButtonClick,onClose=_ref2.onClose,title=_ref2.title,_ref2$padded=_ref2.padded,padded=void 0===_ref2$padded||_ref2$padded,_ref2$hasHeaderDivide=_ref2.hasHeaderDivider,hasHeaderDivider=void 0!==_ref2$hasHeaderDivide&&_ref2$hasHeaderDivide,_ref2$hasFooterDivide=_ref2.hasFooterDivider,hasFooterDivider=void 0!==_ref2$hasFooterDivide&&_ref2$hasFooterDivide,modalRef=(0,react.useRef)(null),refMerger=(0,useRefMerger.T)(),bodyRef=(0,react.useRef)(null),_useState2=Modal_slicedToArray((0,react.useState)(!1),2),scrolled=_useState2[0],setScrolled=_useState2[1],_useState4=Modal_slicedToArray((0,react.useState)(!1),2),hasOverflow=_useState4[0],setHasOverflow=_useState4[1],hasHeader=Boolean(hasXButton||title||onBackButtonClick),getClassName=(0,getClassNamesFor.h)("module-Modal",moduleClassName);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()(getClassName(""),getClassName(hasHeader?"--has-header":"--no-header"),Boolean(modalFooter)&&getClassName("--has-footer"),padded&&getClassName("--padded"),hasHeaderDivider&&getClassName("--header-divider"),hasFooterDivider&&getClassName("--footer-divider")),ref:modalRef,onClick:function(event){event.stopPropagation()},children:[hasHeader&&(0,jsx_runtime.jsxs)("div",{className:classnames_default()(getClassName("__header"),onBackButtonClick?getClassName("__header--with-back-button"):null),children:[onBackButtonClick&&(0,jsx_runtime.jsx)("button",{"aria-label":i18n("icu:back"),className:getClassName("__back-button"),onClick:onBackButtonClick,tabIndex:0,type:"button"}),title&&(0,jsx_runtime.jsx)("h1",{className:classnames_default()(getClassName("__title"),hasXButton?getClassName("__title--with-x-button"):null),children:title}),hasXButton&&!title&&(0,jsx_runtime.jsx)("div",{className:getClassName("__title")}),hasXButton&&(0,jsx_runtime.jsx)("button",{"aria-label":i18n("icu:close"),className:getClassName("__close-button"),onClick:onClose,tabIndex:0,type:"button"})]}),(0,jsx_runtime.jsx)(index_esm.Z,{scroll:!0,onResize:function handleResize(_ref3){var scroll=_ref3.scroll,modalNode=null==modalRef?void 0:modalRef.current;modalNode&&scroll&&setHasOverflow(scroll.height>modalNode.clientHeight)},children:function(_ref4){var measureRef=_ref4.measureRef;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(getClassName("__body"),scrolled?getClassName("__body--scrolled"):null,hasOverflow||scrolled?getClassName("__body--overflow"):null),onScroll:function(){var _bodyRef$current,scrollTop=(null===(_bodyRef$current=bodyRef.current)||void 0===_bodyRef$current?void 0:_bodyRef$current.scrollTop)||0;setScrolled(scrollTop>2)},ref:refMerger(measureRef,bodyRef),children})}}),modalFooter&&(0,jsx_runtime.jsx)(Modal.ButtonFooter,{children:modalFooter})]})})}function ButtonFooter(_ref5){var children=_ref5.children,_useHasWrapped=function useHasWrapped(){var _useState2=_slicedToArray((0,react.useState)(null),2),element=_useState2[0],setElement=_useState2[1],_useState4=_slicedToArray((0,react.useState)(isWrapped(element)),2),hasWrapped=_useState4[0],setHasWrapped=_useState4[1];return(0,react.useEffect)((function(){if(!element)return noop_default();var observer=new ResizeObserver((function(){setHasWrapped(isWrapped(element))}));return observer.observe(element),function(){observer.disconnect()}}),[element]),[setElement,hasWrapped]}(),_useHasWrapped2=Modal_slicedToArray(_useHasWrapped,2),ref=_useHasWrapped2[0],hasWrapped=_useHasWrapped2[1],className=(0,getClassNamesFor.h)("module-Modal")("__button-footer");return(0,jsx_runtime.jsx)("div",{className:classnames_default()(className,hasWrapped?`${className}--one-button-per-line`:void 0),ref,children})}function PagedModal(_ref6){var modalName=_ref6.modalName,children=_ref6.children,moduleClassName=_ref6.moduleClassName,noMouseClose=_ref6.noMouseClose,_ref6$onClose=_ref6.onClose,onClose=void 0===_ref6$onClose?noop_default():_ref6$onClose,theme=_ref6.theme,useFocusTrap=_ref6.useFocusTrap,_useAnimated2=(0,useAnimated.F)(onClose,{getFrom:function(){return{opacity:0,transform:"translateY(48px)"}},getTo:function(isOpen){return isOpen?{opacity:1,transform:"translateY(0px)"}:{opacity:0,transform:"translateY(48px)"}}}),close=_useAnimated2.close,isClosed=_useAnimated2.isClosed,modalStyles=_useAnimated2.modalStyles,overlayStyles=_useAnimated2.overlayStyles;return(0,react.useEffect)((function(){if(!isClosed)return noop_default();var timer=setTimeout((function(){log.error(`PagedModal ${modalName} is closed, but still visible`),(0,assert.q8)(!1,`Invisible paged modal ${modalName}`)}),0);return function(){clearTimeout(timer)}}),[modalName,isClosed]),isClosed?null:(0,jsx_runtime.jsx)(ModalHost.l,{modalName,moduleClassName,noMouseClose,onClose:close,overlayStyles,theme,useFocusTrap,children:(0,jsx_runtime.jsx)(react_spring_web_esm.animated.div,{style:modalStyles,children:children(close)})})}Modal.displayName="Modal",ButtonFooter.displayName="ButtonFooter",Modal.ButtonFooter=ButtonFooter,PagedModal.displayName="PagedModal"},"./ts/components/ModalHost.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>ModalHost,p:()=>ModalContainerContext});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_3__),_react_spring_web__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__),_util_assert__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/util/assert.ts"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/getClassNamesFor.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/util/theme.ts"),_hooks_useEscapeHandling__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ts/hooks/useEscapeHandling.ts"),_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./ts/hooks/usePrevious.ts"),_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./ts/util/handleOutsideClick.ts"),_logging_log__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./ts/logging/log.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ModalContainerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null),ModalHost=react__WEBPACK_IMPORTED_MODULE_1__.memo((function ModalHostInner(_ref){var _useContext,children=_ref.children,modalName=_ref.modalName,moduleClassName=_ref.moduleClassName,noMouseClose=_ref.noMouseClose,onClose=_ref.onClose,onEscape=_ref.onEscape,onTopOfEverything=_ref.onTopOfEverything,overlayStyles=_ref.overlayStyles,theme=_ref.theme,_ref$useFocusTrap=_ref.useFocusTrap,useFocusTrap=void 0===_ref$useFocusTrap||_ref$useFocusTrap,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(null),2),root=_React$useState2[0],setRoot=_React$useState2[1],containerRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),previousModalName=(0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__.D)(modalName,modalName),modalContainer=null!==(_useContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContainerContext))&&void 0!==_useContext?_useContext:document.body;previousModalName!==modalName&&(_logging_log__WEBPACK_IMPORTED_MODULE_12__.error(`ModalHost detected conflict between ${previousModalName} and ${modalName}. Consider using "key" attributes on both modals.`),(0,_util_assert__WEBPACK_IMPORTED_MODULE_6__.q8)(!1,"Modal conflict")),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var div=document.createElement("div");return modalContainer.appendChild(div),setRoot(div),function(){modalContainer.removeChild(div),setRoot(null)}}),[modalContainer]),(0,_hooks_useEscapeHandling__WEBPACK_IMPORTED_MODULE_9__.w)(onEscape||onClose),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return noMouseClose?lodash_noop__WEBPACK_IMPORTED_MODULE_0___default():(0,_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_11__.p)((function(node){return!(modalContainer===document.body&&node instanceof Element&&node.closest(".module-calling__modal-container"))&&(onClose(),!0)}),{containerElements:[containerRef],name:modalName})}),[noMouseClose,onClose,containerRef,modalName,modalContainer]);var className=classnames__WEBPACK_IMPORTED_MODULE_5___default()([theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_8__.j)(theme):void 0,onTopOfEverything?"module-modal-host--on-top-of-everything":void 0]),getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_7__.h)("module-modal-host",moduleClassName),modalContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.animated.div,{role:"presentation",className:getClassName("__overlay"),style:overlayStyles}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{className:getClassName("__overlay-container"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{ref:containerRef,className:getClassName("__width-container"),children})})]});return root?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(useFocusTrap?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(focus_trap_react__WEBPACK_IMPORTED_MODULE_3___default(),{focusTrapOptions:{allowOutsideClick:function(_ref2){var target=_ref2.target;return!!(target&&target instanceof HTMLElement)&&!!target.closest(".TitleBarContainer__title, .module-composition-input__suggestions, .module-composition-input__format-menu, .module-calling__modal-container")}},children:modalContent}):modalContent,root):null}))},"./ts/hooks/useAnimated.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>useAnimated});var ModalState,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useAnimated(onClose,_ref){var getFrom=_ref.getFrom,getTo=_ref.getTo,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ModalState.Open),2),state=_useState2[0],setState=_useState2[1],isOpen=state===ModalState.Open,isClosed=state===ModalState.Closed,modalRef=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpringRef)(),modalStyles=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)({from:getFrom(isOpen),to:getTo(isOpen),onRest:function(){state===ModalState.Closing&&(setState(ModalState.Closed),onClose())},config:{clamp:!0,friction:20,mass:.5,tension:350},ref:modalRef}),overlayRef=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpringRef)(),overlayStyles=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)({from:{opacity:0},to:{opacity:isOpen?1:0},config:{clamp:!0,friction:22,tension:360},ref:overlayRef});return(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useChain)(isOpen?[overlayRef,modalRef]:[modalRef,overlayRef]),{close:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setState((function(currentState){return currentState===ModalState.Open?ModalState.Closing:currentState}))}),[]),isClosed,overlayStyles,modalStyles}}!function(ModalState){ModalState.Open="Open",ModalState.Closing="Closing",ModalState.Closed="Closed"}(ModalState||(ModalState={}))},"./ts/hooks/useEscapeHandling.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>useEscapeHandling});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useEscapeHandling(handleEscape){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(handleEscape){var handler=function(event){"Escape"===event.key&&(handleEscape(),event.preventDefault(),event.stopPropagation())};return document.addEventListener("keydown",handler),function(){document.removeEventListener("keydown",handler)}}}),[handleEscape])}},"./ts/hooks/usePrevious.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(initialValue,currentValue){var previousValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue),result=previousValueRef.current;return previousValueRef.current=currentValue,result}},"./ts/hooks/useRefMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useRefMerger});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_refMerger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/util/refMerger.ts"),useRefMerger=function(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(_util_refMerger__WEBPACK_IMPORTED_MODULE_1__.d,[])}},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./ts/util/handleOutsideClick.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{p:()=>handleOutsideClick});var fakeClickHandlers=new Array;function runFakeClickHandlers(event){var _step,_iterator=_createForOfIteratorHelper(fakeClickHandlers.slice().reverse());try{for(_iterator.s();!(_step=_iterator.n()).done;){if((0,_step.value.handleEvent)(event))break}}catch(err){_iterator.e(err)}finally{_iterator.f()}}var handleOutsideClick=function(handler,_ref){var name=_ref.name,containerElements=_ref.containerElements,fakeHandler={name,handleEvent:function(event){var target=event.target;return!!containerElements.some((function(elem){var _elem$current;return!!elem&&(elem instanceof Node?elem.contains(target):null===(_elem$current=elem.current)||void 0===_elem$current?void 0:_elem$current.contains(target))}))||handler(target)}};if(fakeClickHandlers.push(fakeHandler),1===fakeClickHandlers.length){document.addEventListener("click",runFakeClickHandlers,!0)}return function(){var index=fakeClickHandlers.indexOf(fakeHandler);if(fakeClickHandlers.splice(index,1),0===fakeClickHandlers.length){document.removeEventListener("click",runFakeClickHandlers,!0)}}}},"./ts/util/refMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>refMerger,d:()=>createRefMerger});var memoizee__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memoizee/index.js"),memoizee__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_0__);function refMerger(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(el){refs.forEach((function(ref){"function"==typeof ref?ref(el):ref&&(ref.current=el)}))}}function createRefMerger(){return memoizee__WEBPACK_IMPORTED_MODULE_0___default()(refMerger,{length:!1,max:1})}},"./ts/util/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Theme,j:()=>themeClassName});var Theme,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/missingCaseError.ts");function themeClassName(theme){switch(theme){case Theme.Light:return"light-theme";case Theme.Dark:return"dark-theme";default:throw(0,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__.b)(theme)}}!function(Theme){Theme[Theme.Light=0]="Light",Theme[Theme.Dark=1]="Dark"}(Theme||(Theme={}))}}]);