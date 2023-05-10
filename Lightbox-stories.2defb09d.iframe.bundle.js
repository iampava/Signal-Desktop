"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[1620],{"./ts/components/Lightbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConversationHeader:()=>ConversationHeader,CustomChildren:()=>CustomChildren,ImageWithCaptionAllWhiteImage:()=>ImageWithCaptionAllWhiteImage,ImageWithCaptionNormalImage:()=>ImageWithCaptionNormalImage,MissingMedia:()=>MissingMedia,Multimedia:()=>Multimedia,SingleImage:()=>SingleImage,SingleVideo:()=>SingleVideo,SingleVideoWCaption:()=>SingleVideoWCaption,UnsupportedContent:()=>UnsupportedContent,UnsupportedImageType:()=>UnsupportedImageType,UnsupportedVideoType:()=>UnsupportedVideoType,ViewOnceVideo:()=>ViewOnceVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./_locales/en/messages.json"),_Lightbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/Lightbox.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/util/setupI18n.ts"),_types_MIME__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/types/MIME.ts"),_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/test-both/helpers/fakeAttachment.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_6__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_4__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Lightbox"};function createMediaItem(overrideProps){return Object.assign({attachment:(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({caption:overrideProps.caption||"",contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,fileName:overrideProps.objectURL,url:overrideProps.objectURL}),contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,index:0,message:{attachments:[],conversationId:"1234",id:"image-msg",received_at:0,received_at_ms:Date.now(),sent_at:Date.now()},objectURL:""},overrideProps)}var createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("selectedIndex",overrideProps.selectedIndex||0)),_useState2=_slicedToArray(_useState,2),selectedIndex=_useState2[0],setSelectedIndex=_useState2[1],media=overrideProps.media||[];return{closeLightbox:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("closeLightbox"),i18n,isViewOnce:Boolean(overrideProps.isViewOnce),media,saveAttachment:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("saveAttachment"),selectedIndex,toggleForwardMessagesModal:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("toggleForwardMessagesModal"),onMediaPlaybackStart:lodash_noop__WEBPACK_IMPORTED_MODULE_0___default(),onPrevAttachment:function(){setSelectedIndex(Math.max(0,selectedIndex-1))},onNextAttachment:function(){setSelectedIndex(Math.min(media.length-1,selectedIndex+1))},onSelectAttachment:setSelectedIndex}};function Multimedia(){var props=createProps({media:[{attachment:(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,fileName:"tina-rolf-269345-unsplash.jpg",url:"/fixtures/tina-rolf-269345-unsplash.jpg",caption:"Still from The Lighthouse, starring Robert Pattinson and Willem Defoe."}),contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,index:0,message:{attachments:[],conversationId:"1234",id:"image-msg",received_at:1,received_at_ms:Date.now(),sent_at:Date.now()},objectURL:"/fixtures/tina-rolf-269345-unsplash.jpg"},{attachment:(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,fileName:"pixabay-Soap-Bubble-7141.mp4",url:"/fixtures/pixabay-Soap-Bubble-7141.mp4"}),contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,index:1,message:{attachments:[],conversationId:"1234",id:"video-msg",received_at:2,received_at_ms:Date.now(),sent_at:Date.now()},objectURL:"/fixtures/pixabay-Soap-Bubble-7141.mp4"},createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,index:2,thumbnailObjectUrl:"/fixtures/kitten-1-64-64.jpg",objectURL:"/fixtures/kitten-1-64-64.jpg"}),createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,index:3,thumbnailObjectUrl:"/fixtures/kitten-2-64-64.jpg",objectURL:"/fixtures/kitten-2-64-64.jpg"})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},props))}function MissingMedia(){var props=createProps({media:[{attachment:(0,_test_both_helpers_fakeAttachment__WEBPACK_IMPORTED_MODULE_8__.dh)({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,fileName:"tina-rolf-269345-unsplash.jpg",url:"/fixtures/tina-rolf-269345-unsplash.jpg"}),contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__._l,index:0,message:{attachments:[],conversationId:"1234",id:"image-msg",received_at:3,received_at_ms:Date.now(),sent_at:Date.now()},objectURL:void 0}]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},props))}function SingleImage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({objectURL:"/fixtures/tina-rolf-269345-unsplash.jpg"})]})))}function ImageWithCaptionNormalImage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({caption:"This lighthouse is really cool because there are lots of rocks and there is a tower that has a light and the light is really bright because it shines so much. The day was super duper cloudy and stormy and you can see all the waves hitting against the rocks. Wait? What is that weird red hose line thingy running all the way to the tower? Those rocks look slippery! I bet that water is really cold. I am cold now, can I get a sweater? I wonder where this place is, probably somewhere cold like Coldsgar, Frozenville.",objectURL:"/fixtures/tina-rolf-269345-unsplash.jpg"})]})))}function ImageWithCaptionAllWhiteImage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({caption:"This is the user-provided caption. It should be visible on light backgrounds.",objectURL:"/fixtures/2000x2000-white.png"})]})))}function SingleVideo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,objectURL:"/fixtures/pixabay-Soap-Bubble-7141.mp4"})]})))}function SingleVideoWCaption(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({caption:"This is the user-provided caption. It can get long and wrap onto multiple lines.",contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,objectURL:"/fixtures/pixabay-Soap-Bubble-7141.mp4"})]})))}function UnsupportedImageType(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({contentType:(0,_types_MIME__WEBPACK_IMPORTED_MODULE_7__.cJ)("image/tiff"),objectURL:"unsupported-image.tiff"})]})))}function UnsupportedVideoType(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.F5,objectURL:"unsupported-video.mov"})]})))}function UnsupportedContent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({media:[createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ty,objectURL:"/fixtures/incompetech-com-Agnus-Dei-X.mp3"})]})))}function CustomChildren(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({}),{media:[],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{color:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:"I am middle child"})}))}function ConversationHeader(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({}),{getConversation:function(){return{acceptedMessageRequest:!0,avatarPath:"/fixtures/kitten-1-64-64.jpg",badges:[],id:"1234",isMe:!1,name:"Test",profileName:"Test",sharedGroupNames:[],title:"Test",type:"direct"}},media:[createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,objectURL:"/fixtures/pixabay-Soap-Bubble-7141.mp4"})]}))}function ViewOnceVideo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_5__.e,Object.assign({},createProps({isViewOnce:!0,media:[createMediaItem({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_7__.ml,objectURL:"/fixtures/pixabay-Soap-Bubble-7141.mp4"})]}),{isViewOnce:!0}))}Multimedia.displayName="Multimedia",MissingMedia.displayName="MissingMedia",SingleImage.displayName="SingleImage",ImageWithCaptionNormalImage.displayName="ImageWithCaptionNormalImage",ImageWithCaptionNormalImage.story={name:"Image with Caption (normal image)"},ImageWithCaptionAllWhiteImage.displayName="ImageWithCaptionAllWhiteImage",ImageWithCaptionAllWhiteImage.story={name:"Image with Caption (all-white image)"},SingleVideo.displayName="SingleVideo",SingleVideoWCaption.displayName="SingleVideoWCaption",SingleVideoWCaption.story={name:"Single Video w/caption"},UnsupportedImageType.displayName="UnsupportedImageType",UnsupportedVideoType.displayName="UnsupportedVideoType",UnsupportedContent.displayName="UnsupportedContent",CustomChildren.displayName="CustomChildren",CustomChildren.story={name:"Custom children"},ConversationHeader.displayName="ConversationHeader",ViewOnceVideo.displayName="ViewOnceVideo";var __namedExportsOrder=["Multimedia","MissingMedia","SingleImage","ImageWithCaptionNormalImage","ImageWithCaptionAllWhiteImage","SingleVideo","SingleVideoWCaption","UnsupportedImageType","UnsupportedVideoType","UnsupportedContent","CustomChildren","ConversationHeader","ViewOnceVideo"]},"./ts/hooks/usePrevious.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(initialValue,currentValue){var previousValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue),result=previousValueRef.current;return previousValueRef.current=currentValue,result}},"./ts/test-both/helpers/fakeAttachment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C4:()=>fakeDraftAttachment,Jh:()=>fakeThumbnail,dh:()=>fakeAttachment});var _types_MIME__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/types/MIME.ts"),fakeAttachment=function(){var overrides=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,width:800,height:600,size:10304},overrides)},fakeThumbnail=function(url){return{contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,height:100,path:url,url,width:100}},fakeDraftAttachment=function(){var overrides=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({pending:!1,contentType:_types_MIME__WEBPACK_IMPORTED_MODULE_0__._l,path:"file.jpg",size:10304},overrides)}},"./ts/util/durations/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EB:()=>MINUTE,kr:()=>HOUR,ps:()=>WEEK,sh:()=>SECOND,vc:()=>MONTH,x4:()=>DAY});var SECOND=1e3,MINUTE=60*SECOND,HOUR=60*MINUTE,DAY=24*HOUR,WEEK=7*DAY,MONTH=30*DAY},"./ts/util/durations/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x4:()=>constants.x4,kC:()=>DurationInSeconds,kr:()=>constants.kr,EB:()=>constants.EB,vc:()=>constants.vc,sh:()=>constants.sh,ps:()=>constants.ps});var DurationInSeconds,_DurationInSeconds,constants=__webpack_require__("./ts/util/durations/constants.ts");(_DurationInSeconds=DurationInSeconds||(DurationInSeconds={})).fromMillis=function(ms){return ms/constants.sh},_DurationInSeconds.fromSeconds=function(seconds){return seconds},_DurationInSeconds.fromMinutes=function(m){return m*constants.EB/constants.sh},_DurationInSeconds.fromHours=function(h){return h*constants.kr/constants.sh},_DurationInSeconds.fromDays=function(d){return d*constants.x4/constants.sh},_DurationInSeconds.fromWeeks=function(d){return d*constants.ps/constants.sh},_DurationInSeconds.fromMonths=function(d){return d*constants.vc/constants.sh},_DurationInSeconds.toSeconds=function(d){return d},_DurationInSeconds.toMillis=function(d){return d*constants.sh},_DurationInSeconds.toHours=function(d){return d*constants.sh/constants.kr},_DurationInSeconds.ZERO=DurationInSeconds.fromSeconds(0),_DurationInSeconds.HOUR=DurationInSeconds.fromHours(1),_DurationInSeconds.MINUTE=DurationInSeconds.fromMinutes(1),_DurationInSeconds.DAY=DurationInSeconds.fromDays(1),_DurationInSeconds.WEEK=DurationInSeconds.fromWeeks(1)},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./ts/util/timestamp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N_:()=>isMoreRecentThan,Uj:()=>formatDateTimeShort,Wl:()=>formatDateTimeForAttachment,gD:()=>formatDateTimeLong,mr:()=>formatTime,p6:()=>formatDate,zk:()=>isToday});var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),_durations__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/util/durations/index.ts");function isMoreRecentThan(timestamp,delta){return timestamp>Date.now()-delta}var isSameDay=function(a,b){return moment__WEBPACK_IMPORTED_MODULE_0___default()(a).isSame(b,"day")},isToday=function(rawTimestamp){return isSameDay(rawTimestamp,Date.now())},isYesterday=function(rawTimestamp){return isSameDay(rawTimestamp,moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1,"day"))};function formatDateTimeShort(i18n,rawTimestamp){var timestamp=rawTimestamp.valueOf(),now=Date.now(),diff=now-timestamp,locale=window.getPreferredSystemLocales();if(diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr||isToday(timestamp))return formatTime(i18n,rawTimestamp,now);var m=moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.ps&&m.isSame(now,"month")?new Intl.DateTimeFormat(locale,{weekday:"short"}).format(timestamp):m.isSame(now,"year")?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric"}).format(timestamp)}function formatDateTimeForAttachment(i18n,rawTimestamp){var timestamp=rawTimestamp.valueOf(),now=Date.now(),diff=now-timestamp,locale=window.getPreferredSystemLocales();if(diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr||isToday(timestamp))return formatTime(i18n,rawTimestamp,now);var m=moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.ps&&m.isSame(now,"month")?new Intl.DateTimeFormat(locale,{weekday:"short",hour:"numeric",minute:"numeric"}).format(timestamp):m.isSame(now,"year")?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",hour:"numeric",minute:"numeric"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric"}).format(timestamp)}function formatDateTimeLong(i18n,rawTimestamp){var locale=window.getPreferredSystemLocales(),timestamp=rawTimestamp.valueOf();return isToday(rawTimestamp)?i18n("icu:timestampFormat__long--today",{time:new Intl.DateTimeFormat(locale,{hour:"numeric",minute:"numeric"}).format(timestamp)}):isYesterday(rawTimestamp)?i18n("icu:timestampFormat__long--yesterday",{time:new Intl.DateTimeFormat(locale,{hour:"numeric",minute:"numeric"}).format(timestamp)}):new Intl.DateTimeFormat(locale,{day:"numeric",hour:"numeric",minute:"numeric",month:"short",year:"numeric"}).format(timestamp)}function formatTime(i18n,rawTimestamp,now,isRelativeTime){var timestamp=rawTimestamp.valueOf(),diff=now.valueOf()-timestamp;return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.EB?i18n("icu:justNow"):diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr?i18n("icu:minutesAgo",{minutes:Math.floor(diff/_durations__WEBPACK_IMPORTED_MODULE_1__.EB)}):isRelativeTime?i18n("icu:hoursAgo",{hours:Math.floor(diff/_durations__WEBPACK_IMPORTED_MODULE_1__.kr)}):new Date(timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}function formatDate(i18n,rawTimestamp){if(isToday(rawTimestamp))return i18n("icu:today");if(isYesterday(rawTimestamp))return i18n("icu:yesterday");var locale=window.getPreferredSystemLocales(),m=moment__WEBPACK_IMPORTED_MODULE_0___default()(rawTimestamp),timestamp=rawTimestamp.valueOf();return Math.abs(m.diff(Date.now()))<6*_durations__WEBPACK_IMPORTED_MODULE_1__.vc?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",weekday:"short"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric"}).format(timestamp)}}}]);