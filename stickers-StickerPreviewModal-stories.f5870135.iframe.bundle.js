"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7990],{"./ts/components/stickers/StickerPreviewModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,InitialDownload:()=>InitialDownload,JustFourStickers:()=>JustFourStickers,PackDeleted:()=>PackDeleted,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_StickerPreviewModal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/stickers/StickerPreviewModal.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./_locales/en/messages.json"),_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/storybook/Fixtures.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_4__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_5__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stickers/StickerPreviewModal"};var abeSticker={id:-1,emoji:"🎩",url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_6__.e7,packId:"abe"},wideSticker={id:-2,emoji:"🤯",url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_6__.L$,packId:"wide"},tallSticker={id:-3,emoji:"🔥",url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_6__.K$,packId:"tall"};function Full(){var title=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Foo"),author=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("author","Foo McBarrington"),pack={id:"foo",key:"foo",lastUsed:Date.now(),cover:abeSticker,title,isBlessed:!0,author,status:"downloaded",stickerCount:101,stickers:[wideSticker,tallSticker].concat(_toConsumableArray(Array(101).fill(0).map((function(_n,id){return Object.assign({},abeSticker,{id})}))))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerPreviewModal__WEBPACK_IMPORTED_MODULE_3__.p,{closeStickerPackPreview:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("closeStickerPackPreview"),onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClose"),installStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("installStickerPack"),uninstallStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("uninstallStickerPack"),downloadStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("downloadStickerPack"),i18n,pack})}function JustFourStickers(){var title=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Foo"),author=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("author","Foo McBarrington"),pack={id:"foo",key:"foo",lastUsed:Date.now(),cover:abeSticker,title,isBlessed:!0,author,status:"downloaded",stickerCount:101,stickers:[abeSticker,abeSticker,abeSticker,abeSticker]};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerPreviewModal__WEBPACK_IMPORTED_MODULE_3__.p,{closeStickerPackPreview:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("closeStickerPackPreview"),installStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("installStickerPack"),uninstallStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("uninstallStickerPack"),downloadStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("downloadStickerPack"),i18n,pack})}function InitialDownload(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerPreviewModal__WEBPACK_IMPORTED_MODULE_3__.p,{closeStickerPackPreview:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("closeStickerPackPreview"),installStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("installStickerPack"),uninstallStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("uninstallStickerPack"),downloadStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("downloadStickerPack"),i18n,pack:{}})}function PackDeleted(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StickerPreviewModal__WEBPACK_IMPORTED_MODULE_3__.p,{closeStickerPackPreview:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("closeStickerPackPreview"),installStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("installStickerPack"),uninstallStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("uninstallStickerPack"),downloadStickerPack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("downloadStickerPack"),i18n,pack:void 0})}Full.displayName="Full",JustFourStickers.displayName="JustFourStickers",JustFourStickers.story={name:"Just four stickers"},InitialDownload.displayName="InitialDownload",InitialDownload.story={name:"Initial download"},PackDeleted.displayName="PackDeleted",PackDeleted.story={name:"Pack deleted"};var __namedExportsOrder=["Full","JustFourStickers","InitialDownload","PackDeleted"]},"./ts/hooks/useRestoreFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useRestoreFocus,e:()=>useDelayedRestoreFocus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]},useDelayedRestoreFocus=function(){var toFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),lastFocusedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),setFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(toFocus){var timeout=setTimeout((function setFocus(){toFocus&&(toFocusRef.current||(toFocusRef.current=toFocus,lastFocusedRef.current=document.activeElement,toFocus.focus()))}),250);return function(){clearTimeout(timeout)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return function(){setTimeout((function(){lastFocusedRef.current&&lastFocusedRef.current.focus&&lastFocusedRef.current.focus()}))}}),[]),[setFocusRef]}},"./ts/storybook/Fixtures.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yl:()=>gifUrl,L$:()=>landscapeGreenUrl,UJ:()=>pngUrl,K$:()=>portraitTealUrl,e7:()=>squareStickerUrl});const giphy_GVNvOUpeYmI7e_namespaceObject=__webpack_require__.p+"static/media/giphy-GVNvOUpeYmI7e.5fb55e50.gif",freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject=__webpack_require__.p+"static/media/freepngs-2cd43b_bed7d1327e88454487397574d87b64dc_mv2.f13513c6.png",_1000x50_green_namespaceObject=__webpack_require__.p+"static/media/1000x50-green.221b1d06.jpeg",_50x1000_teal_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/50x1000-teal.e07215d6.jpeg"),_512x515_thumbs_up_lincoln_namespaceObject=__webpack_require__.p+"static/media/512x515-thumbs-up-lincoln.1e1e8fb6.webp";var gifUrl=`/${giphy_GVNvOUpeYmI7e_namespaceObject}`,pngUrl=`/${freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject}`,landscapeGreenUrl=`/${_1000x50_green_namespaceObject}`,portraitTealUrl=`/${_50x1000_teal_namespaceObject}`,squareStickerUrl=`/${_512x515_thumbs_up_lincoln_namespaceObject}`}}]);