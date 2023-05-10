/*! For license information please see conversation-MessageTimestamp-stories.665c5602.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7847,3905],{"./ts/components/Time.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Time});var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["children","dateOnly","timestamp"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Time(_ref){var dateTime,children=_ref.children,_ref$dateOnly=_ref.dateOnly,dateOnly=void 0!==_ref$dateOnly&&_ref$dateOnly,timestamp=_ref.timestamp,otherProps=_objectWithoutProperties(_ref,_excluded);dateOnly?dateTime=moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format("YYYY-MM-DD"):dateTime=("number"==typeof timestamp?new Date(timestamp):timestamp).toISOString();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("time",Object.assign({dateTime},otherProps,{children}))}Time.displayName="Time"},"./ts/components/conversation/MessageTimestamp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Knobs:()=>Knobs,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./_locales/en/messages.json"),_MessageTimestamp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/conversation/MessageTimestamp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Conversation/MessageTimestamp"};var now=Date.now,seconds=function(n){return 1e3*n},minutes=function(n){return 60*seconds(n)},hours=function(n){return 60*minutes(n)},days=function(n){return 24*hours(n)},times=function(){return[["500ms ago",now()-seconds(.5)],["30s ago",now()-seconds(30)],["1m ago",now()-minutes(1)],["30m ago",now()-minutes(30)],["45m ago",now()-minutes(45)],["1h ago",now()-hours(1)],["12:01am today",(d=new Date,d.setHours(0,1,0,0),d.getTime())],["24h ago",now()-hours(24)],["7d ago",now()-days(7)],["366d ago",now()-days(366)]];var d},createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,timestamp:overrideProps.timestamp||Date.now(),module:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("module",""),withImageNoCaption:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("withImageNoCaption",!1),withSticker:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("withSticker",!1),withTapToViewExpired:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("withTapToViewExpired",!1),direction:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",{none:"",incoming:"incoming",outgoing:"outgoing"},"")||void 0}},createTable=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table",{cellPadding:5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th",{children:"Description"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th",{children:"Timestamp"})]}),times().map((function(_ref){var _ref2=_slicedToArray(_ref,2),description=_ref2[0],timestamp=_ref2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td",{children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageTimestamp__WEBPACK_IMPORTED_MODULE_4__.i,Object.assign({},createProps(Object.assign({},overrideProps,{timestamp}))),timestamp)})]},timestamp)}))]})})};createTable.displayName="createTable";var Normal=function(){return createTable()};function Knobs(){var props=createProps({timestamp:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.date)("timestamp",new Date)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageTimestamp__WEBPACK_IMPORTED_MODULE_4__.i,Object.assign({},props))}Knobs.displayName="Knobs";var __namedExportsOrder=["Normal","Knobs"]},"./ts/components/conversation/MessageTimestamp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>MessageTimestamp});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),util_timestamp=__webpack_require__("./ts/util/timestamp.ts"),Time=__webpack_require__("./ts/components/Time.tsx"),events=__webpack_require__("./node_modules/events/events.js"),durations=__webpack_require__("./ts/util/durations/index.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ev=new events.EventEmitter;ev.setMaxListeners(1/0),setInterval((function(){return ev.emit("tick")}),durations.EB);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MessageTimestamp(_ref){var deletedForEveryone=_ref.deletedForEveryone,direction=_ref.direction,i18n=_ref.i18n,isRelativeTime=_ref.isRelativeTime,module=_ref.module,timestamp=_ref.timestamp,withImageNoCaption=_ref.withImageNoCaption,withSticker=_ref.withSticker,withTapToViewExpired=_ref.withTapToViewExpired,now=function useNowThatUpdatesEveryMinute(){var _useState2=_slicedToArray((0,react.useState)(Date.now()),2),now=_useState2[0],setNow=_useState2[1];return(0,react.useEffect)((function(){var updateNow=function(){return setNow(Date.now())};return updateNow(),ev.on("tick",updateNow),function(){ev.off("tick",updateNow)}}),[]),now}(),moduleName=module||"module-timestamp";return(0,jsx_runtime.jsx)(Time.q,{className:classnames_default()(moduleName,direction?`${moduleName}--${direction}`:null,withTapToViewExpired&&direction?`${moduleName}--${direction}-with-tap-to-view-expired`:null,withImageNoCaption?`${moduleName}--with-image-no-caption`:null,withSticker?`${moduleName}--with-sticker`:null,deletedForEveryone?`${moduleName}--deleted-for-everyone`:null),timestamp,children:(0,util_timestamp.mr)(i18n,timestamp,now,isRelativeTime)})}MessageTimestamp.displayName="MessageTimestamp"},"./ts/util/durations/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x4:()=>constants_DAY,kC:()=>DurationInSeconds,kr:()=>constants_HOUR,EB:()=>constants_MINUTE,vc:()=>MONTH,sh:()=>SECOND,ps:()=>constants_WEEK});var DurationInSeconds,_DurationInSeconds,SECOND=1e3,constants_MINUTE=60*SECOND,constants_HOUR=60*constants_MINUTE,constants_DAY=24*constants_HOUR,constants_WEEK=7*constants_DAY,MONTH=30*constants_DAY;(_DurationInSeconds=DurationInSeconds||(DurationInSeconds={})).fromMillis=function(ms){return ms/SECOND},_DurationInSeconds.fromSeconds=function(seconds){return seconds},_DurationInSeconds.fromMinutes=function(m){return m*constants_MINUTE/SECOND},_DurationInSeconds.fromHours=function(h){return h*constants_HOUR/SECOND},_DurationInSeconds.fromDays=function(d){return d*constants_DAY/SECOND},_DurationInSeconds.fromWeeks=function(d){return d*constants_WEEK/SECOND},_DurationInSeconds.fromMonths=function(d){return d*MONTH/SECOND},_DurationInSeconds.toSeconds=function(d){return d},_DurationInSeconds.toMillis=function(d){return d*SECOND},_DurationInSeconds.toHours=function(d){return d*SECOND/constants_HOUR},_DurationInSeconds.ZERO=DurationInSeconds.fromSeconds(0),_DurationInSeconds.HOUR=DurationInSeconds.fromHours(1),_DurationInSeconds.MINUTE=DurationInSeconds.fromMinutes(1),_DurationInSeconds.DAY=DurationInSeconds.fromDays(1),_DurationInSeconds.WEEK=DurationInSeconds.fromWeeks(1)},"./ts/util/timestamp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N_:()=>isMoreRecentThan,Uj:()=>formatDateTimeShort,Wl:()=>formatDateTimeForAttachment,gD:()=>formatDateTimeLong,mr:()=>formatTime,p6:()=>formatDate,zk:()=>isToday});var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),_durations__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/util/durations/index.ts");function isMoreRecentThan(timestamp,delta){return timestamp>Date.now()-delta}var isSameDay=function(a,b){return moment__WEBPACK_IMPORTED_MODULE_0___default()(a).isSame(b,"day")},isToday=function(rawTimestamp){return isSameDay(rawTimestamp,Date.now())},isYesterday=function(rawTimestamp){return isSameDay(rawTimestamp,moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1,"day"))};function formatDateTimeShort(i18n,rawTimestamp){var timestamp=rawTimestamp.valueOf(),now=Date.now(),diff=now-timestamp,locale=window.getPreferredSystemLocales();if(diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr||isToday(timestamp))return formatTime(i18n,rawTimestamp,now);var m=moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.ps&&m.isSame(now,"month")?new Intl.DateTimeFormat(locale,{weekday:"short"}).format(timestamp):m.isSame(now,"year")?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric"}).format(timestamp)}function formatDateTimeForAttachment(i18n,rawTimestamp){var timestamp=rawTimestamp.valueOf(),now=Date.now(),diff=now-timestamp,locale=window.getPreferredSystemLocales();if(diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr||isToday(timestamp))return formatTime(i18n,rawTimestamp,now);var m=moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.ps&&m.isSame(now,"month")?new Intl.DateTimeFormat(locale,{weekday:"short",hour:"numeric",minute:"numeric"}).format(timestamp):m.isSame(now,"year")?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",hour:"numeric",minute:"numeric"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric"}).format(timestamp)}function formatDateTimeLong(i18n,rawTimestamp){var locale=window.getPreferredSystemLocales(),timestamp=rawTimestamp.valueOf();return isToday(rawTimestamp)?i18n("icu:timestampFormat__long--today",{time:new Intl.DateTimeFormat(locale,{hour:"numeric",minute:"numeric"}).format(timestamp)}):isYesterday(rawTimestamp)?i18n("icu:timestampFormat__long--yesterday",{time:new Intl.DateTimeFormat(locale,{hour:"numeric",minute:"numeric"}).format(timestamp)}):new Intl.DateTimeFormat(locale,{day:"numeric",hour:"numeric",minute:"numeric",month:"short",year:"numeric"}).format(timestamp)}function formatTime(i18n,rawTimestamp,now,isRelativeTime){var timestamp=rawTimestamp.valueOf(),diff=now.valueOf()-timestamp;return diff<_durations__WEBPACK_IMPORTED_MODULE_1__.EB?i18n("icu:justNow"):diff<_durations__WEBPACK_IMPORTED_MODULE_1__.kr?i18n("icu:minutesAgo",{minutes:Math.floor(diff/_durations__WEBPACK_IMPORTED_MODULE_1__.EB)}):isRelativeTime?i18n("icu:hoursAgo",{hours:Math.floor(diff/_durations__WEBPACK_IMPORTED_MODULE_1__.kr)}):new Date(timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}function formatDate(i18n,rawTimestamp){if(isToday(rawTimestamp))return i18n("icu:today");if(isYesterday(rawTimestamp))return i18n("icu:yesterday");var locale=window.getPreferredSystemLocales(),m=moment__WEBPACK_IMPORTED_MODULE_0___default()(rawTimestamp),timestamp=rawTimestamp.valueOf();return Math.abs(m.diff(Date.now()))<6*_durations__WEBPACK_IMPORTED_MODULE_1__.vc?new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",weekday:"short"}).format(timestamp):new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric"}).format(timestamp)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/events/events.js":module=>{"use strict";var ReflectOwnKeys,R="object"==typeof Reflect?Reflect:null,ReflectApply=R&&"function"==typeof R.apply?R.apply:function ReflectApply(target,receiver,args){return Function.prototype.apply.call(target,receiver,args)};ReflectOwnKeys=R&&"function"==typeof R.ownKeys?R.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))}:function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target)};var NumberIsNaN=Number.isNaN||function NumberIsNaN(value){return value!=value};function EventEmitter(){EventEmitter.init.call(this)}module.exports=EventEmitter,module.exports.once=function once(emitter,name){return new Promise((function(resolve,reject){function errorListener(err){emitter.removeListener(name,resolver),reject(err)}function resolver(){"function"==typeof emitter.removeListener&&emitter.removeListener("error",errorListener),resolve([].slice.call(arguments))}eventTargetAgnosticAddListener(emitter,name,resolver,{once:!0}),"error"!==name&&function addErrorHandlerIfEventEmitter(emitter,handler,flags){"function"==typeof emitter.on&&eventTargetAgnosticAddListener(emitter,"error",handler,flags)}(emitter,errorListener,{once:!0})}))},EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10;function checkListener(listener){if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener)}function _getMaxListeners(that){return void 0===that._maxListeners?EventEmitter.defaultMaxListeners:that._maxListeners}function _addListener(target,type,listener,prepend){var m,events,existing;if(checkListener(listener),void 0===(events=target._events)?(events=target._events=Object.create(null),target._eventsCount=0):(void 0!==events.newListener&&(target.emit("newListener",type,listener.listener?listener.listener:listener),events=target._events),existing=events[type]),void 0===existing)existing=events[type]=listener,++target._eventsCount;else if("function"==typeof existing?existing=events[type]=prepend?[listener,existing]:[existing,listener]:prepend?existing.unshift(listener):existing.push(listener),(m=_getMaxListeners(target))>0&&existing.length>m&&!existing.warned){existing.warned=!0;var w=new Error("Possible EventEmitter memory leak detected. "+existing.length+" "+String(type)+" listeners added. Use emitter.setMaxListeners() to increase limit");w.name="MaxListenersExceededWarning",w.emitter=target,w.type=type,w.count=existing.length,function ProcessEmitWarning(warning){console&&console.warn&&console.warn(warning)}(w)}return target}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(target,type,listener){var state={fired:!1,wrapFn:void 0,target,type,listener},wrapped=onceWrapper.bind(state);return wrapped.listener=listener,state.wrapFn=wrapped,wrapped}function _listeners(target,type,unwrap){var events=target._events;if(void 0===events)return[];var evlistener=events[type];return void 0===evlistener?[]:"function"==typeof evlistener?unwrap?[evlistener.listener||evlistener]:[evlistener]:unwrap?function unwrapListeners(arr){for(var ret=new Array(arr.length),i=0;i<ret.length;++i)ret[i]=arr[i].listener||arr[i];return ret}(evlistener):arrayClone(evlistener,evlistener.length)}function listenerCount(type){var events=this._events;if(void 0!==events){var evlistener=events[type];if("function"==typeof evlistener)return 1;if(void 0!==evlistener)return evlistener.length}return 0}function arrayClone(arr,n){for(var copy=new Array(n),i=0;i<n;++i)copy[i]=arr[i];return copy}function eventTargetAgnosticAddListener(emitter,name,listener,flags){if("function"==typeof emitter.on)flags.once?emitter.once(name,listener):emitter.on(name,listener);else{if("function"!=typeof emitter.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof emitter);emitter.addEventListener(name,(function wrapListener(arg){flags.once&&emitter.removeEventListener(name,wrapListener),listener(arg)}))}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(arg){if("number"!=typeof arg||arg<0||NumberIsNaN(arg))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+arg+".");defaultMaxListeners=arg}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if("number"!=typeof n||n<0||NumberIsNaN(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(type){for(var args=[],i=1;i<arguments.length;i++)args.push(arguments[i]);var doError="error"===type,events=this._events;if(void 0!==events)doError=doError&&void 0===events.error;else if(!doError)return!1;if(doError){var er;if(args.length>0&&(er=args[0]),er instanceof Error)throw er;var err=new Error("Unhandled error."+(er?" ("+er.message+")":""));throw err.context=er,err}var handler=events[type];if(void 0===handler)return!1;if("function"==typeof handler)ReflectApply(handler,this,args);else{var len=handler.length,listeners=arrayClone(handler,len);for(i=0;i<len;++i)ReflectApply(listeners[i],this,args)}return!0},EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,!0)},EventEmitter.prototype.once=function once(type,listener){return checkListener(listener),this.on(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){return checkListener(listener),this.prependListener(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(checkListener(listener),void 0===(events=this._events))return this;if(void 0===(list=events[type]))return this;if(list===listener||list.listener===listener)0==--this._eventsCount?this._events=Object.create(null):(delete events[type],events.removeListener&&this.emit("removeListener",type,list.listener||listener));else if("function"!=typeof list){for(position=-1,i=list.length-1;i>=0;i--)if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener,position=i;break}if(position<0)return this;0===position?list.shift():function spliceOne(list,index){for(;index+1<list.length;index++)list[index]=list[index+1];list.pop()}(list,position),1===list.length&&(events[type]=list[0]),void 0!==events.removeListener&&this.emit("removeListener",type,originalListener||listener)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;if(void 0===(events=this._events))return this;if(void 0===events.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==events[type]&&(0==--this._eventsCount?this._events=Object.create(null):delete events[type]),this;if(0===arguments.length){var key,keys=Object.keys(events);for(i=0;i<keys.length;++i)"removeListener"!==(key=keys[i])&&this.removeAllListeners(key);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(listeners=events[type]))this.removeListener(type,listeners);else if(void 0!==listeners)for(i=listeners.length-1;i>=0;i--)this.removeListener(type,listeners[i]);return this},EventEmitter.prototype.listeners=function listeners(type){return _listeners(this,type,!0)},EventEmitter.prototype.rawListeners=function rawListeners(type){return _listeners(this,type,!1)},EventEmitter.listenerCount=function(emitter,type){return"function"==typeof emitter.listenerCount?emitter.listenerCount(type):listenerCount.call(emitter,type)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]}},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn-bd":"./node_modules/moment/locale/bn-bd.js","./bn-bd.js":"./node_modules/moment/locale/bn-bd.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-in":"./node_modules/moment/locale/en-in.js","./en-in.js":"./node_modules/moment/locale/en-in.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./en-sg":"./node_modules/moment/locale/en-sg.js","./en-sg.js":"./node_modules/moment/locale/en-sg.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-mx":"./node_modules/moment/locale/es-mx.js","./es-mx.js":"./node_modules/moment/locale/es-mx.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fil":"./node_modules/moment/locale/fil.js","./fil.js":"./node_modules/moment/locale/fil.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-deva":"./node_modules/moment/locale/gom-deva.js","./gom-deva.js":"./node_modules/moment/locale/gom-deva.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./oc-lnc":"./node_modules/moment/locale/oc-lnc.js","./oc-lnc.js":"./node_modules/moment/locale/oc-lnc.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tk":"./node_modules/moment/locale/tk.js","./tk.js":"./node_modules/moment/locale/tk.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-mo":"./node_modules/moment/locale/zh-mo.js","./zh-mo.js":"./node_modules/moment/locale/zh-mo.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);