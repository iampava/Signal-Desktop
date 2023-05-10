"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[1966],{"./ts/components/ContextMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ContextMenu});var closeCurrentOpenContextMenu,lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/getClassNamesFor.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/theme.ts"),_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/util/handleOutsideClick.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function generateVirtualElement(x,y){return{getBoundingClientRect:function(){return new DOMRect(x,y)}}}function ContextMenu(_ref){var ariaLabel=_ref.ariaLabel,children=_ref.children,i18n=_ref.i18n,menuOptions=_ref.menuOptions,moduleClassName=_ref.moduleClassName,onClick=_ref.onClick,onMenuShowingChanged=_ref.onMenuShowingChanged,popperOptions=_ref.popperOptions,portalToRoot=_ref.portalToRoot,theme=_ref.theme,title=_ref.title,value=_ref.value,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isMenuShowing=_useState2[0],setIsMenuShowing=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),2),focusedIndex=_useState4[0],setFocusedIndex=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),popperElement=_useState6[0],setPopperElement=_useState6[1],virtualElement=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(generateVirtualElement(0,0)),_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),referenceElement=_useState8[0],setReferenceElement=_useState8[1],_usePopper=(0,react_popper__WEBPACK_IMPORTED_MODULE_8__.D)(virtualElement.current,popperElement,Object.assign({placement:"top-start",strategy:"fixed"},popperOptions)),styles=_usePopper.styles,attributes=_usePopper.attributes;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){onMenuShowingChanged&&onMenuShowingChanged(isMenuShowing)}),[isMenuShowing,onMenuShowingChanged]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return isMenuShowing?(0,_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_6__.p)((function(){return setIsMenuShowing(!1),closeCurrentOpenContextMenu=void 0,!0}),{containerElements:[referenceElement,popperElement],name:"ContextMenu"}):lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[isMenuShowing,referenceElement,popperElement]);var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(null),2),portalNode=_React$useState2[0],setPortalNode=_React$useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(!portalToRoot||!isMenuShowing)return lodash_noop__WEBPACK_IMPORTED_MODULE_0___default();var div=document.createElement("div");return document.body.appendChild(div),setPortalNode(div),function(){document.body.removeChild(div)}}),[portalToRoot,isMenuShowing]);var _step,handleKeyDown=function(ev){if(("Enter"===ev.key||"Space"===ev.key)&&!isMenuShowing){var _closeCurrentOpenCont;if(null===(_closeCurrentOpenCont=closeCurrentOpenContextMenu)||void 0===_closeCurrentOpenCont||_closeCurrentOpenCont(),closeCurrentOpenContextMenu=function(){return setIsMenuShowing(!1)},referenceElement){var box=referenceElement.getBoundingClientRect();virtualElement.current=generateVirtualElement(box.x,box.y)}setIsMenuShowing(!0),setFocusedIndex(0),ev.preventDefault(),ev.stopPropagation()}if(isMenuShowing){if("ArrowDown"===ev.key||"Tab"===ev.key){var currFocusedIndex=focusedIndex||0,nextFocusedIndex=currFocusedIndex>=menuOptions.length-1?0:currFocusedIndex+1;setFocusedIndex(nextFocusedIndex),ev.stopPropagation(),ev.preventDefault()}if("ArrowUp"===ev.key){var _currFocusedIndex=focusedIndex||0,_nextFocusedIndex=0===_currFocusedIndex?menuOptions.length-1:_currFocusedIndex-1;setFocusedIndex(_nextFocusedIndex),ev.stopPropagation(),ev.preventDefault()}if("Enter"===ev.key){if(void 0!==focusedIndex){var focusedOption=menuOptions[focusedIndex];focusedOption.onClick(focusedOption.value)}setIsMenuShowing(!1),closeCurrentOpenContextMenu=void 0,ev.stopPropagation(),ev.preventDefault()}"Escape"===ev.key&&(setIsMenuShowing(!1),closeCurrentOpenContextMenu=void 0,ev.stopPropagation(),ev.preventDefault())}},handleClick=function(ev){var _closeCurrentOpenCont2;null===(_closeCurrentOpenCont2=closeCurrentOpenContextMenu)||void 0===_closeCurrentOpenCont2||_closeCurrentOpenCont2(),closeCurrentOpenContextMenu=function(){return setIsMenuShowing(!1)},virtualElement.current=generateVirtualElement(ev.clientX,ev.clientY),setIsMenuShowing(!0),ev.stopPropagation(),ev.preventDefault()},getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_4__.h)("ContextMenu",moduleClassName),optionElements=new Array,_loop=function(index,option){var previous=menuOptions[index-1];previous&&previous.group!==option.group&&optionElements.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:getClassName("__divider")},`${option.label}-divider`));optionElements.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button",{"aria-label":option.label,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(getClassName("__option"),focusedIndex===index?getClassName("__option--focused"):void 0),type:"button",onClick:function(ev){ev.preventDefault(),ev.stopPropagation(),option.onClick(option.value),setIsMenuShowing(!1),closeCurrentOpenContextMenu=void 0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:getClassName("__option--container"),children:[option.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(getClassName("__option--icon"),option.icon)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:getClassName("__option--title"),children:option.label}),option.description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:getClassName("__option--description"),children:option.description})]})]}),void 0!==value&&void 0!==option.value&&value===option.value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:getClassName("__option--selected")}):null]},option.label))},_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(menuOptions.entries());try{for(_iterator.s();!(_step=_iterator.n()).done;){var _ref3=_slicedToArray(_step.value,2);_loop(_ref3[0],_ref3[1])}}catch(err){_iterator.e(err)}finally{_iterator.f()}var menuNode=isMenuShowing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_5__.j)(theme):void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",Object.assign({className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(getClassName("__popper"),1===menuOptions.length?getClassName("__popper--single-item"):void 0),ref:setPopperElement,style:styles.popper},attributes.popper,{children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:getClassName("__title"),children:title}),optionElements]}))}):void 0;return"function"==typeof children?children({openMenu:onClick||handleClick,onKeyDown:handleKeyDown,isMenuShowing,ref:setReferenceElement,menuNode}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(getClassName("__container"),theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_5__.j)(theme):void 0),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{"aria-label":ariaLabel||i18n("icu:ContextMenu--button"),className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(getClassName("__button"),isMenuShowing?getClassName("__button--active"):void 0),onClick:onClick||handleClick,onContextMenu:handleClick,onKeyDown:handleKeyDown,ref:setReferenceElement,type:"button",children}),portalNode?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(menuNode,portalNode):menuNode]})}},"./ts/messages/MessageSendState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fq:()=>SendStatus,gO:()=>isFailed,vB:()=>isSent,zR:()=>isPending});var SendStatus,_util_enum__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/enum.ts");!function(SendStatus){SendStatus.Failed="Failed",SendStatus.Pending="Pending",SendStatus.Sent="Sent",SendStatus.Delivered="Delivered",SendStatus.Read="Read",SendStatus.Viewed="Viewed"}(SendStatus||(SendStatus={}));(0,_util_enum__WEBPACK_IMPORTED_MODULE_0__.m)(SendStatus,SendStatus.Pending);var SendActionType,STATUS_NUMBERS={[SendStatus.Failed]:0,[SendStatus.Pending]:1,[SendStatus.Sent]:2,[SendStatus.Delivered]:3,[SendStatus.Read]:4,[SendStatus.Viewed]:5},isPending=function(status){return status===SendStatus.Pending},isSent=function(status){return STATUS_NUMBERS[status]>=STATUS_NUMBERS[SendStatus.Sent]},isFailed=function(status){return status===SendStatus.Failed};!function(SendActionType){SendActionType[SendActionType.Failed=0]="Failed",SendActionType[SendActionType.ManuallyRetried=1]="ManuallyRetried",SendActionType[SendActionType.Sent=2]="Sent",SendActionType[SendActionType.GotDeliveryReceipt=3]="GotDeliveryReceipt",SendActionType[SendActionType.GotReadReceipt=4]="GotReadReceipt",SendActionType[SendActionType.GotViewedReceipt=5]="GotViewedReceipt"}(SendActionType||(SendActionType={}));SendActionType.Failed,SendStatus.Failed,SendActionType.ManuallyRetried,SendStatus.Pending,SendActionType.Sent,SendStatus.Sent,SendActionType.GotDeliveryReceipt,SendStatus.Delivered,SendActionType.GotReadReceipt,SendStatus.Read,SendActionType.GotViewedReceipt,SendStatus.Viewed},"./ts/util/expirationTimer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UD:()=>DEFAULT_DURATIONS_IN_SECONDS,WU:()=>format,h5:()=>DEFAULT_DURATIONS_SET});__webpack_require__("./node_modules/lodash/isNumber.js");var humanize_duration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/humanize-duration/humanize-duration.js"),humanize_duration__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(humanize_duration__WEBPACK_IMPORTED_MODULE_1__),_durations__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/durations/index.ts"),DEFAULT_DURATIONS_IN_SECONDS=[_durations__WEBPACK_IMPORTED_MODULE_2__.kC.ZERO,_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromWeeks(4),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromWeeks(1),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromDays(1),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromHours(8),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromHours(1),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromMinutes(5),_durations__WEBPACK_IMPORTED_MODULE_2__.kC.fromSeconds(30)],DEFAULT_DURATIONS_SET=new Set(DEFAULT_DURATIONS_IN_SECONDS);function format(i18n,dirtySeconds){var _ref=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},_ref$capitalizeOff=_ref.capitalizeOff,capitalizeOff=void 0!==_ref$capitalizeOff&&_ref$capitalizeOff,largest=_ref.largest,seconds=Math.abs(dirtySeconds||0);if(!seconds)return i18n(capitalizeOff?"icu:off":"icu:disappearingMessages__off");seconds=Math.max(Math.floor(seconds),1);var locale=i18n.getLocale().replace(/-/g,"_"),localeWithoutRegion=locale.split("_",1)[0],fallbacks=[];localeWithoutRegion!==locale&&fallbacks.push(localeWithoutRegion),"nb"!==localeWithoutRegion&&"nn"!==localeWithoutRegion||fallbacks.push("no"),"en"!==localeWithoutRegion&&fallbacks.push("en"),"zh_HK"===locale&&fallbacks.push("zh_TW");var allUnits=["y","mo","w","d","h","m","s"],defaultUnits=seconds%604800==0?["w"]:["d","h","m","s"];return humanize_duration__WEBPACK_IMPORTED_MODULE_1___default()(seconds*_durations__WEBPACK_IMPORTED_MODULE_2__.sh,Object.assign({units:largest?allUnits:defaultUnits,largest,language:locale},fallbacks.length?{fallbacks}:{}))}},"./ts/util/mapUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>groupBy});var _iterables__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/iterables.ts");var groupBy=function(iterable,fn){return(0,_iterables__WEBPACK_IMPORTED_MODULE_0__.u4)(iterable,(function(result,value){var key=fn(value),existingGroup=result.get(key);return existingGroup?existingGroup.push(value):result.set(key,[value]),result}),new Map)}}}]);