"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[5860],{"./node_modules/eventemitter3/index.js":module=>{var has=Object.prototype.hasOwnProperty,prefix="~";function Events(){}function EE(fn,context,once){this.fn=fn,this.context=context,this.once=once||!1}function addListener(emitter,event,fn,context,once){if("function"!=typeof fn)throw new TypeError("The listener must be a function");var listener=new EE(fn,context||emitter,once),evt=prefix?prefix+event:event;return emitter._events[evt]?emitter._events[evt].fn?emitter._events[evt]=[emitter._events[evt],listener]:emitter._events[evt].push(listener):(emitter._events[evt]=listener,emitter._eventsCount++),emitter}function clearEvent(emitter,evt){0==--emitter._eventsCount?emitter._events=new Events:delete emitter._events[evt]}function EventEmitter(){this._events=new Events,this._eventsCount=0}Object.create&&(Events.prototype=Object.create(null),(new Events).__proto__||(prefix=!1)),EventEmitter.prototype.eventNames=function eventNames(){var events,name,names=[];if(0===this._eventsCount)return names;for(name in events=this._events)has.call(events,name)&&names.push(prefix?name.slice(1):name);return Object.getOwnPropertySymbols?names.concat(Object.getOwnPropertySymbols(events)):names},EventEmitter.prototype.listeners=function listeners(event){var evt=prefix?prefix+event:event,handlers=this._events[evt];if(!handlers)return[];if(handlers.fn)return[handlers.fn];for(var i=0,l=handlers.length,ee=new Array(l);i<l;i++)ee[i]=handlers[i].fn;return ee},EventEmitter.prototype.listenerCount=function listenerCount(event){var evt=prefix?prefix+event:event,listeners=this._events[evt];return listeners?listeners.fn?1:listeners.length:0},EventEmitter.prototype.emit=function emit(event,a1,a2,a3,a4,a5){var evt=prefix?prefix+event:event;if(!this._events[evt])return!1;var args,i,listeners=this._events[evt],len=arguments.length;if(listeners.fn){switch(listeners.once&&this.removeListener(event,listeners.fn,void 0,!0),len){case 1:return listeners.fn.call(listeners.context),!0;case 2:return listeners.fn.call(listeners.context,a1),!0;case 3:return listeners.fn.call(listeners.context,a1,a2),!0;case 4:return listeners.fn.call(listeners.context,a1,a2,a3),!0;case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),!0;case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),!0}for(i=1,args=new Array(len-1);i<len;i++)args[i-1]=arguments[i];listeners.fn.apply(listeners.context,args)}else{var j,length=listeners.length;for(i=0;i<length;i++)switch(listeners[i].once&&this.removeListener(event,listeners[i].fn,void 0,!0),len){case 1:listeners[i].fn.call(listeners[i].context);break;case 2:listeners[i].fn.call(listeners[i].context,a1);break;case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;case 4:listeners[i].fn.call(listeners[i].context,a1,a2,a3);break;default:if(!args)for(j=1,args=new Array(len-1);j<len;j++)args[j-1]=arguments[j];listeners[i].fn.apply(listeners[i].context,args)}}return!0},EventEmitter.prototype.on=function on(event,fn,context){return addListener(this,event,fn,context,!1)},EventEmitter.prototype.once=function once(event,fn,context){return addListener(this,event,fn,context,!0)},EventEmitter.prototype.removeListener=function removeListener(event,fn,context,once){var evt=prefix?prefix+event:event;if(!this._events[evt])return this;if(!fn)return clearEvent(this,evt),this;var listeners=this._events[evt];if(listeners.fn)listeners.fn!==fn||once&&!listeners.once||context&&listeners.context!==context||clearEvent(this,evt);else{for(var i=0,events=[],length=listeners.length;i<length;i++)(listeners[i].fn!==fn||once&&!listeners[i].once||context&&listeners[i].context!==context)&&events.push(listeners[i]);events.length?this._events[evt]=1===events.length?events[0]:events:clearEvent(this,evt)}return this},EventEmitter.prototype.removeAllListeners=function removeAllListeners(event){var evt;return event?(evt=prefix?prefix+event:event,this._events[evt]&&clearEvent(this,evt)):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prefixed=prefix,EventEmitter.EventEmitter=EventEmitter,module.exports=EventEmitter},"./node_modules/p-finally/index.js":module=>{module.exports=(promise,onFinally)=>(onFinally=onFinally||(()=>{}),promise.then((val=>new Promise((resolve=>{resolve(onFinally())})).then((()=>val))),(err=>new Promise((resolve=>{resolve(onFinally())})).then((()=>{throw err})))))},"./node_modules/p-queue/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{const EventEmitter=__webpack_require__("./node_modules/eventemitter3/index.js"),p_timeout_1=__webpack_require__("./node_modules/p-queue/node_modules/p-timeout/index.js"),priority_queue_1=__webpack_require__("./node_modules/p-queue/dist/priority-queue.js"),empty=()=>{},timeoutError=new p_timeout_1.TimeoutError;exports.Z=class PQueue extends EventEmitter{constructor(options){var _a,_b,_c,_d;if(super(),this._intervalCount=0,this._intervalEnd=0,this._pendingCount=0,this._resolveEmpty=empty,this._resolveIdle=empty,!("number"==typeof(options=Object.assign({carryoverConcurrencyCount:!1,intervalCap:1/0,interval:0,concurrency:1/0,autoStart:!0,queueClass:priority_queue_1.default},options)).intervalCap&&options.intervalCap>=1))throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null!==(_b=null===(_a=options.intervalCap)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:""}\` (${typeof options.intervalCap})`);if(void 0===options.interval||!(Number.isFinite(options.interval)&&options.interval>=0))throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null!==(_d=null===(_c=options.interval)||void 0===_c?void 0:_c.toString())&&void 0!==_d?_d:""}\` (${typeof options.interval})`);this._carryoverConcurrencyCount=options.carryoverConcurrencyCount,this._isIntervalIgnored=options.intervalCap===1/0||0===options.interval,this._intervalCap=options.intervalCap,this._interval=options.interval,this._queue=new options.queueClass,this._queueClass=options.queueClass,this.concurrency=options.concurrency,this._timeout=options.timeout,this._throwOnTimeout=!0===options.throwOnTimeout,this._isPaused=!1===options.autoStart}get _doesIntervalAllowAnother(){return this._isIntervalIgnored||this._intervalCount<this._intervalCap}get _doesConcurrentAllowAnother(){return this._pendingCount<this._concurrency}_next(){this._pendingCount--,this._tryToStartAnother(),this.emit("next")}_resolvePromises(){this._resolveEmpty(),this._resolveEmpty=empty,0===this._pendingCount&&(this._resolveIdle(),this._resolveIdle=empty,this.emit("idle"))}_onResumeInterval(){this._onInterval(),this._initializeIntervalIfNeeded(),this._timeoutId=void 0}_isIntervalPaused(){const now=Date.now();if(void 0===this._intervalId){const delay=this._intervalEnd-now;if(!(delay<0))return void 0===this._timeoutId&&(this._timeoutId=setTimeout((()=>{this._onResumeInterval()}),delay)),!0;this._intervalCount=this._carryoverConcurrencyCount?this._pendingCount:0}return!1}_tryToStartAnother(){if(0===this._queue.size)return this._intervalId&&clearInterval(this._intervalId),this._intervalId=void 0,this._resolvePromises(),!1;if(!this._isPaused){const canInitializeInterval=!this._isIntervalPaused();if(this._doesIntervalAllowAnother&&this._doesConcurrentAllowAnother){const job=this._queue.dequeue();return!!job&&(this.emit("active"),job(),canInitializeInterval&&this._initializeIntervalIfNeeded(),!0)}}return!1}_initializeIntervalIfNeeded(){this._isIntervalIgnored||void 0!==this._intervalId||(this._intervalId=setInterval((()=>{this._onInterval()}),this._interval),this._intervalEnd=Date.now()+this._interval)}_onInterval(){0===this._intervalCount&&0===this._pendingCount&&this._intervalId&&(clearInterval(this._intervalId),this._intervalId=void 0),this._intervalCount=this._carryoverConcurrencyCount?this._pendingCount:0,this._processQueue()}_processQueue(){for(;this._tryToStartAnother(););}get concurrency(){return this._concurrency}set concurrency(newConcurrency){if(!("number"==typeof newConcurrency&&newConcurrency>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);this._concurrency=newConcurrency,this._processQueue()}async add(fn,options={}){return new Promise(((resolve,reject)=>{this._queue.enqueue((async()=>{this._pendingCount++,this._intervalCount++;try{const operation=void 0===this._timeout&&void 0===options.timeout?fn():p_timeout_1.default(Promise.resolve(fn()),void 0===options.timeout?this._timeout:options.timeout,(()=>{(void 0===options.throwOnTimeout?this._throwOnTimeout:options.throwOnTimeout)&&reject(timeoutError)}));resolve(await operation)}catch(error){reject(error)}this._next()}),options),this._tryToStartAnother(),this.emit("add")}))}async addAll(functions,options){return Promise.all(functions.map((async function_=>this.add(function_,options))))}start(){return this._isPaused?(this._isPaused=!1,this._processQueue(),this):this}pause(){this._isPaused=!0}clear(){this._queue=new this._queueClass}async onEmpty(){if(0!==this._queue.size)return new Promise((resolve=>{const existingResolve=this._resolveEmpty;this._resolveEmpty=()=>{existingResolve(),resolve()}}))}async onIdle(){if(0!==this._pendingCount||0!==this._queue.size)return new Promise((resolve=>{const existingResolve=this._resolveIdle;this._resolveIdle=()=>{existingResolve(),resolve()}}))}get size(){return this._queue.size}sizeBy(options){return this._queue.filter(options).length}get pending(){return this._pendingCount}get isPaused(){return this._isPaused}get timeout(){return this._timeout}set timeout(milliseconds){this._timeout=milliseconds}}},"./node_modules/p-queue/dist/lower-bound.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function lowerBound(array,value,comparator){let first=0,count=array.length;for(;count>0;){const step=count/2|0;let it=first+step;comparator(array[it],value)<=0?(first=++it,count-=step+1):count=step}return first}},"./node_modules/p-queue/dist/priority-queue.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const lower_bound_1=__webpack_require__("./node_modules/p-queue/dist/lower-bound.js");exports.default=class PriorityQueue{constructor(){this._queue=[]}enqueue(run,options){const element={priority:(options=Object.assign({priority:0},options)).priority,run};if(this.size&&this._queue[this.size-1].priority>=options.priority)return void this._queue.push(element);const index=lower_bound_1.default(this._queue,element,((a,b)=>b.priority-a.priority));this._queue.splice(index,0,element)}dequeue(){const item=this._queue.shift();return null==item?void 0:item.run}filter(options){return this._queue.filter((element=>element.priority===options.priority)).map((element=>element.run))}get size(){return this._queue.length}}},"./node_modules/p-queue/node_modules/p-timeout/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const pFinally=__webpack_require__("./node_modules/p-finally/index.js");class TimeoutError extends Error{constructor(message){super(message),this.name="TimeoutError"}}const pTimeout=(promise,milliseconds,fallback)=>new Promise(((resolve,reject)=>{if("number"!=typeof milliseconds||milliseconds<0)throw new TypeError("Expected `milliseconds` to be a positive number");if(milliseconds===1/0)return void resolve(promise);const timer=setTimeout((()=>{if("function"==typeof fallback){try{resolve(fallback())}catch(error){reject(error)}return}const timeoutError=fallback instanceof Error?fallback:new TimeoutError("string"==typeof fallback?fallback:`Promise timed out after ${milliseconds} milliseconds`);"function"==typeof promise.cancel&&promise.cancel(),reject(timeoutError)}),milliseconds);pFinally(promise.then(resolve,reject),(()=>{clearTimeout(timer)}))}));module.exports=pTimeout,module.exports.default=pTimeout,module.exports.TimeoutError=TimeoutError}}]);