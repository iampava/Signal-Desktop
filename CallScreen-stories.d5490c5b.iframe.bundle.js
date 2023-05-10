(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[6146],{"./ts/components/CallScreen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,GroupCall0:()=>GroupCall0,GroupCall1:()=>GroupCall1,GroupCallMany:()=>GroupCallMany,GroupCallReconnecting:()=>GroupCallReconnecting,GroupCallSomeoneIsSharingScreen:()=>GroupCallSomeoneIsSharingScreen,GroupCallSomeoneIsSharingScreenAndYoureReconnecting:()=>GroupCallSomeoneIsSharingScreenAndYoureReconnecting,HasLocalAudio:()=>HasLocalAudio,HasLocalVideo:()=>HasLocalVideo,HasRemoteVideo:()=>HasRemoteVideo,PreRing:()=>PreRing,_Ended:()=>_Ended,_Reconnecting:()=>_Reconnecting,_Ringing:()=>_Ringing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash_times__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/times.js"),lodash_times__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_types_Calling__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/types/Calling.ts"),_types_Colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/types/Colors.ts"),_CallScreen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/CallScreen.tsx"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/setupI18n.ts"),_util_missingCaseError__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./ts/util/missingCaseError.ts"),_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/test-both/helpers/getDefaultConversation.ts"),_test_both_helpers_fakeGetGroupCallVideoFrameSource__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./ts/test-both/helpers/fakeGetGroupCallVideoFrameSource.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./_locales/en/messages.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_7__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_9__),conversation=(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({id:"3051234567",avatarPath:void 0,color:_types_Colors__WEBPACK_IMPORTED_MODULE_5__.sj[0],title:"Rick Sanchez",name:"Rick Sanchez",phoneNumber:"3051234567",profileName:"Rick Sanchez"}),createActiveCallProp=function(overrideProps){var baseResult={joinedAt:Date.now(),conversation,hasLocalAudio:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("hasLocalAudio",overrideProps.hasLocalAudio||!1),hasLocalVideo:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("hasLocalVideo",overrideProps.hasLocalVideo||!1),localAudioLevel:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("localAudioLevel",[0,.5,1],overrideProps.localAudioLevel||0),viewMode:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("viewMode",[_types_Calling__WEBPACK_IMPORTED_MODULE_4__.pC.Grid,_types_Calling__WEBPACK_IMPORTED_MODULE_4__.pC.Speaker,_types_Calling__WEBPACK_IMPORTED_MODULE_4__.pC.Presentation],overrideProps.viewMode||_types_Calling__WEBPACK_IMPORTED_MODULE_4__.pC.Grid),outgoingRing:!0,pip:!1,settingsDialogOpen:!1,showParticipantsList:!1};switch(overrideProps.callMode){case _types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct:return Object.assign({},baseResult,function(overrideProps){return{callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,conversation,callState:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("callState",_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX,overrideProps.callState||_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX.Accepted),peekedParticipants:[],remoteParticipants:[{hasRemoteVideo:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("hasRemoteVideo",Boolean(overrideProps.hasRemoteVideo)),presenting:!1,title:"test"}]}}(overrideProps));case _types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group:return Object.assign({},baseResult,function(overrideProps){var _overrideProps$remote;return{callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,connectionState:overrideProps.connectionState||_types_Calling__WEBPACK_IMPORTED_MODULE_4__.mB.Connected,conversationsWithSafetyNumberChanges:[],joinState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.GT.Joined,maxDevices:5,deviceCount:(overrideProps.remoteParticipants||[]).length,groupMembers:overrideProps.remoteParticipants||[],isConversationTooBigToRing:!1,peekedParticipants:overrideProps.peekedParticipants||overrideProps.remoteParticipants||[],remoteParticipants:overrideProps.remoteParticipants||[],remoteAudioLevels:new Map(null===(_overrideProps$remote=overrideProps.remoteParticipants)||void 0===_overrideProps$remote?void 0:_overrideProps$remote.map((function(_participant,index){return[index,(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("remoteAudioLevel",0,{range:!0,min:0,max:1,step:.01})]})))}}(overrideProps));default:throw(0,_util_missingCaseError__WEBPACK_IMPORTED_MODULE_11__.b)(overrideProps)}},createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct};return{activeCall:createActiveCallProp(overrideProps),getGroupCallVideoFrameSource:_test_both_helpers_fakeGetGroupCallVideoFrameSource__WEBPACK_IMPORTED_MODULE_12__.x,getPresentingSources:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("get-presenting-sources"),hangUpActiveCall:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("hang-up"),i18n,me:(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({color:_types_Colors__WEBPACK_IMPORTED_MODULE_5__.sj[1],id:"6146087e-f7ef-457e-9a8d-47df1fdd6b25",name:"Morty Smith",profileName:"Morty Smith",title:"Morty Smith",uuid:"3c134598-eecb-42ab-9ad3-2b0873f771b2"}),openSystemPreferencesAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("open-system-preferences-action"),setGroupCallVideoRequest:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("set-group-call-video-request"),setLocalAudio:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("set-local-audio"),setLocalPreview:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("set-local-preview"),setLocalVideo:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("set-local-video"),setPresenting:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-presenting"),setRendererCanvas:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("set-renderer-canvas"),stickyControls:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("stickyControls",!1),switchToPresentationView:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("switch-to-presentation-view"),switchFromPresentationView:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("switch-from-presentation-view"),toggleParticipants:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-participants"),togglePip:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-pip"),toggleScreenRecordingPermissionsDialog:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-screen-recording-permissions-dialog"),toggleSettings:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-settings"),toggleSpeakerView:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("toggle-speaker-view")}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CallScreen"};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps()))}function PreRing(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,callState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX.Prering})))}Default.displayName="Default",PreRing.displayName="PreRing",PreRing.story={name:"Pre-Ring"};var _Ringing=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,callState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX.Ringing})))};_Ringing.displayName="_Ringing";var _Reconnecting=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,callState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX.Reconnecting})))};_Reconnecting.displayName="_Reconnecting";var _Ended=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,callState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.OX.Ended})))};function HasLocalAudio(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,hasLocalAudio:!0})))}function HasLocalVideo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,hasLocalVideo:!0})))}function HasRemoteVideo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Direct,hasRemoteVideo:!0})))}function GroupCall1(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,remoteParticipants:[Object.assign({demuxId:0,hasRemoteAudio:!0,hasRemoteVideo:!0,presenting:!1,sharingScreen:!1,videoAspectRatio:1.3},(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({isBlocked:!1,uuid:"72fa60e5-25fb-472d-8a56-e56867c57dda",title:"Tyler"}))]})))}_Ended.displayName="_Ended",HasLocalAudio.displayName="HasLocalAudio",HasLocalAudio.story={name:"hasLocalAudio"},HasLocalVideo.displayName="HasLocalVideo",HasLocalVideo.story={name:"hasLocalVideo"},HasRemoteVideo.displayName="HasRemoteVideo",HasRemoteVideo.story={name:"hasRemoteVideo"},GroupCall1.displayName="GroupCall1",GroupCall1.story={name:"Group call - 1"};var allRemoteParticipants=lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(64).map((function(index){return Object.assign({demuxId:index,hasRemoteAudio:index%3!=0,hasRemoteVideo:index%4!=0,presenting:!1,sharingScreen:!1,videoAspectRatio:1.3},(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.nS)({isBlocked:10===index||63===index,title:`Participant ${index+1}`}))}));function GroupCallMany(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,remoteParticipants:allRemoteParticipants.slice(0,(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Participant count",40,{range:!0,min:0,max:64,step:1}))})))}function GroupCallReconnecting(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,connectionState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.mB.Reconnecting,remoteParticipants:[Object.assign({demuxId:0,hasRemoteAudio:!0,hasRemoteVideo:!0,presenting:!1,sharingScreen:!1,videoAspectRatio:1.3},(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({isBlocked:!1,title:"Tyler",uuid:"33871c64-0c22-45ce-8aa4-0ec237ac4a31"}))]})))}function GroupCall0(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,remoteParticipants:[]})))}function GroupCallSomeoneIsSharingScreen(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,remoteParticipants:allRemoteParticipants.slice(0,5).map((function(participant,index){return Object.assign({},participant,{presenting:1===index,sharingScreen:1===index})}))})))}function GroupCallSomeoneIsSharingScreenAndYoureReconnecting(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CallScreen__WEBPACK_IMPORTED_MODULE_6__.N,Object.assign({},createProps({callMode:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.L6.Group,connectionState:_types_Calling__WEBPACK_IMPORTED_MODULE_4__.mB.Reconnecting,remoteParticipants:allRemoteParticipants.slice(0,5).map((function(participant,index){return Object.assign({},participant,{presenting:1===index,sharingScreen:1===index})}))})))}GroupCallMany.displayName="GroupCallMany",GroupCallMany.story={name:"Group call - Many"},GroupCallReconnecting.displayName="GroupCallReconnecting",GroupCallReconnecting.story={name:"Group call - reconnecting"},GroupCall0.displayName="GroupCall0",GroupCall0.story={name:"Group call - 0"},GroupCallSomeoneIsSharingScreen.displayName="GroupCallSomeoneIsSharingScreen",GroupCallSomeoneIsSharingScreen.story={name:"Group call - someone is sharing screen"},GroupCallSomeoneIsSharingScreenAndYoureReconnecting.displayName="GroupCallSomeoneIsSharingScreenAndYoureReconnecting",GroupCallSomeoneIsSharingScreenAndYoureReconnecting.story={name:"Group call - someone is sharing screen and you're reconnecting"};var __namedExportsOrder=["Default","PreRing","_Ringing","_Reconnecting","_Ended","HasLocalAudio","HasLocalVideo","HasRemoteVideo","GroupCall1","GroupCallMany","GroupCallReconnecting","GroupCall0","GroupCallSomeoneIsSharingScreen","GroupCallSomeoneIsSharingScreenAndYoureReconnecting"]},"./node_modules/lodash/_castFunction.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js");module.exports=function castFunction(value){return"function"==typeof value?value:identity}},"./node_modules/lodash/times.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTimes=__webpack_require__("./node_modules/lodash/_baseTimes.js"),castFunction=__webpack_require__("./node_modules/lodash/_castFunction.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMin=Math.min;module.exports=function times(n,iteratee){if((n=toInteger(n))<1||n>9007199254740991)return[];var index=4294967295,length=nativeMin(n,4294967295);iteratee=castFunction(iteratee),n-=4294967295;for(var result=baseTimes(length,iteratee);++index<n;)iteratee(index);return result}}}]);