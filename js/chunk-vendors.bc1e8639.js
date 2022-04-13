(self["webpackChunkcharity"]=self["webpackChunkcharity"]||[]).push([[998],{9662:function(t,e,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7854),i=n(7976),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(1320),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),E=n(9711),_=c.Int8Array,T=_&&_.prototype,S=c.Uint8ClampedArray,C=S&&S.prototype,I=_&&v(_),A=T&&v(T),k=Object.prototype,R=c.TypeError,N=b("toStringTag"),x=E("TYPED_ARRAY_TAG"),D=E("TYPED_ARRAY_CONSTRUCTOR"),O=o&&!!w&&"Opera"!==f(c.opera),L=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},F=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(M,e)||h(P,e)},V=function(t){if(!l(t))return!1;var e=f(t);return h(M,e)||h(P,e)},U=function(t){if(V(t))return t;throw R("Target is not a typed array")},j=function(t){if(u(t)&&(!w||y(I,t)))return t;throw R(d(t)+" is not a typed array constructor")},B=function(t,e,n,r){if(a){if(n)for(var i in M){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}A[t]&&!n||g(A,t,n?e:O&&T[t]||e,r)}},$=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in M)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(I[t]&&!n)return;try{return g(I,t,n?e:O&&I[t]||e)}catch(s){}}for(r in M)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in M)i=c[r],s=i&&i.prototype,s?p(s,D,i):O=!1;for(r in P)i=c[r],s=i&&i.prototype,s&&p(s,D,i);if((!O||!u(I)||I===Function.prototype)&&(I=function(){throw R("Incorrect invocation")},O))for(r in M)c[r]&&w(c[r],I);if((!O||!A||A===k)&&(A=I.prototype,O))for(r in M)c[r]&&w(c[r].prototype,A);if(O&&v(C)!==A&&w(C,A),a&&!h(A,N))for(r in L=!0,m(A,N,{get:function(){return l(this)?this[x]:void 0}}),M)c[r]&&p(c[r],x,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:D,TYPED_ARRAY_TAG:L&&x,aTypedArray:U,aTypedArrayConstructor:j,exportTypedArrayMethod:B,exportTypedArrayStaticMethod:$,isView:F,isTypedArray:V,TypedArray:I,TypedArrayPrototype:A}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=r("".replace),s=function(t){return String(Error(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=i(t,o,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),f=n(5465),d=n(6200),p=n(3501),g="Object already initialized",m=a.TypeError,y=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var b=f.state||(f.state=new y),E=c(b.get),_=c(b.has),T=c(b.set);r=function(t,e){if(_(b,t))throw new m(g);return e.facade=t,T(b,t,e),e},i=function(t){return E(b,t)||{}},s=function(t){return _(b,t)}}else{var S=d("state");p[S]=!0,r=function(t,e){if(h(t,S))throw new m(g);return e.facade=t,l(t,S,e),e},i=function(t){return h(t,S)?t[S]:{}},s=function(t){return h(t,S)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),i=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),i=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=f(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},4488:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),s=r.Object;t.exports=function(t){return s(i(t))}},4590:function(t,e,n){var r=n(7854),i=n(3002),s=r.RangeError;t.exports=function(t,e){var n=i(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var r=n(7854),i=n(9303),s=r.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw s("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(7854),i=n(648),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var r=n(7854),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),f=n(7741),d=n(2914),p=n(1913);t.exports=function(t,e,n,g){var m=g?2:1,y=t.split("."),v=y[y.length-1],w=r.apply(null,y);if(w){var b=w.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return w;var E=r("Error"),_=e((function(t,e){var n=l(g?e:t,void 0),r=g?new w(t):new w;return void 0!==n&&s(r,"message",n),d&&s(r,"stack",f(r.stack,2)),this&&o(b,this)&&u(r,this,_),arguments.length>m&&h(r,arguments[m]),r}));if(_.prototype=b,"Error"!==v&&(a?a(_,E):c(_,E,{name:!0})),c(_,w),!p)try{b.name!==v&&s(b,"name",v),b.constructor=_}catch(T){}return _}}},2262:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=i(this),n=s(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},1703:function(t,e,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(s(this)),n=e.length,r=o(t),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(e,i)}})},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=i(e),r=s(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,f=h&&h.prototype,d=f&&f.set,p=s.aTypedArray,g=s.exportTypedArrayMethod,m=!u((function(){var t=new Uint8ClampedArray(2);return i(d,t,{length:1,0:3},1),3!==t[1]})),y=m&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return i(d,this,n,e);var r=this.length,s=o(n),u=0;if(s+e>r)throw l("Wrong length");while(u<s)this[e+u]=n[u++]}),!m||y)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),f=n(7741),d=n(1913),p="DOMException",g=i("Error"),m=i(p),y=function(){c(this,v);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new m(e,n),i=g(e);return i.name=p,o(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},v=y.prototype=m.prototype,w="stack"in g(p),b="stack"in new m(1,2),E=w&&!b;r({global:!0,forced:d||E},{DOMException:E?y:m});var _=i(p),T=_.prototype;if(T.constructor!==_)for(var S in d||o(T,"constructor",s(1,_)),h)if(a(h,S)){var C=h[S],I=C.s;a(_,I)||o(_,I,s(6,C.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return b},Mn:function(){return g},X3:function(){return x},ZR:function(){return w},b$:function(){return f},d:function(){return d},eu:function(){return y},hl:function(){return m},m9:function(){return C},ru:function(){return h},uI:function(){return l},vZ:function(){return T},w1:function(){return p}});n(1703),n(2801);
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
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
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return u().indexOf("Electron/")>=0}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const v="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=v,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?E(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new w(r,o,n);return a}}function E(t,e){return t.replace(_,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
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
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(S(n)&&S(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
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
 */
function C(t){return t&&t._delegate?t._delegate:t}
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
 */function I(t,e){return new Promise(((n,r)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;r(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class A{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e){return new k(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new R(this._db.createObjectStore(t,e))}close(){this._db.close()}}class k{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new R(this._transaction.objectStore(t))}}class R{constructor(t){this._store=t}index(t){return new N(this._store.index(t))}createIndex(t,e,n){return new N(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return I(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return I(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return I(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return I(t,"Error clearing IndexedDB object store")}}class N{constructor(t){this._index=t}get(t){const e=this._index.get(t);return I(e,"Error reading from IndexedDB")}}function x(t,e,n){return new Promise(((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=t=>{r(new A(t.target.result))},s.onerror=t=>{var e;i(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},s.onupgradeneeded=t=>{n(new A(s.result),t.oldVersion,t.newVersion,new k(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}}))}},4870:function(t,e,n){"use strict";n.d(e,{B:function(){return o},BK:function(){return $t},Bj:function(){return s},Fl:function(){return Gt},IU:function(){return kt},Jd:function(){return S},PG:function(){return St},SU:function(){return Ut},Um:function(){return Et},WL:function(){return Bt},X$:function(){return k},X3:function(){return At},XI:function(){return Pt},Xl:function(){return Rt},dq:function(){return Lt},iH:function(){return Mt},j:function(){return I},lk:function(){return C},qj:function(){return bt},qq:function(){return b},yT:function(){return It}});var r=n(7139);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return i=this,t()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30;let y;const v=Symbol(""),w=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=_;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,_=!0,g=1<<++p,p<=m?h(this):E(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,y=this.parent,_=e,this.parent=void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _=!0;const T=[];function S(){T.push(_),_=!1}function C(){const t=T.pop();_=void 0===t||t}function I(t,e,n){if(_&&y){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const i=void 0;A(r,i)}}function A(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function k(t,e,n,i,s,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"set":(0,r._N)(t)&&u.push(a.get(v));break}if(1===u.length)u[0]&&R(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);R(c(t))}}function R(t,e){for(const n of(0,r.kJ)(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(r.yk)),D=F(),O=F(!1,!0),L=F(!0),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=kt(this);for(let e=0,i=this.length;e<i;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){S();const n=kt(this)[e].apply(this,t);return C(),n}})),t}function F(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?x.has(i):N(i))return a;if(t||I(n,"get",i),e)return a;if(Lt(a)){const t=!o||!(0,r.S0)(i);return t?a.value:a}return(0,r.Kn)(a)?t?_t(a):bt(a):a}}const V=j(),U=j(!0);function j(t=!1){return function(e,n,i,s){let o=e[n];if(Ct(o)&&Lt(o)&&!Lt(i))return!1;if(!t&&!Ct(i)&&(It(i)||(i=kt(i),o=kt(o)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===kt(s)&&(a?(0,r.aU)(i,o)&&k(e,"set",n,i,o):k(e,"add",n,i)),c}}function B(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&k(t,"delete",e,void 0,i),s}function $(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&x.has(e)||I(t,"has",e),n}function q(t){return I(t,"iterate",(0,r.kJ)(t)?"length":v),Reflect.ownKeys(t)}const H={get:D,set:V,deleteProperty:B,has:$,ownKeys:q},K={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},G=(0,r.l7)({},H,{get:O,set:U}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function X(t,e,n=!1,r=!1){t=t["__v_raw"];const i=kt(t),s=kt(e);e!==s&&!n&&I(i,"get",e),!n&&I(i,"get",s);const{has:o}=W(i),a=r?z:n?xt:Nt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],r=kt(n),i=kt(t);return t!==i&&!e&&I(r,"has",t),!e&&I(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Y(t,e=!1){return t=t["__v_raw"],!e&&I(kt(t),"iterate",v),Reflect.get(t,"size",t)}function Q(t){t=kt(t);const e=kt(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function Z(t,e){e=kt(e);const n=kt(this),{has:i,get:s}=W(n);let o=i.call(n,t);o||(t=kt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function tt(t){const e=kt(this),{has:n,get:r}=W(e);let i=n.call(e,t);i||(t=kt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&k(e,"delete",t,void 0,s),o}function et(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=kt(s),a=e?z:t?xt:Nt;return!t&&I(o,"iterate",v),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=kt(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?z:e?xt:Nt;return!e&&I(o,"iterate",u?w:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function st(){const t={get(t){return X(this,t)},get size(){return Y(this)},has:J,add:Q,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return X(this,t,!1,!0)},get size(){return Y(this)},has:J,add:Q,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return X(this,t,!0)},get size(){return Y(this,!0)},has(t){return J.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!1)},r={get(t){return X(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return J.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=rt(i,!1,!1),n[i]=rt(i,!0,!1),e[i]=rt(i,!1,!0),r[i]=rt(i,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=st();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return Ct(t)?t:Tt(t,!1,H,ht,pt)}function Et(t){return Tt(t,!1,G,ft,gt)}function _t(t){return Tt(t,!0,K,dt,mt)}function Tt(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function St(t){return Ct(t)?St(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ct(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function At(t){return St(t)||Ct(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Rt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Nt=t=>(0,r.Kn)(t)?bt(t):t,xt=t=>(0,r.Kn)(t)?_t(t):t;function Dt(t){_&&y&&(t=kt(t),A(t.dep||(t.dep=c())))}function Ot(t,e){t=kt(t),t.dep&&R(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Pt(t){return Ft(t,!0)}function Ft(t,e){return Lt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:Nt(t)}get value(){return Dt(this),this._value}set value(t){t=this.__v_isShallow?t:kt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Nt(t),Ot(this,t))}}function Ut(t){return Lt(t)?t.value:t}const jt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Bt(t){return St(t)?t:new Proxy(t,jt)}function $t(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=Ht(t,n);return e}class qt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ht(t,e,n){const r=t[e];return Lt(r)?r:new qt(t,e,n)}class Kt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Kt(i,s,o||!s,n);return a}Promise.resolve()},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Ah:function(){return Dt},Cn:function(){return B},FN:function(){return bn},Fl:function(){return Pn},HY:function(){return De},JJ:function(){return Y},Ko:function(){return ln},P$:function(){return ct},Q6:function(){return pt},U2:function(){return lt},Uk:function(){return en},Us:function(){return Ee},WI:function(){return hn},Wm:function(){return Ye},Y3:function(){return _},Y8:function(){return st},YP:function(){return tt},_:function(){return Je},aZ:function(){return gt},bv:function(){return kt},dD:function(){return j},f3:function(){return Q},h:function(){return Fn},iD:function(){return qe},ic:function(){return Nt},j4:function(){return He},kq:function(){return rn},nK:function(){return dt},uE:function(){return nn},up:function(){return ke},w5:function(){return $},wg:function(){return Ve},wy:function(){return de}});n(1703);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=[];let y=null,v=0;const w=Promise.resolve();let b=null,E=null;function _(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function T(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=D(h[r]);i<t?e=r+1:n=r}return e}function S(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||t===E||(null==t.id?h.push(t):h.splice(T(t.id),0,t),C())}function C(){u||l||(l=!0,b=w.then(O))}function I(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function A(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),C()}function k(t){A(t,p,d,g)}function R(t){A(t,y,m,v)}function N(t,e=null){if(d.length){for(E=e,p=[...new Set(d)],d.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,E=null,N(t,e)}}function x(t){if(m.length){const t=[...new Set(m)];if(m.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>D(t)-D(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const D=t=>null==t.id?1/0:t.id;function O(t){l=!1,u=!0,N(t),h.sort(((t,e)=>D(t)-D(e)));i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,x(t),u=!1,b=null,(h.length||d.length||m.length)&&O(t)}}new Set;new Map;function L(t,e,...n){const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o?s=n.map((t=>t.trim())):e&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function M(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=M(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function P(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let F=null,V=null;function U(t){const e=F;return F=t,V=t&&t.type.__scopeId||null,e}function j(t){V=t}function B(){V=null}function $(t,e=F,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Be(-1);const i=U(e),s=t(...n);return U(i),r._d&&Be(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function q(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=U(t);try{if(4&n.shapeFlag){const t=s||r;v=sn(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=sn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:H(l)}}catch(_){Pe.length=0,a(_,t,1),v=Ye(Le)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(i.tR)&&(w=K(w,c)),E=tn(E,w))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,U(b),v}const H=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},K=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function G(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||z(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?z(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!P(u,n))return!0}}return!1}function z(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!P(n,s))return!0}return!1}function W({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const X=t=>t.__isSuspense;function J(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):R(t)}function Y(t,e){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[t]=e}else 0}function Q(t,e,n=!1){const r=wn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=wn;let f,d,p=!1,g=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,p=t.some(r.PG),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?it(t):(0,i.mf)(t)?s(t,h,2):void 0))):f=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:i.dG,e&&a){const t=f;f=()=>it(t())}let m=t=>{d=b.onStop=()=>{s(t,h,4)}};if(In)return m=i.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),i.dG;let y=g?[]:Z;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,i.aU)(t,y[e]))):(0,i.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===Z?void 0:y,m]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>be(v,h&&h.suspense):()=>{!h||h.isMounted?k(v):v()};const b=new r.qq(f,w);return e?n?v():y=b.run():"post"===c?be(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function nt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=wn;En(this);const c=et(s,o.bind(r),n);return a?En(a):_n(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))it(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)it(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{it(t,e)}));else if((0,i.PO)(t))for(const n in t)it(t[n],e);return t}function st(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt((()=>{t.isMounted=!0})),xt((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],at={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=bn(),i=st();let s;return()=>{const o=e.default&&pt(e.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(t),{mode:c}=a;const u=o[0];if(i.isLeaving)return ht(u);const l=ft(u);if(!l)return ht(u);const h=lt(l,a,i,n);dt(l,h);const f=n.subTree,d=f&&ft(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Le&&(!Ge(l,d)||p)){const t=lt(d,a,i,n);if(dt(d,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ht(u);"in-out"===c&&l.type!==Le&&(t.delayLeave=(t,e,n)=>{const r=ut(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},ct=at;function ut(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lt(t,e,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=e,b=String(t.key),E=ut(n,t),_=(t,e)=>{t&&o(t,r,9,e)},T={mode:s,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!i)return;r=m||c}e._leaveCb&&e._leaveCb(!0);const s=E[b];s&&Ge(t,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[e])},enter(t){let e=u,r=l,s=h;if(!n.isMounted){if(!i)return;e=y||u,r=v||l,s=w||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?s:r,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),_(n?g:p,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,d?(d(e,o),d.length<=1&&o()):o()},clone(t){return lt(t,e,n,r)}};return T}function ht(t){if(yt(t))return t=tn(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pt(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===De?(128&s.patchFlag&&r++,n=n.concat(pt(s.children,e))):(e||s.type!==Le)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function gt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const mt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive;RegExp,RegExp;function vt(t,e){return(0,i.kJ)(t)?t.some((t=>vt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function wt(t,e){Et(t,"a",e)}function bt(t,e){Et(t,"da",e)}function Et(t,e,n=wn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Ct(e,r,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&_t(r,e,n,t),t=t.parent}}function _t(t,e,n,r){const s=Ct(e,t,r,!0);Dt((()=>{(0,i.Od)(r[e],s)}),n)}function Tt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function St(t){return 128&t.shapeFlag?t.ssContent:t}function Ct(t,e,n=wn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const s=o(e,n,t,i);return _n(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const It=t=>(e,n=wn)=>(!In||"sp"===t)&&Ct(t,e,n),At=It("bm"),kt=It("m"),Rt=It("bu"),Nt=It("u"),xt=It("bum"),Dt=It("um"),Ot=It("sp"),Lt=It("rtg"),Mt=It("rtc");function Pt(t,e=wn){Ct("ec",t,e)}let Ft=!0;function Vt(t){const e=$t(t),n=t.proxy,s=t.ctx;Ft=!1,e.beforeCreate&&jt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:S,renderTriggered:C,errorCaptured:I,serverPrefetch:A,expose:k,inheritAttrs:R,components:N,directives:x,filters:D}=e,O=null;if(h&&Ut(h,s,O,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Ft=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Pn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Bt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Y(e,t[e])}))}function L(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&jt(f,t,"c"),L(At,d),L(kt,p),L(Rt,g),L(Nt,m),L(wt,y),L(bt,v),L(Pt,I),L(Mt,S),L(Lt,C),L(xt,b),L(Dt,_),L(Ot,A),(0,i.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=R&&(t.inheritAttrs=R),N&&(t.components=N),x&&(t.directives=x)}function Ut(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=zt(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?Q(n.from||o,n.default,!0):Q(n.from||o):Q(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function jt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Bt(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&tt(s,n)}else if((0,i.mf)(t))tt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Bt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&tt(s,r,t)}else 0}function $t(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>qt(c,t,o,!0))),qt(c,e,o)):c=e,s.set(e,c),c}function qt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&qt(t,s,n,!0),i&&i.forEach((e=>qt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Ht[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Ht={data:Kt,props:Xt,emits:Xt,methods:Xt,computed:Xt,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Xt,directives:Xt,watch:Jt,provide:Kt,inject:Gt};function Kt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function Gt(t,e){return Xt(zt(t),zt(e))}function zt(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xt(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function Jt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=Wt(t[r],e[r]);return n}function Yt(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,ze,1),t.propsDefaults=Object.create(null),Zt(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function Qt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Zt(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=te(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=te(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function Zt(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:P(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=te(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function te(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(En(s),r=i[n]=t.call(null,e),_n())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ee(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=ee(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);ne(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(ne(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=se(Boolean,r.type),n=se(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function ne(t){return"$"!==t[0]}function re(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ie(t,e){return re(t)===re(e)}function se(t,e){return(0,i.kJ)(e)?e.findIndex((e=>ie(e,t))):(0,i.mf)(e)&&ie(e,t)?0:-1}const oe=t=>"_"===t[0]||"$stable"===t,ae=t=>(0,i.kJ)(t)?t.map(sn):[sn(t)],ce=(t,e,n)=>{const r=$(((...t)=>ae(e(...t))),n);return r._c=!1,r},ue=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oe(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=ce(s,n,r);else if(null!=n){0;const t=ae(n);e[s]=()=>t}}},le=(t,e)=>{const n=ae(e);t.slots.default=()=>n},he=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):ue(e,t.slots={})}else t.slots={},e&&le(t,e);(0,i.Nj)(t.slots,ze,1)},fe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,ue(e,s)),a=e}else e&&(le(t,e),a={default:1});if(o)for(const i in s)oe(i)||i in a||delete s[i]};function de(t,e){const n=F;if(null===n)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&it(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function pe(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function ge(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let me=0;function ye(t,e){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=ge(),o=new Set;let a=!1;const c=s.app={_uid:me++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Vn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){const l=Ye(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,On(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function ve(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>ve(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(mt(o)&&!a)return;const c=4&o.shapeFlag?On(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,l,12,[u,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const s=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?d[h]=[c]:(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,t.k&&(d[t.k]=u))};u?(s.id=-1,be(s,n)):s()}else 0}}function we(){}const be=J;function Ee(t){return _e(t)}function _e(t,e){we();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:y}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ge(t,e)&&(r=Z(t),z(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Oe:w(t,e,n,r);break;case Le:b(t,e,n,r);break;case Me:null==t&&E(e,n,r,o);break;case De:M(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&ve(l,t&&t.ref,s,e||t,!e)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,i,s,o,a,c):D(t,e,i,s,o,a,c)},A=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==m&&-1===b)d=t.el=m(t.el);else{if(d=t.el=c(t.type,u,y&&y.is,y),8&v?f(d,t.children):16&v&&R(t.children,d,null,r,o,u&&"foreignObject"!==g,l,h),E&&pe(t,null,r,"created"),y){for(const e in y)"value"===e||(0,i.Gg)(e)||a(d,e,null,y[e],u,t.children,r,o,Q);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&un(p,r,t)}k(d,t,t.scopeId,l,r)}E&&pe(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(d),s(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&be((()=>{p&&un(p,r,t),_&&w.enter(d),E&&pe(t,null,r,"mounted")}),o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?on(t[u]):sn(t[u]);v(null,c,e,n,r,i,s,o,a)}},D=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&Te(n,!1),(m=g.onVnodeBeforeUpdate)&&un(m,n,e,t),d&&pe(e,t,n,"beforeUpdate"),n&&Te(n,!0);const y=s&&"foreignObject"!==e.type;if(h?O(t.dynamicChildren,h,u,n,r,y,o):c||B(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)L(u,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,Q)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||L(u,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&be((()=>{m&&un(m,n,e,t),d&&pe(e,t,n,"updated")}),r)},O=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===De||!Ge(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},L=(t,e,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,Q)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,Q);"value"in r&&a(t,"value",n.value,r.value)}},M=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children,n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Se(t,e,!0)):B(t,e,n,f,i,o,a,c,l)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):F(e,n,r,i,s,o,c):V(t,e,c)},F=(t,e,n,r,i,s,o)=>{const a=t.component=vn(t,r,i);if(yt(t)&&(a.ctx.renderer=et),An(a),a.asyncDep){if(i&&i.registerDep(a,U),!t.el){const t=a.subTree=Ye(Le);b(null,t,e,n)}}else U(a,t,e,n,i,s,o)},V=(t,e,n)=>{const r=e.component=t.component;if(G(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,I(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},U=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Te(t,!1),n?(n.el=l.el,j(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&un(e,u,n,l),Te(t,!0);const f=q(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&W(t,f.el),s&&be(s,o),(e=n.props&&n.props.onVnodeUpdated)&&be((()=>un(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=mt(e);if(Te(t,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&un(r,f,e),Te(t,!0),c&&rt){const n=()=>{t.subTree=q(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=q(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&be(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;be((()=>un(r,f,t)),o)}256&e.shapeFlag&&t.a&&be(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>S(t.update)),t.scope),h=t.update=l.run.bind(l);h.id=t.uid,Te(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Qt(t,e.props,i,n),fe(t,e.children,n),(0,r.Jd)(),N(void 0,t.update),(0,r.lk)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void H(u,h,n,r,i,s,o,a,c);if(256&d)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&f(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?on(e[d]):sn(e[d]);v(t[d],r,n,null,s,o,a,c,u)}l>h?Q(t,s,o,!0,!1,f):R(e,n,r,s,o,a,c,u,f)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?on(e[l]):sn(e[l]);if(!Ge(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?on(e[d]):sn(e[d]);if(!Ge(r,i))break;v(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?on(e[l]):sn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)z(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?on(e[l]):sn(e[l]);null!=t.key&&m.set(t.key,l)}let y,w=0;const b=d-g+1;let E=!1,_=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&Ge(r,e[y])){i=y;break}void 0===i?z(r,s,o,!0):(T[i-g]=l+1,i>=_?_=i:E=!0,v(r,e[i],n,null,s,o,a,c,u),w++)}const S=E?Ce(T):i.Z6;for(y=S.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,c,u):E&&(y<0||l!==S[y]?K(i,n,f,2):y--)}}},K=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===De){s(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===Me)return void _(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),be((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},z=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&ve(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!mt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&un(g,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&pe(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==De||h>0&&64&h)?Q(u,e,n,!1,!0):(s===De&&384&h||!i&&16&l)&&Q(c,e,n),r&&X(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&be((()=>{g&&un(g,e,t),d&&pe(t,null,e,"unmounted")}),n)},X=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===De)return void J(n,r);if(e===Me)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,z(a,t,e,n)),c&&be(c,e),be((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Q=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)z(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),x(),e._vnode=t},et={p:v,um:z,m:K,r:X,mt:F,mc:R,pc:B,pbc:O,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:ye(tt,nt)}}function Te({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Se(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=on(s[i]),e.el=t.el),n||Se(t,e))}}function Ce(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ie=t=>t.__isTeleport;const Ae="components";function ke(t,e){return Ne(Ae,t,!0,e)||t}const Re=Symbol();function Ne(t,e,n=!0,r=!1){const s=F||wn;if(s){const n=s.type;if(t===Ae){const t=Ln(n);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=xe(s[t]||n[t],e)||xe(s.appContext[t],e);return!o&&r?n:o}}function xe(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const De=Symbol(void 0),Oe=Symbol(void 0),Le=Symbol(void 0),Me=Symbol(void 0),Pe=[];let Fe=null;function Ve(t=!1){Pe.push(Fe=t?null:[])}function Ue(){Pe.pop(),Fe=Pe[Pe.length-1]||null}let je=1;function Be(t){je+=t}function $e(t){return t.dynamicChildren=je>0?Fe||i.Z6:null,Ue(),je>0&&Fe&&Fe.push(t),t}function qe(t,e,n,r,i,s){return $e(Je(t,e,n,r,i,s,!0))}function He(t,e,n,r,i){return $e(Ye(t,e,n,r,i,!0))}function Ke(t){return!!t&&!0===t.__v_isVNode}function Ge(t,e){return t.type===e.type&&t.key===e.key}const ze="__vInternal",We=({key:t})=>null!=t?t:null,Xe=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:F,r:t,k:e,f:!!n}:t:null;function Je(t,e=null,n=null,r=0,s=null,o=(t===De?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&We(e),ref:e&&Xe(e),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(an(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),je>0&&!a&&Fe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Fe.push(u),u}const Ye=Qe;function Qe(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Re||(t=Le),Ke(t)){const r=tn(t,e,!0);return n&&an(r,n),r}if(Mn(t)&&(t=t.__vccOpts),e){e=Ze(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:X(t)?128:Ie(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return Je(t,e,n,s,o,c,a,!0)}function Ze(t){return t?(0,r.X3)(t)||ze in t?(0,i.l7)({},t):t:null}function tn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?cn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&We(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(Xe(e)):[s,Xe(e)]:Xe(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tn(t.ssContent),ssFallback:t.ssFallback&&tn(t.ssFallback),el:t.el,anchor:t.anchor};return u}function en(t=" ",e=0){return Ye(Oe,null,t,e)}function nn(t,e){const n=Ye(Me,null,t);return n.staticCount=e,n}function rn(t="",e=!1){return e?(Ve(),He(Le,null,t)):Ye(Le,null,t)}function sn(t){return null==t||"boolean"===typeof t?Ye(Le):(0,i.kJ)(t)?Ye(De,null,t.slice()):"object"===typeof t?on(t):Ye(Oe,null,String(t))}function on(t){return null===t.el||t.memo?t:tn(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ze in e?3===r&&F&&(1===F.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=F}}else(0,i.mf)(e)?(e={default:e,_ctx:F},n=32):(e=String(e),64&r?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){o(t,e,7,[n,r])}function ln(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function hn(t,e,n={},r,i){if(F.isCE)return Ye("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ve();const o=s&&fn(s(n)),a=He(De,{key:n.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function fn(t){return t.some((t=>!Ke(t)||t.type!==Le&&!(t.type===De&&!fn(t.children))))?t:null}const dn=t=>t?Tn(t)?On(t)||t.proxy:dn(t.parent):null,pn=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dn(t.parent),$root:t=>dn(t.root),$emit:t=>t.emit,$options:t=>$t(t),$forceUpdate:t=>()=>S(t.update),$nextTick:t=>_.bind(t.proxy),$watch:t=>nt.bind(t)}),gn={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Ft&&(c[e]=0)}}const f=pn[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(pn,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?this.set(t,e,n.get(),null):null!=n.value&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const mn=ge();let yn=0;function vn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||mn,a={uid:yn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ee(s,o),emitsOptions:M(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let wn=null;const bn=()=>wn||F,En=t=>{wn=t,t.scope.on()},_n=()=>{wn&&wn.scope.off(),wn=null};function Tn(t){return 4&t.vnode.shapeFlag}let Sn,Cn,In=!1;function An(t,e=!1){In=e;const{props:n,children:r}=t.vnode,i=Tn(t);Yt(t,n,i,e),he(t,r);const s=i?kn(t,e):void 0;return In=!1,s}function kn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,gn));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Dn(t):null;En(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),_n(),(0,i.tI)(c)){if(c.then(_n,_n),e)return c.then((n=>{Rn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Rn(t,c,e)}else Nn(t,e)}function Rn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Nn(t,n)}function Nn(t,e,n){const s=t.type;if(!t.render){if(!e&&Sn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Sn(e,c)}}t.render=s.render||i.dG,Cn&&Cn(t)}En(t),(0,r.Jd)(),Vt(t),(0,r.lk)(),_n()}function xn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Dn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=xn(t))},slots:t.slots,emit:t.emit,expose:e}}function On(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in pn?pn[n](t):void 0}}))}function Ln(t){return(0,i.mf)(t)&&t.displayName||t.name}function Mn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Pn=(t,e)=>(0,r.Fl)(t,e,In);function Fn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Ke(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ke(n)&&(n=[n]),Ye(t,e,n))}Symbol("");const Vn="3.2.31"},9242:function(t,e,n){"use strict";n.d(e,{F8:function(){return lt},bM:function(){return it},iM:function(){return ut},nr:function(){return rt},ri:function(){return gt},uT:function(){return F}});var r=n(7139),i=n(3396);n(4870);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?o.createElementNS(s,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){for(const t in n)f(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);h.test(n)?t.setProperty((0,r.rs)(i),n.replace(h,""),"important"):t[i]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.kC)(i);for(let r=0;r<d.length;r++){const n=d[r]+i;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=(0,r.yA)(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let w=Date.now,b=!1;if("undefined"!==typeof window){w()>document.createEvent("Event").timeStamp&&(w=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);b=!!(t&&Number(t[1])<=53)}let E=0;const _=Promise.resolve(),T=()=>{E=0},S=()=>E||(_.then(T),E=w());function C(t,e,n,r){t.addEventListener(e,n,r)}function I(t,e,n,r){t.removeEventListener(e,n,r)}function A(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=R(e);if(r){const o=s[e]=N(r,i);C(t,n,o,a)}else o&&(I(t,n,o,a),s[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function R(t){let e;if(k.test(t)){let n;e={};while(n=t.match(k))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function N(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,i.$d)(x(t,n.value),e,5,[t])};return n.value=t,n.attached=S(),n}function x(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,O=(t,e,n,i,s=!1,o,a,c,h)=>{"class"===e?u(t,i,s):"style"===e?l(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||A(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,i,s))?v(t,e,i,o,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function L(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",P="animation",F=(t,{slots:e})=>(0,i.h)(i.P$,B(t),e);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},i.P$.props,V),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in V||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=$(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:S=w,onAppearCancelled:C=b}=e,I=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},A=(t,e)=>{K(t,p),K(t,d),e&&e()},k=t=>(e,n)=>{const r=t?S:w,s=()=>I(e,t,n);U(r,[e,s]),G((()=>{K(e,t?u:o),H(e,t?h:c),j(r)||W(e,i,m,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),H(t,o),H(t,a)},onBeforeAppear(t){U(T,[t]),H(t,u),H(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){const n=()=>A(t,e);H(t,f),Q(),H(t,d),G((()=>{K(t,f),H(t,p),j(E)||W(t,i,y,n)})),U(E,[t,n])},onEnterCancelled(t){I(t,!1),U(b,[t])},onAppearCancelled(t){I(t,!0),U(C,[t])},onLeaveCancelled(t){A(t),U(_,[t])}})}function $(t){if(null==t)return null;if((0,r.Kn)(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){const e=(0,r.He)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let z=0;function W(t,e,n,r){const i=t._endId=++z,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=X(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function X(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(M+"Delay"),s=r(M+"Duration"),o=J(i,s),a=r(P+"Delay"),c=r(P+"Duration"),u=J(a,c);let l=null,h=0,f=0;e===M?o>0&&(l=M,h=o,f=s.length):e===P?u>0&&(l=P,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?M:P:null,f=l?l===M?s.length:c.length:0);const d=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"];return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,nt(e,"input"))}function nt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const rt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Z(s);const o=i||s.props&&"number"===s.props.type;C(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=(0,r.He)(i)),t._assign(i)})),n&&C(t,"change",(()=>{t.value=t.value.trim()})),e||(C(t,"compositionstart",tt),C(t,"compositionend",et),C(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const it={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=(0,r.DM)(e);C(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.He)(ot(t)):ot(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=Z(i)},mounted(t,{value:e}){st(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){st(t,e)}};function st(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let i=0,s=t.options.length;i<s;i++){const s=t.options[i],o=ot(s);if(n)(0,r.kJ)(e)?s.selected=(0,r.hq)(e,o)>-1:s.selected=e.has(o);else if((0,r.WV)(ot(s),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ot(t){return"_value"in t?t._value:t.value}const at=["ctrl","shift","alt","meta"],ct={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>at.some((n=>t[`${n}Key`]&&!e.includes(n)))},ut=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=ct[e[t]];if(r&&r(n,e))return}return t(n,...r)},lt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):ht(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),ht(t,!0),r.enter(t)):r.leave(t,(()=>{ht(t,!1)})):ht(t,e))},beforeUnmount(t,{value:e}){ht(t,e)}};function ht(t,e){t.style.display=e?t._vod:"none"}const ft=(0,r.l7)({patchProp:O},c);let dt;function pt(){return dt||(dt=(0,i.Us)(ft))}const gt=(...t)=>{const e=pt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=mt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function mt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return D},E9:function(){return rt},F7:function(){return S},Gg:function(){return H},HD:function(){return M},He:function(){return et},Kn:function(){return F},NO:function(){return _},Nj:function(){return tt},Od:function(){return A},PO:function(){return $},Pq:function(){return a},RI:function(){return R},S0:function(){return q},W7:function(){return B},WV:function(){return g},Z6:function(){return b},_A:function(){return z},_N:function(){return x},aU:function(){return Q},dG:function(){return E},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return N},kT:function(){return w},l7:function(){return I},mf:function(){return L},rs:function(){return X},tI:function(){return V},tR:function(){return C},yA:function(){return c},yk:function(){return P},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=M(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return M(t)||F(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=O(t),r=O(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>M(t)?t:null==t?"":N(t)||F(t)&&(t.toString===U||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||N(e)||$(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,S=t=>T.test(t),C=t=>t.startsWith("onUpdate:"),I=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k=Object.prototype.hasOwnProperty,R=(t,e)=>k.call(t,e),N=Array.isArray,x=t=>"[object Map]"===j(t),D=t=>"[object Set]"===j(t),O=t=>t instanceof Date,L=t=>"function"===typeof t,M=t=>"string"===typeof t,P=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,V=t=>F(t)&&L(t.then)&&L(t.catch),U=Object.prototype.toString,j=t=>U.call(t),B=t=>j(t).slice(8,-1),$=t=>"[object Object]"===j(t),q=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},G=/-(\w)/g,z=K((t=>t.replace(G,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,X=K((t=>t.replace(W,"-$1").toLowerCase())),J=K((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=K((t=>t?`on${J(t)}`:"")),Q=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(9684),i="firebase",s="9.6.10";
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
(0,r.KN)(i,s,"app")},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return sh},hJ:function(){return wl},PL:function(){return ih},ad:function(){return Tl}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506);var r,i=n(9684),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var S=0,C={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=g(this);delete C[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},A=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function k(t){t:{var e=Gn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function R(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var D,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function M(t,e){return t<e?-1:t>e?1:0}t:{var P=h.navigator;if(P){var F=P.userAgent;if(F){D=F;break t}}D=""}function V(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var H,K=L(D,"Opera"),G=L(D,"Trident")||L(D,"MSIE"),z=L(D,"Edge"),W=z||G,X=L(D,"Gecko")&&!(L(D.toLowerCase(),"webkit")&&!L(D,"Edge"))&&!(L(D,"Trident")||L(D,"MSIE"))&&!L(D,"Edge"),J=L(D.toLowerCase(),"webkit")&&!L(D,"Edge");function Y(){var t=h.document;return t?t.documentMode:void 0}t:{var Q="",Z=function(){var t=D;return X?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):K?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Q=Z?Z[1]:""),G){var tt=Y();if(null!=tt&&tt>parseFloat(Q)){H=String(tt);break t}}H=Q}var et,nt={};function rt(){return q((function(){let t=0;const e=O(String(H)).split("."),n=O("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=M(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||M(0==i[2].length,0==s[2].length)||M(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&G){var it=Y();et=it||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{$(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},_(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,r,i){if(r&&r.once)return _t(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=Rt(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=At(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Et(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Et(){function t(n){return e.call(t.src,t.listener,n)}var e=It;return t}function _t(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);return null}return n=Rt(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Rt(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mt(s,n,r,i),-1<n&&(dt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=At(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,i)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ct(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=At(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):dt(t)}}}function Ct(t){return t in vt?vt[t]:vt[t]="on"+t}function It(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&St(t),t=n.call(r,e)}return t}function At(t){return t=t[yt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Nt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),B(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Dt(o,r,!0,e)&&i}if(o=e.g=t,i=Dt(o,r,!0,e)&&i,i=Dt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Dt(o,r,!1,e)&&i}function Dt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(Nt,T),Nt.prototype[lt]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Mt{constructor(){this.h=this.g=null}add(t,e){const n=Ft.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Ft=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vt),(t=>t.reset()));class Vt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){Pt||Bt(),$t||(Pt(),$t=!0),qt.add(t,e)}function Bt(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(Ht)}}var $t=!1,qt=new Mt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Ft;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Kt(t,e){Nt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Kt,Nt),r=Kt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Gt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Kt.Z.M.call(this),Gt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){T.call(this),this.h=t,this.g={}}_(Jt,T);var Yt=[];function Qt(t,e,n,r){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var i=0;i<n.length;i++){var s=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){V(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ot(n)}catch(a){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),Zt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Nt}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();xt(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();xt(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(ue,at),oe.STAT_EVENT="statevent",_(he,at),oe.Na="timingevent",_(de,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var be,Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){at.call(this,"d")}function Te(){at.call(this,"c")}function Se(){}function Ce(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Jt(this),this.P=Ae,t=W?125:void 0,this.W=new Kt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ie}function Ie(){this.i=null,this.g="",this.h=!1}_(_e,at),_(Te,at),_(Se,ye),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},be=new Se;var Ae=45e3,ke={},Re={};function Ne(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Me(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ie,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==Re){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),je(t,r)}De(t)&&r!=Re&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Ve(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Re:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?Re:(e=e.substr(r,n),t.C=r+n,e)))}function Me(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Fe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ve(t){0==t.l.G||t.I||vr(t.l,t)}function Ue(t){Fe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yr(n),sr(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&yr(n),!x(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_r(r,r.H?r.la:null,r.W),o.J){An(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Fe(a),Me(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function Be(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)A(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Be(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ke(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ke(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ce.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Qn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=f?3:2),Fe(this);var n=this.g.ba();this.N=n;e:if(De(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Ve(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Ue(this),Ve(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Oe(this,l,o),W&&this.i&&3==l&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),je(this,o)),4==l&&Ue(this),this.i&&!this.I&&(4==l?vr(this.l,this):(this.i=!1,Me(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Ue(this),Ve(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(Fe(this),Oe(this,t,e),this.i&&4!=t&&Me(this))}},r.cancel=function(){this.I=!0,Ue(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),fe(17)),Ue(this),this.o=2,Ve(this)):Pe(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return Ke(this.h,t)?this.h[t]:e},r.set=function(t,e){Ke(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Ye(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=sn(n[2]||""),Ye(this,n[3]||"",!0),Qe(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Xe(t){return new We(t)}function Je(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?sn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Xe(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Je(i,t),e&&Ye(i,e),n&&Qe(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),Ke(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ke(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function mn(t,e){return pn(t),e=vn(t,e),Ke(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),N(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){A(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=R(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=R(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function En(t){this.l=t||_n,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function In(t,e){t.g?t.g.add(e):t.h=e}function An(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function Rn(){}function Nn(){this.g=new Rn}function xn(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;p(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=E(On,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(On,n,r,"TestLoadImage: error",!1,e),r.onabort=E(On,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(On,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function On(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Mn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Rn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Rn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Ln,ye),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),_(Mn,Nt);var Pn=0;function Fn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Mn.prototype,r.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Pn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vn(this):Un(this),3==this.readyState&&Fn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Vn(this))},r.Ta=function(t){this.g&&(this.response=t,Vn(this))},r.ha=function(){this.g&&Vn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Bn(t){Nt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}_(Bn,Nt);var $n="",qn=/^https?$/i,Hn=["POST","PUT"];function Kn(t){return G&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Jn(t)}function Wn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))zt(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ge)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Yn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||xt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return V(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new En(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Me(e)}Er(t)}function sr(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),yr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function ur(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),In(t.i,n),Ne(n,r,e)}function hr(t,e){t.j&&$e({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{xn(a,t,"req"+n+"_")}catch(Jr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,xe(n,t)}function yr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){yr(t),gr(t),t.g=null;var r=2}else{if(!Cn(t.i,e))return;n=e.D,An(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),xt(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Je(n,"https"),en(n)),Dn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),Er(t),or(t)}function Er(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){let r=nn(n);if(""!=r.i)e&&Ye(r,e+"."+r.i),Qe(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&V(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Bn(new Ln({ib:!0})):new Bn(t.qa),e.L=t.H,e}function Sr(){}function Cr(){if(G&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function Ir(t,e){Nt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rr(this)}function Ar(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function Rr(t){this.g=t}r=Bn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void zn(this,s)}t=n||"";const i=new qe(this.headers);r&&$e(r,(function(t,e){i.set(e,t)})),r=k(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=I(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ce(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=U(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),In(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Ne(i,n,null)):Ne(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),sr(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Cr.prototype.g=function(t,e){return new Ir(t,e)},_(Ir,Nt),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),cr(t)},Ir.prototype.close=function(){ir(this.g)},Ir.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Ot(t),ar(this.g,e)):ar(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Ir.Z.M.call(this)},_(Ar,_e),_(kr,Te),_(Rr,Sr),Rr.prototype.xa=function(){xt(this.g,"a")},Rr.prototype.wa=function(t){xt(this.g,new Ar(t))},Rr.prototype.va=function(t){xt(this.g,new kr(t))},Rr.prototype.ua=function(){xt(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Nr=u.createWebChannelTransport=function(){return new Cr},xr=u.getStatEventTarget=function(){return ce()},Dr=u.ErrorCode=ge,Or=u.EventType=me,Lr=u.Event=oe,Mr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=u.FetchXmlHttpFactory=Ln,Fr=u.WebChannel=we,Vr=u.XhrIo=Bn;const Ur="@firebase/firestore";
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
 */class jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
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
let Br="9.6.10";
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
 */const $r=new o.Yd("@firebase/firestore");function qr(){return $r.logLevel}function Hr(t,...e){if($r.logLevel<=o["in"].DEBUG){const n=e.map(zr);$r.debug(`Firestore (${Br}): ${t}`,...n)}}function Kr(t,...e){if($r.logLevel<=o["in"].ERROR){const n=e.map(zr);$r.error(`Firestore (${Br}): ${t}`,...n)}}function Gr(t,...e){if($r.logLevel<=o["in"].WARN){const n=e.map(zr);$r.warn(`Firestore (${Br}): ${t}`,...n)}}function zr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw Kr(e),new Error(e)}function Xr(t,e){t||Wr()}function Jr(t,e){return t}
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
 */const Yr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(jr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new jr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function ci(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */ai.A=-1;class ui{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ci(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function li(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class fi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return fi.fromMillis(Date.now())}static fromDate(t){return fi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new fi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?li(this.nanoseconds,t.nanoseconds):li(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new fi(0,0))}static max(){return new di(new fi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class yi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===yi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vi extends yi{construct(t,e,n){return new vi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qr(Yr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vi(e)}static emptyPath(){return new vi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bi extends yi{construct(t,e,n){return new bi(t,e,n)}static isValidIdentifier(t){return wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Qr(Yr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Qr(Yr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qr(Yr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Qr(Yr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bi(e)}static emptyPath(){return new bi([])}}
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
 */class Ei{constructor(t){this.fields=t,t.sort(bi.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class _i{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new _i(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _i(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return li(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_i.EMPTY_BYTE_STRING=new _i("");const Ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=Ti.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ci(t.seconds),nanos:Ci(t.nanos)}}function Ci(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ii(t){return"string"==typeof t?_i.fromBase64String(t):_i.fromUint8Array(t)}
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
 */function Ai(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Ai(e)?ki(e):e}function Ri(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new fi(e.seconds,e.nanos)}
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
 */class Ni{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class xi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof xi&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Di(t){return null==t}function Oi(t){return 0===t&&1/t==-1/0}function Li(t){return"number"==typeof t&&Number.isInteger(t)&&!Oi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class Mi{constructor(t){this.path=t}static fromPath(t){return new Mi(vi.fromString(t))}static fromName(t){return new Mi(vi.fromString(t).popFirst(5))}static empty(){return new Mi(vi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===vi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Mi(new vi(t.slice()))}}
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
 */function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ai(t)?4:Xi(t)?9:10:Wr()}function Fi(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Si(t.timestampValue),r=Si(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ii(t.bytesValue).isEqual(Ii(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ci(t.geoPointValue.latitude)===Ci(e.geoPointValue.latitude)&&Ci(t.geoPointValue.longitude)===Ci(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ci(t.integerValue)===Ci(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ci(t.doubleValue),r=Ci(e.doubleValue);return n===r?Oi(n)===Oi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(pi(n)!==pi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Fi(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function Vi(t,e){return void 0!==(t.values||[]).find((t=>Fi(t,e)))}function Ui(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return li(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return li(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ci(t.integerValue||t.doubleValue),r=Ci(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ji(t.timestampValue,e.timestampValue);case 4:return ji(Ri(t),Ri(e));case 5:return li(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ii(t),r=Ii(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=li(n[i],r[i]);if(0!==t)return t}return li(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=li(Ci(t.latitude),Ci(e.latitude));return 0!==n?n:li(Ci(t.longitude),Ci(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ui(n[i],r[i]);if(t)return t}return li(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=li(r[o],s[o]);if(0!==t)return t;const e=Ui(n[r[o]],i[s[o]]);if(0!==e)return e}return li(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function ji(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return li(t,e);const n=Si(t),r=Si(e),i=li(n.seconds,r.seconds);return 0!==i?i:li(n.nanos,r.nanos)}function Bi(t){return $i(t)}function $i(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Si(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Mi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=$i(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${$i(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function qi(t){return!!t&&"integerValue"in t}function Hi(t){return!!t&&"arrayValue"in t}function Ki(t){return!!t&&"nullValue"in t}function Gi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zi(t){return!!t&&"mapValue"in t}function Wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Wi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Xi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ji{constructor(t){this.value=t}static empty(){return new Ji({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!zi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wi(e)}setAll(t){let e=bi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Wi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());zi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){gi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ji(Wi(this.value))}}function Yi(t){const e=[];return gi(t.fields,((t,n)=>{const r=new bi([t]);if(zi(n)){const t=Yi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ei(e)
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
 */}class Qi{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new Qi(t,0,di.min(),di.min(),Ji.empty(),0)}static newFoundDocument(t,e,n){return new Qi(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new Qi(t,2,e,di.min(),Ji.empty(),0)}static newUnknownDocument(t,e){return new Qi(t,3,e,di.min(),Ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Qi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Zi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Zi.UNKNOWN_ID=-1;function ts(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new fi(n+1,0):new fi(n,r));return new ns(i,Mi.empty(),e)}function es(t){return new ns(t.readTime,t.key,-1)}class ns{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ns(di.min(),Mi.empty(),-1)}static max(){return new ns(di.max(),Mi.empty(),-1)}}function rs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Mi.comparator(t.documentKey,e.documentKey),0!==n?n:li(t.largestBatchId,e.largestBatchId))}
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
 */class is{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function ss(t,e=null,n=[],r=[],i=null,s=null,o=null){return new is(t,e,n,r,i,s,o)}function os(t){const e=Jr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Bi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Bi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Bi(t))).join(",")),e.P=t}return e.P}function as(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Bi(e.value)}`;var e})).join(", ")}]`),Di(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Bi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Bi(t))).join(",")),`Target(${e})`}function cs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Es(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Fi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ts(t.startAt,e.startAt)&&Ts(t.endAt,e.endAt)}function us(t){return Mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ls extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new hs(t,e,n):"array-contains"===e?new gs(t,n):"in"===e?new ms(t,n):"not-in"===e?new ys(t,n):"array-contains-any"===e?new vs(t,n):new ls(t,e,n)}static V(t,e,n){return"in"===e?new fs(t,n):new ds(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Ui(e,this.value)):null!==e&&Pi(this.value)===Pi(e)&&this.v(Ui(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hs extends ls{constructor(t,e,n){super(t,e,n),this.key=Mi.fromName(n.referenceValue)}matches(t){const e=Mi.comparator(t.key,this.key);return this.v(e)}}class fs extends ls{constructor(t,e){super(t,"in",e),this.keys=ps("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ds extends ls{constructor(t,e){super(t,"not-in",e),this.keys=ps("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ps(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Mi.fromName(t.referenceValue)))}class gs extends ls{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hi(e)&&Vi(e.arrayValue,this.value)}}class ms extends ls{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Vi(this.value.arrayValue,e)}}class ys extends ls{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Vi(this.value.arrayValue,e)}}class vs extends ls{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Vi(this.value.arrayValue,t)))}}class ws{constructor(t,e){this.position=t,this.inclusive=e}}class bs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Es(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _s(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Mi.comparator(Mi.fromName(o.referenceValue),n.key):Ui(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ts(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ss{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Cs(t,e,n,r,i,s,o,a){return new Ss(t,e,n,r,i,s,o,a)}function Is(t){return new Ss(t)}function As(t){return!Di(t.limit)&&"F"===t.limitType}function ks(t){return!Di(t.limit)&&"L"===t.limitType}function Rs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ns(t){for(const e of t.filters)if(e.S())return e.field;return null}function xs(t){return null!==t.collectionGroup}function Ds(t){const e=Jr(t);if(null===e.D){e.D=[];const t=Ns(e),n=Rs(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new bs(t)),e.D.push(new bs(bi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new bs(bi.keyField(),t))}}}return e.D}function Os(t){const e=Jr(t);if(!e.C)if("F"===e.limitType)e.C=ss(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ds(e)){const e="desc"===i.dir?"asc":"desc";t.push(new bs(i.field,e))}const n=e.endAt?new ws(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new ws(e.startAt.position,!e.startAt.inclusive):null;e.C=ss(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function Ls(t,e,n){return new Ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ms(t,e){return cs(Os(t),Os(e))&&t.limitType===e.limitType}function Ps(t){return`${os(Os(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${as(Os(t))}; limitType=${t.limitType})`}function Vs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Mi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=_s(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ds(t),e))&&!(t.endAt&&!function(t,e,n){const r=_s(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ds(t),e))}(t,e)}function Us(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function js(t){return(e,n)=>{let r=!1;for(const i of Ds(t)){const t=Bs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bs(t,e,n){const r=t.field.isKeyField()?Mi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ui(r,i):Wr()}
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
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
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
 */function $s(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(e)?"-0":e}}function qs(t){return{integerValue:""+t}}function Hs(t,e){return Li(e)?qs(e):$s(t,e)}
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
 */class Ks{constructor(){this._=void 0}}function Gs(t,e,n){return t instanceof Xs?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Js?Ys(t,e):t instanceof Qs?Zs(t,e):function(t,e){const n=Ws(t,e),r=eo(n)+eo(t.k);return qi(n)&&qi(t.k)?qs(r):$s(t.M,r)}(t,e)}function zs(t,e,n){return t instanceof Js?Ys(t,e):t instanceof Qs?Zs(t,e):n}function Ws(t,e){return t instanceof to?qi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Xs extends Ks{}class Js extends Ks{constructor(t){super(),this.elements=t}}function Ys(t,e){const n=no(e);for(const r of t.elements)n.some((t=>Fi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Qs extends Ks{constructor(t){super(),this.elements=t}}function Zs(t,e){let n=no(e);for(const r of t.elements)n=n.filter((t=>!Fi(t,r)));return{arrayValue:{values:n}}}class to extends Ks{constructor(t,e){super(),this.M=t,this.k=e}}function eo(t){return Ci(t.integerValue||t.doubleValue)}function no(t){return Hi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ro(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Js&&e instanceof Js||t instanceof Qs&&e instanceof Qs?hi(t.elements,e.elements,Fi):t instanceof to&&e instanceof to?Fi(t.k,e.k):t instanceof Xs&&e instanceof Xs}(t.transform,e.transform)}class io{constructor(t,e){this.version=t,this.transformResults=e}}class so{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new so}static exists(t){return new so(void 0,t)}static updateTime(t){return new so(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ao{}function co(t,e,n){t instanceof po?function(t,e,n){const r=t.value.clone(),i=yo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof go?function(t,e,n){if(!oo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=yo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(mo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n){t instanceof po?function(t,e,n){if(!oo(t.precondition,e))return;const r=t.value.clone(),i=vo(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(fo(e),r).setHasLocalMutations()}(t,e,n):t instanceof go?function(t,e,n){if(!oo(t.precondition,e))return;const r=vo(t.fieldTransforms,n,e),i=e.data;i.setAll(mo(t)),i.setAll(r),e.convertToFoundDocument(fo(e),i).setHasLocalMutations()}(t,e,n):function(t,e){oo(t.precondition,e)&&e.convertToNoDocument(di.min())}(t,e)}function lo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ws(r.transform,t||null);null!=i&&(null==n&&(n=Ji.empty()),n.set(r.field,i))}return n||null}function ho(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hi(t,e,((t,e)=>ro(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function fo(t){return t.isFoundDocument()?t.version:di.min()}class po extends ao{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class go extends ao{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function mo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yo(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,zs(o,a,n[i]))}return r}function vo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Gs(t,s,e))}return r}class wo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class bo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Eo{constructor(t){this.count=t}}
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
 */var _o,To;function So(t){switch(t){default:return Wr();case Yr.CANCELLED:case Yr.UNKNOWN:case Yr.DEADLINE_EXCEEDED:case Yr.RESOURCE_EXHAUSTED:case Yr.INTERNAL:case Yr.UNAVAILABLE:case Yr.UNAUTHENTICATED:return!1;case Yr.INVALID_ARGUMENT:case Yr.NOT_FOUND:case Yr.ALREADY_EXISTS:case Yr.PERMISSION_DENIED:case Yr.FAILED_PRECONDITION:case Yr.ABORTED:case Yr.OUT_OF_RANGE:case Yr.UNIMPLEMENTED:case Yr.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Kr("GRPC error has no .code"),Yr.UNKNOWN;switch(t){case _o.OK:return Yr.OK;case _o.CANCELLED:return Yr.CANCELLED;case _o.UNKNOWN:return Yr.UNKNOWN;case _o.DEADLINE_EXCEEDED:return Yr.DEADLINE_EXCEEDED;case _o.RESOURCE_EXHAUSTED:return Yr.RESOURCE_EXHAUSTED;case _o.INTERNAL:return Yr.INTERNAL;case _o.UNAVAILABLE:return Yr.UNAVAILABLE;case _o.UNAUTHENTICATED:return Yr.UNAUTHENTICATED;case _o.INVALID_ARGUMENT:return Yr.INVALID_ARGUMENT;case _o.NOT_FOUND:return Yr.NOT_FOUND;case _o.ALREADY_EXISTS:return Yr.ALREADY_EXISTS;case _o.PERMISSION_DENIED:return Yr.PERMISSION_DENIED;case _o.FAILED_PRECONDITION:return Yr.FAILED_PRECONDITION;case _o.ABORTED:return Yr.ABORTED;case _o.OUT_OF_RANGE:return Yr.OUT_OF_RANGE;case _o.UNIMPLEMENTED:return Yr.UNIMPLEMENTED;case _o.DATA_LOSS:return Yr.DATA_LOSS;default:return Wr()}}(To=_o||(_o={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
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
class Io{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){gi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return mi(this.inner)}size(){return this.innerSize}}
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
 */class Ao{constructor(t,e){this.comparator=t,this.root=e||Ro.EMPTY}insert(t,e){return new Ao(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ro.BLACK,null,null))}remove(t){return new Ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ro.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ko(this.root,t,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ko(this.root,t,this.comparator,!0)}}class ko{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ro{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ro.RED,this.left=null!=r?r:Ro.EMPTY,this.right=null!=i?i:Ro.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ro(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ro.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ro.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}Ro.EMPTY=null,Ro.RED=!0,Ro.BLACK=!1,Ro.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ro(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class No{constructor(t){this.comparator=t,this.data=new Ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(t){return new xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof No))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new No(this.comparator);return e.data=t,e}}class xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
const Do=new Ao(Mi.comparator);function Oo(){return Do}const Lo=new Ao(Mi.comparator);function Mo(){return Lo}function Po(){return new Io((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Fo=new Ao(Mi.comparator),Vo=new No(Mi.comparator);function Uo(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const jo=new No(li);function Bo(){return jo}
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
 */class $o{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,qo.createSynthesizedTargetChangeForCurrentChange(t,e)),new $o(di.min(),n,Bo(),Oo(),Uo())}}class qo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new qo(_i.EMPTY_BYTE_STRING,e,Uo(),Uo(),Uo())}}
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
 */class Ho{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Ko{constructor(t,e){this.targetId=t,this.$=e}}class Go{constructor(t,e,n=_i.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class zo{constructor(){this.B=0,this.L=Jo(),this.U=_i.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=Uo(),e=Uo(),n=Uo();return this.L.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Wr()}})),new qo(this.U,this.q,t,e,n)}J(){this.G=!1,this.L=Jo()}Y(t,e){this.G=!0,this.L=this.L.insert(t,e)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Wo{constructor(t){this.nt=t,this.st=new Map,this.it=Oo(),this.rt=Xo(),this.ot=new No(li)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Wr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(us(t))if(0===n){const n=new Mi(t.path);this.ct(e,n,Qi.newNoDocument(n,di.min()))}else Xr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&us(i.target)){const e=new Mi(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,Qi.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}}));let n=Uo();this.rt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const r=new $o(t,e,this.ot,this.it,n);return this.it=Oo(),this.rt=Xo(),this.ot=new No(li),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new zo,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new No(li),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Hr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new zo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Xo(){return new Ao(Mi.comparator)}function Jo(){return new Ao(Mi.comparator)}
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
 */const Yo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Zo{constructor(t,e){this.databaseId=t,this.N=e}}function ta(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.N?e.toBase64():e.toUint8Array()}function na(t,e){return ta(t,e.toTimestamp())}function ra(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Si(t);return new fi(e.seconds,e.nanos)}(t))}function ia(t,e){return function(t){return new vi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function sa(t){const e=vi.fromString(t);return Xr(ka(e)),e}function oa(t,e){return ia(t.databaseId,e.path)}function aa(t,e){const n=sa(e);if(n.get(1)!==t.databaseId.projectId)throw new Qr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Mi(ha(n))}function ca(t,e){return ia(t.databaseId,e)}function ua(t){const e=sa(t);return 4===e.length?vi.emptyPath():ha(e)}function la(t){return new vi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ha(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function fa(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function da(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.N?(Xr(void 0===e||"string"==typeof e),_i.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),_i.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Yr.UNKNOWN:Co(t.code);return new Qr(e,t.message||"")}(o);n=new Go(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=aa(t,r.document.name),s=ra(r.document.updateTime),o=new Ji({mapValue:{fields:r.document.fields}}),a=Qi.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ho(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=aa(t,r.document),s=r.readTime?ra(r.readTime):di.min(),o=Qi.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=aa(t,r.document),s=r.removedTargetIds||[];n=new Ho([],s,i,null)}else{if(!("filter"in e))return Wr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Eo(r),s=t.targetId;n=new Ko(s,i)}}return n}function pa(t,e){let n;if(e instanceof po)n={update:fa(t,e.key,e.value)};else if(e instanceof wo)n={delete:oa(t,e.key)};else if(e instanceof go)n={update:fa(t,e.key,e.data),updateMask:Aa(e.fieldMask)};else{if(!(e instanceof bo))return Wr();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Xs)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Js)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof to)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:na(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function ga(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ra(t.updateTime):ra(e);return n.isEqual(di.min())&&(n=ra(e)),new io(n,t.transformResults||[])}(t,e)))):[]}function ma(t,e){return{documents:[ca(t,e.path)]}}function ya(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ca(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ca(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Gi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NAN"}};if(Ki(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Gi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NOT_NAN"}};if(Ki(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ta(t.field),op:_a(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ta(t.field),direction:Ea(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||Di(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function va(t){let e=ua(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ba(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bs(Sa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Di(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ws(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ws(n,e)}(n.endAt)),Cs(e,i,o,s,a,"F",c,u)}function wa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ba(t){return t?void 0!==t.unaryFilter?[Ia(t)]:void 0!==t.fieldFilter?[Ca(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ba(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function Ea(t){return Yo[t]}function _a(t){return Qo[t]}function Ta(t){return{fieldPath:t.canonicalString()}}function Sa(t){return bi.fromServerFormat(t.fieldPath)}function Ca(t){return ls.create(Sa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ia(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sa(t.unaryFilter.field);return ls.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sa(t.unaryFilter.field);return ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sa(t.unaryFilter.field);return ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sa(t.unaryFilter.field);return ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function Aa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ka(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Ra=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Na=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
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
 */class Da{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */class Oa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Oa(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Oa?e:Oa.resolve(e)}catch(t){return Oa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Oa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Oa.reject(e)}static resolve(t){return new Oa(((e,n)=>{e(t)}))}static reject(t){return new Oa(((e,n)=>{n(t)}))}static waitFor(t){return new Oa(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Oa.resolve(!1);for(const n of t)e=e.next((t=>t?Oa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
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
 */function La(t){return"IndexedDbTransactionError"===t.name}
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
class Ma{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&co(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&uo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&uo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(di.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Uo())}isEqual(t){return this.batchId===t.batchId&&hi(this.mutations,t.mutations,((t,e)=>ho(t,e)))&&hi(this.baseMutations,t.baseMutations,((t,e)=>ho(t,e)))}}class Pa{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=Fo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Pa(t,e,n,r)}}
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
 */class Fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Va{constructor(t,e,n,r,i=di.min(),s=di.min(),o=_i.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ua{constructor(t){this.Jt=t}}function ja(t){const e=va({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ls(e,e.limit,"L"):e}
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
 */class Ba{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ci(t.integerValue));else if("doubleValue"in t){const n=Ci(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Oi(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Ii(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Xi(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Wr()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),Mi.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}Ba.fe=new Ba;
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
class $a{constructor(){this.qe=new qa}addToCollectionParentIndex(t,e){return this.qe.add(e),Oa.resolve()}getCollectionParents(t,e){return Oa.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Oa.resolve()}deleteFieldIndex(t,e){return Oa.resolve()}getDocumentsMatchingTarget(t,e){return Oa.resolve(null)}getFieldIndex(t,e){return Oa.resolve(null)}getFieldIndexes(t,e){return Oa.resolve([])}getNextCollectionGroupToUpdate(t){return Oa.resolve(null)}updateCollectionGroup(t,e,n){return Oa.resolve()}updateIndexEntries(t,e){return Oa.resolve()}}class qa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new No(vi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new No(vi.comparator)).toArray()}}
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
class Ka{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Ka(0)}static gn(){return new Ka(-1)}}
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
async function Ga(t){if(t.code!==Yr.FAILED_PRECONDITION||t.message!==xa)throw t;Hr("LocalStore","Unexpectedly lost primary lease")}
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
class za{constructor(){this.changes=new Io((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Oa.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Wa{constructor(t,e,n){this.fs=t,this.$s=e,this.indexManager=n}Bs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Ls(t,e,n)))}Ls(t,e,n){return this.fs.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Us(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}qs(t,e){return this.fs.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Us(e,t)))}Ks(t,e,n){return function(t){return Mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):xs(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new Mi(e)).next((t=>{let e=Mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}js(t,e,n){const r=e.collectionGroup;let i=Mo();return this.indexManager.getCollectionParents(t,r).next((s=>Oa.forEach(s,(s=>{const o=function(t,e){return new Ss(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Ws(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Ws(t,e,n){let r;return this.fs.getAllFromCollection(t,e.path,n).next((n=>(r=n,this.$s.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Qi.newInvalidDocument(n),r=r.insert(n,i)),uo(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((t,n)=>{Vs(e,n)||(r=r.remove(t))})),r)))}}
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
 */class Xa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=r}static Js(t,e){let n=Uo(),r=Uo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xa(t,e.fromCache,n,r)}}
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
 */class Ja{Ys(t){this.Xs=t}Ks(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(di.min())?this.Zs(t,e):this.Xs.qs(t,r).next((i=>{const s=this.ti(e,i);return(As(e)||ks(e))&&this.ei(e.limitType,s,r,n)?this.Zs(t,e):(qr()<=o["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Fs(e)),this.Xs.Ks(t,e,ts(n,-1)).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ti(t,e){let n=new No(js(t));return e.forEach(((e,r)=>{Vs(t,r)&&(n=n.add(r))})),n}ei(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(t,e){return qr()<=o["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",Fs(e)),this.Xs.Ks(t,e,ns.min())}}
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
 */class Ya{constructor(t,e,n,r){this.persistence=t,this.ni=e,this.M=r,this.si=new Ao(li),this.ii=new Io((t=>os(t)),cs),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(n)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new Wa(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.si)))}}function Qa(t,e,n,r){return new Ya(t,e,n,r)}async function Za(t,e){const n=Jr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.$s.getAllMutationBatches(t).next((i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Uo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ai.qs(t,o).next((t=>({ci:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function tc(t,e){const n=Jr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Oa.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.$s.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,r)))}))}function ec(t){const e=Jr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ls.getLastRemoteSnapshotVersion(t)))}function nc(t,e){const n=Jr(t),r=e.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.ls.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.ls.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(_i.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.ls.updateTargetData(t,u))}));let a=Oo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(rc(t,s,e.documentUpdates).next((t=>{a=t}))),!r.isEqual(di.min())){const e=n.ls.getLastRemoteSnapshotVersion(t).next((e=>n.ls.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Oa.waitFor(o).next((()=>s.apply(t))).next((()=>n.ai.Gs(t,a))).next((()=>a))})).then((t=>(n.si=i,t)))}function rc(t,e,n){let r=Uo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Oo();return n.forEach(((n,i)=>{const s=t.get(n);i.isNoDocument()&&i.version.isEqual(di.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function ic(t,e){const n=Jr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(t,e))))}function sc(t,e){const n=Jr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ls.getTargetData(t,e).next((i=>i?(r=i,Oa.resolve(r)):n.ls.allocateTargetId(t).next((i=>(r=new Va(e,i,0,t.currentSequenceNumber),n.ls.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.si.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t}))}async function oc(t,e,n){const r=Jr(t),i=r.si.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!La(t))throw t;Hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.si=r.si.remove(e),r.ii.delete(i.target)}function ac(t,e,n){const r=Jr(t);let i=di.min(),s=Uo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Jr(t),i=r.ii.get(n);return void 0!==i?Oa.resolve(r.si.get(i)):r.ls.getTargetData(e,n)}(r,t,Os(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.ni.Ks(t,e,n?i:di.min(),n?s:Uo()))).next((t=>(cc(r,Us(e),t),{documents:t,hi:s})))))}function cc(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ri.set(e,r)}
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
class uc{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,e){return Oa.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:ra(n.createTime)}),Oa.resolve()}getNamedQuery(t,e){return Oa.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return{name:t.name,query:ja(t.bundledQuery),readTime:ra(t.readTime)}}(e)),Oa.resolve()}}
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
 */class lc{constructor(){this.overlays=new Ao(Mi.comparator),this.mi=new Map}getOverlay(t,e){return Oa.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Xt(t,e,r)})),Oa.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.mi.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.mi.delete(n)),Oa.resolve()}getOverlaysForCollection(t,e,n){const r=Po(),i=e.length+1,s=new Mi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Oa.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ao(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Po(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Po(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Oa.resolve(o)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.mi.get(r.largestBatchId).delete(n.key);this.mi.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fa(e,n));let i=this.mi.get(e);void 0===i&&(i=Uo(),this.mi.set(e,i)),this.mi.set(e,i.add(n.key))}}
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
 */class hc{constructor(){this.gi=new No(fc.yi),this.pi=new No(fc.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new fc(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ei(new fc(t,e))}Ai(t,e){t.forEach((t=>this.removeReference(t,e)))}Ri(t){const e=new Mi(new vi([])),n=new fc(e,t),r=new fc(e,t+1),i=[];return this.pi.forEachInRange([n,r],(t=>{this.Ei(t),i.push(t.key)})),i}bi(){this.gi.forEach((t=>this.Ei(t)))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const e=new Mi(new vi([])),n=new fc(e,t),r=new fc(e,t+1);let i=Uo();return this.pi.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new fc(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fc{constructor(t,e){this.key=t,this.Vi=e}static yi(t,e){return Mi.comparator(t.key,e.key)||li(t.Vi,e.Vi)}static Ii(t,e){return li(t.Vi,e.Vi)||Mi.comparator(t.key,e.key)}}
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
 */class dc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.$s=[],this.vi=1,this.Si=new No(fc.yi)}checkEmpty(t){return Oa.resolve(0===this.$s.length)}addMutationBatch(t,e,n,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const s=new Ma(i,e,n,r);this.$s.push(s);for(const o of r)this.Si=this.Si.add(new fc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Oa.resolve(s)}lookupMutationBatch(t,e){return Oa.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ci(n),i=r<0?0:r;return Oa.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return Oa.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(t){return Oa.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fc(e,0),r=new fc(e,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,r],(t=>{const e=this.Di(t.Vi);i.push(e)})),Oa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new No(li);return e.forEach((t=>{const e=new fc(t,0),r=new fc(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,r],(t=>{n=n.add(t.Vi)}))})),Oa.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Mi.isDocumentKey(i)||(i=i.child(""));const s=new fc(new Mi(i),0);let o=new No(li);return this.Si.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Vi)),!0)}),s),Oa.resolve(this.xi(o))}xi(t){const e=[];return t.forEach((t=>{const n=this.Di(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.Ni(e.batchId,"removed")),this.$s.shift();let n=this.Si;return Oa.forEach(e.mutations,(r=>{const i=new fc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Si=n}))}dn(t){}containsKey(t,e){const n=new fc(e,0),r=this.Si.firstAfterOrEqual(n);return Oa.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.$s.length,Oa.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.$s.length?0:t-this.$s[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.$s.length?null:this.$s[e]}}
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
 */class pc{constructor(t){this.ki=t,this.docs=new Ao(Mi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Oa.resolve(n?n.document.mutableCopy():Qi.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Qi.newInvalidDocument(t))})),Oa.resolve(n)}getAllFromCollection(t,e,n){let r=Oo();const i=new Mi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||rs(es(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Oa.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Mi(t,e){return Oa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new gc(this)}getSize(t){return Oa.resolve(this.size)}}class gc extends za{constructor(t){super(),this.qn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.qn.addEntry(t,r)):this.qn.removeEntry(n)})),Oa.waitFor(e)}getFromCache(t,e){return this.qn.getEntry(t,e)}getAllFromCache(t,e){return this.qn.getEntries(t,e)}}
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
 */class mc{constructor(t){this.persistence=t,this.Oi=new Io((t=>os(t)),cs),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Fi=0,this.$i=new hc,this.targetCount=0,this.Bi=Ka.mn()}forEachTarget(t,e){return this.Oi.forEach(((t,n)=>e(n))),Oa.resolve()}getLastRemoteSnapshotVersion(t){return Oa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Oa.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),Oa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fi&&(this.Fi=e),Oa.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new Ka(e),this.highestTargetId=e),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,e){return this.In(e),this.targetCount+=1,Oa.resolve()}updateTargetData(t,e){return this.In(e),Oa.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.$i.Ri(e.targetId),this.targetCount-=1,Oa.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Oi.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Oi.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Oa.waitFor(i).next((()=>r))}getTargetCount(t){return Oa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return Oa.resolve(n)}addMatchingKeys(t,e,n){return this.$i.Ti(e,n),Oa.resolve()}removeMatchingKeys(t,e,n){this.$i.Ai(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Oa.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.$i.Ri(e),Oa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.$i.Pi(e);return Oa.resolve(n)}containsKey(t,e){return Oa.resolve(this.$i.containsKey(e))}}
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
 */class yc{constructor(t,e){this.Li={},this.overlays={},this.ts=new ai(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new mc(this),this.indexManager=new $a,this.fs=function(t){return new pc(t)}((t=>this.referenceDelegate.Ui(t))),this.M=new Ua(e),this.ds=new uc(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new dc(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new vc(this.ts.next());return this.referenceDelegate.qi(),n(r).next((t=>this.referenceDelegate.Gi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ki(t,e){return Oa.or(Object.values(this.Li).map((n=>()=>n.containsKey(t,e))))}}class vc extends Da{constructor(t){super(),this.currentSequenceNumber=t}}class wc{constructor(t){this.persistence=t,this.Qi=new hc,this.ji=null}static Wi(t){return new wc(t)}get zi(){if(this.ji)return this.ji;throw Wr()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),Oa.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),Oa.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),Oa.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach((t=>this.zi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qi(){this.ji=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Oa.forEach(this.zi,(n=>{const r=Mi.fromPath(n);return this.Hi(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hi(t,e).next((t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString())}))}Ui(t){return 0}Hi(t,e){return Oa.or([()=>Oa.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ki(t,e)])}}
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
 */class bc{constructor(){this.activeTargetIds=Bo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ec{constructor(){this.Fr=new bc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new bc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class _c{Br(t){}shutdown(){}}
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
 */class Tc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Sc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Cc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
 */class Ic extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);Hr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.ao(t,s,o,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw Gr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}co(t,e,n,r,i){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Br,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Sc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,e,n,r){return new Promise(((i,s)=>{const o=new Vr;o.listenOnce(Or.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const e=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Dr.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),s(new Qr(Yr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Yr).indexOf(e)>=0?e:Yr.UNKNOWN}(t.status);s(new Qr(e,t.message))}else s(new Qr(Yr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Qr(Yr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Nr(),s=xr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pr({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const f=new Cc({jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(l||(Hr("Connection","Opening WebChannel transport."),u.open(),l=!0),Hr("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Fr.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),d(u,Fr.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),f.eo())})),d(u,Fr.EventType.ERROR,(t=>{h||(h=!0,Gr("Connection","WebChannel transport errored:",t),f.eo(new Qr(Yr.UNAVAILABLE,"The operation could not be completed")))})),d(u,Fr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=_o[t];if(void 0!==e)return Co(e)}(t),n=i.message;void 0===e&&(e=Yr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.eo(new Qr(e,n)),u.close()}else Hr("Connection","WebChannel received:",n),f.no(n)}})),d(s,Lr.STAT_EVENT,(t=>{t.stat===Mr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Mr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}
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
 */function Ac(){return"undefined"!=typeof document?document:null}
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
 */function kc(t){return new Zo(t,!0)}class Rc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Jn=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class Nc{constructor(t,e,n,r,i,s,o,a){this.Jn=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Rc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Yr.RESOURCE_EXHAUSTED?(Kr(e.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Yr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Qr(Yr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Go(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.Jn.enqueueAndForget((()=>this.Po===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xc extends Nc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.M=i}Go(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=da(this.M,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?ra(e.readTime):di.min()}(t);return this.listener.Ko(e,n)}Qo(t){const e={};e.database=la(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=us(r)?{documents:ma(t,r)}:{query:ya(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ea(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=ta(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=wa(this.M,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=la(this.M),e.removeTarget=t,this.Oo(e)}}class Dc extends Nc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=ga(t.writeResults,t.commitTime),n=ra(t.commitTime);return this.listener.Jo(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=la(this.M),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>pa(this.M,t)))};this.Oo(e)}}
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
 */class Oc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new Qr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Yr.UNKNOWN,t.toString())}))}co(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.co(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Yr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Lc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Kr(e),this.su=!1):Hr("OnlineStateTracker",e)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class Mc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Hc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Jr(t);e.lu.add(4),await Fc(e),e._u.set("Unknown"),e.lu.delete(4),await Pc(e)}(this))}))})),this._u=new Lc(n,r)}}async function Pc(t){if(Hc(t))for(const e of t.fu)await e(!0)}async function Fc(t){for(const e of t.fu)await e(!1)}function Vc(t,e){const n=Jr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),qc(n)?$c(n):cu(n).Co()&&jc(n,e))}function Uc(t,e){const n=Jr(t),r=cu(n);n.hu.delete(e),r.Co()&&Bc(n,e),0===n.hu.size&&(r.Co()?r.ko():Hc(n)&&n._u.set("Unknown"))}function jc(t,e){t.wu.Z(e.targetId),cu(t).Qo(e)}function Bc(t,e){t.wu.Z(e),cu(t).jo(e)}function $c(t){t.wu=new Wo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),cu(t).start(),t._u.iu()}function qc(t){return Hc(t)&&!cu(t).Do()&&t.hu.size>0}function Hc(t){return 0===Jr(t).lu.size}function Kc(t){t.wu=void 0}async function Gc(t){t.hu.forEach(((e,n)=>{jc(t,e)}))}async function zc(t,e){Kc(t),qc(t)?(t._u.uu(e),$c(t)):t._u.set("Unknown")}async function Wc(t,e,n){if(t._u.set("Online"),e instanceof Go&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xc(t,n)}else if(e instanceof Ho?t.wu.ut(e):e instanceof Ko?t.wu._t(e):t.wu.ht(e),!n.isEqual(di.min()))try{const e=await ec(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(_i.EMPTY_BYTE_STRING,n.snapshotVersion)),Bc(t,e);const r=new Va(n.target,e,1,n.sequenceNumber);jc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hr("RemoteStore","Failed to raise snapshot:",e),await Xc(t,e)}}async function Xc(t,e,n){if(!La(e))throw e;t.lu.add(1),await Fc(t),t._u.set("Offline"),n||(n=()=>ec(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Pc(t)}))}function Jc(t,e){return e().catch((n=>Xc(t,n,e)))}async function Yc(t){const e=Jr(t),n=uu(e);let r=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;Qc(e);)try{const t=await ic(e.localStore,r);if(null===t){0===e.cu.length&&n.ko();break}r=t.batchId,Zc(e,t)}catch(t){await Xc(e,t)}tu(e)&&eu(e)}function Qc(t){return Hc(t)&&t.cu.length<10}function Zc(t,e){t.cu.push(e);const n=uu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function tu(t){return Hc(t)&&!uu(t).Do()&&t.cu.length>0}function eu(t){uu(t).start()}async function nu(t){uu(t).Xo()}async function ru(t){const e=uu(t);for(const n of t.cu)e.Ho(n.mutations)}async function iu(t,e,n){const r=t.cu.shift(),i=Pa.from(r,e,n);await Jc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Yc(t)}async function su(t,e){e&&uu(t).zo&&await async function(t,e){if(n=e.code,So(n)&&n!==Yr.ABORTED){const n=t.cu.shift();uu(t).No(),await Jc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Yc(t)}var n}(t,e),tu(t)&&eu(t)}async function ou(t,e){const n=Jr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Hc(n);n.lu.add(3),await Fc(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Pc(n)}async function au(t,e){const n=Jr(t);e?(n.lu.delete(2),await Pc(n)):e||(n.lu.add(2),await Fc(n),n._u.set("Unknown"))}function cu(t){return t.mu||(t.mu=function(t,e,n){const r=Jr(t);return r.tu(),new xc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
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
 */}(t.datastore,t.asyncQueue,{zr:Gc.bind(null,t),Jr:zc.bind(null,t),Ko:Wc.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),qc(t)?$c(t):t._u.set("Unknown")):(await t.mu.stop(),Kc(t))}))),t.mu}function uu(t){return t.gu||(t.gu=function(t,e,n){const r=Jr(t);return r.tu(),new Dc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{zr:nu.bind(null,t),Jr:su.bind(null,t),Yo:ru.bind(null,t),Jo:iu.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Yc(t)):(await t.gu.stop(),t.cu.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))}))),t.gu
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
 */}class lu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new lu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qr(Yr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(t,e){if(Kr("AsyncQueue",`${e}: ${t}`),La(t))return new Qr(Yr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class fu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Mi.comparator(e.key,n.key):(t,e)=>Mi.comparator(t.key,e.key),this.keyedMap=Mo(),this.sortedSet=new Ao(this.comparator)}static emptySet(t){return new fu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new fu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class du{constructor(){this.yu=new Ao(Mi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Wr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class pu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new pu(t,e,fu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class gu{constructor(){this.Iu=void 0,this.listeners=[]}}class mu{constructor(){this.queries=new Io((t=>Ps(t)),Ms),this.onlineState="Unknown",this.Tu=new Set}}async function yu(t,e){const n=Jr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gu),i)try{s.Iu=await n.onListen(r)}catch(t){const n=hu(t,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Eu(n)}async function vu(t,e){const n=Jr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wu(t,e){const n=Jr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(r=!0);e.Iu=i}}r&&Eu(n)}function bu(t,e,n){const r=Jr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Eu(t){t.Tu.forEach((t=>{t.next()}))}class _u{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new pu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),e=!0):this.vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=pu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
class Tu{constructor(t){this.key=t}}class Su{constructor(t){this.key=t}}class Cu{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Uo(),this.mutatedKeys=Uo(),this.Lu=js(t),this.Uu=new fu(this.Lu)}get qu(){return this.Fu}Gu(t,e){const n=e?e.Ku:new du,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=As(this.query)&&r.size===this.query.limit?r.last():null,c=ks(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Vs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),As(this.query)||ks(this.query))for(;s.size>this.query.limit;){const t=As(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Ku:n,ei:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Ku.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wr()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new pu(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new du,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Uo(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Su(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Tu(n))})),e}Ju(t){this.Fu=t.hi,this.Bu=Uo();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Yu(){return pu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Iu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Au{constructor(t){this.key=t,this.Xu=!1}}class ku{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.ta=new Io((t=>Ps(t)),Ms),this.ea=new Map,this.na=new Set,this.sa=new Ao(Mi.comparator),this.ia=new Map,this.ra=new hc,this.oa={},this.ua=new Map,this.aa=Ka.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function Ru(t,e){const n=Wu(t);let r,i;const s=n.ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await sc(n.localStore,Os(e));n.isPrimaryClient&&Vc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Nu(n,e,r,"current"===s)}return i}async function Nu(t,e,n,r){t.ha=(e,n,r)=>async function(t,e,n,r){let i=e.view.Gu(n);i.ei&&(i=await ac(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return $u(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await ac(t.localStore,e,!0),s=new Cu(e,i.hi),o=s.Gu(i.documents),a=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);$u(t,n,c.zu);const u=new Iu(e,n,s);return t.ta.set(e,u),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function xu(t,e){const n=Jr(t),r=n.ta.get(e),i=n.ea.get(r.targetId);if(i.length>1)return n.ea.set(r.targetId,i.filter((t=>!Ms(t,e)))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Uc(n.remoteStore,r.targetId),ju(n,r.targetId)})).catch(Ga)):(ju(n,r.targetId),await oc(n.localStore,r.targetId,!0))}async function Du(t,e,n){const r=Xu(t);try{const t=await function(t,e){const n=Jr(t),r=fi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Uo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ai.qs(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=lo(t,s.get(t.key));null!=e&&o.push(new go(t.key,e,Yi(e.value.mapValue),so.exists(!0)))}return n.$s.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oa[t.currentUser.toKey()];r||(r=new Ao(li)),r=r.insert(e,n),t.oa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ku(r,t.changes),await Yc(r.remoteStore)}catch(t){const e=hu(t,"Failed to persist write");n.reject(e)}}async function Ou(t,e){const n=Jr(t);try{const t=await nc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ia.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Xr(r.Xu):t.removedDocuments.size>0&&(Xr(r.Xu),r.Xu=!1))})),await Ku(n,t,e)}catch(t){await Ga(t)}}function Lu(t,e,n){const r=Jr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ta.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Jr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)})),r&&Eu(n)}(r.eventManager,e),t.length&&r.Zu.Ko(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mu(t,e,n){const r=Jr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ia.get(e),s=i&&i.key;if(s){let t=new Ao(Mi.comparator);t=t.insert(s,Qi.newNoDocument(s,di.min()));const n=Uo().add(s),i=new $o(di.min(),new Map,new No(li),t,n);await Ou(r,i),r.sa=r.sa.remove(s),r.ia.delete(e),Hu(r)}else await oc(r.localStore,e,!1).then((()=>ju(r,e,n))).catch(Ga)}async function Pu(t,e){const n=Jr(t),r=e.batch.batchId;try{const t=await tc(n.localStore,e);Uu(n,r,null),Vu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(n,t)}catch(t){await Ga(t)}}async function Fu(t,e,n){const r=Jr(t);try{const t=await function(t,e){const n=Jr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.$s.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.$s.removeMutationBatch(t,e)))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,r)))}))}(r.localStore,e);Uu(r,e,n),Vu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ku(r,t)}catch(n){await Ga(n)}}function Vu(t,e){(t.ua.get(e)||[]).forEach((t=>{t.resolve()})),t.ua.delete(e)}function Uu(t,e,n){const r=Jr(t);let i=r.oa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oa[r.currentUser.toKey()]=i}}function ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ea.get(e))t.ta.delete(r),n&&t.Zu.la(r,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach((e=>{t.ra.containsKey(e)||Bu(t,e)}))}function Bu(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);null!==n&&(Uc(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Hu(t))}function $u(t,e,n){for(const r of n)r instanceof Tu?(t.ra.addReference(r.key,e),qu(t,r)):r instanceof Su?(Hr("SyncEngine","Document no longer in limbo: "+r.key),t.ra.removeReference(r.key,e),t.ra.containsKey(r.key)||Bu(t,r.key)):Wr()}function qu(t,e){const n=e.key,r=n.path.canonicalString();t.sa.get(n)||t.na.has(r)||(Hr("SyncEngine","New document in limbo: "+n),t.na.add(r),Hu(t))}function Hu(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new Mi(vi.fromString(e)),r=t.aa.next();t.ia.set(r,new Au(n)),t.sa=t.sa.insert(n,r),Vc(t.remoteStore,new Va(Os(Is(n.path)),r,2,ai.A))}}async function Ku(t,e,n){const r=Jr(t),i=[],s=[],o=[];r.ta.isEmpty()||(r.ta.forEach(((t,a)=>{o.push(r.ha(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Xa.Js(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Ko(i),await async function(t,e){const n=Jr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Oa.forEach(e,(e=>Oa.forEach(e.zs,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Oa.forEach(e.Hs,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!La(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.si.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.si=n.si.insert(t,i)}}}(r.localStore,s))}async function Gu(t,e){const n=Jr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await Za(n.localStore,e);n.currentUser=e,function(t,e){t.ua.forEach((t=>{t.forEach((t=>{t.reject(new Qr(Yr.CANCELLED,e))}))})),t.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ku(n,t.ci)}}function zu(t,e){const n=Jr(t),r=n.ia.get(e);if(r&&r.Xu)return Uo().add(r.key);{let t=Uo();const r=n.ea.get(e);if(!r)return t;for(const e of r){const r=n.ta.get(e);t=t.unionWith(r.view.qu)}return t}}function Wu(t){const e=Jr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mu.bind(null,e),e.Zu.Ko=wu.bind(null,e.eventManager),e.Zu.la=bu.bind(null,e.eventManager),e}function Xu(t){const e=Jr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fu.bind(null,e),e}class Ju{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=kc(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return Qa(this.persistence,new Ja,t.initialUser,this.M)}_a(t){return new yc(wc.Wi,this.M)}da(t){return new Ec}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Lu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gu.bind(null,this.syncEngine),await au(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new mu}createDatastore(t){const e=kc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ic(r));var r;return function(t,e,n,r){return new Oc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Lu(this.syncEngine,t,0),s=Tc.vt()?new Tc:new _c,new Mc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ku(t,e,n,r,i,s);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Jr(t);Hr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Fc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class Qu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Zu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=ui.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function tl(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Za(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function el(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nl(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ou(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ou(e.remoteStore,n))),t.onlineComponents=e}async function nl(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await tl(t,new Ju)),t.offlineComponents}async function rl(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await el(t,new Yu)),t.onlineComponents}function il(t){return rl(t).then((t=>t.syncEngine))}async function sl(t){const e=await rl(t),n=e.eventManager;return n.onListen=Ru.bind(null,e.syncEngine),n.onUnlisten=xu.bind(null,e.syncEngine),n}function ol(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Qu({next:n=>{e.enqueueAndForget((()=>vu(t,o))),n.fromCache&&"server"===r.source?i.reject(new Qr(Yr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new _u(n,s,{includeMetadataChanges:!0,Du:!0});return yu(t,o)}(await sl(t),t.asyncQueue,e,n,r))),r.promise}const al=new Map;
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
 */function cl(t,e,n){if(!n)throw new Qr(Yr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ul(t,e,n,r){if(!0===e&&!0===r)throw new Qr(Yr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ll(t){if(!Mi.isDocumentKey(t))throw new Qr(Yr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hl(t){if(Mi.isDocumentKey(t))throw new Qr(Yr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function dl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qr(Yr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new Qr(Yr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class pl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qr(Yr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qr(Yr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ul("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class gl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pl({}),this._settingsFrozen=!1,t instanceof xi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qr(Yr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qr(Yr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qr(Yr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qr(Yr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=al.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),al.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class ml{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ml(this.firestore,t,this._key)}}class yl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yl(this.firestore,t,this._query)}}class vl extends yl{constructor(t,e,n){super(t,e,Is(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ml(this.firestore,null,new Mi(t))}withConverter(t){return new vl(this.firestore,t,this._path)}}function wl(t,e,...n){if(t=(0,a.m9)(t),cl("collection","path",e),t instanceof gl){const r=vi.fromString(e,...n);return hl(r),new vl(t,null,r)}{if(!(t instanceof ml||t instanceof vl))throw new Qr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vi.fromString(e,...n));return hl(r),new vl(t.firestore,null,r)}}function bl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ui.R()),cl("doc","path",e),t instanceof gl){const r=vi.fromString(e,...n);return ll(r),new ml(t,null,new Mi(r))}{if(!(t instanceof ml||t instanceof vl))throw new Qr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vi.fromString(e,...n));return ll(r),new ml(t.firestore,t instanceof vl?t.converter:null,new Mi(r))}}
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
class El{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Rc(this,"async_queue_retry"),this.Ua=()=>{const t=Ac();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Ac();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const e=Ac();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise((()=>{}));const e=new Zr;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ka.push(t),this.Ka())))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(_){if(!La(_))throw _;Hr("AsyncQueue","Operation failed with retryable error: "+_)}this.ka.length>0&&this.So.Io((()=>this.Ka()))}}Ga(t){const e=this.Na.then((()=>(this.$a=!0,t().catch((t=>{this.Fa=t,this.$a=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Kr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.$a=!1,t))))));return this.Na=e,e}enqueueAfterDelay(t,e,n){this.qa(),this.La.indexOf(t)>-1&&(e=0);const r=lu.createAndSchedule(this,t,e,n,(t=>this.Qa(t)));return this.Oa.push(r),r}qa(){this.Fa&&Wr()}verifyOperationInProgress(){}async ja(){let t;do{t=this.Na,await t}while(t!==this.Na)}Wa(t){for(const e of this.Oa)if(e.timerId===t)return!0;return!1}za(t){return this.ja().then((()=>{this.Oa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Oa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ja()}))}Ha(t){this.La.push(t)}Qa(t){const e=this.Oa.indexOf(t);this.Oa.splice(e,1)}}class _l extends gl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new El,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Tl(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function Sl(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ni(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Zu(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class Il{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qr(Yr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Al{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Al(_i.fromBase64String(t))}catch(t){throw new Qr(Yr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Al(_i.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class kl{constructor(t){this._methodName=t}}
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
 */class Rl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qr(Yr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qr(Yr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return li(this._lat,t._lat)||li(this._long,t._long)}}
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
 */const Nl=/^__.*__$/;class xl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new go(t,this.data,this.fieldMask,e,this.fieldTransforms):new po(t,this.data,e,this.fieldTransforms)}}function Dl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class Ol{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(t){return new Ol(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Xa({path:n,tc:!1});return r.ec(t),r}nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Xa({path:n,tc:!1});return r.Ja(),r}sc(t){return this.Xa({path:void 0,tc:!0})}ic(t){return Hl(t,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ja(){if(this.path)for(let t=0;t<this.path.length;t++)this.ec(this.path.get(t))}ec(t){if(0===t.length)throw this.ic("Document fields must not be empty");if(Dl(this.Ya)&&Nl.test(t))throw this.ic('Document fields cannot begin and end with "__"')}}class Ll{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||kc(t)}uc(t,e,n,r=!1){return new Ol({Ya:t,methodName:e,oc:n,path:bi.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Ml(t){const e=t._freezeSettings(),n=kc(t._databaseId);return new Ll(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pl(t,e,n,r,i,s={}){const o=t.uc(s.merge||s.mergeFields?2:0,e,n,i);jl("Data must be an object, but it was:",o,r);const a=Vl(r,o);let c,u;if(s.merge)c=new Ei(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Bl(e,r,n);if(!o.contains(i))throw new Qr(Yr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Kl(t,i)||t.push(i)}c=new Ei(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new xl(new Ji(a),c,u)}function Fl(t,e){if(Ul(t=(0,a.m9)(t)))return jl("Unsupported field value:",e,t),Vl(t,e);if(t instanceof kl)return function(t,e){if(!Dl(e.Ya))throw e.ic(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ic(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&4!==e.Ya)throw e.ic("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Fl(i,e.sc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hs(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=fi.fromDate(t);return{timestampValue:ta(e.M,n)}}if(t instanceof fi){const n=new fi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ta(e.M,n)}}if(t instanceof Rl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Al)return{bytesValue:ea(e.M,t._byteString)};if(t instanceof ml){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ic(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ia(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ic(`Unsupported field value: ${fl(t)}`)}(t,e)}function Vl(t,e){const n={};return mi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,((t,r)=>{const i=Fl(r,e.Za(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ul(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof fi||t instanceof Rl||t instanceof Al||t instanceof ml||t instanceof kl)}function jl(t,e,n){if(!Ul(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=fl(n);throw"an object"===r?e.ic(t+" a custom object"):e.ic(t+" "+r)}}function Bl(t,e,n){if((e=(0,a.m9)(e))instanceof Il)return e._internalPath;if("string"==typeof e)return ql(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $l=new RegExp("[~\\*/\\[\\]]");function ql(t,e,n){if(e.search($l)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Il(...e.split("."))._internalPath}catch(r){throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Qr(Yr.INVALID_ARGUMENT,a+t+c)}function Kl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Gl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ml(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class zl extends Gl{data(){return super.data()}}function Wl(t,e){return"string"==typeof e?ql(t,e):e instanceof Il?e._internalPath:e._delegate._internalPath}
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
 */class Xl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jl extends Gl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Wl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yl extends Jl{data(t={}){return super.data(t)}}class Ql{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Xl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yl(this._firestore,this._userDataWriter,n.key,n,new Xl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Qr(Yr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Yl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Xl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Yl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Xl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Zl(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wr()}}
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
function th(t){if(ks(t)&&0===t.explicitOrderBy.length)throw new Qr(Yr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class eh{convertValue(t,e="none"){switch(Pi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ci(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ii(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wr()}}convertObject(t,e){const n={};return gi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Rl(Ci(t.latitude),Ci(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ri(t));default:return null}}convertTimestamp(t){const e=Si(t);return new fi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=vi.fromString(t);Xr(ka(n));const r=new xi(n.get(1),n.get(3)),i=new Mi(n.popFirst(5));return r.isEqual(e)||Kr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function nh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class rh extends eh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Al(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ml(this.firestore,null,e)}}function ih(t){t=dl(t,yl);const e=dl(t.firestore,_l),n=Sl(e),r=new rh(e);return th(t._query),ol(n,t._query).then((n=>new Ql(e,r,t,n)))}function sh(t,e){const n=dl(t.firestore,_l),r=bl(t),i=nh(t.converter,e);return oh(n,[Pl(Ml(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,so.exists(!1))]).then((()=>r))}function oh(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Du(await il(t),e,n))),n.promise}(Sl(t),e)}!function(t,e=!0){!function(t){Br=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new _l(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Ur,"3.4.7",t),(0,i.KN)(Ur,"3.4.7","esm2017")}()},4301:function(t,e,n){"use strict";n.d(e,{WB:function(){return S},Q_:function(){return P}});n(1703);var r=!1;function i(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}var s=n(4870),o=n(3396);
/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let a;const c=t=>a=t,u=Symbol();function l(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var h;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(h||(h={}));const f="undefined"!==typeof window,d=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function p(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function g(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){b(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function m(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function y(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const v="object"===typeof navigator?navigator:{userAgent:""},w=(()=>/Macintosh/.test(v.userAgent)&&/AppleWebKit/.test(v.userAgent)&&!/Safari/.test(v.userAgent))(),b=f?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!w?E:"msSaveOrOpenBlob"in v?_:T:()=>{};function E(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?m(r.href)?g(t,e,n):(r.target="_blank",y(r)):y(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){y(r)}),0))}function _(t,e="download",n){if("string"===typeof t)if(m(t))g(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){y(e)}))}else navigator.msSaveOrOpenBlob(p(t,n),e)}function T(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return g(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(d.HTMLElement))||"safari"in d,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||w)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function S(){const t=(0,s.B)(!0),e=t.run((()=>(0,s.iH)({})));let n=[],i=[];const o=(0,s.Xl)({install(t){c(o),r||(o._a=t,t.provide(u,o),t.config.globalProperties.$pinia=o,i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||r?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return o}const C=()=>{};function I(t,e,n,r=C){t.push(e);const i=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),r())};return!n&&(0,o.FN)()&&(0,o.Ah)(i),i}function A(t,...e){t.slice().forEach((t=>{t(...e)}))}function k(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];l(i)&&l(r)&&t.hasOwnProperty(n)&&!(0,s.dq)(r)&&!(0,s.PG)(r)?t[n]=k(i,r):t[n]=r}return t}const R=Symbol(),N=new WeakMap;function x(t){return r?!N.has(t):!l(t)||!t.hasOwnProperty(R)}const{assign:D}=Object;function O(t){return!(!(0,s.dq)(t)||!t.effect)}function L(t,e,n,a){const{state:u,actions:l,getters:h}=e,f=n.state.value[t];let d;function p(){f||(r?i(n.state.value,t,u?u():{}):n.state.value[t]=u?u():{});const e=(0,s.BK)(n.state.value[t]);return D(e,l,Object.keys(h||{}).reduce(((e,i)=>(e[i]=(0,s.Xl)((0,o.Fl)((()=>{c(n);const e=n._s.get(t);if(!r||e._r)return h[i].call(e,e)}))),e)),{}))}return d=M(t,p,e,n,a),d.$reset=function(){const t=u?u():{};this.$patch((e=>{D(e,t)}))},d}function M(t,e,n={},a,u){let l;const f=n.state,d=D({actions:{}},n);const p={deep:!0};let g,m;let y,v=(0,s.Xl)([]),w=(0,s.Xl)([]);const b=a.state.value[t];f||b||(r?i(a.state.value,t,{}):a.state.value[t]={});(0,s.iH)({});function E(e){let n;g=m=!1,"function"===typeof e?(e(a.state.value[t]),n={type:h.patchFunction,storeId:t,events:y}):(k(a.state.value[t],e),n={type:h.patchObject,payload:e,storeId:t,events:y}),(0,o.Y3)().then((()=>{g=!0})),m=!0,A(v,n,a.state.value[t])}const _=C;function T(){l.stop(),v=[],w=[],a._s.delete(t)}function S(e,n){return function(){c(a);const r=Array.from(arguments),i=[],s=[];function o(t){i.push(t)}function u(t){s.push(t)}let l;A(w,{args:r,name:e,store:N,after:o,onError:u});try{l=n.apply(this&&this.$id===t?this:N,r)}catch(h){throw A(s,h),h}return l instanceof Promise?l.then((t=>(A(i,t),t))).catch((t=>(A(s,t),Promise.reject(t)))):(A(i,l),l)}}const R={_p:a,$id:t,$onAction:I.bind(null,w),$patch:E,$reset:_,$subscribe(e,n={}){const r=I(v,e,n.detached,(()=>i())),i=l.run((()=>(0,o.YP)((()=>a.state.value[t]),(r=>{("sync"===n.flush?m:g)&&e({storeId:t,type:h.direct,events:y},r)}),D({},p,n))));return r},$dispose:T};r&&(R._r=!1);const N=(0,s.qj)(D({},R));a._s.set(t,N);const L=a._e.run((()=>(l=(0,s.B)(),l.run((()=>e())))));for(const o in L){const e=L[o];if((0,s.dq)(e)&&!O(e)||(0,s.PG)(e))f||(b&&x(e)&&((0,s.dq)(e)?e.value=b[o]:k(e,b[o])),r?i(a.state.value[t],o,e):a.state.value[t][o]=e);else if("function"===typeof e){const t=S(o,e);r?i(L,o,t):L[o]=t,d.actions[o]=e}else 0}return r?Object.keys(L).forEach((t=>{i(N,t,L[t])})):(D(N,L),D((0,s.IU)(N),L)),Object.defineProperty(N,"$state",{get:()=>a.state.value[t],set:t=>{E((e=>{D(e,t)}))}}),r&&(N._r=!0),a._p.forEach((t=>{D(N,l.run((()=>t({store:N,app:a._a,pinia:a,options:d}))))})),b&&f&&n.hydrate&&n.hydrate(N.$state,b),g=!0,m=!0,N}function P(t,e,n){let r,i;const s="function"===typeof e;function l(t,n){const l=(0,o.FN)();t=t||l&&(0,o.f3)(u),t&&c(t),t=a,t._s.has(r)||(s?M(r,e,i,t):L(r,i,t));const h=t._s.get(r);return h}return"string"===typeof t?(r=t,i=s?n:e):(i=t,r=t.id),l.$id=r,l}},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},678:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return G}});n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),f="undefined"!==typeof window;function d(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function g(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const m=()=>{};const y=/\/$/,v=t=>t.replace(y,"");function w(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=A(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function E(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function _(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(e.matched[r],n.matched[i])&&S(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function T(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function S(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!C(t[n],e[n]))return!1;return!0}function C(t,e){return Array.isArray(t)?I(t,e):Array.isArray(e)?I(e,t):t===e}function I(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function A(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,R;(function(t){t["pop"]="pop",t["push"]="push"})(k||(k={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(R||(R={}));function N(t){if(!t)if(f){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const x=/^[^#]+#/;function D(t,e){return t.replace(x,"#")+e}function O(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function M(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=O(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function P(t,e){const n=history.state?history.state.position-e:-1;return n+t}const F=new Map;function V(t,e){F.set(t,e)}function U(t){const e=F.get(t);return F.delete(t),e}let j=()=>location.protocol+"//"+location.host;function B(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),E(n,"")}const o=E(n,t);return o+r+i}function $(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=B(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:k.pop,direction:l?l>0?R.forward:R.back:R.unknown})}))};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:L()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function H(t){const{history:e,location:n}=window,r={value:B(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:j()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=p({},i.value,e.state,{forward:t,scroll:L()});s(o.current,o,!0);const a=p({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function K(t){t=N(t);const e=H(t),n=$(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=p({location:"",base:t,go:r,createHref:D.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function G(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),K(t)}function z(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const X={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function Q(t,e){return p(new Error,{type:t,[J]:!0},e)}function Z(t,e){return t instanceof Error&&J in t&&(null==e||!!(t.type&e))}const tt="[^/]+?",et={sensitive:!1,strict:!1,start:!0,end:!0},nt=/[.+*?^${}()[\]/\\]/g;function rt(t,e){const n=p({},et,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(nt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||tt;if(h!==tt){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function it(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function st(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=it(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const ot={type:0,value:""},at=/[a-zA-Z0-9_]/;function ct(t){if(!t)return[[]];if("/"===t)return[[ot]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:at.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ut(t,e,n){const r=rt(ct(t.path),n);const i=p(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function lt(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=ft(t);a.aliasOf=r&&r.record;const u=mt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(p({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ut(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!pt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:m}function o(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&st(t,n[e])>=0&&(t.record.path!==n[e].record.path||!yt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!pt(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Q(1,{location:t});o=i.record.name,a=p(ht(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw Q(1,{location:t,currentLocation:e});o=i.record.name,a=p({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:gt(c)}}return e=mt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ht(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ft(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function pt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function mt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yt(t,e){return e.children.some((e=>e===t||yt(t,e)))}const vt=/#/g,wt=/&/g,bt=/\//g,Et=/=/g,_t=/\?/g,Tt=/\+/g,St=/%5B/g,Ct=/%5D/g,It=/%5E/g,At=/%60/g,kt=/%7B/g,Rt=/%7C/g,Nt=/%7D/g,xt=/%20/g;function Dt(t){return encodeURI(""+t).replace(Rt,"|").replace(St,"[").replace(Ct,"]")}function Ot(t){return Dt(t).replace(kt,"{").replace(Nt,"}").replace(It,"^")}function Lt(t){return Dt(t).replace(Tt,"%2B").replace(xt,"+").replace(vt,"%23").replace(wt,"%26").replace(At,"`").replace(kt,"{").replace(Nt,"}").replace(It,"^")}function Mt(t){return Lt(t).replace(Et,"%3D")}function Pt(t){return Dt(t).replace(vt,"%23").replace(_t,"%3F")}function Ft(t){return null==t?"":Pt(t).replace(bt,"%2F")}function Vt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ut(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(Tt," "),n=t.indexOf("="),s=Vt(n<0?t:t.slice(0,n)),o=n<0?null:Vt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function jt(t){let e="";for(let n in t){const r=t[n];if(n=Mt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((t=>t&&Lt(t))):[r&&Lt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Bt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}function $t(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(Q(4,{from:n,to:e})):t instanceof Error?a(t):z(t)?a(Q(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Ht(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Kt(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(qt(c,n,r,s,t))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,r,s,t)()}))))}}return i}function Kt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(T.bind(null,r));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&i[i.length-1].path!==a?i.findIndex(T.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&S(n.params,s.value.params)));function h(n={}){return Xt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(m):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const zt=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,i.qj)(Gt(t)),{options:s}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Qt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Wt=zt;function Xt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>t.route||s.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const f=(0,i.iH)();return(0,r.YP)((()=>[f.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&T(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[t.name],c=t.name;if(!a)return te(n.default,{Component:a,route:i});const u=s.props[t.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,d=t=>{t.component.isUnmounted&&(s.instances[c]=null)},g=(0,r.h)(a,p({},h,e,{onVnodeUnmounted:d,ref:f}));return te(n.default,{Component:g,route:i})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=lt(t.routes,t),n=t.parseQuery||Ut,s=t.stringifyQuery||jt,o=t.history;const a=$t(),c=$t(),d=$t(),y=(0,i.XI)(X);let v=X;f&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=g.bind(null,(t=>""+t)),T=g.bind(null,Ft),S=g.bind(null,Vt);function C(t,n){let r,i;return W(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function A(){return e.getRoutes().map((t=>t.record))}function R(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=p({},r||y.value),"string"===typeof t){const i=w(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:S(s.params),hash:Vt(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in t)i=p({},t,{path:w(n,t.path,r.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];i=p({},t,{params:T(t.params)}),r.params=T(r.params)}const a=e.resolve(i,r),c=t.hash||"";a.params=E(S(a.params));const u=b(s,p({},t,{hash:Ot(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===jt?Bt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?w(n,t,y.value.path):p({},t)}function D(t,e){if(v!==t)return Q(8,{from:e,to:t})}function O(t){return B(t)}function F(t){return O(p(x(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),p({query:t.query,hash:t.hash,params:t.params},r)}}function B(t,e){const n=v=N(t),r=y.value,i=t.state,o=t.force,a=!0===t.replace,c=j(n);if(c)return B(p(x(c),{state:i,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&_(s,r,n)&&(l=Q(16,{to:u,from:r}),it(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch((t=>Z(t)?Z(t,2)?t:rt(t):et(t,u,r))).then((t=>{if(t){if(Z(t,2))return B(p(x(t.to),{state:i,force:o,replace:a}),e||u)}else t=K(u,r,!0,a,i);return H(u,r,t),t}))}function $(t,e){const n=D(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=ie(t,e);n=Ht(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=$.bind(null,t,e);return n.push(o),re(n).then((()=>{n=[];for(const r of a.list())n.push(qt(r,t,e));return n.push(o),re(n)})).then((()=>{n=Ht(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),re(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),re(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(s,"beforeRouteEnter",t,e),n.push(o),re(n)))).then((()=>{n=[];for(const r of c.list())n.push(qt(r,t,e));return n.push(o),re(n)})).catch((t=>Z(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of d.list())r(t,e,n)}function K(t,e,n,r,i){const s=D(t,e);if(s)return s;const a=e===X,c=f?history.state:{};n&&(r||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),y.value=t,it(t,e,n,a),rt()}let G;function z(){G=o.listen(((t,e,n)=>{const r=N(t),i=j(r);if(i)return void B(p(i,{replace:!0}),r).catch(m);v=r;const s=y.value;f&&V(P(s.fullPath,n.delta),L()),q(r,s).catch((t=>Z(t,12)?t:Z(t,2)?(B(t.to,r).then((t=>{Z(t,20)&&!n.delta&&n.type===k.pop&&o.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,r,s)))).then((t=>{t=t||K(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===k.pop&&Z(t,20)&&o.go(-1,!1)),H(r,s,t)})).catch(m)}))}let J,Y=$t(),tt=$t();function et(t,e,n){rt(t);const r=tt.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return J&&y.value!==X?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function rt(t){return J||(J=!t,z(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function it(e,n,i,s){const{scrollBehavior:o}=t;if(!f||!o)return Promise.resolve();const a=!i&&U(P(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(e,n,a))).then((t=>t&&M(t))).catch((t=>et(t,e,n)))}const st=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:y,addRoute:C,removeRoute:I,hasRoute:R,getRoutes:A,resolve:N,options:t,push:O,replace:F,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:c.add,afterEach:d.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),f&&!ot&&y.value===X&&(ot=!0,O(o.location).catch((t=>{0})));const n={};for(const i in X)n[i]=(0,r.Fl)((()=>y.value[i]));t.provide(u,e),t.provide(l,(0,i.qj)(n)),t.provide(h,y);const s=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(v=X,G&&G(),y.value=X,ot=!1,J=!1),s()}}};return ct}function re(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ie(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>T(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>T(t,a)))||i.push(a))}return[n,r,i]}},9684:function(t,e,n){"use strict";n.d(e,{Jn:function(){return G},KN:function(){return X},Mq:function(){return W},Xd:function(){return B},ZF:function(){return z},qX:function(){return $}});var r=n(7142),i=n(5168),s=n(223);
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
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.20",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",E="@firebase/functions-compat",_="@firebase/installations",T="@firebase/installations-compat",S="@firebase/messaging",C="@firebase/messaging-compat",I="@firebase/performance",A="@firebase/performance-compat",k="@firebase/remote-config",R="@firebase/remote-config-compat",N="@firebase/storage",x="@firebase/storage-compat",D="@firebase/firestore",O="@firebase/firestore-compat",L="firebase",M="9.6.10",P="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[E]:"fire-fn-compat",[_]:"fire-iid",[T]:"fire-iid-compat",[S]:"fire-fcm",[C]:"fire-fcm-compat",[I]:"fire-perf",[A]:"fire-perf-compat",[k]:"fire-rc",[R]:"fire-rc-compat",[N]:"fire-gcs",[x]:"fire-gcs-compat",[D]:"fire-fst",[O]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,U=new Map;function j(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of V.values())j(n,t);return!0}function $(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new s.LL("app","Firebase",q);
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
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
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
 */const G=M;function z(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=V.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new K(t,n,a);return V.set(i,c),c}function W(t=P){const e=V.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function X(t,e,n){var i;let s=null!==(i=F[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
 */
const J="firebase-heartbeat-database",Y=1,Q="firebase-heartbeat-store";let Z=null;function tt(){return Z||(Z=(0,s.X3)(J,Y,((t,e)=>{switch(e){case 0:t.createObjectStore(Q)}})).catch((t=>{throw H.create("storage-open",{originalErrorMessage:t.message})}))),Z}async function et(t){try{const e=await tt();return e.transaction(Q).objectStore(Q).get(rt(t))}catch(e){throw H.create("storage-get",{originalErrorMessage:e.message})}}async function nt(t,e){try{const n=await tt(),r=n.transaction(Q,"readwrite"),i=r.objectStore(Q);return await i.put(e,rt(t)),r.complete}catch(n){throw H.create("storage-set",{originalErrorMessage:n.message})}}function rt(t){return`${t.name}!${t.options.appId}`}
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
 */const it=1024,st=2592e6;class ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=st})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=at(),{heartbeatsToSend:e,unsentEntries:n}=ct(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function at(){const t=new Date;return t.toISOString().substring(0,10)}function ct(t,e=it){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),lt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function lt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function ht(t){B(new r.wA("platform-logger",(t=>new o(t)),"PRIVATE")),B(new r.wA("heartbeat",(t=>new ot(t)),"PRIVATE")),X(c,u,t),X(c,u,"esm2017"),X("fire-js","")}ht("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703);
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
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.bc1e8639.js.map