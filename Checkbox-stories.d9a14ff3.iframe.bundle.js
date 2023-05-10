/*! For license information please see Checkbox-stories.d9a14ff3.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[6878,3905],{"./ts/components/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Description:()=>Description,Disabled:()=>Disabled,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/components/Checkbox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),createProps=function(){return{checked:!1,label:"Check Me!",name:"check-me",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onChange")}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox"};function Normal(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_2__.X,Object.assign({},createProps()))}function Checked(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_2__.X,Object.assign({},createProps(),{checked:!0}))}function Description(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_2__.X,Object.assign({},createProps(),{description:"This is a checkbox"}))}function Disabled(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_2__.X,Object.assign({},createProps(),{disabled:!0}))}Normal.displayName="Normal",Checked.displayName="Checked",Description.displayName="Description",Disabled.displayName="Disabled";var __namedExportsOrder=["Normal","Checked","Description","Disabled"]},"./ts/components/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid-browser/index.js"),_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ts/util/getClassNamesFor.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Checkbox=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function CheckboxInner(_ref,ref){var checked=_ref.checked,children=_ref.children,description=_ref.description,disabled=_ref.disabled,isRadio=_ref.isRadio,label=_ref.label,moduleClassName=_ref.moduleClassName,name=_ref.name,onChange=_ref.onChange,onClick=_ref.onClick,getClassName=(0,_util_getClassNamesFor__WEBPACK_IMPORTED_MODULE_2__.h)("Checkbox",moduleClassName),id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return`${name}::${(0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()}`}),[name]),checkboxNode=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:getClassName("__checkbox"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{checked:Boolean(checked),disabled,id,name,onChange:function(ev){return onChange(ev.target.checked)},onClick,ref,type:isRadio?"radio":"checkbox"})}),labelNode=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label",{htmlFor:id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:getClassName("__description"),children:description})]})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:getClassName(""),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:getClassName("__container"),children:children?children({id,checkboxNode,labelNode,checked}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[checkboxNode,labelNode]})})})}))},"./ts/util/getClassNamesFor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>getClassNamesFor});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);function getClassNamesFor(){for(var _len=arguments.length,modules=new Array(_len),_key=0;_key<_len;_key++)modules[_key]=arguments[_key];return function(modifier){if(void 0===modifier)return"";var cx=modules.flatMap((function(m){return m?m.split(" "):void 0})).map((function(parentModule){return parentModule?`${parentModule}${modifier}`:void 0}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx)}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg))classes.push(classNames.apply(null,arg));else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?module.exports=classNames:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/uuid-browser/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var v1=__webpack_require__("./node_modules/uuid-browser/v1.js"),v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},"./node_modules/uuid-browser/v1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid-browser/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid-browser/lib/bytesToUuid.js"),_seedBytes=rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0;module.exports=function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[],clockseq=void 0!==(options=options||{}).clockseq?options.clockseq:_clockseq,msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var node=options.node||_nodeId,n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}}}]);