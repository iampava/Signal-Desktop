"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7661],{"./ts/components/CallingHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LobbyStyle:()=>LobbyStyle,LongTitle:()=>LongTitle,TitleWithMessage:()=>TitleWithMessage,WithParticipants:()=>WithParticipants,WithParticipantsShown:()=>WithParticipantsShown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_CallingHeader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/CallingHeader.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__),createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,isGroupCall:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("isGroupCall",Boolean(overrideProps.isGroupCall)),message:overrideProps.message,participantCount:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("participantCount",overrideProps.participantCount||0),showParticipantsList:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showParticipantsList",Boolean(overrideProps.showParticipantsList)),title:overrideProps.title||"With Someone",toggleParticipants:function(){return(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("toggle-participants")},togglePip:function(){return(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("toggle-pip")},toggleSettings:function(){return(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("toggle-settings")}}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CallingHeader"};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps()))}function LobbyStyle(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps(),{title:void 0,togglePip:void 0,onCancel:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClose")}))}function WithParticipants(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps({isGroupCall:!0,participantCount:10})))}function WithParticipantsShown(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps({isGroupCall:!0,participantCount:10,showParticipantsList:!0})))}function LongTitle(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps({title:"What do I got to, what do I got to do to wake you up? To shake you up, to break the structure up?"})))}function TitleWithMessage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CallingHeader__WEBPACK_IMPORTED_MODULE_3__.X,Object.assign({},createProps({title:"Hello world",message:"Goodbye earth"})))}Default.displayName="Default",LobbyStyle.displayName="LobbyStyle",LobbyStyle.story={name:"Lobby style"},WithParticipants.displayName="WithParticipants",WithParticipantsShown.displayName="WithParticipantsShown",WithParticipantsShown.story={name:"With Participants (shown)"},LongTitle.displayName="LongTitle",TitleWithMessage.displayName="TitleWithMessage",TitleWithMessage.story={name:"Title with message"};var __namedExportsOrder=["Default","LobbyStyle","WithParticipants","WithParticipantsShown","LongTitle","TitleWithMessage"]},"./ts/components/CallingHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>CallingHeader});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Tooltip.tsx"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CallingHeader(_ref){var i18n=_ref.i18n,isInSpeakerView=_ref.isInSpeakerView,_ref$isGroupCall=_ref.isGroupCall,isGroupCall=void 0!==_ref$isGroupCall&&_ref$isGroupCall,message=_ref.message,onCancel=_ref.onCancel,participantCount=_ref.participantCount,showParticipantsList=_ref.showParticipantsList,title=_ref.title,toggleParticipants=_ref.toggleParticipants,togglePip=_ref.togglePip,toggleSettings=_ref.toggleSettings,toggleSpeakerView=_ref.toggleSpeakerView;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-calling__header",children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling__header--header-name",children:title}):null,message?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-ongoing-call__header-message",children:message}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-calling-tools",children:[isGroupCall&&participantCount?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling-tools__button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{content:i18n("icu:calling__participants",{people:String(participantCount)}),theme:_util_theme__WEBPACK_IMPORTED_MODULE_3__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{"aria-label":i18n("icu:calling__participants",{people:String(participantCount)}),className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("CallingButton__participants--container",{"CallingButton__participants--shown":showParticipantsList}),onClick:toggleParticipants,type:"button",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i",{className:"CallingButton__participants"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"CallingButton__participants--count",children:participantCount})]})})}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling-tools__button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{content:i18n("icu:callingDeviceSelection__settings"),theme:_util_theme__WEBPACK_IMPORTED_MODULE_3__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":i18n("icu:callingDeviceSelection__settings"),className:"CallingButton__settings",onClick:toggleSettings,type:"button"})})}),isGroupCall&&participantCount>2&&toggleSpeakerView&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling-tools__button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{content:i18n(isInSpeakerView?"icu:calling__switch-view--to-grid":"icu:calling__switch-view--to-speaker"),theme:_util_theme__WEBPACK_IMPORTED_MODULE_3__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":i18n(isInSpeakerView?"icu:calling__switch-view--to-grid":"icu:calling__switch-view--to-speaker"),className:isInSpeakerView?"CallingButton__grid-view":"CallingButton__speaker-view",onClick:toggleSpeakerView,type:"button"})})}),togglePip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling-tools__button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{content:i18n("icu:calling__pip--on"),theme:_util_theme__WEBPACK_IMPORTED_MODULE_3__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":i18n("icu:calling__pip--on"),className:"CallingButton__pip",onClick:togglePip,type:"button"})})}),onCancel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-calling-tools__button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{content:i18n("icu:cancel"),theme:_util_theme__WEBPACK_IMPORTED_MODULE_3__.Q.Dark,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":i18n("icu:cancel"),className:"CallingButton__cancel",onClick:onCancel,type:"button"})})})]})]})}CallingHeader.displayName="CallingHeader"},"./ts/components/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TQ:()=>TooltipPlacement,u:()=>Tooltip});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),_util_refMerger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/refMerger.ts"),_util_popperUtil__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/popperUtil.ts"),_services_InteractionMode__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/services/InteractionMode.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TooltipPlacement,TooltipEventWrapper=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function TooltipEvent(_ref,ref){var onHoverChanged=_ref.onHoverChanged,children=_ref.children,wrapperRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),on=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){onHoverChanged(!0)}),[onHoverChanged]),off=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){onHoverChanged(!1)}),[onHoverChanged]),onFocus=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(){"keyboard"===(0,_services_InteractionMode__WEBPACK_IMPORTED_MODULE_7__.G)()&&on()}),[on]);return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){var wrapperEl=wrapperRef.current;return wrapperEl?(wrapperEl.addEventListener("mouseenter",on),wrapperEl.addEventListener("mouseleave",off),function(){wrapperEl.removeEventListener("mouseenter",on),wrapperEl.removeEventListener("mouseleave",off)}):lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[on,off]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{onFocus,onBlur:off,ref:(0,_util_refMerger__WEBPACK_IMPORTED_MODULE_4__.M)(ref,wrapperRef),children})}));function Tooltip(_ref2){var children=_ref2.children,className=_ref2.className,content=_ref2.content,direction=_ref2.direction,sticky=_ref2.sticky,theme=_ref2.theme,_ref2$popperModifiers=_ref2.popperModifiers,popperModifiers=void 0===_ref2$popperModifiers?[]:_ref2$popperModifiers,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),2),isHovering=_React$useState2[0],setIsHovering=_React$useState2[1],showTooltip=isHovering||Boolean(sticky),tooltipThemeClassName=theme?`module-tooltip--${(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme)}`:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_8__.dK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.s,{children:function(_ref3){var ref=_ref3.ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TooltipEventWrapper,{ref,onHoverChanged:setIsHovering,children})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_10__.r,{placement:direction,modifiers:[(0,_util_popperUtil__WEBPACK_IMPORTED_MODULE_5__.E)(12)].concat(_toConsumableArray(popperModifiers)),children:function(_ref4){var arrowProps=_ref4.arrowProps,placement=_ref4.placement,ref=_ref4.ref,style=_ref4.style;return showTooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("module-tooltip",tooltipThemeClassName,className),ref,style,"data-placement":placement,children:[content,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"module-tooltip-arrow",ref:arrowProps.ref,style:arrowProps.style})]})}})]})}!function(TooltipPlacement){TooltipPlacement.Top="top",TooltipPlacement.Right="right",TooltipPlacement.Bottom="bottom",TooltipPlacement.Left="left"}(TooltipPlacement||(TooltipPlacement={})),Tooltip.displayName="Tooltip"},"./ts/services/InteractionMode.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getInteractionMode});var interactionMode="mouse";function getInteractionMode(){return interactionMode}},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./ts/util/popperUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>offsetDistanceModifier,W:()=>sameWidthModifier});var offsetDistanceModifier=function(distance){return{name:"offset",options:{offset:[void 0,distance]}}},sameWidthModifier={name:"sameWidth",enabled:!0,phase:"write",fn:function(_ref){var state=_ref.state;state.elements.popper.style.width=`${state.rects.reference.width}px`}}},"./ts/util/refMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>refMerger,d:()=>createRefMerger});var memoizee__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memoizee/index.js"),memoizee__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_0__);function refMerger(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(el){refs.forEach((function(ref){"function"==typeof ref?ref(el):ref&&(ref.current=el)}))}}function createRefMerger(){return memoizee__WEBPACK_IMPORTED_MODULE_0___default()(refMerger,{length:!1,max:1})}},"./ts/util/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Theme,j:()=>themeClassName});var Theme,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/missingCaseError.ts");function themeClassName(theme){switch(theme){case Theme.Light:return"light-theme";case Theme.Dark:return"dark-theme";default:throw(0,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__.b)(theme)}}!function(Theme){Theme[Theme.Light=0]="Light",Theme[Theme.Dark=1]="Dark"}(Theme||(Theme={}))},"./node_modules/react-popper/lib/esm/Manager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C8:()=>ManagerReferenceNodeContext,dK:()=>Manager,mq:()=>ManagerReferenceNodeSetterContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ManagerReferenceNodeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),ManagerReferenceNodeSetterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext();function Manager(_ref){var children=_ref.children,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){hasUnmounted.current=!0}}),[]);var handleSetReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){hasUnmounted.current||setReferenceNode(node)}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}},"./node_modules/react-popper/lib/esm/Popper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Popper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Manager__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js"),_usePopper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),NOOP=function NOOP(){},NOOP_PROMISE=function NOOP_PROMISE(){return Promise.resolve(null)},EMPTY_MODIFIERS=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=void 0===_ref$modifiers?EMPTY_MODIFIERS:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_1__.C8),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){(0,_utils__WEBPACK_IMPORTED_MODULE_2__.k$)(innerRef,popperElement)}),[innerRef,popperElement]);var options=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{placement,strategy,onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}])}}),[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=(0,_usePopper__WEBPACK_IMPORTED_MODULE_3__.D)(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}}),[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.$p)(children)(childrenProps)}},"./node_modules/react-popper/lib/esm/Reference.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Reference});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/warning/warning.js"),warning__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__),_Manager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js");function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_2__.mq),refHandler=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,node),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.DL)(setReferenceNode,node)}),[innerRef,setReferenceNode]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,null)}}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){warning__WEBPACK_IMPORTED_MODULE_1___default()(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")}),[setReferenceNode]),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.$p)(children)({ref:refHandler})}},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);