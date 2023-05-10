(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7e3],{"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.photo="photo",ButtonIconType.search="search",ButtonIconType.text="text",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/ConfirmationDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmationDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Button.tsx"),_ModalHost__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/ModalHost.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Modal.tsx"),_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/hooks/useAnimated.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function focusRef(el){el&&el.focus()}var ConfirmationDialog=react__WEBPACK_IMPORTED_MODULE_0__.memo((function ConfirmationDialogInner(_ref){var _ref$actions=_ref.actions,actions=void 0===_ref$actions?[]:_ref$actions,dialogName=_ref.dialogName,cancelButtonVariant=_ref.cancelButtonVariant,cancelText=_ref.cancelText,children=_ref.children,hasXButton=_ref.hasXButton,i18n=_ref.i18n,isSpinning=_ref.isSpinning,moduleClassName=_ref.moduleClassName,noMouseClose=_ref.noMouseClose,noDefaultCancelButton=_ref.noDefaultCancelButton,onCancel=_ref.onCancel,onClose=_ref.onClose,onTopOfEverything=_ref.onTopOfEverything,theme=_ref.theme,title=_ref.title,_useAnimated=(0,_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__.F)(onClose,{getFrom:function(){return{opacity:0,transform:"scale(0.25)"}},getTo:function(isOpen){return{opacity:isOpen?1:0,transform:"scale(1)"}}}),close=_useAnimated.close,overlayStyles=_useAnimated.overlayStyles,modalStyles=_useAnimated.modalStyles,cancelAndClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){onCancel&&onCancel(),close()}),[close,onCancel]),handleCancel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){e.target===e.currentTarget&&cancelAndClose()}),[cancelAndClose]),hasActions=Boolean(actions.length),footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[isSpinning||noDefaultCancelButton?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:handleCancel,ref:focusRef,variant:cancelButtonVariant||(hasActions?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary),children:cancelText||i18n("icu:confirmation-dialog--Cancel")}),actions.map((function(action,i){var _action$id,buttonStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{disabled:action.disabled||isSpinning,"aria-disabled":action["aria-disabled"],onClick:function(){action.action(),!1!==action.autoClose&&close()},"data-action":i,variant:(buttonStyle=action.style,"affirmative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary:"negative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Destructive:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary),children:isSpinning?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_6__.$j,{size:"22px",svgSize:"small",direction:"on-primary-button"}):action.text},"string"==typeof action.text?null!==(_action$id=action.id)&&void 0!==_action$id?_action$id:action.text:action.id)}))]}),modalName=`ConfirmationDialog.${dialogName}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ModalHost__WEBPACK_IMPORTED_MODULE_3__.l,{modalName,noMouseClose,onClose:close,onEscape:cancelAndClose,onTopOfEverything,overlayStyles,theme,moduleClassName:moduleClassName?`${moduleClassName}__ModalHost`:void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div,{style:modalStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.P2,{modalName,hasXButton,i18n,moduleClassName,onClose:cancelAndClose,title,modalFooter:footer,children})})})}))},"./ts/components/Intl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Intl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_logging_log__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/logging/log.ts"),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var defaultRenderText=function(_ref){var text=_ref.text,key=_ref.key;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:text},key)};defaultRenderText.displayName="defaultRenderText";var Intl=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intl,_React$Component);var _super=_createSuper(Intl);function Intl(){return _classCallCheck(this,Intl),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intl,[{key:"getComponent",value:function getComponent(index,placeholderName,key){var _this$props=this.props,id=_this$props.id,components=_this$props.components;if(!components)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl component prop not provided; Metadata: id '${id}', index ${index}, placeholder '${placeholderName}'`),null;if(Array.isArray(components))return!components||!components.length||components.length<=index?(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', index ${index}`),null):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:components[index]},key);var value=components[placeholderName];return value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:value},key):(_logging_log__WEBPACK_IMPORTED_MODULE_1__.error(`Error: Intl missing provided component for id '${id}', placeholder '${placeholderName}'`),null)}},{key:"render",value:function render(){var _this$props2=this.props,components=_this$props2.components,id=_this$props2.id,localizer=_this$props2.i18n,_this$props2$renderTe=_this$props2.renderText,renderText=void 0===_this$props2$renderTe?defaultRenderText:_this$props2$renderTe;if(!id)return _logging_log__WEBPACK_IMPORTED_MODULE_1__.error("Error: Intl id prop not provided"),null;if(!localizer.isLegacyFormat(id))return(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.Yj)(!Array.isArray(components),`components cannot be an array for ICU message ${id}`),localizer.getIntl().formatMessage({id},components);var text=localizer(id),results=[],FIND_REPLACEMENTS=/\$([^$]+)\$/g;if(Array.isArray(components)&&components.length>1)throw new Error("Array syntax is not supported with more than one placeholder");var componentIndex=0,key=0,lastTextIndex=0,match=FIND_REPLACEMENTS.exec(text);if(!match)return renderText({text,key:0});for(;match;){if(lastTextIndex<match.index){var textWithNoReplacements=text.slice(lastTextIndex,match.index);results.push(renderText({text:textWithNoReplacements,key})),key+=1}var placeholderName=match[1];results.push(this.getComponent(componentIndex,placeholderName,key)),componentIndex+=1,key+=1,lastTextIndex=FIND_REPLACEMENTS.lastIndex,match=FIND_REPLACEMENTS.exec(text)}return lastTextIndex<text.length&&(results.push(renderText({text:text.slice(lastTextIndex),key})),key+=1),results}}]),Intl}(react__WEBPACK_IMPORTED_MODULE_0__.Component)},"./ts/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,me:()=>SpinnerSvgSizes,sX:()=>SpinnerDirections});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SpinnerSvgSizes=["small","normal"],SpinnerDirections=["outgoing","incoming","on-background","on-primary-button","on-progress-dialog","on-avatar"];function Spinner(_ref){var ariaLabel=_ref.ariaLabel,direction=_ref.direction,moduleClassName=_ref.moduleClassName,role=_ref.role,size=_ref.size,svgSize=_ref.svgSize,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__.h)("module-spinner",moduleClassName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__container"),getClassName(`__container--${svgSize}`),getClassName(direction&&`__container--${direction}`),getClassName(direction&&`__container--${svgSize}-${direction}`)),role,"aria-label":ariaLabel,style:{height:size,width:size},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__circle"),getClassName(`__circle--${svgSize}`),getClassName(direction&&`__circle--${direction}`),getClassName(direction&&`__circle--${svgSize}-${direction}`))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__arc"),getClassName(`__arc--${svgSize}`),getClassName(direction&&`__arc--${direction}`),getClassName(direction&&`__arc--${svgSize}-${direction}`))})]})}Spinner.displayName="Spinner"},"./ts/components/conversation/ContactName.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ContactName});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Emojify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/Emojify.tsx"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactName(_ref){var text,contactNameColor=_ref.contactNameColor,firstName=_ref.firstName,isSignalConversation=_ref.isSignalConversation,isMe=_ref.isMe,module=_ref.module,preferFirstName=_ref.preferFirstName,title=_ref.title,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_3__.h)("module-contact-name",module);return text=preferFirstName?firstName||title||"":title||"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName(""),contactNameColor?getClassName(`--${contactNameColor}`):null),dir:"auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Emojify__WEBPACK_IMPORTED_MODULE_2__.u,{text}),(isSignalConversation||isMe)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"ContactModal__official-badge"})]})}ContactName.displayName="ContactName"},"./ts/components/conversation/MessageRequestActions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Direct:()=>Direct,DirectBlocked:()=>DirectBlocked,Group:()=>Group,GroupBlocked:()=>GroupBlocked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_MessageRequestActions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/MessageRequestActions.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__),getBaseProps=function(){var isGroup=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{conversationId:"123",i18n,conversationType:isGroup?"group":"direct",firstName:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("firstName","Cayce"),title:isGroup?(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","NYC Rock Climbers"):(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Cayce Bollard"),acceptConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("acceptConversation"),blockAndReportSpam:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("blockAndReportSpam"),blockConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("blockConversation"),deleteConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("deleteConversation")}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/MessageRequestActions"};function Direct(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"480px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MessageRequestActions__WEBPACK_IMPORTED_MODULE_3__.r,Object.assign({},getBaseProps()))})}function DirectBlocked(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"480px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MessageRequestActions__WEBPACK_IMPORTED_MODULE_3__.r,Object.assign({},getBaseProps(),{isBlocked:!0}))})}function Group(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"480px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MessageRequestActions__WEBPACK_IMPORTED_MODULE_3__.r,Object.assign({},getBaseProps(!0)))})}function GroupBlocked(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"480px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MessageRequestActions__WEBPACK_IMPORTED_MODULE_3__.r,Object.assign({},getBaseProps(!0),{isBlocked:!0}))})}Direct.displayName="Direct",DirectBlocked.displayName="DirectBlocked",DirectBlocked.story={name:"Direct (Blocked)"},Group.displayName="Group",GroupBlocked.displayName="GroupBlocked",GroupBlocked.story={name:"Group (Blocked)"};var __namedExportsOrder=["Direct","DirectBlocked","Group","GroupBlocked"]},"./ts/components/conversation/MessageRequestActions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>MessageRequestActions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ContactName__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/ContactName.tsx"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Button.tsx"),_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/MessageRequestActionsConfirmation.tsx"),_Intl__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Intl.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MessageRequestActions(_ref){var message,acceptConversation=_ref.acceptConversation,blockAndReportSpam=_ref.blockAndReportSpam,blockConversation=_ref.blockConversation,conversationId=_ref.conversationId,conversationType=_ref.conversationType,deleteConversation=_ref.deleteConversation,firstName=_ref.firstName,i18n=_ref.i18n,isHidden=_ref.isHidden,isBlocked=_ref.isBlocked,title=_ref.title,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.L.default),2),mrState=_React$useState2[0],setMrState=_React$useState2[1],name=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong",{className:"module-message-request-actions__message__name",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{firstName,title,preferFirstName:!0})},"name");return"direct"===conversationType?message=isBlocked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{i18n,id:"icu:MessageRequests--message-direct-blocked",components:{name}}):isHidden?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{i18n,id:"icu:MessageRequests--message-direct-hidden",components:{name}}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{i18n,id:"icu:MessageRequests--message-direct",components:{name}}):"group"===conversationType&&(message=isBlocked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{i18n,id:"icu:MessageRequests--message-group-blocked"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_4__.R,{i18n,id:"icu:MessageRequests--message-group"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[mrState!==_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.L.default?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.D,{acceptConversation,blockAndReportSpam,blockConversation,conversationId,conversationType,deleteConversation,i18n,onChangeState:setMrState,state:mrState,title}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"module-message-request-actions",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{className:"module-message-request-actions__message",children:message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"module-message-request-actions__buttons",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function(){setMrState(_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.L.deleting)},variant:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.SecondaryDestructive,children:i18n("icu:MessageRequests--delete")}),isBlocked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function(){setMrState(_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.L.unblocking)},variant:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.SecondaryAffirmative,children:i18n("icu:MessageRequests--unblock")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function(){setMrState(_MessageRequestActionsConfirmation__WEBPACK_IMPORTED_MODULE_3__.L.blocking)},variant:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.SecondaryDestructive,children:i18n("icu:MessageRequests--block")}),isBlocked?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function(){return acceptConversation(conversationId)},variant:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.SecondaryAffirmative,children:i18n("icu:MessageRequests--accept")})]})]})]})}},"./ts/components/conversation/MessageRequestActionsConfirmation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>MessageRequestActionsConfirmation,L:()=>MessageRequestState});__webpack_require__("./node_modules/react/index.js");var MessageRequestState,_ContactName__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/ContactName.tsx"),_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/ConfirmationDialog.tsx"),_Intl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/Intl.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MessageRequestActionsConfirmation(_ref){var acceptConversation=_ref.acceptConversation,blockAndReportSpam=_ref.blockAndReportSpam,blockConversation=_ref.blockConversation,conversationId=_ref.conversationId,conversationType=_ref.conversationType,deleteConversation=_ref.deleteConversation,i18n=_ref.i18n,onChangeState=_ref.onChangeState,state=_ref.state,title=_ref.title;return state===MessageRequestState.blocking?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_2__.U,{dialogName:"messageRequestActionsConfirmation.blocking",i18n,onClose:function(){onChangeState(MessageRequestState.default)},title:"direct"===conversationType?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_3__.R,{i18n,id:"icu:MessageRequests--block-direct-confirm-title",components:{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{title},"name")}}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_3__.R,{i18n,id:"icu:MessageRequests--block-group-confirm-title",components:{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{title},"name")}}),actions:[].concat(_toConsumableArray("direct"===conversationType?[{text:i18n("icu:MessageRequests--block-and-report-spam"),action:function(){return blockAndReportSpam(conversationId)},style:"negative"}]:[]),[{text:i18n("icu:MessageRequests--block"),action:function(){return blockConversation(conversationId)},style:"negative"}]),children:i18n("direct"===conversationType?"icu:MessageRequests--block-direct-confirm-body":"icu:MessageRequests--block-group-confirm-body")}):state===MessageRequestState.unblocking?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_2__.U,{dialogName:"messageRequestActionsConfirmation.unblocking",i18n,onClose:function(){onChangeState(MessageRequestState.default)},title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_3__.R,{i18n,id:"icu:MessageRequests--unblock-direct-confirm-title",components:{name:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{title},"name")}}),actions:[{text:i18n("icu:MessageRequests--unblock"),action:function(){return acceptConversation(conversationId)},style:"affirmative"}],children:i18n("direct"===conversationType?"icu:MessageRequests--unblock-direct-confirm-body":"icu:MessageRequests--unblock-group-confirm-body")}):state===MessageRequestState.deleting?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_2__.U,{dialogName:"messageRequestActionsConfirmation.deleting",i18n,onClose:function(){onChangeState(MessageRequestState.default)},title:"direct"===conversationType?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_3__.R,{i18n,id:"icu:MessageRequests--delete-direct-confirm-title"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_3__.R,{i18n,id:"icu:MessageRequests--delete-group-confirm-title",components:{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactName__WEBPACK_IMPORTED_MODULE_1__.K,{title},"name")}}),actions:[{text:i18n("direct"===conversationType?"icu:MessageRequests--delete-direct":"icu:MessageRequests--delete-group"),action:function(){return deleteConversation(conversationId)},style:"negative"}],children:i18n("direct"===conversationType?"icu:MessageRequests--delete-direct-confirm-body":"icu:MessageRequests--delete-group-confirm-body")}):null}!function(MessageRequestState){MessageRequestState[MessageRequestState.blocking=0]="blocking",MessageRequestState[MessageRequestState.deleting=1]="deleting",MessageRequestState[MessageRequestState.unblocking=2]="unblocking",MessageRequestState[MessageRequestState.default=3]="default"}(MessageRequestState||(MessageRequestState={}))},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}}}]);