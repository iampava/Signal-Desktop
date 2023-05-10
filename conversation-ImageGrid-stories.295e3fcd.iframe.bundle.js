/*! For license information please see conversation-ImageGrid-stories.295e3fcd.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[1766,3905],{"./ts/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,me:()=>SpinnerSvgSizes,sX:()=>SpinnerDirections});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SpinnerSvgSizes=["small","normal"],SpinnerDirections=["outgoing","incoming","on-background","on-primary-button","on-progress-dialog","on-avatar"];function Spinner(_ref){var ariaLabel=_ref.ariaLabel,direction=_ref.direction,moduleClassName=_ref.moduleClassName,role=_ref.role,size=_ref.size,svgSize=_ref.svgSize,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__.h)("module-spinner",moduleClassName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__container"),getClassName(`__container--${svgSize}`),getClassName(direction&&`__container--${direction}`),getClassName(direction&&`__container--${svgSize}-${direction}`)),role,"aria-label":ariaLabel,style:{height:size,width:size},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__circle"),getClassName(`__circle--${svgSize}`),getClassName(direction&&`__circle--${direction}`),getClassName(direction&&`__circle--${svgSize}-${direction}`))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(getClassName("__arc"),getClassName(`__arc--${svgSize}`),getClassName(direction&&`__arc--${direction}`),getClassName(direction&&`__arc--${svgSize}-${direction}`))})]})}Spinner.displayName="Spinner"},"./ts/components/conversation/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Image,v:()=>CurveType});var CurveType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_blurhash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-blurhash/es/index.js"),_Spinner__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/Spinner.tsx"),_types_Attachment__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/types/Attachment.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Image(_ref){var alt=_ref.alt,attachment=_ref.attachment,blurHash=_ref.blurHash,bottomOverlay=_ref.bottomOverlay,className=_ref.className,closeButton=_ref.closeButton,curveBottomLeft=_ref.curveBottomLeft,curveBottomRight=_ref.curveBottomRight,curveTopLeft=_ref.curveTopLeft,curveTopRight=_ref.curveTopRight,darkOverlay=_ref.darkOverlay,isDownloaded=_ref.isDownloaded,_ref$height=_ref.height,height=void 0===_ref$height?0:_ref$height,i18n=_ref.i18n,noBackground=_ref.noBackground,noBorder=_ref.noBorder,onClick=_ref.onClick,onClickClose=_ref.onClickClose,onError=_ref.onError,overlayText=_ref.overlayText,playIconOverlay=_ref.playIconOverlay,tabIndex=_ref.tabIndex,theme=_ref.theme,url=_ref.url,_ref$width=_ref.width,width=void 0===_ref$width?0:_ref$width,_ref$cropWidth=_ref.cropWidth,cropWidth=void 0===_ref$cropWidth?0:_ref$cropWidth,_ref$cropHeight=_ref.cropHeight,cropHeight=void 0===_ref$cropHeight?0:_ref$cropHeight,_ref2=attachment||{caption:null,pending:!0},caption=_ref2.caption,pending=_ref2.pending,imgNotDownloaded=!isDownloaded&&!(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_4__.TG)(attachment),resolvedBlurHash=blurHash||(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_4__.d0)(theme),curveStyles={borderTopLeftRadius:curveTopLeft||CurveType.None,borderTopRightRadius:curveTopRight||CurveType.None,borderBottomLeftRadius:curveBottomLeft||CurveType.None,borderBottomRightRadius:curveBottomRight||CurveType.None},canClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=onClick&&!pending}),[pending,onClick]),handleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){if(!canClick)return event.preventDefault(),void event.stopPropagation();onClick&&(event.preventDefault(),event.stopPropagation(),onClick(attachment))}),[attachment,canClick,onClick]),handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){if(!canClick)return event.preventDefault(),void event.stopPropagation();!onClick||"Enter"!==event.key&&"Space"!==event.key||(event.preventDefault(),event.stopPropagation(),onClick(attachment))}),[attachment,canClick,onClick]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-image",className,noBackground?null:"module-image--with-background",cropWidth||cropHeight?"module-image--cropped":null),style:Object.assign({width:width-cropWidth,height:height-cropHeight},curveStyles),children:[pending?blurHash?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"module-image__download-pending",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_blurhash__WEBPACK_IMPORTED_MODULE_2__.E,{hash:blurHash,width,height,style:{display:"block"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__download-pending--spinner-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__download-pending--spinner",title:i18n("icu:loading"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.$j,{moduleClassName:"module-image-spinner",svgSize:"small"})})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__loading-placeholder",style:{height:`${height}px`,width:`${width}px`,lineHeight:`${height}px`,textAlign:"center"},title:i18n("icu:loading"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.$j,{svgSize:"normal"})}):url?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{onError,className:"module-image__image",alt,height,width,src:url}):resolvedBlurHash?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_blurhash__WEBPACK_IMPORTED_MODULE_2__.E,{hash:resolvedBlurHash,width,height,style:{display:"block"}}):null,caption?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{className:"module-image__caption-icon",src:"images/caption-shadow.svg",alt:i18n("icu:imageCaptionIconAlt")}):null,bottomOverlay?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__bottom-overlay",style:{borderBottomLeftRadius:curveBottomLeft||CurveType.None,borderBottomRightRadius:curveBottomRight||CurveType.None}}):null,pending||imgNotDownloaded||!playIconOverlay?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__play-overlay__circle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__play-overlay__icon"})}),overlayText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"module-image__text-container",style:{lineHeight:`${height}px`},children:overlayText}):null,canClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"button",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-image__border-overlay",{"module-image__border-overlay--with-border":!noBorder,"module-image__border-overlay--with-click-handler":canClick,"module-image__border-overlay--dark":darkOverlay,"module-image--not-downloaded":imgNotDownloaded}),style:curveStyles,onClick:handleClick,onKeyDown:handleKeyDown,tabIndex,children:imgNotDownloaded?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{}):null}):null,closeButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),onClickClose&&onClickClose(attachment)},className:"module-image__close-button",title:i18n("icu:remove-attachment"),"aria-label":i18n("icu:remove-attachment")}):null]})}!function(CurveType){CurveType[CurveType.None=0]="None",CurveType[CurveType.Tiny=4]="Tiny",CurveType[CurveType.Small=10]="Small",CurveType[CurveType.Normal=18]="Normal"}(CurveType||(CurveType={})),Image.displayName="Image"},"./ts/components/conversation/ImageGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomOverlay:()=>BottomOverlay,ContentAboveAndBelow:()=>ContentAboveAndBelow,FiveImages:()=>FiveImages,FourImages:()=>FourImages,MixedContentTypes:()=>MixedContentTypes,OneImage:()=>OneImage,Sticker:()=>Sticker,ThreeImages:()=>ThreeImages,TwoImages:()=>TwoImages,_6Images:()=>_6Images,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_ImageGrid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/ImageGrid.tsx"),_types_MIME__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/types/MIME.ts"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./_locales/en/messages.json"),_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/storybook/Fixtures.ts"),_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/test-both/helpers/fakeAttachment.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_5__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_6__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/ImageGrid"};var createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{attachments:overrideProps.attachments||[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800})],bottomOverlay:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("bottomOverlay",overrideProps.bottomOverlay||!1),direction:overrideProps.direction||"incoming",i18n,isSticker:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("isSticker",overrideProps.isSticker||!1),onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onClick"),onError:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onError"),stickerSize:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("stickerSize",overrideProps.stickerSize||0),tabIndex:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("tabIndex",overrideProps.tabIndex||0),withContentAbove:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("withContentAbove",overrideProps.withContentAbove||!1),withContentBelow:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("withContentBelow",overrideProps.withContentBelow||!1)}};function OneImage(){var props=createProps();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function TwoImages(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function ThreeImages(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function FourImages(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function FiveImages(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}OneImage.displayName="OneImage",TwoImages.displayName="TwoImages",ThreeImages.displayName="ThreeImages",FourImages.displayName="FourImages",FiveImages.displayName="FiveImages";var _6Images=function(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,fileName:"tina-rolf-269345-unsplash.jpg",height:1680,url:"/fixtures/tina-rolf-269345-unsplash.jpg",width:3e3}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))};function MixedContentTypes(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.ml,fileName:"pixabay-Soap-Bubble-7141.mp4",height:112,screenshot:{height:112,width:112,url:"/fixtures/kitten-4-112-112.jpg",contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__._l,path:"originalpath"},url:"/fixtures/pixabay-Soap-Bubble-7141.mp4",width:112}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.Ih,fileName:"sax.png",height:1200,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.UJ,width:800}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_4__.cJ)("text/plain"),fileName:"lorem-ipsum.txt",url:"/fixtures/lorem-ipsum.txt"}),(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.ty,fileName:"incompetech-com-Agnus-Dei-X.mp3",url:"/fixtures/incompetech-com-Agnus-Dei-X.mp3"})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function Sticker(){var props=createProps({attachments:[(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_4__.to,fileName:"sticker.webp",height:512,url:_storybook_Fixtures__WEBPACK_IMPORTED_MODULE_7__.e7,width:512})],isSticker:!0,stickerSize:128});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function ContentAboveAndBelow(){var props=createProps({withContentAbove:!0,withContentBelow:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}function BottomOverlay(){var props=createProps({bottomOverlay:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImageGrid__WEBPACK_IMPORTED_MODULE_3__.E,Object.assign({},props))}_6Images.displayName="_6Images",_6Images.story={name:"6+ Images"},MixedContentTypes.displayName="MixedContentTypes",Sticker.displayName="Sticker",ContentAboveAndBelow.displayName="ContentAboveAndBelow",ContentAboveAndBelow.story={name:"Content Above and Below"},BottomOverlay.displayName="BottomOverlay";var __namedExportsOrder=["OneImage","TwoImages","ThreeImages","FourImages","FiveImages","_6Images","MixedContentTypes","Sticker","ContentAboveAndBelow","BottomOverlay"]},"./ts/components/conversation/ImageGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>ImageGrid});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_types_Attachment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/types/Attachment.ts"),_Image__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/Image.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ImageGrid(_ref2){var attachments=_ref2.attachments,bottomOverlay=_ref2.bottomOverlay,direction=_ref2.direction,i18n=_ref2.i18n,isSticker=_ref2.isSticker,stickerSize=_ref2.stickerSize,onError=_ref2.onError,onClick=_ref2.onClick,shouldCollapseAbove=_ref2.shouldCollapseAbove,shouldCollapseBelow=_ref2.shouldCollapseBelow,tabIndex=_ref2.tabIndex,theme=_ref2.theme,withContentAbove=_ref2.withContentAbove,withContentBelow=_ref2.withContentBelow,_getCurves=function getCurves(_ref){var direction=_ref.direction,shouldCollapseAbove=_ref.shouldCollapseAbove,shouldCollapseBelow=_ref.shouldCollapseBelow,withContentAbove=_ref.withContentAbove,withContentBelow=_ref.withContentBelow,curveTopLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None,curveTopRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None,curveBottomLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None,curveBottomRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None;return shouldCollapseAbove&&"incoming"===direction?(curveTopLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Tiny,curveTopRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal):shouldCollapseAbove&&"outgoing"===direction?(curveTopLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal,curveTopRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Tiny):withContentAbove||(curveTopLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal,curveTopRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal),shouldCollapseBelow&&"incoming"===direction?(curveBottomLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Tiny,curveBottomRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None):shouldCollapseBelow&&"outgoing"===direction?(curveBottomLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.None,curveBottomRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Tiny):withContentBelow||(curveBottomLeft=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal,curveBottomRight=_Image__WEBPACK_IMPORTED_MODULE_3__.v.Normal),{curveTopLeft,curveTopRight,curveBottomLeft,curveBottomRight}}({direction,shouldCollapseAbove,shouldCollapseBelow,withContentAbove,withContentBelow}),curveTopLeft=_getCurves.curveTopLeft,curveTopRight=_getCurves.curveTopRight,curveBottomLeft=_getCurves.curveBottomLeft,curveBottomRight=_getCurves.curveBottomRight,withBottomOverlay=Boolean(bottomOverlay&&!withContentBelow);if(!attachments||!attachments.length)return null;if(1===attachments.length||!(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.pU)(attachments)){var _getImageDimensions=(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.pz)(attachments[0],isSticker?stickerSize:void 0),height=_getImageDimensions.height,width=_getImageDimensions.width;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-image-grid","module-image-grid--one-image",isSticker?"module-image-grid--with-sticker":null),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[0],i18n),i18n,theme,blurHash:attachments[0].blurHash,bottomOverlay:withBottomOverlay,noBorder:isSticker,noBackground:isSticker,curveTopLeft,curveTopRight,curveBottomLeft,curveBottomRight,attachment:attachments[0],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[0]),height,width,url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.Gr)(attachments[0]),tabIndex,onClick,onError})})}if(2===attachments.length)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[0],i18n),i18n,theme,attachment:attachments[0],blurHash:attachments[0].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveTopLeft,curveBottomLeft,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[0]),height:150,width:150,cropWidth:1,url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[0]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[1],i18n),i18n,theme,blurHash:attachments[1].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveTopRight,curveBottomRight,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[1]),height:150,width:150,attachment:attachments[1],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[1]),onClick,onError})]});if(3===attachments.length)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[0],i18n),i18n,theme,blurHash:attachments[0].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveTopLeft,curveBottomLeft,attachment:attachments[0],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[0]),height:200,width:200,cropWidth:1,url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.Gr)(attachments[0]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[1],i18n),i18n,theme,blurHash:attachments[1].blurHash,curveTopRight,height:100,width:100,cropHeight:1,attachment:attachments[1],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[1]),url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[1]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[2],i18n),i18n,theme,blurHash:attachments[2].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveBottomRight,height:100,width:100,attachment:attachments[2],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[2]),url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[2]),onClick,onError})]})]});if(4===attachments.length)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-image-grid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[0],i18n),i18n,theme,blurHash:attachments[0].blurHash,curveTopLeft,noBorder:!1,attachment:attachments[0],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[0]),height:150,width:150,cropHeight:1,cropWidth:1,url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[0]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[1],i18n),i18n,theme,blurHash:attachments[1].blurHash,curveTopRight,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[1]),noBorder:!1,height:150,width:150,cropHeight:1,attachment:attachments[1],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[1]),onClick,onError})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[2],i18n),i18n,theme,blurHash:attachments[2].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveBottomLeft,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[2]),height:150,width:150,cropWidth:1,attachment:attachments[2],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[2]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[3],i18n),i18n,theme,blurHash:attachments[3].blurHash,bottomOverlay:withBottomOverlay,noBorder:!1,curveBottomRight,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[3]),height:150,width:150,attachment:attachments[3],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[3]),onClick,onError})]})]})});var moreMessagesOverlay=attachments.length>5,moreMessagesOverlayText=moreMessagesOverlay?"+"+(attachments.length-5):void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"module-image-grid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[0],i18n),i18n,theme,blurHash:attachments[0].blurHash,curveTopLeft,attachment:attachments[0],playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[0]),height:150,width:150,cropWidth:1,url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[0]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[1],i18n),i18n,theme,blurHash:attachments[1].blurHash,curveTopRight,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[1]),height:150,width:150,attachment:attachments[1],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[1]),onClick,onError})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"module-image-grid__row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[2],i18n),i18n,theme,blurHash:attachments[2].blurHash,bottomOverlay:withBottomOverlay,noBorder:isSticker,curveBottomLeft,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[2]),height:100,width:100,cropWidth:1,attachment:attachments[2],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[2]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[3],i18n),i18n,theme,blurHash:attachments[3].blurHash,bottomOverlay:withBottomOverlay,noBorder:isSticker,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[3]),height:100,width:100,cropWidth:1,attachment:attachments[3],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[3]),onClick,onError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.E,{alt:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.EQ)(attachments[4],i18n),i18n,theme,blurHash:attachments[4].blurHash,bottomOverlay:withBottomOverlay,noBorder:isSticker,curveBottomRight,playIconOverlay:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.fr)(attachments[4]),height:100,width:100,darkOverlay:moreMessagesOverlay,overlayText:moreMessagesOverlayText,attachment:attachments[4],url:(0,_types_Attachment__WEBPACK_IMPORTED_MODULE_2__.gu)(attachments[4]),onClick,onError})]})]})})}ImageGrid.displayName="ImageGrid"},"./ts/storybook/Fixtures.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Yl:()=>gifUrl,L$:()=>landscapeGreenUrl,UJ:()=>pngUrl,K$:()=>portraitTealUrl,e7:()=>squareStickerUrl});const giphy_GVNvOUpeYmI7e_namespaceObject=__webpack_require__.p+"static/media/giphy-GVNvOUpeYmI7e.5fb55e50.gif",freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject=__webpack_require__.p+"static/media/freepngs-2cd43b_bed7d1327e88454487397574d87b64dc_mv2.f13513c6.png",_1000x50_green_namespaceObject=__webpack_require__.p+"static/media/1000x50-green.221b1d06.jpeg",_50x1000_teal_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/50x1000-teal.e07215d6.jpeg"),_512x515_thumbs_up_lincoln_namespaceObject=__webpack_require__.p+"static/media/512x515-thumbs-up-lincoln.1e1e8fb6.webp";var gifUrl=`/${giphy_GVNvOUpeYmI7e_namespaceObject}`,pngUrl=`/${freepngs_2cd43b_bed7d1327e88454487397574d87b64dc_mv2_namespaceObject}`,landscapeGreenUrl=`/${_1000x50_green_namespaceObject}`,portraitTealUrl=`/${_50x1000_teal_namespaceObject}`,squareStickerUrl=`/${_512x515_thumbs_up_lincoln_namespaceObject}`},"./ts/test-both/helpers/fakeAttachment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C4:()=>fakeDraftAttachment,Jh:()=>fakeThumbnail,dh:()=>fakeAttachment});var _types_MIME__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/types/MIME.ts"),fakeAttachment=function(){var overrides=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,width:800,height:600,size:10304},overrides)},fakeThumbnail=function(url){return{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,height:100,path:url,url,width:100}},fakeDraftAttachment=function(){var overrides=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({pending:!1,contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,path:"file.jpg",size:10304},overrides)}},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/isNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGetTag=__webpack_require__("./node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isNumber(value){return"number"==typeof value||isObjectLike(value)&&"[object Number]"==baseGetTag(value)}},"./node_modules/lodash/toFinite.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toNumber=__webpack_require__("./node_modules/lodash/toNumber.js");module.exports=function toFinite(value){return value?Infinity===(value=toNumber(value))||-Infinity===value?17976931348623157e292*(value<0?-1:1):value==value?value:0:0===value?value:0}},"./node_modules/lodash/toInteger.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=function toInteger(value){var result=toFinite(value),remainder=result%1;return result==result?remainder?result-remainder:result:0}}}]);