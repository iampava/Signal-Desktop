(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[9853],{"./ts/components/conversation/media-gallery/AttachmentSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Documents:()=>Documents,Media:()=>Media,__namedExportsOrder:()=>__namedExportsOrder,createPreparedMediaItems:()=>createPreparedMediaItems,createRandomDocuments:()=>createRandomDocuments,createRandomMedia:()=>createRandomMedia,days:()=>days,default:()=>__WEBPACK_DEFAULT_EXPORT__,now:()=>now});var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/sortBy.js"),lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__),lodash_sample__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/sample.js"),lodash_sample__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_1__),lodash_range__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/range.js"),lodash_range__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__),lodash_random__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/random.js"),lodash_random__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_3__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./_locales/en/messages.json"),_AttachmentSection__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ts/components/conversation/media-gallery/AttachmentSection.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_7__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_8__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/MediaGallery/AttachmentSection"};var now=Date.now(),days=function(n){return 864e5*n},tokens=["foo","bar","baz","qux","quux"],contentTypes={gif:"image/gif",jpg:"image/jpeg",png:"image/png",mp4:"video/mp4",docx:"application/text",pdf:"application/pdf",txt:"application/text"},createRandomFiles=function(startTime,timeWindow,fileExtensions){return lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(5,10)).map((function(){return function(startTime,timeWindow,fileExtension){var contentType=contentTypes[fileExtension],fileName=`${lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(tokens)}${lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(tokens)}.${fileExtension}`;return{contentType,message:{conversationId:"123",id:lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(now).toString(),received_at:Math.floor(10*Math.random()),received_at_ms:lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(startTime,startTime+timeWindow),attachments:[],sent_at:Date.now()},attachment:{url:"",fileName,size:lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(1e3,5e7),contentType},index:0,thumbnailObjectUrl:`https://placekitten.com/${lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(50,150)}/${lodash_random__WEBPACK_IMPORTED_MODULE_3___default()(50,150)}`}}(startTime,timeWindow,lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(fileExtensions))}))},createRandomDocuments=function(startTime,timeWindow){return createRandomFiles(startTime,timeWindow,["docx","pdf","txt"])},createRandomMedia=function(startTime,timeWindow){return createRandomFiles(startTime,timeWindow,["mp4","jpg","png","gif"])},createPreparedMediaItems=function(fn){return lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default()([].concat(_toConsumableArray(fn(now,days(1))),_toConsumableArray(fn(now-days(1),days(1))),_toConsumableArray(fn(now-days(3),days(3))),_toConsumableArray(fn(now-days(30),days(15))),_toConsumableArray(fn(now-days(365),days(300)))),(function(item){return-item.message.received_at}))},createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,header:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("header","Today"),type:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.select)("type",{media:"media",documents:"documents"},overrideProps.type||"media"),mediaItems:overrideProps.mediaItems||[],onItemClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("onItemClick")}};function Documents(){var mediaItems=createRandomDocuments(now,days(1)),props=createProps({mediaItems,type:"documents"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AttachmentSection__WEBPACK_IMPORTED_MODULE_9__.v,Object.assign({},props))}function Media(){var mediaItems=createRandomMedia(now,days(1)),props=createProps({mediaItems,type:"media"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AttachmentSection__WEBPACK_IMPORTED_MODULE_9__.v,Object.assign({},props))}Documents.displayName="Documents",Media.displayName="Media";var __namedExportsOrder=["now","days","createRandomDocuments","createRandomMedia","createPreparedMediaItems","Documents","Media"]},"./ts/components/conversation/media-gallery/AttachmentSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>AttachmentSection});__webpack_require__("./node_modules/react/index.js");var _DocumentListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/media-gallery/DocumentListItem.tsx"),_MediaGridItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/media-gallery/MediaGridItem.tsx"),_util_getMessageTimestamp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/util/getMessageTimestamp.ts"),_util_missingCaseError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/missingCaseError.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AttachmentSection(_ref){var i18n=_ref.i18n,header=_ref.header,type=_ref.type,mediaItems=_ref.mediaItems,onItemClick=_ref.onItemClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"module-attachment-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{className:"module-attachment-section__header",children:header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"module-attachment-section__items",children:mediaItems.map((function(mediaItem,position,array){var shouldShowSeparator=position<array.length-1,message=mediaItem.message,index=mediaItem.index,attachment=mediaItem.attachment,onClick=function(){onItemClick({type,message,attachment})};switch(type){case"media":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MediaGridItem__WEBPACK_IMPORTED_MODULE_2__.w,{mediaItem,onClick,i18n},`${message.id}-${index}`);case"documents":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_DocumentListItem__WEBPACK_IMPORTED_MODULE_1__.L,{fileName:attachment.fileName,fileSize:attachment.size,shouldShowSeparator,onClick,timestamp:(0,_util_getMessageTimestamp__WEBPACK_IMPORTED_MODULE_4__.T)(message)},`${message.id}-${index}`);default:return(0,_util_missingCaseError__WEBPACK_IMPORTED_MODULE_5__.b)(type)}}))})]})}AttachmentSection.displayName="AttachmentSection"},"./ts/components/conversation/media-gallery/DocumentListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>DocumentListItem});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),filesize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/filesize/lib/filesize.js"),filesize__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function DocumentListItem(_ref){var _ref$shouldShowSepara=_ref.shouldShowSeparator,shouldShowSeparator=void 0===_ref$shouldShowSepara||_ref$shouldShowSepara,fileName=_ref.fileName,fileSize=_ref.fileSize,onClick=_ref.onClick,timestamp=_ref.timestamp;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-document-list-item",shouldShowSeparator?"module-document-list-item--with-separator":null),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{type:"button",className:"module-document-list-item__content",onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-document-list-item__icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-document-list-item__metadata",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"module-document-list-item__file-name",children:fileName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"module-document-list-item__file-size",children:"number"==typeof fileSize?filesize__WEBPACK_IMPORTED_MODULE_3___default()(fileSize,{round:0}):""})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-document-list-item__date",children:moment__WEBPACK_IMPORTED_MODULE_2___default()(timestamp).format("ddd, MMM D, Y")})]})})}DocumentListItem.displayName="DocumentListItem"},"./ts/components/conversation/media-gallery/MediaGridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>MediaGridItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/GoogleChrome.ts"),_logging_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/logging/log.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MediaGridItemContent(props){var mediaItem=props.mediaItem,i18n=props.i18n,attachment=mediaItem.attachment,contentType=mediaItem.contentType,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),imageBroken=_useState2[0],setImageBroken=_useState2[1],handleImageError=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){_logging_log__WEBPACK_IMPORTED_MODULE_3__.info("MediaGridItem: Image failed to load; failing over to placeholder"),setImageBroken(!0)}),[]);return attachment?contentType&&(0,_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__.T)(contentType)?imageBroken||!mediaItem.thumbnailObjectUrl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-image")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:i18n("icu:lightboxImageAlt"),className:"module-media-grid-item__image",src:mediaItem.thumbnailObjectUrl,onError:handleImageError}):contentType&&(0,_util_GoogleChrome__WEBPACK_IMPORTED_MODULE_2__.eq)(contentType)?imageBroken||!mediaItem.thumbnailObjectUrl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-video")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-media-grid-item__image-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:i18n("icu:lightboxImageAlt"),className:"module-media-grid-item__image",src:mediaItem.thumbnailObjectUrl,onError:handleImageError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-media-grid-item__circle-overlay",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-media-grid-item__play-overlay"})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-media-grid-item__icon","module-media-grid-item__icon-generic")}):null}function MediaGridItem(props){var onClick=props.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",className:"module-media-grid-item",onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MediaGridItemContent,Object.assign({},props))})}MediaGridItemContent.displayName="MediaGridItemContent",MediaGridItem.displayName="MediaGridItem"},"./ts/util/GoogleChrome.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Do:()=>getSupportedImageTypes,E0:()=>getSupportedVideoTypes,T:()=>isImageTypeSupported,eq:()=>isVideoTypeSupported});var SUPPORTED_IMAGE_MIME_TYPES={"image/avif":!0,"image/bmp":!0,"image/gif":!0,"image/jpeg":!0,"image/svg+xml":!1,"image/webp":!0,"image/x-xbitmap":!0,"image/vnd.microsoft.icon":!0,"image/ico":!0,"image/icon":!0,"image/x-icon":!0,"image/apng":!0,"image/png":!0},isImageTypeSupported=function(mimeType){return!0===SUPPORTED_IMAGE_MIME_TYPES[mimeType]},SUPPORTED_VIDEO_MIME_TYPES={"video/mp4":!0,"video/ogg":!0,"video/webm":!0},isVideoTypeSupported=function(mimeType){return!0===SUPPORTED_VIDEO_MIME_TYPES[mimeType]},getSupportedImageTypes=function(){return Object.keys(SUPPORTED_IMAGE_MIME_TYPES).filter((function(contentType){return SUPPORTED_IMAGE_MIME_TYPES[contentType]}))},getSupportedVideoTypes=function(){return Object.keys(SUPPORTED_VIDEO_MIME_TYPES).filter((function(contentType){return SUPPORTED_VIDEO_MIME_TYPES[contentType]}))}},"./ts/util/getMessageTimestamp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getMessageTimestamp(message){return message.received_at_ms||message.received_at}__webpack_require__.d(__webpack_exports__,{T:()=>getMessageTimestamp})},"./ts/util/missingCaseError.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>missingCaseError});var missingCaseError=function(x){return new TypeError(`Unhandled case: ${function reallyJsonStringify(value){var result;try{result=JSON.stringify(value)}catch(_err){result=void 0}return"string"==typeof result?result:Object.prototype.toString.call(value)}(x)}`)}},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn-bd":"./node_modules/moment/locale/bn-bd.js","./bn-bd.js":"./node_modules/moment/locale/bn-bd.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-in":"./node_modules/moment/locale/en-in.js","./en-in.js":"./node_modules/moment/locale/en-in.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./en-sg":"./node_modules/moment/locale/en-sg.js","./en-sg.js":"./node_modules/moment/locale/en-sg.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-mx":"./node_modules/moment/locale/es-mx.js","./es-mx.js":"./node_modules/moment/locale/es-mx.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fil":"./node_modules/moment/locale/fil.js","./fil.js":"./node_modules/moment/locale/fil.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-deva":"./node_modules/moment/locale/gom-deva.js","./gom-deva.js":"./node_modules/moment/locale/gom-deva.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./oc-lnc":"./node_modules/moment/locale/oc-lnc.js","./oc-lnc.js":"./node_modules/moment/locale/oc-lnc.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tk":"./node_modules/moment/locale/tk.js","./tk.js":"./node_modules/moment/locale/tk.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-mo":"./node_modules/moment/locale/zh-mo.js","./zh-mo.js":"./node_modules/moment/locale/zh-mo.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);