/*! For license information please see 1210.31de8b21.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunksignal_desktop=globalThis.webpackChunksignal_desktop||[]).push([[1210],{"./node_modules/linkify-it/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";function assign(obj){var sources=Array.prototype.slice.call(arguments,1);return sources.forEach((function(source){source&&Object.keys(source).forEach((function(key){obj[key]=source[key]}))})),obj}function _class(obj){return Object.prototype.toString.call(obj)}function isFunction(obj){return"[object Function]"===_class(obj)}function escapeRE(str){return str.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var defaultOptions={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};var defaultSchemas={"http:":{validate:function(text,pos,self){var tail=text.slice(pos);return self.re.http||(self.re.http=new RegExp("^\\/\\/"+self.re.src_auth+self.re.src_host_port_strict+self.re.src_path,"i")),self.re.http.test(tail)?tail.match(self.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(text,pos,self){var tail=text.slice(pos);return self.re.no_http||(self.re.no_http=new RegExp("^"+self.re.src_auth+"(?:localhost|(?:(?:"+self.re.src_domain+")\\.)+"+self.re.src_domain_root+")"+self.re.src_port+self.re.src_host_terminator+self.re.src_path,"i")),self.re.no_http.test(tail)?pos>=3&&":"===text[pos-3]||pos>=3&&"/"===text[pos-3]?0:tail.match(self.re.no_http)[0].length:0}},"mailto:":{validate:function(text,pos,self){var tail=text.slice(pos);return self.re.mailto||(self.re.mailto=new RegExp("^"+self.re.src_email_name+"@"+self.re.src_host_strict,"i")),self.re.mailto.test(tail)?tail.match(self.re.mailto)[0].length:0}}},tlds_default="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function compile(self){var re=self.re=__webpack_require__("./node_modules/linkify-it/lib/re.js")(self.__opts__),tlds=self.__tlds__.slice();function untpl(tpl){return tpl.replace("%TLDS%",re.src_tlds)}self.onCompile(),self.__tlds_replaced__||tlds.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),tlds.push(re.src_xn),re.src_tlds=tlds.join("|"),re.email_fuzzy=RegExp(untpl(re.tpl_email_fuzzy),"i"),re.link_fuzzy=RegExp(untpl(re.tpl_link_fuzzy),"i"),re.link_no_ip_fuzzy=RegExp(untpl(re.tpl_link_no_ip_fuzzy),"i"),re.host_fuzzy_test=RegExp(untpl(re.tpl_host_fuzzy_test),"i");var aliases=[];function schemaError(name,val){throw new Error('(LinkifyIt) Invalid schema "'+name+'": '+val)}self.__compiled__={},Object.keys(self.__schemas__).forEach((function(name){var val=self.__schemas__[name];if(null!==val){var compiled={validate:null,link:null};if(self.__compiled__[name]=compiled,function isObject(obj){return"[object Object]"===_class(obj)}(val))return!function isRegExp(obj){return"[object RegExp]"===_class(obj)}(val.validate)?isFunction(val.validate)?compiled.validate=val.validate:schemaError(name,val):compiled.validate=function createValidator(re){return function(text,pos){var tail=text.slice(pos);return re.test(tail)?tail.match(re)[0].length:0}}(val.validate),void(isFunction(val.normalize)?compiled.normalize=val.normalize:val.normalize?schemaError(name,val):compiled.normalize=function(match,self){self.normalize(match)});!function isString(obj){return"[object String]"===_class(obj)}(val)?schemaError(name,val):aliases.push(name)}})),aliases.forEach((function(alias){self.__compiled__[self.__schemas__[alias]]&&(self.__compiled__[alias].validate=self.__compiled__[self.__schemas__[alias]].validate,self.__compiled__[alias].normalize=self.__compiled__[self.__schemas__[alias]].normalize)})),self.__compiled__[""]={validate:null,normalize:function(match,self){self.normalize(match)}};var slist=Object.keys(self.__compiled__).filter((function(name){return name.length>0&&self.__compiled__[name]})).map(escapeRE).join("|");self.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+re.src_ZPCc+"))("+slist+")","i"),self.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+re.src_ZPCc+"))("+slist+")","ig"),self.re.pretest=RegExp("("+self.re.schema_test.source+")|("+self.re.host_fuzzy_test.source+")|@","i"),function resetScanCache(self){self.__index__=-1,self.__text_cache__=""}(self)}function Match(self,shift){var start=self.__index__,end=self.__last_index__,text=self.__text_cache__.slice(start,end);this.schema=self.__schema__.toLowerCase(),this.index=start+shift,this.lastIndex=end+shift,this.raw=text,this.text=text,this.url=text}function createMatch(self,shift){var match=new Match(self,shift);return self.__compiled__[match.schema].normalize(match,self),match}function LinkifyIt(schemas,options){if(!(this instanceof LinkifyIt))return new LinkifyIt(schemas,options);options||function isOptionsObj(obj){return Object.keys(obj||{}).reduce((function(acc,k){return acc||defaultOptions.hasOwnProperty(k)}),!1)}(schemas)&&(options=schemas,schemas={}),this.__opts__=assign({},defaultOptions,options),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=assign({},defaultSchemas,schemas),this.__compiled__={},this.__tlds__=tlds_default,this.__tlds_replaced__=!1,this.re={},compile(this)}LinkifyIt.prototype.add=function add(schema,definition){return this.__schemas__[schema]=definition,compile(this),this},LinkifyIt.prototype.set=function set(options){return this.__opts__=assign(this.__opts__,options),this},LinkifyIt.prototype.test=function test(text){if(this.__text_cache__=text,this.__index__=-1,!text.length)return!1;var m,ml,me,len,shift,next,re,tld_pos;if(this.re.schema_test.test(text))for((re=this.re.schema_search).lastIndex=0;null!==(m=re.exec(text));)if(len=this.testSchemaAt(text,m[2],re.lastIndex)){this.__schema__=m[2],this.__index__=m.index+m[1].length,this.__last_index__=m.index+m[0].length+len;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(tld_pos=text.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||tld_pos<this.__index__)&&null!==(ml=text.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(shift=ml.index+ml[1].length,(this.__index__<0||shift<this.__index__)&&(this.__schema__="",this.__index__=shift,this.__last_index__=ml.index+ml[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&text.indexOf("@")>=0&&null!==(me=text.match(this.re.email_fuzzy))&&(shift=me.index+me[1].length,next=me.index+me[0].length,(this.__index__<0||shift<this.__index__||shift===this.__index__&&next>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=shift,this.__last_index__=next)),this.__index__>=0},LinkifyIt.prototype.pretest=function pretest(text){return this.re.pretest.test(text)},LinkifyIt.prototype.testSchemaAt=function testSchemaAt(text,schema,pos){return this.__compiled__[schema.toLowerCase()]?this.__compiled__[schema.toLowerCase()].validate(text,pos,this):0},LinkifyIt.prototype.match=function match(text){var shift=0,result=[];this.__index__>=0&&this.__text_cache__===text&&(result.push(createMatch(this,shift)),shift=this.__last_index__);for(var tail=shift?text.slice(shift):text;this.test(tail);)result.push(createMatch(this,shift)),tail=tail.slice(this.__last_index__),shift+=this.__last_index__;return result.length?result:null},LinkifyIt.prototype.tlds=function tlds(list,keepOld){return list=Array.isArray(list)?list:[list],keepOld?(this.__tlds__=this.__tlds__.concat(list).sort().filter((function(el,idx,arr){return el!==arr[idx-1]})).reverse(),compile(this),this):(this.__tlds__=list.slice(),this.__tlds_replaced__=!0,compile(this),this)},LinkifyIt.prototype.normalize=function normalize(match){match.schema||(match.url="http://"+match.url),"mailto:"!==match.schema||/^mailto:/i.test(match.url)||(match.url="mailto:"+match.url)},LinkifyIt.prototype.onCompile=function onCompile(){},module.exports=LinkifyIt},"./node_modules/linkify-it/lib/re.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function(opts){var re={};re.src_Any=__webpack_require__("./node_modules/uc.micro/properties/Any/regex.js").source,re.src_Cc=__webpack_require__("./node_modules/uc.micro/categories/Cc/regex.js").source,re.src_Z=__webpack_require__("./node_modules/uc.micro/categories/Z/regex.js").source,re.src_P=__webpack_require__("./node_modules/uc.micro/categories/P/regex.js").source,re.src_ZPCc=[re.src_Z,re.src_P,re.src_Cc].join("|"),re.src_ZCc=[re.src_Z,re.src_Cc].join("|");return re.src_pseudo_letter="(?:(?![><｜]|"+re.src_ZPCc+")"+re.src_Any+")",re.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",re.src_auth="(?:(?:(?!"+re.src_ZCc+"|[@/\\[\\]()]).)+@)?",re.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",re.src_host_terminator="(?=$|[><｜]|"+re.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+re.src_ZPCc+"))",re.src_path="(?:[/?#](?:(?!"+re.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+re.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+re.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+re.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+re.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+re.src_ZCc+"|[']).)+\\'|\\'(?="+re.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+re.src_ZCc+"|[.]).|"+(opts&&opts["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+re.src_ZCc+").|\\!(?!"+re.src_ZCc+"|[!]).|\\?(?!"+re.src_ZCc+"|[?]).)+|\\/)?",re.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',re.src_xn="xn--[a-z0-9\\-]{1,59}",re.src_domain_root="(?:"+re.src_xn+"|"+re.src_pseudo_letter+"{1,63})",re.src_domain="(?:"+re.src_xn+"|(?:"+re.src_pseudo_letter+")|(?:"+re.src_pseudo_letter+"(?:-|"+re.src_pseudo_letter+"){0,61}"+re.src_pseudo_letter+"))",re.src_host="(?:(?:(?:(?:"+re.src_domain+")\\.)*"+re.src_domain+"))",re.tpl_host_fuzzy="(?:"+re.src_ip4+"|(?:(?:(?:"+re.src_domain+")\\.)+(?:%TLDS%)))",re.tpl_host_no_ip_fuzzy="(?:(?:(?:"+re.src_domain+")\\.)+(?:%TLDS%))",re.src_host_strict=re.src_host+re.src_host_terminator,re.tpl_host_fuzzy_strict=re.tpl_host_fuzzy+re.src_host_terminator,re.src_host_port_strict=re.src_host+re.src_port+re.src_host_terminator,re.tpl_host_port_fuzzy_strict=re.tpl_host_fuzzy+re.src_port+re.src_host_terminator,re.tpl_host_port_no_ip_fuzzy_strict=re.tpl_host_no_ip_fuzzy+re.src_port+re.src_host_terminator,re.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+re.src_ZPCc+"|>|$))",re.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+re.src_ZCc+")("+re.src_email_name+"@"+re.tpl_host_fuzzy_strict+")",re.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+re.src_ZPCc+"))((?![$+<=>^`|｜])"+re.tpl_host_port_fuzzy_strict+re.src_path+")",re.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+re.src_ZPCc+"))((?![$+<=>^`|｜])"+re.tpl_host_port_no_ip_fuzzy_strict+re.src_path+")",re}},"./node_modules/lodash/_baseRange.js":module=>{var nativeCeil=Math.ceil,nativeMax=Math.max;module.exports=function baseRange(start,end,step,fromRight){for(var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);length--;)result[fromRight?length:++index]=start,start+=step;return result}},"./node_modules/lodash/_createRange.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRange=__webpack_require__("./node_modules/lodash/_baseRange.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js"),toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=function createRange(fromRight){return function(start,end,step){return step&&"number"!=typeof step&&isIterateeCall(start,end,step)&&(end=step=void 0),start=toFinite(start),void 0===end?(end=start,start=0):end=toFinite(end),step=void 0===step?start<end?1:-1:toFinite(step),baseRange(start,end,step,fromRight)}}},"./node_modules/lodash/isEmpty.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseKeys=__webpack_require__("./node_modules/lodash/_baseKeys.js"),getTag=__webpack_require__("./node_modules/lodash/_getTag.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isBuffer=__webpack_require__("./node_modules/lodash/isBuffer.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js"),isTypedArray=__webpack_require__("./node_modules/lodash/isTypedArray.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function isEmpty(value){if(null==value)return!0;if(isArrayLike(value)&&(isArray(value)||"string"==typeof value||"function"==typeof value.splice||isBuffer(value)||isTypedArray(value)||isArguments(value)))return!value.length;var tag=getTag(value);if("[object Map]"==tag||"[object Set]"==tag)return!value.size;if(isPrototype(value))return!baseKeys(value).length;for(var key in value)if(hasOwnProperty.call(value,key))return!1;return!0}},"./node_modules/lodash/range.js":(module,__unused_webpack_exports,__webpack_require__)=>{var range=__webpack_require__("./node_modules/lodash/_createRange.js")();module.exports=range},"./node_modules/querystring/decode.js":module=>{"use strict";function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":module=>{"use strict";var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./node_modules/uc.micro/categories/Cc/regex.js":module=>{module.exports=/[\0-\x1F\x7F-\x9F]/},"./node_modules/uc.micro/categories/P/regex.js":module=>{module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},"./node_modules/uc.micro/categories/Z/regex.js":module=>{module.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/},"./node_modules/uc.micro/properties/Any/regex.js":module=>{module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},"./node_modules/url/node_modules/punycode/punycode.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),function(root){exports&&exports.nodeType,module&&module.nodeType;var freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g;freeGlobal.global!==freeGlobal&&freeGlobal.window!==freeGlobal&&freeGlobal.self;var punycode,maxInt=2147483647,regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},floor=Math.floor,stringFromCharCode=String.fromCharCode;function error(type){throw RangeError(errors[type])}function map(array,fn){for(var length=array.length,result=[];length--;)result[length]=fn(array[length]);return result}function mapDomain(string,fn){var parts=string.split("@"),result="";return parts.length>1&&(result=parts[0]+"@",string=parts[1]),result+map((string=string.replace(regexSeparators,".")).split("."),fn).join(".")}function ucs2decode(string){for(var value,extra,output=[],counter=0,length=string.length;counter<length;)(value=string.charCodeAt(counter++))>=55296&&value<=56319&&counter<length?56320==(64512&(extra=string.charCodeAt(counter++)))?output.push(((1023&value)<<10)+(1023&extra)+65536):(output.push(value),counter--):output.push(value);return output}function ucs2encode(array){return map(array,(function(value){var output="";return value>65535&&(output+=stringFromCharCode((value-=65536)>>>10&1023|55296),value=56320|1023&value),output+=stringFromCharCode(value)})).join("")}function digitToBasic(digit,flag){return digit+22+75*(digit<26)-((0!=flag)<<5)}function adapt(delta,numPoints,firstTime){var k=0;for(delta=firstTime?floor(delta/700):delta>>1,delta+=floor(delta/numPoints);delta>455;k+=36)delta=floor(delta/35);return floor(k+36*delta/(delta+38))}function decode(input){var out,basic,j,index,oldi,w,k,digit,t,baseMinusT,codePoint,output=[],inputLength=input.length,i=0,n=128,bias=72;for((basic=input.lastIndexOf("-"))<0&&(basic=0),j=0;j<basic;++j)input.charCodeAt(j)>=128&&error("not-basic"),output.push(input.charCodeAt(j));for(index=basic>0?basic+1:0;index<inputLength;){for(oldi=i,w=1,k=36;index>=inputLength&&error("invalid-input"),((digit=(codePoint=input.charCodeAt(index++))-48<10?codePoint-22:codePoint-65<26?codePoint-65:codePoint-97<26?codePoint-97:36)>=36||digit>floor((maxInt-i)/w))&&error("overflow"),i+=digit*w,!(digit<(t=k<=bias?1:k>=bias+26?26:k-bias));k+=36)w>floor(maxInt/(baseMinusT=36-t))&&error("overflow"),w*=baseMinusT;bias=adapt(i-oldi,out=output.length+1,0==oldi),floor(i/out)>maxInt-n&&error("overflow"),n+=floor(i/out),i%=out,output.splice(i++,0,n)}return ucs2encode(output)}function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,inputLength,handledCPCountPlusOne,baseMinusT,qMinusT,output=[];for(inputLength=(input=ucs2decode(input)).length,n=128,delta=0,bias=72,j=0;j<inputLength;++j)(currentValue=input[j])<128&&output.push(stringFromCharCode(currentValue));for(handledCPCount=basicLength=output.length,basicLength&&output.push("-");handledCPCount<inputLength;){for(m=maxInt,j=0;j<inputLength;++j)(currentValue=input[j])>=n&&currentValue<m&&(m=currentValue);for(m-n>floor((maxInt-delta)/(handledCPCountPlusOne=handledCPCount+1))&&error("overflow"),delta+=(m-n)*handledCPCountPlusOne,n=m,j=0;j<inputLength;++j)if((currentValue=input[j])<n&&++delta>maxInt&&error("overflow"),currentValue==n){for(q=delta,k=36;!(q<(t=k<=bias?1:k>=bias+26?26:k-bias));k+=36)qMinusT=q-t,baseMinusT=36-t,output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0))),q=floor(qMinusT/baseMinusT);output.push(stringFromCharCode(digitToBasic(q,0))),bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength),delta=0,++handledCPCount}++delta,++n}return output.join("")}punycode={version:"1.3.2",ucs2:{decode:ucs2decode,encode:ucs2encode},decode,encode,toASCII:function toASCII(input){return mapDomain(input,(function(string){return regexNonASCII.test(string)?"xn--"+encode(string):string}))},toUnicode:function toUnicode(input){return mapDomain(input,(function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string}))}},void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return punycode}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/url/url.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var punycode=__webpack_require__("./node_modules/url/node_modules/punycode/punycode.js"),util=__webpack_require__("./node_modules/url/util.js");function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}exports.parse=urlParse,exports.resolve=function urlResolve(source,relative){return urlParse(source,!1,!0).resolve(relative)},exports.resolveObject=function urlResolveObject(source,relative){return source?urlParse(source,!1,!0).resolveObject(relative):relative},exports.format=function urlFormat(obj){util.isString(obj)&&(obj=urlParse(obj));return obj instanceof Url?obj.format():Url.prototype.format.call(obj)},exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,unwise=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=__webpack_require__("./node_modules/querystring/index.js");function urlParse(url,parseQueryString,slashesDenoteHost){if(url&&util.isObject(url)&&url instanceof Url)return url;var u=new Url;return u.parse(url,parseQueryString,slashesDenoteHost),u}Url.prototype.parse=function(url,parseQueryString,slashesDenoteHost){if(!util.isString(url))throw new TypeError("Parameter 'url' must be a string, not "+typeof url);var queryIndex=url.indexOf("?"),splitter=-1!==queryIndex&&queryIndex<url.indexOf("#")?"?":"#",uSplit=url.split(splitter);uSplit[0]=uSplit[0].replace(/\\/g,"/");var rest=url=uSplit.join(splitter);if(rest=rest.trim(),!slashesDenoteHost&&1===url.split("#").length){var simplePath=simplePathPattern.exec(rest);if(simplePath)return this.path=rest,this.href=rest,this.pathname=simplePath[1],simplePath[2]?(this.search=simplePath[2],this.query=parseQueryString?querystring.parse(this.search.substr(1)):this.search.substr(1)):parseQueryString&&(this.search="",this.query={}),this}var proto=protocolPattern.exec(rest);if(proto){var lowerProto=(proto=proto[0]).toLowerCase();this.protocol=lowerProto,rest=rest.substr(proto.length)}if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes="//"===rest.substr(0,2);!slashes||proto&&hostlessProtocol[proto]||(rest=rest.substr(2),this.slashes=!0)}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){for(var auth,atSign,hostEnd=-1,i=0;i<hostEndingChars.length;i++){-1!==(hec=rest.indexOf(hostEndingChars[i]))&&(-1===hostEnd||hec<hostEnd)&&(hostEnd=hec)}-1!==(atSign=-1===hostEnd?rest.lastIndexOf("@"):rest.lastIndexOf("@",hostEnd))&&(auth=rest.slice(0,atSign),rest=rest.slice(atSign+1),this.auth=decodeURIComponent(auth)),hostEnd=-1;for(i=0;i<nonHostChars.length;i++){var hec;-1!==(hec=rest.indexOf(nonHostChars[i]))&&(-1===hostEnd||hec<hostEnd)&&(hostEnd=hec)}-1===hostEnd&&(hostEnd=rest.length),this.host=rest.slice(0,hostEnd),rest=rest.slice(hostEnd),this.parseHost(),this.hostname=this.hostname||"";var ipv6Hostname="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!ipv6Hostname)for(var hostparts=this.hostname.split(/\./),l=(i=0,hostparts.length);i<l;i++){var part=hostparts[i];if(part&&!part.match(hostnamePartPattern)){for(var newpart="",j=0,k=part.length;j<k;j++)part.charCodeAt(j)>127?newpart+="x":newpart+=part[j];if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i),notHost=hostparts.slice(i+1),bit=part.match(hostnamePartStart);bit&&(validParts.push(bit[1]),notHost.unshift(bit[2])),notHost.length&&(rest="/"+notHost.join(".")+rest),this.hostname=validParts.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),ipv6Hostname||(this.hostname=punycode.toASCII(this.hostname));var p=this.port?":"+this.port:"",h=this.hostname||"";this.host=h+p,this.href+=this.host,ipv6Hostname&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==rest[0]&&(rest="/"+rest))}if(!unsafeProtocol[lowerProto])for(i=0,l=autoEscape.length;i<l;i++){var ae=autoEscape[i];if(-1!==rest.indexOf(ae)){var esc=encodeURIComponent(ae);esc===ae&&(esc=escape(ae)),rest=rest.split(ae).join(esc)}}var hash=rest.indexOf("#");-1!==hash&&(this.hash=rest.substr(hash),rest=rest.slice(0,hash));var qm=rest.indexOf("?");if(-1!==qm?(this.search=rest.substr(qm),this.query=rest.substr(qm+1),parseQueryString&&(this.query=querystring.parse(this.query)),rest=rest.slice(0,qm)):parseQueryString&&(this.search="",this.query={}),rest&&(this.pathname=rest),slashedProtocol[lowerProto]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){p=this.pathname||"";var s=this.search||"";this.path=p+s}return this.href=this.format(),this},Url.prototype.format=function(){var auth=this.auth||"";auth&&(auth=(auth=encodeURIComponent(auth)).replace(/%3A/i,":"),auth+="@");var protocol=this.protocol||"",pathname=this.pathname||"",hash=this.hash||"",host=!1,query="";this.host?host=auth+this.host:this.hostname&&(host=auth+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(host+=":"+this.port)),this.query&&util.isObject(this.query)&&Object.keys(this.query).length&&(query=querystring.stringify(this.query));var search=this.search||query&&"?"+query||"";return protocol&&":"!==protocol.substr(-1)&&(protocol+=":"),this.slashes||(!protocol||slashedProtocol[protocol])&&!1!==host?(host="//"+(host||""),pathname&&"/"!==pathname.charAt(0)&&(pathname="/"+pathname)):host||(host=""),hash&&"#"!==hash.charAt(0)&&(hash="#"+hash),search&&"?"!==search.charAt(0)&&(search="?"+search),protocol+host+(pathname=pathname.replace(/[?#]/g,(function(match){return encodeURIComponent(match)})))+(search=search.replace("#","%23"))+hash},Url.prototype.resolve=function(relative){return this.resolveObject(urlParse(relative,!1,!0)).format()},Url.prototype.resolveObject=function(relative){if(util.isString(relative)){var rel=new Url;rel.parse(relative,!1,!0),relative=rel}for(var result=new Url,tkeys=Object.keys(this),tk=0;tk<tkeys.length;tk++){var tkey=tkeys[tk];result[tkey]=this[tkey]}if(result.hash=relative.hash,""===relative.href)return result.href=result.format(),result;if(relative.slashes&&!relative.protocol){for(var rkeys=Object.keys(relative),rk=0;rk<rkeys.length;rk++){var rkey=rkeys[rk];"protocol"!==rkey&&(result[rkey]=relative[rkey])}return slashedProtocol[result.protocol]&&result.hostname&&!result.pathname&&(result.path=result.pathname="/"),result.href=result.format(),result}if(relative.protocol&&relative.protocol!==result.protocol){if(!slashedProtocol[relative.protocol]){for(var keys=Object.keys(relative),v=0;v<keys.length;v++){var k=keys[v];result[k]=relative[k]}return result.href=result.format(),result}if(result.protocol=relative.protocol,relative.host||hostlessProtocol[relative.protocol])result.pathname=relative.pathname;else{for(var relPath=(relative.pathname||"").split("/");relPath.length&&!(relative.host=relPath.shift()););relative.host||(relative.host=""),relative.hostname||(relative.hostname=""),""!==relPath[0]&&relPath.unshift(""),relPath.length<2&&relPath.unshift(""),result.pathname=relPath.join("/")}if(result.search=relative.search,result.query=relative.query,result.host=relative.host||"",result.auth=relative.auth,result.hostname=relative.hostname||relative.host,result.port=relative.port,result.pathname||result.search){var p=result.pathname||"",s=result.search||"";result.path=p+s}return result.slashes=result.slashes||relative.slashes,result.href=result.format(),result}var isSourceAbs=result.pathname&&"/"===result.pathname.charAt(0),isRelAbs=relative.host||relative.pathname&&"/"===relative.pathname.charAt(0),mustEndAbs=isRelAbs||isSourceAbs||result.host&&relative.pathname,removeAllDots=mustEndAbs,srcPath=result.pathname&&result.pathname.split("/")||[],psychotic=(relPath=relative.pathname&&relative.pathname.split("/")||[],result.protocol&&!slashedProtocol[result.protocol]);if(psychotic&&(result.hostname="",result.port=null,result.host&&(""===srcPath[0]?srcPath[0]=result.host:srcPath.unshift(result.host)),result.host="",relative.protocol&&(relative.hostname=null,relative.port=null,relative.host&&(""===relPath[0]?relPath[0]=relative.host:relPath.unshift(relative.host)),relative.host=null),mustEndAbs=mustEndAbs&&(""===relPath[0]||""===srcPath[0])),isRelAbs)result.host=relative.host||""===relative.host?relative.host:result.host,result.hostname=relative.hostname||""===relative.hostname?relative.hostname:result.hostname,result.search=relative.search,result.query=relative.query,srcPath=relPath;else if(relPath.length)srcPath||(srcPath=[]),srcPath.pop(),srcPath=srcPath.concat(relPath),result.search=relative.search,result.query=relative.query;else if(!util.isNullOrUndefined(relative.search)){if(psychotic)result.hostname=result.host=srcPath.shift(),(authInHost=!!(result.host&&result.host.indexOf("@")>0)&&result.host.split("@"))&&(result.auth=authInHost.shift(),result.host=result.hostname=authInHost.shift());return result.search=relative.search,result.query=relative.query,util.isNull(result.pathname)&&util.isNull(result.search)||(result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")),result.href=result.format(),result}if(!srcPath.length)return result.pathname=null,result.search?result.path="/"+result.search:result.path=null,result.href=result.format(),result;for(var last=srcPath.slice(-1)[0],hasTrailingSlash=(result.host||relative.host||srcPath.length>1)&&("."===last||".."===last)||""===last,up=0,i=srcPath.length;i>=0;i--)"."===(last=srcPath[i])?srcPath.splice(i,1):".."===last?(srcPath.splice(i,1),up++):up&&(srcPath.splice(i,1),up--);if(!mustEndAbs&&!removeAllDots)for(;up--;up)srcPath.unshift("..");!mustEndAbs||""===srcPath[0]||srcPath[0]&&"/"===srcPath[0].charAt(0)||srcPath.unshift(""),hasTrailingSlash&&"/"!==srcPath.join("/").substr(-1)&&srcPath.push("");var authInHost,isAbsolute=""===srcPath[0]||srcPath[0]&&"/"===srcPath[0].charAt(0);psychotic&&(result.hostname=result.host=isAbsolute?"":srcPath.length?srcPath.shift():"",(authInHost=!!(result.host&&result.host.indexOf("@")>0)&&result.host.split("@"))&&(result.auth=authInHost.shift(),result.host=result.hostname=authInHost.shift()));return(mustEndAbs=mustEndAbs||result.host&&srcPath.length)&&!isAbsolute&&srcPath.unshift(""),srcPath.length?result.pathname=srcPath.join("/"):(result.pathname=null,result.path=null),util.isNull(result.pathname)&&util.isNull(result.search)||(result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")),result.auth=relative.auth||result.auth,result.slashes=result.slashes||relative.slashes,result.href=result.format(),result},Url.prototype.parseHost=function(){var host=this.host,port=portPattern.exec(host);port&&(":"!==(port=port[0])&&(this.port=port.substr(1)),host=host.substr(0,host.length-port.length)),host&&(this.hostname=host)}},"./node_modules/url/util.js":module=>{"use strict";module.exports={isString:function(arg){return"string"==typeof arg},isObject:function(arg){return"object"==typeof arg&&null!==arg},isNull:function(arg){return null===arg},isNullOrUndefined:function(arg){return null==arg}}}}]);