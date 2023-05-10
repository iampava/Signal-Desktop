(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[4673],{"./ts/components/CallingButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AudioDisabled:()=>AudioDisabled,AudioOff:()=>AudioOff,AudioOn:()=>AudioOn,KitchenSink:()=>KitchenSink,PresentingOff:()=>PresentingOff,PresentingOn:()=>PresentingOn,TooltipRight:()=>TooltipRight,VideoDisabled:()=>VideoDisabled,VideoOff:()=>VideoOff,VideoOn:()=>VideoOn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_CallingButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/CallingButton.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Tooltip.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__),createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{buttonType:overrideProps.buttonType||(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("buttonType",_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h,_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.HANG_UP),i18n,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("on-click"),onMouseEnter:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("on-mouse-enter"),onMouseLeave:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("on-mouse-leave"),tooltipDirection:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("tooltipDirection",_Tooltip__WEBPACK_IMPORTED_MODULE_4__.TQ,overrideProps.tooltipDirection||_Tooltip__WEBPACK_IMPORTED_MODULE_4__.TQ.Bottom)}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CallingButton"};function KitchenSink(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:Object.keys(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h).map((function(buttonType){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},createProps({buttonType})),buttonType)}))})}function AudioOn(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.AUDIO_ON});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function AudioOff(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.AUDIO_OFF});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function AudioDisabled(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.AUDIO_DISABLED});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function VideoOn(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.VIDEO_ON});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function VideoOff(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.VIDEO_OFF});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function VideoDisabled(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.VIDEO_DISABLED});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function TooltipRight(){var props=createProps({tooltipDirection:_Tooltip__WEBPACK_IMPORTED_MODULE_4__.TQ.Right});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function PresentingOn(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.PRESENTING_ON});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}function PresentingOff(){var props=createProps({buttonType:_CallingButton__WEBPACK_IMPORTED_MODULE_3__.h.PRESENTING_OFF});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CallingButton__WEBPACK_IMPORTED_MODULE_3__.k,Object.assign({},props))}AudioOn.displayName="AudioOn",AudioOff.displayName="AudioOff",AudioDisabled.displayName="AudioDisabled",VideoOn.displayName="VideoOn",VideoOff.displayName="VideoOff",VideoDisabled.displayName="VideoDisabled",TooltipRight.displayName="TooltipRight",TooltipRight.story={name:"Tooltip right"},PresentingOn.displayName="PresentingOn",PresentingOff.displayName="PresentingOff";var __namedExportsOrder=["KitchenSink","AudioOn","AudioOff","AudioDisabled","VideoOn","VideoOff","VideoDisabled","TooltipRight","PresentingOn","PresentingOff"]},"./ts/components/CallingButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>CallingButtonType,k:()=>CallingButton});var CallingButtonType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/uuid-browser/index.js"),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/Tooltip.tsx"),_util_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CallingButton(_ref){var buttonType=_ref.buttonType,i18n=_ref.i18n,_ref$isVisible=_ref.isVisible,isVisible=void 0===_ref$isVisible||_ref$isVisible,onClick=_ref.onClick,onMouseEnter=_ref.onMouseEnter,onMouseLeave=_ref.onMouseLeave,tooltipDirection=_ref.tooltipDirection,uniqueButtonId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()}),[]),classNameSuffix="",tooltipContent="",label="",disabled=!1;buttonType===CallingButtonType.AUDIO_DISABLED?(classNameSuffix="audio--disabled",tooltipContent=i18n("icu:calling__button--audio-disabled"),label=i18n("icu:calling__button--audio__label"),disabled=!0):buttonType===CallingButtonType.AUDIO_OFF?(classNameSuffix="audio--off",tooltipContent=i18n("icu:calling__button--audio-on"),label=i18n("icu:calling__button--audio__label")):buttonType===CallingButtonType.AUDIO_ON?(classNameSuffix="audio--on",tooltipContent=i18n("icu:calling__button--audio-off"),label=i18n("icu:calling__button--audio__label")):buttonType===CallingButtonType.VIDEO_DISABLED?(classNameSuffix="video--disabled",tooltipContent=i18n("icu:calling__button--video-disabled"),disabled=!0,label=i18n("icu:calling__button--video__label")):buttonType===CallingButtonType.VIDEO_OFF?(classNameSuffix="video--off",tooltipContent=i18n("icu:calling__button--video-on"),label=i18n("icu:calling__button--video__label")):buttonType===CallingButtonType.VIDEO_ON?(classNameSuffix="video--on",tooltipContent=i18n("icu:calling__button--video-off"),label=i18n("icu:calling__button--video__label")):buttonType===CallingButtonType.HANG_UP?(classNameSuffix="hangup",tooltipContent=i18n("icu:calling__hangup"),label=i18n("icu:calling__hangup")):buttonType===CallingButtonType.RING_DISABLED?(classNameSuffix="ring--disabled",disabled=!0,tooltipContent=i18n("icu:calling__button--ring__disabled-because-group-is-too-large"),label=i18n("icu:calling__button--ring__label")):buttonType===CallingButtonType.RING_OFF?(classNameSuffix="ring--off",tooltipContent=i18n("icu:calling__button--ring__on"),label=i18n("icu:calling__button--ring__label")):buttonType===CallingButtonType.RING_ON?(classNameSuffix="ring--on",tooltipContent=i18n("icu:calling__button--ring__off"),label=i18n("icu:calling__button--ring__label")):buttonType===CallingButtonType.PRESENTING_DISABLED?(classNameSuffix="presenting--disabled",tooltipContent=i18n("icu:calling__button--presenting-disabled"),disabled=!0,label=i18n("icu:calling__button--presenting__label")):buttonType===CallingButtonType.PRESENTING_ON?(classNameSuffix="presenting--on",tooltipContent=i18n("icu:calling__button--presenting-off"),label=i18n("icu:calling__button--presenting__label")):buttonType===CallingButtonType.PRESENTING_OFF&&(classNameSuffix="presenting--off",tooltipContent=i18n("icu:calling__button--presenting-on"),label=i18n("icu:calling__button--presenting__label"));var className=classnames__WEBPACK_IMPORTED_MODULE_1___default()("CallingButton__icon",`CallingButton__icon--${classNameSuffix}`);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u,{content:tooltipContent,direction:tooltipDirection,theme:_util_theme__WEBPACK_IMPORTED_MODULE_4__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("CallingButton__container",!isVisible&&"CallingButton__container--hidden"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{"aria-label":tooltipContent,className,disabled,id:uniqueButtonId,onClick,onMouseEnter,onMouseLeave,type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{className:"CallingButton__label",htmlFor:uniqueButtonId,children:label})]})})}!function(CallingButtonType){CallingButtonType.AUDIO_DISABLED="AUDIO_DISABLED",CallingButtonType.AUDIO_OFF="AUDIO_OFF",CallingButtonType.AUDIO_ON="AUDIO_ON",CallingButtonType.HANG_UP="HANG_UP",CallingButtonType.PRESENTING_DISABLED="PRESENTING_DISABLED",CallingButtonType.PRESENTING_OFF="PRESENTING_OFF",CallingButtonType.PRESENTING_ON="PRESENTING_ON",CallingButtonType.RING_DISABLED="RING_DISABLED",CallingButtonType.RING_OFF="RING_OFF",CallingButtonType.RING_ON="RING_ON",CallingButtonType.VIDEO_DISABLED="VIDEO_DISABLED",CallingButtonType.VIDEO_OFF="VIDEO_OFF",CallingButtonType.VIDEO_ON="VIDEO_ON"}(CallingButtonType||(CallingButtonType={})),CallingButton.displayName="CallingButton"},"./ts/components/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{TQ:()=>TooltipPlacement,u:()=>Tooltip});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),_util_refMerger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/refMerger.ts"),_util_popperUtil__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/popperUtil.ts"),_services_InteractionMode__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/services/InteractionMode.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TooltipPlacement,TooltipEventWrapper=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function TooltipEvent(_ref,ref){var onHoverChanged=_ref.onHoverChanged,children=_ref.children,wrapperRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),on=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){onHoverChanged(!0)}),[onHoverChanged]),off=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){onHoverChanged(!1)}),[onHoverChanged]),onFocus=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){"keyboard"===(0,_services_InteractionMode__WEBPACK_IMPORTED_MODULE_7__.G)()&&on()}),[on]);return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){var wrapperEl=wrapperRef.current;return wrapperEl?(wrapperEl.addEventListener("mouseenter",on),wrapperEl.addEventListener("mouseleave",off),function(){wrapperEl.removeEventListener("mouseenter",on),wrapperEl.removeEventListener("mouseleave",off)}):lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[on,off]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{onFocus,onBlur:off,ref:(0,_util_refMerger__WEBPACK_IMPORTED_MODULE_4__.M)(ref,wrapperRef),children})}));function Tooltip(_ref2){var children=_ref2.children,className=_ref2.className,content=_ref2.content,direction=_ref2.direction,sticky=_ref2.sticky,theme=_ref2.theme,_ref2$popperModifiers=_ref2.popperModifiers,popperModifiers=void 0===_ref2$popperModifiers?[]:_ref2$popperModifiers,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),2),isHovering=_React$useState2[0],setIsHovering=_React$useState2[1],showTooltip=isHovering||Boolean(sticky),tooltipThemeClassName=theme?`module-tooltip--${(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme)}`:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_8__.dK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.s,{children:function(_ref3){var ref=_ref3.ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TooltipEventWrapper,{ref,onHoverChanged:setIsHovering,children})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_10__.r,{placement:direction,modifiers:[(0,_util_popperUtil__WEBPACK_IMPORTED_MODULE_5__.E)(12)].concat(_toConsumableArray(popperModifiers)),children:function(_ref4){var arrowProps=_ref4.arrowProps,placement=_ref4.placement,ref=_ref4.ref,style=_ref4.style;return showTooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("module-tooltip",tooltipThemeClassName,className),ref,style,"data-placement":placement,children:[content,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"module-tooltip-arrow",ref:arrowProps.ref,style:arrowProps.style})]})}})]})}!function(TooltipPlacement){TooltipPlacement.Top="top",TooltipPlacement.Right="right",TooltipPlacement.Bottom="bottom",TooltipPlacement.Left="left"}(TooltipPlacement||(TooltipPlacement={})),Tooltip.displayName="Tooltip"},"./ts/services/InteractionMode.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>getInteractionMode});var interactionMode="mouse";function getInteractionMode(){return interactionMode}},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./ts/util/popperUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>offsetDistanceModifier,W:()=>sameWidthModifier});var offsetDistanceModifier=function(distance){return{name:"offset",options:{offset:[void 0,distance]}}},sameWidthModifier={name:"sameWidth",enabled:!0,phase:"write",fn:function(_ref){var state=_ref.state;state.elements.popper.style.width=`${state.rects.reference.width}px`}}},"./ts/util/refMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>refMerger,d:()=>createRefMerger});var memoizee__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memoizee/index.js"),memoizee__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_0__);function refMerger(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(el){refs.forEach((function(ref){"function"==typeof ref?ref(el):ref&&(ref.current=el)}))}}function createRefMerger(){return memoizee__WEBPACK_IMPORTED_MODULE_0___default()(refMerger,{length:!1,max:1})}},"./ts/util/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>Theme,j:()=>themeClassName});var Theme,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/missingCaseError.ts");function themeClassName(theme){switch(theme){case Theme.Light:return"light-theme";case Theme.Dark:return"dark-theme";default:throw(0,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__.b)(theme)}}!function(Theme){Theme[Theme.Light=0]="Light",Theme[Theme.Dark=1]="Dark"}(Theme||(Theme={}))},"./node_modules/react-popper/lib/esm/Manager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C8:()=>ManagerReferenceNodeContext,dK:()=>Manager,mq:()=>ManagerReferenceNodeSetterContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ManagerReferenceNodeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),ManagerReferenceNodeSetterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext();function Manager(_ref){var children=_ref.children,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){hasUnmounted.current=!0}}),[]);var handleSetReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){hasUnmounted.current||setReferenceNode(node)}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}},"./node_modules/react-popper/lib/esm/Popper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Popper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Manager__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js"),_usePopper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),NOOP=function NOOP(){},NOOP_PROMISE=function NOOP_PROMISE(){return Promise.resolve(null)},EMPTY_MODIFIERS=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=void 0===_ref$modifiers?EMPTY_MODIFIERS:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_1__.C8),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){(0,_utils__WEBPACK_IMPORTED_MODULE_2__.k$)(innerRef,popperElement)}),[innerRef,popperElement]);var options=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{placement,strategy,onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}])}}),[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=(0,_usePopper__WEBPACK_IMPORTED_MODULE_3__.D)(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}}),[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.$p)(children)(childrenProps)}},"./node_modules/react-popper/lib/esm/Reference.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Reference});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/warning/warning.js"),warning__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__),_Manager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js");function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_2__.mq),refHandler=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,node),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.DL)(setReferenceNode,node)}),[innerRef,setReferenceNode]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,null)}}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){warning__WEBPACK_IMPORTED_MODULE_1___default()(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")}),[setReferenceNode]),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.$p)(children)({ref:refHandler})}},"./node_modules/uuid-browser/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var v1=__webpack_require__("./node_modules/uuid-browser/v1.js"),v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},"./node_modules/uuid-browser/v1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid-browser/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid-browser/lib/bytesToUuid.js"),_seedBytes=rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0;module.exports=function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[],clockseq=void 0!==(options=options||{}).clockseq?options.clockseq:_clockseq,msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var node=options.node||_nodeId,n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}},"./node_modules/warning/warning.js":module=>{"use strict";var warning=function(){};module.exports=warning}}]);