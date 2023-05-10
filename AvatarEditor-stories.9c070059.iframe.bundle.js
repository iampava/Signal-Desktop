(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[4116],{"./ts/components/AvatarEditor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HasAvatar:()=>HasAvatar,NoAvatarGroup:()=>NoAvatarGroup,NoAvatarMe:()=>NoAvatarMe,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./_locales/en/messages.json"),_types_Colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/types/Colors.ts"),_AvatarEditor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/AvatarEditor.tsx"),_types_Avatar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/types/Avatar.ts"),_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/createAvatarData.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__),createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{avatarColor:overrideProps.avatarColor||_types_Colors__WEBPACK_IMPORTED_MODULE_4__.sj[9],avatarPath:overrideProps.avatarPath,conversationId:"123",conversationTitle:overrideProps.conversationTitle||"Default Title",deleteAvatarFromDisk:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("deleteAvatarFromDisk"),i18n,isGroup:Boolean(overrideProps.isGroup),onCancel:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onCancel"),onSave:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onSave"),replaceAvatar:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("replaceAvatar"),saveAvatarToDisk:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("saveAvatarToDisk"),userAvatarData:overrideProps.userAvatarData||[(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({imagePath:"/fixtures/kitten-3-64-64.jpg"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A110",text:"YA"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A120",text:"OK"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A130",text:"F"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A140",text:"🏄💣"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A150",text:"😇🙃😆"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A160",text:"🦊F💦"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A170",text:"J"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A180",text:"ZAP"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A190",text:"🍍P"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A200",text:"🌵"}),(0,_util_createAvatarData__WEBPACK_IMPORTED_MODULE_7__.s)({color:"A210",text:"NAP"})]}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/AvatarEditor"};function NoAvatarGroup(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AvatarEditor__WEBPACK_IMPORTED_MODULE_5__.u,Object.assign({},createProps({isGroup:!0,userAvatarData:(0,_types_Avatar__WEBPACK_IMPORTED_MODULE_6__._Y)(!0)})))}function NoAvatarMe(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AvatarEditor__WEBPACK_IMPORTED_MODULE_5__.u,Object.assign({},createProps({userAvatarData:(0,_types_Avatar__WEBPACK_IMPORTED_MODULE_6__._Y)()})))}function HasAvatar(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AvatarEditor__WEBPACK_IMPORTED_MODULE_5__.u,Object.assign({},createProps({avatarPath:"/fixtures/kitten-3-64-64.jpg"})))}NoAvatarGroup.displayName="NoAvatarGroup",NoAvatarGroup.story={name:"No Avatar (group)"},NoAvatarMe.displayName="NoAvatarMe",NoAvatarMe.story={name:"No Avatar (me)"},HasAvatar.displayName="HasAvatar";var __namedExportsOrder=["NoAvatarGroup","NoAvatarMe","HasAvatar"]},"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.search="search",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/ConfirmationDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmationDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Button.tsx"),_ModalHost__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/ModalHost.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/Modal.tsx"),_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/hooks/useAnimated.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function focusRef(el){el&&el.focus()}var ConfirmationDialog=react__WEBPACK_IMPORTED_MODULE_0__.memo((function ConfirmationDialogInner(_ref){var _ref$actions=_ref.actions,actions=void 0===_ref$actions?[]:_ref$actions,dialogName=_ref.dialogName,cancelButtonVariant=_ref.cancelButtonVariant,cancelText=_ref.cancelText,children=_ref.children,hasXButton=_ref.hasXButton,i18n=_ref.i18n,isSpinning=_ref.isSpinning,moduleClassName=_ref.moduleClassName,noMouseClose=_ref.noMouseClose,noDefaultCancelButton=_ref.noDefaultCancelButton,onCancel=_ref.onCancel,onClose=_ref.onClose,onTopOfEverything=_ref.onTopOfEverything,theme=_ref.theme,title=_ref.title,_useAnimated=(0,_hooks_useAnimated__WEBPACK_IMPORTED_MODULE_5__.F)(onClose,{getFrom:function(){return{opacity:0,transform:"scale(0.25)"}},getTo:function(isOpen){return{opacity:isOpen?1:0,transform:"scale(1)"}}}),close=_useAnimated.close,overlayStyles=_useAnimated.overlayStyles,modalStyles=_useAnimated.modalStyles,cancelAndClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){onCancel&&onCancel(),close()}),[close,onCancel]),handleCancel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){e.target===e.currentTarget&&cancelAndClose()}),[cancelAndClose]),hasActions=Boolean(actions.length),footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[isSpinning||noDefaultCancelButton?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:handleCancel,ref:focusRef,variant:cancelButtonVariant||(hasActions?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary),children:cancelText||i18n("icu:confirmation-dialog--Cancel")}),actions.map((function(action,i){var _action$id,buttonStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.zx,{disabled:action.disabled||isSpinning,"aria-disabled":action["aria-disabled"],onClick:function(){action.action(),!1!==action.autoClose&&close()},"data-action":i,variant:(buttonStyle=action.style,"affirmative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary:"negative"===buttonStyle?_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Destructive:_Button__WEBPACK_IMPORTED_MODULE_2__.Wu.Secondary),children:isSpinning?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_6__.$j,{size:"22px",svgSize:"small",direction:"on-primary-button"}):action.text},"string"==typeof action.text?null!==(_action$id=action.id)&&void 0!==_action$id?_action$id:action.text:action.id)}))]}),modalName=`ConfirmationDialog.${dialogName}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ModalHost__WEBPACK_IMPORTED_MODULE_3__.l,{modalName,noMouseClose,onClose:close,onEscape:cancelAndClose,onTopOfEverything,overlayStyles,theme,moduleClassName:moduleClassName?`${moduleClassName}__ModalHost`:void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div,{style:modalStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.P2,{modalName,hasXButton,i18n,moduleClassName,onClose:cancelAndClose,title,modalFooter:footer,children})})})}))},"./ts/util/getInitials.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getInitials(name){if(name){var parsedName=name.replace(/[^\p{L}\p{Z}]+/gu,"").replace(/\p{Z}+/gu," ").trim();if(parsedName){if(2===parsedName.length&&parsedName===parsedName.toUpperCase())return parsedName;var parts=parsedName.toUpperCase().split(" "),partsLen=parts.length;return 1===partsLen?parts[0].charAt(0):parts[0].charAt(0)+parts[partsLen-1].charAt(0)}}}__webpack_require__.d(__webpack_exports__,{Q:()=>getInitials})},"./ts/util/iterables.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function isIterable(value){return"object"==typeof value&&null!=value&&Symbol.iterator in value||"string"==typeof value}function size(iterable){if("string"==typeof iterable||Array.isArray(iterable))return iterable.length;if(iterable instanceof Set||iterable instanceof Map)return iterable.size;for(var iterator=iterable[Symbol.iterator](),result=-1,done=!1;!done;result+=1)done=Boolean(iterator.next().done);return result}__webpack_require__.d(__webpack_exports__,{TW:()=>isIterable,UI:()=>map,dp:()=>size,f9:()=>zipObject,hX:()=>filter,qn:()=>take,rx:()=>repeat,u4:()=>reduce,v_:()=>join,yW:()=>every});function every(iterable,predicate){var _step2,_iterator2=_createForOfIteratorHelper(iterable);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){if(!predicate(_step2.value))return!1}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return!0}function filter(iterable,predicate){return new FilterIterable(iterable,predicate)}var FilterIterable=function(_Symbol$iterator2){function FilterIterable(iterable,predicate){_classCallCheck(this,FilterIterable),this.iterable=iterable,this.predicate=predicate}return _createClass(FilterIterable,[{key:Symbol.iterator,value:function(){return new FilterIterator(this.iterable[Symbol.iterator](),this.predicate)}}]),FilterIterable}(),FilterIterator=function(){function FilterIterator(iterator,predicate){_classCallCheck(this,FilterIterator),this.iterator=iterator,this.predicate=predicate}return _createClass(FilterIterator,[{key:"next",value:function next(){for(;;){var nextIteration=this.iterator.next();if(nextIteration.done||this.predicate(nextIteration.value))return nextIteration}}}]),FilterIterator}();function join(iterable,separator){var _step6,hasProcessedFirst=!1,result="",_iterator6=_createForOfIteratorHelper(iterable);try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _value4=_step6.value,stringifiedValue=null==_value4?"":String(_value4);hasProcessedFirst?result+=separator+stringifiedValue:result=stringifiedValue,hasProcessedFirst=!0}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return result}function map(iterable,fn){return new MapIterable(iterable,fn)}var MapIterable=function(_Symbol$iterator4){function MapIterable(iterable,fn){_classCallCheck(this,MapIterable),this.iterable=iterable,this.fn=fn}return _createClass(MapIterable,[{key:Symbol.iterator,value:function(){return new MapIterator(this.iterable[Symbol.iterator](),this.fn)}}]),MapIterable}(),MapIterator=function(){function MapIterator(iterator,fn){_classCallCheck(this,MapIterator),this.iterator=iterator,this.fn=fn}return _createClass(MapIterator,[{key:"next",value:function next(){var nextIteration=this.iterator.next();return nextIteration.done?nextIteration:{done:!1,value:this.fn(nextIteration.value)}}}]),MapIterator}();function reduce(iterable,fn,accumulator){var _step7,result=accumulator,_iterator7=_createForOfIteratorHelper(iterable);try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){result=fn(result,_step7.value)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}return result}function repeat(value){return new RepeatIterable(value)}var RepeatIterable=function(_Symbol$iterator5){function RepeatIterable(value){_classCallCheck(this,RepeatIterable),this.value=value}return _createClass(RepeatIterable,[{key:Symbol.iterator,value:function(){return new RepeatIterator(this.value)}}]),RepeatIterable}(),RepeatIterator=function(){function RepeatIterator(value){_classCallCheck(this,RepeatIterator),this.iteratorResult={done:!1,value}}return _createClass(RepeatIterator,[{key:"next",value:function next(){return this.iteratorResult}}]),RepeatIterator}();function take(iterable,amount){return new TakeIterable(iterable,amount)}var TakeIterable=function(_Symbol$iterator6){function TakeIterable(iterable,amount){_classCallCheck(this,TakeIterable),this.iterable=iterable,this.amount=amount}return _createClass(TakeIterable,[{key:Symbol.iterator,value:function(){return new TakeIterator(this.iterable[Symbol.iterator](),this.amount)}}]),TakeIterable}(),TakeIterator=function(){function TakeIterator(iterator,amount){_classCallCheck(this,TakeIterator),this.iterator=iterator,this.amount=amount}return _createClass(TakeIterator,[{key:"next",value:function next(){var nextIteration=this.iterator.next();return nextIteration.done||0===this.amount?{done:!0,value:void 0}:(this.amount-=1,nextIteration)}}]),TakeIterator}();function zipObject(props,values){for(var result={},propsIterator=props[Symbol.iterator](),valuesIterator=values[Symbol.iterator]();;){var propIteration=propsIterator.next();if(propIteration.done)break;var valueIteration=valuesIterator.next();if(valueIteration.done)break;result[propIteration.value]=valueIteration.value}return result}},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}}}]);