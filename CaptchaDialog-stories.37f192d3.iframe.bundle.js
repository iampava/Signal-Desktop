(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[6953],{"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.search="search",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/CaptchaDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_CaptchaDialog:()=>_CaptchaDialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_CaptchaDialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/CaptchaDialog.tsx"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Button.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CaptchaDialog"};var i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__),_CaptchaDialog=function(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isSkipped=_useState2[0],setIsSkipped=_useState2[1];return isSkipped?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.zx,{onClick:function(){return setIsSkipped(!1)},children:"Show again"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CaptchaDialog__WEBPACK_IMPORTED_MODULE_3__.a,{i18n,isPending:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("isPending",!1),onContinue:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onContinue"),onSkip:function(){return setIsSkipped(!0)}})};_CaptchaDialog.displayName="_CaptchaDialog",_CaptchaDialog.story={name:"CaptchaDialog"};var __namedExportsOrder=["_CaptchaDialog"]},"./ts/components/CaptchaDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>CaptchaDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/Button.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Modal.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CaptchaDialog(props){var i18n=props.i18n,isPending=props.isPending,onSkip=props.onSkip,onContinue=props.onContinue,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isClosing=_useState2[0],setIsClosing=_useState2[1],buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);if(isClosing&&!isPending){var _footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function(event){event.preventDefault(),setIsClosing(!1)},variant:_Button__WEBPACK_IMPORTED_MODULE_1__.Wu.Secondary,children:i18n("icu:cancel")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function(event){event.preventDefault(),onSkip()},variant:_Button__WEBPACK_IMPORTED_MODULE_1__.Wu.Destructive,children:i18n("icu:CaptchaDialog--can_close__skip-verification")})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_2__.u_,{modalName:"CaptchaDialog",moduleClassName:"module-Modal",i18n,title:i18n("icu:CaptchaDialog--can-close__title"),onClose:function(){return setIsClosing(!1)},modalFooter:_footer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:i18n("icu:CaptchaDialog--can-close__body")})})},"skip")}var footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.zx,{disabled:isPending,onClick:function(event){event.preventDefault(),onContinue()},ref:function(button){buttonRef.current=button,button&&button.focus()},variant:_Button__WEBPACK_IMPORTED_MODULE_1__.Wu.Primary,children:isPending?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.$j,{size:"22px",svgSize:"small",direction:"on-primary-button"}):"Continue"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_2__.u_,{modalName:"CaptchaDialog.pending",moduleClassName:"module-Modal--important",i18n,title:i18n("icu:CaptchaDialog__title"),hasXButton:!0,onClose:function(){return setIsClosing(!0)},modalFooter:footer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:i18n("icu:CaptchaDialog__first-paragraph")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:i18n("icu:CaptchaDialog__second-paragraph")})]})},"primary")}CaptchaDialog.displayName="CaptchaDialog"},"./ts/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,me:()=>SpinnerSvgSizes,sX:()=>SpinnerDirections});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SpinnerSvgSizes=["small","normal"],SpinnerDirections=["outgoing","incoming","on-background","on-primary-button","on-progress-dialog","on-avatar"];function Spinner(_ref){var ariaLabel=_ref.ariaLabel,direction=_ref.direction,moduleClassName=_ref.moduleClassName,role=_ref.role,size=_ref.size,svgSize=_ref.svgSize,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__.h)("module-spinner",moduleClassName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__container"),getClassName(`__container--${svgSize}`),getClassName(direction&&`__container--${direction}`),getClassName(direction&&`__container--${svgSize}-${direction}`)),role,"aria-label":ariaLabel,style:{height:size,width:size},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__circle"),getClassName(`__circle--${svgSize}`),getClassName(direction&&`__circle--${direction}`),getClassName(direction&&`__circle--${svgSize}-${direction}`))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__arc"),getClassName(`__arc--${svgSize}`),getClassName(direction&&`__arc--${direction}`),getClassName(direction&&`__arc--${svgSize}-${direction}`))})]})}Spinner.displayName="Spinner"},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}}}]);