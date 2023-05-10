/*! For license information please see conversationList-MessageSearchResult-stories.3867e0fc.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[3893,3905],{"./ts/badges/BadgeCategory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>BadgeCategory});var BadgeCategory,_util_enum__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ts/util/enum.ts");!function(BadgeCategory){BadgeCategory.Donor="donor",BadgeCategory.Other="other"}(BadgeCategory||(BadgeCategory={}));(0,_util_enum__WEBPACK_IMPORTED_MODULE_0__.m)(BadgeCategory,BadgeCategory.Other)},"./ts/components/conversationList/MessageSearchResult.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DoubleMention:()=>DoubleMention,EmptyShouldBeInvalid:()=>EmptyShouldBeInvalid,FromSomeoneToGroup:()=>FromSomeoneToGroup,FromYou:()=>FromYou,FromYouToGroup:()=>FromYouToGroup,FromYouToYourself:()=>FromYouToYourself,LongSearchResult:()=>LongSearchResult,Mention:()=>Mention,MentionNoMatches:()=>MentionNoMatches,MentionRegexp:()=>MentionRegexp,SearchingInConversation:()=>SearchingInConversation,Selected:()=>Selected,SenderHasABadge:()=>SenderHasABadge,WithFormatting:()=>WithFormatting,_MentionNoMatches:()=>_MentionNoMatches,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/setupI18n.ts"),_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./_locales/en/messages.json"),_storybook_StorybookThemeContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/StorybookThemeContext.js"),_util_assert__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/assert.ts"),_test_both_helpers_getFakeBadge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/test-both/helpers/getFakeBadge.ts"),_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/components/conversationList/MessageSearchResult.tsx"),_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ts/test-both/helpers/getDefaultConversation.ts"),_types_BodyRange__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ts/types/BodyRange.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js"),i18n=(0,_util_setupI18n__WEBPACK_IMPORTED_MODULE_2__.E5)("en",_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_3__);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MessageSearchResult"};var someone=(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({title:"Some Person",name:"Some Person",phoneNumber:"(202) 555-0011"}),me=(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({title:"Me",name:"Me",isMe:!0}),group=(0,_test_both_helpers_getDefaultConversation__WEBPACK_IMPORTED_MODULE_8__.E$)({title:"Group Chat",name:"Group Chat",type:"group"}),useProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{i18n,id:"",conversationId:"",sentAt:Date.now()-144e4,snippet:overrideProps.snippet||"What's <<left>>going<<right>> on?",body:overrideProps.body||"What's going on?",bodyRanges:overrideProps.bodyRanges||[],from:overrideProps.from,to:overrideProps.to,getPreferredBadge:overrideProps.getPreferredBadge||function(){},isSelected:overrideProps.isSelected||!1,showConversation:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("showConversation"),isSearchingInConversation:overrideProps.isSearchingInConversation||!1,theme:react__WEBPACK_IMPORTED_MODULE_0__.useContext(_storybook_StorybookThemeContext__WEBPACK_IMPORTED_MODULE_4__.x)}};function Default(){var props=useProps({from:someone,to:me});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function SenderHasABadge(){var props=useProps({from:Object.assign({},someone,{badges:[{id:"sender badge"}]}),to:me,getPreferredBadge:function(badges){var _badges$;return(0,_util_assert__WEBPACK_IMPORTED_MODULE_5__.Yj)("sender badge"===(null===(_badges$=badges[0])||void 0===_badges$?void 0:_badges$.id),"Rendering the wrong badge!"),(0,_test_both_helpers_getFakeBadge__WEBPACK_IMPORTED_MODULE_6__.n)()}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function Selected(){var props=useProps({from:someone,to:me,isSelected:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function FromYou(){var props=useProps({from:me,to:someone});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function SearchingInConversation(){var props=useProps({from:me,to:someone,isSearchingInConversation:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function FromYouToYourself(){var props=useProps({from:me,to:me});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function FromYouToGroup(){var props=useProps({from:me,to:group});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function FromSomeoneToGroup(){var props=useProps({from:someone,to:group});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function LongSearchResult(){var snippets=["This is a really <<left>>detail<<right>>ed long line which will wrap and only be cut off after it gets to three lines. So maybe this will make it in as well?","Okay, here are the <<left>>detail<<right>>s:\n\n1355 Ridge Way\nCode: 234\n\nI'm excited!"],props1=useProps({from:someone,to:me,snippet:snippets[0]}),props2=useProps({from:someone,to:me,snippet:snippets[1]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props1)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props2))]})}function EmptyShouldBeInvalid(){var props=useProps();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function Mention(){var props=useProps({body:"moss banana twine sound lake zoo brain count vacuum work stairs try power forget hair dry diary years no results ￼ elephant sorry umbrella potato igloo kangaroo home Georgia bayonet vector orange forge diary zebra turtle rise front ￼",bodyRanges:[{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"Shoe",conversationID:"x",start:113},{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"Shoe",conversationID:"x",start:237}],from:someone,to:me,snippet:"<<truncation>>forget hair dry diary years no <<left>>results<<right>> ￼ <<left>>elephant<<right>> sorry umbrella potato igloo kangaroo home Georgia<<truncation>>"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function MentionRegexp(){var props=useProps({body:"￼ This is a (long) /text/ ^$ that is ... specially **crafted** to (test) our regexp escaping mechanism! Making sure that the code we write works in all sorts of scenarios",bodyRanges:[{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"RegExp",conversationID:"x",start:0}],from:someone,to:me,snippet:"￼ This is a (long) /text/ ^$ that is ... <<left>>specially<<right>> **crafted** to (test) our regexp escaping mechanism<<truncation>>"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function MentionNoMatches(){var props=useProps({body:"￼ hello",bodyRanges:[{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"Neo",conversationID:"x",start:0}],from:someone,to:me,snippet:"￼ hello"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}Default.displayName="Default",SenderHasABadge.displayName="SenderHasABadge",SenderHasABadge.story={name:"Sender has a badge"},Selected.displayName="Selected",FromYou.displayName="FromYou",SearchingInConversation.displayName="SearchingInConversation",SearchingInConversation.story={name:"Searching in Conversation"},FromYouToYourself.displayName="FromYouToYourself",FromYouToYourself.story={name:"From You to Yourself"},FromYouToGroup.displayName="FromYouToGroup",FromYouToGroup.story={name:"From You to Group"},FromSomeoneToGroup.displayName="FromSomeoneToGroup",FromSomeoneToGroup.story={name:"From Someone to Group"},EmptyShouldBeInvalid.displayName="EmptyShouldBeInvalid",EmptyShouldBeInvalid.story={name:"Empty (should be invalid)"},Mention.displayName="Mention",Mention.story={name:"@mention"},MentionRegexp.displayName="MentionRegexp",MentionRegexp.story={name:"@mention regexp"},MentionNoMatches.displayName="MentionNoMatches",MentionNoMatches.story={name:"@mention no-matches"};var _MentionNoMatches=function(){var props=useProps({body:"moss banana twine sound lake zoo brain count vacuum work stairs try power forget hair dry diary years no results ￼ elephant sorry umbrella potato igloo kangaroo home Georgia bayonet vector orange forge diary zebra turtle rise front ￼",bodyRanges:[{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"Shoe",conversationID:"x",start:113},{length:1,mentionUuid:"7d007e95-771d-43ad-9191-eaa86c773cb8",replacementText:"Shoe",conversationID:"x",start:237}],from:someone,to:me,snippet:"<<truncation>>forget hair dry diary years no results ￼ elephant sorry umbrella potato igloo kangaroo home Georgia<<truncation>>"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))};function DoubleMention(){var props=useProps({body:"Hey ￼ ￼ --- test! Two mentions!",bodyRanges:[{length:1,mentionUuid:"9eb2eb65-992a-4909-a2a5-18c56bd7648f",replacementText:"Alice",conversationID:"x",start:4},{length:1,mentionUuid:"755ec61b-1590-48da-b003-3e57b2b54448",replacementText:"Bob",conversationID:"x",start:6}],from:someone,to:me,snippet:"<<left>>Hey<<right>> ￼ ￼ --- test! <<truncation>>"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}function WithFormatting(){var props=useProps({body:"We're playing with formatting in fun ways like you do!",bodyRanges:[{start:0,length:19,style:_types_BodyRange__WEBPACK_IMPORTED_MODULE_9__.OY.Style.BOLD},{start:0,length:54,style:_types_BodyRange__WEBPACK_IMPORTED_MODULE_9__.OY.Style.ITALIC},{start:19,length:10,style:_types_BodyRange__WEBPACK_IMPORTED_MODULE_9__.OY.Style.MONOSPACE},{start:29,length:25,style:_types_BodyRange__WEBPACK_IMPORTED_MODULE_9__.OY.Style.STRIKETHROUGH}],from:someone,to:me,snippet:"<<truncation>>playing with formatting in <<left>>fun<<right>> ways<<truncation>>"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessageSearchResult__WEBPACK_IMPORTED_MODULE_7__.D,Object.assign({},props))}_MentionNoMatches.displayName="_MentionNoMatches",_MentionNoMatches.story={name:"@mention no-matches"},DoubleMention.displayName="DoubleMention",DoubleMention.story={name:"Double @mention"},WithFormatting.displayName="WithFormatting";var __namedExportsOrder=["Default","SenderHasABadge","Selected","FromYou","SearchingInConversation","FromYouToYourself","FromYouToGroup","FromSomeoneToGroup","LongSearchResult","EmptyShouldBeInvalid","Mention","MentionRegexp","MentionNoMatches","_MentionNoMatches","DoubleMention","WithFormatting"]},"./ts/components/conversationList/MessageSearchResult.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>MessageSearchResult});var lodash_noop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_conversation_ContactName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/ContactName.tsx"),_types_BodyRange__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/types/BodyRange.ts"),_BaseConversationListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ts/components/conversationList/BaseConversationListItem.tsx"),_Intl__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/components/Intl.tsx"),_conversation_MessageTextRenderer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/components/conversation/MessageTextRenderer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),EMPTY_OBJECT=Object.freeze(Object.create(null)),renderPerson=function(i18n,person){return person.isMe?i18n("icu:you"):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_conversation_ContactName__WEBPACK_IMPORTED_MODULE_2__.K,{title:person.title})},MessageSearchResult=react__WEBPACK_IMPORTED_MODULE_1__.memo((function MessageSearchResult(_ref){var body=_ref.body,bodyRanges=_ref.bodyRanges,conversationId=_ref.conversationId,from=_ref.from,getPreferredBadge=_ref.getPreferredBadge,i18n=_ref.i18n,id=_ref.id,sentAt=_ref.sentAt,showConversation=_ref.showConversation,snippet=_ref.snippet,theme=_ref.theme,to=_ref.to,onClickItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){showConversation({conversationId,messageId:id})}),[showConversation,conversationId,id]);if(!from||!to)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{});var headerName,isNoteToSelf=from.isMe&&to.isMe;headerName=isNoteToSelf?i18n("icu:noteToSelf"):from.isMe?"group"===to.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_5__.R,{i18n,id:"icu:searchResultHeader--you-to-group",components:{receiverGroup:renderPerson(i18n,to)}})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_5__.R,{i18n,id:"icu:searchResultHeader--you-to-receiver",components:{receiverContact:renderPerson(i18n,to)}})}):"group"===to.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_5__.R,{i18n,id:"icu:searchResultHeader--sender-to-group",components:{sender:renderPerson(i18n,from),receiverGroup:renderPerson(i18n,to)}})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Intl__WEBPACK_IMPORTED_MODULE_5__.R,{i18n,id:"icu:searchResultHeader--sender-to-you",components:{sender:renderPerson(i18n,from)}})});var _processBodyRangesFor=(0,_types_BodyRange__WEBPACK_IMPORTED_MODULE_3__.pP)({snippet,body,bodyRanges}),cleanedSnippet=_processBodyRangesFor.cleanedSnippet,displayBodyRanges=_processBodyRangesFor.bodyRanges,messageText=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_conversation_MessageTextRenderer__WEBPACK_IMPORTED_MODULE_6__.mI,{messageText:cleanedSnippet,bodyRanges:displayBodyRanges,direction:void 0,disableLinks:!0,emojiSizeClass:void 0,i18n,isSpoilerExpanded:EMPTY_OBJECT,onMentionTrigger:lodash_noop__WEBPACK_IMPORTED_MODULE_0___default(),renderLocation:_conversation_MessageTextRenderer__WEBPACK_IMPORTED_MODULE_6__.G5.SearchResult,textLength:cleanedSnippet.length});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseConversationListItem__WEBPACK_IMPORTED_MODULE_4__.p2,{acceptedMessageRequest:from.acceptedMessageRequest,avatarPath:from.avatarPath,badge:getPreferredBadge(from.badges),color:from.color,conversationType:"direct",headerDate:sentAt,headerName,i18n,id,isNoteToSelf,isMe:from.isMe,isSelected:!1,messageText,onClick:onClickItem,phoneNumber:from.phoneNumber,profileName:from.profileName,sharedGroupNames:from.sharedGroupNames,theme,title:from.title,unblurredAvatarPath:from.unblurredAvatarPath})}))},"./ts/test-both/helpers/getFakeBadge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>getFakeBadge,z:()=>getFakeBadges});var lodash_times__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/times.js"),lodash_times__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__),_badges_BadgeCategory__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/badges/BadgeCategory.ts"),_badges_BadgeImageTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/badges/BadgeImageTheme.ts"),_util_iterables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/iterables.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function getFakeBadge(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$alternate=_ref.alternate,alternate=void 0!==_ref$alternate&&_ref$alternate,_ref$id=_ref.id,id=void 0===_ref$id?"test-badge":_ref$id,imageFile={localPath:`/fixtures/${alternate?"blue":"orange"}-heart.svg`,url:"https://example.com/ignored.svg"};return{id,category:alternate?_badges_BadgeCategory__WEBPACK_IMPORTED_MODULE_1__.Q.Other:_badges_BadgeCategory__WEBPACK_IMPORTED_MODULE_1__.Q.Donor,name:"Test Badge "+(alternate?"B":"A"),descriptionTemplate:"{short_name} got this badge because they're cool. Signal is a nonprofit with no advertisers or investors, supported only by people like you.",images:[].concat(_toConsumableArray(Array(3).fill((0,_util_iterables__WEBPACK_IMPORTED_MODULE_3__.f9)(Object.values(_badges_BadgeImageTheme__WEBPACK_IMPORTED_MODULE_2__.c),(0,_util_iterables__WEBPACK_IMPORTED_MODULE_3__.rx)(imageFile)))),[{[_badges_BadgeImageTheme__WEBPACK_IMPORTED_MODULE_2__.c.Transparent]:imageFile}])}}var getFakeBadges=function(count){return lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(count,(function(index){return getFakeBadge({alternate:index%2!=0,id:`test-badge-${index}`})}))}},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/_baseFindIndex.js":module=>{module.exports=function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}},"./node_modules/lodash/_castFunction.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js");module.exports=function castFunction(value){return"function"==typeof value?value:identity}},"./node_modules/lodash/_createFind.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=baseIteratee(predicate,3);collection=keys(collection),predicate=function(key){return iteratee(iterable[key],key,iterable)}}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:void 0}}},"./node_modules/lodash/escapeRegExp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);module.exports=function escapeRegExp(string){return(string=toString(string))&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,"\\$&"):string}},"./node_modules/lodash/find.js":(module,__unused_webpack_exports,__webpack_require__)=>{var find=__webpack_require__("./node_modules/lodash/_createFind.js")(__webpack_require__("./node_modules/lodash/findIndex.js"));module.exports=find},"./node_modules/lodash/findIndex.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMax=Math.max;module.exports=function findIndex(array,predicate,fromIndex){var length=null==array?0:array.length;if(!length)return-1;var index=null==fromIndex?0:toInteger(fromIndex);return index<0&&(index=nativeMax(length+index,0)),baseFindIndex(array,baseIteratee(predicate,3),index)}},"./node_modules/lodash/findLast.js":(module,__unused_webpack_exports,__webpack_require__)=>{var findLast=__webpack_require__("./node_modules/lodash/_createFind.js")(__webpack_require__("./node_modules/lodash/findLastIndex.js"));module.exports=findLast},"./node_modules/lodash/findLastIndex.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function findLastIndex(array,predicate,fromIndex){var length=null==array?0:array.length;if(!length)return-1;var index=length-1;return void 0!==fromIndex&&(index=toInteger(fromIndex),index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1)),baseFindIndex(array,baseIteratee(predicate,3),index,!0)}},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/isBoolean.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGetTag=__webpack_require__("./node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isBoolean(value){return!0===value||!1===value||isObjectLike(value)&&"[object Boolean]"==baseGetTag(value)}},"./node_modules/lodash/times.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTimes=__webpack_require__("./node_modules/lodash/_baseTimes.js"),castFunction=__webpack_require__("./node_modules/lodash/_castFunction.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMin=Math.min;module.exports=function times(n,iteratee){if((n=toInteger(n))<1||n>9007199254740991)return[];var index=4294967295,length=nativeMin(n,4294967295);iteratee=castFunction(iteratee),n-=4294967295;for(var result=baseTimes(length,iteratee);++index<n;)iteratee(index);return result}},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn-bd":"./node_modules/moment/locale/bn-bd.js","./bn-bd.js":"./node_modules/moment/locale/bn-bd.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-in":"./node_modules/moment/locale/en-in.js","./en-in.js":"./node_modules/moment/locale/en-in.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./en-sg":"./node_modules/moment/locale/en-sg.js","./en-sg.js":"./node_modules/moment/locale/en-sg.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-mx":"./node_modules/moment/locale/es-mx.js","./es-mx.js":"./node_modules/moment/locale/es-mx.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fil":"./node_modules/moment/locale/fil.js","./fil.js":"./node_modules/moment/locale/fil.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-deva":"./node_modules/moment/locale/gom-deva.js","./gom-deva.js":"./node_modules/moment/locale/gom-deva.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./oc-lnc":"./node_modules/moment/locale/oc-lnc.js","./oc-lnc.js":"./node_modules/moment/locale/oc-lnc.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tk":"./node_modules/moment/locale/tk.js","./tk.js":"./node_modules/moment/locale/tk.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-mo":"./node_modules/moment/locale/zh-mo.js","./zh-mo.js":"./node_modules/moment/locale/zh-mo.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);