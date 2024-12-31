(self["webpackChunkcharity"]=self["webpackChunkcharity"]||[]).push([[998],{9662:function(e,t,n){var r=n(7854),s=n(614),i=n(6330),o=r.TypeError;e.exports=function(e){if(s(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),s=n(614),i=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||s(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),s=n(30),i=n(3070),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&i.f(a,o,{configurable:!0,value:s(null)}),e.exports=function(e){a[o][e]=!0}},5787:function(e,t,n){var r=n(7854),s=n(7976),i=r.TypeError;e.exports=function(e,t){if(s(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(7854),s=n(111),i=r.String,o=r.TypeError;e.exports=function(e){if(s(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),s=n(1400),i=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),l=i(c),u=s(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(1702),s=r({}.toString),i=r("".slice);e.exports=function(e){return i(s(e),8,-1)}},648:function(e,t,n){var r=n(7854),s=n(1694),i=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),l=r.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=s?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),s=Error,i=r("".replace),o=function(e){return String(s(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!s.prepareStackTrace)while(t--)e=i(e,a,"");return e}},9920:function(e,t,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=s(t),c=o.f,l=i.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){var r=n(9781),s=n(3070),i=n(9114);e.exports=r?function(e,t,n){return s.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(7854),s=n(614),i=n(8880),o=n(6339),a=n(3505);e.exports=function(e,t,n,c){var l=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:t;return s(n)&&o(n,d,c),e===r?(u?e[t]=n:a(t,n),e):(l?!h&&e[t]&&(u=!0):delete e[t],u?e[t]=n:i(e,t,n),e)}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),e.exports=s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3505),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(u=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=s(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),s=Function.prototype.call;e.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(e,t,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),s=Function.prototype,i=s.bind,o=s.call,a=r&&i.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),s=n(614),i=function(e){return s(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(s(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),s=n(7293),i=n(317);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),s=n(1702),i=n(7293),o=n(4326),a=r.Object,c=s("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),s=n(111),i=n(7674);e.exports=function(e,t,n){var o,a;return i&&r(o=t.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,s,i,o=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return i(e)?s(e):r(e,{})},w=function(e){return function(t){var n;if(!l(t)||(n=s(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new y),E=c(b.get),_=c(b.has),T=c(b.set);r=function(e,t){if(_(b,e))throw new g(m);return t.facade=e,T(b,e,t),t},s=function(e){return E(b,e)||{}},i=function(e){return _(b,e)}}else{var I=f("state");p[I]=!0,r=function(e,t){if(h(e,I))throw new g(m);return t.facade=e,u(e,I,t),t},s=function(e){return h(e,I)?e[I]:{}},i=function(e){return h(e,I)}}e.exports={set:r,get:s,has:i,enforce:v,getterFor:w}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(s(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),s=n(5005),i=n(614),o=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=s("Symbol");return i(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){if("Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&d(e,"name",{value:t,configurable:!0}),f&&n&&i(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity}),n&&i(n,"constructor")&&n.constructor){if(o)try{d(e,"prototype",{writable:!1})}catch(s){}}else e.prototype=void 0;var r=u(e);return i(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return s(this)&&h(this).source||c(this)}),"toString")},133:function(e,t,n){var r=n(7392),s=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),s=n(614),i=n(2788),o=r.WeakMap;e.exports=s(o)&&/native code/.test(i(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,s=n(9670),i=n(6048),o=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=s(e),n=new g,g[f]=null,n[m]=e):n=b(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),s=n(3353),i=n(3070),o=n(9670),a=n(5656),c=n(1956);t.f=r&&!s?Object.defineProperties:function(e,t){o(e);var n,r=a(t),s=c(t),l=s.length,u=0;while(l>u)i.f(e,n=s[u++],r[n]);return e}},3070:function(e,t,n){var r=n(7854),s=n(9781),i=n(4664),o=n(3353),a=n(9670),c=n(4948),l=r.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=s?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!s(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,u=[];for(n in r)!s(a,n)&&s(r,n)&&c(u,n);while(t.length>l)s(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},1956:function(e,t,n){var r=n(6324),s=n(748);e.exports=Object.keys||function(e){return r(e,s)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),s=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),s=n(6916),i=n(614),o=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!o(r=s(n,e)))return r;if(i(n=e.valueOf)&&!o(r=s(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!o(r=s(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(7854),s=r.TypeError;e.exports=function(e){if(void 0==e)throw s("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),s=Object.defineProperty;e.exports=function(e,t){try{s(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),s=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=s(e))}},5465:function(e,t,n){var r=n(7854),s=n(3505),i="__core-js_shared__",o=r[i]||s(i,{});e.exports=o},2309:function(e,t,n){var r=n(1913),s=n(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),s=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?s(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),s=n(4488);e.exports=function(e){return r(s(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),s=n(4488),i=r.Object;e.exports=function(e){return i(s(e))}},7593:function(e,t,n){var r=n(7854),s=n(6916),i=n(111),o=n(2190),a=n(8173),c=n(2140),l=n(5112),u=r.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=s(r,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),s=n(2190);e.exports=function(e){var t=r(e,"string");return s(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(7854),s=n(648),i=r.String;e.exports=function(e){if("Symbol"===s(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e,t,n){var r=n(7854),s=r.String;e.exports=function(e){try{return s(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++s+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),s=n(7293);e.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(133),c=n(3307),l=s("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!i(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&i(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},6699:function(e,t,n){"use strict";var r=n(2109),s=n(1318).includes,i=n(7293),o=n(1223),a=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},2801:function(e,t,n){"use strict";var r=n(2109),s=n(5005),i=n(9114),o=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=s("Error"),g=s(p),y=function(){c(this,v);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),r=new g(t,n),s=m(t);return s.name=p,o(r,"stack",i(1,d(s.stack,1))),l(r,this,y),r},v=y.prototype=g.prototype,w="stack"in m(p),b="stack"in new g(1,2),E=w&&!b;r({global:!0,constructor:!0,forced:f||E},{DOMException:E?y:g});var _=s(p),T=_.prototype;if(T.constructor!==_)for(var I in f||o(T,"constructor",i(1,_)),h)if(a(h,I)){var k=h[I],S=k.s;a(_,S)||o(_,S,i(6,k.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return l},L:function(){return a},LL:function(){return E},Mn:function(){return g},ZR:function(){return b},b$:function(){return f},d:function(){return p},eu:function(){return v},hl:function(){return y},m9:function(){return D},ne:function(){return R},pd:function(){return x},ru:function(){return d},tV:function(){return c},uI:function(){return h},vZ:function(){return k},w1:function(){return m},xO:function(){return C},xb:function(){return I},z$:function(){return u},zd:function(){return A}});n(2801),n(6699);
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const l=s<e.length,u=l?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function m(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function y(){return"object"===typeof indexedDB}function v(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const w="FirebaseError";class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?_(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new b(r,o,n);return a}}function _(e,t){return e.replace(T,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
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
 */function I(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(S(n)&&S(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function S(e){return null!==e&&"object"===typeof e}
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
 */function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function A(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function R(e,t){const n=new O(e,t);return n.subscribe.bind(n)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=N(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function N(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function P(){}
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
function D(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return ke},B:function(){return o},BK:function(){return Be},Bj:function(){return i},Fl:function(){return Ke},IU:function(){return Ae},Jd:function(){return I},PG:function(){return Ie},SU:function(){return je},Um:function(){return Ee},WL:function(){return Ve},X$:function(){return A},X3:function(){return Ce},XI:function(){return Me},Xl:function(){return xe},dq:function(){return De},iH:function(){return Le},j:function(){return S},lk:function(){return k},qj:function(){return be},qq:function(){return b},yT:function(){return Se}});var r=n(7139);let s;class i{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){s=this}off(){s=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e){return new i(e)}function a(e,t=s){t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];l(s)&&!u(s)?s.delete(e):t[n++]=s,s.w&=~m,s.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,_=!0,m=1<<++p,p<=g?h(this):E(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const T=[];function I(){T.push(_),_=!1}function k(){const e=T.pop();_=void 0===e||e}function S(e,t,n){if(_&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const s=void 0;C(r,s)}}function C(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,s,i,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=s)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(w)));break;case"set":(0,r._N)(e)&&l.push(a.get(v));break}if(1===l.length)l[0]&&x(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);x(c(e))}}function x(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),N=$(),P=$(!1,!0),D=$(!0),L=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,s=this.length;t<s;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Ae(this)[t].apply(this,e);return k(),n}})),e}function $(e=!1,t=!1){return function(n,s,i){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&i===(e?t?ye:ge:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(L,s))return Reflect.get(L,s,i);const a=Reflect.get(n,s,i);if((0,r.yk)(s)?O.has(s):R(s))return a;if(e||S(n,"get",s),t)return a;if(De(a)){const e=!o||!(0,r.S0)(s);return e?a.value:a}return(0,r.Kn)(a)?e?_e(a):be(a):a}}const U=F(),j=F(!0);function F(e=!1){return function(t,n,s,i){let o=t[n];if(ke(o)&&De(o)&&!De(s))return!1;if(!e&&!ke(s)&&(Se(s)||(s=Ae(s),o=Ae(o)),!(0,r.kJ)(t)&&De(o)&&!De(s)))return o.value=s,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,s,i);return t===Ae(i)&&(a?(0,r.aU)(s,o)&&A(t,"set",n,s,o):A(t,"add",n,s)),c}}function V(e,t){const n=(0,r.RI)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&A(e,"delete",t,void 0,s),i}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||S(e,"has",t),n}function q(e){return S(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:N,set:U,deleteProperty:V,has:B,ownKeys:q},H={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:P,set:j}),W=e=>e,G=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Ae(e),i=Ae(t);t!==i&&!n&&S(s,"get",t),!n&&S(s,"get",i);const{has:o}=G(s),a=r?W:n?Oe:Re;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ae(n),s=Ae(e);return e!==s&&!t&&S(r,"has",e),!t&&S(r,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function Y(e,t=!1){return e=e["__v_raw"],!t&&S(Ae(e),"iterate",v),Reflect.get(e,"size",e)}function Q(e){e=Ae(e);const t=Ae(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function Z(e,t){t=Ae(t);const n=Ae(this),{has:s,get:i}=G(n);let o=s.call(n,e);o||(e=Ae(e),o=s.call(n,e));const a=i.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=G(t);let s=n.call(t,e);s||(e=Ae(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&A(t,"delete",e,void 0,i),o}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const s=this,i=s["__v_raw"],o=Ae(i),a=t?W:e?Oe:Re;return!e&&S(o,"iterate",v),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function re(e,t,n){return function(...s){const i=this["__v_raw"],o=Ae(i),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=i[e](...s),h=n?W:t?Oe:Re;return!t&&S(o,"iterate",l?w:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return J(this,e)},get size(){return Y(this)},has:X,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Y(this)},has:X,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ne(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{e[s]=re(s,!1,!1),n[s]=re(s,!0,!1),t[s]=re(s,!1,!0),r[s]=re(s,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,le]=ie();function ue(e,t){const n=t?e?le:ce:e?ae:oe;return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.RI)(n,s)&&s in t?n:t,s,i)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ye=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return ke(e)?e:Te(e,!1,z,he,pe)}function Ee(e){return Te(e,!1,K,de,me)}function _e(e){return Te(e,!0,H,fe,ge)}function Te(e,t,n,s,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=i.get(e);if(o)return o;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?s:n);return i.set(e,c),c}function Ie(e){return ke(e)?Ie(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Ie(e)||ke(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function xe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?be(e):e,Oe=e=>(0,r.Kn)(e)?_e(e):e;function Ne(e){_&&y&&(e=Ae(e),C(e.dep||(e.dep=c())))}function Pe(e,t){e=Ae(e),e.dep&&x(e.dep)}function De(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return $e(e,!1)}function Me(e){return $e(e,!0)}function $e(e,t){return De(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Re(e),Pe(this,e))}}function je(e){return De(e)?e.value:e}const Fe={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return Ie(e)?e:new Proxy(e,Fe)}function Be(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class qe{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return De(r)?r:new qe(e,t,n)}class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Pe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ke(e,t,n=!1){let s,i;const o=(0,r.mf)(e);o?(s=e,i=r.dG):(s=e.get,i=e.set);const a=new He(s,i,o||!i,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Ah:function(){return Ne},Cn:function(){return V},FN:function(){return bn},Fl:function(){return Mn},HY:function(){return Nt},JJ:function(){return Y},Jd:function(){return Oe},Ko:function(){return un},P$:function(){return ce},Q6:function(){return pe},U2:function(){return ue},Uk:function(){return tn},Us:function(){return Et},WI:function(){return hn},Wm:function(){return Yt},Y3:function(){return _},Y8:function(){return ie},YP:function(){return ee},_:function(){return Xt},aZ:function(){return me},bv:function(){return Ae},dD:function(){return F},f3:function(){return Q},h:function(){return $n},iD:function(){return qt},ic:function(){return Re},j4:function(){return zt},kq:function(){return rn},nK:function(){return fe},uE:function(){return nn},up:function(){return At},w5:function(){return B},wF:function(){return Ce},wg:function(){return Ut},wy:function(){return ft}});n(6699);var r=n(4870),s=n(7139);function i(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){a(i,t,n)}return s}function o(e,t,n,r){if((0,s.mf)(e)){const o=i(e,t,n,r);return o&&(0,s.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let s=0;s<e.length;s++)c.push(o(e[s],t,n,r));return c}function a(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,s,o])}c(e,n,s,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let b=null,E=null;function _(e){const t=b||w;return e?t.then(this?e.bind(this):e):t}function T(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,s=N(h[r]);s<e?t=r+1:n=r}return t}function I(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||e===E||(null==e.id?h.push(e):h.splice(T(e.id),0,e),k())}function k(){l||u||(u=!0,b=w.then(P))}function S(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function C(e,t,n,r){(0,s.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),k()}function A(e){C(e,p,f,m)}function x(e){C(e,y,g,v)}function R(e,t=null){if(f.length){for(E=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,E=null,R(e,t)}}function O(e){if(g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>N(e)-N(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const N=e=>null==e.id?1/0:e.id;function P(e){u=!1,l=!0,R(e),h.sort(((e,t)=>N(e)-N(t)));s.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&i(e,null,14)}}finally{d=0,h.length=0,O(e),l=!1,b=null,(h.length||f.length||g.length)&&P(e)}}new Set;new Map;function D(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.kT;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||s.kT;o?i=n.map((e=>e.trim())):t&&(i=n.map(s.He))}let l;let u=r[l=(0,s.hR)(t)]||r[l=(0,s.hR)((0,s._A)(t))];!u&&a&&(u=r[l=(0,s.hR)((0,s.rs)(t))]),u&&o(u,e,6,i);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,i)}}function L(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},c=!1;if(!(0,s.mf)(e)){const r=e=>{const n=L(e,t,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((e=>a[e]=null)):(0,s.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,s.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,s.RI)(e,(0,s.rs)(t))||(0,s.RI)(e,t))}let $=null,U=null;function j(e){const t=$;return $=e,U=e&&e.type.__scopeId||null,t}function F(e){U=e}function V(){U=null}function B(e,t=$,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vt(-1);const s=j(t),i=e(...n);return j(s),r._d&&Vt(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function q(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=j(e);try{if(4&n.shapeFlag){const e=i||r;v=sn(d.call(e,e,f,o,m,p,g)),w=u}else{const e=t;0,v=sn(e.length>1?e(o,{attrs:u,slots:l,emit:h}):e(o,null)),w=t.props?u:z(u)}}catch(_){Mt.length=0,a(_,e,1),v=Yt(Dt)}let E=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=E;e.length&&7&t&&(c&&e.some(s.tR)&&(w=H(w,c)),E=en(E,w))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,j(b),v}const z=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.F7)(n))&&((t||(t={}))[n]=e[n]);return t},H=(e,t)=>{const n={};for(const r in e)(0,s.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function K(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||W(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?W(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(l,n))return!0}}return!1}function W(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!M(n,i))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const J=e=>e.__isSuspense;function X(e,t){t&&t.pendingBranch?(0,s.kJ)(e)?t.effects.push(...e):t.effects.push(e):x(e)}function Y(e,t){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[e]=t}else 0}function Q(e,t,n=!1){const r=wn||$;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.mf)(t)?t.call(r.proxy):t}else 0}const Z={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=s.kT){const h=wn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,s.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?se(e):(0,s.mf)(e)?i(e,h,2):void 0))):d=(0,s.mf)(e)?t?()=>i(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:s.dG,t&&a){const e=d;d=()=>se(e())}let g=e=>{f=b.onStop=()=>{i(e,h,4)}};if(Sn)return g=s.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),s.dG;let y=m?[]:Z;const v=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,s.aU)(e,y[t]))):(0,s.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Z?void 0:y,g]),y=e)}else b.run()};let w;v.allowRecurse=!!t,w="sync"===c?v:"post"===c?()=>bt(v,h&&h.suspense):()=>{!h||h.isMounted?A(v):v()};const b=new r.qq(d,w);return t?n?v():y=b.run():"post"===c?bt(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,b)}}function ne(e,t,n){const r=this.proxy,i=(0,s.HD)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.mf)(t)?o=t:(o=t.handler,n=t);const a=wn;En(this);const c=te(i,o.bind(r),n);return a?En(a):_n(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function se(e,t){if(!(0,s.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))se(e.value,t);else if((0,s.kJ)(e))for(let n=0;n<e.length;n++)se(e[n],t);else if((0,s.DM)(e)||(0,s._N)(e))e.forEach((e=>{se(e,t)}));else if((0,s.PO)(e))for(const n in e)se(e[n],t);return e}function ie(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ae((()=>{e.isMounted=!0})),Oe((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=bn(),s=ie();let i;return()=>{const o=t.default&&pe(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:l}=c;if(s.isLeaving)return he(a);const u=de(a);if(!u)return he(a);const h=ue(u,c,s,n);fe(u,h);const d=n.subTree,f=d&&de(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==Dt&&(!Kt(u,f)||p)){const e=ue(f,c,s,n);if(fe(f,e),"out-in"===l)return s.isLeaving=!0,e.afterLeave=()=>{s.isLeaving=!1,n.update()},he(a);"in-out"===l&&u.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=le(s,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ce=ae;function le(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=t,b=String(e.key),E=le(n,e),_=(e,t)=>{e&&o(e,r,9,t)},T={mode:i,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const i=E[b];i&&Kt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),_(r,[t])},enter(e){let t=l,r=u,i=h;if(!n.isMounted){if(!s)return;t=y||l,r=v||u,i=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(d,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),_(n?m:p,[t]),t._leaveCb=void 0,E[s]===e&&delete E[s])};E[s]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ue(e,t,n,r)}};return T}function he(e){if(ye(e))return e=en(e),e.children=null,e}function de(e){return ye(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Nt?(128&o.patchFlag&&s++,r=r.concat(pe(o.children,t,a))):(t||o.type!==Dt)&&r.push(null!=a?en(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function me(e){return(0,s.mf)(e)?{setup:e,name:e.name}:e}const ge=e=>!!e.type.__asyncLoader;const ye=e=>e.type.__isKeepAlive;RegExp,RegExp;function ve(e,t){return(0,s.kJ)(e)?e.some((e=>ve(e,t))):(0,s.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function we(e,t){Ee(e,"a",t)}function be(e,t){Ee(e,"da",t)}function Ee(e,t,n=wn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)ye(e.parent.vnode)&&_e(r,t,n,e),e=e.parent}}function _e(e,t,n,r){const i=ke(t,e,r,!0);Ne((()=>{(0,s.Od)(r[t],i)}),n)}function Te(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=wn,s=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const i=o(t,n,e,s);return _n(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Se=e=>(t,n=wn)=>(!Sn||"sp"===e)&&ke(e,t,n),Ce=Se("bm"),Ae=Se("m"),xe=Se("bu"),Re=Se("u"),Oe=Se("bum"),Ne=Se("um"),Pe=Se("sp"),De=Se("rtg"),Le=Se("rtc");function Me(e,t=wn){ke("ec",e,t)}let $e=!0;function Ue(e){const t=Be(e),n=e.proxy,i=e.ctx;$e=!1,t.beforeCreate&&Fe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:I,renderTriggered:k,errorCaptured:S,serverPrefetch:C,expose:A,inheritAttrs:x,components:R,directives:O,filters:N}=t,P=null;if(h&&je(h,i,P,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,s.mf)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Kn)(t)&&(e.data=(0,r.qj)(t))}if($e=!0,a)for(const r in a){const e=a[r],t=(0,s.mf)(e)?e.bind(n,n):(0,s.mf)(e.get)?e.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(e)&&(0,s.mf)(e.set)?e.set.bind(n):s.dG,c=Mn({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Ve(l[r],i,n,r);if(u){const e=(0,s.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Y(t,e[t])}))}function D(e,t){(0,s.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Fe(d,e,"c"),D(Ce,f),D(Ae,p),D(xe,m),D(Re,g),D(we,y),D(be,v),D(Me,S),D(Le,I),D(De,k),D(Oe,b),D(Ne,_),D(Pe,C),(0,s.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===s.dG&&(e.render=T),null!=x&&(e.inheritAttrs=x),R&&(e.components=R),O&&(e.directives=O)}function je(e,t,n=s.dG,i=!1){(0,s.kJ)(e)&&(e=We(e));for(const o in e){const n=e[o];let a;a=(0,s.Kn)(n)?"default"in n?Q(n.from||o,n.default,!0):Q(n.from||o):Q(n),(0,r.dq)(a)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Fe(e,t,n){o((0,s.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ve(e,t,n,r){const i=r.includes(".")?re(n,r):()=>n[r];if((0,s.HD)(e)){const n=t[e];(0,s.mf)(n)&&ee(i,n)}else if((0,s.mf)(e))ee(i,e.bind(n));else if((0,s.Kn)(e))if((0,s.kJ)(e))e.forEach((e=>Ve(e,t,n,r)));else{const r=(0,s.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.mf)(r)&&ee(i,r,e)}else 0}function Be(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((e=>qe(c,e,o,!0))),qe(c,t,o)):c=t,i.set(t,c),c}function qe(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&qe(e,i,n,!0),s&&s.forEach((t=>qe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ze[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ze={data:He,props:Je,emits:Je,methods:Je,computed:Je,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Je,directives:Je,watch:Xe,provide:He,inject:Ke};function He(e,t){return t?e?function(){return(0,s.l7)((0,s.mf)(e)?e.call(this,this):e,(0,s.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return Je(We(e),We(t))}function We(e){if((0,s.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Je(e,t){return e?(0,s.l7)((0,s.l7)(Object.create(null),e),t):t}function Xe(e,t){if(!e)return t;if(!t)return e;const n=(0,s.l7)(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function Ye(e,t,n,i=!1){const o={},a={};(0,s.Nj)(a,Wt,1),e.propsDefaults=Object.create(null),Ze(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Qe(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;Ze(e,t,o,a)&&(h=!0);for(const i in l)t&&((0,s.RI)(t,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(t,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=et(u,l,i,void 0,e,!0)):delete o[i]);if(a!==l)for(const e in a)t&&(0,s.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(M(e.emitsOptions,i))continue;const c=t[i];if(u)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const t=(0,s._A)(i);o[t]=et(u,l,t,c,e,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ze(e,t,n,i){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,s.Gg)(r))continue;const u=t[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:M(e.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=et(o,t,c,i[c],e,!(0,s.RI)(i,c))}}return l}function et(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,s.mf)(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(En(i),r=s[n]=e.call(null,t),_n())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function tt(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},c=[];let l=!1;if(!(0,s.mf)(e)){const r=e=>{l=!0;const[n,r]=tt(e,t,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,s._A)(o[h]);nt(e)&&(a[e]=s.kT)}else if(o){0;for(const e in o){const t=(0,s._A)(e);if(nt(t)){const n=o[e],r=a[t]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const e=it(Boolean,r.type),n=it(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,s.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function nt(e){return"$"!==e[0]}function rt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function st(e,t){return rt(e)===rt(t)}function it(e,t){return(0,s.kJ)(t)?t.findIndex((t=>st(t,e))):(0,s.mf)(t)&&st(t,e)?0:-1}const ot=e=>"_"===e[0]||"$stable"===e,at=e=>(0,s.kJ)(e)?e.map(sn):[sn(e)],ct=(e,t,n)=>{const r=B(((...e)=>at(t(...e))),n);return r._c=!1,r},lt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ot(i))continue;const n=e[i];if((0,s.mf)(n))t[i]=ct(i,n,r);else if(null!=n){0;const e=at(n);t[i]=()=>e}}},ut=(e,t)=>{const n=at(t);e.slots.default=()=>n},ht=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,s.Nj)(t,"_",n)):lt(t,e.slots={})}else e.slots={},t&&ut(e,t);(0,s.Nj)(e.slots,Wt,1)},dt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,s.l7)(i,t),n||1!==e||delete i._):(o=!t.$stable,lt(t,i)),a=t}else t&&(ut(e,t),a={default:1});if(o)for(const s in i)ot(s)||s in a||delete i[s]};function ft(e,t){const n=$;if(null===n)return e;const r=Pn(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=s.kT]=t[o];(0,s.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&se(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function pt(e,t,n,s){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[s];u&&((0,r.Jd)(),o(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}function mt(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gt=0;function yt(e,t){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=mt(),o=new Set;let a=!1;const c=i.app={_uid:gt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Un,get config(){return i.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,s.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,s.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(s,o,l){if(!a){const u=Yt(n,r);return u.appContext=i,o&&t?t(u,s):e(u,s,l),a=!0,c._container=s,s.__vue_app__=c,Pn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function vt(e,t,n,o,a=!1){if((0,s.kJ)(e))return void e.forEach(((e,r)=>vt(e,t&&((0,s.kJ)(t)?t[r]:t),n,o,a)));if(ge(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===s.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,u,12,[l,f]);else{const t=(0,s.HD)(h),i=(0,r.dq)(h);if(t||i){const i=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,s.RI)(p,h)&&(p[h]=l)):(0,r.dq)(h)&&(h.value=l,e.k&&(f[e.k]=l))};l?(i.id=-1,bt(i,n)):i()}else 0}}function wt(){}const bt=X;function Et(e){return _t(e)}function _t(e,t){wt();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=s.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),W(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Pt:w(e,t,n,r);break;case Dt:b(e,t,n,r);break;case Lt:null==e&&E(t,n,r,o);break;case Nt:L(e,t,n,r,s,i,o,a,c);break;default:1&h?k(e,t,n,r,s,i,o,a,c):6&h?M(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,s,i,o,a,c,te)}null!=u&&s&&vt(u,e&&e.ref,i,t||e,!t)},w=(e,t,n,r)=>{if(null==e)i(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},_=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,s,i,o,a,c):N(e,t,s,i,o,a,c)},C=(e,t,n,r,o,l,u,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=c(e.type,l,y&&y.is,y),8&v?d(f,e.children):16&v&&x(e.children,f,null,r,o,l&&"foreignObject"!==m,u,h),E&&pt(e,null,r,"created"),y){for(const t in y)"value"===t||(0,s.Gg)(t)||a(f,t,null,y[t],l,e.children,r,o,Q);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&ln(p,r,e)}A(f,e,e.scopeId,u,r)}E&&pt(e,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(f),i(f,t,n),((p=y&&y.onVnodeMounted)||_||E)&&bt((()=>{p&&ln(p,r,e),_&&w.enter(f),E&&pt(e,null,r,"mounted")}),o)},A=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;A(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},x=(e,t,n,r,s,i,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?on(e[l]):sn(e[l]);v(null,c,t,n,r,s,i,o,a)}},N=(e,t,n,r,i,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||s.kT,m=t.props||s.kT;let g;n&&Tt(n,!1),(g=m.onVnodeBeforeUpdate)&&ln(g,n,t,e),f&&pt(t,e,n,"beforeUpdate"),n&&Tt(n,!0);const y=i&&"foreignObject"!==t.type;if(h?P(e.dynamicChildren,h,l,n,r,y,o):c||V(e,t,l,null,n,r,y,o,!1),u>0){if(16&u)D(l,t,p,m,n,r,i);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,i),4&u&&a(l,"style",p.style,m.style,i),8&u){const s=t.dynamicProps;for(let t=0;t<s.length;t++){const o=s[t],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,i,e.children,n,r,Q)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,t,p,m,n,r,i);((g=m.onVnodeUpdated)||f)&&bt((()=>{g&&ln(g,n,t,e),f&&pt(t,e,n,"updated")}),r)},P=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Nt||!Kt(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,s,i,o,!0)}},D=(e,t,n,r,i,o,c)=>{if(n!==r){for(const l in r){if((0,s.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,i,o,Q)}if(n!==s.kT)for(const l in n)(0,s.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,i,o,Q);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,s,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(h,n,r),i(d,n,r),x(t.children,n,d,s,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&It(e,t,!0)):V(e,t,n,d,s,o,a,c,u)},M=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):$(t,n,r,s,i,o,c):U(e,t,c)},$=(e,t,n,r,s,i,o)=>{const a=e.component=vn(e,r,s);if(ye(e)&&(a.ctx.renderer=te),Cn(a),a.asyncDep){if(s&&s.registerDep(a,j),!e.el){const e=a.subTree=Yt(Dt);b(null,e,t,n)}}else j(a,e,t,n,s,i,o)},U=(e,t,n)=>{const r=t.component=e.component;if(K(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,S(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},j=(e,t,n,i,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:l,vnode:u}=e,h=n;0,Tt(e,!1),n?(n.el=u.el,F(e,n,c)):n=u,r&&(0,s.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ln(t,l,n,u),Tt(e,!0);const d=q(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&G(e,d.el),i&&bt(i,o),(t=n.props&&n.props.onVnodeUpdated)&&bt((()=>ln(t,l,n,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=ge(t);if(Tt(e,!1),u&&(0,s.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&ln(r,d,t),Tt(e,!0),c&&re){const n=()=>{e.subTree=q(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=q(e);0,v(null,r,n,i,e,o,a),t.el=r.el}if(h&&bt(h,o),!f&&(r=l&&l.onVnodeMounted)){const e=t;bt((()=>ln(r,d,e)),o)}256&t.shapeFlag&&e.a&&bt(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new r.qq(l,(()=>I(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,Tt(e,!0),h()},F=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,Qe(e,t.props,s,n),dt(e,t.children,n),(0,r.Jd)(),R(void 0,e.update),(0,r.lk)()},V=(e,t,n,r,s,i,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(l,h,n,r,s,i,o,a,c);if(256&f)return void B(l,h,n,r,s,i,o,a,c)}8&p?(16&u&&Q(l,s,i),h!==l&&d(n,h)):16&u?16&p?z(l,h,n,r,s,i,o,a,c):Q(l,s,i,!0):(8&u&&d(n,""),16&p&&x(h,n,r,s,i,o,a,c))},B=(e,t,n,r,i,o,a,c,l)=>{e=e||s.Z6,t=t||s.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?on(t[f]):sn(t[f]);v(e[f],r,n,null,i,o,a,c,l)}u>h?Q(e,i,o,!0,!1,d):x(t,n,r,i,o,a,c,l,d)},z=(e,t,n,r,i,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],s=t[u]=l?on(t[u]):sn(t[u]);if(!Kt(r,s))break;v(r,s,n,null,i,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],s=t[f]=l?on(t[f]):sn(t[f]);if(!Kt(r,s))break;v(r,s,n,null,i,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,s=e<h?t[e].el:r;while(u<=f)v(null,t[u]=l?on(t[u]):sn(t[u]),n,s,i,o,a,c,l),u++}}else if(u>f)while(u<=d)W(e[u],i,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?on(t[u]):sn(t[u]);null!=e.key&&g.set(e.key,u)}let y,w=0;const b=f-m+1;let E=!1,_=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(w>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&Kt(r,t[y])){s=y;break}void 0===s?W(r,i,o,!0):(T[s-m]=u+1,s>=_?_=s:E=!0,v(r,t[s],n,null,i,o,a,c,l),w++)}const I=E?kt(T):s.Z6;for(y=I.length-1,u=b-1;u>=0;u--){const e=m+u,s=t[e],d=e+1<h?t[e+1].el:r;0===T[u]?v(null,s,n,d,i,o,a,c,l):E&&(y<0||u!==I[y]?H(s,n,d,2):y--)}}},H=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Nt){i(o,t,n);for(let e=0;e<l.length;e++)H(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Lt)return void _(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),bt((()=>c.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),l=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,l):l()}else i(o,t,n)},W=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&vt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!ge(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&ln(m,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&pt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,te,r):l&&(i!==Nt||h>0&&64&h)?Q(l,t,n,!1,!0):(i===Nt&&384&h||!s&&16&u)&&Q(c,t,n),r&&J(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&bt((()=>{m&&ln(m,t,e),f&&pt(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Nt)return void X(n,r);if(t===Lt)return void T(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},X=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=e;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&bt(c,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)W(e[o],t,n,r,s)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),O(),t._vnode=e},te={p:v,um:W,m:H,r:J,mt:$,mc:x,pc:V,pbc:P,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:yt(ee,ne)}}function Tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function It(e,t,n=!1){const r=e.children,i=t.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=on(i[s]),t.el=e.el),n||It(e,t))}}function kt(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}const St=e=>e.__isTeleport;const Ct="components";function At(e,t){return Rt(Ct,e,!0,t)||e}const xt=Symbol();function Rt(e,t,n=!0,r=!1){const i=$||wn;if(i){const n=i.type;if(e===Ct){const e=Dn(n);if(e&&(e===t||e===(0,s._A)(t)||e===(0,s.kC)((0,s._A)(t))))return n}const o=Ot(i[e]||n[e],t)||Ot(i.appContext[e],t);return!o&&r?n:o}}function Ot(e,t){return e&&(e[t]||e[(0,s._A)(t)]||e[(0,s.kC)((0,s._A)(t))])}const Nt=Symbol(void 0),Pt=Symbol(void 0),Dt=Symbol(void 0),Lt=Symbol(void 0),Mt=[];let $t=null;function Ut(e=!1){Mt.push($t=e?null:[])}function jt(){Mt.pop(),$t=Mt[Mt.length-1]||null}let Ft=1;function Vt(e){Ft+=e}function Bt(e){return e.dynamicChildren=Ft>0?$t||s.Z6:null,jt(),Ft>0&&$t&&$t.push(e),e}function qt(e,t,n,r,s,i){return Bt(Xt(e,t,n,r,s,i,!0))}function zt(e,t,n,r,s){return Bt(Yt(e,t,n,r,s,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Wt="__vInternal",Gt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,s.HD)(e)||(0,r.dq)(e)||(0,s.mf)(e)?{i:$,r:e,k:t,f:!!n}:e:null;function Xt(e,t=null,n=null,r=0,i=null,o=(e===Nt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Jt(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(an(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,s.HD)(n)?8:16),Ft>0&&!a&&$t&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&$t.push(l),l}const Yt=Qt;function Qt(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==xt||(e=Dt),Ht(e)){const r=en(e,t,!0);return n&&an(r,n),r}if(Ln(e)&&(e=e.__vccOpts),t){t=Zt(t);let{class:e,style:n}=t;e&&!(0,s.HD)(e)&&(t.class=(0,s.C_)(e)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),t.style=(0,s.j5)(n))}const c=(0,s.HD)(e)?1:J(e)?128:St(e)?64:(0,s.Kn)(e)?4:(0,s.mf)(e)?2:0;return Xt(e,t,n,i,o,c,a,!0)}function Zt(e){return e?(0,r.X3)(e)||Wt in e?(0,s.l7)({},e):e:null}function en(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=e,c=t?cn(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&i?(0,s.kJ)(i)?i.concat(Jt(t)):[i,Jt(t)]:Jt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Nt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor};return l}function tn(e=" ",t=0){return Yt(Pt,null,e,t)}function nn(e,t){const n=Yt(Lt,null,e);return n.staticCount=t,n}function rn(e="",t=!1){return t?(Ut(),zt(Dt,null,e)):Yt(Dt,null,e)}function sn(e){return null==e||"boolean"===typeof e?Yt(Dt):(0,s.kJ)(e)?Yt(Nt,null,e.slice()):"object"===typeof e?on(e):Yt(Pt,null,String(e))}function on(e){return null===e.el||e.memo?e:en(e)}function an(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),an(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Wt in t?3===r&&$&&(1===$.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=$}}else(0,s.mf)(t)?(t={default:t,_ctx:$},n=32):(t=String(t),64&r?(n=16,t=[tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C_)([t.class,r.class]));else if("style"===e)t.style=(0,s.j5)([t.style,r.style]);else if((0,s.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function ln(e,t,n,r=null){o(e,t,7,[n,r])}function un(e,t,n,r){let i;const o=n&&n[r];if((0,s.kJ)(e)||(0,s.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=t(e[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}function hn(e,t,n={},r,s){if($.isCE||$.parent&&ge($.parent)&&$.parent.isCE)return Yt("slot","default"===t?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Ut();const o=i&&dn(i(n)),a=zt(Nt,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function dn(e){return e.some((e=>!Ht(e)||e.type!==Dt&&!(e.type===Nt&&!dn(e.children))))?e:null}const fn=e=>e?Tn(e)?Pn(e)||e.proxy:fn(e.parent):null,pn=(0,s.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fn(e.parent),$root:e=>fn(e.root),$emit:e=>e.emit,$options:e=>Be(e),$forceUpdate:e=>()=>I(e.update),$nextTick:e=>_.bind(e.proxy),$watch:e=>ne.bind(e)}),mn={get({_:e},t){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(i!==s.kT&&(0,s.RI)(i,t))return c[t]=1,i[t];if(o!==s.kT&&(0,s.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.RI)(h,t))return c[t]=3,a[t];if(n!==s.kT&&(0,s.RI)(n,t))return c[t]=4,n[t];$e&&(c[t]=0)}}const d=pn[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==s.kT&&(0,s.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,s.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return i!==s.kT&&(0,s.RI)(i,t)?(i[t]=n,!0):r!==s.kT&&(0,s.RI)(r,t)?(r[t]=n,!0):!(0,s.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||e!==s.kT&&(0,s.RI)(e,a)||t!==s.kT&&(0,s.RI)(t,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(pn,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const gn=mt();let yn=0;function vn(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||gn,a={uid:yn++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tt(i,o),emitsOptions:L(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=D.bind(null,a),e.ce&&e.ce(a),a}let wn=null;const bn=()=>wn||$,En=e=>{wn=e,e.scope.on()},_n=()=>{wn&&wn.scope.off(),wn=null};function Tn(e){return 4&e.vnode.shapeFlag}let In,kn,Sn=!1;function Cn(e,t=!1){Sn=t;const{props:n,children:r}=e.vnode,s=Tn(e);Ye(e,n,s,t),ht(e,r);const i=s?An(e,t):void 0;return Sn=!1,i}function An(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,mn));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Nn(e):null;En(e),(0,r.Jd)();const c=i(o,e,0,[e.props,n]);if((0,r.lk)(),_n(),(0,s.tI)(c)){if(c.then(_n,_n),t)return c.then((n=>{xn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else xn(e,c,t)}else Rn(e,t)}function xn(e,t,n){(0,s.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Rn(e,n)}function Rn(e,t,n){const i=e.type;if(!e.render){if(!t&&In&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=In(t,c)}}e.render=i.render||s.dG,kn&&kn(e)}En(e),(0,r.Jd)(),Ue(e),(0,r.lk)(),_n()}function On(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Nn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=On(e))},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in pn?pn[n](e):void 0}}))}function Dn(e){return(0,s.mf)(e)&&e.displayName||e.name}function Ln(e){return(0,s.mf)(e)&&"__vccOpts"in e}const Mn=(e,t)=>(0,r.Fl)(e,t,Sn);function $n(e,t,n){const r=arguments.length;return 2===r?(0,s.Kn)(t)&&!(0,s.kJ)(t)?Ht(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ht(n)&&(n=[n]),Yt(e,t,n))}Symbol("");const Un="3.2.33"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return ue},bM:function(){return se},iM:function(){return le},nr:function(){return re},ri:function(){return me},uT:function(){return $}});n(6699);var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?o.createElementNS(i,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const s=a.content;if(r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const s=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)d(s,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(s,e,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=m(e,t);h.test(n)?e.setProperty((0,r.rs)(s),n.replace(h,""),"important"):e[s]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let s=(0,r._A)(t);if("filter"!==s&&s in e)return p[t]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const s=(0,r.Pq)(t);null==n||s&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function v(e,t,n,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}const[w,b]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let E=0;const _=Promise.resolve(),T=()=>{E=0},I=()=>E||(_.then(T),E=w());function k(e,t,n,r){e.addEventListener(t,n,r)}function S(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=x(t);if(r){const o=i[t]=R(r,s);k(e,n,o,a)}else o&&(S(e,n,o,a),i[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function x(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=I(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,P=(e,t,n,s,i=!1,o,a,c,h)=>{"class"===t?l(e,s,i):"style"===t?u(e,n,s):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,s,i))?v(e,t,s,o,a,c,h):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),y(e,t,s,i))};function D(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",$=(e,{slots:t})=>(0,s.h)(s.P$,V(e),t);$.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j=($.props=(0,r.l7)({},s.P$.props,U),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function V(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:I=w,onAppearCancelled:k=b}=t,S=(e,t,n)=>{H(e,t?h:c),H(e,t?u:a),n&&n()},C=(e,t)=>{H(e,p),H(e,f),t&&t()},A=e=>(t,n)=>{const r=e?I:w,i=()=>S(t,e,n);j(r,[t,i]),K((()=>{H(t,e?l:o),z(t,e?h:c),F(r)||G(t,s,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(v,[e]),z(e,o),z(e,a)},onBeforeAppear(e){j(T,[e]),z(e,l),z(e,u)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>C(e,t);z(e,d),Q(),z(e,f),K((()=>{H(e,d),z(e,p),F(E)||G(e,s,y,n)})),j(E,[e,n])},onEnterCancelled(e){S(e,!1),j(b,[e])},onAppearCancelled(e){S(e,!0),j(k,[e])},onLeaveCancelled(e){C(e),j(_,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function G(e,t,n,r){const s=e._endId=++W,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=J(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),i()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(L+"Delay"),i=r(L+"Duration"),o=X(s,i),a=r(M+"Delay"),c=r(M+"Duration"),l=X(a,c);let u=null,h=0,d=0;t===L?o>0&&(u=L,h=o,d=i.length):t===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?L:M:null,d=u?u===L?i.length:c.length:0);const f=u===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Z(i);const o=s||i.props&&"number"===i.props.type;k(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n?s=s.trim():o&&(s=(0,r.He)(s)),e._assign(s)})),n&&k(e,"change",(()=>{e.value=e.value.trim()})),t||(k(e,"compositionstart",ee),k(e,"compositionend",te),k(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(s&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const se={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=(0,r.DM)(t);k(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(oe(e)):oe(e)));e._assign(e.multiple?i?new Set(t):t:t[0])})),e._assign=Z(s)},mounted(e,{value:t}){ie(e,t)},beforeUpdate(e,t,n){e._assign=Z(n)},updated(e,{value:t}){ie(e,t)}};function ie(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let s=0,i=e.options.length;s<i;s++){const i=e.options[s],o=oe(i);if(n)(0,r.kJ)(t)?i.selected=(0,r.hq)(t,o)>-1:i.selected=t.has(o);else if((0,r.WV)(oe(i),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function oe(e){return"_value"in e?e._value:e.value}const ae=["ctrl","shift","alt","meta"],ce={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ae.some((n=>e[`${n}Key`]&&!t.includes(n)))},le=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ce[t[e]];if(r&&r(n,t))return}return e(n,...r)},ue={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):he(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),he(e,!0),r.enter(e)):r.leave(e,(()=>{he(e,!1)})):he(e,t))},beforeUnmount(e,{value:t}){he(e,t)}};function he(e,t){e.style.display=t?e._vod:"none"}const de=(0,r.l7)({patchProp:P},c);let fe;function pe(){return fe||(fe=(0,s.Us)(de))}const me=(...e)=>{const t=pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=ge(e);if(!s)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return N},E9:function(){return re},F7:function(){return I},Gg:function(){return z},HD:function(){return L},He:function(){return te},Kn:function(){return $},NO:function(){return _},Nj:function(){return ee},Od:function(){return C},PO:function(){return B},Pq:function(){return a},RI:function(){return x},S0:function(){return q},W7:function(){return V},WV:function(){return m},Z6:function(){return b},_A:function(){return W},_N:function(){return O},aU:function(){return Q},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return l},kC:function(){return X},kJ:function(){return R},kT:function(){return w},l7:function(){return S},mf:function(){return D},rs:function(){return J},tI:function(){return U},tR:function(){return k},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=L(r)?d(r):l(r);if(s)for(const e in s)t[e]=s[e]}return t}return L(e)||$(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":R(e)||$(e)&&(e.toString===j||!D(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||R(t)||B(t)?t:String(t),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,I=e=>T.test(e),k=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,x=(e,t)=>A.call(e,t),R=Array.isArray,O=e=>"[object Map]"===F(e),N=e=>"[object Set]"===F(e),P=e=>e instanceof Date,D=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,U=e=>$(e)&&D(e.then)&&D(e.catch),j=Object.prototype.toString,F=e=>j.call(e),V=e=>F(e).slice(8,-1),B=e=>"[object Object]"===F(e),q=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,W=H((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,J=H((e=>e.replace(G,"-$1").toLowerCase())),X=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=H((e=>e?`on${X(e)}`:"")),Q=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3053:function(e,t,n){"use strict";n.d(t,{ZP:function(){return R}});n(6699);var r=n(4870),s=n(3396);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((n,s)=>(t.includes(s)||(n[s]=(0,r.SU)(e[s])),n)),{})}function o(e){return"function"===typeof e}function a(e){return(0,r.PG)(e)||(0,r.$y)(e)}function c(e,t,n,s){return e.call(s,(0,r.SU)(t),(0,r.SU)(n),s)}function l(e){return void 0!==e.$valid?!e.$valid:!e}function u(e,t,n,i,o,a,u){let{$lazy:h,$rewardEarly:d}=o,f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],p=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const y=(0,r.iH)(!!i.value),v=(0,r.iH)(0);n.value=!1;const w=(0,s.YP)([t,i].concat(f,g),(()=>{if(h&&!i.value||d&&!m.value&&!n.value)return;let r;try{r=c(e,t,p,u)}catch(s){r=Promise.reject(s)}v.value++,n.value=!!v.value,y.value=!1,Promise.resolve(r).then((e=>{v.value--,n.value=!!v.value,a.value=e,y.value=l(e)})).catch((e=>{v.value--,n.value=!!v.value,a.value=e,y.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:y,$unwatch:w}}function h(e,t,n,r,i,o,a,u){let{$lazy:h,$rewardEarly:d}=r;const f=()=>({}),p=(0,s.Fl)((()=>{if(h&&!n.value||d&&!u.value)return!1;let r=!0;try{const n=c(e,t,a,o);i.value=n,r=l(n)}catch(s){i.value=s}return r}));return{$unwatch:f,$invalid:p}}function d(e,t,n,a,c,l,d,f,p,m,g){const y=(0,r.iH)(!1),v=e.$params||{},w=(0,r.iH)(null);let b,E;e.$async?({$invalid:b,$unwatch:E}=u(e.$validator,t,y,n,a,w,c,e.$watchTargets,p,m,g)):({$invalid:b,$unwatch:E}=h(e.$validator,t,n,a,w,c,p,m));const _=e.$message,T=o(_)?(0,s.Fl)((()=>_(i({$pending:y,$invalid:b,$params:i(v),$model:t,$response:w,$validator:l,$propertyPath:f,$property:d})))):_||"";return{$message:T,$params:v,$pending:y,$invalid:b,$response:w,$unwatch:E}}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.SU)(e),n=Object.keys(t),s={},i={},a={};return n.forEach((e=>{const n=t[e];switch(!0){case o(n.$validator):s[e]=n;break;case o(n):s[e]={$validator:n};break;case e.startsWith("$"):a[e]=n;break;default:i[e]=n}})),{rules:s,nestedValidators:i,config:a}}function p(){}const m="__root";function g(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(s){return Promise.reject(s)}}function y(e,t){return g(e,p,t)}function v(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function w(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function b(e,t,n,i,o,a,c,l,u){const h=Object.keys(e),f=i.get(o,e),p=(0,r.iH)(!1),m=(0,r.iH)(!1),g=(0,r.iH)(0);if(f){if(!f.$partial)return f;f.$unwatch(),p.value=f.$dirty.value}const y={$dirty:p,$path:o,$touch:()=>{p.value||(p.value=!0)},$reset:()=>{p.value&&(p.value=!1)},$commit:()=>{}};return h.length?(h.forEach((r=>{y[r]=d(e[r],t,y.$dirty,a,c,r,n,o,u,m,g)})),y.$externalResults=(0,s.Fl)((()=>l.value?[].concat(l.value).map(((e,t)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),y.$invalid=(0,s.Fl)((()=>{const e=h.some((e=>(0,r.SU)(y[e].$invalid)));return m.value=e,!!y.$externalResults.value.length||e})),y.$pending=(0,s.Fl)((()=>h.some((e=>(0,r.SU)(y[e].$pending))))),y.$error=(0,s.Fl)((()=>!!y.$dirty.value&&(y.$pending.value||y.$invalid.value))),y.$silentErrors=(0,s.Fl)((()=>h.filter((e=>(0,r.SU)(y[e].$invalid))).map((e=>{const t=y[e];return(0,r.qj)({$propertyPath:o,$property:n,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(y.$externalResults.value))),y.$errors=(0,s.Fl)((()=>y.$dirty.value?y.$silentErrors.value:[])),y.$unwatch=()=>h.forEach((e=>{y[e].$unwatch()})),y.$commit=()=>{m.value=!0,g.value=Date.now()},i.set(o,e,y),y):(f&&i.set(o,e,y),y)}function E(e,t,n,r,s,i,o){const a=Object.keys(e);return a.length?a.reduce(((a,c)=>(a[c]=T({validations:e[c],state:t,key:c,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),a)),{}):{}}function _(e,t,n){const i=(0,s.Fl)((()=>[t,n].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,r.SU)(t)))),[]))),o=(0,s.Fl)({get(){return e.$dirty.value||!!i.value.length&&i.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),a=(0,s.Fl)((()=>{const t=(0,r.SU)(e.$silentErrors)||[],n=i.value.filter((e=>((0,r.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(n)})),c=(0,s.Fl)((()=>{const t=(0,r.SU)(e.$errors)||[],n=i.value.filter((e=>((0,r.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(n)})),l=(0,s.Fl)((()=>i.value.some((e=>e.$invalid))||(0,r.SU)(e.$invalid)||!1)),u=(0,s.Fl)((()=>i.value.some((e=>(0,r.SU)(e.$pending)))||(0,r.SU)(e.$pending)||!1)),h=(0,s.Fl)((()=>i.value.some((e=>e.$dirty))||i.value.some((e=>e.$anyDirty))||o.value)),d=(0,s.Fl)((()=>!!o.value&&(u.value||l.value))),f=()=>{e.$touch(),i.value.forEach((e=>{e.$touch()}))},p=()=>{e.$commit(),i.value.forEach((e=>{e.$commit()}))},m=()=>{e.$reset(),i.value.forEach((e=>{e.$reset()}))};return i.value.length&&i.value.every((e=>e.$dirty))&&f(),{$dirty:o,$errors:c,$invalid:l,$anyDirty:h,$error:d,$pending:u,$touch:f,$reset:m,$silentErrors:a,$commit:p}}function T(e){const t=w((function(){return U(),v((function(){if(S.$rewardEarly)return V(),y(s.Y3)}),(function(){return g(s.Y3,(function(){return new Promise((e=>{if(!$.value)return e(!D.value);const t=(0,s.YP)($,(()=>{e(!D.value),t()}))}))}))}))}));let{validations:n,state:i,key:o,parentKey:a,childResults:c,resultsCache:l,globalConfig:u={},instance:h,externalResults:d}=e;const p=a?`${a}.${o}`:o,{rules:T,nestedValidators:I,config:k}=f(n),S=Object.assign({},u,k),C=o?(0,s.Fl)((()=>{const e=(0,r.SU)(i);return e?(0,r.SU)(e[o]):void 0})):i,A=Object.assign({},(0,r.SU)(d)||{}),x=(0,s.Fl)((()=>{const e=(0,r.SU)(d);return o?e?(0,r.SU)(e[o]):void 0:e})),R=b(T,C,o,l,p,S,h,x,i),O=E(I,C,p,l,S,h,x),{$dirty:N,$errors:P,$invalid:D,$anyDirty:L,$error:M,$pending:$,$touch:U,$reset:j,$silentErrors:F,$commit:V}=_(R,O,c),B=o?(0,s.Fl)({get:()=>(0,r.SU)(C),set:e=>{N.value=!0;const t=(0,r.SU)(i),n=(0,r.SU)(d);n&&(n[o]=A[o]),(0,r.dq)(t[o])?t[o].value=e:t[o]=e}}):null;function q(e){return(c.value||{})[e]}function z(){(0,r.dq)(d)?d.value=A:0===Object.keys(A).length?Object.keys(d).forEach((e=>{delete d[e]})):Object.assign(d,A)}return o&&S.$autoDirty&&(0,s.YP)(C,(()=>{N.value||U();const e=(0,r.SU)(d);e&&(e[o]=A[o])}),{flush:"sync"}),(0,r.qj)(Object.assign({},R,{$model:B,$dirty:N,$error:M,$errors:P,$invalid:D,$anyDirty:L,$pending:$,$touch:U,$reset:j,$path:p||m,$silentErrors:F,$validate:t,$commit:V},c&&{$getResultsForChild:q,$clearExternalResults:z},O))}class I{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const s=Object.keys(n),i=Object.keys(t);if(i.length!==s.length)return!1;const o=i.every((e=>s.includes(e)));return!!o&&i.every((e=>!t[e].$params||Object.keys(t[e].$params).every((s=>(0,r.SU)(n[e].$params[s])===(0,r.SU)(t[e].$params[s])))))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:s}=n,i=this.checkRulesValidity(e,t,r),o=s.$unwatch?s.$unwatch:()=>({});return i?s:{$dirty:s.$dirty,$partial:!0,$unwatch:o}}}const k={COLLECT_ALL:!0,COLLECT_NONE:!1},S=Symbol("vuelidate#injectChildResults"),C=Symbol("vuelidate#removeChildResults");function A(e){let{$scope:t,instance:n}=e;const i={},o=(0,r.iH)([]),a=(0,s.Fl)((()=>o.value.reduce(((e,t)=>(e[t]=(0,r.SU)(i[t]),e)),{})));function c(e,n){let{$registerAs:r,$scope:s,$stopPropagation:a}=n;a||t===k.COLLECT_NONE||s===k.COLLECT_NONE||t!==k.COLLECT_ALL&&t!==s||(i[r]=e,o.value.push(r))}function l(e){o.value=o.value.filter((t=>t!==e)),delete i[e]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],c),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],l);const u=(0,s.f3)(S,[]);(0,s.JJ)(S,n.__vuelidateInjectInstances);const h=(0,s.f3)(C,[]);return(0,s.JJ)(C,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:u,removeValidationResultsFromParent:h}}function x(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?x(e[t]):(0,s.Fl)((()=>e[t]))}})}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(n=e,e=void 0,t=void 0);let{$registerAs:i,$scope:c=k.COLLECT_ALL,$stopPropagation:l,$externalResults:u,currentVueInstance:h}=n;const d=h||(0,s.FN)(),f=d?d.proxy.$options:{};if(!i&&d){const e=d.uid||d._uid;i=`_vuelidate_${e}`}const p=(0,r.iH)({}),m=new I,{childResults:g,sendValidationResultsToParent:y,removeValidationResultsFromParent:v}=d?A({$scope:c,instance:d}):{childResults:(0,r.iH)({})};if(!e&&f.validations){const e=f.validations;t=(0,r.iH)({}),(0,s.wF)((()=>{t.value=d.proxy,(0,s.YP)((()=>o(e)?e.call(t.value,new x(t.value)):e),(e=>{p.value=T({validations:e,state:t,childResults:g,resultsCache:m,globalConfig:n,instance:d.proxy,externalResults:u||d.proxy.vuelidateExternalResults})}),{immediate:!0})})),n=f.validationsConfig||n}else{const i=(0,r.dq)(e)||a(e)?e:(0,r.qj)(e||{});(0,s.YP)(i,(e=>{p.value=T({validations:e,state:t,childResults:g,resultsCache:m,globalConfig:n,instance:d?d.proxy:{},externalResults:u})}),{immediate:!0})}return d&&(y.forEach((e=>e(p,{$registerAs:i,$scope:c,$stopPropagation:l}))),(0,s.Jd)((()=>v.forEach((e=>e(i)))))),(0,s.Fl)((()=>Object.assign({},(0,r.SU)(p.value),g.value)))}},9117:function(e,t,n){"use strict";n.d(t,{C1:function(){return b},Do:function(){return v}});var r=n(4870);function s(e){return"function"===typeof e}function i(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function o(e){return s(e.$validator)?Object.assign({},e):{$validator:e}}function a(e){return"object"===typeof e?e.$valid:e}function c(e){return e.$validator||e}function l(e,t){if(!i(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!i(t)&&!s(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=o(t);return n.$params=Object.assign({},n.$params||{},e),n}function u(e,t){if(!s(e)&&"string"!==typeof(0,r.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!i(t)&&!s(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=o(t);return n.$message=e,n}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=o(e);return Object.assign({},n,{$async:!0,$watchTargets:t})}function d(e){return{$validator(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return(0,r.SU)(t).reduce(((t,n)=>{const r=Object.entries(n).reduce(((t,r)=>{let[i,o]=r;const l=e[i]||{},u=Object.entries(l).reduce(((e,t)=>{let[r,l]=t;const u=c(l),h=u.call(this,o,n,...s),d=a(h);if(e.$data[r]=h,e.$data.$invalid=!d||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!d){let t=l.$message||"";const n=l.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!d,$params:n,$model:o,$response:h})),e.$errors.push({$property:i,$message:t,$params:n,$response:h,$model:o,$pending:!1,$validator:r})}return{$valid:e.$valid&&d,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[i]=u.$data,t.$errors[i]=u.$errors,{$valid:t.$valid&&u.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&r.$valid,$data:t.$data.concat(r.$data),$errors:t.$errors.concat(r.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const f=e=>{if(e=(0,r.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},p=e=>(e=(0,r.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=(0,r.SU)(e),!f(e)||t.every((t=>t.test(e))))}r.SU,m(/^[a-zA-Z]*$/),m(/^[a-zA-Z0-9]*$/),m(/^\d*(\.\d+)?$/);const g=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var y=m(g),v={$validator:y,$message:"Value is not a valid email address",$params:{type:"email"}};function w(e){return"string"===typeof e&&(e=e.trim()),f(e)}var b={$validator:w,$message:"Value is required",$params:{type:"required"}};const E=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;m(E);m(/(^[0-9]*$)|(^-[0-9]+$)/),m(/^[-]?\d*(\.\d+)?$/)},6265:function(e,t,n){e.exports=n(9435)},4951:function(e,t,n){"use strict";n(2801);var r=n(6642),s=n(6806),i=n(3833),o=n(4360),a=n(5047),c=n(5976),l=n(9896),u=n(8507),h=n(3303),d=n(6090),f=n(1874);e.exports=function(e){return new Promise((function(t,n){var p,m=e.data,g=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete g["Content-Type"];var w=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+E)}var _=a(e.baseURL,e.url);function T(){if(w){var r="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,i=y&&"text"!==y&&"json"!==y?w.response:w.responseText,o={data:i,status:w.status,statusText:w.statusText,headers:r,config:e,request:w};s((function(e){t(e),v()}),(function(e){n(e),v()}),o),w=null}}if(w.open(e.method.toUpperCase(),o(_,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=T:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(T)},w.onabort=function(){w&&(n(new h("Request aborted",h.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,w,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new h(t,r.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,w)),w=null},r.isStandardBrowserEnv()){var I=(e.withCredentials||l(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;I&&(g[e.xsrfHeaderName]=I)}"setRequestHeader"in w&&r.forEach(g,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete g[t]:w.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),y&&"json"!==y&&(w.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&w.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){w&&(n(!e||e&&e.type?new d:e),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null);var k=f(_);k&&-1===["http","https","file"].indexOf(k)?n(new h("Unsupported protocol "+k+":",h.ERR_BAD_REQUEST,e)):w.send(m)}))}},9435:function(e,t,n){"use strict";var r=n(6642),s=n(5955),i=n(7104),o=n(8186),a=n(7);function c(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n.create=function(t){return c(o(e,t))},n}var l=c(a);l.Axios=i,l.CanceledError=n(6090),l.CancelToken=n(6016),l.isCancel=n(5936),l.VERSION=n(4679).version,l.toFormData=n(8994),l.AxiosError=n(3303),l.Cancel=l.CanceledError,l.all=function(e){return Promise.all(e)},l.spread=n(5431),l.isAxiosError=n(786),e.exports=l,e.exports["default"]=l},6016:function(e,t,n){"use strict";var r=n(6090);function s(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},s.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},s.source=function(){var e,t=new s((function(t){e=t}));return{token:t,cancel:e}},e.exports=s},6090:function(e,t,n){"use strict";var r=n(3303),s=n(6642);function i(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}s.inherits(i,r,{__CANCEL__:!0}),e.exports=i},5936:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},7104:function(e,t,n){"use strict";var r=n(6642),s=n(4360),i=n(999),o=n(6559),a=n(8186),c=n(5047),l=n(6298),u=l.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!s){var h=[o,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(c),i=Promise.resolve(t);while(h.length)i=i.then(h.shift(),h.shift());return i}var d=t;while(r.length){var f=r.shift(),p=r.shift();try{d=f(d)}catch(m){p(m);break}}try{i=o(d)}catch(m){return Promise.reject(m)}while(c.length)i=i.then(c.shift(),c.shift());return i},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return s(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,s){return this.request(a(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h},3303:function(e,t,n){"use strict";var r=n(6642);function s(e,t,n,r,s){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}r.inherits(s,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=s.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(s,o),Object.defineProperty(i,"isAxiosError",{value:!0}),s.from=function(e,t,n,o,a,c){var l=Object.create(i);return r.toFlatObject(e,l,(function(e){return e!==Error.prototype})),s.call(l,e.message,t,n,o,a),l.name=e.name,c&&Object.assign(l,c),l},e.exports=s},999:function(e,t,n){"use strict";var r=n(6642);function s(){this.handlers=[]}s.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},5047:function(e,t,n){"use strict";var r=n(4777),s=n(2381);e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},6559:function(e,t,n){"use strict";var r=n(6642),s=n(3756),i=n(5936),o=n(7),a=n(6090);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=s.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return c(e),t.data=s.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},8186:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){t=t||{};var n={};function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:s(void 0,e[n]):s(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return s(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:s(void 0,e[n]):s(void 0,t[n])}function c(n){return n in t?s(e[n],t[n]):n in e?s(void 0,e[n]):void 0}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||i,s=t(e);r.isUndefined(s)&&t!==c||(n[e]=s)})),n}},6806:function(e,t,n){"use strict";var r=n(3303);e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},3756:function(e,t,n){"use strict";var r=n(6642),s=n(7);e.exports=function(e,t,n){var i=this||s;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},7:function(e,t,n){"use strict";var r=n(6642),s=n(1446),i=n(3303),o=n(8507),a=n(8994),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(4951)),e}function h(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(s){if("SyntaxError"!==s.name)throw s}return(n||JSON.stringify)(e)}var d={transitional:o,adapter:u(),transformRequest:[function(e,t){if(s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,i=r.isObject(e),o=t&&t["Content-Type"];if((n=r.isFileList(e))||i&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,c&&new c)}return i||"application/json"===o?(l(t,"application/json"),h(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||s&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw i.from(a,i.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1051)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(c)})),e.exports=d},8507:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4679:function(e){e.exports={version:"0.27.2"}},5955:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},4360:function(e,t,n){"use strict";var r=n(6642);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))})))})),i=o.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},2381:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3833:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,s,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(s)&&a.push("path="+s),r.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},786:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},9896:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},1446:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},1051:function(e){e.exports=null},5976:function(e,t,n){"use strict";var r=n(6642),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(o[t]&&s.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},1874:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},5431:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},8994:function(e,t,n){"use strict";var r=n(6642);function s(e,t){t=t||new FormData;var n=[];function s(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function i(e,o){if(r.isPlainObject(e)||r.isArray(e)){if(-1!==n.indexOf(e))throw Error("Circular reference detected in "+o);n.push(e),r.forEach(e,(function(e,n){if(!r.isUndefined(e)){var a,c=o?o+"."+n:n;if(e&&!o&&"object"===typeof e)if(r.endsWith(n,"{}"))e=JSON.stringify(e);else if(r.endsWith(n,"[]")&&(a=r.toArray(e)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(c,s(e))}));i(e,c)}})),n.pop()}else t.append(o,s(e))}return i(e),t}e.exports=s},6298:function(e,t,n){"use strict";var r=n(4679).version,s=n(3303),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};function a(e,t,n){if("object"!==typeof e)throw new s("options must be an object",s.ERR_BAD_OPTION_VALUE);var r=Object.keys(e),i=r.length;while(i-- >0){var o=r[i],a=t[o];if(a){var c=e[o],l=void 0===c||a(c,o,e);if(!0!==l)throw new s("option "+o+" must be "+l,s.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new s("Unknown option "+o,s.ERR_BAD_OPTION)}}i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new s(i(r," has been removed"+(t?" in "+t:"")),s.ERR_DEPRECATED);return t&&!o[r]&&(o[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:a,validators:i}},6642:function(e,t,n){"use strict";var r=n(5955),s=Object.prototype.toString,i=function(e){return function(t){var n=s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function o(e){return e=e.toLowerCase(),function(t){return i(t)===e}}function a(e){return Array.isArray(e)}function c(e){return"undefined"===typeof e}function l(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var u=o("ArrayBuffer");function h(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t}function d(e){return"string"===typeof e}function f(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function m(e){if("object"!==i(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var g=o("Date"),y=o("File"),v=o("Blob"),w=o("FileList");function b(e){return"[object Function]"===s.call(e)}function E(e){return p(e)&&b(e.pipe)}function _(e){var t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||s.call(e)===t||b(e.toString)&&e.toString()===t)}var T=o("URLSearchParams");function I(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function k(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function C(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=C(e[n],t):m(t)?e[n]=C({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function A(e,t,n){return S(t,(function(t,s){e[s]=n&&"function"===typeof t?r(t,n):t})),e}function x(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function R(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function O(e,t,n){var r,s,i,o={};t=t||{};do{r=Object.getOwnPropertyNames(e),s=r.length;while(s-- >0)i=r[s],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function N(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n}function P(e){if(!e)return null;var t=e.length;if(c(t))return null;var n=new Array(t);while(t-- >0)n[t]=e[t];return n}var D=function(e){return function(t){return e&&t instanceof e}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));e.exports={isArray:a,isArrayBuffer:u,isBuffer:l,isFormData:_,isArrayBufferView:h,isString:d,isNumber:f,isObject:p,isPlainObject:m,isUndefined:c,isDate:g,isFile:y,isBlob:v,isFunction:b,isStream:E,isURLSearchParams:T,isStandardBrowserEnv:k,forEach:S,merge:C,extend:A,trim:I,stripBOM:x,inherits:R,toFlatObject:O,kindOf:i,kindOfTest:o,endsWith:N,toArray:P,isTypedArray:D,isFileList:w}},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),s="firebase",i="9.8.1";
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
(0,r.KN)(s,i,"app")},34:function(e,t,n){"use strict";n.d(t,{hJ:function(){return Ye},v0:function(){return cr},Aj:function(){return at},rh:function(){return an},w7:function(){return ct}});n(6699);var r=n(223),s=n(7077);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}
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
 */function f(e,...t){throw y(e,...t)}function p(e,...t){return y(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},l()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||w(t)}
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
 */const E=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
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
 */function T(e,t){const n=(0,s.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function O(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new R(3e4,6e4);
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
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,s,i={}){return $(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function $(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},P),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function U(e,t,n,r,s={}){const i=await M(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function j(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?O(e.config,s):`${e.config.apiScheme}://${s}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
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
 */async function B(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
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
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function H(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=W(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:z(K(i.auth_time)),issuedAtTime:z(K(i.iat)),expirationTime:z(K(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function W(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function G(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&X(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),s=await J(e,q(n,{idToken:r}));v(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?ne(i.providerUserInfo):[],a=te(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Q(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function re(e,t){const n=await $(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=j(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new se;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Q(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:_,stsTokenManager:T}=t;v(w&&T,e,"internal-error");const I=se.fromJSON(this.name,T);v("string"===typeof w,e,"internal-error"),ie(u,e.name),ie(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof E,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(y,e.name);const k=new oe({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const s=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(s),s}}
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
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const ce=ae;
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
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,s),this.fullPersistenceKey=le("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ce),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||_(ce);const i=le(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){const n=oe._fromJSON(e,t);l!==s&&(o=n),s=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new ue(s,e,n)):new ue(s,e,n)}}
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
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ye(t))return"Blackberry";if(ve(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function ye(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function we(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,r.z$)()){var t;return we(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ee(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return we(e)||ge(e)||ve(e)||ye(e)||/windows phone/i.test(e)||me(e)}function Te(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
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
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
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
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ae(this),this.idTokenSubscription=new Ae(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ce(e){return(0,r.m9)(e)}class Ae{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
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
 */async function Re(e,t){return M(e,"POST","/v1/accounts:update",t)}
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
async function Oe(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
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
async function Ne(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Pe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
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
 */class De extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new De(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new De(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Re(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Le(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
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
 */const Me="http://localhost";class $e extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new $e(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Me,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */async function Ue(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function je(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Fe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function Be(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ve)}
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
 */class qe extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return je(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Be(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
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
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class Ke{constructor(e){var t,n,s,i,o,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ze(null!==(s=c["mode"])&&void 0!==s?s:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new Ke(t)}catch(n){return null}}}
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
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return De._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ke.parseLink(t);return v(n,"argument-error"),De._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Je extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Xe extends Je{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xe.PROVIDER_ID="facebook.com";
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
class Ye extends Je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $e._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
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
class Qe extends Je{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
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
class Ze extends Je{constructor(){super("twitter.com")}static credential(e,t){return $e._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ze.credential(t,n)}catch(r){return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com",Ze.PROVIDER_ID="twitter.com";
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
class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await oe._fromIdTokenResponse(e,n,r),i=tt(n),o=new et({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class nt extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function st(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
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
async function it(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await J(e,rt(r,s,t,e),n);v(i.idToken,r,"internal-error");const o=W(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),et._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
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
 */async function ot(e,t,n=!1){const r="signIn",s=await rt(e,r,t),i=await et._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function at(e,t,n,s){return(0,r.m9)(e).onAuthStateChanged(t,n,s)}function ct(e){return(0,r.m9)(e).signOut()}
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
function lt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ut(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ht="__sak";
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
 */class dt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ht,"1"),this.storage.removeItem(ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ft(){const e=(0,r.z$)();return fe(e)||we(e)}const pt=1e3,mt=10;class gt extends dt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ft()&&Te(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Ee()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gt.type="LOCAL";const yt=gt;
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
 */class vt extends dt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vt.type="SESSION";const wt=vt;
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
 */function bt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await bt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function _t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Et.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=_t("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
 */function It(){return window}function kt(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function St(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function Ct(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function xt(){return St()?self:null}
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
 */const Rt="firebaseLocalStorageDb",Ot=1,Nt="firebaseLocalStorage",Pt="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lt(e,t){return e.transaction([Nt],t?"readwrite":"readonly").objectStore(Nt)}function Mt(){const e=indexedDB.deleteDatabase(Rt);return new Dt(e).toPromise()}function $t(){const e=indexedDB.open(Rt,Ot);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Nt,{keyPath:Pt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Nt)?t(n):(n.close(),await Mt(),t(await $t()))}))}))}async function Ut(e,t,n){const r=Lt(e,!0).put({[Pt]:t,value:n});return new Dt(r).toPromise()}async function jt(e,t){const n=Lt(e,!1).get(t),r=await new Dt(n).toPromise();return void 0===r?null:r.value}function Ft(e,t){const n=Lt(e,!0).delete(t);return new Dt(n).toPromise()}const Vt=800,Bt=3;class qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await $t()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return St()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(xt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ct(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $t();return await Ut(e,ht,"1"),await Ft(e,ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ut(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ft(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lt(e,!1).getAll();return new Dt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qt.type="LOCAL";const zt=qt;
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
 */function Ht(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Kt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
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
function Wt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Gt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Wt().appendChild(r)}))}function Jt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Jt("rcb"),new R(3e4,6e4);
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
const Xt="recaptcha";async function Yt(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"===typeof s,e,"argument-error"),v(n.type===Xt,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Ue(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
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
class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,t){return Yt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qt.credentialFromTaggedObject(t)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
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
function Zt(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Qt.PROVIDER_ID="phone",Qt.PHONE_SIGN_IN_METHOD="phone";class en extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tn(e){return ot(e.auth,new en(e),e.bypassAuthState)}function nn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new en(e),e.bypassAuthState)}async function rn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),st(n,new en(e),e.bypassAuthState)}
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
 */class sn{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tn;case"linkViaPopup":case"linkViaRedirect":return rn;case"reauthViaPopup":case"reauthViaRedirect":return nn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const on=new R(2e3,1e4);async function an(e,t,n){const r=Ce(e);g(e,t,Ge);const s=Zt(r,n),i=new cn(r,"signInViaPopup",t,s);return i.executeNotNull()}class cn extends sn{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,on.get())};e()}}cn.currentPopupAction=null;
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
const ln="pendingRedirect",un=new Map;class hn extends sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=un.get(this.auth._key());if(!e){try{const t=await dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}un.set(this.auth._key(),e)}return this.bypassAuthState||un.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(e,t){const n=mn(t),r=pn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function fn(e,t){un.set(e._key(),t)}function pn(e){return _(e._redirectPersistence)}function mn(e){return le(ln,e.config.apiKey,e.name)}
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
 */async function gn(e,t,n=!1){const r=Ce(e),s=Zt(r,t),i=new hn(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const yn=6e5;class vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!En(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function En(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(e);default:return!1}}
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
 */async function _n(e,t={}){return M(e,"GET","/v1/projects",t)}
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
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const r of t)try{if(Sn(r))return}catch(n){}f(e,"unauthorized-domain")}function Sn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!In.test(n))return!1;if(Tn.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Cn=new R(3e4,6e4);function An(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise(((t,n)=>{var r,s,i;function o(){An(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{An(),n(p(e,"network-request-failed"))},timeout:Cn.get()})}if(null===(s=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=It().gapi)||void 0===i?void 0:i.load)){const t=Jt("iframefcb");return It()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Gt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rn=null,e}))}let Rn=null;function On(e){return Rn=Rn||xn(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Nn=new R(5e3,15e3),Pn="__/auth/iframe",Dn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Dn):`https://${e.config.authDomain}/${Pn}`,i={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=Mn.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Un(e){const t=await On(e),n=It().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=It().setTimeout((()=>{r(s)}),Nn.get());function o(){It().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Vn=600,Bn="_blank",qn="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Hn(e,t,n,s=Fn,i=Vn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jn),{width:s.toString(),height:i.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=pe(u)?Bn:n),de(u)&&(t=t||qn,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==c)return Kn(t||"",c),new zn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zn(d)}function Kn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Wn="__/auth/handler",Gn="emulator/auth/handler";function Jn(e,t,n,i,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.Jn,eventId:o};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Je){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Xn(e)}?${(0,r.xO)(l).slice(1)}`}function Xn({config:e}){return e.emulator?O(e,Gn):`https://${e.authDomain}/${Wn}`}
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
 */const Yn="webStorageSupport";class Qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=gn,this._overrideRedirectResult=fn}async _openPopup(e,t,n,r){var s;b(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=Jn(e,t,n,k(),r);return Hn(e,i,_t())}async _openRedirect(e,t,n,r){return await this._originValidation(e),kt(Jn(e,t,n,k(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Un(e),n=new vn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Yn,{type:Yn},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Yn];void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||fe()||we()}}const Zn=Qn;class er{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class tr extends er{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tr(e)}_finalizeEnroll(e,t,n){return ut(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(e){return tr._fromCredential(e)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",sr="0.20.1";
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
class ir{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function or(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(e){(0,s.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((t,r)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Se(t,r,s);return I(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(e=>{const t=Ce(e.getProvider("auth").getImmediate());return(e=>new ir(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(rr,sr,or(e)),(0,s.KN)(rr,sr,"esm2017")}
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
 */function cr(e=(0,s.Mq)()){const t=(0,s.qX)(e,"auth");return t.isInitialized()?t.getImmediate():T(e,{popupRedirectResolver:Zn,persistence:[zt,yt,wt]})}ar("Browser")},6035:function(e,t,n){"use strict";n.d(t,{ET:function(){return ih},hJ:function(){return wu},PL:function(){return sh},ad:function(){return Tu}});n(2801),n(6699);var r,s=n(7077),i=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function T(){this.s=this.s,this.o=this.o}var I=0,k={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var e=m(this);delete k[e]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function A(e){e:{var t=Kn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function x(e){return Array.prototype.concat.apply([],arguments)}function R(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var N,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return-1!=e.indexOf(t)}function L(e,t){return e<t?-1:e>t?1:0}e:{var M=h.navigator;if(M){var $=M.userAgent;if($){N=$;break e}}N=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function j(e){const t={};for(const n in e)t[n]=e[n];return t}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<F.length;t++)n=F[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){return B[" "](e),e}function q(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}B[" "]=d;var z,H=D(N,"Opera"),K=D(N,"Trident")||D(N,"MSIE"),W=D(N,"Edge"),G=W||K,J=D(N,"Gecko")&&!(D(N.toLowerCase(),"webkit")&&!D(N,"Edge"))&&!(D(N,"Trident")||D(N,"MSIE"))&&!D(N,"Edge"),X=D(N.toLowerCase(),"webkit")&&!D(N,"Edge");function Y(){var e=h.document;return e?e.documentMode:void 0}e:{var Q="",Z=function(){var e=N;return J?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):X?/WebKit\/(\S+)/.exec(e):H?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Z&&(Q=Z?Z[1]:""),K){var ee=Y();if(null!=ee&&ee>parseFloat(Q)){z=String(ee);break e}}z=Q}var te,ne={};function re(){return q((function(){let e=0;const t=P(String(z)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=L(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||L(0==s[2].length,0==i[2].length)||L(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(h.document&&K){var se=Y();te=se||(parseInt(z,10)||void 0)}else te=void 0;var ie=te,oe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ce(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(J){e:{try{B(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}ae.prototype.h=function(){this.defaultPrevented=!0},_(ce,ae);var le={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),he=0;function de(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function me(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=S(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ge(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}pe.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ge(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new de(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),ve={};function we(e,t,n,r,s){if(r&&r.once)return _e(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)we(e,t[i],n,r,s);return null}return n=xe(n),e&&e[ue]?e.N(t,n,p(r)?!!r.capture:!!r,s):be(e,t,n,!1,r,s)}function be(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Ce(e);if(a||(e[ye]=a=new pe(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ee(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oe||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ee(){function e(n){return t.call(e.src,e.listener,n)}var t=Se;return e}function _e(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)_e(e,t[i],n,r,s);return null}return n=xe(n),e&&e[ue]?e.O(t,n,p(r)?!!r.capture:!!r,s):be(e,t,n,!0,r,s)}function Te(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Te(e,t[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=xe(n),e&&e[ue]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ge(i,n,r,s),-1<n&&(fe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ge(t,n,r,s)),(n=-1<e?t[e]:null)&&Ie(n))}function Ie(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ue])me(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(me(n,e),0==n.h&&(n.src=null,t[ye]=null)):fe(e)}}}function ke(e){return e in ve?ve[e]:ve[e]="on"+e}function Se(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ie(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ye],e instanceof pe?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function Re(){T.call(this),this.i=new pe(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var s=t;t=new ae(r,e),V(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Ne(o,r,!0,t)&&s}if(o=t.g=e,s=Ne(o,r,!0,t)&&s,s=Ne(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Ne(o,r,!1,t)&&s}function Ne(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&me(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}_(Re,T),Re.prototype[ue]=!0,Re.prototype.removeEventListener=function(e,t,n,r){Te(this,e,t,n,r)},Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fe(n[r]);delete t.g[e],t.h--}}this.I=null},Re.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Re.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Pe=h.JSON.stringify;function De(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Le{constructor(){this.h=this.g=null}add(e,t){const n=$e.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,$e=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function je(e){h.setTimeout((()=>{throw e}),0)}function Fe(e,t){Me||Ve(),Be||(Me(),Be=!0),qe.add(e,t)}function Ve(){var e=h.Promise.resolve(void 0);Me=function(){e.then(ze)}}var Be=!1,qe=new Le;function ze(){for(var e;e=De();){try{e.h.call(e.g)}catch(n){je(n)}var t=$e;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Be=!1}function He(e,t){Re.call(this),this.h=e||1,this.g=t||h,this.j=b(this.kb,this),this.l=Date.now()}function Ke(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ge(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_(He,Re),r=He.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Ke(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){He.Z.M.call(this),Ke(this),delete this.g};class Je extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(e){T.call(this),this.h=e,this.g={}}_(Xe,T);var Ye=[];function Qe(e,t,n,r){Array.isArray(n)||(n&&(Ye[0]=n.toString()),n=Ye);for(var s=0;s<n.length;s++){var i=we(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ze(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ie(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function nt(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function rt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+it(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function it(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Pe(n)}catch(a){return t}}Xe.prototype.M=function(){Xe.Z.M.call(this),Ze(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var ot={},at=null;function ct(){return at=at||new Re}function lt(e){ae.call(this,ot.Ma,e)}function ut(e){const t=ct();Oe(t,new lt(t,e))}function ht(e,t){ae.call(this,ot.STAT_EVENT,e),this.stat=t}function dt(e){const t=ct();Oe(t,new ht(t,e))}function ft(e,t){ae.call(this,ot.Na,e),this.size=t}function pt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}ot.Ma="serverreachability",_(lt,ae),ot.STAT_EVENT="statevent",_(ht,ae),ot.Na="timingevent",_(ft,ae);var mt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},gt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function vt(e){return e.h||(e.h=e.i())}function wt(){}yt.prototype.h=null;var bt,Et={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _t(){ae.call(this,"d")}function Tt(){ae.call(this,"c")}function It(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Xe(this),this.P=Ct,e=G?125:void 0,this.W=new He(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}_(_t,ae),_(Tt,ae),_(It,yt),It.prototype.g=function(){return new XMLHttpRequest},It.prototype.i=function(){return{}},bt=new It;var Ct=45e3,At={},xt={};function Rt(e,t,n){e.K=1,e.v=tn(Jt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Lt(e),e.A=Jt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new St,e.g=Tr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Je(b(e.Ia,e,e.g),e.O)),Qe(e.V,e.g,"readystatechange",e.gb),t=e.H?j(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ut(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function Nt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Dt(e,n),r==xt){4==t&&(e.o=4,dt(14),s=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(r==At){e.o=4,dt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}rt(e.j,e.m,r,null),Ft(e,r)}Nt(e)&&r!=xt&&r!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,dt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(t),t.L=!0,dt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),Ut(e))}function Dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?xt:(n=Number(t.substring(n,r)),isNaN(n)?At:(r+=1,r+n>t.length?xt:(t=t.substr(r,n),e.C=r+n,t)))}function Lt(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pt(b(e.eb,e),t)}function $t(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||vr(e.l,e)}function jt(e){$t(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.W),Ze(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ft(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),ir(n)}pr(n),dt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=pt(b(n.ab,n),6e3));if(1>=In(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else br(n,11)}else if((e.J||n.g==e)&&yr(n),!O(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(D(e,"spdy")||D(e,"quic")||D(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Sn(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,en(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=_r(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&($t(a),Lt(a)),r.g=o}else fr(r);0<n.l.length&&cr(n)}else"stop"!=l[0]&&"close"!=l[0]||br(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?br(n,7):sr(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ut(4)}catch(l){}}function Vt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=Vt(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof qt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function zt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ht(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],Ht(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Ht(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Qn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Qn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||G||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==t||ut(8==t||0>=d?3:2),$t(this);var n=this.g.ba();this.N=n;t:if(Nt(this)){var r=Zn(this.g);e="";var s=r.length,i=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){jt(this),Ut(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,dt(12),jt(this),Ut(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ft(this,n)}this.U?(Pt(this,u,o),G&&this.i&&3==u&&(Qe(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),Ft(this,o)),4==u&&jt(this),this.i&&!this.I&&(4==u?vr(this.l,this):(this.i=!1,Lt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),jt(this),Ut(this)}}}catch(u){}},r.fb=function(){if(this.g){var e=Qn(this.g),t=this.g.ga();this.C<t.length&&($t(this),Pt(this,e,t),this.i&&4!=e&&Lt(this))}},r.cancel=function(){this.I=!0,jt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ut(3),dt(17)),jt(this),this.o=2,Ut(this)):Mt(this,this.Y-e)},r=qt.prototype,r.R=function(){zt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return zt(this),this.g.concat()},r.get=function(e,t){return Ht(this.h,e)?this.h[e]:t},r.set=function(e,t){Ht(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Gt){this.g=void 0!==t?t:e.g,Xt(this,e.j),this.s=e.s,Yt(this,e.i),Qt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new qt(t.g),n.h=t.h),Zt(this,n),this.o=e.o}else e&&(n=String(e).match(Kt))?(this.g=!!t,Xt(this,n[1]||"",!0),this.s=sn(n[2]||""),Yt(this,n[3]||"",!0),Qt(this,n[4]),this.l=sn(n[5]||"",!0),Zt(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Jt(e){return new Gt(e)}function Xt(e,t,n){e.j=n?sn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yt(e,t,n){e.i=n?sn(t,!0):t}function Qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Zt(e,t,n){t instanceof fn?(e.h=t,wn(e.h,e.g)):(n||(t=on(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Gt?Jt(e):new Gt(e,void 0)}function rn(e,t,n,r){var s=new Gt(null,void 0);return e&&Xt(s,e),t&&Yt(s,t),n&&Qt(s,n),r&&(s.l=r),s}function sn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,an),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function an(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,cn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(on(t,cn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(on(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,dn)),e.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pn(e){e.g||(e.g=new qt,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function mn(e,t){pn(e),t=vn(e,t),Ht(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ht(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&zt(e)))}function gn(e,t){return pn(e),t=vn(e,t),Ht(e.g.h,t)}function yn(e,t,n){mn(e,t),0<n.length&&(e.i=null,e.g.set(vn(e,t),R(n)),e.h+=n.length)}function vn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wn(e,t){t&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(mn(this,t),yn(this,n,e))}),e)),e.j=t}r=fn.prototype,r.add=function(e,t){pn(this),this.i=null,e=vn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){pn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},r.R=function(e){pn(this);var t=[];if("string"===typeof e)gn(this,e)&&(t=x(t,this.g.get(vn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=x(t,e[n])}return t},r.set=function(e,t){return pn(this),this.i=null,e=vn(this,e),gn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var bn=class{constructor(e,t){this.h=e,this.g=t}};function En(e){this.l=e||_n,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function Tn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function In(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Sn(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return R(e.i)}function xn(){}function Rn(){this.g=new xn}function On(e,t,n){const r=n||"";try{Bt(e,(function(e,n){let s=e;p(e)&&(s=Pe(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Nn(e,t){const n=new et;if(h.Image){const r=new Image;r.onload=E(Pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=E(Pn,n,r,"TestLoadImage: error",!1,t),r.onabort=E(Pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=E(Pn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Pn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Dn(e){this.l=e.$b||null,this.j=e.ib||!1}function Ln(e,t){Re.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},xn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},xn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},_(Dn,yt),Dn.prototype.g=function(){return new Ln(this.l,this.j)},Dn.prototype.i=function(e){return function(){return e}}({}),_(Ln,Re);var Mn=0;function $n(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,jn(e)}function jn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Ln.prototype,r.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,jn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Mn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$n(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):jn(this),3==this.readyState&&$n(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fn=h.JSON.parse;function Vn(e){Re.call(this),this.headers=new qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}_(Vn,Re);var Bn="",qn=/^https?$/i,zn=["POST","PUT"];function Hn(e){return K&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Kn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gn(e),Xn(e)}function Gn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Jn(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Qn(e)||2!=e.ba()))if(e.v&&4==Qn(e))We(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Qn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Kt)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!qn.test(s?s.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Qn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Gn(e)}}finally{Xn(e)}}}function Xn(e,t){if(e.g){Yn(e);const r=e.g,s=e.C[0]?d:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Qn(e){return e.g?e.g.readyState:0}function Zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=er(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rr(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,e),this.$a=nr("retryDelaySeedMs",1e4,e),this.Ya=nr("forwardChannelMaxRetries",2,e),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new En(e&&e.concurrentRequestLimit),this.Ca=new Rn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(or(e),3==e.G){var t=e.V++,n=Jt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=tn(Jt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=Tr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Lt(t)}Er(e)}function ir(e){e.g&&(mr(e),e.g.cancel(),e.g=null)}function or(e){ir(e),e.u&&(h.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function ar(e,t){e.l.push(new bn(e.Za++,t)),3==e.G&&cr(e)}function cr(e){Tn(e.i)||e.m||(e.m=!0,Fe(e.Ha,e),e.C=0)}function lr(e,t){return!(In(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pt(b(e.Ha,e,t),wr(e,e.C)),e.C++,!0))}function ur(e,t){var n;n=t?t.m:e.V++;const r=Jt(e.F);en(r,"SID",e.J),en(r,"RID",n),en(r,"AID",e.U),hr(e,r),e.o&&e.s&&tr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Sn(e.i,n),Rt(n,r,t)}function hr(e,t){e.j&&Bt({},(function(e,n){en(t,n,e)}))}function dr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?b(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{On(a,e,"req"+n+"_")}catch(Yr){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fr(e){e.g||e.u||(e.Y=1,Fe(e.Ga,e),e.A=0)}function pr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pt(b(e.Ga,e),wr(e,e.A)),e.A++,!0)}function mr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function gr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Jt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hr(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Jt(t)),n.s=null,n.U=!0,Ot(n,e)}function yr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function vr(e,t){var n=null;if(e.g==t){yr(e),mr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=ct(),Oe(r,new ft(r,n,t,s)),cr(e)}else fr(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&lr(e,t)||2==r&&pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:br(e,5);break;case 4:br(e,10);break;case 3:br(e,6);break;default:br(e,2)}}function wr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function br(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=b(e.jb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xt(n,"https"),tn(n)),Nn(n.toString(),r)}else dt(2);e.G=0,e.j&&e.j.va(t),Er(e),or(e)}function Er(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,R(e.l),e.l.length=0),e.j.ua())}function _r(e,t,n){let r=nn(n);if(""!=r.i)t&&Yt(r,t+"."+r.i),Qt(r,r.m);else{const e=h.location;r=rn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){en(r,t,e)})),t=e.D,n=e.sa,t&&n&&en(r,t,n),en(r,"VER",e.ma),hr(e,r),r}function Tr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Vn(new Dn({ib:!0})):new Vn(e.qa),t.L=e.H,t}function Ir(){}function kr(){if(K&&!(10<=Number(ie)))throw Error("Environmental error: no available transport.")}function Sr(e,t){Re.call(this),this.g=new rr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xr(this)}function Cr(e){_t.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ar(){Tt.call(this),this.status=1}function xr(e){this.g=e}r=Vn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bt.g(),this.C=this.u?vt(this.u):vt(bt),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Wn(this,i)}e=n||"";const s=new qt(this.headers);r&&Bt(r,(function(e,t){s.set(t,e)})),r=A(s.T()),n=h.FormData&&e instanceof h.FormData,!(0<=S(zn,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wn(this,i)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Xn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Vn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new kt(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=j(i),V(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dr(this,s,t),n=Jt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&i&&tr(n,this.o,i),Sn(this.i,s),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),s.$=!0,Rt(s,n,null)):Rt(s,n,t),this.G=2}}else 3==this.G&&(e?ur(this,e):0==this.l.length||Tn(this.i)||ur(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pt(b(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),ir(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,ir(this),pr(this),dt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))},r=Ir.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new Sr(e,t)},_(Sr,Re),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Fe(b(e.hb,e,t))),dt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=_r(e,null,e.W),cr(e)},Sr.prototype.close=function(){sr(this.g)},Sr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ar(this.g,t)}else this.v?(t={},t.__data__=Pe(e),ar(this.g,t)):ar(this.g,e)},Sr.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,Sr.Z.M.call(this)},_(Cr,_t),_(Ar,Tt),_(xr,Ir),xr.prototype.xa=function(){Oe(this.g,"a")},xr.prototype.wa=function(e){Oe(this.g,new Cr(e))},xr.prototype.va=function(e){Oe(this.g,new Ar(e))},xr.prototype.ua=function(){Oe(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,mt.NO_ERROR=0,mt.TIMEOUT=8,mt.HTTP_ERROR=6,gt.COMPLETE="complete",wt.EventType=Et,Et.OPEN="a",Et.CLOSE="b",Et.ERROR="c",Et.MESSAGE="d",Re.prototype.listen=Re.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Rr=l.createWebChannelTransport=function(){return new kr},Or=l.getStatEventTarget=function(){return ct()},Nr=l.ErrorCode=mt,Pr=l.EventType=gt,Dr=l.Event=ot,Lr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=l.FetchXmlHttpFactory=Dn,$r=l.WebChannel=wt,Ur=l.XhrIo=Vn;const jr="@firebase/firestore";
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
 */class Fr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fr.UNAUTHENTICATED=new Fr(null),Fr.GOOGLE_CREDENTIALS=new Fr("google-credentials-uid"),Fr.FIRST_PARTY=new Fr("first-party-uid"),Fr.MOCK_USER=new Fr("mock-user");
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
let Vr="9.8.0";
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
 */const Br=new o.Yd("@firebase/firestore");function qr(){return Br.logLevel}function zr(e,...t){if(Br.logLevel<=o["in"].DEBUG){const n=t.map(Wr);Br.debug(`Firestore (${Vr}): ${e}`,...n)}}function Hr(e,...t){if(Br.logLevel<=o["in"].ERROR){const n=t.map(Wr);Br.error(`Firestore (${Vr}): ${e}`,...n)}}function Kr(e,...t){if(Br.logLevel<=o["in"].WARN){const n=t.map(Wr);Br.warn(`Firestore (${Vr}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function Gr(e="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+e;throw Hr(t),new Error(t)}function Jr(e,t){e||Gr()}function Xr(e,t){return e}
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
 */const Yr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Zr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class es{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ts{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fr.UNAUTHENTICATED)))}shutdown(){}}class ns{constructor(e){this.t=e,this.currentUser=Fr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jr("string"==typeof t.accessToken),new es(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jr(null===e||"string"==typeof e),new Fr(e)}}class rs{constructor(e,t,n){this.type="FirstParty",this.user=Fr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ss{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new rs(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Fr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class is{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class os{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jr("string"==typeof e.token),this.p=e.token,new is(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class as{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
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
 */function cs(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */as.A=-1;class ls{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=cs(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function us(e,t){return e<t?-1:e>t?1:0}function hs(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class ds{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ds.fromMillis(Date.now())}static fromDate(e){return ds.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ds(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?us(this.nanoseconds,e.nanoseconds):us(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class fs{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fs(e)}static min(){return new fs(new ds(0,0))}static max(){return new fs(new ds(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function ps(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class ys{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gr(),void 0===n?n=e.length-t:n>e.length-t&&Gr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ys.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ys?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class vs extends ys{construct(e,t,n){return new vs(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Qr(Yr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new vs(t)}static emptyPath(){return new vs([])}}const ws=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bs extends ys{construct(e,t,n){return new bs(e,t,n)}static isValidIdentifier(e){return ws.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bs.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bs(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Qr(Yr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Qr(Yr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Qr(Yr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Qr(Yr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bs(t)}static emptyPath(){return new bs([])}}
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
 */class Es{constructor(e){this.fields=e,e.sort(bs.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
class _s{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new _s(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new _s(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return us(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_s.EMPTY_BYTE_STRING=new _s("");const Ts=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(e){if(Jr(!!e),"string"==typeof e){let t=0;const n=Ts.exec(e);if(Jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ks(e.seconds),nanos:ks(e.nanos)}}function ks(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ss(e){return"string"==typeof e?_s.fromBase64String(e):_s.fromUint8Array(e)}
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
 */function Cs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function As(e){const t=e.mapValue.fields.__previous_value__;return Cs(t)?As(t):t}function xs(e){const t=Is(e.mapValue.fields.__local_write_time__.timestampValue);return new ds(t.seconds,t.nanos)}
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
 */class Rs{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Os{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Os("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function Ns(e){return null==e}function Ps(e){return 0===e&&1/e==-1/0}function Ds(e){return"number"==typeof e&&Number.isInteger(e)&&!Ps(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */class Ls{constructor(e){this.path=e}static fromPath(e){return new Ls(vs.fromString(e))}static fromName(e){return new Ls(vs.fromString(e).popFirst(5))}static empty(){return new Ls(vs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===vs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return vs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ls(new vs(e.slice()))}}
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
 */const Ms={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $s(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cs(e)?4:Xs(e)?9007199254740991:10:Gr()}function Us(e,t){if(e===t)return!0;const n=$s(e);if(n!==$s(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Is(e.timestampValue),r=Is(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ss(e.bytesValue).isEqual(Ss(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ks(e.geoPointValue.latitude)===ks(t.geoPointValue.latitude)&&ks(e.geoPointValue.longitude)===ks(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ks(e.integerValue)===ks(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ks(e.doubleValue),r=ks(t.doubleValue);return n===r?Ps(n)===Ps(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return hs(e.arrayValue.values||[],t.arrayValue.values||[],Us);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ps(n)!==ps(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Us(n[s],r[s])))return!1;return!0}(e,t);default:return Gr()}}function js(e,t){return void 0!==(e.values||[]).find((e=>Us(e,t)))}function Fs(e,t){if(e===t)return 0;const n=$s(e),r=$s(t);if(n!==r)return us(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return us(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ks(e.integerValue||e.doubleValue),r=ks(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Vs(e.timestampValue,t.timestampValue);case 4:return Vs(xs(e),xs(t));case 5:return us(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ss(e),r=Ss(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=us(n[s],r[s]);if(0!==e)return e}return us(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=us(ks(e.latitude),ks(t.latitude));return 0!==n?n:us(ks(e.longitude),ks(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Fs(n[s],r[s]);if(e)return e}return us(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ms.mapValue&&t===Ms.mapValue)return 0;if(e===Ms.mapValue)return 1;if(t===Ms.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=us(r[o],i[o]);if(0!==e)return e;const t=Fs(n[r[o]],s[i[o]]);if(0!==t)return t}return us(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Gr()}}function Vs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return us(e,t);const n=Is(e),r=Is(t),s=us(n.seconds,r.seconds);return 0!==s?s:us(n.nanos,r.nanos)}function Bs(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Is(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ss(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ls.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=qs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${qs(e.fields[s])}`;return n+"}"}(e.mapValue):Gr();var t,n}function zs(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function Ks(e){return!!e&&"nullValue"in e}function Ws(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gs(e){return!!e&&"mapValue"in e}function Js(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ms(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Js(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Js(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ys{constructor(e){this.value=e}static empty(){return new Ys({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(t)}setAll(e){let t=bs.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Js(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Us(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ms(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ys(Js(this.value))}}function Qs(e){const t=[];return ms(e.fields,((e,n)=>{const r=new bs([e]);if(Gs(n)){const e=Qs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Es(t)
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
 */}class Zs{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Zs(e,0,fs.min(),fs.min(),Ys.empty(),0)}static newFoundDocument(e,t,n){return new Zs(e,1,t,fs.min(),n,0)}static newNoDocument(e,t){return new Zs(e,2,t,fs.min(),Ys.empty(),0)}static newUnknownDocument(e,t){return new Zs(e,3,t,fs.min(),Ys.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ys.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ys.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zs&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ei{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ei.UNKNOWN_ID=-1;function ti(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=fs.fromTimestamp(1e9===r?new ds(n+1,0):new ds(n,r));return new ri(s,Ls.empty(),t)}function ni(e){return new ri(e.readTime,e.key,-1)}class ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ri(fs.min(),Ls.empty(),-1)}static max(){return new ri(fs.max(),Ls.empty(),-1)}}function si(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ls.comparator(e.documentKey,t.documentKey),0!==n?n:us(e.largestBatchId,t.largestBatchId))}
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
 */class ii{constructor(e,t){this.comparator=e,this.root=t||ai.EMPTY}insert(e,t){return new ii(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ai.BLACK,null,null))}remove(e){return new ii(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ai.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}}class oi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ai{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:ai.RED,this.left=null!=r?r:ai.EMPTY,this.right=null!=s?s:ai.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new ai(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ai.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ai.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ai.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ai.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gr();if(this.right.isRed())throw Gr();const e=this.left.check();if(e!==this.right.check())throw Gr();return e+(this.isRed()?0:1)}}ai.EMPTY=null,ai.RED=!0,ai.BLACK=!1,ai.EMPTY=new class{constructor(){this.size=0}get key(){throw Gr()}get value(){throw Gr()}get color(){throw Gr()}get left(){throw Gr()}get right(){throw Gr()}copy(e,t,n,r,s){return this}insert(e,t,n){return new ai(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ci{constructor(e){this.comparator=e,this.data=new ii(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new li(this.data.getIterator())}getIteratorFrom(e){return new li(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ci))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ci(this.comparator);return t.data=e,t}}class li{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ui{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function hi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new ui(e,t,n,r,s,i,o)}function di(e){const t=Xr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Bs(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ns(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Bs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Bs(e))).join(",")),t.P=e}return t.P}function fi(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Bs(t.value)}`;var t})).join(", ")}]`),Ns(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Bs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Bs(e))).join(",")),`Target(${t})`}function pi(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!Ci(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Us(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xi(e.startAt,t.startAt)&&xi(e.endAt,t.endAt)}function mi(e){return Ls.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class gi extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new yi(e,t,n):"array-contains"===t?new Ei(e,n):"in"===t?new _i(e,n):"not-in"===t?new Ti(e,n):"array-contains-any"===t?new Ii(e,n):new gi(e,t,n)}static V(e,t,n){return"in"===t?new vi(e,n):new wi(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Fs(t,this.value)):null!==t&&$s(this.value)===$s(t)&&this.v(Fs(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yi extends gi{constructor(e,t,n){super(e,t,n),this.key=Ls.fromName(n.referenceValue)}matches(e){const t=Ls.comparator(e.key,this.key);return this.v(t)}}class vi extends gi{constructor(e,t){super(e,"in",t),this.keys=bi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class wi extends gi{constructor(e,t){super(e,"not-in",t),this.keys=bi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ls.fromName(e.referenceValue)))}class Ei extends gi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hs(t)&&js(t.arrayValue,this.value)}}class _i extends gi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&js(this.value.arrayValue,t)}}class Ti extends gi{constructor(e,t){super(e,"not-in",t)}matches(e){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!js(this.value.arrayValue,t)}}class Ii extends gi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>js(this.value.arrayValue,e)))}}class ki{constructor(e,t){this.position=e,this.inclusive=t}}class Si{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ci(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ai(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Ls.comparator(Ls.fromName(o.referenceValue),n.key):Fs(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function xi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Us(e.position[n],t.position[n]))return!1;return!0}
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
 */class Ri{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Oi(e,t,n,r,s,i,o,a){return new Ri(e,t,n,r,s,i,o,a)}function Ni(e){return new Ri(e)}function Pi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Di(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Li(e){for(const t of e.filters)if(t.S())return t.field;return null}function Mi(e){return null!==e.collectionGroup}function $i(e){const t=Xr(e);if(null===t.D){t.D=[];const e=Li(t),n=Di(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Si(e)),t.D.push(new Si(bs.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Si(bs.keyField(),e))}}}return t.D}function Ui(e){const t=Xr(e);if(!t.C)if("F"===t.limitType)t.C=hi(t.path,t.collectionGroup,$i(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of $i(t)){const t="desc"===s.dir?"asc":"desc";e.push(new Si(s.field,t))}const n=t.endAt?new ki(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ki(t.startAt.position,t.startAt.inclusive):null;t.C=hi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function ji(e,t,n){return new Ri(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fi(e,t){return pi(Ui(e),Ui(t))&&e.limitType===t.limitType}function Vi(e){return`${di(Ui(e))}|lt:${e.limitType}`}function Bi(e){return`Query(target=${fi(Ui(e))}; limitType=${e.limitType})`}function qi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ls.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ai(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$i(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ai(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$i(e),t))}(e,t)}function zi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Hi(e){return(t,n)=>{let r=!1;for(const s of $i(e)){const e=Ki(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ki(e,t,n){const r=e.field.isKeyField()?Ls.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Fs(r,s):Gr()}
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
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Gr()}}
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
 */function Wi(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ps(t)?"-0":t}}function Gi(e){return{integerValue:""+e}}function Ji(e,t){return Ds(t)?Gi(t):Wi(e,t)}
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
 */class Xi{constructor(){this._=void 0}}function Yi(e,t,n){return e instanceof eo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof to?no(e,t):e instanceof ro?so(e,t):function(e,t){const n=Zi(e,t),r=oo(n)+oo(e.k);return zs(n)&&zs(e.k)?Gi(r):Wi(e.M,r)}(e,t)}function Qi(e,t,n){return e instanceof to?no(e,t):e instanceof ro?so(e,t):n}function Zi(e,t){return e instanceof io?zs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class eo extends Xi{}class to extends Xi{constructor(e){super(),this.elements=e}}function no(e,t){const n=ao(t);for(const r of e.elements)n.some((e=>Us(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ro extends Xi{constructor(e){super(),this.elements=e}}function so(e,t){let n=ao(t);for(const r of e.elements)n=n.filter((e=>!Us(e,r)));return{arrayValue:{values:n}}}class io extends Xi{constructor(e,t){super(),this.M=e,this.k=t}}function oo(e){return ks(e.integerValue||e.doubleValue)}function ao(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */function co(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof to&&t instanceof to||e instanceof ro&&t instanceof ro?hs(e.elements,t.elements,Us):e instanceof io&&t instanceof io?Us(e.k,t.k):e instanceof eo&&t instanceof eo}(e.transform,t.transform)}class lo{constructor(e,t){this.version=e,this.transformResults=t}}class uo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new uo}static exists(e){return new uo(void 0,e)}static updateTime(e){return new uo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class fo{}function po(e,t,n){e instanceof wo?function(e,t,n){const r=e.value.clone(),s=_o(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof bo?function(e,t,n){if(!ho(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=_o(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Eo(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function mo(e,t,n){e instanceof wo?function(e,t,n){if(!ho(e.precondition,t))return;const r=e.value.clone(),s=To(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(vo(t),r).setHasLocalMutations()}(e,t,n):e instanceof bo?function(e,t,n){if(!ho(e.precondition,t))return;const r=To(e.fieldTransforms,n,t),s=t.data;s.setAll(Eo(e)),s.setAll(r),t.convertToFoundDocument(vo(t),s).setHasLocalMutations()}(e,t,n):function(e,t){ho(e.precondition,t)&&t.convertToNoDocument(fs.min())}(e,t)}function go(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Zi(r.transform,e||null);null!=s&&(null==n&&(n=Ys.empty()),n.set(r.field,s))}return n||null}function yo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&hs(e,t,((e,t)=>co(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function vo(e){return e.isFoundDocument()?e.version:fs.min()}class wo extends fo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class bo extends fo{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Eo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function _o(e,t,n){const r=new Map;Jr(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Qi(o,a,n[s]))}return r}function To(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Yi(e,i,t))}return r}class Io extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class ko extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class So{constructor(e){this.count=e}}
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
 */var Co,Ao;function xo(e){switch(e){default:return Gr();case Yr.CANCELLED:case Yr.UNKNOWN:case Yr.DEADLINE_EXCEEDED:case Yr.RESOURCE_EXHAUSTED:case Yr.INTERNAL:case Yr.UNAVAILABLE:case Yr.UNAUTHENTICATED:return!1;case Yr.INVALID_ARGUMENT:case Yr.NOT_FOUND:case Yr.ALREADY_EXISTS:case Yr.PERMISSION_DENIED:case Yr.FAILED_PRECONDITION:case Yr.ABORTED:case Yr.OUT_OF_RANGE:case Yr.UNIMPLEMENTED:case Yr.DATA_LOSS:return!0}}function Ro(e){if(void 0===e)return Hr("GRPC error has no .code"),Yr.UNKNOWN;switch(e){case Co.OK:return Yr.OK;case Co.CANCELLED:return Yr.CANCELLED;case Co.UNKNOWN:return Yr.UNKNOWN;case Co.DEADLINE_EXCEEDED:return Yr.DEADLINE_EXCEEDED;case Co.RESOURCE_EXHAUSTED:return Yr.RESOURCE_EXHAUSTED;case Co.INTERNAL:return Yr.INTERNAL;case Co.UNAVAILABLE:return Yr.UNAVAILABLE;case Co.UNAUTHENTICATED:return Yr.UNAUTHENTICATED;case Co.INVALID_ARGUMENT:return Yr.INVALID_ARGUMENT;case Co.NOT_FOUND:return Yr.NOT_FOUND;case Co.ALREADY_EXISTS:return Yr.ALREADY_EXISTS;case Co.PERMISSION_DENIED:return Yr.PERMISSION_DENIED;case Co.FAILED_PRECONDITION:return Yr.FAILED_PRECONDITION;case Co.ABORTED:return Yr.ABORTED;case Co.OUT_OF_RANGE:return Yr.OUT_OF_RANGE;case Co.UNIMPLEMENTED:return Yr.UNIMPLEMENTED;case Co.DATA_LOSS:return Yr.DATA_LOSS;default:return Gr()}}(Ao=Co||(Co={}))[Ao.OK=0]="OK",Ao[Ao.CANCELLED=1]="CANCELLED",Ao[Ao.UNKNOWN=2]="UNKNOWN",Ao[Ao.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ao[Ao.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ao[Ao.NOT_FOUND=5]="NOT_FOUND",Ao[Ao.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ao[Ao.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ao[Ao.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ao[Ao.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ao[Ao.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ao[Ao.ABORTED=10]="ABORTED",Ao[Ao.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ao[Ao.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ao[Ao.INTERNAL=13]="INTERNAL",Ao[Ao.UNAVAILABLE=14]="UNAVAILABLE",Ao[Ao.DATA_LOSS=15]="DATA_LOSS";
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
class Oo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return gs(this.inner)}size(){return this.innerSize}}
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
 */const No=new ii(Ls.comparator);function Po(){return No}const Do=new ii(Ls.comparator);function Lo(...e){let t=Do;for(const n of e)t=t.insert(n.key,n);return t}function Mo(){return new Oo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const $o=new ii(Ls.comparator),Uo=new ci(Ls.comparator);function jo(...e){let t=Uo;for(const n of e)t=t.add(n);return t}const Fo=new ci(us);function Vo(){return Fo}
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
 */class Bo{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,t)),new Bo(fs.min(),n,Vo(),Po(),jo())}}class qo{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new qo(_s.EMPTY_BYTE_STRING,t,jo(),jo(),jo())}}
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
 */class zo{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Ho{constructor(e,t){this.targetId=e,this.$=t}}class Ko{constructor(e,t,n=_s.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Wo{constructor(){this.B=0,this.L=Xo(),this.U=_s.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=jo(),t=jo(),n=jo();return this.L.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Gr()}})),new qo(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Xo()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Go{constructor(e){this.nt=e,this.st=new Map,this.it=Po(),this.rt=Jo(),this.ot=new ci(us)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Gr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(mi(e))if(0===n){const n=new Ls(e.path);this.ct(t,n,Zs.newNoDocument(n,fs.min()))}else Jr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&mi(s.target)){const t=new Ls(s.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Zs.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=jo();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new Bo(e,t,this.ot,this.it,n);return this.it=Po(),this.rt=Jo(),this.ot=new ci(us),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Wo,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new ci(us),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Wo),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Jo(){return new ii(Ls.comparator)}function Xo(){return new ii(Ls.comparator)}
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
 */const Yo=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Qo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Zo{constructor(e,t){this.databaseId=e,this.N=t}}function ea(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(e,t){return e.N?t.toBase64():t.toUint8Array()}function na(e,t){return ea(e,t.toTimestamp())}function ra(e){return Jr(!!e),fs.fromTimestamp(function(e){const t=Is(e);return new ds(t.seconds,t.nanos)}(e))}function sa(e,t){return function(e){return new vs(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ia(e){const t=vs.fromString(e);return Jr(Aa(t)),t}function oa(e,t){return sa(e.databaseId,t.path)}function aa(e,t){const n=ia(t);if(n.get(1)!==e.databaseId.projectId)throw new Qr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Qr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ls(ha(n))}function ca(e,t){return sa(e.databaseId,t)}function la(e){const t=ia(e);return 4===t.length?vs.emptyPath():ha(t)}function ua(e){return new vs(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ha(e){return Jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function da(e,t,n){return{name:oa(e,t),fields:n.value.mapValue.fields}}function fa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Gr()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.N?(Jr(void 0===t||"string"==typeof t),_s.fromBase64String(t||"")):(Jr(void 0===t||t instanceof Uint8Array),_s.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Yr.UNKNOWN:Ro(e.code);return new Qr(t,e.message||"")}(o);n=new Ko(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=aa(e,r.document.name),i=ra(r.document.updateTime),o=new Ys({mapValue:{fields:r.document.fields}}),a=Zs.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new zo(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=aa(e,r.document),i=r.readTime?ra(r.readTime):fs.min(),o=Zs.newNoDocument(s,i),a=r.removedTargetIds||[];n=new zo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=aa(e,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in t))return Gr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new So(r),i=e.targetId;n=new Ho(i,s)}}return n}function pa(e,t){let n;if(t instanceof wo)n={update:da(e,t.key,t.value)};else if(t instanceof Io)n={delete:oa(e,t.key)};else if(t instanceof bo)n={update:da(e,t.key,t.data),updateMask:Ca(t.fieldMask)};else{if(!(t instanceof ko))return Gr();n={verify:oa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof eo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof to)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof io)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Gr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:na(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Gr()}(e,t.precondition)),n}function ma(e,t){return e&&e.length>0?(Jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ra(e.updateTime):ra(t);return n.isEqual(fs.min())&&(n=ra(t)),new lo(n,e.transformResults||[])}(e,t)))):[]}function ga(e,t){return{documents:[ca(e,t.path)]}}function ya(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ca(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ca(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Ws(e.value))return{unaryFilter:{field:Ta(e.field),op:"IS_NAN"}};if(Ks(e.value))return{unaryFilter:{field:Ta(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ws(e.value))return{unaryFilter:{field:Ta(e.field),op:"IS_NOT_NAN"}};if(Ks(e.value))return{unaryFilter:{field:Ta(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ta(e.field),op:_a(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ta(e.field),direction:Ea(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.N||Ns(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function va(e){let t=la(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Jr(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=ba(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Si(Ia(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ns(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ki(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new ki(n,t)}(n.endAt)),Oi(t,s,o,i,a,"F",c,l)}function wa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ba(e){return e?void 0!==e.unaryFilter?[Sa(e)]:void 0!==e.fieldFilter?[ka(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ba(e))).reduce(((e,t)=>e.concat(t))):Gr():[]}function Ea(e){return Yo[e]}function _a(e){return Qo[e]}function Ta(e){return{fieldPath:e.canonicalString()}}function Ia(e){return bs.fromServerFormat(e.fieldPath)}function ka(e){return gi.create(Ia(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Sa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ia(e.unaryFilter.field);return gi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ia(e.unaryFilter.field);return gi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ia(e.unaryFilter.field);return gi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ia(e.unaryFilter.field);return gi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Gr()}}function Ca(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Aa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const xa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ra=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
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
 */class Na{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */class Pa{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Pa(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Pa?t:Pa.resolve(t)}catch(e){return Pa.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Pa.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Pa.reject(t)}static resolve(e){return new Pa(((t,n)=>{t(e)}))}static reject(e){return new Pa(((t,n)=>{n(e)}))}static waitFor(e){return new Pa(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=Pa.resolve(!1);for(const n of e)t=t.next((e=>e?Pa.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
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
 */function Da(e){return"IndexedDbTransactionError"===e.name}
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
class La{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&po(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&mo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&mo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(fs.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),jo())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,((e,t)=>yo(e,t)))&&hs(this.baseMutations,e.baseMutations,((e,t)=>yo(e,t)))}}class Ma{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jr(e.mutations.length===n.length);let r=$o;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Ma(e,t,n,r)}}
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
 */class $a{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Ua{constructor(e,t,n,r,s=fs.min(),i=fs.min(),o=_s.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Ua(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class ja{constructor(e){this.Jt=e}}function Fa(e){const t=va({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ji(t,t.limit,"L"):t}
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
 */class Va{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(ks(e.integerValue));else if("doubleValue"in e){const n=ks(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Ps(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Ss(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Xs(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Gr()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),Ls.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}Va.fe=new Va;
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
class Ba{constructor(){this.qe=new qa}addToCollectionParentIndex(e,t){return this.qe.add(t),Pa.resolve()}getCollectionParents(e,t){return Pa.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Pa.resolve()}deleteFieldIndex(e,t){return Pa.resolve()}getDocumentsMatchingTarget(e,t){return Pa.resolve(null)}getIndexType(e,t){return Pa.resolve(0)}getFieldIndexes(e,t){return Pa.resolve([])}getNextCollectionGroupToUpdate(e){return Pa.resolve(null)}getMinOffset(e,t){return Pa.resolve(ri.min())}updateCollectionGroup(e,t,n){return Pa.resolve()}updateIndexEntries(e,t){return Pa.resolve()}}class qa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ci(vs.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ci(vs.comparator)).toArray()}}
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
 */new Uint8Array(0);class za{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new za(e,za.DEFAULT_COLLECTION_PERCENTILE,za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */za.DEFAULT_COLLECTION_PERCENTILE=10,za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,za.DEFAULT=new za(41943040,za.DEFAULT_COLLECTION_PERCENTILE,za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),za.DISABLED=new za(-1,0,0);
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
class Ha{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Ha(0)}static yn(){return new Ha(-1)}}
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
async function Ka(e){if(e.code!==Yr.FAILED_PRECONDITION||e.message!==Oa)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
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
class Wa{constructor(){this.changes=new Oo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zs.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Pa.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Ga{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return function(e){return Ls.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):Mi(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new Ls(t)).next((e=>{let t=Lo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let s=Lo();return this.indexManager.getCollectionParents(e,r).next((i=>Pa.forEach(i,(i=>{const o=function(e,t){return new Ri(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=r.get(n);null==s&&(s=Zs.newInvalidDocument(n),r=r.insert(n,s)),mo(e,s,t.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{qi(t,n)||(r=r.remove(e))})),r)))}}
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
 */class Ja{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=jo(),r=jo();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ja(e,t.fromCache,n,r)}}
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
 */class Xa{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next((s=>s||this.ei(e,t,r,n))).next((n=>n||this.ni(e,t)))}ti(e,t){return Pa.resolve(null)}ei(e,t,n,r){return Pi(t)||r.isEqual(fs.min())?this.ni(e,t):this.Zs.Ks(e,n).next((s=>{const i=this.si(t,s);return this.ii(t,i,n,r)?this.ni(e,t):(qr()<=o["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bi(t)),this.ri(e,i,t,ti(r,-1)))}))}si(e,t){let n=new ci(Hi(e));return t.forEach(((t,r)=>{qi(e,r)&&(n=n.add(r))})),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ni(e,t){return qr()<=o["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Bi(t)),this.Zs.Qs(e,t,ri.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class Ya{constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new ii(us),this.ai=new Oo((e=>di(e)),pi),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Ga(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ui)))}}function Qa(e,t,n,r){return new Ya(e,t,n,r)}async function Za(e,t){const n=Xr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((s=>(r=s,n.li(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=jo();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.fi.Ks(e,o).next((e=>({di:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function ec(e,t){const n=Xr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Pa.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Jr(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}function tc(e){const t=Xr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function nc(e,t){const n=Xr(e),r=t.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(_s.EMPTY_BYTE_STRING,fs.min()).withLastLimboFreeSnapshotVersion(fs.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,i)&&o.push(n.fs.updateTargetData(e,l))}));let a=Po();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(rc(e,i,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(fs.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Pa.waitFor(o).next((()=>i.apply(e))).next((()=>n.fi.Gs(e,a))).next((()=>a))})).then((e=>(n.ui=s,e)))}function rc(e,t,n){let r=jo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Po();return n.forEach(((n,s)=>{const i=e.get(n);s.isNoDocument()&&s.version.isEqual(fs.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}function sc(e,t){const n=Xr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function ic(e,t){const n=Xr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((s=>s?(r=s,Pa.resolve(r)):n.fs.allocateTargetId(e).next((s=>(r=new Ua(t,s,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e}))}async function oc(e,t,n){const r=Xr(e),s=r.ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Da(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(s.target)}function ac(e,t,n){const r=Xr(e);let s=fs.min(),i=jo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Xr(e),s=r.ai.get(n);return void 0!==s?Pa.resolve(r.ui.get(s)):r.fs.getTargetData(t,n)}(r,e,Ui(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.oi.Qs(e,t,n?s:fs.min(),n?i:jo()))).next((e=>(cc(r,zi(t),e),{documents:e,_i:i})))))}function cc(e,t,n){let r=fs.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ci.set(t,r)}
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
class lc{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return Pa.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:ra(n.createTime)}),Pa.resolve()}getNamedQuery(e,t){return Pa.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(e){return{name:e.name,query:Fa(e.bundledQuery),readTime:ra(e.readTime)}}(t)),Pa.resolve()}}
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
 */class uc{constructor(){this.overlays=new ii(Ls.comparator),this.Ii=new Map}getOverlay(e,t){return Pa.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Pa.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ii.delete(n)),Pa.resolve()}getOverlaysForCollection(e,t,n){const r=Mo(),s=t.length+1,i=new Ls(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Pa.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new ii(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Mo(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Mo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Pa.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $a(t,n));let s=this.Ii.get(t);void 0===s&&(s=jo(),this.Ii.set(t,s)),this.Ii.set(t,s.add(n.key))}}
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
 */class hc{constructor(){this.Ti=new ci(dc.Ei),this.Ai=new ci(dc.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new dc(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Pi(new dc(e,t))}Vi(e,t){e.forEach((e=>this.removeReference(e,t)))}vi(e){const t=new Ls(new vs([])),n=new dc(t,e),r=new dc(t,e+1),s=[];return this.Ai.forEachInRange([n,r],(e=>{this.Pi(e),s.push(e.key)})),s}Si(){this.Ti.forEach((e=>this.Pi(e)))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new Ls(new vs([])),n=new dc(t,e),r=new dc(t,e+1);let s=jo();return this.Ai.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new dc(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class dc{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return Ls.comparator(e.key,t.key)||us(e.Ci,t.Ci)}static Ri(e,t){return us(e.Ci,t.Ci)||Ls.comparator(e.key,t.key)}}
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
 */class fc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new ci(dc.Ei)}checkEmpty(e){return Pa.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new La(s,t,n,r);this.Bs.push(i);for(const o of r)this.Ni=this.Ni.add(new dc(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Pa.resolve(i)}lookupMutationBatch(e,t){return Pa.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),s=r<0?0:r;return Pa.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return Pa.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return Pa.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new dc(t,0),r=new dc(t,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([n,r],(e=>{const t=this.ki(e.Ci);s.push(t)})),Pa.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ci(us);return t.forEach((e=>{const t=new dc(e,0),r=new dc(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],(e=>{n=n.add(e.Ci)}))})),Pa.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Ls.isDocumentKey(s)||(s=s.child(""));const i=new dc(new Ls(s),0);let o=new ci(us);return this.Ni.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Ci)),!0)}),i),Pa.resolve(this.Oi(o))}Oi(e){const t=[];return e.forEach((e=>{const n=this.ki(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jr(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Pa.forEach(t.mutations,(r=>{const s=new dc(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Ni=n}))}_n(e){}containsKey(e,t){const n=new dc(t,0),r=this.Ni.firstAfterOrEqual(n);return Pa.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Pa.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
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
 */class pc{constructor(e){this.$i=e,this.docs=new ii(Ls.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Pa.resolve(n?n.document.mutableCopy():Zs.newInvalidDocument(t))}getEntries(e,t){let n=Po();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zs.newInvalidDocument(e))})),Pa.resolve(n)}getAllFromCollection(e,t,n){let r=Po();const s=new Ls(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||si(ni(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Pa.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Gr()}Bi(e,t){return Pa.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new mc(this)}getSize(e){return Pa.resolve(this.size)}}class mc extends Wa{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),Pa.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
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
 */class gc{constructor(e){this.persistence=e,this.Li=new Oo((e=>di(e)),pi),this.lastRemoteSnapshotVersion=fs.min(),this.highestTargetId=0,this.Ui=0,this.qi=new hc,this.targetCount=0,this.Ki=Ha.gn()}forEachTarget(e,t){return this.Li.forEach(((e,n)=>t(n))),Pa.resolve()}getLastRemoteSnapshotVersion(e){return Pa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Pa.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),Pa.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),Pa.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new Ha(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Pa.resolve()}updateTargetData(e,t){return this.Tn(t),Pa.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,Pa.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Li.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Li.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Pa.waitFor(s).next((()=>r))}getTargetCount(e){return Pa.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return Pa.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),Pa.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),Pa.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),Pa.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return Pa.resolve(n)}containsKey(e,t){return Pa.resolve(this.qi.containsKey(t))}}
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
 */class yc{constructor(e,t){this.Gi={},this.overlays={},this.es=new as(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new gc(this),this.indexManager=new Ba,this.ds=function(e){return new pc(e)}((e=>this.referenceDelegate.Qi(e))),this.M=new ja(t),this._s=new lc(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new fc(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new vc(this.es.next());return this.referenceDelegate.ji(),n(r).next((e=>this.referenceDelegate.Wi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zi(e,t){return Pa.or(Object.values(this.Gi).map((n=>()=>n.containsKey(e,t))))}}class vc extends Na{constructor(e){super(),this.currentSequenceNumber=e}}class wc{constructor(e){this.persistence=e,this.Hi=new hc,this.Ji=null}static Yi(e){return new wc(e)}get Xi(){if(this.Ji)return this.Ji;throw Gr()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),Pa.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),Pa.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),Pa.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach((e=>this.Xi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pa.forEach(this.Xi,(n=>{const r=Ls.fromPath(n);return this.Zi(e,r).next((e=>{e||t.removeEntry(r,fs.min())}))})).next((()=>(this.Ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zi(e,t).next((e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())}))}Qi(e){return 0}Zi(e,t){return Pa.or([()=>Pa.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}
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
 */class bc{constructor(){this.activeTargetIds=Vo()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ec{constructor(){this.Ur=new bc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new bc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class _c{Kr(e){}shutdown(){}}
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
 */class Tc{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Ic={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class kc{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}
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
 */class Sc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,s){const i=this.ho(e,t);zr("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(e,i,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Kr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}_o(e,t,n,r,s){return this.co(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Ic[e];return`${this.uo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((s,i)=>{const o=new Ur;o.listenOnce(Pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Nr.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Nr.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),i(new Qr(Yr.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Yr).indexOf(t)>=0?t:Yr.UNKNOWN}(e.status);i(new Qr(t,e.message))}else i(new Qr(Yr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Qr(Yr.UNAVAILABLE,"Connection failed."));break;default:Gr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Rr(),i=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.lo(o.initMessageHeaders,t,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");zr("Connection","Creating WebChannel: "+c,o);const l=s.createWebChannel(c,o);let u=!1,h=!1;const d=new kc({Jr:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(u||(zr("Connection","Opening WebChannel transport."),l.open(),u=!0),zr("Connection","WebChannel sending:",e),l.send(e))},Yr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(l,$r.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(l,$r.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.ro())})),f(l,$r.EventType.ERROR,(e=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",e),d.ro(new Qr(Yr.UNAVAILABLE,"The operation could not be completed")))})),f(l,$r.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Jr(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){zr("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Co[e];if(void 0!==t)return Ro(t)}(e),n=s.message;void 0===t&&(t=Yr.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),h=!0,d.ro(new Qr(t,n)),l.close()}else zr("Connection","WebChannel received:",n),d.oo(n)}})),f(i,Dr.STAT_EVENT,(e=>{e.stat===Lr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Lr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.io()}),0),d}}
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
 */function Cc(){return"undefined"!=typeof document?document:null}
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
 */function Ac(e){return new Zo(e,!0)}class xc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class Rc{constructor(e,t,n,r,s,i,o,a){this.Yn=e,this.Vo=n,this.vo=r,this.So=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new xc(e,t)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===Yr.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===Yr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Do===t&&this.Qo(e,n)}),(t=>{e((()=>{const e=new Qr(Yr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)}))}))}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((e=>{n((()=>this.jo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget((()=>this.Do===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Oc extends Rc{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.M=s}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=fa(this.M,e),n=function(e){if(!("targetChange"in e))return fs.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?fs.min():t.readTime?ra(t.readTime):fs.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=ua(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=mi(r)?{documents:ga(e,r)}:{query:ya(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ta(e,t.resumeToken):t.snapshotVersion.compareTo(fs.min())>0&&(n.readTime=ea(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=wa(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=ua(this.M),t.removeTarget=e,this.Lo(t)}}class Nc extends Rc{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(Jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=ma(e.writeResults,e.commitTime),n=ra(e.commitTime);return this.listener.tu(n,t)}return Jr(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ua(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>pa(this.M,e)))};this.Lo(t)}}
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
 */class Pc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new Qr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So.co(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qr(Yr.UNKNOWN,e.toString())}))}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So._o(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qr(Yr.UNKNOWN,e.toString())}))}terminate(){this.su=!0}}class Dc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Hr(t),this.uu=!1):zr("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
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
 */class Lc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr((e=>{n.enqueueAndForget((async()=>{zc(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xr(e);t.wu.add(4),await $c(t),t.yu.set("Unknown"),t.wu.delete(4),await Mc(t)}(this))}))})),this.yu=new Dc(n,r)}}async function Mc(e){if(zc(e))for(const t of e.mu)await t(!0)}async function $c(e){for(const t of e.mu)await t(!1)}function Uc(e,t){const n=Xr(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),qc(n)?Bc(n):cl(n).Mo()&&Fc(n,t))}function jc(e,t){const n=Xr(e),r=cl(n);n._u.delete(t),r.Mo()&&Vc(n,t),0===n._u.size&&(r.Mo()?r.$o():zc(n)&&n.yu.set("Unknown"))}function Fc(e,t){e.pu.Z(t.targetId),cl(e).Ho(t)}function Vc(e,t){e.pu.Z(t),cl(e).Jo(t)}function Bc(e){e.pu=new Go({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),cl(e).start(),e.yu.au()}function qc(e){return zc(e)&&!cl(e).ko()&&e._u.size>0}function zc(e){return 0===Xr(e).wu.size}function Hc(e){e.pu=void 0}async function Kc(e){e._u.forEach(((t,n)=>{Fc(e,t)}))}async function Wc(e,t){Hc(e),qc(e)?(e.yu.lu(t),Bc(e)):e.yu.set("Unknown")}async function Gc(e,t,n){if(e.yu.set("Online"),t instanceof Ko&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Jc(e,n)}else if(t instanceof zo?e.pu.ut(t):t instanceof Ho?e.pu._t(t):e.pu.ht(t),!n.isEqual(fs.min()))try{const t=await tc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e._u.get(r);s&&e._u.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(_s.EMPTY_BYTE_STRING,n.snapshotVersion)),Vc(e,t);const r=new Ua(n.target,t,1,n.sequenceNumber);Fc(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await Jc(e,t)}}async function Jc(e,t,n){if(!Da(t))throw t;e.wu.add(1),await $c(e),e.yu.set("Offline"),n||(n=()=>tc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await Mc(e)}))}function Xc(e,t){return t().catch((n=>Jc(e,n,t)))}async function Yc(e){const t=Xr(e),n=ll(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;Qc(t);)try{const e=await sc(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Zc(t,e)}catch(e){await Jc(t,e)}el(t)&&tl(t)}function Qc(e){return zc(e)&&e.du.length<10}function Zc(e,t){e.du.push(t);const n=ll(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function el(e){return zc(e)&&!ll(e).ko()&&e.du.length>0}function tl(e){ll(e).start()}async function nl(e){ll(e).nu()}async function rl(e){const t=ll(e);for(const n of e.du)t.Zo(n.mutations)}async function sl(e,t,n){const r=e.du.shift(),s=Ma.from(r,t,n);await Xc(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Yc(e)}async function il(e,t){t&&ll(e).Xo&&await async function(e,t){if(n=t.code,xo(n)&&n!==Yr.ABORTED){const n=e.du.shift();ll(e).Fo(),await Xc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Yc(e)}var n}(e,t),el(e)&&tl(e)}async function ol(e,t){const n=Xr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=zc(n);n.wu.add(3),await $c(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await Mc(n)}async function al(e,t){const n=Xr(e);t?(n.wu.delete(2),await Mc(n)):t||(n.wu.add(2),await $c(n),n.yu.set("Unknown"))}function cl(e){return e.Iu||(e.Iu=function(e,t,n){const r=Xr(e);return r.iu(),new Oc(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
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
 */}(e.datastore,e.asyncQueue,{Xr:Kc.bind(null,e),eo:Wc.bind(null,e),zo:Gc.bind(null,e)}),e.mu.push((async t=>{t?(e.Iu.Fo(),qc(e)?Bc(e):e.yu.set("Unknown")):(await e.Iu.stop(),Hc(e))}))),e.Iu}function ll(e){return e.Tu||(e.Tu=function(e,t,n){const r=Xr(e);return r.iu(),new Nc(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:nl.bind(null,e),eo:il.bind(null,e),eu:rl.bind(null,e),tu:sl.bind(null,e)}),e.mu.push((async t=>{t?(e.Tu.Fo(),await Yc(e)):(await e.Tu.stop(),e.du.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))}))),e.Tu
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
 */}class ul{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new ul(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qr(Yr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hl(e,t){if(Hr("AsyncQueue",`${t}: ${e}`),Da(e))return new Qr(Yr.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class dl{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ls.comparator(t.key,n.key):(e,t)=>Ls.comparator(e.key,t.key),this.keyedMap=Lo(),this.sortedSet=new ii(this.comparator)}static emptySet(e){return new dl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new dl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class fl{constructor(){this.Eu=new ii(Ls.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):Gr():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class pl{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new pl(e,t,dl.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class ml{constructor(){this.Ru=void 0,this.listeners=[]}}class gl{constructor(){this.queries=new Oo((e=>Vi(e)),Fi),this.onlineState="Unknown",this.bu=new Set}}async function yl(e,t){const n=Xr(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ml),s)try{i.Ru=await n.onListen(r)}catch(e){const n=hl(e,`Initialization of query '${Bi(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Pu(n.onlineState),i.Ru&&t.Vu(i.Ru)&&El(n)}async function vl(e,t){const n=Xr(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wl(e,t){const n=Xr(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Vu(s)&&(r=!0);t.Ru=s}}r&&El(n)}function bl(e,t,n){const r=Xr(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function El(e){e.bu.forEach((e=>{e.next()}))}class _l{constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new pl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.ku||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}
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
class Tl{constructor(e){this.key=e}}class Il{constructor(e){this.key=e}}class kl{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=jo(),this.mutatedKeys=jo(),this.Gu=Hi(e),this.Qu=new dl(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new fl,r=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=qi(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:i,zu:n,ii:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gr()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const i=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new pl(this.query,e.Qu,r,s,e.mutatedKeys,0===o,a,!1),Xu:i}:{Xu:i}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new fl,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=jo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new Il(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Tl(n))})),t}ta(e){this.Uu=e._i,this.Ku=jo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return pl.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class Sl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cl{constructor(e){this.key=e,this.na=!1}}class Al{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sa={},this.ia=new Oo((e=>Vi(e)),Fi),this.ra=new Map,this.oa=new Set,this.ua=new ii(Ls.comparator),this.aa=new Map,this.ca=new hc,this.ha={},this.la=new Map,this.fa=Ha.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function xl(e,t){const n=Gl(e);let r,s;const i=n.ia.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const e=await ic(n.localStore,Ui(t));n.isPrimaryClient&&Uc(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Rl(n,t,r,"current"===i)}return s}async function Rl(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let s=t.view.Wu(n);s.ii&&(s=await ac(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Bl(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await ac(e.localStore,t,!0),i=new kl(t,s._i),o=i.Wu(s.documents),a=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);Bl(e,n,c.Xu);const l=new Sl(t,n,i);return e.ia.set(t,l),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function Ol(e,t){const n=Xr(e),r=n.ia.get(t),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter((e=>!Fi(e,t)))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),jc(n.remoteStore,r.targetId),Fl(n,r.targetId)})).catch(Ka)):(Fl(n,r.targetId),await oc(n.localStore,r.targetId,!0))}async function Nl(e,t,n){const r=Jl(e);try{const e=await function(e,t){const n=Xr(e),r=ds.now(),s=t.reduce(((e,t)=>e.add(t.key)),jo());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.fi.Ks(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=go(e,i.get(e.key));null!=t&&o.push(new bo(e.key,t,Qs(t.value.mapValue),uo.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new ii(us)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await Hl(r,e.changes),await Yc(r.remoteStore)}catch(e){const t=hl(e,"Failed to persist write");n.reject(t)}}async function Pl(e,t){const n=Xr(e);try{const e=await nc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.aa.get(t);r&&(Jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?Jr(r.na):e.removedDocuments.size>0&&(Jr(r.na),r.na=!1))})),await Hl(n,e,t)}catch(e){await Ka(e)}}function Dl(e,t,n){const r=Xr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach(((n,r)=>{const s=r.view.Pu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Xr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Pu(t)&&(r=!0)})),r&&El(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ll(e,t,n){const r=Xr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.aa.get(t),i=s&&s.key;if(i){let e=new ii(Ls.comparator);e=e.insert(i,Zs.newNoDocument(i,fs.min()));const n=jo().add(i),s=new Bo(fs.min(),new Map,new ci(us),e,n);await Pl(r,s),r.ua=r.ua.remove(i),r.aa.delete(t),zl(r)}else await oc(r.localStore,t,!1).then((()=>Fl(r,t,n))).catch(Ka)}async function Ml(e,t){const n=Xr(e),r=t.batch.batchId;try{const e=await ec(n.localStore,t);jl(n,r,null),Ul(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hl(n,e)}catch(e){await Ka(e)}}async function $l(e,t,n){const r=Xr(e);try{const e=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(Jr(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(r.localStore,t);jl(r,t,n),Ul(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hl(r,e)}catch(n){await Ka(n)}}function Ul(e,t){(e.la.get(t)||[]).forEach((e=>{e.resolve()})),e.la.delete(t)}function jl(e,t,n){const r=Xr(e);let s=r.ha[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.ha[r.currentUser.toKey()]=s}}function Fl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach((t=>{e.ca.containsKey(t)||Vl(e,t)}))}function Vl(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(jc(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),zl(e))}function Bl(e,t,n){for(const r of n)r instanceof Tl?(e.ca.addReference(r.key,t),ql(e,r)):r instanceof Il?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||Vl(e,r.key)):Gr()}function ql(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.oa.add(r),zl(e))}function zl(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new Ls(vs.fromString(t)),r=e.fa.next();e.aa.set(r,new Cl(n)),e.ua=e.ua.insert(n,r),Uc(e.remoteStore,new Ua(Ui(Ni(n.path)),r,2,as.A))}}async function Hl(e,t,n){const r=Xr(e),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach(((e,a)=>{o.push(r._a(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=Ja.Ys(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.sa.zo(s),await async function(e,t){const n=Xr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Pa.forEach(t,(t=>Pa.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Pa.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Da(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ui.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(e,s)}}}(r.localStore,i))}async function Kl(e,t){const n=Xr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await Za(n.localStore,t);n.currentUser=t,function(e,t){e.la.forEach((e=>{e.forEach((e=>{e.reject(new Qr(Yr.CANCELLED,t))}))})),e.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hl(n,e.di)}}function Wl(e,t){const n=Xr(e),r=n.aa.get(t);if(r&&r.na)return jo().add(r.key);{let e=jo();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}function Gl(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ll.bind(null,t),t.sa.zo=wl.bind(null,t.eventManager),t.sa.wa=bl.bind(null,t.eventManager),t}function Jl(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ml.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$l.bind(null,t),t}class Xl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Qa(this.persistence,new Xa,e.initialUser,this.M)}ya(e){return new yc(wc.Yi,this.M)}ga(e){return new Ec}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Dl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kl.bind(null,this.syncEngine),await al(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gl}createDatastore(e){const t=Ac(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Sc(r));var r;return function(e,t,n,r){return new Pc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Dl(this.syncEngine,e,0),i=Tc.vt()?new Tc:new _c,new Lc(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Al(e,t,n,r,s,i);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xr(e);zr("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await $c(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
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
class Ql{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Zl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Fr.UNAUTHENTICATED,this.clientId=ls.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function eu(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Za(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function tu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await nu(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>ol(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ol(t.remoteStore,n))),e.onlineComponents=t}async function nu(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await eu(e,new Xl)),e.offlineComponents}async function ru(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await tu(e,new Yl)),e.onlineComponents}function su(e){return ru(e).then((e=>e.syncEngine))}async function iu(e){const t=await ru(e),n=t.eventManager;return n.onListen=xl.bind(null,t.syncEngine),n.onUnlisten=Ol.bind(null,t.syncEngine),n}function ou(e,t,n={}){const r=new Zr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Ql({next:n=>{t.enqueueAndForget((()=>vl(e,o))),n.fromCache&&"server"===r.source?s.reject(new Qr(Yr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new _l(n,i,{includeMetadataChanges:!0,ku:!0});return yl(e,o)}(await iu(e),e.asyncQueue,t,n,r))),r.promise}const au=new Map;
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
 */function cu(e,t,n){if(!n)throw new Qr(Yr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lu(e,t,n,r){if(!0===t&&!0===r)throw new Qr(Yr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function uu(e){if(!Ls.isDocumentKey(e))throw new Qr(Yr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hu(e){if(Ls.isDocumentKey(e))throw new Qr(Yr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function du(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Gr()}function fu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Qr(Yr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=du(e);throw new Qr(Yr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class pu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Qr(Yr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Qr(Yr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class mu{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,e instanceof Os?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Qr(Yr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(e.options.projectId)}(e))}get app(){if(!this._app)throw new Qr(Yr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Qr(Yr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ts;switch(e.type){case"gapi":const t=e.client;return Jr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ss(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Qr(Yr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=au.get(e);t&&(zr("ComponentProvider","Removing Datastore"),au.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class gu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gu(this.firestore,e,this._key)}}class yu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new yu(this.firestore,e,this._query)}}class vu extends yu{constructor(e,t,n){super(e,t,Ni(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gu(this.firestore,null,new Ls(e))}withConverter(e){return new vu(this.firestore,e,this._path)}}function wu(e,t,...n){if(e=(0,a.m9)(e),cu("collection","path",t),e instanceof mu){const r=vs.fromString(t,...n);return hu(r),new vu(e,null,r)}{if(!(e instanceof gu||e instanceof vu))throw new Qr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vs.fromString(t,...n));return hu(r),new vu(e.firestore,null,r)}}function bu(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=ls.R()),cu("doc","path",t),e instanceof mu){const r=vs.fromString(t,...n);return uu(r),new gu(e,null,new Ls(r))}{if(!(e instanceof gu||e instanceof vu))throw new Qr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vs.fromString(t,...n));return uu(r),new gu(e.firestore,e instanceof vu?e.converter:null,new Ls(r))}}
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
class Eu{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new xc(this,"async_queue_retry"),this.Qa=()=>{const e=Cc();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=Cc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=Cc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise((()=>{}));const t=new Zr;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$a.push(e),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(_){if(!Da(_))throw _;zr("AsyncQueue","Operation failed with retryable error: "+_)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(e){const t=this.Fa.then((()=>(this.qa=!0,e().catch((e=>{this.Ua=e,this.qa=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Hr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.qa=!1,e))))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=ul.createAndSchedule(this,e,t,n,(e=>this.Ha(e)));return this.La.push(r),r}ja(){this.Ua&&Gr()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then((()=>{this.La.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()}))}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}class _u extends mu{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Eu,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ku(this),this._firestoreClient.terminate()}}function Tu(e=(0,s.Mq)()){return(0,s.qX)(e,"firestore").getImmediate()}function Iu(e){return e._firestoreClient||ku(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ku(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Rs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Zl(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class Su{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Qr(Yr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bs(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Cu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cu(_s.fromBase64String(e))}catch(e){throw new Qr(Yr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Cu(_s.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Au{constructor(e){this._methodName=e}}
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
 */class xu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Qr(Yr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Qr(Yr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return us(this._lat,e._lat)||us(this._long,e._long)}}
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
 */const Ru=/^__.*__$/;class Ou{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new bo(e,this.data,this.fieldMask,t,this.fieldTransforms):new wo(e,this.data,t,this.fieldTransforms)}}function Nu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gr()}}class Pu{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===s&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return zu(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(Nu(this.ec)&&Ru.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Du{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Ac(e)}lc(e,t,n,r=!1){return new Pu({ec:e,methodName:t,hc:n,path:bs.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Lu(e){const t=e._freezeSettings(),n=Ac(e._databaseId);return new Du(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mu(e,t,n,r,s,i={}){const o=e.lc(i.merge||i.mergeFields?2:0,t,n,s);Fu("Data must be an object, but it was:",o,r);const a=Uu(r,o);let c,l;if(i.merge)c=new Es(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Vu(t,r,n);if(!o.contains(s))throw new Qr(Yr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Hu(e,s)||e.push(s)}c=new Es(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Ou(new Ys(a),c,l)}function $u(e,t){if(ju(e=(0,a.m9)(e)))return Fu("Unsupported field value:",t,e),Uu(e,t);if(e instanceof Au)return function(e,t){if(!Nu(t.ec))throw t.ac(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ac(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=$u(s,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ji(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ds.fromDate(e);return{timestampValue:ea(t.M,n)}}if(e instanceof ds){const n=new ds(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ea(t.M,n)}}if(e instanceof xu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Cu)return{bytesValue:ta(t.M,e._byteString)};if(e instanceof gu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac(`Unsupported field value: ${du(e)}`)}(e,t)}function Uu(e,t){const n={};return gs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ms(e,((e,r)=>{const s=$u(r,t.sc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function ju(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ds||e instanceof xu||e instanceof Cu||e instanceof gu||e instanceof Au)}function Fu(e,t,n){if(!ju(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=du(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}}function Vu(e,t,n){if((t=(0,a.m9)(t))instanceof Su)return t._internalPath;if("string"==typeof t)return qu(e,t);throw zu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bu=new RegExp("[~\\*/\\[\\]]");function qu(e,t,n){if(t.search(Bu)>=0)throw zu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Su(...t.split("."))._internalPath}catch(r){throw zu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zu(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Qr(Yr.INVALID_ARGUMENT,a+e+c)}function Hu(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Ku{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Wu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Wu extends Ku{data(){return super.data()}}function Gu(e,t){return"string"==typeof t?qu(e,t):t instanceof Su?t._internalPath:t._delegate._internalPath}
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
 */class Ju{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xu extends Ku{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Gu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Yu extends Xu{data(e={}){return super.data(e)}}class Qu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ju(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Yu(this._firestore,this._userDataWriter,n.key,n,new Ju(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Qr(Yr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Yu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ju(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Yu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ju(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Zu(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Zu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gr()}}
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
function eh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Qr(Yr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class th{convertValue(e,t="none"){switch($s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ks(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Gr()}}convertObject(e,t){const n={};return ms(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new xu(ks(e.latitude),ks(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=As(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const t=Is(e);return new ds(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=vs.fromString(e);Jr(Aa(n));const r=new Os(n.get(1),n.get(3)),s=new Ls(n.popFirst(5));return r.isEqual(t)||Hr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function nh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class rh extends th{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gu(this.firestore,null,t)}}function sh(e){e=fu(e,yu);const t=fu(e.firestore,_u),n=Iu(t),r=new rh(t);return eh(e._query),ou(n,e._query).then((n=>new Qu(t,r,e,n)))}function ih(e,t){const n=fu(e.firestore,_u),r=bu(e),s=nh(e.converter,t);return oh(n,[Mu(Lu(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,uo.exists(!1))]).then((()=>r))}function oh(e,t){return function(e,t){const n=new Zr;return e.asyncQueue.enqueueAndForget((async()=>Nl(await su(e),t,n))),n.promise}(Iu(e),t)}!function(e,t=!0){!function(e){Vr=e}(s.Jn),(0,s.Xd)(new i.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new _u(r,new ns(e.getProvider("auth-internal")),new os(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),(0,s.KN)(jr,"3.4.9",e),(0,s.KN)(jr,"3.4.9","esm2017")}()},3766:function(e,t,n){"use strict";n.d(t,{WB:function(){return I},Q_:function(){return M}});n(6699);var r=!1;function s(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}var i=n(4870),o=n(3396);
/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let a;const c=e=>a=e,l=Symbol();function u(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var h;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(h||(h={}));const d="undefined"!==typeof window,f=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function p(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function m(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){b(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function g(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function y(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const v="object"===typeof navigator?navigator:{userAgent:""},w=(()=>/Macintosh/.test(v.userAgent)&&/AppleWebKit/.test(v.userAgent)&&!/Safari/.test(v.userAgent))(),b=d?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!w?E:"msSaveOrOpenBlob"in v?_:T:()=>{};function E(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?g(r.href)?m(e,t,n):(r.target="_blank",y(r)):y(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){y(r)}),0))}function _(e,t="download",n){if("string"===typeof e)if(g(e))m(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){y(t)}))}else navigator.msSaveOrOpenBlob(p(e,n),t)}function T(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return m(e,t,n);const s="application/octet-stream"===e.type,i=/constructor/i.test(String(f.HTMLElement))||"safari"in f,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||w)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function I(){const e=(0,i.B)(!0),t=e.run((()=>(0,i.iH)({})));let n=[],s=[];const o=(0,i.Xl)({install(e){c(o),r||(o._a=e,e.provide(l,o),e.config.globalProperties.$pinia=o,s.forEach((e=>n.push(e))),s=[])},use(e){return this._a||r?n.push(e):s.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const k=()=>{};function S(e,t,n,r=k){e.push(t);const s=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&(0,o.FN)()&&(0,o.Ah)(s),s}function C(e,...t){e.slice().forEach((e=>{e(...t)}))}function A(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];u(s)&&u(r)&&e.hasOwnProperty(n)&&!(0,i.dq)(r)&&!(0,i.PG)(r)?e[n]=A(s,r):e[n]=r}return e}const x=Symbol(),R=new WeakMap;function O(e){return r?!R.has(e):!u(e)||!e.hasOwnProperty(x)}const{assign:N}=Object;function P(e){return!(!(0,i.dq)(e)||!e.effect)}function D(e,t,n,a){const{state:l,actions:u,getters:h}=t,d=n.state.value[e];let f;function p(){d||(r?s(n.state.value,e,l?l():{}):n.state.value[e]=l?l():{});const t=(0,i.BK)(n.state.value[e]);return N(t,u,Object.keys(h||{}).reduce(((t,s)=>(t[s]=(0,i.Xl)((0,o.Fl)((()=>{c(n);const t=n._s.get(e);if(!r||t._r)return h[s].call(t,t)}))),t)),{}))}return f=L(e,p,t,n,a,!0),f.$reset=function(){const e=l?l():{};this.$patch((t=>{N(t,e)}))},f}function L(e,t,n={},a,l,u){let d;const f=N({actions:{}},n);const p={deep:!0};let m,g;let y,v=(0,i.Xl)([]),w=(0,i.Xl)([]);const b=a.state.value[e];u||b||(r?s(a.state.value,e,{}):a.state.value[e]={});(0,i.iH)({});let E;function _(t){let n;m=g=!1,"function"===typeof t?(t(a.state.value[e]),n={type:h.patchFunction,storeId:e,events:y}):(A(a.state.value[e],t),n={type:h.patchObject,payload:t,storeId:e,events:y});const r=E=Symbol();(0,o.Y3)().then((()=>{E===r&&(m=!0)})),g=!0,C(v,n,a.state.value[e])}const T=k;function I(){d.stop(),v=[],w=[],a._s.delete(e)}function x(t,n){return function(){c(a);const r=Array.from(arguments),s=[],i=[];function o(e){s.push(e)}function l(e){i.push(e)}let u;C(w,{args:r,name:t,store:D,after:o,onError:l});try{u=n.apply(this&&this.$id===e?this:D,r)}catch(h){throw C(i,h),h}return u instanceof Promise?u.then((e=>(C(s,e),e))).catch((e=>(C(i,e),Promise.reject(e)))):(C(s,u),u)}}const R={_p:a,$id:e,$onAction:S.bind(null,w),$patch:_,$reset:T,$subscribe(t,n={}){const r=S(v,t,n.detached,(()=>s())),s=d.run((()=>(0,o.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?g:m)&&t({storeId:e,type:h.direct,events:y},r)}),N({},p,n))));return r},$dispose:I};r&&(R._r=!1);const D=(0,i.qj)(N({},R));a._s.set(e,D);const L=a._e.run((()=>(d=(0,i.B)(),d.run((()=>t())))));for(const o in L){const t=L[o];if((0,i.dq)(t)&&!P(t)||(0,i.PG)(t))u||(b&&O(t)&&((0,i.dq)(t)?t.value=b[o]:A(t,b[o])),r?s(a.state.value[e],o,t):a.state.value[e][o]=t);else if("function"===typeof t){const e=x(o,t);r?s(L,o,e):L[o]=e,f.actions[o]=t}else 0}return r?Object.keys(L).forEach((e=>{s(D,e,L[e])})):(N(D,L),N((0,i.IU)(D),L)),Object.defineProperty(D,"$state",{get:()=>a.state.value[e],set:e=>{_((t=>{N(t,e)}))}}),r&&(D._r=!0),a._p.forEach((e=>{N(D,d.run((()=>e({store:D,app:a._a,pinia:a,options:f}))))})),b&&u&&n.hydrate&&n.hydrate(D.$state,b),m=!0,g=!0,D}function M(e,t,n){let r,s;const i="function"===typeof t;function u(e,n){const u=(0,o.FN)();e=e||u&&(0,o.f3)(l),e&&c(e),e=a,e._s.has(r)||(i?L(r,t,s,e):D(r,s,e));const h=e._s.get(r);return h}return"string"===typeof e?(r=e,s=i?n:t):(s=e,r=e.id),u.$id=r,u}},2492:function(e,t,n){n(6699),
/*!
* sweetalert2 v11.7.5
* Released under the MIT License.
*/
function(t,n){e.exports=n()}(0,(function(){"use strict";var e={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const t="swal2-",n=e=>{const n={};for(const r in e)n[e[r]]=t+e[r];return n},r=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),s=n(["success","warning","info","question","error"]),i="SweetAlert2:",o=e=>{const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},a=e=>e.charAt(0).toUpperCase()+e.slice(1),c=e=>{console.warn(`${i} ${"object"===typeof e?e.join(" "):e}`)},l=e=>{console.error(`${i} ${e}`)},u=[],h=e=>{u.includes(e)||(u.push(e),c(e))},d=(e,t)=>{h(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},f=e=>"function"===typeof e?e():e,p=e=>e&&"function"===typeof e.toPromise,m=e=>p(e)?e.toPromise():Promise.resolve(e),g=e=>e&&Promise.resolve(e)===e,y=()=>document.body.querySelector(`.${r.container}`),v=e=>{const t=y();return t?t.querySelector(e):null},w=e=>v(`.${e}`),b=()=>w(r.popup),E=()=>w(r.icon),_=()=>w(r["icon-content"]),T=()=>w(r.title),I=()=>w(r["html-container"]),k=()=>w(r.image),S=()=>w(r["progress-steps"]),C=()=>w(r["validation-message"]),A=()=>v(`.${r.actions} .${r.confirm}`),x=()=>v(`.${r.actions} .${r.cancel}`),R=()=>v(`.${r.actions} .${r.deny}`),O=()=>w(r["input-label"]),N=()=>v(`.${r.loader}`),P=()=>w(r.actions),D=()=>w(r.footer),L=()=>w(r["timer-progress-bar"]),M=()=>w(r.close),$='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',U=()=>{const e=Array.from(b().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const n=parseInt(e.getAttribute("tabindex")),r=parseInt(t.getAttribute("tabindex"));return n>r?1:n<r?-1:0})),t=Array.from(b().querySelectorAll($)).filter((e=>"-1"!==e.getAttribute("tabindex")));return o(e.concat(t)).filter((e=>se(e)))},j=()=>z(document.body,r.shown)&&!z(document.body,r["toast-shown"])&&!z(document.body,r["no-backdrop"]),F=()=>b()&&z(b(),r.toast),V=()=>b().hasAttribute("data-loading"),B={previousBodyPadding:null},q=(e,t)=>{if(e.textContent="",t){const n=new DOMParser,r=n.parseFromString(t,"text/html");Array.from(r.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),Array.from(r.querySelector("body").childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},z=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let r=0;r<n.length;r++)if(!e.classList.contains(n[r]))return!1;return!0},H=(e,t)=>{Array.from(e.classList).forEach((n=>{Object.values(r).includes(n)||Object.values(s).includes(n)||Object.values(t.showClass).includes(n)||e.classList.remove(n)}))},K=(e,t,n)=>{if(H(e,t),t.customClass&&t.customClass[n]){if("string"!==typeof t.customClass[n]&&!t.customClass[n].forEach)return void c(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof t.customClass[n]}"`);X(e,t.customClass[n])}},W=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${r.popup} > .${r[t]}`);case"checkbox":return e.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return e.querySelector(`.${r.popup} > .${r.radio} input:checked`)||e.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return e.querySelector(`.${r.popup} > .${r.range} input`);default:return e.querySelector(`.${r.popup} > .${r.input}`)}},G=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},J=(e,t,n)=>{e&&t&&("string"===typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)})))},X=(e,t)=>{J(e,t,!0)},Y=(e,t)=>{J(e,t,!1)},Q=(e,t)=>{const n=Array.from(e.children);for(let r=0;r<n.length;r++){const e=n[r];if(e instanceof HTMLElement&&z(e,t))return e}},Z=(e,t,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||0===parseInt(n)?e.style[t]="number"===typeof n?`${n}px`:n:e.style.removeProperty(t)},ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},te=e=>{e.style.display="none"},ne=(e,t,n,r)=>{const s=e.querySelector(t);s&&(s.style[n]=r)},re=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex";t?ee(e,n):te(e)},se=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),ie=()=>!se(A())&&!se(R())&&!se(x()),oe=e=>!!(e.scrollHeight>e.clientHeight),ae=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},ce=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=L();se(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"}),10))},le=()=>{const e=L(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=parseInt(window.getComputedStyle(e).width),r=t/n*100;e.style.width=`${r}%`},ue=100,he={},de=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},fe=e=>new Promise((t=>{if(!e)return t();const n=window.scrollX,r=window.scrollY;he.restoreFocusTimeout=setTimeout((()=>{de(),t()}),ue),window.scrollTo(n,r)})),pe=()=>"undefined"===typeof window||"undefined"===typeof document,me=`\n <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">\n   <button type="button" class="${r.close}"></button>\n   <ul class="${r["progress-steps"]}"></ul>\n   <div class="${r.icon}"></div>\n   <img class="${r.image}" />\n   <h2 class="${r.title}" id="${r.title}"></h2>\n   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>\n   <input class="${r.input}" />\n   <input type="file" class="${r.file}" />\n   <div class="${r.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${r.select}"></select>\n   <div class="${r.radio}"></div>\n   <label for="${r.checkbox}" class="${r.checkbox}">\n     <input type="checkbox" />\n     <span class="${r.label}"></span>\n   </label>\n   <textarea class="${r.textarea}"></textarea>\n   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>\n   <div class="${r.actions}">\n     <div class="${r.loader}"></div>\n     <button type="button" class="${r.confirm}"></button>\n     <button type="button" class="${r.deny}"></button>\n     <button type="button" class="${r.cancel}"></button>\n   </div>\n   <div class="${r.footer}"></div>\n   <div class="${r["timer-progress-bar-container"]}">\n     <div class="${r["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,""),ge=()=>{const e=y();return!!e&&(e.remove(),Y([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0)},ye=()=>{he.currentInstance.resetValidationMessage()},ve=()=>{const e=b(),t=Q(e,r.input),n=Q(e,r.file),s=e.querySelector(`.${r.range} input`),i=e.querySelector(`.${r.range} output`),o=Q(e,r.select),a=e.querySelector(`.${r.checkbox} input`),c=Q(e,r.textarea);t.oninput=ye,n.onchange=ye,o.onchange=ye,a.onchange=ye,c.oninput=ye,s.oninput=()=>{ye(),i.value=s.value},s.onchange=()=>{ye(),i.value=s.value}},we=e=>"string"===typeof e?document.querySelector(e):e,be=e=>{const t=b();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Ee=e=>{"rtl"===window.getComputedStyle(e).direction&&X(y(),r.rtl)},_e=e=>{const t=ge();if(pe())return void l("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=r.container,t&&X(n,r["no-transition"]),q(n,me);const s=we(e.target);s.appendChild(n),be(e),Ee(s),ve()},Te=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"===typeof e?Ie(e,t):e&&q(t,e)},Ie=(e,t)=>{e.jquery?ke(t,e):q(t,e.toString())},ke=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Se=(()=>{if(pe())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&"undefined"!==typeof e.style[n])return t[n];return!1})(),Ce=()=>{const e=document.createElement("div");e.className=r["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Ae=(e,t)=>{const n=P(),r=N();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ee(n):te(n),K(n,t,"actions"),xe(n,r,t),q(r,t.loaderHtml),K(r,t,"loader")};function xe(e,t,n){const r=A(),s=R(),i=x();Oe(r,"confirm",n),Oe(s,"deny",n),Oe(i,"cancel",n),Re(r,s,i,n),n.reverseButtons&&(n.toast?(e.insertBefore(i,r),e.insertBefore(s,r)):(e.insertBefore(i,t),e.insertBefore(s,t),e.insertBefore(r,t)))}function Re(e,t,n,s){s.buttonsStyling?(X([e,t,n],r.styled),s.confirmButtonColor&&(e.style.backgroundColor=s.confirmButtonColor,X(e,r["default-outline"])),s.denyButtonColor&&(t.style.backgroundColor=s.denyButtonColor,X(t,r["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,X(n,r["default-outline"]))):Y([e,t,n],r.styled)}function Oe(e,t,n){re(e,n[`show${a(t)}Button`],"inline-block"),q(e,n[`${t}ButtonText`]),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]),e.className=r[t],K(e,n,`${t}Button`),X(e,n[`${t}ButtonClass`])}const Ne=(e,t)=>{const n=M();q(n,t.closeButtonHtml),K(n,t,"closeButton"),re(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},Pe=(e,t)=>{const n=y();n&&(De(n,t.backdrop),Le(n,t.position),Me(n,t.grow),K(n,t,"container"))};function De(e,t){"string"===typeof t?e.style.background=t:t||X([document.documentElement,document.body],r["no-backdrop"])}function Le(e,t){t in r?X(e,r[t]):(c('The "position" parameter is not valid, defaulting to "center"'),X(e,r.center))}function Me(e,t){if(t&&"string"===typeof t){const n=`grow-${t}`;n in r&&X(e,r[n])}}const $e=["input","file","range","select","radio","checkbox","textarea"],Ue=(t,n)=>{const s=b(),i=e.innerParams.get(t),o=!i||n.input!==i.input;$e.forEach((e=>{const t=Q(s,r[e]);Ve(e,n.inputAttributes),t.className=r[e],o&&te(t)})),n.input&&(o&&je(n),Be(n))},je=e=>{if(!We[e.input])return void l(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);const t=He(e.input),n=We[e.input](t,e);ee(t),e.inputAutoFocus&&setTimeout((()=>{G(n)}))},Fe=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["type","value","style"].includes(n)||e.removeAttribute(n)}},Ve=(e,t)=>{const n=W(b(),e);if(n){Fe(n);for(const e in t)n.setAttribute(e,t[e])}},Be=e=>{const t=He(e.input);"object"===typeof e.customClass&&X(t,e.customClass.input)},qe=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},ze=(e,t,n)=>{if(n.inputLabel){e.id=r.input;const s=document.createElement("label"),i=r["input-label"];s.setAttribute("for",e.id),s.className=i,"object"===typeof n.customClass&&X(s,n.customClass.inputLabel),s.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",s)}},He=e=>Q(b(),r[e]||r.input),Ke=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:g(t)||c(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},We={};We.text=We.email=We.password=We.number=We.tel=We.url=(e,t)=>(Ke(e,t.inputValue),ze(e,e,t),qe(e,t),e.type=t.input,e),We.file=(e,t)=>(ze(e,e,t),qe(e,t),e),We.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return Ke(n,t.inputValue),n.type=t.input,Ke(r,t.inputValue),ze(n,e,t),e},We.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");q(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return ze(e,e,t),e},We.radio=e=>(e.textContent="",e),We.checkbox=(e,t)=>{const n=W(b(),"checkbox");n.value="1",n.id=r.checkbox,n.checked=Boolean(t.inputValue);const s=e.querySelector("span");return q(s,t.inputPlaceholder),n},We.textarea=(e,t)=>{Ke(e,t.inputValue),qe(e,t),ze(e,e,t);const n=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(b()).width),r=()=>{const r=e.offsetWidth+n(e);b().style.width=r>t?`${r}px`:null};new MutationObserver(r).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const Ge=(e,t)=>{const n=I();K(n,t,"htmlContainer"),t.html?(Te(t.html,n),ee(n,"block")):t.text?(n.textContent=t.text,ee(n,"block")):te(n),Ue(e,t)},Je=(e,t)=>{const n=D();re(n,t.footer),t.footer&&Te(t.footer,n),K(n,t,"footer")},Xe=(t,n)=>{const r=e.innerParams.get(t),i=E();if(r&&n.icon===r.icon)return tt(i,n),void Ye(i,n);if(n.icon||n.iconHtml){if(n.icon&&-1===Object.keys(s).indexOf(n.icon))return l(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${n.icon}"`),void te(i);ee(i),tt(i,n),Ye(i,n),X(i,n.showClass.icon)}else te(i)},Ye=(e,t)=>{for(const n in s)t.icon!==n&&Y(e,s[n]);X(e,s[t.icon]),nt(e,t),Qe(),K(e,t,"icon")},Qe=()=>{const e=b(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=t},Ze='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',et='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',tt=(e,t)=>{let n,r=e.innerHTML;if(t.iconHtml)n=rt(t.iconHtml);else if("success"===t.icon)n=Ze,r=r.replace(/ style=".*?"/g,"");else if("error"===t.icon)n=et;else{const e={question:"?",warning:"!",info:"i"};n=rt(e[t.icon])}r.trim()!==n.trim()&&q(e,n)},nt=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ne(e,n,"backgroundColor",t.iconColor);ne(e,".swal2-success-ring","borderColor",t.iconColor)}},rt=e=>`<div class="${r["icon-content"]}">${e}</div>`,st=(e,t)=>{const n=k();t.imageUrl?(ee(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),Z(n,"width",t.imageWidth),Z(n,"height",t.imageHeight),n.className=r.image,K(n,t,"image")):te(n)},it=(e,t)=>{const n=y(),r=b();t.toast?(Z(n,"width",t.width),r.style.width="100%",r.insertBefore(N(),E())):Z(r,"width",t.width),Z(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),te(C()),ot(r,t)},ot=(e,t)=>{e.className=`${r.popup} ${se(e)?t.showClass.popup:""}`,t.toast?(X([document.documentElement,document.body],r["toast-shown"]),X(e,r.toast)):X(e,r.modal),K(e,t,"popup"),"string"===typeof t.customClass&&X(e,t.customClass),t.icon&&X(e,r[`icon-${t.icon}`])},at=(e,t)=>{const n=S();t.progressSteps&&0!==t.progressSteps.length?(ee(n),n.textContent="",t.currentProgressStep>=t.progressSteps.length&&c("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,s)=>{const i=ct(e);if(n.appendChild(i),s===t.currentProgressStep&&X(i,r["active-progress-step"]),s!==t.progressSteps.length-1){const e=lt(t);n.appendChild(e)}}))):te(n)},ct=e=>{const t=document.createElement("li");return X(t,r["progress-step"]),q(t,e),t},lt=e=>{const t=document.createElement("li");return X(t,r["progress-step-line"]),e.progressStepsDistance&&Z(t,"width",e.progressStepsDistance),t},ut=(e,t)=>{const n=T();re(n,t.title||t.titleText,"block"),t.title&&Te(t.title,n),t.titleText&&(n.innerText=t.titleText),K(n,t,"title")},ht=(e,t)=>{it(e,t),Pe(e,t),at(e,t),Xe(e,t),st(e,t),ut(e,t),Ne(e,t),Ge(e,t),Ae(e,t),Je(e,t),"function"===typeof t.didRender&&t.didRender(b())};function dt(){const t=e.innerParams.get(this);if(!t)return;const n=e.domCache.get(this);te(n.loader),F()?t.icon&&ee(E()):ft(n),Y([n.popup,n.actions],r.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const ft=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ee(t[0],"inline-block"):ie()&&te(e.actions)};function pt(t){const n=e.innerParams.get(t||this),r=e.domCache.get(t||this);return r?W(r.popup,n.input):null}const mt=()=>se(b()),gt=()=>A()&&A().click(),yt=()=>R()&&R().click(),vt=()=>x()&&x().click(),wt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),bt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Et=(e,t,n,r)=>{bt(t),n.toast||(t.keydownHandler=t=>kt(e,t,r),t.keydownTarget=n.keydownListenerCapture?window:b(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},_t=(e,t)=>{const n=U();if(n.length)return e+=t,e===n.length?e=0:-1===e&&(e=n.length-1),void n[e].focus();b().focus()},Tt=["ArrowRight","ArrowDown"],It=["ArrowLeft","ArrowUp"],kt=(t,n,r)=>{const s=e.innerParams.get(t);s&&(n.isComposing||229===n.keyCode||(s.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key?St(t,n,s):"Tab"===n.key?Ct(n):[...Tt,...It].includes(n.key)?At(n.key):"Escape"===n.key&&xt(n,s,r)))},St=(e,t,n)=>{if(f(n.allowEnterKey)&&t.target&&e.getInput()&&t.target instanceof HTMLElement&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;gt(),t.preventDefault()}},Ct=e=>{const t=e.target,n=U();let r=-1;for(let s=0;s<n.length;s++)if(t===n[s]){r=s;break}e.shiftKey?_t(r,-1):_t(r,1),e.stopPropagation(),e.preventDefault()},At=e=>{const t=A(),n=R(),r=x(),s=[t,n,r];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const i=Tt.includes(e)?"nextElementSibling":"previousElementSibling";let o=document.activeElement;for(let a=0;a<P().children.length;a++){if(o=o[i],!o)return;if(o instanceof HTMLButtonElement&&se(o))break}o instanceof HTMLButtonElement&&o.focus()},xt=(e,t,n)=>{f(t.allowEscapeKey)&&(e.preventDefault(),n(wt.esc))};var Rt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ot=()=>{const e=Array.from(document.body.children);e.forEach((e=>{e===y()||e.contains(y())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))},Nt=()=>{const e=Array.from(document.body.children);e.forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},Pt=()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;if(e&&!z(document.body,r.iosfix)){const e=document.body.scrollTop;document.body.style.top=-1*e+"px",X(document.body,r.iosfix),Lt(),Dt()}},Dt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i),r=t&&n&&!e.match(/CriOS/i);if(r){const e=44;b().scrollHeight>window.innerHeight-e&&(y().style.paddingBottom=`${e}px`)}},Lt=()=>{const e=y();let t;e.ontouchstart=e=>{t=Mt(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Mt=e=>{const t=e.target,n=y();return!$t(e)&&!Ut(e)&&(t===n||!oe(n)&&t instanceof HTMLElement&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&(!oe(I())||!I().contains(t)))},$t=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Ut=e=>e.touches&&e.touches.length>1,jt=()=>{if(z(document.body,r.iosfix)){const e=parseInt(document.body.style.top,10);Y(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Ft=()=>{null===B.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(B.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${B.previousBodyPadding+Ce()}px`)},Vt=()=>{null!==B.previousBodyPadding&&(document.body.style.paddingRight=`${B.previousBodyPadding}px`,B.previousBodyPadding=null)};function Bt(e,t,n,r){F()?Qt(e,r):(fe(n).then((()=>Qt(e,r))),bt(he));const s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);s?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),j()&&(Vt(),jt(),Nt()),qt()}function qt(){Y([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function zt(e){e=Jt(e);const t=Rt.swalPromiseResolve.get(this),n=Kt(this);this.isAwaitingPromise()?e.isDismissed||(Gt(this),t(e)):n&&t(e)}function Ht(){return!!e.awaitingPromise.get(this)}const Kt=t=>{const n=b();if(!n)return!1;const r=e.innerParams.get(t);if(!r||z(n,r.hideClass.popup))return!1;Y(n,r.showClass.popup),X(n,r.hideClass.popup);const s=y();return Y(s,r.showClass.backdrop),X(s,r.hideClass.backdrop),Xt(t,n,r),!0};function Wt(e){const t=Rt.swalPromiseReject.get(this);Gt(this),t&&t(e)}const Gt=t=>{t.isAwaitingPromise()&&(e.awaitingPromise.delete(t),e.innerParams.get(t)||t._destroy())},Jt=e=>"undefined"===typeof e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Xt=(e,t,n)=>{const r=y(),s=Se&&ae(t);"function"===typeof n.willClose&&n.willClose(t),s?Yt(e,t,r,n.returnFocus,n.didClose):Bt(e,r,n.returnFocus,n.didClose)},Yt=(e,t,n,r,s)=>{he.swalCloseEventFinishedCallback=Bt.bind(null,e,n,r,s),t.addEventListener(Se,(function(e){e.target===t&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback)}))},Qt=(e,t)=>{setTimeout((()=>{"function"===typeof t&&t.bind(e.params)(),e._destroy()}))};function Zt(t,n,r){const s=e.domCache.get(t);n.forEach((e=>{s[e].disabled=r}))}function en(e,t){if(e)if("radio"===e.type){const n=e.parentNode.parentNode,r=n.querySelectorAll("input");for(let e=0;e<r.length;e++)r[e].disabled=t}else e.disabled=t}function tn(){Zt(this,["confirmButton","denyButton","cancelButton"],!1)}function nn(){Zt(this,["confirmButton","denyButton","cancelButton"],!0)}function rn(){en(this.getInput(),!1)}function sn(){en(this.getInput(),!0)}function on(t){const n=e.domCache.get(this),s=e.innerParams.get(this);q(n.validationMessage,t),n.validationMessage.className=r["validation-message"],s.customClass&&s.customClass.validationMessage&&X(n.validationMessage,s.customClass.validationMessage),ee(n.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid",!0),i.setAttribute("aria-describedby",r["validation-message"]),G(i),X(i,r.inputerror))}function an(){const t=e.domCache.get(this);t.validationMessage&&te(t.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),Y(n,r.inputerror))}const cn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ln=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],un={},hn=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],dn=e=>Object.prototype.hasOwnProperty.call(cn,e),fn=e=>-1!==ln.indexOf(e),pn=e=>un[e],mn=e=>{dn(e)||c(`Unknown parameter "${e}"`)},gn=e=>{hn.includes(e)&&c(`The parameter "${e}" is incompatible with toasts`)},yn=e=>{pn(e)&&d(e,pn(e))},vn=e=>{!1===e.backdrop&&e.allowOutsideClick&&c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)mn(t),e.toast&&gn(t),yn(t)};function wn(t){const n=b(),r=e.innerParams.get(this);if(!n||z(n,r.hideClass.popup))return void c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=bn(t),i=Object.assign({},r,s);ht(this,i),e.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const bn=e=>{const t={};return Object.keys(e).forEach((n=>{fn(n)?t[n]=e[n]:c(`Invalid parameter to update: ${n}`)})),t};function En(){const t=e.domCache.get(this),n=e.innerParams.get(this);n?(t.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),"function"===typeof n.didDestroy&&n.didDestroy(),_n(this)):Tn(this)}const _n=e=>{Tn(e),delete e.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Tn=t=>{t.isAwaitingPromise()?(In(e,t),e.awaitingPromise.set(t,!0)):(In(Rt,t),In(e,t))},In=(e,t)=>{for(const n in e)e[n].delete(t)};var kn=Object.freeze({__proto__:null,_destroy:En,close:zt,closeModal:zt,closePopup:zt,closeToast:zt,disableButtons:nn,disableInput:sn,disableLoading:dt,enableButtons:tn,enableInput:rn,getInput:pt,handleAwaitingPromise:Gt,hideLoading:dt,isAwaitingPromise:Ht,rejectPromise:Wt,resetValidationMessage:an,showValidationMessage:on,update:wn});const Sn=e=>{let t=b();t||new Wr,t=b();const n=N();F()?te(E()):Cn(t,e),ee(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},Cn=(e,t)=>{const n=P(),s=N();!t&&se(A())&&(t=A()),ee(n),t&&(te(t),s.setAttribute("data-button-to-replace",t.className)),s.parentNode.insertBefore(s,t),X([e,n],r.loading)},An=(e,t)=>{"select"===t.input||"radio"===t.input?Pn(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(p(t.inputValue)||g(t.inputValue))&&(Sn(A()),Dn(e,t))},xn=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Rn(n);case"radio":return On(n);case"file":return Nn(n);default:return t.inputAutoTrim?n.value.trim():n.value}},Rn=e=>e.checked?1:0,On=e=>e.checked?e.value:null,Nn=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,Pn=(e,t)=>{const n=b(),r=e=>{Ln[t.input](n,Mn(e),t)};p(t.inputOptions)||g(t.inputOptions)?(Sn(A()),m(t.inputOptions).then((t=>{e.hideLoading(),r(t)}))):"object"===typeof t.inputOptions?r(t.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)},Dn=(e,t)=>{const n=e.getInput();te(n),m(t.inputValue).then((r=>{n.value="number"===t.input?`${parseFloat(r)||0}`:`${r}`,ee(n),n.focus(),e.hideLoading()})).catch((t=>{l(`Error in inputValue promise: ${t}`),n.value="",ee(n),n.focus(),e.hideLoading()}))},Ln={select:(e,t,n)=>{const s=Q(e,r.select),i=(e,t,r)=>{const s=document.createElement("option");s.value=r,q(s,t),s.selected=$n(r,n.inputValue),e.appendChild(s)};t.forEach((e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,s.appendChild(e),n.forEach((t=>i(e,t[1],t[0])))}else i(s,n,t)})),s.focus()},radio:(e,t,n)=>{const s=Q(e,r.radio);t.forEach((e=>{const t=e[0],i=e[1],o=document.createElement("input"),a=document.createElement("label");o.type="radio",o.name=r.radio,o.value=t,$n(t,n.inputValue)&&(o.checked=!0);const c=document.createElement("span");q(c,i),c.className=r.label,a.appendChild(o),a.appendChild(c),s.appendChild(a)}));const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Mn=e=>{const t=[];return"undefined"!==typeof Map&&e instanceof Map?e.forEach(((e,n)=>{let r=e;"object"===typeof r&&(r=Mn(r)),t.push([n,r])})):Object.keys(e).forEach((n=>{let r=e[n];"object"===typeof r&&(r=Mn(r)),t.push([n,r])})),t},$n=(e,t)=>t&&t.toString()===e.toString(),Un=t=>{const n=e.innerParams.get(t);t.disableButtons(),n.input?Vn(t,"confirm"):Kn(t,!0)},jn=t=>{const n=e.innerParams.get(t);t.disableButtons(),n.returnInputValueOnDeny?Vn(t,"deny"):qn(t,!1)},Fn=(e,t)=>{e.disableButtons(),t(wt.cancel)},Vn=(t,n)=>{const r=e.innerParams.get(t);if(!r.input)return void l(`The "input" parameter is needed to be set when using returnInputValueOn${a(n)}`);const s=xn(t,r);r.inputValidator?Bn(t,s,n):t.getInput().checkValidity()?"deny"===n?qn(t,s):Kn(t,s):(t.enableButtons(),t.showValidationMessage(r.validationMessage))},Bn=(t,n,r)=>{const s=e.innerParams.get(t);t.disableInput();const i=Promise.resolve().then((()=>m(s.inputValidator(n,s.validationMessage))));i.then((e=>{t.enableButtons(),t.enableInput(),e?t.showValidationMessage(e):"deny"===r?qn(t,n):Kn(t,n)}))},qn=(t,n)=>{const r=e.innerParams.get(t||void 0);if(r.showLoaderOnDeny&&Sn(R()),r.preDeny){e.awaitingPromise.set(t||void 0,!0);const s=Promise.resolve().then((()=>m(r.preDeny(n,r.validationMessage))));s.then((e=>{!1===e?(t.hideLoading(),Gt(t)):t.close({isDenied:!0,value:"undefined"===typeof e?n:e})})).catch((e=>Hn(t||void 0,e)))}else t.close({isDenied:!0,value:n})},zn=(e,t)=>{e.close({isConfirmed:!0,value:t})},Hn=(e,t)=>{e.rejectPromise(t)},Kn=(t,n)=>{const r=e.innerParams.get(t||void 0);if(r.showLoaderOnConfirm&&Sn(),r.preConfirm){t.resetValidationMessage(),e.awaitingPromise.set(t||void 0,!0);const s=Promise.resolve().then((()=>m(r.preConfirm(n,r.validationMessage))));s.then((e=>{se(C())||!1===e?(t.hideLoading(),Gt(t)):zn(t,"undefined"===typeof e?n:e)})).catch((e=>Hn(t||void 0,e)))}else zn(t,n)},Wn=(t,n,r)=>{const s=e.innerParams.get(t);s.toast?Gn(t,n,r):(Yn(n),Qn(n),Zn(t,n,r))},Gn=(t,n,r)=>{n.popup.onclick=()=>{const n=e.innerParams.get(t);n&&(Jn(n)||n.timer||n.input)||r(wt.close)}},Jn=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Xn=!1;const Yn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Xn=!0)}}},Qn=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Xn=!0)}}},Zn=(t,n,r)=>{n.container.onclick=s=>{const i=e.innerParams.get(t);Xn?Xn=!1:s.target===n.container&&f(i.allowOutsideClick)&&r(wt.backdrop)}},er=e=>"object"===typeof e&&e.jquery,tr=e=>e instanceof Element||er(e),nr=e=>{const t={};return"object"!==typeof e[0]||tr(e[0])?["title","html","icon"].forEach(((n,r)=>{const s=e[r];"string"===typeof s||tr(s)?t[n]=s:void 0!==s&&l(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)})):Object.assign(t,e[0]),t};function rr(){const e=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)}function sr(e){class t extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}return t}const ir=()=>he.timeout&&he.timeout.getTimerLeft(),or=()=>{if(he.timeout)return le(),he.timeout.stop()},ar=()=>{if(he.timeout){const e=he.timeout.start();return ce(e),e}},cr=()=>{const e=he.timeout;return e&&(e.running?or():ar())},lr=e=>{if(he.timeout){const t=he.timeout.increase(e);return ce(t,!0),t}},ur=()=>he.timeout&&he.timeout.isRunning();let hr=!1;const dr={};function fr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";dr[e]=this,hr||(document.body.addEventListener("click",pr),hr=!0)}const pr=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in dr){const n=t.getAttribute(e);if(n)return void dr[e].fire({template:n})}};var mr=Object.freeze({__proto__:null,argsToParams:nr,bindClickHandler:fr,clickCancel:vt,clickConfirm:gt,clickDeny:yt,enableLoading:Sn,fire:rr,getActions:P,getCancelButton:x,getCloseButton:M,getConfirmButton:A,getContainer:y,getDenyButton:R,getFocusableElements:U,getFooter:D,getHtmlContainer:I,getIcon:E,getIconContent:_,getImage:k,getInputLabel:O,getLoader:N,getPopup:b,getProgressSteps:S,getTimerLeft:ir,getTimerProgressBar:L,getTitle:T,getValidationMessage:C,increaseTimer:lr,isDeprecatedParameter:pn,isLoading:V,isTimerRunning:ur,isUpdatableParameter:fn,isValidParameter:dn,isVisible:mt,mixin:sr,resumeTimer:ar,showLoading:Sn,stopTimer:or,toggleTimer:cr});class gr{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const yr=["swal-title","swal-html","swal-footer"],vr=e=>{const t="string"===typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;Sr(n);const r=Object.assign(wr(n),br(n),Er(n),_r(n),Tr(n),Ir(n),kr(n,yr));return r},wr=e=>{const t={},n=Array.from(e.querySelectorAll("swal-param"));return n.forEach((e=>{Cr(e,["name","value"]);const n=e.getAttribute("name"),r=e.getAttribute("value");"boolean"===typeof cn[n]?t[n]="false"!==r:"object"===typeof cn[n]?t[n]=JSON.parse(r):t[n]=r})),t},br=e=>{const t={},n=Array.from(e.querySelectorAll("swal-function-param"));return n.forEach((e=>{const n=e.getAttribute("name"),r=e.getAttribute("value");t[n]=new Function(`return ${r}`)()})),t},Er=e=>{const t={},n=Array.from(e.querySelectorAll("swal-button"));return n.forEach((e=>{Cr(e,["type","color","aria-label"]);const n=e.getAttribute("type");t[`${n}ButtonText`]=e.innerHTML,t[`show${a(n)}Button`]=!0,e.hasAttribute("color")&&(t[`${n}ButtonColor`]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t[`${n}ButtonAriaLabel`]=e.getAttribute("aria-label"))})),t},_r=e=>{const t={},n=e.querySelector("swal-image");return n&&(Cr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},Tr=e=>{const t={},n=e.querySelector("swal-icon");return n&&(Cr(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},Ir=e=>{const t={},n=e.querySelector("swal-input");n&&(Cr(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const r=Array.from(e.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach((e=>{Cr(e,["value"]);const n=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[n]=r}))),t},kr=(e,t)=>{const n={};for(const r in t){const s=t[r],i=e.querySelector(s);i&&(Cr(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Sr=e=>{const t=yr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const n=e.tagName.toLowerCase();t.includes(n)||c(`Unrecognized element <${n}>`)}))},Cr=(e,t)=>{Array.from(e.attributes).forEach((n=>{-1===t.indexOf(n.name)&&c([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,""+(t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element.")])}))},Ar=10,xr=e=>{const t=y(),n=b();"function"===typeof e.willOpen&&e.willOpen(n);const s=window.getComputedStyle(document.body),i=s.overflowY;Pr(t,n,e),setTimeout((()=>{Or(t,n)}),Ar),j()&&(Nr(t,e.scrollbarPadding,i),Ot()),F()||he.previousActiveElement||(he.previousActiveElement=document.activeElement),"function"===typeof e.didOpen&&setTimeout((()=>e.didOpen(n))),Y(t,r["no-transition"])},Rr=e=>{const t=b();if(e.target!==t)return;const n=y();t.removeEventListener(Se,Rr),n.style.overflowY="auto"},Or=(e,t)=>{Se&&ae(t)?(e.style.overflowY="hidden",t.addEventListener(Se,Rr)):e.style.overflowY="auto"},Nr=(e,t,n)=>{Pt(),t&&"hidden"!==n&&Ft(),setTimeout((()=>{e.scrollTop=0}))},Pr=(e,t,n)=>{X(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),ee(t,"grid"),setTimeout((()=>{X(t,n.showClass.popup),t.style.removeProperty("opacity")}),Ar),X([document.documentElement,document.body],r.shown),n.heightAuto&&n.backdrop&&!n.toast&&X([document.documentElement,document.body],r["height-auto"])};var Dr={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Lr(e){e.inputValidator||Object.keys(Dr).forEach((t=>{e.input===t&&(e.inputValidator=Dr[t])}))}function Mr(e){(!e.target||"string"===typeof e.target&&!document.querySelector(e.target)||"string"!==typeof e.target&&!e.target.appendChild)&&(c('Target parameter is not valid, defaulting to "body"'),e.target="body")}function $r(e){Lr(e),e.showLoaderOnConfirm&&!e.preConfirm&&c("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Mr(e),"string"===typeof e.title&&(e.title=e.title.split("\n").join("<br />")),_e(e)}let Ur;class jr{constructor(){if("undefined"===typeof window)return;Ur=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));Object.defineProperties(this,{params:{value:s,writable:!1,enumerable:!0,configurable:!0}});const i=Ur._main(Ur.params);e.promise.set(this,i)}_main(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};vn(Object.assign({},n,t)),he.currentInstance&&(he.currentInstance._destroy(),j()&&Nt()),he.currentInstance=Ur;const r=Vr(t,n);$r(r),Object.freeze(r),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const s=Br(Ur);return ht(Ur,r),e.innerParams.set(Ur,r),Fr(Ur,s,r)}then(t){const n=e.promise.get(this);return n.then(t)}finally(t){const n=e.promise.get(this);return n.finally(t)}}const Fr=(e,t,n)=>new Promise(((r,s)=>{const i=t=>{e.close({isDismissed:!0,dismiss:t})};Rt.swalPromiseResolve.set(e,r),Rt.swalPromiseReject.set(e,s),t.confirmButton.onclick=()=>{Un(e)},t.denyButton.onclick=()=>{jn(e)},t.cancelButton.onclick=()=>{Fn(e,i)},t.closeButton.onclick=()=>{i(wt.close)},Wn(e,t,i),Et(e,he,n,i),An(e,n),xr(n),qr(he,n,i),zr(t,n),setTimeout((()=>{t.container.scrollTop=0}))})),Vr=(e,t)=>{const n=vr(e),r=Object.assign({},cn,t,n,e);return r.showClass=Object.assign({},cn.showClass,r.showClass),r.hideClass=Object.assign({},cn.hideClass,r.hideClass),r},Br=t=>{const n={popup:b(),container:y(),actions:P(),confirmButton:A(),denyButton:R(),cancelButton:x(),loader:N(),closeButton:M(),validationMessage:C(),progressSteps:S()};return e.domCache.set(t,n),n},qr=(e,t,n)=>{const r=L();te(r),t.timer&&(e.timeout=new gr((()=>{n("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ee(r),K(r,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&ce(t.timer)}))))},zr=(e,t)=>{t.toast||(f(t.allowEnterKey)?Hr(e,t)||_t(-1,1):Kr())},Hr=(e,t)=>t.focusDeny&&se(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&se(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!se(e.confirmButton))&&(e.confirmButton.focus(),!0),Kr=()=>{document.activeElement instanceof HTMLElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!==typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}Object.assign(jr.prototype,kn),Object.assign(jr,mr),Object.keys(kn).forEach((e=>{jr[e]=function(){if(Ur)return Ur[e](...arguments)}})),jr.DismissReason=wt,jr.version="11.7.5";const Wr=jr;return Wr.default=Wr,Wr})),"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')},536:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return p}});var s=new Uint8Array(16);function i(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(e){return"string"===typeof e&&o.test(e)}for(var c=a,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var d=h;function f(e,t,n){e=e||{};var r=e.random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var s=0;s<16;++s)t[n+s]=r[s];return t}return d(r)}var p=f},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n}},678:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return K},tv:function(){return it}});n(6699);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const g=()=>{};const y=/\/$/,v=e=>e.replace(y,"");function w(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function E(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&T(t.matched[r],n.matched[s])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function T(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var A,x;(function(e){e["pop"]="pop",e["push"]="push"})(A||(A={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(x||(x={}));function R(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const O=/^[^#]+#/;function N(e,t){return e.replace(O,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=P(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const $=new Map;function U(e,t){$.set(e,t)}function j(e){const t=$.get(e);return $.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),E(n,"")}const o=E(n,e);return o+r+s}function B(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=V(e,location),c=n.value,l=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:u,type:A.pop,direction:u?u>0?x.forward:x.back:x.unknown})}))};function c(){o=n.value}function l(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:D()}),"")}function h(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function q(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?D():null}}function z(e){const{history:t,location:n}=window,r={value:V(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,q(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});i(e,o,!0),r.value=e}function a(e,n){const o=p({},s.value,t.state,{forward:e,scroll:D()});i(o.current,o,!0);const a=p({},q(r.value,e,null),{position:o.position+1},n);i(e,a,!1),r.value=e}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:a,replace:o}}function H(e){e=R(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=p({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function K(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function Q(e,t){return p(new Error,{type:e,[X]:!0},t)}function Z(e,t){return e instanceof Error&&X in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),s+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const i of s)if(0===i.type)n+=i.value;else if(1===i.type){const{value:o,repeatable:a,optional:c}=i,l=o in t?t[o]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${o}"`);s.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:i,parse:a,stringify:c}}function se(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,s=t.score;while(n<r.length&&n<s.length){const e=se(r[n],s[n]);if(e)return e;n++}return s.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function le(e,t,n){const r=re(ce(e.path),n);const s=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function ue(e,t){const n=[],r=new Map;function s(e){return r.get(e)}function i(e,n,r){const s=!r,a=de(e);a.aliasOf=r&&r.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ye(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw Q(1,{location:e});o=s.record.name,a=p(he(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw Q(1,{location:e,currentLocation:t});o=s.record.name,a=p({},t.params,e.params),i=s.stringify(a)}const c=[];let l=s;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:i,params:a,matched:c,meta:me(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ye(e,t){return t.children.some((t=>t===e||ye(e,t)))}const ve=/#/g,we=/&/g,be=/\//g,Ee=/=/g,_e=/\?/g,Te=/\+/g,Ie=/%5B/g,ke=/%5D/g,Se=/%5E/g,Ce=/%60/g,Ae=/%7B/g,xe=/%7C/g,Re=/%7D/g,Oe=/%20/g;function Ne(e){return encodeURI(""+e).replace(xe,"|").replace(Ie,"[").replace(ke,"]")}function Pe(e){return Ne(e).replace(Ae,"{").replace(Re,"}").replace(Se,"^")}function De(e){return Ne(e).replace(Te,"%2B").replace(Oe,"+").replace(ve,"%23").replace(we,"%26").replace(Ce,"`").replace(Ae,"{").replace(Re,"}").replace(Se,"^")}function Le(e){return De(e).replace(Ee,"%3D")}function Me(e){return Ne(e).replace(ve,"%23").replace(_e,"%3F")}function $e(e){return null==e?"":Me(e).replace(be,"%2F")}function Ue(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function je(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const e=r[s].replace(Te," "),n=e.indexOf("="),i=Ue(n<0?e:e.slice(0,n)),o=n<0?null:Ue(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const s=Array.isArray(r)?r.map((e=>e&&De(e))):[r&&De(r)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ve(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Q(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(Q(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"===typeof e&&i.push(e),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function ze(e,t,n,r){const s=[];for(const i of e)for(const e in i.components){let o=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(He(o)){const a=o.__vccOpts||o,c=a[t];c&&s.push(qe(c,n,r,i,e))}else{let a=o();0,s.push((()=>a.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const o=f(s)?s.default:s;i.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&qe(c,n,r,i,e)()}))))}}return s}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),i=(0,r.Fl)((()=>t.resolve((0,s.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(T.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&s[s.length-1].path!==a?s.findIndex(T.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,i.value.params)));function h(n={}){return Je(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(g):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:h}}const We=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,s.qj)(Ke(e)),{options:i}=(0,r.f3)(l),o=(0,r.Fl)((()=>({[Qe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Ge=We;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],s=e[n];if("string"===typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||i.value)),l=(0,r.f3)(c,0),u=(0,r.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,s.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&T(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=o.value,i=u.value,a=i&&i.components[e.name],c=e.name;if(!a)return et(n.default,{Component:a,route:s});const l=i.props[e.name],h=l?!0===l?s.params:"function"===typeof l?l(s):l:null,f=e=>{e.component.isUnmounted&&(i.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return et(n.default,{Component:m,route:s})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=ue(e.routes,e),n=e.parseQuery||je,i=e.stringifyQuery||Fe,o=e.history;const a=Be(),c=Be(),f=Be(),y=(0,s.XI)(J);let v=J;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=m.bind(null,(e=>""+e)),T=m.bind(null,$e),I=m.bind(null,Ue);function k(e,n){let r,s;return G(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=p({},r||y.value),"string"===typeof e){const s=w(n,e,r.path),i=t.resolve({path:s.path},r),a=o.createHref(s.fullPath);return p(s,i,{params:I(i.params),hash:Ue(s.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];s=p({},e,{params:T(e.params)}),r.params=T(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=E(I(a.params));const l=b(i,p({},e,{hash:Pe(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:i===Fe?Ve(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function O(e){return"string"===typeof e?w(n,e,y.value.path):p({},e)}function N(e,t){if(v!==e)return Q(8,{from:t,to:e})}function P(e){return V(e)}function $(e){return P(p(O(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=R(e),r=y.value,s=e.state,o=e.force,a=!0===e.replace,c=F(n);if(c)return V(p(O(c),{state:s,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&_(i,r,n)&&(u=Q(16,{to:l,from:r}),se(r,r,!0,!1)),(u?Promise.resolve(u):q(l,r)).catch((e=>Z(e)?Z(e,2)?e:re(e):te(e,l,r))).then((e=>{if(e){if(Z(e,2))return V(p(O(e.to),{state:s,force:o,replace:a}),t||l)}else e=H(l,r,!0,a,s);return z(l,r,e),e}))}function B(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,s,i]=st(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).then((()=>{n=ze(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(qe(s,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(i,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of c.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function H(e,t,n,r,s){const i=N(e,t);if(i)return i;const a=t===J,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},s)):o.push(e.fullPath,s)),y.value=e,se(e,t,n,a),re()}let K;function W(){K||(K=o.listen(((e,t,n)=>{const r=R(e),s=F(r);if(s)return void V(p(s,{replace:!0}),r).catch(g);v=r;const i=y.value;d&&U(M(i.fullPath,n.delta),D()),q(r,i).catch((e=>Z(e,12)?e:Z(e,2)?(V(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===A.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,i)))).then((e=>{e=e||H(r,i,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===A.pop&&Z(e,20)&&o.go(-1,!1)),z(r,i,e)})).catch(g)})))}let X,Y=Be(),ee=Be();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return X&&y.value!==J?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function re(e){return X||(X=!e,W(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset()),e}function se(t,n,s,i){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!s&&j(M(t.fullPath,0))||(i||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&L(e))).catch((e=>te(e,t,n)))}const ie=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:y,addRoute:k,removeRoute:S,hasRoute:x,getRoutes:C,resolve:R,options:e,push:P,replace:$,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(y)}),d&&!oe&&y.value===J&&(oe=!0,P(o.location).catch((e=>{0})));const n={};for(const s in J)n[s]=(0,r.Fl)((()=>y.value[s]));e.provide(l,t),e.provide(u,(0,s.qj)(n)),e.provide(h,y);const i=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=J,K&&K(),K=null,y.value=J,oe=!1,X=!1),i()}}};return ce}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function st(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>T(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>T(e,a)))||s.push(a))}return[n,r,s]}function it(){return(0,r.f3)(l)}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return ue},Mq:function(){return ye},ZF:function(){return ge},KN:function(){return ve}});var r=n(7142),s=n(5168),i=n(223);n(6699),n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(_(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),_(h.get(this))}:function(...t){return _(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),_(r)}}function E(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,l())?new Proxy(e,v):e)}function _(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=E(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=_(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(_(o.result),e.oldVersion,e.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return C.set(t,i),i}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
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
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",N="0.7.24",P=new s.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",$="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",se="9.8.1",ie="[DEFAULT]",oe={[O]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[$]:"fire-app-check-compat",[j]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},fe=new i.LL("app","Firebase",de);
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
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
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
 */const me=se;function ge(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});const o=ae.get(s);if(o){if((0,i.vZ)(e,o.options)&&(0,i.vZ)(n,o.config))return o;throw fe.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(s,c),c}function ye(e=ie){const t=ae.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var s;let i=null!==(s=oe[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}ue(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const we="firebase-heartbeat-database",be=1,Ee="firebase-heartbeat-store";let _e=null;function Te(){return _e||(_e=I(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}}).catch((e=>{throw fe.create("storage-open",{originalErrorMessage:e.message})}))),_e}async function Ie(e){try{const t=await Te();return t.transaction(Ee).objectStore(Ee).get(Se(e))}catch(t){throw fe.create("storage-get",{originalErrorMessage:t.message})}}async function ke(e,t){try{const n=await Te(),r=n.transaction(Ee,"readwrite"),s=r.objectStore(Ee);return await s.put(t,Se(e)),r.done}catch(n){throw fe.create("storage-set",{originalErrorMessage:n.message})}}function Se(e){return`${e.name}!${e.options.appId}`}
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
 */const Ce=1024,Ae=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Ce){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function De(e){ue(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new xe(e)),"PRIVATE")),ve(O,N,e),ve(O,N,"esm2017"),ve("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return s}});var r=n(223);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const i="[DEFAULT]";
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return s}});
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
const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},5417:function(e,t,n){"use strict";function r(e){return"object"===typeof e&&null!==e}function s(e,t){return e=r(e)?e:Object.create(null),new Proxy(e,{get(e,n,r){return"key"===n?Reflect.get(e,n,r):Reflect.get(e,n,r)||Reflect.get(t,n,r)}})}function i(e,t){return t.reduce(((e,t)=>null==e?void 0:e[t]),e)}function o(e,t,n){return t.slice(0,-1).reduce(((e,t)=>/^(__proto__)$/.test(t)?{}:e[t]=e[t]||{}),e)[t[t.length-1]]=n,e}function a(e,t){return t.reduce(((t,n)=>{const r=n.split(".");return o(t,r,i(e,r))}),{})}function c(e,{storage:t,serializer:n,key:r,debug:s}){try{const s=null==t?void 0:t.getItem(r);s&&e.$patch(null==n?void 0:n.deserialize(s))}catch(i){s&&console.error(i)}}function l(e,{storage:t,serializer:n,key:r,paths:s,debug:i}){try{const i=Array.isArray(s)?a(e,s):e;t.setItem(r,n.serialize(i))}catch(o){i&&console.error(o)}}function u(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:r=n},store:i}=t;if(!r)return;const o=(Array.isArray(r)?r.map((t=>s(t,e))):[s(r,e)]).map((({storage:t=localStorage,beforeRestore:n=null,afterRestore:r=null,serializer:s={serialize:JSON.stringify,deserialize:JSON.parse},key:o=i.$id,paths:a=null,debug:c=!1})=>{var l;return{storage:t,beforeRestore:n,afterRestore:r,serializer:s,key:(null!=(l=e.key)?l:e=>e)(o),paths:a,debug:c}}));i.$persist=()=>{o.forEach((e=>{l(i.$state,e)}))},i.$hydrate=({runHooks:e=!0}={})=>{o.forEach((n=>{const{beforeRestore:r,afterRestore:s}=n;e&&(null==r||r(t)),c(i,n),e&&(null==s||s(t))}))},o.forEach((e=>{const{beforeRestore:n,afterRestore:r}=e;null==n||n(t),c(i,e),null==r||r(t),i.$subscribe(((t,n)=>{l(n,e)}),{detached:!0})}))}}n.d(t,{Z:function(){return h}});var h=u()}}]);
//# sourceMappingURL=chunk-vendors.afb1baa0.js.map