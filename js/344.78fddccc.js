(self["webpackChunkcharity"]=self["webpackChunkcharity"]||[]).push([[344],{1223:function(t,e,n){var s=n(5112),i=n(30),r=n(3070),o=s("unscopables"),a=Array.prototype;void 0==a[o]&&r.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5381:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var s,i,r,o=n(5381),a=n(9781),u=n(7854),h=n(614),c=n(111),l=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(1320),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),E=n(5112),T=n(9711),b=u.Int8Array,S=b&&b.prototype,I=u.Uint8ClampedArray,A=I&&I.prototype,C=b&&v(b),_=S&&v(S),N=Object.prototype,k=u.TypeError,D=E("toStringTag"),R=T("TYPED_ARRAY_TAG"),L=T("TYPED_ARRAY_CONSTRUCTOR"),x=o&&!!w&&"Opera"!==d(u.opera),M=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},P=function(t){if(!c(t))return!1;var e=d(t);return"DataView"===e||l(O,e)||l(V,e)},F=function(t){if(!c(t))return!1;var e=d(t);return l(O,e)||l(V,e)},U=function(t){if(F(t))return t;throw k("Target is not a typed array")},q=function(t){if(h(t)&&(!w||y(C,t)))return t;throw k(f(t)+" is not a typed array constructor")},B=function(t,e,n,s){if(a){if(n)for(var i in O){var r=u[i];if(r&&l(r.prototype,t))try{delete r.prototype[t]}catch(o){try{r.prototype[t]=e}catch(h){}}}_[t]&&!n||g(_,t,n?e:x&&S[t]||e,s)}},j=function(t,e,n){var s,i;if(a){if(w){if(n)for(s in O)if(i=u[s],i&&l(i,t))try{delete i[t]}catch(r){}if(C[t]&&!n)return;try{return g(C,t,n?e:x&&C[t]||e)}catch(r){}}for(s in O)i=u[s],!i||i[t]&&!n||g(i,t,e)}};for(s in O)i=u[s],r=i&&i.prototype,r?p(r,L,i):x=!1;for(s in V)i=u[s],r=i&&i.prototype,r&&p(r,L,i);if((!x||!h(C)||C===Function.prototype)&&(C=function(){throw k("Incorrect invocation")},x))for(s in O)u[s]&&w(u[s],C);if((!x||!_||_===N)&&(_=C.prototype,x))for(s in O)u[s]&&w(u[s].prototype,_);if(x&&v(A)!==_&&w(A,_),a&&!l(_,D))for(s in M=!0,m(_,D,{get:function(){return c(this)?this[R]:void 0}}),O)u[s]&&p(u[s],R,s);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:x,TYPED_ARRAY_CONSTRUCTOR:L,TYPED_ARRAY_TAG:M&&R,aTypedArray:U,aTypedArrayConstructor:q,exportTypedArrayMethod:B,exportTypedArrayStaticMethod:j,isView:P,isTypedArray:F,TypedArray:C,TypedArrayPrototype:_}},8544:function(t,e,n){var s=n(7293);t.exports=!s((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},490:function(t,e,n){var s=n(5005);t.exports=s("document","documentElement")},30:function(t,e,n){var s,i=n(9670),r=n(6048),o=n(748),a=n(3501),u=n(490),h=n(317),c=n(6200),l=">",d="<",f="prototype",p="script",g=c("IE_PROTO"),m=function(){},y=function(t){return d+p+l+t+d+"/"+p+l},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=h("iframe"),n="java"+p+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},E=function(){try{s=new ActiveXObject("htmlfile")}catch(e){}E="undefined"!=typeof document?document.domain&&s?v(s):w():v(s);var t=o.length;while(t--)delete E[f][o[t]];return E()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=E(),void 0===e?n:r.f(n,e)}},6048:function(t,e,n){var s=n(9781),i=n(3353),r=n(3070),o=n(9670),a=n(5656),u=n(1956);e.f=s&&!i?Object.defineProperties:function(t,e){o(t);var n,s=a(e),i=u(e),h=i.length,c=0;while(h>c)r.f(t,n=i[c++],s[n]);return t}},9518:function(t,e,n){var s=n(7854),i=n(2597),r=n(614),o=n(7908),a=n(6200),u=n(8544),h=a("IE_PROTO"),c=s.Object,l=c.prototype;t.exports=u?c.getPrototypeOf:function(t){var e=o(t);if(i(e,h))return e[h];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},1956:function(t,e,n){var s=n(6324),i=n(748);t.exports=Object.keys||function(t){return s(t,i)}},4590:function(t,e,n){var s=n(7854),i=n(3002),r=s.RangeError;t.exports=function(t,e){var n=i(t);if(n%e)throw r("Wrong offset");return n}},3002:function(t,e,n){var s=n(7854),i=n(9303),r=s.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw r("The argument can't be less than 0");return e}},2262:function(t,e,n){"use strict";var s=n(2109),i=n(7908),r=n(6244),o=n(9303),a=n(1223);s({target:"Array",proto:!0},{at:function(t){var e=i(this),n=r(e),s=o(t),a=s>=0?s:n+s;return a<0||a>=n?void 0:e[a]}}),a("at")},4506:function(t,e,n){"use strict";var s=n(2109),i=n(1702),r=n(4488),o=n(9303),a=n(1340),u=n(7293),h=i("".charAt),c=u((function(){return"\ud842"!=="𠮷".at(-2)}));s({target:"String",proto:!0,forced:c},{at:function(t){var e=a(r(this)),n=e.length,s=o(t),i=s>=0?s:n+s;return i<0||i>=n?void 0:h(e,i)}})},8675:function(t,e,n){"use strict";var s=n(260),i=n(6244),r=n(9303),o=s.aTypedArray,a=s.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=i(e),s=r(t),a=s>=0?s:n+s;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var s=n(7854),i=n(6916),r=n(260),o=n(6244),a=n(4590),u=n(7908),h=n(7293),c=s.RangeError,l=s.Int8Array,d=l&&l.prototype,f=d&&d.set,p=r.aTypedArray,g=r.exportTypedArrayMethod,m=!h((function(){var t=new Uint8ClampedArray(2);return i(f,t,{length:1,0:3},1),3!==t[1]})),y=m&&r.NATIVE_ARRAY_BUFFER_VIEWS&&h((function(){var t=new l(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=u(t);if(m)return i(f,this,n,e);var s=this.length,r=o(n),h=0;if(r+e>s)throw c("Wrong length");while(h<r)this[e+h]=n[h++]}),!m||y)},7344:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _l}});var s,i=n(3396),r=n(9242),o=n(4870),a=(n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(9684)),u=n(7142),h=n(5168),c=n(223),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},d={},f=f||{},p=l||self;function g(){}function m(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function y(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,w)&&t[w]||(t[w]=++E)}var w="closure_uid_"+(1e9*Math.random()>>>0),E=0;function T(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:b,S.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function A(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function C(){this.s=this.s,this.o=this.o}var _=0,N={};C.prototype.s=!1,C.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=v(this);delete N[t]}},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},D=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function R(t){t:{var e=Xn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function L(t){return Array.prototype.concat.apply([],arguments)}function x(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function M(t){return/^[\s\xa0]*$/.test(t)}var O,V=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P(t,e){return-1!=t.indexOf(e)}function F(t,e){return t<e?-1:t>e?1:0}t:{var U=p.navigator;if(U){var q=U.userAgent;if(q){O=q;break t}}O=""}function B(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function j(t){const e={};for(const n in t)e[n]=t[n];return e}var K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<K.length;e++)n=K[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function G(t){return G[" "](t),t}function z(t){var e=rt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}G[" "]=g;var H,W=P(O,"Opera"),X=P(O,"Trident")||P(O,"MSIE"),Y=P(O,"Edge"),Q=Y||X,J=P(O,"Gecko")&&!(P(O.toLowerCase(),"webkit")&&!P(O,"Edge"))&&!(P(O,"Trident")||P(O,"MSIE"))&&!P(O,"Edge"),Z=P(O.toLowerCase(),"webkit")&&!P(O,"Edge");function tt(){var t=p.document;return t?t.documentMode:void 0}t:{var et="",nt=function(){var t=O;return J?/rv:([^\);]+)(\)|;)/.exec(t):Y?/Edge\/([\d\.]+)/.exec(t):X?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Z?/WebKit\/(\S+)/.exec(t):W?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(nt&&(et=nt?nt[1]:""),X){var st=tt();if(null!=st&&st>parseFloat(et)){H=String(st);break t}}H=et}var it,rt={};function ot(){return z((function(){let t=0;const e=V(String(H)).split("."),n=V("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=F(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||F(0==i[2].length,0==r[2].length)||F(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(p.document&&X){var at=tt();it=at||(parseInt(H,10)||void 0)}else it=void 0;var ut=it,ht=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{p.addEventListener("test",g,e),p.removeEventListener("test",g,e)}catch(n){}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J){t:{try{G(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:dt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}ct.prototype.h=function(){this.defaultPrevented=!0},A(lt,ct);var dt={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),pt=0;function gt(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++pt,this.ca=this.fa=!1}function mt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function yt(t){this.src=t,this.g={},this.h=0}function vt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=k(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(mt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function wt(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}yt.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=wt(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new gt(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var Et="closure_lm_"+(1e6*Math.random()|0),Tt={};function bt(t,e,n,s,i){if(s&&s.once)return At(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bt(t,e[r],n,s,i);return null}return n=Lt(n),t&&t[ft]?t.N(e,n,y(s)?!!s.capture:!!s,i):St(t,e,n,!1,s,i)}function St(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=y(i)?!!i.capture:!!i,a=Dt(t);if(a||(t[Et]=a=new yt(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=It(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ht||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Nt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function It(){function t(n){return e.call(t.src,t.listener,n)}var e=kt;return t}function At(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)At(t,e[r],n,s,i);return null}return n=Lt(n),t&&t[ft]?t.O(e,n,y(s)?!!s.capture:!!s,i):St(t,e,n,!0,s,i)}function Ct(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ct(t,e[r],n,s,i);else s=y(s)?!!s.capture:!!s,n=Lt(n),t&&t[ft]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=wt(r,n,s,i),-1<n&&(mt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Dt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wt(e,n,s,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ft])vt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Nt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Dt(e))?(vt(n,t),0==n.h&&(n.src=null,e[Et]=null)):mt(t)}}}function Nt(t){return t in Tt?Tt[t]:Tt[t]="on"+t}function kt(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&_t(t),t=n.call(s,e)}return t}function Dt(t){return t=t[Et],t instanceof yt?t:null}var Rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lt(t){return"function"===typeof t?t:(t[Rt]||(t[Rt]=function(e){return t.handleEvent(e)}),t[Rt])}function xt(){C.call(this),this.i=new yt(this),this.P=this,this.I=null}function Mt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var i=e;e=new ct(s,t),$(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ot(o,s,!0,e)&&i}if(o=e.g=t,i=Ot(o,s,!0,e)&&i,i=Ot(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ot(o,s,!1,e)&&i}function Ot(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&vt(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}A(xt,C),xt.prototype[ft]=!0,xt.prototype.removeEventListener=function(t,e,n,s){Ct(this,t,e,n,s)},xt.prototype.M=function(){if(xt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)mt(n[s]);delete e.g[t],e.h--}}this.I=null},xt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},xt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Vt=p.JSON.stringify;function Pt(){var t=zt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ft{constructor(){this.h=this.g=null}add(t,e){const n=qt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ut,qt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Bt),(t=>t.reset()));class Bt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function jt(t){p.setTimeout((()=>{throw t}),0)}function Kt(t,e){Ut||$t(),Gt||(Ut(),Gt=!0),zt.add(t,e)}function $t(){var t=p.Promise.resolve(void 0);Ut=function(){t.then(Ht)}}var Gt=!1,zt=new Ft;function Ht(){for(var t;t=Pt();){try{t.h.call(t.g)}catch(n){jt(n)}var e=qt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gt=!1}function Wt(t,e){xt.call(this),this.h=t||1,this.g=e||p,this.j=S(this.kb,this),this.l=Date.now()}function Xt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Yt(t,e,n){if("function"===typeof t)n&&(t=S(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:p.setTimeout(t,e||0)}function Qt(t){t.g=Yt((()=>{t.g=null,t.i&&(t.i=!1,Qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}A(Wt,xt),s=Wt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Mt(this,"tick"),this.da&&(Xt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Wt.Z.M.call(this),Xt(this),delete this.g};class Jt extends C{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qt(this)}M(){super.M(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(t){C.call(this),this.h=t,this.g={}}A(Zt,C);var te=[];function ee(t,e,n,s){Array.isArray(n)||(n&&(te[0]=n.toString()),n=te);for(var i=0;i<n.length;i++){var r=bt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ne(t){B(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function se(){this.g=!0}function ie(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function re(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function oe(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ue(t,n)+(s?" "+s:"")}))}function ae(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ue(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Vt(n)}catch(a){return e}}Zt.prototype.M=function(){Zt.Z.M.call(this),ne(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},se.prototype.Aa=function(){this.g=!1},se.prototype.info=function(){};var he={},ce=null;function le(){return ce=ce||new xt}function de(t){ct.call(this,he.Ma,t)}function fe(t){const e=le();Mt(e,new de(e,t))}function pe(t,e){ct.call(this,he.STAT_EVENT,t),this.stat=e}function ge(t){const e=le();Mt(e,new pe(e,t))}function me(t,e){ct.call(this,he.Na,t),this.size=e}function ye(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return p.setTimeout((function(){t()}),e)}he.Ma="serverreachability",A(de,ct),he.STAT_EVENT="statevent",A(pe,ct),he.Na="timingevent",A(me,ct);var ve={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},we={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ee(){}function Te(t){return t.h||(t.h=t.i())}function be(){}Ee.prototype.h=null;var Se,Ie={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ae(){ct.call(this,"d")}function Ce(){ct.call(this,"c")}function _e(){}function Ne(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Zt(this),this.P=De,t=Q?125:void 0,this.W=new Wt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}A(Ae,ct),A(Ce,ct),A(_e,Ee),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},Se=new _e;var De=45e3,Re={},Le={};function xe(t,e,n){t.K=1,t.v=rn(Je(e)),t.s=n,t.U=!0,Me(t,null)}function Me(t,e){t.F=Date.now(),Fe(t),t.A=Je(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),En(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ke,t.g=Cs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Jt(S(t.Ia,t,t.g),t.O)),ee(t.V,t.g,"readystatechange",t.gb),e=t.H?j(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),fe(1),ie(t.j,t.u,t.A,t.m,t.X,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ve(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Pe(t,n),s==Le){4==e&&(t.o=4,ge(14),i=!1),oe(t.j,t.m,null,"[Incomplete Response]");break}if(s==Re){t.o=4,ge(15),oe(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}oe(t.j,t.m,s,null),Ke(t,s)}Oe(t)&&s!=Le&&s!=Re&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ge(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vs(e),e.L=!0,ge(11))):(oe(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),Be(t))}function Pe(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Le:(n=Number(e.substring(n,s)),isNaN(n)?Re:(s+=1,s+n>e.length?Le:(e=e.substr(s,n),t.C=s+n,e)))}function Fe(t){t.Y=Date.now()+t.P,Ue(t,t.P)}function Ue(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ye(S(t.eb,t),e)}function qe(t){t.B&&(p.clearTimeout(t.B),t.B=null)}function Be(t){0==t.l.G||t.I||Ts(t.l,t)}function je(t){qe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Xt(t.W),ne(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ke(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Nn(n.i,t)))if(n.I=t.N,!t.J&&Nn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Es(n),us(n)}ys(n),ge(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ye(S(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Ss(n,11)}else if((t.J||n.g==t)&&Es(n),!M(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"===typeof c&&0<c&&(s=1.5*c,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(P(t,"spdy")||P(t,"quic")||P(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(kn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,sn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=As(s,s.H?s.la:null,s.W),o.J){Dn(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(qe(a),Fe(a)),s.g=o}else ms(s);0<n.l.length&&ls(n)}else"stop"!=h[0]&&"close"!=h[0]||Ss(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Ss(n,7):as(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}fe(4)}catch(h){}}function $e(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(m(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Ge(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(m(t)||"string"===typeof t)D(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(m(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=$e(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ze)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];We(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],We(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ne.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==es(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const c=es(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>c)&&(3!=c||Q||this.g&&(this.h.h||this.g.ga()||ns(this.g)))){this.I||4!=c||7==e||fe(8==e||0>=l?3:2),qe(this);var n=this.g.ba();this.N=n;e:if(Oe(this)){var s=ns(this.g);t="";var i=s.length,r=4==es(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){je(this),Be(this);var o="";break e}this.h.i=new p.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,re(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ge(12),je(this),Be(this);break t}oe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ke(this,n)}this.U?(Ve(this,c,o),Q&&this.i&&3==c&&(ee(this.V,this.W,"tick",this.fb),this.W.start())):(oe(this.j,this.m,o,null),Ke(this,o)),4==c&&je(this),this.i&&!this.I&&(4==c?Ts(this.l,this):(this.i=!1,Fe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ge(12)):(this.o=0,ge(13)),je(this),Be(this)}}}catch(c){}},s.fb=function(){if(this.g){var t=es(this.g),e=this.g.ga();this.C<e.length&&(qe(this),Ve(this,t,e),this.i&&4!=t&&Fe(this))}},s.cancel=function(){this.I=!0,je(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ae(this.j,this.A),2!=this.K&&(fe(3),ge(17)),je(this),this.o=2,Be(this)):Ue(this,this.Y-t)},s=ze.prototype,s.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return He(this),this.g.concat()},s.get=function(t,e){return We(this.h,t)?this.h[t]:e},s.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Xe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ye(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=void 0!==e?e:t.g,Ze(this,t.j),this.s=t.s,tn(this,t.i),en(this,t.m),this.l=t.l,e=t.h;var n=new mn;n.i=e.i,e.g&&(n.g=new ze(e.g),n.h=e.h),nn(this,n),this.o=t.o}else t&&(n=String(t).match(Xe))?(this.g=!!e,Ze(this,n[1]||"",!0),this.s=un(n[2]||""),tn(this,n[3]||"",!0),en(this,n[4]),this.l=un(n[5]||"",!0),nn(this,n[6]||"",!0),this.o=un(n[7]||"")):(this.g=!!e,this.h=new mn(null,this.g))}function Je(t){return new Qe(t)}function Ze(t,e,n){t.j=n?un(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tn(t,e,n){t.i=n?un(e,!0):e}function en(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nn(t,e,n){e instanceof mn?(t.h=e,bn(t.h,t.g)):(n||(e=hn(e,pn)),t.h=new mn(e,t.g))}function sn(t,e,n){t.h.set(e,n)}function rn(t){return sn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function on(t){return t instanceof Qe?Je(t):new Qe(t,void 0)}function an(t,e,n,s){var i=new Qe(null,void 0);return t&&Ze(i,t),e&&tn(i,e),n&&en(i,n),s&&(i.l=s),i}function un(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,cn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hn(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(hn(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(hn(n,"/"==n.charAt(0)?fn:dn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hn(n,gn)),t.join("")};var ln=/[#\/\?@]/g,dn=/[#\?:]/g,fn=/[#\?]/g,pn=/[#\?@]/g,gn=/#/g;function mn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new ze,t.h=0,t.i&&Ye(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vn(t,e){yn(t),e=Tn(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function wn(t,e){return yn(t),e=Tn(t,e),We(t.g.h,e)}function En(t,e,n){vn(t,e),0<n.length&&(t.i=null,t.g.set(Tn(t,e),x(n)),t.h+=n.length)}function Tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vn(this,e),En(this,n,t))}),t)),t.j=e}s=mn.prototype,s.add=function(t,e){yn(this),this.i=null,t=Tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){yn(this),this.g.forEach((function(n,s){D(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){yn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},s.R=function(t){yn(this);var e=[];if("string"===typeof t)wn(this,t)&&(e=L(e,this.g.get(Tn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=L(e,t[n])}return e},s.set=function(t,e){return yn(this),this.i=null,t=Tn(this,t),wn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var Sn=class{constructor(t,e){this.h=t,this.g=e}};function In(t){this.l=t||An,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(p.g&&p.g.Ea&&p.g.Ea()&&p.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var An=10;function Cn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function Nn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function kn(t,e){t.g?t.g.add(e):t.h=e}function Dn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Rn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return x(t.i)}function Ln(){}function xn(){this.g=new Ln}function Mn(t,e,n){const s=n||"";try{Ge(t,(function(t,n){let i=t;y(t)&&(i=Vt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function On(t,e){const n=new se;if(p.Image){const s=new Image;s.onload=I(Vn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=I(Vn,n,s,"TestLoadImage: error",!1,e),s.onabort=I(Vn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=I(Vn,n,s,"TestLoadImage: timeout",!1,e),p.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Vn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Pn(t){this.l=t.$b||null,this.j=t.ib||!1}function Fn(t,e){xt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=Rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ln.prototype.stringify=function(t){return p.JSON.stringify(t,void 0)},Ln.prototype.parse=function(t){return p.JSON.parse(t,void 0)},A(Pn,Ee),Pn.prototype.g=function(){return new Fn(this.l,this.j)},Pn.prototype.i=function(t){return function(){return t}}({}),A(Fn,xt);var Un=0;function qn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Bn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jn(t)}function jn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Fn.prototype,s.open=function(t,e){if(this.readyState!=Un)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||p).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Bn(this)),this.readyState=Un},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof p.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bn(this):jn(this),3==this.readyState&&qn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Bn(this))},s.Ta=function(t){this.g&&(this.response=t,Bn(this))},s.ha=function(){this.g&&Bn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Kn=p.JSON.parse;function $n(t){xt.call(this),this.headers=new ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gn,this.K=this.L=!1}A($n,xt);var Gn="",zn=/^https?$/i,Hn=["POST","PUT"];function Wn(t){return X&&ot()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Xn(t){return"content-type"==t.toLowerCase()}function Yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qn(t),Zn(t)}function Qn(t){t.D||(t.D=!0,Mt(t,"complete"),Mt(t,"error"))}function Jn(t){if(t.h&&"undefined"!=typeof f&&(!t.C[1]||4!=es(t)||2!=t.ba()))if(t.v&&4==es(t))Yt(t.Fa,0,t);else if(Mt(t,"readystatechange"),4==es(t)){t.h=!1;try{const u=t.ba();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var i=String(t.H).match(Xe)[1]||null;if(!i&&p.self&&p.self.location){var r=p.self.location.protocol;i=r.substr(0,r.length-1)}s=!zn.test(i?i.toLowerCase():"")}n=s}if(n)Mt(t,"complete"),Mt(t,"success");else{t.m=6;try{var o=2<es(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Qn(t)}}finally{Zn(t)}}}function Zn(t,e){if(t.g){ts(t);const s=t.g,i=t.C[0]?g:null;t.g=null,t.C=null,e||Mt(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function ts(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(p.clearTimeout(t.A),t.A=null)}function es(t){return t.g?t.g.readyState:0}function ns(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Gn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ss(t){let e="";return B(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function is(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ss(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):sn(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function os(t){this.za=0,this.l=[],this.h=new se,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rs("baseRetryDelayMs",5e3,t),this.$a=rs("retryDelaySeedMs",1e4,t),this.Ya=rs("forwardChannelMaxRetries",2,t),this.ra=rs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new In(t&&t.concurrentRequestLimit),this.Ca=new xn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function as(t){if(hs(t),3==t.G){var e=t.V++,n=Je(t.F);sn(n,"SID",t.J),sn(n,"RID",e),sn(n,"TYPE","terminate"),ps(t,n),e=new Ne(t,t.h,e,void 0),e.K=2,e.v=rn(Je(n)),n=!1,p.navigator&&p.navigator.sendBeacon&&(n=p.navigator.sendBeacon(e.v.toString(),"")),!n&&p.Image&&((new Image).src=e.v,n=!0),n||(e.g=Cs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fe(e)}Is(t)}function us(t){t.g&&(vs(t),t.g.cancel(),t.g=null)}function hs(t){us(t),t.u&&(p.clearTimeout(t.u),t.u=null),Es(t),t.i.cancel(),t.m&&("number"===typeof t.m&&p.clearTimeout(t.m),t.m=null)}function cs(t,e){t.l.push(new Sn(t.Za++,e)),3==t.G&&ls(t)}function ls(t){Cn(t.i)||t.m||(t.m=!0,Kt(t.Ha,t),t.C=0)}function ds(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ye(S(t.Ha,t,e),bs(t,t.C)),t.C++,!0))}function fs(t,e){var n;n=e?e.m:t.V++;const s=Je(t.F);sn(s,"SID",t.J),sn(s,"RID",n),sn(s,"AID",t.U),ps(t,s),t.o&&t.s&&is(s,t.o,t.s),n=new Ne(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kn(t.i,n),xe(n,s,e)}function ps(t,e){t.j&&Ge({},(function(t,n){sn(e,n,t)}))}function gs(t,e,n){n=Math.min(t.l.length,n);var s=t.j?S(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Mn(a,t,"req"+n+"_")}catch(Zs){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function ms(t){t.g||t.u||(t.Y=1,Kt(t.Ga,t),t.A=0)}function ys(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ye(S(t.Ga,t),bs(t,t.A)),t.A++,!0)}function vs(t){null!=t.B&&(p.clearTimeout(t.B),t.B=null)}function ws(t){t.g=new Ne(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Je(t.oa);sn(e,"RID","rpc"),sn(e,"SID",t.J),sn(e,"CI",t.N?"0":"1"),sn(e,"AID",t.U),ps(t,e),sn(e,"TYPE","xmlhttp"),t.o&&t.s&&is(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=rn(Je(e)),n.s=null,n.U=!0,Me(n,t)}function Es(t){null!=t.v&&(p.clearTimeout(t.v),t.v=null)}function Ts(t,e){var n=null;if(t.g==e){Es(t),vs(t),t.g=null;var s=2}else{if(!Nn(t.i,e))return;n=e.D,Dn(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=le(),Mt(s,new me(s,n,e,i)),ls(t)}else ms(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&ds(t,e)||2==s&&ys(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ss(t,5);break;case 4:Ss(t,10);break;case 3:Ss(t,6);break;default:Ss(t,2)}}function bs(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ss(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=S(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),p.location&&"http"==p.location.protocol||Ze(n,"https"),rn(n)),On(n.toString(),s)}else ge(2);t.G=0,t.j&&t.j.va(e),Is(t),hs(t)}function Is(t){t.G=0,t.I=-1,t.j&&(0==Rn(t.i).length&&0==t.l.length||(t.i.i.length=0,x(t.l),t.l.length=0),t.j.ua())}function As(t,e,n){let s=on(n);if(""!=s.i)e&&tn(s,e+"."+s.i),en(s,s.m);else{const t=p.location;s=an(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&B(t.aa,(function(t,e){sn(s,e,t)})),e=t.D,n=t.sa,e&&n&&sn(s,e,n),sn(s,"VER",t.ma),ps(t,s),s}function Cs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $n(new Pn({ib:!0})):new $n(t.qa),e.L=t.H,e}function _s(){}function Ns(){if(X&&!(10<=Number(ut)))throw Error("Environmental error: no available transport.")}function ks(t,e){xt.call(this),this.g=new os(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!M(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!M(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}function Ds(t){Ae.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Rs(){Ce.call(this),this.status=1}function Ls(t){this.g=t}s=$n.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Se.g(),this.C=this.u?Te(this.u):Te(Se),this.g.onreadystatechange=S(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Yn(this,r)}t=n||"";const i=new ze(this.headers);s&&Ge(s,(function(t,e){i.set(e,t)})),s=R(i.T()),n=p.FormData&&t instanceof p.FormData,!(0<=k(Hn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ts(this),0<this.B&&((this.K=Wn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=S(this.pa,this)):this.A=Yt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yn(this,r)}},s.pa=function(){"undefined"!=typeof f&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Mt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Mt(this,"complete"),Mt(this,"abort"),Zn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zn(this,!0)),$n.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},s.cb=function(){Jn(this)},s.ba=function(){try{return 2<es(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Kn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=os.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ne(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=j(r),$(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=gs(this,i,e),n=Je(this.F),sn(n,"RID",t),sn(n,"CVER",22),this.D&&sn(n,"X-HTTP-Session-Id",this.D),ps(this,n),this.o&&r&&is(n,this.o,r),kn(this.i,i),this.Ra&&sn(n,"TYPE","init"),this.ja?(sn(n,"$req",e),sn(n,"SID","null"),i.$=!0,xe(i,n,null)):xe(i,n,e),this.G=2}}else 3==this.G&&(t?fs(this,t):0==this.l.length||Cn(this.i)||fs(this))},s.Ga=function(){if(this.u=null,ws(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ye(S(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ge(10),us(this),ws(this))},s.ab=function(){null!=this.v&&(this.v=null,us(this),ys(this),ge(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ge(2)):(this.h.info("Failed to ping google.com"),ge(1))},s=_s.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ns.prototype.g=function(t,e){return new ks(t,e)},A(ks,xt),ks.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Kt(S(t.hb,t,e))),ge(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=As(t,null,t.W),ls(t)},ks.prototype.close=function(){as(this.g)},ks.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,cs(this.g,e)}else this.v?(e={},e.__data__=Vt(t),cs(this.g,e)):cs(this.g,t)},ks.prototype.M=function(){this.g.j=null,delete this.j,as(this.g),delete this.g,ks.Z.M.call(this)},A(Ds,Ae),A(Rs,Ce),A(Ls,_s),Ls.prototype.xa=function(){Mt(this.g,"a")},Ls.prototype.wa=function(t){Mt(this.g,new Ds(t))},Ls.prototype.va=function(t){Mt(this.g,new Rs(t))},Ls.prototype.ua=function(){Mt(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,ks.prototype.send=ks.prototype.u,ks.prototype.open=ks.prototype.m,ks.prototype.close=ks.prototype.close,ve.NO_ERROR=0,ve.TIMEOUT=8,ve.HTTP_ERROR=6,we.COMPLETE="complete",be.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",xt.prototype.listen=xt.prototype.N,$n.prototype.listenOnce=$n.prototype.O,$n.prototype.getLastError=$n.prototype.La,$n.prototype.getLastErrorCode=$n.prototype.Da,$n.prototype.getStatus=$n.prototype.ba,$n.prototype.getResponseJson=$n.prototype.Qa,$n.prototype.getResponseText=$n.prototype.ga,$n.prototype.send=$n.prototype.ea;var xs=d.createWebChannelTransport=function(){return new Ns},Ms=d.getStatEventTarget=function(){return le()},Os=d.ErrorCode=ve,Vs=d.EventType=we,Ps=d.Event=he,Fs=d.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Us=d.FetchXmlHttpFactory=Pn,qs=d.WebChannel=be,Bs=d.XhrIo=$n;const js="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ks.UNAUTHENTICATED=new Ks(null),Ks.GOOGLE_CREDENTIALS=new Ks("google-credentials-uid"),Ks.FIRST_PARTY=new Ks("first-party-uid"),Ks.MOCK_USER=new Ks("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $s="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new h.Yd("@firebase/firestore");function zs(){return Gs.logLevel}function Hs(t,...e){if(Gs.logLevel<=h["in"].DEBUG){const n=e.map(Ys);Gs.debug(`Firestore (${$s}): ${t}`,...n)}}function Ws(t,...e){if(Gs.logLevel<=h["in"].ERROR){const n=e.map(Ys);Gs.error(`Firestore (${$s}): ${t}`,...n)}}function Xs(t,...e){if(Gs.logLevel<=h["in"].WARN){const n=e.map(Ys);Gs.warn(`Firestore (${$s}): ${t}`,...n)}}function Ys(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t="Unexpected state"){const e=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: `+t;throw Ws(e),new Error(e)}function Js(t,e){t||Qs()}function Zs(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ei extends c.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ks.UNAUTHENTICATED)))}shutdown(){}}class ri{constructor(t){this.t=t,this.currentUser=Ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ni,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Hs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hs("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ni)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Js("string"==typeof e.accessToken),new si(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Js(null===t||"string"==typeof t),new Ks(t)}}class oi{constructor(t,e,n){this.type="FirstParty",this.user=Ks.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ai{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new oi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ks.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ui{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Hs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Hs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Js("string"==typeof t.token),this.p=t.token,new ui(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.A=-1;class di{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=li(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function fi(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ei(ti.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ei(ti.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ei(ti.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ei(ti.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gi.fromMillis(Date.now())}static fromDate(t){return gi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new gi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?fi(this.nanoseconds,t.nanoseconds):fi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new mi(t)}static min(){return new mi(new gi(0,0))}static max(){return new mi(new gi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n){void 0===e?e=0:e>t.length&&Qs(),void 0===n?n=t.length-e:n>t.length-e&&Qs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ei.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ti extends Ei{construct(t,e,n){return new Ti(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ei(ti.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ti(e)}static emptyPath(){return new Ti([])}}const bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ei{construct(t,e,n){return new Si(t,e,n)}static isValidIdentifier(t){return bi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new ei(ti.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ei(ti.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ei(ti.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new ei(ti.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Si(e)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this.fields=t,t.sort(Si.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ai(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ai(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return fi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ai.EMPTY_BYTE_STRING=new Ai("");const Ci=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(Js(!!t),"string"==typeof t){let e=0;const n=Ci.exec(t);if(Js(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ni(t.seconds),nanos:Ni(t.nanos)}}function Ni(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ki(t){return"string"==typeof t?Ai.fromBase64String(t):Ai.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ri(t){const e=t.mapValue.fields.__previous_value__;return Di(e)?Ri(e):e}function Li(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new gi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Mi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return null==t}function Vi(t){return 0===t&&1/t==-1/0}function Pi(t){return"number"==typeof t&&Number.isInteger(t)&&!Vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.path=t}static fromPath(t){return new Fi(Ti.fromString(t))}static fromName(t){return new Fi(Ti.fromString(t).popFirst(5))}static empty(){return new Fi(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ti.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fi(new Ti(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Di(t)?4:Ji(t)?9:10:Qs()}function qi(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=_i(t.timestampValue),s=_i(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ki(t.bytesValue).isEqual(ki(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ni(t.geoPointValue.latitude)===Ni(e.geoPointValue.latitude)&&Ni(t.geoPointValue.longitude)===Ni(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ni(t.integerValue)===Ni(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ni(t.doubleValue),s=Ni(e.doubleValue);return n===s?Vi(n)===Vi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(yi(n)!==yi(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!qi(n[i],s[i])))return!1;return!0}(t,e);default:return Qs()}}function Bi(t,e){return void 0!==(t.values||[]).find((t=>qi(t,e)))}function ji(t,e){if(t===e)return 0;const n=Ui(t),s=Ui(e);if(n!==s)return fi(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return fi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ni(t.integerValue||t.doubleValue),s=Ni(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Ki(t.timestampValue,e.timestampValue);case 4:return Ki(Li(t),Li(e));case 5:return fi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ki(t),s=ki(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=fi(n[i],s[i]);if(0!==t)return t}return fi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=fi(Ni(t.latitude),Ni(e.latitude));return 0!==n?n:fi(Ni(t.longitude),Ni(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=ji(n[i],s[i]);if(t)return t}return fi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=fi(s[o],r[o]);if(0!==t)return t;const e=ji(n[s[o]],i[r[o]]);if(0!==e)return e}return fi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Qs()}}function Ki(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return fi(t,e);const n=_i(t),s=_i(e),i=fi(n.seconds,s.seconds);return 0!==i?i:fi(n.nanos,s.nanos)}function $i(t){return Gi(t)}function Gi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=_i(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ki(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Fi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Gi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Gi(t.fields[i])}`;return n+"}"}(t.mapValue):Qs();var e,n}function zi(t){return!!t&&"integerValue"in t}function Hi(t){return!!t&&"arrayValue"in t}function Wi(t){return!!t&&"nullValue"in t}function Xi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Qi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ji(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.value=t}static empty(){return new Zi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Yi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qi(e)}setAll(t){let e=Si.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Qi(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Yi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){vi(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Zi(Qi(this.value))}}function tr(t){const e=[];return vi(t.fields,((t,n)=>{const s=new Si([t]);if(Yi(n)){const t=tr(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Ii(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class er{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new er(t,0,mi.min(),mi.min(),Zi.empty(),0)}static newFoundDocument(t,e,n){return new er(t,1,e,mi.min(),n,0)}static newNoDocument(t,e){return new er(t,2,e,mi.min(),Zi.empty(),0)}static newUnknownDocument(t,e){return new er(t,3,e,mi.min(),Zi.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Zi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Zi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof er&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new er(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class nr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}nr.UNKNOWN_ID=-1;function sr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=mi.fromTimestamp(1e9===s?new gi(n+1,0):new gi(n,s));return new rr(i,Fi.empty(),e)}function ir(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rr(mi.min(),Fi.empty(),-1)}static max(){return new rr(mi.max(),Fi.empty(),-1)}}function or(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Fi.comparator(t.documentKey,e.documentKey),0!==n?n:fi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function ur(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ar(t,e,n,s,i,r,o)}function hr(t){const e=Zs(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+$i(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>$i(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>$i(t))).join(",")),e.P=t}return e.P}function cr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${$i(e.value)}`;var e})).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>$i(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>$i(t))).join(",")),`Target(${e})`}function lr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ir(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!qi(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cr(t.startAt,e.startAt)&&Cr(t.endAt,e.endAt)}function dr(t){return Fi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class fr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new pr(t,e,n):"array-contains"===e?new vr(t,n):"in"===e?new wr(t,n):"not-in"===e?new Er(t,n):"array-contains-any"===e?new Tr(t,n):new fr(t,e,n)}static V(t,e,n){return"in"===e?new gr(t,n):new mr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ji(e,this.value)):null!==e&&Ui(this.value)===Ui(e)&&this.v(ji(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Qs()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class pr extends fr{constructor(t,e,n){super(t,e,n),this.key=Fi.fromName(n.referenceValue)}matches(t){const e=Fi.comparator(t.key,this.key);return this.v(e)}}class gr extends fr{constructor(t,e){super(t,"in",e),this.keys=yr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class mr extends fr{constructor(t,e){super(t,"not-in",e),this.keys=yr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function yr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Fi.fromName(t.referenceValue)))}class vr extends fr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hi(e)&&Bi(e.arrayValue,this.value)}}class wr extends fr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Bi(this.value.arrayValue,e)}}class Er extends fr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Bi(this.value.arrayValue,e)}}class Tr extends fr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Bi(this.value.arrayValue,t)))}}class br{constructor(t,e){this.position=t,this.inclusive=e}}class Sr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ir(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ar(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Fi.comparator(Fi.fromName(o.referenceValue),n.key):ji(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Cr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Nr(t,e,n,s,i,r,o,a){return new _r(t,e,n,s,i,r,o,a)}function kr(t){return new _r(t)}function Dr(t){return!Oi(t.limit)&&"F"===t.limitType}function Rr(t){return!Oi(t.limit)&&"L"===t.limitType}function Lr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xr(t){for(const e of t.filters)if(e.S())return e.field;return null}function Mr(t){return null!==t.collectionGroup}function Or(t){const e=Zs(t);if(null===e.D){e.D=[];const t=xr(e),n=Lr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Sr(t)),e.D.push(new Sr(Si.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Sr(Si.keyField(),t))}}}return e.D}function Vr(t){const e=Zs(t);if(!e.C)if("F"===e.limitType)e.C=ur(e.path,e.collectionGroup,Or(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Or(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Sr(i.field,e))}const n=e.endAt?new br(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new br(e.startAt.position,!e.startAt.inclusive):null;e.C=ur(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function Pr(t,e,n){return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fr(t,e){return lr(Vr(t),Vr(e))&&t.limitType===e.limitType}function Ur(t){return`${hr(Vr(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${cr(Vr(t))}; limitType=${t.limitType})`}function Br(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Fi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ar(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Or(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ar(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Or(t),e))}(t,e)}function jr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kr(t){return(e,n)=>{let s=!1;for(const i of Or(t)){const t=$r(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function $r(t,e,n){const s=t.field.isKeyField()?Fi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?ji(s,i):Qs()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function zr(t){return{integerValue:""+t}}function Hr(t,e){return Pi(e)?zr(e):Gr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function Xr(t,e,n){return t instanceof Jr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Zr?to(t,e):t instanceof eo?no(t,e):function(t,e){const n=Qr(t,e),s=io(n)+io(t.k);return zi(n)&&zi(t.k)?zr(s):Gr(t.M,s)}(t,e)}function Yr(t,e,n){return t instanceof Zr?to(t,e):t instanceof eo?no(t,e):n}function Qr(t,e){return t instanceof so?zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Jr extends Wr{}class Zr extends Wr{constructor(t){super(),this.elements=t}}function to(t,e){const n=ro(e);for(const s of t.elements)n.some((t=>qi(t,s)))||n.push(s);return{arrayValue:{values:n}}}class eo extends Wr{constructor(t){super(),this.elements=t}}function no(t,e){let n=ro(e);for(const s of t.elements)n=n.filter((t=>!qi(t,s)));return{arrayValue:{values:n}}}class so extends Wr{constructor(t,e){super(),this.M=t,this.k=e}}function io(t){return Ni(t.integerValue||t.doubleValue)}function ro(t){return Hi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Zr&&e instanceof Zr||t instanceof eo&&e instanceof eo?pi(t.elements,e.elements,qi):t instanceof so&&e instanceof so?qi(t.k,e.k):t instanceof Jr&&e instanceof Jr}(t.transform,e.transform)}class ao{constructor(t,e){this.version=t,this.transformResults=e}}class uo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new uo}static exists(t){return new uo(void 0,t)}static updateTime(t){return new uo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ho(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class co{}function lo(t,e,n){t instanceof yo?function(t,e,n){const s=t.value.clone(),i=Eo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof vo?function(t,e,n){if(!ho(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Eo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(wo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n){t instanceof yo?function(t,e,n){if(!ho(t.precondition,e))return;const s=t.value.clone(),i=To(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(mo(e),s).setHasLocalMutations()}(t,e,n):t instanceof vo?function(t,e,n){if(!ho(t.precondition,e))return;const s=To(t.fieldTransforms,n,e),i=e.data;i.setAll(wo(t)),i.setAll(s),e.convertToFoundDocument(mo(e),i).setHasLocalMutations()}(t,e,n):function(t,e){ho(t.precondition,e)&&e.convertToNoDocument(mi.min())}(t,e)}function po(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Qr(s.transform,t||null);null!=i&&(null==n&&(n=Zi.empty()),n.set(s.field,i))}return n||null}function go(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&pi(t,e,((t,e)=>oo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function mo(t){return t.isFoundDocument()?t.version:mi.min()}class yo extends co{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class vo extends co{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function wo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Eo(t,e,n){const s=new Map;Js(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Yr(o,a,n[i]))}return s}function To(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Xr(t,r,e))}return s}class bo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class So extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,Co;function _o(t){switch(t){default:return Qs();case ti.CANCELLED:case ti.UNKNOWN:case ti.DEADLINE_EXCEEDED:case ti.RESOURCE_EXHAUSTED:case ti.INTERNAL:case ti.UNAVAILABLE:case ti.UNAUTHENTICATED:return!1;case ti.INVALID_ARGUMENT:case ti.NOT_FOUND:case ti.ALREADY_EXISTS:case ti.PERMISSION_DENIED:case ti.FAILED_PRECONDITION:case ti.ABORTED:case ti.OUT_OF_RANGE:case ti.UNIMPLEMENTED:case ti.DATA_LOSS:return!0}}function No(t){if(void 0===t)return Ws("GRPC error has no .code"),ti.UNKNOWN;switch(t){case Ao.OK:return ti.OK;case Ao.CANCELLED:return ti.CANCELLED;case Ao.UNKNOWN:return ti.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return ti.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return ti.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return ti.INTERNAL;case Ao.UNAVAILABLE:return ti.UNAVAILABLE;case Ao.UNAUTHENTICATED:return ti.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return ti.INVALID_ARGUMENT;case Ao.NOT_FOUND:return ti.NOT_FOUND;case Ao.ALREADY_EXISTS:return ti.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return ti.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return ti.FAILED_PRECONDITION;case Ao.ABORTED:return ti.ABORTED;case Ao.OUT_OF_RANGE:return ti.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return ti.UNIMPLEMENTED;case Ao.DATA_LOSS:return ti.DATA_LOSS;default:return Qs()}}(Co=Ao||(Ao={}))[Co.OK=0]="OK",Co[Co.CANCELLED=1]="CANCELLED",Co[Co.UNKNOWN=2]="UNKNOWN",Co[Co.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Co[Co.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Co[Co.NOT_FOUND=5]="NOT_FOUND",Co[Co.ALREADY_EXISTS=6]="ALREADY_EXISTS",Co[Co.PERMISSION_DENIED=7]="PERMISSION_DENIED",Co[Co.UNAUTHENTICATED=16]="UNAUTHENTICATED",Co[Co.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Co[Co.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Co[Co.ABORTED=10]="ABORTED",Co[Co.OUT_OF_RANGE=11]="OUT_OF_RANGE",Co[Co.UNIMPLEMENTED=12]="UNIMPLEMENTED",Co[Co.INTERNAL=13]="INTERNAL",Co[Co.UNAVAILABLE=14]="UNAVAILABLE",Co[Co.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){vi(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e){this.comparator=t,this.root=e||Lo.EMPTY}insert(t,e){return new Do(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lo.BLACK,null,null))}remove(t){return new Do(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ro(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ro(this.root,t,this.comparator,!0)}}class Ro{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lo{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Lo.RED,this.left=null!=s?s:Lo.EMPTY,this.right=null!=i?i:Lo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Lo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Lo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qs();if(this.right.isRed())throw Qs();const t=this.left.check();if(t!==this.right.check())throw Qs();return t+(this.isRed()?0:1)}}Lo.EMPTY=null,Lo.RED=!0,Lo.BLACK=!1,Lo.EMPTY=new class{constructor(){this.size=0}get key(){throw Qs()}get value(){throw Qs()}get color(){throw Qs()}get left(){throw Qs()}get right(){throw Qs()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Lo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t){this.comparator=t,this.data=new Do(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xo(this.comparator);return e.data=t,e}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=new Do(Fi.comparator);function Vo(){return Oo}const Po=new Do(Fi.comparator);function Fo(){return Po}function Uo(){return new ko((t=>t.toString()),((t,e)=>t.isEqual(e)))}const qo=new Do(Fi.comparator),Bo=new xo(Fi.comparator);function jo(...t){let e=Bo;for(const n of t)e=e.add(n);return e}const Ko=new xo(fi);function $o(){return Ko}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,zo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Go(mi.min(),n,$o(),Vo(),jo())}}class zo{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new zo(Ai.EMPTY_BYTE_STRING,e,jo(),jo(),jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,s){this.O=t,this.removedTargetIds=e,this.key=n,this.F=s}}class Wo{constructor(t,e){this.targetId=t,this.$=e}}class Xo{constructor(t,e,n=Ai.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Yo{constructor(){this.B=0,this.L=Zo(),this.U=Ai.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=jo(),e=jo(),n=jo();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Qs()}})),new zo(this.U,this.q,t,e,n)}J(){this.G=!1,this.L=Zo()}Y(t,e){this.G=!0,this.L=this.L.insert(t,e)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Qo{constructor(t){this.nt=t,this.st=new Map,this.it=Vo(),this.rt=Jo(),this.ot=new xo(fi)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Qs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,s=this.wt(e);if(s){const t=s.target;if(dr(t))if(0===n){const n=new Fi(t.path);this.ct(e,n,er.newNoDocument(n,mi.min()))}else Js(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&dr(i.target)){const e=new Fi(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.ct(s,e,er.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=jo();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new Go(t,e,this.ot,this.it,n);return this.it=Vo(),this.rt=Jo(),this.ot=new xo(fi),s}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Yo,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new xo(fi),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Hs("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new Yo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Jo(){return new Do(Fi.comparator)}function Zo(){return new Do(Fi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ea=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class na{constructor(t,e){this.databaseId=t,this.N=e}}function sa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ia(t,e){return t.N?e.toBase64():e.toUint8Array()}function ra(t,e){return sa(t,e.toTimestamp())}function oa(t){return Js(!!t),mi.fromTimestamp(function(t){const e=_i(t);return new gi(e.seconds,e.nanos)}(t))}function aa(t,e){return function(t){return new Ti(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ua(t){const e=Ti.fromString(t);return Js(Ra(e)),e}function ha(t,e){return aa(t.databaseId,e.path)}function ca(t,e){const n=ua(e);if(n.get(1)!==t.databaseId.projectId)throw new ei(ti.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ei(ti.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Fi(pa(n))}function la(t,e){return aa(t.databaseId,e)}function da(t){const e=ua(t);return 4===e.length?Ti.emptyPath():pa(e)}function fa(t){return new Ti(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pa(t){return Js(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ga(t,e,n){return{name:ha(t,e),fields:n.value.mapValue.fields}}function ma(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Qs()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(Js(void 0===e||"string"==typeof e),Ai.fromBase64String(e||"")):(Js(void 0===e||e instanceof Uint8Array),Ai.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ti.UNKNOWN:No(t.code);return new ei(e,t.message||"")}(o);n=new Xo(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ca(t,s.document.name),r=oa(s.document.updateTime),o=new Zi({mapValue:{fields:s.document.fields}}),a=er.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Ho(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ca(t,s.document),r=s.readTime?oa(s.readTime):mi.min(),o=er.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ca(t,s.document),r=s.removedTargetIds||[];n=new Ho([],r,i,null)}else{if(!("filter"in e))return Qs();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Io(s),r=t.targetId;n=new Wo(r,i)}}return n}function ya(t,e){let n;if(e instanceof yo)n={update:ga(t,e.key,e.value)};else if(e instanceof bo)n={delete:ha(t,e.key)};else if(e instanceof vo)n={update:ga(t,e.key,e.data),updateMask:Da(e.fieldMask)};else{if(!(e instanceof So))return Qs();n={verify:ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Jr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof so)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Qs()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ra(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Qs()}(t,e.precondition)),n}function va(t,e){return t&&t.length>0?(Js(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?oa(t.updateTime):oa(e);return n.isEqual(mi.min())&&(n=oa(e)),new ao(n,t.transformResults||[])}(t,e)))):[]}function wa(t,e){return{documents:[la(t,e.path)]}}function Ea(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=la(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=la(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Xi(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(Wi(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Xi(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(Wi(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:Aa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ca(t.field),direction:Ia(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Oi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ta(t){let e=da(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Js(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Sa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Sr(_a(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Oi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new br(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new br(n,e)}(n.endAt)),Nr(e,i,o,r,a,"F",u,h)}function ba(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qs()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Sa(t){return t?void 0!==t.unaryFilter?[ka(t)]:void 0!==t.fieldFilter?[Na(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Sa(t))).reduce(((t,e)=>t.concat(e))):Qs():[]}function Ia(t){return ta[t]}function Aa(t){return ea[t]}function Ca(t){return{fieldPath:t.canonicalString()}}function _a(t){return Si.fromServerFormat(t.fieldPath)}function Na(t){return fr.create(_a(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qs()}}(t.fieldFilter.op),t.fieldFilter.value)}function ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_a(t.unaryFilter.field);return fr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_a(t.unaryFilter.field);return fr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_a(t.unaryFilter.field);return fr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_a(t.unaryFilter.field);return fr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Qs()}}function Da(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ra(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ma="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Qs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Va(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Va?e:Va.resolve(e)}catch(t){return Va.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Va.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Va.reject(e)}static resolve(t){return new Va(((e,n)=>{e(t)}))}static reject(t){return new Va(((e,n)=>{n(t)}))}static waitFor(t){return new Va(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Va.resolve(!1);for(const n of t)e=e.next((t=>t?Va.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&lo(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&fo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&fo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(mi.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&pi(this.mutations,t.mutations,((t,e)=>go(t,e)))&&pi(this.baseMutations,t.baseMutations,((t,e)=>go(t,e)))}}class Ua{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Js(t.mutations.length===n.length);let s=qo;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Ua(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,s,i=mi.min(),r=mi.min(),o=Ai.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ba(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.Jt=t}}function Ka(t){const e=Ta({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Pr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ni(t.integerValue));else if("doubleValue"in t){const n=Ni(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Vi(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(ki(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Ji(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Qs()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const s of Object.keys(n))this.re(s,e),this.te(n[s],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const s of n)this.te(s,e)}ae(t,e){this.ne(e,37),Fi.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}$a.fe=new $a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(){this.qe=new za}addToCollectionParentIndex(t,e){return this.qe.add(e),Va.resolve()}getCollectionParents(t,e){return Va.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Va.resolve()}deleteFieldIndex(t,e){return Va.resolve()}getDocumentsMatchingTarget(t,e){return Va.resolve(null)}getFieldIndex(t,e){return Va.resolve(null)}getFieldIndexes(t,e){return Va.resolve([])}getNextCollectionGroupToUpdate(t){return Va.resolve(null)}updateCollectionGroup(t,e,n){return Va.resolve()}updateIndexEntries(t,e){return Va.resolve()}}class za{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new xo(Ti.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new xo(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ha{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ha(t,Ha.DEFAULT_COLLECTION_PERCENTILE,Ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha.DEFAULT_COLLECTION_PERCENTILE=10,Ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ha.DEFAULT=new Ha(41943040,Ha.DEFAULT_COLLECTION_PERCENTILE,Ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ha.DISABLED=new Ha(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Wa(0)}static gn(){return new Wa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xa(t){if(t.code!==ti.FAILED_PRECONDITION||t.message!==Ma)throw t;Hs("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(){this.changes=new ko((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,er.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Va.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t,e,n){this.fs=t,this.$s=e,this.indexManager=n}Bs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Ls(t,e,n)))}Ls(t,e,n){return this.fs.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Us(t,e){t.forEach(((t,n)=>{for(const s of e)s.applyToLocalView(n)}))}qs(t,e){return this.fs.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Us(e,t)))}Ks(t,e,n){return function(t){return Fi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):Mr(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new Fi(e)).next((t=>{let e=Fo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}js(t,e,n){const s=e.collectionGroup;let i=Fo();return this.indexManager.getCollectionParents(t,s).next((r=>Va.forEach(r,(r=>{const o=function(t,e){return new _r(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Ws(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Ws(t,e,n){let s;return this.fs.getAllFromCollection(t,e.path,n).next((n=>(s=n,this.$s.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=er.newInvalidDocument(n),s=s.insert(n,i)),fo(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{Br(e,n)||(s=s.remove(t))})),s)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=s}static Js(t,e){let n=jo(),s=jo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ja(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{Ys(t){this.Xs=t}Ks(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(mi.min())?this.Zs(t,e):this.Xs.qs(t,s).next((i=>{const r=this.ti(e,i);return(Dr(e)||Rr(e))&&this.ei(e.limitType,r,s,n)?this.Zs(t,e):(zs()<=h["in"].DEBUG&&Hs("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),qr(e)),this.Xs.Ks(t,e,sr(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ti(t,e){let n=new xo(Kr(t));return e.forEach(((e,s)=>{Br(t,s)&&(n=n.add(s))})),n}ei(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zs(t,e){return zs()<=h["in"].DEBUG&&Hs("QueryEngine","Using full collection scan to execute query:",qr(e)),this.Xs.Ks(t,e,rr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,n,s){this.persistence=t,this.ni=e,this.M=s,this.si=new Do(fi),this.ii=new ko((t=>hr(t)),lr),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(n)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new Qa(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.si)))}}function eu(t,e,n,s){return new tu(t,e,n,s)}async function nu(t,e){const n=Zs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.$s.getAllMutationBatches(t).next((i=>(s=i,n.ui(e),n.$s.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=jo();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ai.qs(t,o).next((t=>({ci:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function su(t,e){const n=Zs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Va.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Js(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.$s.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,s)))}))}function iu(t){const e=Zs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ls.getLastRemoteSnapshotVersion(t)))}function ru(t,e){const n=Zs(t),s=e.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.ls.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.ls.addMatchingKeys(t,r.addedDocuments,a))));let h=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Ai.EMPTY_BYTE_STRING,mi.min()).withLastLimboFreeSnapshotVersion(mi.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,h,r)&&o.push(n.ls.updateTargetData(t,h))}));let a=Vo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(ou(t,r,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(mi.min())){const e=n.ls.getLastRemoteSnapshotVersion(t).next((e=>n.ls.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Va.waitFor(o).next((()=>r.apply(t))).next((()=>n.ai.Gs(t,a))).next((()=>a))})).then((t=>(n.si=i,t)))}function ou(t,e,n){let s=jo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Vo();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(mi.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Hs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),s}))}function au(t,e){const n=Zs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(t,e))))}function uu(t,e){const n=Zs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.ls.getTargetData(t,e).next((i=>i?(s=i,Va.resolve(s)):n.ls.allocateTargetId(t).next((i=>(s=new Ba(e,i,0,t.currentSequenceNumber),n.ls.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.si.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t}))}async function hu(t,e,n){const s=Zs(t),i=s.si.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pa(t))throw t;Hs("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.si=s.si.remove(e),s.ii.delete(i.target)}function cu(t,e,n){const s=Zs(t);let i=mi.min(),r=jo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Zs(t),i=s.ii.get(n);return void 0!==i?Va.resolve(s.si.get(i)):s.ls.getTargetData(e,n)}(s,t,Vr(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.ni.Ks(t,e,n?i:mi.min(),n?r:jo()))).next((t=>(lu(s,jr(e),t),{documents:t,hi:r})))))}function lu(t,e,n){let s=mi.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.ri.set(e,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class du{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,e){return Va.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:oa(n.createTime)}),Va.resolve()}getNamedQuery(t,e){return Va.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return{name:t.name,query:Ka(t.bundledQuery),readTime:oa(t.readTime)}}(e)),Va.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.overlays=new Do(Fi.comparator),this.mi=new Map}getOverlay(t,e){return Va.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.Xt(t,e,s)})),Va.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.mi.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.mi.delete(n)),Va.resolve()}getOverlaysForCollection(t,e,n){const s=Uo(),i=e.length+1,r=new Fi(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Va.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Do(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Uo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Uo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Va.resolve(o)}Xt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);if(null!==s){const t=this.mi.get(s.largestBatchId).delete(n.key);this.mi.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let i=this.mi.get(e);void 0===i&&(i=jo(),this.mi.set(e,i)),this.mi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.gi=new xo(gu.yi),this.pi=new xo(gu.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new gu(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ei(new gu(t,e))}Ai(t,e){t.forEach((t=>this.removeReference(t,e)))}Ri(t){const e=new Fi(new Ti([])),n=new gu(e,t),s=new gu(e,t+1),i=[];return this.pi.forEachInRange([n,s],(t=>{this.Ei(t),i.push(t.key)})),i}bi(){this.gi.forEach((t=>this.Ei(t)))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const e=new Fi(new Ti([])),n=new gu(e,t),s=new gu(e,t+1);let i=jo();return this.pi.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new gu(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class gu{constructor(t,e){this.key=t,this.Vi=e}static yi(t,e){return Fi.comparator(t.key,e.key)||fi(t.Vi,e.Vi)}static Ii(t,e){return fi(t.Vi,e.Vi)||Fi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.$s=[],this.vi=1,this.Si=new xo(gu.yi)}checkEmpty(t){return Va.resolve(0===this.$s.length)}addMutationBatch(t,e,n,s){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const r=new Fa(i,e,n,s);this.$s.push(r);for(const o of s)this.Si=this.Si.add(new gu(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Va.resolve(r)}lookupMutationBatch(t,e){return Va.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Ci(n),i=s<0?0:s;return Va.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return Va.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(t){return Va.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gu(e,0),s=new gu(e,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,s],(t=>{const e=this.Di(t.Vi);i.push(e)})),Va.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xo(fi);return e.forEach((t=>{const e=new gu(t,0),s=new gu(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,s],(t=>{n=n.add(t.Vi)}))})),Va.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Fi.isDocumentKey(i)||(i=i.child(""));const r=new gu(new Fi(i),0);let o=new xo(fi);return this.Si.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.Vi)),!0)}),r),Va.resolve(this.xi(o))}xi(t){const e=[];return t.forEach((t=>{const n=this.Di(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Js(0===this.Ni(e.batchId,"removed")),this.$s.shift();let n=this.Si;return Va.forEach(e.mutations,(s=>{const i=new gu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Si=n}))}dn(t){}containsKey(t,e){const n=new gu(e,0),s=this.Si.firstAfterOrEqual(n);return Va.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.$s.length,Va.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.$s.length?0:t-this.$s[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.$s.length?null:this.$s[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.ki=t,this.docs=new Do(Fi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Va.resolve(n?n.document.mutableCopy():er.newInvalidDocument(e))}getEntries(t,e){let n=Vo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():er.newInvalidDocument(t))})),Va.resolve(n)}getAllFromCollection(t,e,n){let s=Vo();const i=new Fi(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||or(ir(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Va.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Qs()}Mi(t,e){return Va.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new vu(this)}getSize(t){return Va.resolve(this.size)}}class vu extends Ya{constructor(t){super(),this.qn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.qn.addEntry(t,s)):this.qn.removeEntry(n)})),Va.waitFor(e)}getFromCache(t,e){return this.qn.getEntry(t,e)}getAllFromCache(t,e){return this.qn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t){this.persistence=t,this.Oi=new ko((t=>hr(t)),lr),this.lastRemoteSnapshotVersion=mi.min(),this.highestTargetId=0,this.Fi=0,this.$i=new pu,this.targetCount=0,this.Bi=Wa.mn()}forEachTarget(t,e){return this.Oi.forEach(((t,n)=>e(n))),Va.resolve()}getLastRemoteSnapshotVersion(t){return Va.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Va.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),Va.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fi&&(this.Fi=e),Va.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new Wa(e),this.highestTargetId=e),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,e){return this.In(e),this.targetCount+=1,Va.resolve()}updateTargetData(t,e){return this.In(e),Va.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.$i.Ri(e.targetId),this.targetCount-=1,Va.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Oi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Oi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Va.waitFor(i).next((()=>s))}getTargetCount(t){return Va.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return Va.resolve(n)}addMatchingKeys(t,e,n){return this.$i.Ti(e,n),Va.resolve()}removeMatchingKeys(t,e,n){this.$i.Ai(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Va.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.$i.Ri(e),Va.resolve()}getMatchingKeysForTargetId(t,e){const n=this.$i.Pi(e);return Va.resolve(n)}containsKey(t,e){return Va.resolve(this.$i.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e){this.Li={},this.overlays={},this.ts=new ci(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new wu(this),this.indexManager=new Ga,this.fs=function(t){return new yu(t)}((t=>this.referenceDelegate.Ui(t))),this.M=new ja(e),this.ds=new du(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new mu(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,e,n){Hs("MemoryPersistence","Starting transaction:",t);const s=new Tu(this.ts.next());return this.referenceDelegate.qi(),n(s).next((t=>this.referenceDelegate.Gi(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ki(t,e){return Va.or(Object.values(this.Li).map((n=>()=>n.containsKey(t,e))))}}class Tu extends Oa{constructor(t){super(),this.currentSequenceNumber=t}}class bu{constructor(t){this.persistence=t,this.Qi=new pu,this.ji=null}static Wi(t){return new bu(t)}get zi(){if(this.ji)return this.ji;throw Qs()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),Va.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),Va.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),Va.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach((t=>this.zi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qi(){this.ji=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Va.forEach(this.zi,(n=>{const s=Fi.fromPath(n);return this.Hi(t,s).next((t=>{t||e.removeEntry(s,mi.min())}))})).next((()=>(this.ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hi(t,e).next((t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString())}))}Ui(t){return 0}Hi(t,e){return Va.or([()=>Va.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ki(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.activeTargetIds=$o()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Iu{constructor(){this.Fr=new Su,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Su,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){Hs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,i){const r=this.oo(t,e);Hs("RestConnection","Sending: ",r,n);const o={};return this.uo(o,s,i),this.ao(t,r,o,n).then((t=>(Hs("RestConnection","Received: ",t),t)),(e=>{throw Xs("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}co(t,e,n,s,i){return this.ro(t,e,n,s,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+$s,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=_u[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,e,n,s){return new Promise(((i,r)=>{const o=new Bs;o.listenOnce(Vs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Os.NO_ERROR:const e=o.getResponseJson();Hs("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Os.TIMEOUT:Hs("Connection",'RPC "'+t+'" timed out'),r(new ei(ti.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const n=o.getStatus();if(Hs("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ti).indexOf(e)>=0?e:ti.UNKNOWN}(t.status);r(new ei(e,t.message))}else r(new ei(ti.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ei(ti.UNAVAILABLE,"Connection failed."));break;default:Qs()}}finally{Hs("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=xs(),r=Ms(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Us({})),this.uo(o.initMessageHeaders,e,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Hs("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let h=!1,l=!1;const d=new Nu({jr:t=>{l?Hs("Connection","Not sending because WebChannel is closed:",t):(h||(Hs("Connection","Opening WebChannel transport."),u.open(),h=!0),Hs("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,qs.EventType.OPEN,(()=>{l||Hs("Connection","WebChannel transport opened.")})),f(u,qs.EventType.CLOSE,(()=>{l||(l=!0,Hs("Connection","WebChannel transport closed"),d.eo())})),f(u,qs.EventType.ERROR,(t=>{l||(l=!0,Xs("Connection","WebChannel transport errored:",t),d.eo(new ei(ti.UNAVAILABLE,"The operation could not be completed")))})),f(u,qs.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Js(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Hs("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ao[t];if(void 0!==e)return No(e)}(t),n=i.message;void 0===e&&(e=ti.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.eo(new ei(e,n)),u.close()}else Hs("Connection","WebChannel received:",n),d.no(n)}})),f(r,Ps.STAT_EVENT,(t=>{t.stat===Fs.PROXY?Hs("Connection","Detected buffering proxy"):t.stat===Fs.NOPROXY&&Hs("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return new na(t,!0)}class Lu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Jn=t,this.timerId=e,this.lo=n,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&Hs("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e,n,s,i,r,o,a){this.Jn=t,this.Ao=n,this.Ro=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Lu(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===ti.RESOURCE_EXHAUSTED?(Ws(e.toString()),Ws("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===ti.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new ei(ti.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Go(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.Jn.enqueueAndForget((()=>this.Po===t?e():(Hs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mu extends xu{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.M=i}Go(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=ma(this.M,t),n=function(t){if(!("targetChange"in t))return mi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?mi.min():e.readTime?oa(e.readTime):mi.min()}(t);return this.listener.Ko(e,n)}Qo(t){const e={};e.database=fa(this.M),e.addTarget=function(t,e){let n;const s=e.target;return n=dr(s)?{documents:wa(t,s)}:{query:Ea(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ia(t,e.resumeToken):e.snapshotVersion.compareTo(mi.min())>0&&(n.readTime=sa(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=ba(this.M,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=fa(this.M),e.removeTarget=t,this.Oo(e)}}class Ou extends xu{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Js(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=va(t.writeResults,t.commitTime),n=oa(t.commitTime);return this.listener.Jo(n,e)}return Js(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=fa(this.M),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ya(this.M,t)))};this.Oo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=s,this.Zo=!1}tu(){if(this.Zo)throw new ei(ti.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ro(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ti.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ei(ti.UNKNOWN,t.toString())}))}co(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ti.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ei(ti.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Pu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ws(e),this.su=!1):Hs("OnlineStateTracker",e)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Hu(this)&&(Hs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zs(t);e.lu.add(4),await qu(e),e._u.set("Unknown"),e.lu.delete(4),await Uu(e)}(this))}))})),this._u=new Pu(n,s)}}async function Uu(t){if(Hu(t))for(const e of t.fu)await e(!0)}async function qu(t){for(const e of t.fu)await e(!1)}function Bu(t,e){const n=Zs(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),zu(n)?Gu(n):lh(n).Co()&&Ku(n,e))}function ju(t,e){const n=Zs(t),s=lh(n);n.hu.delete(e),s.Co()&&$u(n,e),0===n.hu.size&&(s.Co()?s.ko():Hu(n)&&n._u.set("Unknown"))}function Ku(t,e){t.wu.Z(e.targetId),lh(t).Qo(e)}function $u(t,e){t.wu.Z(e),lh(t).jo(e)}function Gu(t){t.wu=new Qo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),lh(t).start(),t._u.iu()}function zu(t){return Hu(t)&&!lh(t).Do()&&t.hu.size>0}function Hu(t){return 0===Zs(t).lu.size}function Wu(t){t.wu=void 0}async function Xu(t){t.hu.forEach(((e,n)=>{Ku(t,e)}))}async function Yu(t,e){Wu(t),zu(t)?(t._u.uu(e),Gu(t)):t._u.set("Unknown")}async function Qu(t,e,n){if(t._u.set("Online"),e instanceof Xo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){Hs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ju(t,n)}else if(e instanceof Ho?t.wu.ut(e):e instanceof Wo?t.wu._t(e):t.wu.ht(e),!n.isEqual(mi.min()))try{const e=await iu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(s);i&&t.hu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Ai.EMPTY_BYTE_STRING,n.snapshotVersion)),$u(t,e);const s=new Ba(n.target,e,1,n.sequenceNumber);Ku(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hs("RemoteStore","Failed to raise snapshot:",e),await Ju(t,e)}}async function Ju(t,e,n){if(!Pa(e))throw e;t.lu.add(1),await qu(t),t._u.set("Offline"),n||(n=()=>iu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hs("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Uu(t)}))}function Zu(t,e){return e().catch((n=>Ju(t,n,e)))}async function th(t){const e=Zs(t),n=dh(e);let s=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;eh(e);)try{const t=await au(e.localStore,s);if(null===t){0===e.cu.length&&n.ko();break}s=t.batchId,nh(e,t)}catch(t){await Ju(e,t)}sh(e)&&ih(e)}function eh(t){return Hu(t)&&t.cu.length<10}function nh(t,e){t.cu.push(e);const n=dh(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function sh(t){return Hu(t)&&!dh(t).Do()&&t.cu.length>0}function ih(t){dh(t).start()}async function rh(t){dh(t).Xo()}async function oh(t){const e=dh(t);for(const n of t.cu)e.Ho(n.mutations)}async function ah(t,e,n){const s=t.cu.shift(),i=Ua.from(s,e,n);await Zu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await th(t)}async function uh(t,e){e&&dh(t).zo&&await async function(t,e){if(n=e.code,_o(n)&&n!==ti.ABORTED){const n=t.cu.shift();dh(t).No(),await Zu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await th(t)}var n}(t,e),sh(t)&&ih(t)}async function hh(t,e){const n=Zs(t);n.asyncQueue.verifyOperationInProgress(),Hs("RemoteStore","RemoteStore received new credentials");const s=Hu(n);n.lu.add(3),await qu(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Uu(n)}async function ch(t,e){const n=Zs(t);e?(n.lu.delete(2),await Uu(n)):e||(n.lu.add(2),await qu(n),n._u.set("Unknown"))}function lh(t){return t.mu||(t.mu=function(t,e,n){const s=Zs(t);return s.tu(),new Mu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Xu.bind(null,t),Jr:Yu.bind(null,t),Ko:Qu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),zu(t)?Gu(t):t._u.set("Unknown")):(await t.mu.stop(),Wu(t))}))),t.mu}function dh(t){return t.gu||(t.gu=function(t,e,n){const s=Zs(t);return s.tu(),new Ou(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{zr:rh.bind(null,t),Jr:uh.bind(null,t),Yo:oh.bind(null,t),Jo:ah.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await th(t)):(await t.gu.stop(),t.cu.length>0&&(Hs("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new fh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ei(ti.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ph(t,e){if(Ws("AsyncQueue",`${e}: ${t}`),Pa(t))return new ei(ti.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Fi.comparator(e.key,n.key):(t,e)=>Fi.comparator(t.key,e.key),this.keyedMap=Fo(),this.sortedSet=new Do(this.comparator)}static emptySet(t){return new gh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof gh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new gh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.yu=new Do(Fi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Qs():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class yh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new yh(t,e,gh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.Iu=void 0,this.listeners=[]}}class wh{constructor(){this.queries=new ko((t=>Ur(t)),Fr),this.onlineState="Unknown",this.Tu=new Set}}async function Eh(t,e){const n=Zs(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new vh),i)try{r.Iu=await n.onListen(s)}catch(t){const n=ph(t,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Ih(n)}async function Th(t,e){const n=Zs(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function bh(t,e){const n=Zs(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(s=!0);e.Iu=i}}s&&Ih(n)}function Sh(t,e,n){const s=Zs(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ih(t){t.Tu.forEach((t=>{t.next()}))}class Ah{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new yh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),e=!0):this.vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=yh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch{constructor(t){this.key=t}}class _h{constructor(t){this.key=t}}class Nh{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=jo(),this.mutatedKeys=jo(),this.Lu=Kr(t),this.Uu=new gh(this.Lu)}get qu(){return this.Fu}Gu(t,e){const n=e?e.Ku:new mh,s=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Dr(this.query)&&s.size===this.query.limit?s.last():null,u=Rr(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),c=Br(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;h&&c?h.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.Qu(h,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Lu(c,a)>0||u&&this.Lu(c,u)<0)&&(o=!0)):!h&&c?(n.track({type:0,doc:c}),f=!0):h&&!c&&(n.track({type:1,doc:h}),f=!0,(a||u)&&(o=!0)),f&&(c?(r=r.add(c),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Dr(this.query)||Rr(this.query))for(;r.size>this.query.limit;){const t=Dr(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Ku:n,ei:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Ku.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qs()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new yh(this.query,t.Uu,s,i,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new mh,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=jo(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new _h(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Ch(n))})),e}Ju(t){this.Fu=t.hi,this.Bu=jo();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Yu(){return yh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class kh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Dh{constructor(t){this.key=t,this.Xu=!1}}class Rh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Zu={},this.ta=new ko((t=>Ur(t)),Fr),this.ea=new Map,this.na=new Set,this.sa=new Do(Fi.comparator),this.ia=new Map,this.ra=new pu,this.oa={},this.ua=new Map,this.aa=Wa.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function Lh(t,e){const n=Qh(t);let s,i;const r=n.ta.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const t=await uu(n.localStore,Vr(e));n.isPrimaryClient&&Bu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await xh(n,e,s,"current"===r)}return i}async function xh(t,e,n,s){t.ha=(e,n,s)=>async function(t,e,n,s){let i=e.view.Gu(n);i.ei&&(i=await cu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Gh(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const i=await cu(t.localStore,e,!0),r=new Nh(e,i.hi),o=r.Gu(i.documents),a=zo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);Gh(t,n,u.zu);const h=new kh(e,n,r);return t.ta.set(e,h),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),u.snapshot}async function Mh(t,e){const n=Zs(t),s=n.ta.get(e),i=n.ea.get(s.targetId);if(i.length>1)return n.ea.set(s.targetId,i.filter((t=>!Fr(t,e)))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ju(n.remoteStore,s.targetId),Kh(n,s.targetId)})).catch(Xa)):(Kh(n,s.targetId),await hu(n.localStore,s.targetId,!0))}async function Oh(t,e,n){const s=Jh(t);try{const t=await function(t,e){const n=Zs(t),s=gi.now(),i=e.reduce(((t,e)=>t.add(e.key)),jo());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ai.qs(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=po(t,r.get(t.key));null!=e&&o.push(new vo(t.key,e,tr(e.value.mapValue),uo.exists(!0)))}return n.$s.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.oa[t.currentUser.toKey()];s||(s=new Do(fi)),s=s.insert(e,n),t.oa[t.currentUser.toKey()]=s}(s,t.batchId,n),await Wh(s,t.changes),await th(s.remoteStore)}catch(t){const e=ph(t,"Failed to persist write");n.reject(e)}}async function Vh(t,e){const n=Zs(t);try{const t=await ru(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ia.get(e);s&&(Js(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?Js(s.Xu):t.removedDocuments.size>0&&(Js(s.Xu),s.Xu=!1))})),await Wh(n,t,e)}catch(t){await Xa(t)}}function Ph(t,e,n){const s=Zs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ta.forEach(((n,s)=>{const i=s.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Zs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(s=!0)})),s&&Ih(n)}(s.eventManager,e),t.length&&s.Zu.Ko(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fh(t,e,n){const s=Zs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ia.get(e),r=i&&i.key;if(r){let t=new Do(Fi.comparator);t=t.insert(r,er.newNoDocument(r,mi.min()));const n=jo().add(r),i=new Go(mi.min(),new Map,new xo(fi),t,n);await Vh(s,i),s.sa=s.sa.remove(r),s.ia.delete(e),Hh(s)}else await hu(s.localStore,e,!1).then((()=>Kh(s,e,n))).catch(Xa)}async function Uh(t,e){const n=Zs(t),s=e.batch.batchId;try{const t=await su(n.localStore,e);jh(n,s,null),Bh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wh(n,t)}catch(t){await Xa(t)}}async function qh(t,e,n){const s=Zs(t);try{const t=await function(t,e){const n=Zs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.$s.lookupMutationBatch(t,e).next((e=>(Js(null!==e),s=e.keys(),n.$s.removeMutationBatch(t,e)))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,s)))}))}(s.localStore,e);jh(s,e,n),Bh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Wh(s,t)}catch(n){await Xa(n)}}function Bh(t,e){(t.ua.get(e)||[]).forEach((t=>{t.resolve()})),t.ua.delete(e)}function jh(t,e,n){const s=Zs(t);let i=s.oa[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.oa[s.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ea.get(e))t.ta.delete(s),n&&t.Zu.la(s,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach((e=>{t.ra.containsKey(e)||$h(t,e)}))}function $h(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);null!==n&&(ju(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Hh(t))}function Gh(t,e,n){for(const s of n)s instanceof Ch?(t.ra.addReference(s.key,e),zh(t,s)):s instanceof _h?(Hs("SyncEngine","Document no longer in limbo: "+s.key),t.ra.removeReference(s.key,e),t.ra.containsKey(s.key)||$h(t,s.key)):Qs()}function zh(t,e){const n=e.key,s=n.path.canonicalString();t.sa.get(n)||t.na.has(s)||(Hs("SyncEngine","New document in limbo: "+n),t.na.add(s),Hh(t))}function Hh(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new Fi(Ti.fromString(e)),s=t.aa.next();t.ia.set(s,new Dh(n)),t.sa=t.sa.insert(n,s),Bu(t.remoteStore,new Ba(Vr(kr(n.path)),s,2,ci.A))}}async function Wh(t,e,n){const s=Zs(t),i=[],r=[],o=[];s.ta.isEmpty()||(s.ta.forEach(((t,a)=>{o.push(s.ha(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ja.Js(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Zu.Ko(i),await async function(t,e){const n=Zs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Va.forEach(e,(e=>Va.forEach(e.zs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Va.forEach(e.Hs,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Pa(t))throw t;Hs("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.si.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.si=n.si.insert(t,i)}}}(s.localStore,r))}async function Xh(t,e){const n=Zs(t);if(!n.currentUser.isEqual(e)){Hs("SyncEngine","User change. New user:",e.toKey());const t=await nu(n.localStore,e);n.currentUser=e,function(t,e){t.ua.forEach((t=>{t.forEach((t=>{t.reject(new ei(ti.CANCELLED,e))}))})),t.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Wh(n,t.ci)}}function Yh(t,e){const n=Zs(t),s=n.ia.get(e);if(s&&s.Xu)return jo().add(s.key);{let t=jo();const s=n.ea.get(e);if(!s)return t;for(const e of s){const s=n.ta.get(e);t=t.unionWith(s.view.qu)}return t}}function Qh(t){const e=Zs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fh.bind(null,e),e.Zu.Ko=bh.bind(null,e.eventManager),e.Zu.la=Sh.bind(null,e.eventManager),e}function Jh(t){const e=Zs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qh.bind(null,e),e}class Zh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Ru(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return eu(this.persistence,new Za,t.initialUser,this.M)}_a(t){return new Eu(bu.Wi,this.M)}da(t){return new Iu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ph(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xh.bind(null,this.syncEngine),await ch(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new wh}createDatastore(t){const e=Ru(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new ku(s));var s;return function(t,e,n,s){return new Vu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Ph(this.syncEngine,t,0),r=Cu.vt()?new Cu:new Au,new Fu(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Rh(t,e,n,s,i,r);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Zs(t);Hs("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await qu(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nc{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ks.UNAUTHENTICATED,this.clientId=di.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ei(ti.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ph(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function sc(t,e){t.asyncQueue.verifyOperationInProgress(),Hs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await nu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ic(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rc(t);Hs("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>hh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>hh(e.remoteStore,n))),t.onlineComponents=e}async function rc(t){return t.offlineComponents||(Hs("FirestoreClient","Using default OfflineComponentProvider"),await sc(t,new Zh)),t.offlineComponents}async function oc(t){return t.onlineComponents||(Hs("FirestoreClient","Using default OnlineComponentProvider"),await ic(t,new tc)),t.onlineComponents}function ac(t){return oc(t).then((t=>t.syncEngine))}async function uc(t){const e=await oc(t),n=e.eventManager;return n.onListen=Lh.bind(null,e.syncEngine),n.onUnlisten=Mh.bind(null,e.syncEngine),n}function hc(t,e,n={}){const s=new ni;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new ec({next:n=>{e.enqueueAndForget((()=>Th(t,o))),n.fromCache&&"server"===s.source?i.reject(new ei(ti.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ah(n,r,{includeMetadataChanges:!0,Du:!0});return Eh(t,o)}(await uc(t),t.asyncQueue,e,n,s))),s.promise}const cc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t,e,n){if(!n)throw new ei(ti.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dc(t,e,n,s){if(!0===e&&!0===s)throw new ei(ti.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fc(t){if(!Fi.isDocumentKey(t))throw new ei(ti.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pc(t){if(Fi.isDocumentKey(t))throw new ei(ti.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Qs()}function mc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ei(ti.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new ei(ti.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ei(ti.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ei(ti.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,dc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yc({}),this._settingsFrozen=!1,t instanceof Mi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ei(ti.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(t.options.projectId)}(t))}get app(){if(!this._app)throw new ei(ti.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ei(ti.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ii;switch(t.type){case"gapi":const e=t.client;return Js(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ai(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ei(ti.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cc.get(t);e&&(Hs("ComponentProvider","Removing Datastore"),cc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wc(this.firestore,t,this._key)}}class Ec{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ec(this.firestore,t,this._query)}}class Tc extends Ec{constructor(t,e,n){super(t,e,kr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wc(this.firestore,null,new Fi(t))}withConverter(t){return new Tc(this.firestore,t,this._path)}}function bc(t,e,...n){if(t=(0,c.m9)(t),lc("collection","path",e),t instanceof vc){const s=Ti.fromString(e,...n);return pc(s),new Tc(t,null,s)}{if(!(t instanceof wc||t instanceof Tc))throw new ei(ti.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ti.fromString(e,...n));return pc(s),new Tc(t.firestore,null,s)}}function Sc(t,e,...n){if(t=(0,c.m9)(t),1===arguments.length&&(e=di.R()),lc("doc","path",e),t instanceof vc){const s=Ti.fromString(e,...n);return fc(s),new wc(t,null,new Fi(s))}{if(!(t instanceof wc||t instanceof Tc))throw new ei(ti.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ti.fromString(e,...n));return fc(s),new wc(t.firestore,t instanceof Tc?t.converter:null,new Fi(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Lu(this,"async_queue_retry"),this.Ua=()=>{const t=Du();t&&Hs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Du();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const e=Du();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise((()=>{}));const e=new ni;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ka.push(t),this.Ka())))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(A){if(!Pa(A))throw A;Hs("AsyncQueue","Operation failed with retryable error: "+A)}this.ka.length>0&&this.So.Io((()=>this.Ka()))}}Ga(t){const e=this.Na.then((()=>(this.$a=!0,t().catch((t=>{this.Fa=t,this.$a=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Ws("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.$a=!1,t))))));return this.Na=e,e}enqueueAfterDelay(t,e,n){this.qa(),this.La.indexOf(t)>-1&&(e=0);const s=fh.createAndSchedule(this,t,e,n,(t=>this.Qa(t)));return this.Oa.push(s),s}qa(){this.Fa&&Qs()}verifyOperationInProgress(){}async ja(){let t;do{t=this.Na,await t}while(t!==this.Na)}Wa(t){for(const e of this.Oa)if(e.timerId===t)return!0;return!1}za(t){return this.ja().then((()=>{this.Oa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Oa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ja()}))}Ha(t){this.La.push(t)}Qa(t){const e=this.Oa.indexOf(t);this.Oa.splice(e,1)}}class Ac extends vc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ic,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Nc(this),this._firestoreClient.terminate()}}function Cc(t=(0,a.Mq)()){return(0,a.qX)(t,"firestore").getImmediate()}function _c(t){return t._firestoreClient||Nc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Nc(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new xi(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nc(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ei(ti.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dc(Ai.fromBase64String(t))}catch(t){throw new ei(ti.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Dc(Ai.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ei(ti.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ei(ti.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return fi(this._lat,t._lat)||fi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=/^__.*__$/;class Mc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new vo(t,this.data,this.fieldMask,e,this.fieldTransforms):new yo(t,this.data,e,this.fieldTransforms)}}function Oc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qs()}}class Vc{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(t){return new Vc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Xa({path:n,tc:!1});return s.ec(t),s}nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Xa({path:n,tc:!1});return s.Ja(),s}sc(t){return this.Xa({path:void 0,tc:!0})}ic(t){return Hc(t,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ja(){if(this.path)for(let t=0;t<this.path.length;t++)this.ec(this.path.get(t))}ec(t){if(0===t.length)throw this.ic("Document fields must not be empty");if(Oc(this.Ya)&&xc.test(t))throw this.ic('Document fields cannot begin and end with "__"')}}class Pc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Ru(t)}uc(t,e,n,s=!1){return new Vc({Ya:t,methodName:e,oc:n,path:Si.emptyPath(),tc:!1,rc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Fc(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new Pc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uc(t,e,n,s,i,r={}){const o=t.uc(r.merge||r.mergeFields?2:0,e,n,i);Kc("Data must be an object, but it was:",o,s);const a=Bc(s,o);let u,h;if(r.merge)u=new Ii(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=$c(e,s,n);if(!o.contains(i))throw new ei(ti.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Wc(t,i)||t.push(i)}u=new Ii(t),h=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,h=o.fieldTransforms;return new Mc(new Zi(a),u,h)}function qc(t,e){if(jc(t=(0,c.m9)(t)))return Kc("Unsupported field value:",e,t),Bc(t,e);if(t instanceof Rc)return function(t,e){if(!Oc(e.Ya))throw e.ic(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ic(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&4!==e.Ya)throw e.ic("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=qc(i,e.sc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hr(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=gi.fromDate(t);return{timestampValue:sa(e.M,n)}}if(t instanceof gi){const n=new gi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sa(e.M,n)}}if(t instanceof Lc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Dc)return{bytesValue:ia(e.M,t._byteString)};if(t instanceof wc){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ic(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ic(`Unsupported field value: ${gc(t)}`)}(t,e)}function Bc(t,e){const n={};return wi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,((t,s)=>{const i=qc(s,e.Za(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof gi||t instanceof Lc||t instanceof Dc||t instanceof wc||t instanceof Rc)}function Kc(t,e,n){if(!jc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=gc(n);throw"an object"===s?e.ic(t+" a custom object"):e.ic(t+" "+s)}}function $c(t,e,n){if((e=(0,c.m9)(e))instanceof kc)return e._internalPath;if("string"==typeof e)return zc(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gc=new RegExp("[~\\*/\\[\\]]");function zc(t,e,n){if(e.search(Gc)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch(s){throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new ei(ti.INVALID_ARGUMENT,a+t+u)}function Wc(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Yc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Yc extends Xc{data(){return super.data()}}function Qc(t,e){return"string"==typeof e?zc(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zc extends Xc{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Qc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tl extends Zc{data(t={}){return super.data(t)}}class el{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Jc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new tl(this._firestore,this._userDataWriter,n.key,n,new Jc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ei(ti.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new tl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Jc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new tl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Jc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:nl(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sl(t){if(Rr(t)&&0===t.explicitOrderBy.length)throw new ei(ti.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{convertValue(t,e="none"){switch(Ui(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ni(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ki(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Qs()}}convertObject(t,e){const n={};return vi(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Lc(Ni(t.latitude),Ni(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ri(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Li(t));default:return null}}convertTimestamp(t){const e=_i(t);return new gi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ti.fromString(t);Js(Ra(n));const s=new Mi(n.get(1),n.get(3)),i=new Fi(n.popFirst(5));return s.isEqual(e)||Ws(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class ol extends il{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wc(this.firestore,null,e)}}function al(t){t=mc(t,Ec);const e=mc(t.firestore,Ac),n=_c(e),s=new ol(e);return sl(t._query),hc(n,t._query).then((n=>new el(e,s,t,n)))}function ul(t,e){const n=mc(t.firestore,Ac),s=Sc(t),i=rl(t.converter,e);return hl(n,[Uc(Fc(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,uo.exists(!1))]).then((()=>s))}function hl(t,e){return function(t,e){const n=new ni;return t.asyncQueue.enqueueAndForget((async()=>Oh(await ac(t),e,n))),n.promise}(_c(t),e)}!function(t,e=!0){!function(t){$s=t}(a.Jn),(0,a.Xd)(new u.wA("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Ac(s,new ri(t.getProvider("auth-internal")),new hi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,a.KN)(js,"3.4.7",t),(0,a.KN)(js,"3.4.7","esm2017")}();const cl=t=>((0,i.dD)("data-v-2692a6bc"),t=t(),(0,i.Cn)(),t),ll={class:"container"},dl=cl((()=>(0,i._)("i",{class:"fa-solid fa-house"},null,-1))),fl=(0,i.Uk)(" Home"),pl={class:"form"},gl={action:""},ml=cl((()=>(0,i._)("h1",null,"Donation Form",-1))),yl=cl((()=>(0,i._)("label",{for:""},"Your Name",-1))),vl=cl((()=>(0,i._)("label",{for:""},"Sum of Donation",-1))),wl=cl((()=>(0,i._)("label",{for:""},"The Goal of Your Donation",-1))),El=cl((()=>(0,i._)("option",{value:"water"},"Water",-1))),Tl=cl((()=>(0,i._)("option",{value:"food"},"Food",-1))),bl=cl((()=>(0,i._)("option",{value:"education"},"Education",-1))),Sl=[El,Tl,bl];var Il=(0,i.aZ)({setup(t){const e=(0,o.iH)(""),n=(0,o.iH)(""),s=(0,o.iH)(""),a=Cc(),u=bc(a,"donations");al(u).then((t=>{let e=[];t.docs.forEach((t=>{e.push({...t.data(),id:t.id})})),console.log(e)})).catch((t=>{console.log(t.message)}));const h=async()=>{await ul(u,{name:e.value,sum:n.value,goal:s.value})};return(t,o)=>{const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",ll,[(0,i.Wm)(a,{class:"link",to:{name:"Home"}},{default:(0,i.w5)((()=>[dl,fl])),_:1}),(0,i._)("div",pl,[(0,i._)("form",gl,[ml,yl,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t)},null,512),[[r.nr,e.value]]),vl,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>n.value=t),placeholder:"Sum"},null,512),[[r.nr,n.value]]),wl,(0,i.wy)((0,i._)("select",{name:"goal",id:"","onUpdate:modelValue":o[2]||(o[2]=t=>s.value=t)},Sl,512),[[r.bM,s.value]]),(0,i._)("button",{onClick:o[3]||(o[3]=(0,r.iM)((t=>h()),["prevent"])),type:"submit"}," Make a Donation ")])])])}}}),Al=n(89);const Cl=(0,Al.Z)(Il,[["__scopeId","data-v-2692a6bc"]]);var _l=Cl}}]);
//# sourceMappingURL=344.78fddccc.js.map