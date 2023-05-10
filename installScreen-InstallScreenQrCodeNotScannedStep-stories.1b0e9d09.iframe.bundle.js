/*! For license information please see installScreen-InstallScreenQrCodeNotScannedStep-stories.1b0e9d09.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[3536],{"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.photo="photo",ButtonIconType.search="search",ButtonIconType.text="text",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/ConfirmationDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmationDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Button.tsx"),_ModalHost__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/ModalHost.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Modal.tsx"),_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/hooks/useAnimated.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function focusRef(el){el&&el.focus()}var ConfirmationDialog=react__WEBPACK_IMPORTED_MODULE_0__.memo((function ConfirmationDialogInner(_ref){var _ref$actions=_ref.actions,actions=void 0===_ref$actions?[]:_ref$actions,dialogName=_ref.dialogName,cancelButtonVariant=_ref.cancelButtonVariant,cancelText=_ref.cancelText,children=_ref.children,hasXButton=_ref.hasXButton,i18n=_ref.i18n,isSpinning=_ref.isSpinning,moduleClassName=_ref.moduleClassName,noMouseClose=_ref.noMouseClose,noDefaultCancelButton=_ref.noDefaultCancelButton,onCancel=_ref.onCancel,onClose=_ref.onClose,onTopOfEverything=_ref.onTopOfEverything,theme=_ref.theme,title=_ref.title,_useAnimated=(0,_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__.F)(onClose,{getFrom:function(){return{opacity:0,transform:"scale(0.25)"}},getTo:function(isOpen){return{opacity:isOpen?1:0,transform:"scale(1)"}}}),close=_useAnimated.close,overlayStyles=_useAnimated.overlayStyles,modalStyles=_useAnimated.modalStyles,cancelAndClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){onCancel&&onCancel(),close()}),[close,onCancel]),handleCancel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){e.target===e.currentTarget&&cancelAndClose()}),[cancelAndClose]),hasActions=Boolean(actions.length),footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[isSpinning||noDefaultCancelButton?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:handleCancel,ref:focusRef,variant:cancelButtonVariant||(hasActions?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary),children:cancelText||i18n("icu:confirmation-dialog--Cancel")}),actions.map((function(action,i){var _action$id,buttonStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{disabled:action.disabled||isSpinning,"aria-disabled":action["aria-disabled"],onClick:function(){action.action(),!1!==action.autoClose&&close()},"data-action":i,variant:(buttonStyle=action.style,"affirmative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary:"negative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Destructive:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary),children:isSpinning?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_6__.$j,{size:"22px",svgSize:"small",direction:"on-primary-button"}):action.text},"string"==typeof action.text?null!==(_action$id=action.id)&&void 0!==_action$id?_action$id:action.text:action.id)}))]}),modalName=`ConfirmationDialog.${dialogName}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ModalHost__WEBPACK_IMPORTED_MODULE_3__.l,{modalName,noMouseClose,onClose:close,onEscape:cancelAndClose,onTopOfEverything,overlayStyles,theme,moduleClassName:moduleClassName?`${moduleClassName}__ModalHost`:void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div,{style:modalStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.P2,{modalName,hasXButton,i18n,moduleClassName,onClose:cancelAndClose,title,modalFooter:footer,children})})})}))},"./ts/components/Intl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Intl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_logging_log__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/logging/log.ts"),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var defaultRenderText=function(_ref){var text=_ref.text,key=_ref.key;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:text},key)};defaultRenderText.displayName="defaultRenderText";var Intl=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intl,_React$Component);var _super=_createSuper(Intl);function Intl(){return _classCallCheck(this,Intl),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intl,[{key:"getComponent",value:function getComponent(index,placeholderName,key){var _this$props=this.props,id=_this$props.id,components=_this$props.components;if(!components)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl component prop not provided; Metadata: id '${id}', index ${index}, placeholder '${placeholderName}'`),null;if(Array.isArray(components))return!components||!components.length||components.length<=index?(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', index ${index}`),null):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:components[index]},key);var value=components[placeholderName];return value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:value},key):(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', placeholder '${placeholderName}'`),null)}},{key:"render",value:function render(){var _this$props2=this.props,components=_this$props2.components,id=_this$props2.id,localizer=_this$props2.i18n,_this$props2$renderTe=_this$props2.renderText,renderText=void 0===_this$props2$renderTe?defaultRenderText:_this$props2$renderTe;if(!id)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error("Error: Intl id prop not provided"),null;if(!localizer.isLegacyFormat(id))return(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.Yj)(!Array.isArray(components),`components cannot be an array for ICU message ${id}`),localizer.getIntl().formatMessage({id},components);var text=localizer(id),results=[],FIND_REPLACEMENTS=/\$([^$]+)\$/g;if(Array.isArray(components)&&components.length>1)throw new Error("Array syntax is not supported with more than one placeholder");var componentIndex=0,key=0,lastTextIndex=0,match=FIND_REPLACEMENTS.exec(text);if(!match)return renderText({text,key:0});for(;match;){if(lastTextIndex<match.index){var textWithNoReplacements=text.slice(lastTextIndex,match.index);results.push(renderText({text:textWithNoReplacements,key})),key+=1}var placeholderName=match[1];results.push(this.getComponent(componentIndex,placeholderName,key)),componentIndex+=1,key+=1,lastTextIndex=FIND_REPLACEMENTS.lastIndex,match=FIND_REPLACEMENTS.exec(text)}return lastTextIndex<text.length&&(results.push(renderText({text:text.slice(lastTextIndex),key})),key+=1),results}}]),Intl}(react__WEBPACK_IMPORTED_MODULE_0__.Component)},"./ts/components/QrCode.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>QrCode});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),qrcode_generator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/qrcode-generator/qrcode.js"),qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_1__),_environment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/environment.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QrCode(props){var alt=props.alt,className=props.className,data=props.data,elRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),src=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var qrCode=qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default()(0,"L");return qrCode.addData(data),qrCode.make(),`data:image/svg+xml;utf8,${qrCode.createSvgTag({cellSize:1,margin:0})}`}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{alt,className,onDoubleClick:function(){if((0,_environment__WEBPACK_IMPORTED_MODULE_2__.zj)()!==_environment__WEBPACK_IMPORTED_MODULE_2__.qA.Production){navigator.clipboard.writeText(data);var el=elRef.current;el&&(el.style.filter="brightness(50%)",window.setTimeout((function(){el.style.filter=""}),150))}},ref:elRef,src})}QrCode.displayName="QrCode"},"./ts/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,me:()=>SpinnerSvgSizes,sX:()=>SpinnerDirections});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SpinnerSvgSizes=["small","normal"],SpinnerDirections=["outgoing","incoming","on-background","on-primary-button","on-progress-dialog","on-avatar"];function Spinner(_ref){var ariaLabel=_ref.ariaLabel,direction=_ref.direction,moduleClassName=_ref.moduleClassName,role=_ref.role,size=_ref.size,svgSize=_ref.svgSize,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__.h)("module-spinner",moduleClassName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__container"),getClassName(`__container--${svgSize}`),getClassName(direction&&`__container--${direction}`),getClassName(direction&&`__container--${svgSize}-${direction}`)),role,"aria-label":ariaLabel,style:{height:size,width:size},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__circle"),getClassName(`__circle--${svgSize}`),getClassName(direction&&`__circle--${direction}`),getClassName(direction&&`__circle--${svgSize}-${direction}`))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__arc"),getClassName(`__arc--${svgSize}`),getClassName(direction&&`__arc--${direction}`),getClassName(direction&&`__arc--${svgSize}-${direction}`))})]})}Spinner.displayName="Spinner"},"./ts/components/TitlebarDragArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>TitlebarDragArea});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TitlebarDragArea(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"module-title-bar-drag-area"})}TitlebarDragArea.displayName="TitlebarDragArea"},"./ts/components/installScreen/InstallScreenQrCodeNotScannedStep.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{QrCodeFailedToLoad:()=>QrCodeFailedToLoad,QrCodeLoaded:()=>QrCodeLoaded,QrCodeLoading:()=>QrCodeLoading,SimulatedFailure:()=>SimulatedFailure,SimulatedLoading:()=>SimulatedLoading,WithUpdateKnobs:()=>WithUpdateKnobs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InstallScreenQrCodeNotScannedStep_stories});var LoadingState,react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),setupI18n=__webpack_require__("./ts/util/setupI18n.ts"),Dialogs=__webpack_require__("./ts/types/Dialogs.ts"),messages=__webpack_require__("./_locales/en/messages.json");!function(LoadingState){LoadingState[LoadingState.Loading=0]="Loading",LoadingState[LoadingState.Loaded=1]="Loaded",LoadingState[LoadingState.LoadFailed=2]="LoadFailed"}(LoadingState||(LoadingState={}));var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),missingCaseError=__webpack_require__("./ts/util/missingCaseError.ts"),Intl=__webpack_require__("./ts/components/Intl.tsx"),Spinner=__webpack_require__("./ts/components/Spinner.tsx"),QrCode=__webpack_require__("./ts/components/QrCode.tsx"),TitlebarDragArea=__webpack_require__("./ts/components/TitlebarDragArea.tsx"),InstallScreenSignalLogo=__webpack_require__("./ts/components/installScreen/InstallScreenSignalLogo.tsx"),noop=__webpack_require__("./node_modules/lodash/noop.js"),noop_default=__webpack_require__.n(noop),filesize=__webpack_require__("./node_modules/filesize/lib/filesize.js"),filesize_default=__webpack_require__.n(filesize),support=__webpack_require__("./ts/types/support.ts"),version=__webpack_require__("./ts/util/version.ts"),ConfirmationDialog=__webpack_require__("./ts/components/ConfirmationDialog.tsx"),Modal=__webpack_require__("./ts/components/Modal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstallScreenUpdateDialog(_ref){var i18n=_ref.i18n,dialogType=_ref.dialogType,downloadSize=_ref.downloadSize,downloadedSize=_ref.downloadedSize,startUpdate=_ref.startUpdate,currentVersion=_ref.currentVersion,OS=_ref.OS,dialogName=`InstallScreenUpdateDialog.${dialogType}`;if(dialogType===Dialogs.i.UnsupportedOS)return(0,jsx_runtime.jsx)(Modal.u_,{i18n,modalName:dialogName,noMouseClose:!0,title:i18n("icu:InstallScreenUpdateDialog--unsupported-os__title"),children:(0,jsx_runtime.jsx)(Intl.R,{id:"icu:UnsupportedOSErrorDialog__body",i18n,components:{OS,learnMoreLink:function(children){return(0,jsx_runtime.jsx)("a",{href:support.ny,rel:"noreferrer",target:"_blank",children},"signal-support")}}})});if(dialogType===Dialogs.i.AutoUpdate||dialogType===Dialogs.i.DownloadReady||dialogType===Dialogs.i.FullDownloadReady||dialogType===Dialogs.i.DownloadedUpdate){var title=i18n("icu:autoUpdateNewVersionTitle"),actionText=i18n("icu:autoUpdateRestartButtonLabel"),bodyText=i18n("icu:InstallScreenUpdateDialog--auto-update__body");return dialogType!==Dialogs.i.DownloadReady&&dialogType!==Dialogs.i.FullDownloadReady||(actionText=(0,jsx_runtime.jsx)(Intl.R,{id:"icu:InstallScreenUpdateDialog--manual-update__action",i18n,components:{downloadSize:(0,jsx_runtime.jsxs)("span",{className:"InstallScreenUpdateDialog__download-size",children:["(",filesize_default()(null!=downloadSize?downloadSize:0,{round:0}),")"]})}})),dialogType===Dialogs.i.DownloadedUpdate&&(title=i18n("icu:DialogUpdate__downloaded"),bodyText=i18n("icu:InstallScreenUpdateDialog--downloaded__body")),(0,jsx_runtime.jsx)(ConfirmationDialog.U,{i18n,dialogName,title,noDefaultCancelButton:!0,actions:[{id:"ok",text:actionText,action:startUpdate,style:"affirmative",autoClose:!1}],onClose:noop_default(),children:bodyText})}if(dialogType===Dialogs.i.Downloading){var width=Math.ceil((downloadedSize||1)/(downloadSize||1)*100);return(0,jsx_runtime.jsx)(Modal.u_,{i18n,modalName:dialogName,noMouseClose:!0,useFocusTrap:!1,title:i18n("icu:DialogUpdate__downloading"),children:(0,jsx_runtime.jsx)("div",{className:"InstallScreenUpdateDialog__progress--container",children:(0,jsx_runtime.jsx)("div",{className:"InstallScreenUpdateDialog__progress--bar",style:{transform:`translateX(${width-100}%)`}})})})}if(dialogType===Dialogs.i.Cannot_Update||dialogType===Dialogs.i.Cannot_Update_Require_Manual){var url=(0,version.hN)(currentVersion)?support.Uu:support.PB,_title=i18n("icu:cannotUpdate"),body=(0,jsx_runtime.jsx)(Intl.R,{i18n,id:"icu:InstallScreenUpdateDialog--cannot-update__body",components:{downloadUrl:(0,jsx_runtime.jsx)("a",{href:url,target:"_blank",rel:"noreferrer",children:url})}});return dialogType===Dialogs.i.Cannot_Update?(0,jsx_runtime.jsx)(ConfirmationDialog.U,{i18n,dialogName,moduleClassName:"InstallScreenUpdateDialog",title:_title,noDefaultCancelButton:!0,actions:[{text:i18n("icu:autoUpdateRetry"),action:startUpdate,style:"affirmative",autoClose:!1}],onClose:noop_default(),children:body}):(0,jsx_runtime.jsx)(Modal.u_,{i18n,modalName:dialogName,noMouseClose:!0,title:_title,moduleClassName:"InstallScreenUpdateDialog",children:body})}return dialogType===Dialogs.i.MacOS_Read_Only?(0,jsx_runtime.jsx)(Modal.u_,{i18n,modalName:dialogName,noMouseClose:!0,useFocusTrap:!1,title:i18n("icu:cannotUpdate"),children:(0,jsx_runtime.jsx)(Intl.R,{components:{app:(0,jsx_runtime.jsx)("strong",{children:"Signal.app"},"app"),folder:(0,jsx_runtime.jsx)("strong",{children:"/Applications"},"folder")},i18n,id:"icu:readOnlyVolume"})}):null}var getClassNamesFor=__webpack_require__("./ts/util/getClassNamesFor.ts"),getQrCodeClassName=(0,getClassNamesFor.h)("module-InstallScreenQrCodeNotScannedStep__qr-code");function InstallScreenQrCodeNotScannedStep(_ref){var i18n=_ref.i18n,provisioningUrl=_ref.provisioningUrl,hasExpired=_ref.hasExpired,updates=_ref.updates,startUpdate=_ref.startUpdate,currentVersion=_ref.currentVersion,OS=_ref.OS;return(0,jsx_runtime.jsxs)("div",{className:"module-InstallScreenQrCodeNotScannedStep",children:[(0,jsx_runtime.jsx)(TitlebarDragArea.w,{}),(0,jsx_runtime.jsx)(InstallScreenSignalLogo._,{}),hasExpired&&(0,jsx_runtime.jsx)(InstallScreenUpdateDialog,Object.assign({i18n},updates,{startUpdate,currentVersion,OS})),(0,jsx_runtime.jsxs)("div",{className:"module-InstallScreenQrCodeNotScannedStep__contents",children:[(0,jsx_runtime.jsx)(InstallScreenQrCode,Object.assign({i18n},provisioningUrl)),(0,jsx_runtime.jsxs)("div",{className:"module-InstallScreenQrCodeNotScannedStep__instructions",children:[(0,jsx_runtime.jsx)("h1",{children:i18n("icu:Install__scan-this-code")}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:i18n("icu:Install__instructions__1")}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Intl.R,{i18n,id:"icu:Install__instructions__2",components:{settings:(0,jsx_runtime.jsx)("strong",{children:i18n("icu:Install__instructions__2__settings")}),linkedDevices:(0,jsx_runtime.jsx)("strong",{children:i18n("icu:linkedDevices")})}})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Intl.R,{i18n,id:"icu:Install__instructions__3",components:{plusButton:(0,jsx_runtime.jsx)("div",{className:"module-InstallScreenQrCodeNotScannedStep__android-plus","aria-label":"+"}),linkNewDevice:(0,jsx_runtime.jsx)("strong",{children:i18n("icu:linkNewDevice")})}})})]}),(0,jsx_runtime.jsx)("a",{href:"https://support.signal.org/hc/articles/360007320451#desktop_multiple_device",children:i18n("icu:Install__support-link")})]})]})]})}function InstallScreenQrCode(props){var contents,i18n=props.i18n;switch(props.loadingState){case LoadingState.Loading:contents=(0,jsx_runtime.jsx)(Spinner.$j,{size:"24px",svgSize:"small"});break;case LoadingState.LoadFailed:contents=(0,jsx_runtime.jsx)("span",{className:classnames_default()(getQrCodeClassName("__error-message")),children:(0,jsx_runtime.jsx)(Intl.R,{i18n,id:"icu:Install__qr-failed",components:{learnMoreLink:function(children){return(0,jsx_runtime.jsx)("a",{href:"https://support.signal.org/hc/articles/360007320451#desktop_multiple_device",children})}}})});break;case LoadingState.Loaded:contents=(0,jsx_runtime.jsx)(QrCode.U,{alt:i18n("icu:Install__scan-this-code"),className:getQrCodeClassName("__code"),data:props.value});break;default:throw(0,missingCaseError.b)(props)}return(0,jsx_runtime.jsx)("div",{className:classnames_default()(getQrCodeClassName(""),props.loadingState===LoadingState.Loaded&&getQrCodeClassName("--loaded"),props.loadingState===LoadingState.LoadFailed&&getQrCodeClassName("--load-failed")),children:contents})}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}InstallScreenQrCodeNotScannedStep.displayName="InstallScreenQrCodeNotScannedStep",InstallScreenQrCode.displayName="InstallScreenQrCode";var i18n=(0,setupI18n.E5)("en",messages),LOADED_URL={loadingState:LoadingState.Loaded,value:"sgnl://linkdevice?uuid=b33f6338-aaf1-4853-9aff-6652369f6b52&pub_key=BTpRKRtFeJGga1M3Na4PzZevMvVIWmTWQIpn0BJI3x10"},DEFAULT_UPDATES={dialogType:Dialogs.i.None,didSnooze:!1,showEventsCount:0,downloadSize:70254592,downloadedSize:15728640,version:"v7.7.7"};const InstallScreenQrCodeNotScannedStep_stories={title:"Components/InstallScreen/InstallScreenQrCodeNotScannedStep",argTypes:{}};function Simulation(_ref){var finalResult=_ref.finalResult,_useState2=_slicedToArray((0,react.useState)({loadingState:LoadingState.Loading}),2),provisioningUrl=_useState2[0],setProvisioningUrl=_useState2[1];return(0,react.useEffect)((function(){var timeout=setTimeout((function(){setProvisioningUrl(finalResult)}),2e3);return function(){clearTimeout(timeout)}}),[finalResult]),(0,jsx_runtime.jsx)(InstallScreenQrCodeNotScannedStep,{i18n,provisioningUrl,updates:DEFAULT_UPDATES,OS:"macOS",startUpdate:(0,esm.action)("startUpdate"),currentVersion:"v6.0.0"})}function QrCodeLoading(){return(0,jsx_runtime.jsx)(InstallScreenQrCodeNotScannedStep,{i18n,provisioningUrl:{loadingState:LoadingState.Loading},updates:DEFAULT_UPDATES,OS:"macOS",startUpdate:(0,esm.action)("startUpdate"),currentVersion:"v6.0.0"})}function QrCodeFailedToLoad(){return(0,jsx_runtime.jsx)(InstallScreenQrCodeNotScannedStep,{i18n,provisioningUrl:{loadingState:LoadingState.LoadFailed,error:new Error("uh oh")},updates:DEFAULT_UPDATES,OS:"macOS",startUpdate:(0,esm.action)("startUpdate"),currentVersion:"v6.0.0"})}function QrCodeLoaded(){return(0,jsx_runtime.jsx)(InstallScreenQrCodeNotScannedStep,{i18n,provisioningUrl:LOADED_URL,updates:DEFAULT_UPDATES,OS:"macOS",startUpdate:(0,esm.action)("startUpdate"),currentVersion:"v6.0.0"})}function SimulatedLoading(){return(0,jsx_runtime.jsx)(Simulation,{finalResult:LOADED_URL})}function SimulatedFailure(){return(0,jsx_runtime.jsx)(Simulation,{finalResult:{loadingState:LoadingState.LoadFailed,error:new Error("uh oh")}})}function WithUpdateKnobs(_ref2){var dialogType=_ref2.dialogType,currentVersion=_ref2.currentVersion;return(0,jsx_runtime.jsx)(InstallScreenQrCodeNotScannedStep,{i18n,provisioningUrl:LOADED_URL,hasExpired:!0,updates:Object.assign({},DEFAULT_UPDATES,{dialogType}),OS:"macOS",startUpdate:(0,esm.action)("startUpdate"),currentVersion})}Simulation.displayName="Simulation",QrCodeLoading.displayName="QrCodeLoading",QrCodeLoading.story={name:"QR code loading"},QrCodeFailedToLoad.displayName="QrCodeFailedToLoad",QrCodeFailedToLoad.story={name:"QR code failed to load"},QrCodeLoaded.displayName="QrCodeLoaded",QrCodeLoaded.story={name:"QR code loaded"},SimulatedLoading.displayName="SimulatedLoading",SimulatedLoading.story={name:"Simulated loading"},SimulatedFailure.displayName="SimulatedFailure",SimulatedFailure.story={name:"Simulated failure"},WithUpdateKnobs.displayName="WithUpdateKnobs",WithUpdateKnobs.story={name:"With Update Knobs",argTypes:{dialogType:{control:{type:"select"},defaultValue:Dialogs.i.AutoUpdate,options:Object.values(Dialogs.i)},currentVersion:{control:{type:"select"},defaultValue:"v6.0.0",options:["v6.0.0","v6.1.0-beta.1"]}}};var __namedExportsOrder=["QrCodeLoading","QrCodeFailedToLoad","QrCodeLoaded","SimulatedLoading","SimulatedFailure","WithUpdateKnobs"]},"./ts/components/installScreen/InstallScreenSignalLogo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>InstallScreenSignalLogo});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstallScreenSignalLogo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"InstallScreenSignalLogo",children:"Signal"})}InstallScreenSignalLogo.displayName="InstallScreenSignalLogo"},"./ts/types/Dialogs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var DialogType;__webpack_require__.d(__webpack_exports__,{i:()=>DialogType}),function(DialogType){DialogType.None="None",DialogType.AutoUpdate="AutoUpdate",DialogType.Cannot_Update="Cannot_Update",DialogType.Cannot_Update_Require_Manual="Cannot_Update_Require_Manual",DialogType.UnsupportedOS="UnsupportedOS",DialogType.MacOS_Read_Only="MacOS_Read_Only",DialogType.DownloadReady="DownloadReady",DialogType.FullDownloadReady="FullDownloadReady",DialogType.Downloading="Downloading",DialogType.DownloadedUpdate="DownloadedUpdate"}(DialogType||(DialogType={}))},"./ts/types/support.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PB:()=>PRODUCTION_DOWNLOAD_URL,Uu:()=>BETA_DOWNLOAD_URL,ny:()=>UNSUPPORTED_OS_URL});var PRODUCTION_DOWNLOAD_URL="https://signal.org/download/",BETA_DOWNLOAD_URL="https://support.signal.org/beta",UNSUPPORTED_OS_URL="https://support.signal.org/hc/articles/5109141421850"},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./ts/util/version.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$9:()=>isAlpha,hN:()=>isBeta});var semver__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/semver/semver.js"),isBeta=function(version){var _semver$parse;return"beta"===(null===(_semver$parse=semver__WEBPACK_IMPORTED_MODULE_0__.parse(version))||void 0===_semver$parse?void 0:_semver$parse.prerelease[0])},isAlpha=function(version){var _semver$parse2;return"alpha"===(null===(_semver$parse2=semver__WEBPACK_IMPORTED_MODULE_0__.parse(version))||void 0===_semver$parse2?void 0:_semver$parse2.prerelease[0])}},"./node_modules/filesize/lib/filesize.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";!function(global){var b=/^(b|B)$/,symbol={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function filesize(arg){var descriptor=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},result=[],val=0,e=void 0,base=void 0,bits=void 0,ceil=void 0,full=void 0,fullforms=void 0,neg=void 0,num=void 0,output=void 0,round=void 0,unix=void 0,separator=void 0,spacer=void 0,standard=void 0,symbols=void 0;if(isNaN(arg))throw new Error("Invalid arguments");return bits=!0===descriptor.bits,unix=!0===descriptor.unix,base=descriptor.base||2,round=void 0!==descriptor.round?descriptor.round:unix?1:2,separator=void 0!==descriptor.separator&&descriptor.separator||"",spacer=void 0!==descriptor.spacer?descriptor.spacer:unix?"":" ",symbols=descriptor.symbols||descriptor.suffixes||{},standard=2===base&&descriptor.standard||"jedec",output=descriptor.output||"string",full=!0===descriptor.fullform,fullforms=descriptor.fullforms instanceof Array?descriptor.fullforms:[],e=void 0!==descriptor.exponent?descriptor.exponent:-1,ceil=base>2?1e3:1024,(neg=(num=Number(arg))<0)&&(num=-num),(-1===e||isNaN(e))&&(e=Math.floor(Math.log(num)/Math.log(ceil)))<0&&(e=0),e>8&&(e=8),0===num?(result[0]=0,result[1]=unix?"":symbol[standard][bits?"bits":"bytes"][e]):(val=num/(2===base?Math.pow(2,10*e):Math.pow(1e3,e)),bits&&(val*=8)>=ceil&&e<8&&(val/=ceil,e++),result[0]=Number(val.toFixed(e>0?round:0)),result[1]=10===base&&1===e?bits?"kb":"kB":symbol[standard][bits?"bits":"bytes"][e],unix&&(result[1]="jedec"===standard?result[1].charAt(0):e>0?result[1].replace(/B$/,""):result[1],b.test(result[1])&&(result[0]=Math.floor(result[0]),result[1]=""))),neg&&(result[0]=-result[0]),result[1]=symbols[result[1]]||result[1],"array"===output?result:"exponent"===output?e:"object"===output?{value:result[0],suffix:result[1],symbol:result[1]}:(full&&(result[1]=fullforms[e]?fullforms[e]:fullform[standard][e]+(bits?"bit":"byte")+(1===result[0]?"":"s")),separator.length>0&&(result[0]=result[0].toString().replace(".",separator)),result.join(spacer))}filesize.partial=function(opt){return function(arg){return filesize(arg,opt)}},module.exports=filesize}("undefined"!=typeof window?window:__webpack_require__.g)},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}}}]);