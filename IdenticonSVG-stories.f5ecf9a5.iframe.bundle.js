"use strict";(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[993],{"./ts/components/IdenticonSVG.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllColors:()=>AllColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IdenticonSVG_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function IdenticonSVG(_ref){var backgroundColor=_ref.backgroundColor,content=_ref.content,foregroundColor=_ref.foregroundColor;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",children:[(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"40",fill:backgroundColor}),(0,jsx_runtime.jsx)("text",{baselineShift:"-8px",fill:foregroundColor,fontFamily:"sans-serif",fontSize:"24px",textAnchor:"middle",x:"50",y:"50",children:content})]})}IdenticonSVG.displayName="IdenticonSVG";var Colors=__webpack_require__("./ts/types/Colors.ts");const IdenticonSVG_stories={title:"Components/IdenticonSVG"};function AllColors(){var stories=[];return Colors.nE.forEach((function(value){return stories.push((0,jsx_runtime.jsx)(IdenticonSVG,{backgroundColor:value.bg,content:"HI",foregroundColor:value.fg}))})),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:stories})}var __namedExportsOrder=["AllColors"]},"./ts/types/Colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A0:()=>ContactNameColors,Cy:()=>DEFAULT_CONVERSATION_COLOR,cU:()=>ConversationColors,hx:()=>getAvatarColor,nE:()=>AvatarColorMap,sj:()=>AvatarColors});var AvatarColorMap=new Map([["A100",{bg:"#e3e3fe",fg:"#3838f5"}],["A110",{bg:"#dde7fc",fg:"#1251d3"}],["A120",{bg:"#d8e8f0",fg:"#086da0"}],["A130",{bg:"#cde4cd",fg:"#067906"}],["A140",{bg:"#eae0fd",fg:"#661aff"}],["A150",{bg:"#f5e3fe",fg:"#9f00f0"}],["A160",{bg:"#f6d8ec",fg:"#b8057c"}],["A170",{bg:"#f5d7d7",fg:"#be0404"}],["A180",{bg:"#fef5d0",fg:"#836b01"}],["A190",{bg:"#eae6d5",fg:"#7d6f40"}],["A200",{bg:"#d2d2dc",fg:"#4f4f6d"}],["A210",{bg:"#d7d7d9",fg:"#5c5c5c"}]]),AvatarColors=Array.from(AvatarColorMap.keys()),ConversationColors=["ultramarine","crimson","vermilion","burlap","forest","wintergreen","teal","blue","indigo","violet","plum","taupe","steel","ember","midnight","infrared","lagoon","fluorescent","basil","sublime","sea","tangerine"],ContactNameColors=["200","120","300","010","210","330","230","180","030","340","270","090","000","150","240","040","160","280","080","320","020","140","260","060","350","100","290","130","220","050","170","250","070","190","310","110"],DEFAULT_CONVERSATION_COLOR={color:"ultramarine"};function getAvatarColor(color){return color||AvatarColors[0]}}}]);