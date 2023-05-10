(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[7399],{"./ts/components/conversation/conversation-details/AddGroupMembersModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EveryoneAlreadyAdded:()=>EveryoneAlreadyAdded,NoCandidateContacts:()=>NoCandidateContacts,Only3Contacts:()=>Only3Contacts,RequestFailsAfter1Second:()=>RequestFailsAfter1Second,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AddGroupMembersModal_stories});var times=__webpack_require__("./node_modules/lodash/times.js"),times_default=__webpack_require__.n(times),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),sleep=__webpack_require__("./ts/util/sleep.ts");function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function makeLookup(items,key){var _step,result={},_iterator=_createForOfIteratorHelper(items);try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;null!=item&&void 0!==item[key]&&(result[String(item[key])]=item)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result}var getOwn=__webpack_require__("./ts/util/getOwn.ts"),assert=__webpack_require__("./ts/util/assert.ts"),deconstructLookup=function(lookup,keys){var result=[];return keys.forEach((function(key){var value=(0,getOwn.G)(lookup,key);value?result.push(value):(0,assert.q8)(!1,`deconstructLookup: lookup failed for ${key}; dropping`)})),result},setupI18n=__webpack_require__("./ts/util/setupI18n.ts"),messages=__webpack_require__("./_locales/en/messages.json"),getDefaultConversation=__webpack_require__("./ts/test-both/helpers/getDefaultConversation.ts"),AddGroupMembersModal=__webpack_require__("./ts/components/conversation/conversation-details/AddGroupMembersModal.tsx"),ChooseGroupMembersModal=__webpack_require__("./ts/components/conversation/conversation-details/AddGroupMembersModal/ChooseGroupMembersModal.tsx"),ConfirmAdditionsModal=__webpack_require__("./ts/components/conversation/conversation-details/AddGroupMembersModal/ConfirmAdditionsModal.tsx"),util=__webpack_require__("./ts/components/conversation/conversation-details/util.ts"),Util=__webpack_require__("./ts/types/Util.ts"),fakeLookupConversationWithoutUuid=__webpack_require__("./ts/test-both/helpers/fakeLookupConversationWithoutUuid.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function AddGroupMembersModal_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return AddGroupMembersModal_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AddGroupMembersModal_stories_arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function AddGroupMembersModal_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var i18n=(0,setupI18n.E5)("en",messages);const AddGroupMembersModal_stories={title:"Components/Conversation/ConversationDetails/AddGroupMembersModal"};var allCandidateContacts=times_default()(50,(function(){return(0,getDefaultConversation.E$)()})),allCandidateContactsLookup=makeLookup(allCandidateContacts,"id"),lookupConversationWithoutUuid=(0,fakeLookupConversationWithoutUuid.y)((function(convo){allCandidateContacts.push(convo),allCandidateContactsLookup=makeLookup(allCandidateContacts,"id")})),createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},candidateContacts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.assign({clearRequestError:(0,esm.action)("clearRequestError"),conversationIdsAlreadyInGroup:new Set,groupTitle:"Tahoe Trip",i18n,onClose:(0,esm.action)("onClose"),makeRequest:async function(conversationIds){(0,esm.action)("onMakeRequest")(conversationIds)},maxGroupSize:1001,maxRecommendedGroupSize:151,requestState:util.y.Inactive,renderChooseGroupMembersModal:function(props){var selectedConversationIds=props.selectedConversationIds;return(0,jsx_runtime.jsx)(ChooseGroupMembersModal.d,Object.assign({},props,{candidateContacts,selectedContacts:deconstructLookup(allCandidateContactsLookup,selectedConversationIds),regionCode:"US",getPreferredBadge:function(){},theme:Util.f8.light,i18n,lookupConversationWithoutUuid,showUserNotFoundModal:(0,esm.action)("showUserNotFoundModal"),isUsernamesEnabled:!0}))},renderConfirmAdditionsModal:function(props){var selectedConversationIds=props.selectedConversationIds;return(0,jsx_runtime.jsx)(ConfirmAdditionsModal.x,Object.assign({},props,{i18n,selectedContacts:deconstructLookup(allCandidateContactsLookup,selectedConversationIds)}))}},overrideProps)};function Default(){return(0,jsx_runtime.jsx)(AddGroupMembersModal.T,Object.assign({},createProps()))}function Only3Contacts(){return(0,jsx_runtime.jsx)(AddGroupMembersModal.T,Object.assign({},createProps({},allCandidateContacts.slice(0,3))))}function NoCandidateContacts(){return(0,jsx_runtime.jsx)(AddGroupMembersModal.T,Object.assign({},createProps({},[])))}function EveryoneAlreadyAdded(){return(0,jsx_runtime.jsx)(AddGroupMembersModal.T,Object.assign({},createProps({conversationIdsAlreadyInGroup:new Set(allCandidateContacts.map((function(contact){return contact.id})))})))}function RequestFailsAfter1SecondWrapper(){var _useState2=_slicedToArray((0,react.useState)(util.y.Inactive),2),requestState=_useState2[0],setRequestState=_useState2[1];return(0,jsx_runtime.jsx)(AddGroupMembersModal.T,Object.assign({},createProps({clearRequestError:function(){setRequestState(util.y.Inactive)},makeRequest:async function(){setRequestState(util.y.Active),await(0,sleep._)(1e3),setRequestState(util.y.InactiveWithError)},requestState})))}function RequestFailsAfter1Second(){return(0,jsx_runtime.jsx)(RequestFailsAfter1SecondWrapper,{})}Default.displayName="Default",Only3Contacts.displayName="Only3Contacts",Only3Contacts.story={name:"Only 3 contacts"},NoCandidateContacts.displayName="NoCandidateContacts",NoCandidateContacts.story={name:"No candidate contacts"},EveryoneAlreadyAdded.displayName="EveryoneAlreadyAdded",EveryoneAlreadyAdded.story={name:"Everyone already added"},RequestFailsAfter1SecondWrapper.displayName="RequestFailsAfter1SecondWrapper",RequestFailsAfter1Second.displayName="RequestFailsAfter1Second",RequestFailsAfter1Second.story={name:"Request fails after 1 second"};var __namedExportsOrder=["Default","Only3Contacts","NoCandidateContacts","EveryoneAlreadyAdded","RequestFailsAfter1Second"]},"./node_modules/lodash/_arrayIncludes.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIndexOf=__webpack_require__("./node_modules/lodash/_baseIndexOf.js");module.exports=function arrayIncludes(array,value){return!!(null==array?0:array.length)&&baseIndexOf(array,value,0)>-1}},"./node_modules/lodash/_arrayIncludesWith.js":module=>{module.exports=function arrayIncludesWith(array,value,comparator){for(var index=-1,length=null==array?0:array.length;++index<length;)if(comparator(value,array[index]))return!0;return!1}},"./node_modules/lodash/_asciiSize.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiSize=__webpack_require__("./node_modules/lodash/_baseProperty.js")("length");module.exports=asciiSize},"./node_modules/lodash/_baseDifference.js":(module,__unused_webpack_exports,__webpack_require__)=>{var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("./node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js"),baseUnary=__webpack_require__("./node_modules/lodash/_baseUnary.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js");module.exports=function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=!0,length=array.length,result=[],valuesLength=values.length;if(!length)return result;iteratee&&(values=arrayMap(values,baseUnary(iteratee))),comparator?(includes=arrayIncludesWith,isCommon=!1):values.length>=200&&(includes=cacheHas,isCommon=!1,values=new SetCache(values));outer:for(;++index<length;){var value=array[index],computed=null==iteratee?value:iteratee(value);if(value=comparator||0!==value?value:0,isCommon&&computed==computed){for(var valuesIndex=valuesLength;valuesIndex--;)if(values[valuesIndex]===computed)continue outer;result.push(value)}else includes(values,computed,comparator)||result.push(value)}return result}},"./node_modules/lodash/_baseIndexOf.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/lodash/_strictIndexOf.js");module.exports=function baseIndexOf(array,value,fromIndex){return value==value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}},"./node_modules/lodash/_baseIsNaN.js":module=>{module.exports=function baseIsNaN(value){return value!=value}},"./node_modules/lodash/_baseRepeat.js":module=>{var nativeFloor=Math.floor;module.exports=function baseRepeat(string,n){var result="";if(!string||n<1||n>9007199254740991)return result;do{n%2&&(result+=string),(n=nativeFloor(n/2))&&(string+=string)}while(n);return result}},"./node_modules/lodash/_castFunction.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js");module.exports=function castFunction(value){return"function"==typeof value?value:identity}},"./node_modules/lodash/_createPadding.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRepeat=__webpack_require__("./node_modules/lodash/_baseRepeat.js"),baseToString=__webpack_require__("./node_modules/lodash/_baseToString.js"),castSlice=__webpack_require__("./node_modules/lodash/_castSlice.js"),hasUnicode=__webpack_require__("./node_modules/lodash/_hasUnicode.js"),stringSize=__webpack_require__("./node_modules/lodash/_stringSize.js"),stringToArray=__webpack_require__("./node_modules/lodash/_stringToArray.js"),nativeCeil=Math.ceil;module.exports=function createPadding(length,chars){var charsLength=(chars=void 0===chars?" ":baseToString(chars)).length;if(charsLength<2)return charsLength?baseRepeat(chars,length):chars;var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(""):result.slice(0,length)}},"./node_modules/lodash/_strictIndexOf.js":module=>{module.exports=function strictIndexOf(array,value,fromIndex){for(var index=fromIndex-1,length=array.length;++index<length;)if(array[index]===value)return index;return-1}},"./node_modules/lodash/_stringSize.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiSize=__webpack_require__("./node_modules/lodash/_asciiSize.js"),hasUnicode=__webpack_require__("./node_modules/lodash/_hasUnicode.js"),unicodeSize=__webpack_require__("./node_modules/lodash/_unicodeSize.js");module.exports=function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string)}},"./node_modules/lodash/_unicodeSize.js":module=>{var rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod="(?:"+rsCombo+"|"+rsFitz+")"+"?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");module.exports=function unicodeSize(string){for(var result=reUnicode.lastIndex=0;reUnicode.test(string);)++result;return result}},"./node_modules/lodash/escapeRegExp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);module.exports=function escapeRegExp(string){return(string=toString(string))&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,"\\$&"):string}},"./node_modules/lodash/isArrayLikeObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}},"./node_modules/lodash/isBoolean.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGetTag=__webpack_require__("./node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isBoolean(value){return!0===value||!1===value||isObjectLike(value)&&"[object Boolean]"==baseGetTag(value)}},"./node_modules/lodash/isUndefined.js":module=>{module.exports=function isUndefined(value){return void 0===value}},"./node_modules/lodash/padStart.js":(module,__unused_webpack_exports,__webpack_require__)=>{var createPadding=__webpack_require__("./node_modules/lodash/_createPadding.js"),stringSize=__webpack_require__("./node_modules/lodash/_stringSize.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),toString=__webpack_require__("./node_modules/lodash/toString.js");module.exports=function padStart(string,length,chars){string=toString(string);var strLength=(length=toInteger(length))?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string}},"./node_modules/lodash/times.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTimes=__webpack_require__("./node_modules/lodash/_baseTimes.js"),castFunction=__webpack_require__("./node_modules/lodash/_castFunction.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMin=Math.min;module.exports=function times(n,iteratee){if((n=toInteger(n))<1||n>9007199254740991)return[];var index=4294967295,length=nativeMin(n,4294967295);iteratee=castFunction(iteratee),n-=4294967295;for(var result=baseTimes(length,iteratee);++index<n;)iteratee(index);return result}},"./node_modules/lodash/without.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDifference=__webpack_require__("./node_modules/lodash/_baseDifference.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),isArrayLikeObject=__webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),without=baseRest((function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[]}));module.exports=without}}]);