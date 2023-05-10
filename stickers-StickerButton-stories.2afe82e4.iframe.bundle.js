"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[2491],{"./ts/components/UserText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>UserText});__webpack_require__("./node_modules/react/index.js");var _conversation_Emojify__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/Emojify.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UserText(_ref){var text=_ref.text;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{dir:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_conversation_Emojify__WEBPACK_IMPORTED_MODULE_1__.u,{text})})}UserText.displayName="UserText"},"./ts/components/stickers/StickerButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InstalledPackTooltip:()=>InstalledPackTooltip,InstalledPackTooltipTall:()=>InstalledPackTooltipTall,InstalledPackTooltipWide:()=>InstalledPackTooltipWide,NewInstallTooltip:()=>NewInstallTooltip,NoPacks:()=>NoPacks,OnlyBlessed:()=>OnlyBlessed,OnlyInstalled:()=>OnlyInstalled,OnlyKnown:()=>OnlyKnown,OnlyReceived:()=>OnlyReceived,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./_locales/en/messages.json"),_StickerButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/stickers/StickerButton.tsx"),_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/stickers/StickerPicker.stories.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_3__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stickers/StickerButton",decorators:[function(storyFn){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{height:"500px",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-end"},children:storyFn()})}]};var receivedPacks=[(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"received-pack-1",status:"downloaded"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker1),(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"received-pack-2",status:"downloaded"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker2)],installedPacks=[(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"installed-pack-1",status:"installed"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker1),(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"installed-pack-2",status:"installed"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker2)],blessedPacks=[(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"blessed-pack-1",status:"downloaded",isBlessed:!0},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker1),(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"blessed-pack-2",status:"downloaded",isBlessed:!0},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker2)],knownPacks=[(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"known-pack-1",status:"known"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker1),(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"known-pack-2",status:"known"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.sticker2)],createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{blessedPacks:overrideProps.blessedPacks||[],clearInstalledStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clearInstalledStickerPack"),clearShowIntroduction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clearShowIntroduction"),clearShowPickerHint:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clearShowPickerHint"),i18n,installedPack:overrideProps.installedPack,installedPacks:overrideProps.installedPacks||[],knownPacks:overrideProps.knownPacks||[],onClickAddPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onClickAddPack"),onPickSticker:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onPickSticker"),receivedPacks:overrideProps.receivedPacks||[],recentStickers:[],showIntroduction:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("showIntroduction",overrideProps.showIntroduction||!1),showPickerHint:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("showPickerHint",!1)}};function OnlyInstalled(){var props=createProps({installedPacks});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function OnlyReceived(){var props=createProps({receivedPacks});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function OnlyKnown(){var props=createProps({knownPacks});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function OnlyBlessed(){var props=createProps({blessedPacks});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function NoPacks(){var props=createProps();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function InstalledPackTooltip(){var props=createProps({installedPacks,installedPack:installedPacks[0]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function InstalledPackTooltipWide(){var installedPack=(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"installed-pack-wide"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.wideSticker),props=createProps({installedPacks:[installedPack],installedPack});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function InstalledPackTooltipTall(){var installedPack=(0,_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.createPack)({id:"installed-pack-tall"},_StickerPicker_stories__WEBPACK_IMPORTED_MODULE_6__.tallSticker),props=createProps({installedPacks:[installedPack],installedPack});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}function NewInstallTooltip(){var props=createProps({installedPacks,showIntroduction:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerButton__WEBPACK_IMPORTED_MODULE_5__.q,Object.assign({},props))}OnlyInstalled.displayName="OnlyInstalled",OnlyReceived.displayName="OnlyReceived",OnlyKnown.displayName="OnlyKnown",OnlyBlessed.displayName="OnlyBlessed",NoPacks.displayName="NoPacks",InstalledPackTooltip.displayName="InstalledPackTooltip",InstalledPackTooltipWide.displayName="InstalledPackTooltipWide",InstalledPackTooltipWide.story={name:"Installed Pack Tooltip (Wide)"},InstalledPackTooltipTall.displayName="InstalledPackTooltipTall",InstalledPackTooltipTall.story={name:"Installed Pack Tooltip (Tall)"},NewInstallTooltip.displayName="NewInstallTooltip";var __namedExportsOrder=["OnlyInstalled","OnlyReceived","OnlyKnown","OnlyBlessed","NoPacks","InstalledPackTooltip","InstalledPackTooltipWide","InstalledPackTooltipTall","NewInstallTooltip"]},"./ts/components/stickers/StickerButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StickerButton});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),lodash_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/get.js"),lodash_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),react_popper__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),react_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-dom/index.js"),_StickerPicker__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/stickers/StickerPicker.tsx"),_lib__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./ts/components/stickers/lib.ts"),_util_popperUtil__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/util/popperUtil.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/theme.ts"),_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/util/handleOutsideClick.ts"),_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ts/services/keyboardLayout.ts"),_hooks_useRefMerger__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./ts/hooks/useRefMerger.ts"),_UserText__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./ts/components/UserText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StickerButton=react__WEBPACK_IMPORTED_MODULE_2__.memo((function StickerButtonInner(_ref){var className=_ref.className,i18n=_ref.i18n,clearInstalledStickerPack=_ref.clearInstalledStickerPack,onClickAddPack=_ref.onClickAddPack,onPickSticker=_ref.onPickSticker,onPickTimeSticker=_ref.onPickTimeSticker,recentStickers=_ref.recentStickers,onOpenStateChanged=_ref.onOpenStateChanged,receivedPacks=_ref.receivedPacks,installedPack=_ref.installedPack,installedPacks=_ref.installedPacks,blessedPacks=_ref.blessedPacks,knownPacks=_ref.knownPacks,showIntroduction=_ref.showIntroduction,clearShowIntroduction=_ref.clearShowIntroduction,showPickerHint=_ref.showPickerHint,clearShowPickerHint=_ref.clearShowPickerHint,_ref$position=_ref.position,position=void 0===_ref$position?"top-end":_ref$position,theme=_ref.theme,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_2__.useState(!1),2),open=_React$useState2[0],internalSetOpen=_React$useState2[1],setOpen=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(value){internalSetOpen(value),onOpenStateChanged&&onOpenStateChanged(value)}),[internalSetOpen,onOpenStateChanged]),_React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_2__.useState(null),2),popperRoot=_React$useState4[0],setPopperRoot=_React$useState4[1],buttonRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),refMerger=(0,_hooks_useRefMerger__WEBPACK_IMPORTED_MODULE_10__.T)(),handleClickButton=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(){clearInstalledStickerPack(),clearShowIntroduction(),0===installedPacks.length?null==onClickAddPack||onClickAddPack():setOpen(!popperRoot)}),[clearInstalledStickerPack,clearShowIntroduction,installedPacks,onClickAddPack,popperRoot,setOpen]),handlePickSticker=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(packId,stickerId,url){setOpen(!1),onPickSticker(packId,stickerId,url)}),[setOpen,onPickSticker]),handlePickTimeSticker=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(style){setOpen(!1),null==onPickTimeSticker||onPickTimeSticker(style)}),[setOpen,onPickTimeSticker]),handleClose=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(){setOpen(!1)}),[setOpen]),handleClickAddPack=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(){setOpen(!1),showPickerHint&&clearShowPickerHint(),null==onClickAddPack||onClickAddPack()}),[onClickAddPack,showPickerHint,setOpen,clearShowPickerHint]),handleClearIntroduction=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((function(){clearInstalledStickerPack(),clearShowIntroduction()}),[clearInstalledStickerPack,clearShowIntroduction]);return react__WEBPACK_IMPORTED_MODULE_2__.useEffect((function(){if(open){var root=document.createElement("div");return setPopperRoot(root),document.body.appendChild(root),function(){document.body.removeChild(root),setPopperRoot(null)}}return lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[open,setOpen,setPopperRoot]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((function(){return open?(0,_util_handleOutsideClick__WEBPACK_IMPORTED_MODULE_8__.p)((function(target){var targetClassName=target&&target.className||"";return(!targetClassName||targetClassName.indexOf("module-sticker-picker__header__button")<0)&&(setOpen(!1),!0)}),{containerElements:[popperRoot,buttonRef],name:"StickerButton"}):lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[open,popperRoot,setOpen]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((function(){var handleKeydown=function(event){var ctrlKey=event.ctrlKey,metaKey=event.metaKey,shiftKey=event.shiftKey,commandKey="darwin"===lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(window,"platform")&&metaKey,controlKey="darwin"!==lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(window,"platform")&&ctrlKey,commandOrCtrl=commandKey||controlKey,key=_services_keyboardLayout__WEBPACK_IMPORTED_MODULE_9__.P(event),panels=document.querySelectorAll(".conversation .panel");panels&&panels.length>1||commandOrCtrl&&shiftKey&&("g"===key||"G"===key)&&(event.stopPropagation(),event.preventDefault(),setOpen(!open))};return document.addEventListener("keydown",handleKeydown),function(){document.removeEventListener("keydown",handleKeydown)}}),[open,setOpen]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((function(){if(installedPack){var timerId=setTimeout(clearInstalledStickerPack,1e4);return function(){clearTimeout(timerId)}}return lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()}),[installedPack,clearInstalledStickerPack]),0===(0,_lib__WEBPACK_IMPORTED_MODULE_13__.Q)({knownPacks,blessedPacks,installedPacks,receivedPacks})?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_14__.dK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_15__.s,{children:function(_ref2){var ref=_ref2.ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",{type:"button",ref:refMerger(buttonRef,ref),onClick:handleClickButton,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()({"module-sticker-button__button":!0,"module-sticker-button__button--active":open},className),"aria-label":i18n("icu:stickers--StickerPicker--Open")})}}),open||showIntroduction||!installedPack?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_16__.r,{placement:position,modifiers:[(0,_util_popperUtil__WEBPACK_IMPORTED_MODULE_6__.E)(6)],children:function(_ref3){var ref=_ref3.ref,style=_ref3.style,placement=_ref3.placement,arrowProps=_ref3.arrowProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_7__.j)(theme):void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button",{type:"button",ref,style,className:"module-sticker-button__tooltip",onClick:clearInstalledStickerPack,children:[installedPack.cover?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img",{className:"module-sticker-button__tooltip__image",src:installedPack.cover.url,alt:installedPack.title}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:"module-sticker-button__tooltip__image-placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span",{className:"module-sticker-button__tooltip__text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{className:"module-sticker-button__tooltip__text__title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UserText__WEBPACK_IMPORTED_MODULE_11__.a,{text:installedPack.title})})," ","installed"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{ref:arrowProps.ref,style:arrowProps.style,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("module-sticker-button__tooltip__triangle",`module-sticker-button__tooltip__triangle--${placement}`)})]})})}},installedPack.id),!open&&showIntroduction?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_16__.r,{placement:position,modifiers:[(0,_util_popperUtil__WEBPACK_IMPORTED_MODULE_6__.E)(6)],children:function(_ref4){var ref=_ref4.ref,style=_ref4.style,placement=_ref4.placement,arrowProps=_ref4.arrowProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_7__.j)(theme):void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button",{type:"button",ref,style,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("module-sticker-button__tooltip","module-sticker-button__tooltip--introduction"),onClick:handleClearIntroduction,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img",{className:"module-sticker-button__tooltip--introduction__image",srcSet:"images/sticker_splash@1x.png 1x, images/sticker_splash@2x.png 2x",alt:i18n("icu:stickers--StickerManager--Introduction--Image")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"module-sticker-button__tooltip--introduction__meta",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:"module-sticker-button__tooltip--introduction__meta__title",children:i18n("icu:stickers--StickerManager--Introduction--Title")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:"module-sticker-button__tooltip--introduction__meta__subtitle",children:i18n("icu:stickers--StickerManager--Introduction--Body")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:"module-sticker-button__tooltip--introduction__close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",{type:"button",className:"module-sticker-button__tooltip--introduction__close__button",onClick:handleClearIntroduction,"aria-label":i18n("icu:close")})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{ref:arrowProps.ref,style:arrowProps.style,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("module-sticker-button__tooltip__triangle","module-sticker-button__tooltip__triangle--introduction",`module-sticker-button__tooltip__triangle--${placement}`)})]})})}}):null,open&&popperRoot?(0,react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_16__.r,{placement:position,children:function(_ref5){var ref=_ref5.ref,style=_ref5.style;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:theme?(0,_util_theme__WEBPACK_IMPORTED_MODULE_7__.j)(theme):void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StickerPicker__WEBPACK_IMPORTED_MODULE_5__.C,{ref,i18n,style,packs:installedPacks,onClose:handleClose,onClickAddPack:onClickAddPack?handleClickAddPack:void 0,onPickSticker:handlePickSticker,onPickTimeSticker:onPickTimeSticker?handlePickTimeSticker:void 0,recentStickers,showPickerHint})})}}),popperRoot):null]})}))},"./ts/components/stickers/lib.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function countStickers(o){return o.knownPacks.length+o.blessedPacks.length+o.installedPacks.length+o.receivedPacks.length}__webpack_require__.d(__webpack_exports__,{Q:()=>countStickers})},"./ts/hooks/useRefMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useRefMerger});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_refMerger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/util/refMerger.ts"),useRefMerger=function(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(_util_refMerger__WEBPACK_IMPORTED_MODULE_1__.d,[])}},"./ts/services/keyboardLayout.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>lookup});var layoutMap,_util_assert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/assert.ts");function lookup(_ref){var _layoutMap$get,code=_ref.code,key=_ref.key;return(0,_util_assert__WEBPACK_IMPORTED_MODULE_0__.Yj)(void 0!==layoutMap,"keyboardLayout not initialized"),null!==(_layoutMap$get=layoutMap.get(code))&&void 0!==_layoutMap$get?_layoutMap$get:key}},"./ts/util/handleOutsideClick.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{p:()=>handleOutsideClick});var fakeClickHandlers=new Array;function runFakeClickHandlers(event){var _step,_iterator=_createForOfIteratorHelper(fakeClickHandlers.slice().reverse());try{for(_iterator.s();!(_step=_iterator.n()).done;){if((0,_step.value.handleEvent)(event))break}}catch(err){_iterator.e(err)}finally{_iterator.f()}}var handleOutsideClick=function(handler,_ref){var name=_ref.name,containerElements=_ref.containerElements,fakeHandler={name,handleEvent:function(event){var target=event.target;return!!containerElements.some((function(elem){var _elem$current;return!!elem&&(elem instanceof Node?elem.contains(target):null===(_elem$current=elem.current)||void 0===_elem$current?void 0:_elem$current.contains(target))}))||handler(target)}};if(fakeClickHandlers.push(fakeHandler),1===fakeClickHandlers.length){document.addEventListener("click",runFakeClickHandlers,!0)}return function(){var index=fakeClickHandlers.indexOf(fakeHandler);if(fakeClickHandlers.splice(index,1),0===fakeClickHandlers.length){document.removeEventListener("click",runFakeClickHandlers,!0)}}}},"./ts/util/popperUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>offsetDistanceModifier,W:()=>sameWidthModifier});var offsetDistanceModifier=function(distance){return{name:"offset",options:{offset:[void 0,distance]}}},sameWidthModifier={name:"sameWidth",enabled:!0,phase:"write",fn:function(_ref){var state=_ref.state;state.elements.popper.style.width=`${state.rects.reference.width}px`}}},"./ts/util/refMerger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>refMerger,d:()=>createRefMerger});var memoizee__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memoizee/index.js"),memoizee__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_0__);function refMerger(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(el){refs.forEach((function(ref){"function"==typeof ref?ref(el):ref&&(ref.current=el)}))}}function createRefMerger(){return memoizee__WEBPACK_IMPORTED_MODULE_0___default()(refMerger,{length:!1,max:1})}},"./ts/util/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Theme,j:()=>themeClassName});var Theme,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/missingCaseError.ts");function themeClassName(theme){switch(theme){case Theme.Light:return"light-theme";case Theme.Dark:return"dark-theme";default:throw(0,_missingCaseError__WEBPACK_IMPORTED_MODULE_0__.b)(theme)}}!function(Theme){Theme[Theme.Light=0]="Light",Theme[Theme.Dark=1]="Dark"}(Theme||(Theme={}))},"./node_modules/react-popper/lib/esm/Manager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C8:()=>ManagerReferenceNodeContext,dK:()=>Manager,mq:()=>ManagerReferenceNodeSetterContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ManagerReferenceNodeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),ManagerReferenceNodeSetterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext();function Manager(_ref){var children=_ref.children,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){hasUnmounted.current=!0}}),[]);var handleSetReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){hasUnmounted.current||setReferenceNode(node)}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}},"./node_modules/react-popper/lib/esm/Popper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Popper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Manager__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js"),_usePopper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),NOOP=function NOOP(){},NOOP_PROMISE=function NOOP_PROMISE(){return Promise.resolve(null)},EMPTY_MODIFIERS=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=void 0===_ref$modifiers?EMPTY_MODIFIERS:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_1__.C8),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){(0,_utils__WEBPACK_IMPORTED_MODULE_2__.k$)(innerRef,popperElement)}),[innerRef,popperElement]);var options=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{placement,strategy,onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}])}}),[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=(0,_usePopper__WEBPACK_IMPORTED_MODULE_3__.D)(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}}),[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.$p)(children)(childrenProps)}},"./node_modules/react-popper/lib/esm/Reference.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Reference});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/warning/warning.js"),warning__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__),_Manager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-popper/lib/esm/utils.js");function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Manager__WEBPACK_IMPORTED_MODULE_2__.mq),refHandler=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,node),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.DL)(setReferenceNode,node)}),[innerRef,setReferenceNode]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.k$)(innerRef,null)}}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){warning__WEBPACK_IMPORTED_MODULE_1___default()(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")}),[setReferenceNode]),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.$p)(children)({ref:refHandler})}},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);