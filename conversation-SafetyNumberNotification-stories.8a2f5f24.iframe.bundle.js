/*! For license information please see conversation-SafetyNumberNotification-stories.8a2f5f24.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[4824,3905],{"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.search="search",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/Intl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Intl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_logging_log__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/logging/log.ts"),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var defaultRenderText=function(_ref){var text=_ref.text,key=_ref.key;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:text},key)};defaultRenderText.displayName="defaultRenderText";var Intl=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intl,_React$Component);var _super=_createSuper(Intl);function Intl(){return _classCallCheck(this,Intl),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intl,[{key:"getComponent",value:function getComponent(index,placeholderName,key){var _this$props=this.props,id=_this$props.id,components=_this$props.components;if(!components)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl component prop not provided; Metadata: id '${id}', index ${index}, placeholder '${placeholderName}'`),null;if(Array.isArray(components))return!components||!components.length||components.length<=index?(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', index ${index}`),null):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:components[index]},key);var value=components[placeholderName];return value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:value},key):(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', placeholder '${placeholderName}'`),null)}},{key:"render",value:function render(){var _this$props2=this.props,components=_this$props2.components,id=_this$props2.id,localizer=_this$props2.i18n,_this$props2$renderTe=_this$props2.renderText,renderText=void 0===_this$props2$renderTe?defaultRenderText:_this$props2$renderTe;if(!id)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error("Error: Intl id prop not provided"),null;if(!localizer.isLegacyFormat(id))return(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.Yj)(!Array.isArray(components),`components cannot be an array for ICU message ${id}`),localizer.getIntl().formatMessage({id},components);var text=localizer(id),results=[],FIND_REPLACEMENTS=/\$([^$]+)\$/g;if(Array.isArray(components)&&components.length>1)throw new Error("Array syntax is not supported with more than one placeholder");var componentIndex=0,key=0,lastTextIndex=0,match=FIND_REPLACEMENTS.exec(text);if(!match)return renderText({text,key:0});for(;match;){if(lastTextIndex<match.index){var textWithNoReplacements=text.slice(lastTextIndex,match.index);results.push(renderText({text:textWithNoReplacements,key})),key+=1}var placeholderName=match[1];results.push(this.getComponent(componentIndex,placeholderName,key)),componentIndex+=1,key+=1,lastTextIndex=FIND_REPLACEMENTS.lastIndex,match=FIND_REPLACEMENTS.exec(text)}return lastTextIndex<text.length&&(results.push(renderText({text:text.slice(lastTextIndex),key})),key+=1),results}}]),Intl}(react__WEBPACK_IMPORTED_MODULE_0__.Component)},"./ts/components/conversation/ContactName.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ContactName});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Emojify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/Emojify.tsx"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactName(_ref){var text,contactNameColor=_ref.contactNameColor,firstName=_ref.firstName,isSignalConversation=_ref.isSignalConversation,isMe=_ref.isMe,module=_ref.module,preferFirstName=_ref.preferFirstName,title=_ref.title,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__.h)("module-contact-name",module);return text=preferFirstName?firstName||title||"":title||"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName(""),contactNameColor?getClassName(`--${contactNameColor}`):null),dir:"auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Emojify__WEBPACK_IMPORTED_MODULE_2__.u,{text}),(isSignalConversation||isMe)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"ContactModal__official-badge"})]})}ContactName.displayName="ContactName"},"./ts/components/conversation/SafetyNumberNotification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DirectConversation:()=>DirectConversation,GroupConversation:()=>GroupConversation,LongNameInGroup:()=>LongNameInGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./_locales/en/messages.json"),_SafetyNumberNotification__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/conversation/SafetyNumberNotification.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__),createContact=function(props){return{id:"",title:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("contact title",props.title||"")}},createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,contact:overrideProps.contact||{},isGroup:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("isGroup",overrideProps.isGroup||!1),toggleSafetyNumberModal:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("toggleSafetyNumberModal")}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/SafetyNumberNotification"};function GroupConversation(){var props=createProps({isGroup:!0,contact:createContact({title:"Mr. Fire"})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SafetyNumberNotification__WEBPACK_IMPORTED_MODULE_5__.b,Object.assign({},props))}function DirectConversation(){var props=createProps({isGroup:!1,contact:createContact({title:"Mr. Fire"})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SafetyNumberNotification__WEBPACK_IMPORTED_MODULE_5__.b,Object.assign({},props))}function LongNameInGroup(){var props=createProps({isGroup:!0,contact:createContact({title:"🐈‍⬛🍕🎂".repeat(50)})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SafetyNumberNotification__WEBPACK_IMPORTED_MODULE_5__.b,Object.assign({},props))}GroupConversation.displayName="GroupConversation",DirectConversation.displayName="DirectConversation",LongNameInGroup.displayName="LongNameInGroup",LongNameInGroup.story={name:"Long name in group"};var __namedExportsOrder=["GroupConversation","DirectConversation","LongNameInGroup"]},"./ts/components/conversation/SafetyNumberNotification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>SafetyNumberNotification});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/Button.tsx"),_SystemMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/SystemMessage.tsx"),_ContactName__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/ContactName.tsx"),_Intl__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Intl.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SafetyNumberNotification(_ref){var contact=_ref.contact,isGroup=_ref.isGroup,i18n=_ref.i18n,toggleSafetyNumberModal=_ref.toggleSafetyNumberModal,name=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"module-safety-number-notification__contact",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_3__.K,{title:contact.title,module:"module-safety-number-notification__contact"})},"external-1");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SystemMessage__WEBPACK_IMPORTED_MODULE_2__.j,{icon:"safety-number",contents:isGroup?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{id:"icu:safetyNumberChangedGroup",components:{name},i18n}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{id:"icu:safetyNumberChanged",i18n}),button:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function(){toggleSafetyNumberModal(contact.id)},size:_Button__WEBPACK_IMPORTED_MODULE_1__.qE.Small,variant:_Button__WEBPACK_IMPORTED_MODULE_1__.Wu.SystemMessage,children:i18n("icu:SafetyNumberNotification__viewSafetyNumber")})})}SafetyNumberNotification.displayName="SafetyNumberNotification"},"./ts/components/conversation/SystemMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>SystemMessageKind,j:()=>SystemMessage});var SystemMessageKind,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(SystemMessageKind){SystemMessageKind.Normal="Normal",SystemMessageKind.Danger="Danger",SystemMessageKind.Error="Error"}(SystemMessageKind||(SystemMessageKind={}));var SystemMessage=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function SystemMessageInner(_ref,ref){var icon=_ref.icon,contents=_ref.contents,button=_ref.button,_ref$kind=_ref.kind,kind=void 0===_ref$kind?SystemMessageKind.Normal:_ref$kind;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("SystemMessage",kind===SystemMessageKind.Danger&&"SystemMessage--danger",kind===SystemMessageKind.Error&&"SystemMessage--error"),ref,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("SystemMessage__contents",`SystemMessage__contents--icon-${icon}`),children:contents}),button&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"SystemMessage__button-container",children:button})]})}))},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./ts/util/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>Theme,j:()=>themeClassName});var Theme,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/missingCaseError.ts");function themeClassName(theme){switch(theme){case Theme.Light:return"light-theme";case Theme.Dark:return"dark-theme";default:throw(0,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__.b)(theme)}}!function(Theme){Theme[Theme.Light=0]="Light",Theme[Theme.Dark=1]="Dark"}(Theme||(Theme={}))},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);