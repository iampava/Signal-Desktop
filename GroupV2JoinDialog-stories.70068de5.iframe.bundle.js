(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[5606],{"./ts/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,c:()=>ButtonIconType,qE:()=>ButtonSize,zx:()=>Button});var ButtonSize,ButtonVariant,ButtonIconType,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_assert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/assert.ts"),_util_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonSize){ButtonSize[ButtonSize.Large=0]="Large",ButtonSize[ButtonSize.Medium=1]="Medium",ButtonSize[ButtonSize.Small=2]="Small"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant.Calling="Calling",ButtonVariant.Destructive="Destructive",ButtonVariant.Details="Details",ButtonVariant.Primary="Primary",ButtonVariant.Secondary="Secondary",ButtonVariant.SecondaryAffirmative="SecondaryAffirmative",ButtonVariant.SecondaryDestructive="SecondaryDestructive",ButtonVariant.SystemMessage="SystemMessage"}(ButtonVariant||(ButtonVariant={})),function(ButtonIconType){ButtonIconType.audio="audio",ButtonIconType.muted="muted",ButtonIconType.search="search",ButtonIconType.unmuted="unmuted",ButtonIconType.video="video"}(ButtonIconType||(ButtonIconType={}));var SIZE_CLASS_NAMES=new Map([[ButtonSize.Large,"module-Button--large"],[ButtonSize.Medium,"module-Button--medium"],[ButtonSize.Small,"module-Button--small"]]),VARIANT_CLASS_NAMES=new Map([[ButtonVariant.Primary,"module-Button--primary"],[ButtonVariant.Secondary,"module-Button--secondary"],[ButtonVariant.SecondaryAffirmative,"module-Button--secondary module-Button--secondary--affirmative"],[ButtonVariant.SecondaryDestructive,"module-Button--secondary module-Button--secondary--destructive"],[ButtonVariant.Destructive,"module-Button--destructive"],[ButtonVariant.Calling,"module-Button--calling"],[ButtonVariant.SystemMessage,"module-Button--system-message"],[ButtonVariant.Details,"module-Button--details"]]),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ButtonInner(props,ref){var onClick,type,form,children=props.children,className=props.className,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,icon=props.icon,style=props.style,tabIndex=props.tabIndex,theme=props.theme,_props$variant=props.variant,variant=void 0===_props$variant?ButtonVariant.Primary:_props$variant,_props$size=props.size,size=void 0===_props$size?variant===ButtonVariant.Details?ButtonSize.Small:ButtonSize.Medium:_props$size,ariaLabel=props["aria-label"],ariaDisabled=props["aria-disabled"];"onClick"in props?(onClick=props.onClick,type="button"):(onClick=void 0,type=props.type,form=props.form);var sizeClassName=SIZE_CLASS_NAMES.get(size);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(sizeClassName,"<Button> size not found");var variantClassName=VARIANT_CLASS_NAMES.get(variant);(0,_util_assert__WEBPACK_IMPORTED_MODULE_2__.q8)(variantClassName,"<Button> variant not found");var buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{"aria-label":ariaLabel,"aria-disabled":ariaDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("module-Button",sizeClassName,variantClassName,icon&&`module-Button--icon--${icon}`,className),disabled,onClick,form,ref,style,tabIndex,type,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_util_theme__WEBPACK_IMPORTED_MODULE_3__.j)(theme),children:buttonElement}):buttonElement}))},"./ts/components/GroupDescriptionText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>GroupDescriptionText});__webpack_require__("./node_modules/react/index.js");var _conversation_AddNewLines__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/conversation/AddNewLines.tsx"),_conversation_Emojify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/conversation/Emojify.tsx"),_conversation_Linkify__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/components/conversation/Linkify.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),renderNonLink=function(_ref){var key=_ref.key,text=_ref.text;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_conversation_Emojify__WEBPACK_IMPORTED_MODULE_2__.u,{text},key)};renderNonLink.displayName="renderNonLink";var renderNonNewLine=function(_ref2){var key=_ref2.key,text=_ref2.text;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_conversation_Linkify__WEBPACK_IMPORTED_MODULE_3__.zR,{text,renderNonLink},key)};function GroupDescriptionText(_ref3){var text=_ref3.text;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_conversation_AddNewLines__WEBPACK_IMPORTED_MODULE_1__.K,{text,renderNonNewLine})}renderNonNewLine.displayName="renderNonNewLine",GroupDescriptionText.displayName="GroupDescriptionText"},"./ts/components/GroupV2JoinDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ApprovalRequired:()=>ApprovalRequired,AvatarLoadingState:()=>AvatarLoadingState,Basic:()=>Basic,Full:()=>Full,WithAvatar:()=>WithAvatar,WithOneMember:()=>WithOneMember,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GroupV2JoinDialog_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Avatar=__webpack_require__("./ts/components/Avatar.tsx"),Spinner=__webpack_require__("./ts/components/Spinner.tsx"),Button=__webpack_require__("./ts/components/Button.tsx"),GroupDescription=__webpack_require__("./ts/components/conversation/GroupDescription.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function focusRef(el){el&&el.focus()}var GroupV2JoinDialog=react.memo((function GroupV2JoinDialogInner(props){var _React$useState2=_slicedToArray(react.useState(!1),2),isWorking=_React$useState2[0],setIsWorking=_React$useState2[1],_React$useState4=_slicedToArray(react.useState(!1),2),isJoining=_React$useState4[0],setIsJoining=_React$useState4[1],approvalRequired=props.approvalRequired,avatar=props.avatar,groupDescription=props.groupDescription,i18n=props.i18n,join=props.join,memberCount=props.memberCount,onClose=props.onClose,title=props.title,joinString=i18n(approvalRequired?"icu:GroupV2--join--request-to-join-button":"icu:GroupV2--join--join-button"),wrappedJoin=react.useCallback((function(){setIsWorking(!0),setIsJoining(!0),join()}),[join,setIsJoining,setIsWorking]),wrappedClose=react.useCallback((function(){setIsWorking(!0),onClose()}),[onClose,setIsWorking]);return(0,jsx_runtime.jsxs)("div",{className:"module-group-v2-join-dialog",children:[(0,jsx_runtime.jsx)("button",{"aria-label":i18n("icu:close"),type:"button",disabled:isWorking,className:"module-group-v2-join-dialog__close-button",onClick:wrappedClose}),(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__avatar",children:(0,jsx_runtime.jsx)(Avatar.qE,{acceptedMessageRequest:!1,avatarPath:avatar?avatar.url:void 0,badge:void 0,blur:Avatar.S7.NoBlur,loading:avatar&&!avatar.url,conversationType:"group",title,isMe:!1,sharedGroupNames:[],size:80,i18n})}),(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__title",children:title}),(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__metadata",children:i18n("icu:GroupV2--join--group-metadata--full",{memberCount})}),groupDescription&&(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__description",children:(0,jsx_runtime.jsx)(GroupDescription.m,{i18n,title,text:groupDescription})}),approvalRequired?(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__prompt--approval",children:i18n("icu:GroupV2--join--prompt-with-approval")}):(0,jsx_runtime.jsx)("div",{className:"module-group-v2-join-dialog__prompt",children:i18n("icu:GroupV2--join--prompt")}),(0,jsx_runtime.jsxs)("div",{className:"module-group-v2-join-dialog__buttons",children:[(0,jsx_runtime.jsx)(Button.zx,{className:classnames_default()("module-group-v2-join-dialog__button","module-group-v2-join-dialog__button--secondary"),disabled:isWorking,onClick:wrappedClose,variant:Button.Wu.Secondary,children:i18n("icu:cancel")}),(0,jsx_runtime.jsx)(Button.zx,{className:"module-group-v2-join-dialog__button",disabled:isWorking,ref:focusRef,onClick:wrappedJoin,variant:Button.Wu.Primary,children:isJoining?(0,jsx_runtime.jsx)(Spinner.$j,{size:"20px",svgSize:"small",direction:"on-avatar"}):joinString})]})]})})),setupI18n=__webpack_require__("./ts/util/setupI18n.ts"),messages=__webpack_require__("./_locales/en/messages.json"),i18n=(0,setupI18n.E5)("en",messages),createProps=function(){var overrideProps=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{memberCount:(0,dist.number)("memberCount",overrideProps.memberCount||12),avatar:overrideProps.avatar,title:(0,dist.text)("title",overrideProps.title||"Random Group!"),approvalRequired:(0,dist.boolean)("approvalRequired",overrideProps.approvalRequired||!1),groupDescription:overrideProps.groupDescription,join:(0,esm.action)("join"),onClose:(0,esm.action)("onClose"),i18n}};const GroupV2JoinDialog_stories={title:"Components/GroupV2JoinDialog"};function Basic(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps()))}function ApprovalRequired(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps({approvalRequired:!0,title:"Approval required!"})))}function WithAvatar(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps({avatar:{url:"/fixtures/giphy-GVNvOUpeYmI7e.gif"},title:"Has an avatar!"})))}function WithOneMember(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps({memberCount:1,title:"Just one member!"})))}function AvatarLoadingState(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps({avatar:{loading:!0},title:"Avatar loading!"})))}function Full(){return(0,jsx_runtime.jsx)(GroupV2JoinDialog,Object.assign({},createProps({avatar:{url:"/fixtures/giphy-GVNvOUpeYmI7e.gif"},memberCount:16,groupDescription:"Discuss meets, events, training, and recruiting.",title:"Underwater basket weavers (LA)"})))}Basic.displayName="Basic",ApprovalRequired.displayName="ApprovalRequired",ApprovalRequired.story={name:"Approval required"},WithAvatar.displayName="WithAvatar",WithAvatar.story={name:"With avatar"},WithOneMember.displayName="WithOneMember",WithOneMember.story={name:"With one member"},AvatarLoadingState.displayName="AvatarLoadingState",AvatarLoadingState.story={name:"Avatar loading state"},Full.displayName="Full";var __namedExportsOrder=["Basic","ApprovalRequired","WithAvatar","WithOneMember","AvatarLoadingState","Full"]},"./ts/components/conversation/AddNewLines.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>AddNewLines});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultRenderNonNewLine=function(_ref){return _ref.text};function AddNewLines(_ref2){var text=_ref2.text,_ref2$renderNonNewLin=_ref2.renderNonNewLine,renderNonNewLine=void 0===_ref2$renderNonNewLin?defaultRenderNonNewLine:_ref2$renderNonNewLin,results=[],FIND_NEWLINES=/\n/g,match=FIND_NEWLINES.exec(text),last=0,count=1;if(!match)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:renderNonNewLine({text,key:0})});for(;match;){if(last<match.index){var textWithNoNewline=text.slice(last,match.index);count+=1,results.push(renderNonNewLine({text:textWithNoNewline,key:count}))}count+=1,results.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{},count)),last=FIND_NEWLINES.lastIndex,match=FIND_NEWLINES.exec(text)}return last<text.length&&(count+=1,results.push(renderNonNewLine({text:text.slice(last),key:count}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:results})}},"./ts/components/conversation/GroupDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>GroupDescription});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ts/components/Modal.tsx"),_GroupDescriptionText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/GroupDescriptionText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function GroupDescription(_ref){var i18n=_ref.i18n,title=_ref.title,text=_ref.text,textRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),hasReadMore=_useState2[0],setHasReadMore=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),showFullDescription=_useState4[0],setShowFullDescription=_useState4[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){textRef&&textRef.current&&setHasReadMore(textRef.current.scrollHeight-5>textRef.current.clientHeight)}),[setHasReadMore,text,textRef]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[showFullDescription&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__.u_,{modalName:"GroupDescription",hasXButton:!0,i18n,onClose:function(){return setShowFullDescription(!1)},title,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GroupDescriptionText__WEBPACK_IMPORTED_MODULE_2__.F,{text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"GroupDescription__text",ref:textRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GroupDescriptionText__WEBPACK_IMPORTED_MODULE_2__.F,{text})}),hasReadMore&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"GroupDescription__read-more",onClick:function(ev){ev.preventDefault(),ev.stopPropagation(),setShowFullDescription(!0)},type:"button",children:i18n("icu:GroupDescription__read-more")})]})}},"./ts/components/conversation/Linkify.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N1:()=>linkify,v2:()=>SUPPORTED_PROTOCOLS,zR:()=>Linkify});__webpack_require__("./node_modules/react/index.js");var linkify_it__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/linkify-it/index.js"),linkify_it__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(linkify_it__WEBPACK_IMPORTED_MODULE_1__),_types_LinkPreview__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/types/LinkPreview.ts"),_util_emoji__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ts/util/emoji.ts"),_util_missingCaseError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ts/util/missingCaseError.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),linkify=linkify_it__WEBPACK_IMPORTED_MODULE_1___default()().tlds(["ac","ad","ae","aero","af","ag","ai","al","am","an","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bl","bm","bn","bo","bq","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mf","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sx","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","travel","tt","tv","tw","tz","ua","ug","uk","um","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","中国","中國","ලංකා","香港","台湾","台灣","امارات","الاردن","السعودية","ไทย","рф","تونس","مصر","قطر","இலங்கை","فلسطين","ye","yt","za","zm","zw"]),SUPPORTED_PROTOCOLS=/^(http|https):/i,defaultRenderNonLink=function(_ref){return _ref.text};function Linkify(props){var text=props.text,_props$renderNonLink=props.renderNonLink,renderNonLink=void 0===_props$renderNonLink?defaultRenderNonLink:_props$renderNonLink;if(!(0,_types_LinkPreview__WEBPACK_IMPORTED_MODULE_2__.vl)(text))return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:renderNonLink({text,key:1})});var chunkData=(0,_util_emoji__WEBPACK_IMPORTED_MODULE_3__.b)(text).map((function(_ref2){var type=_ref2.type,chunk=_ref2.value;if("text"===type)return{chunk,matchData:linkify.match(chunk)||[]};if("emoji"===type)return{chunk,matchData:[]};throw(0,_util_missingCaseError__WEBPACK_IMPORTED_MODULE_5__.b)(type)})),results=[],count=1;return chunkData.forEach((function(_ref3){var chunk=_ref3.chunk,matchData=_ref3.matchData;if(0===matchData.length)return count+=1,void results.push(renderNonLink({text:chunk,key:count}));var chunkLastIndex=0;matchData.forEach((function(match){if(chunkLastIndex<match.index){var textWithNoLink=chunk.slice(chunkLastIndex,match.index);count+=1,results.push(renderNonLink({text:textWithNoLink,key:count}))}var url=match.url,originalText=match.text;count+=1,SUPPORTED_PROTOCOLS.test(url)&&!(0,_types_LinkPreview__WEBPACK_IMPORTED_MODULE_2__.kz)(url)?results.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:url,children:originalText},count)):results.push(renderNonLink({text:originalText,key:count})),chunkLastIndex=match.lastIndex})),chunkLastIndex<chunk.length&&(count+=1,results.push(renderNonLink({text:chunk.slice(chunkLastIndex),key:count})))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:results})}},"./ts/types/LinkPreview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Df:()=>isStickerPack,Hz:()=>isGroupLink,ge:()=>getDomain,go:()=>shouldPreviewHref,hH:()=>LinkPreviewSourceType,kz:()=>isLinkSneaky,rq:()=>findLinks,vl:()=>shouldLinkifyMessage});var LinkPreviewSourceType,lodash_range__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/range.js"),lodash_range__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_0__),lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEmpty.js"),lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__),lodash_compact__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/compact.js"),lodash_compact__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_2__),lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/isNumber.js"),lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__),url__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/url/url.js"),linkify_it__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/linkify-it/index.js"),linkify_it__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(linkify_it__WEBPACK_IMPORTED_MODULE_5__),_util_url__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ts/util/url.ts"),_util_emoji__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ts/util/emoji.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}!function(LinkPreviewSourceType){LinkPreviewSourceType[LinkPreviewSourceType.Composer=0]="Composer",LinkPreviewSourceType[LinkPreviewSourceType.ForwardMessageModal=1]="ForwardMessageModal",LinkPreviewSourceType[LinkPreviewSourceType.StoryCreator=2]="StoryCreator"}(LinkPreviewSourceType||(LinkPreviewSourceType={}));var linkify=linkify_it__WEBPACK_IMPORTED_MODULE_5___default()();function shouldPreviewHref(href){var url=(0,_util_url__WEBPACK_IMPORTED_MODULE_7__.FS)(href);return Boolean(url&&"https:"===url.protocol&&!function isDomainExcluded(url){var _step,_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(EXCLUDED_DOMAINS);try{for(_iterator.s();!(_step=_iterator.n()).done;){var excludedDomain=_step.value;if(url.hostname.endsWith(`.${excludedDomain}`)||url.hostname===excludedDomain)return!0}}catch(err){_iterator.e(err)}finally{_iterator.f()}return!1}(url)&&!isLinkSneaky(href))}var EXCLUDED_DOMAINS=["debuglogs.org","example","example.com","example.net","example.org","invalid","localhost","onion","test"];var DIRECTIONAL_OVERRIDES=/[\u202c\u202d\u202e]/,UNICODE_DRAWING=/[\u2500-\u25FF]/;function shouldLinkifyMessage(message){return!message||!DIRECTIONAL_OVERRIDES.test(message)&&!UNICODE_DRAWING.test(message)}function isStickerPack(){var link=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return link.startsWith("https://signal.art/addstickers/")}function isGroupLink(){var link=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return link.startsWith("https://signal.group/")}function findLinks(text,caretLocation){if(!shouldLinkifyMessage(text))return[];var haveCaretLocation=lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default()(caretLocation),textLength=text?text.length:0,matches=linkify.match(text?(0,_util_emoji__WEBPACK_IMPORTED_MODULE_6__.s)(text):"")||[];return lodash_compact__WEBPACK_IMPORTED_MODULE_2___default()(matches.map((function(match){return haveCaretLocation?void 0===caretLocation?null:match.lastIndex===textLength&&caretLocation===textLength||match.index>caretLocation||match.lastIndex<caretLocation?match.text:null:match.text})))}function getDomain(href){var url=(0,_util_url__WEBPACK_IMPORTED_MODULE_7__.FS)(href);if(!url||!url.hostname)throw new Error("getDomain: Unable to extract hostname from href");return url.hostname}var VALID_URI_CHARACTERS=new Set(["%",":","/","?","#","[","]","@","!","$","&","'","(",")","*","+",",",";","="].concat(_toConsumableArray(String.fromCharCode.apply(String,_toConsumableArray(lodash_range__WEBPACK_IMPORTED_MODULE_0___default()(65,91)).concat(_toConsumableArray(lodash_range__WEBPACK_IMPORTED_MODULE_0___default()(97,123))))),_toConsumableArray(lodash_range__WEBPACK_IMPORTED_MODULE_0___default()(10).map(String)),["-",".","_","~"])),ASCII_PATTERN=/[\u0020-\u007F]/g;function isLinkSneaky(href){if(href.length>4096)return!0;var url=(0,_util_url__WEBPACK_IMPORTED_MODULE_7__.FS)(href);if(!url)return!0;if(url.username||url.password)return!0;if(!url.hostname)return!0;if(url.hostname.length>2048)return!0;if(url.hostname.includes("%"))return!0;var labels=url.hostname.split(".");if(labels.length<2||labels.some(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()))return!0;var withoutPeriods=(url__WEBPACK_IMPORTED_MODULE_4__.domainToUnicode?url__WEBPACK_IMPORTED_MODULE_4__.domainToUnicode(url.hostname):url.hostname).replace(/\./g,""),hasASCII=ASCII_PATTERN.test(withoutPeriods),withoutASCII=withoutPeriods.replace(ASCII_PATTERN,"");if(hasASCII&&withoutASCII.length>0)return!0;var startOfPathAndHash=href.indexOf("/",url.protocol.length+4);return _toConsumableArray(-1===startOfPathAndHash?"":href.substr(startOfPathAndHash)).some((function(character){return!VALID_URI_CHARACTERS.has(character)}))}},"./ts/util/url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function maybeParseUrl(value){if("string"==typeof value)try{return new URL(value)}catch(err){}}__webpack_require__.d(__webpack_exports__,{FS:()=>maybeParseUrl})},"./node_modules/lodash/_baseFindIndex.js":module=>{module.exports=function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}},"./node_modules/lodash/_createFind.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=baseIteratee(predicate,3);collection=keys(collection),predicate=function(key){return iteratee(iterable[key],key,iterable)}}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:void 0}}},"./node_modules/lodash/find.js":(module,__unused_webpack_exports,__webpack_require__)=>{var find=__webpack_require__("./node_modules/lodash/_createFind.js")(__webpack_require__("./node_modules/lodash/findIndex.js"));module.exports=find},"./node_modules/lodash/findIndex.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMax=Math.max;module.exports=function findIndex(array,predicate,fromIndex){var length=null==array?0:array.length;if(!length)return-1;var index=null==fromIndex?0:toInteger(fromIndex);return index<0&&(index=nativeMax(length+index,0)),baseFindIndex(array,baseIteratee(predicate,3),index)}},"./node_modules/lodash/findLast.js":(module,__unused_webpack_exports,__webpack_require__)=>{var findLast=__webpack_require__("./node_modules/lodash/_createFind.js")(__webpack_require__("./node_modules/lodash/findLastIndex.js"));module.exports=findLast},"./node_modules/lodash/findLastIndex.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function findLastIndex(array,predicate,fromIndex){var length=null==array?0:array.length;if(!length)return-1;var index=length-1;return void 0!==fromIndex&&(index=toInteger(fromIndex),index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1)),baseFindIndex(array,baseIteratee(predicate,3),index,!0)}},"./node_modules/lodash/first.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/lodash/head.js")},"./node_modules/lodash/head.js":module=>{module.exports=function head(array){return array&&array.length?array[0]:void 0}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}},"./node_modules/uuid-browser/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var v1=__webpack_require__("./node_modules/uuid-browser/v1.js"),v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},"./node_modules/uuid-browser/v1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid-browser/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid-browser/lib/bytesToUuid.js"),_seedBytes=rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0;module.exports=function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[],clockseq=void 0!==(options=options||{}).clockseq?options.clockseq:_clockseq,msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var node=options.node||_nodeId,n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}}}]);