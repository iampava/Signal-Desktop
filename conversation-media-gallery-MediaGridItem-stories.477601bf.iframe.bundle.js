/*! For license information please see conversation-media-gallery-MediaGridItem-stories.477601bf.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[3719,3905],{"./ts/components/conversation/media-gallery/MediaGridItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BrokenImage:()=>BrokenImage,BrokenVideo:()=>BrokenVideo,Image:()=>Image,MissingImage:()=>MissingImage,MissingVideo:()=>MissingVideo,OtherContentType:()=>OtherContentType,Video:()=>Video,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./_locales/en/messages.json"),_types_MIME__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/types/MIME.ts"),_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/conversation/media-gallery/MediaGridItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/MediaGallery/MediaGridItem"};var createProps=function(overrideProps){return{i18n,mediaItem:overrideProps.mediaItem,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onClick")}},createMediaItem=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{thumbnailObjectUrl:overrideProps.thumbnailObjectUrl||"",contentType:overrideProps.contentType||(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)(""),index:0,attachment:{},message:{attachments:[],conversationId:"1234",id:"id",received_at:Date.now(),received_at_ms:Date.now(),sent_at:Date.now()}}};function Image(){var mediaItem=createMediaItem({thumbnailObjectUrl:"/fixtures/kitten-1-64-64.jpg",contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("image/jpeg")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function Video(){var mediaItem=createMediaItem({thumbnailObjectUrl:"/fixtures/kitten-2-64-64.jpg",contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("video/mp4")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function MissingImage(){var mediaItem=createMediaItem({contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("image/jpeg")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function MissingVideo(){var mediaItem=createMediaItem({contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("video/mp4")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function BrokenImage(){var mediaItem=createMediaItem({thumbnailObjectUrl:"/missing-fixtures/nope.jpg",contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("image/jpeg")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function BrokenVideo(){var mediaItem=createMediaItem({thumbnailObjectUrl:"/missing-fixtures/nope.mp4",contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("video/mp4")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}function OtherContentType(){var mediaItem=createMediaItem({contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("application/text")}),props=createProps({mediaItem});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_5__.w,Object.assign({},props))}Image.displayName="Image",Video.displayName="Video",MissingImage.displayName="MissingImage",MissingVideo.displayName="MissingVideo",BrokenImage.displayName="BrokenImage",BrokenVideo.displayName="BrokenVideo",OtherContentType.displayName="OtherContentType",OtherContentType.story={name:"Other ContentType"};var __namedExportsOrder=["Image","Video","MissingImage","MissingVideo","BrokenImage","BrokenVideo","OtherContentType"]},"./ts/components/conversation/media-gallery/MediaGridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>MediaGridItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/GoogleChrome.ts"),_logging_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/logging/log.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MediaGridItemContent(props){var mediaItem=props.mediaItem,i18n=props.i18n,attachment=mediaItem.attachment,contentType=mediaItem.contentType,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),imageBroken=_useState2[0],setImageBroken=_useState2[1],handleImageError=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){_logging_log__WEBPACK_IMPORTED_MODULE_3__.info("MediaGridItem: Image failed to load; failing over to placeholder"),setImageBroken(!0)}),[]);return attachment?contentType&&(0,_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__.T)(contentType)?imageBroken||!mediaItem.thumbnailObjectUrl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-image")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:i18n("icu:lightboxImageAlt"),className:"module-media-grid-item__image",src:mediaItem.thumbnailObjectUrl,onError:handleImageError}):contentType&&(0,_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__.eq)(contentType)?imageBroken||!mediaItem.thumbnailObjectUrl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-video")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-media-grid-item__image-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:i18n("icu:lightboxImageAlt"),className:"module-media-grid-item__image",src:mediaItem.thumbnailObjectUrl,onError:handleImageError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-media-grid-item__circle-overlay",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-media-grid-item__play-overlay"})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-generic")}):null}function MediaGridItem(props){var onClick=props.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",className:"module-media-grid-item",onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MediaGridItemContent,Object.assign({},props))})}MediaGridItemContent.displayName="MediaGridItemContent",MediaGridItem.displayName="MediaGridItem"},"./ts/types/MIME.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Aw:()=>isLongMessage,F0:()=>isAudio,F5:()=>VIDEO_QUICKTIME,Ih:()=>IMAGE_PNG,Oh:()=>IMAGE_ICO,Or:()=>isImage,UG:()=>IMAGE_BMP,Wv:()=>isVideo,_l:()=>IMAGE_JPEG,cJ:()=>stringToMIMEType,dB:()=>IMAGE_GIF,ml:()=>VIDEO_MP4,np:()=>TEXT_ATTACHMENT,rJ:()=>LONG_MESSAGE,sY:()=>isGif,to:()=>IMAGE_WEBP,ty:()=>AUDIO_MP3});var stringToMIMEType=function(value){return value},AUDIO_MP3=(stringToMIMEType("application/octet-stream"),stringToMIMEType("application/json"),stringToMIMEType("audio/aac"),stringToMIMEType("audio/mp3")),IMAGE_GIF=stringToMIMEType("image/gif"),IMAGE_JPEG=stringToMIMEType("image/jpeg"),IMAGE_PNG=stringToMIMEType("image/png"),IMAGE_WEBP=stringToMIMEType("image/webp"),IMAGE_ICO=stringToMIMEType("image/x-icon"),IMAGE_BMP=stringToMIMEType("image/bmp"),VIDEO_MP4=stringToMIMEType("video/mp4"),VIDEO_QUICKTIME=stringToMIMEType("video/quicktime"),LONG_MESSAGE=stringToMIMEType("text/x-signal-plain"),TEXT_ATTACHMENT=stringToMIMEType("text/x-signal-story"),isGif=function(value){return"image/gif"===value},isImage=function(value){return Boolean(value)&&value.startsWith("image/")},isVideo=function(value){return Boolean(value)&&value.startsWith("video/")},isAudio=function(value){return Boolean(value)&&value.startsWith("audio/")&&!value.endsWith("aiff")},isLongMessage=function(value){return value===LONG_MESSAGE}},"./ts/util/GoogleChrome.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Do:()=>getSupportedImageTypes,E0:()=>getSupportedVideoTypes,T:()=>isImageTypeSupported,eq:()=>isVideoTypeSupported});var SUPPORTED_IMAGE_MIME_TYPES={"image/avif":!0,"image/bmp":!0,"image/gif":!0,"image/jpeg":!0,"image/svg+xml":!1,"image/webp":!0,"image/x-xbitmap":!0,"image/vnd.microsoft.icon":!0,"image/ico":!0,"image/icon":!0,"image/x-icon":!0,"image/apng":!0,"image/png":!0},isImageTypeSupported=function(mimeType){return!0===SUPPORTED_IMAGE_MIME_TYPES[mimeType]},SUPPORTED_VIDEO_MIME_TYPES={"video/mp4":!0,"video/ogg":!0,"video/webm":!0},isVideoTypeSupported=function(mimeType){return!0===SUPPORTED_VIDEO_MIME_TYPES[mimeType]},getSupportedImageTypes=function(){return Object.keys(SUPPORTED_IMAGE_MIME_TYPES).filter((function(contentType){return SUPPORTED_IMAGE_MIME_TYPES[contentType]}))},getSupportedVideoTypes=function(){return Object.keys(SUPPORTED_VIDEO_MIME_TYPES).filter((function(contentType){return SUPPORTED_VIDEO_MIME_TYPES[contentType]}))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);