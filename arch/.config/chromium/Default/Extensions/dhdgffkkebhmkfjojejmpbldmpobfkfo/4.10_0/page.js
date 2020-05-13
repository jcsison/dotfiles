'use strict';Registry.registerRaw("page.js","289e8b91",(()=>({backup:function(a,I,r,ba){let n,m,b,C,J,D,U,F,ha,t,ia,M,na;const d={};let e={safeWindow:d,safeDocument:{},eval,Context:{D:ba},exec_fn:function(a,b,e){n(new d.Function(a),b,e)},exec_csp:function(a,b,d){const c=`__u__${19831206*e.Context.M_r()+1}`;e.Message.send("csp",{id:c,src:a});e.exec_script(c,b,d)},exec_script:function(b,d,e){const c=a[b];delete a[b];n(c,d,e)}};const N=(b,d)=>{a.console.error(`Tampermonkey sandbox preparation ${d?
"("+d+") ":""}failed. This usually is caused by a third-party extension.`,b);if(d)return()=>{}};try{(()=>{const c=a=>{const c=function(c){return n(a,c,n(b.wrappedJSObject,arguments,[1]))};c.wrappedJSObject=a;return c},Y=(a,b)=>{let c;for(;null!==a&&void 0!==a&&!(c=ha(a,b));)a=F(a);return c},ja={i_N:()=>t=(()=>a=>!("prototype"in a))(),i_SS:()=>ia=(()=>(a,b,c)=>{const d=Y(a,b);if(!d||!d.set||t(d.set))return a[b]=c,!0})(),i_SG:()=>M=(()=>(a,b)=>{const c=Y(a,b);if(!c||!c.get||t(c.get))return a[b]})(),
F_a:()=>n=(()=>{"use strict";const b=a.Function.apply;return(a,c,d)=>{let e;M(a,"apply")===b?e=a.apply(c,d):ia(a,r,b)&&(e=a[r](c,d),delete a[r]);return e}})(),E_u:()=>function(b,c){if(e.exec_eval){const d=`__u__${19831206*e.Context.M_r()+1}`;a[d]=c;return e.Context.F_c(e.Context.eval,a,`(function(that){${b}})((()=>{const k="${d}",r=this[k];delete this[k];return r;})())`)}e.exec_csp(`(function(that){${b}})(this)`,c)},F_c:()=>c(a.Function.call),F_b:()=>m=c(a.Function.bind),F_tS:()=>c(a.Function.toString),
A_fE:()=>J=c(a.Array.prototype.forEach),A_sl:()=>b=c(a.Array.prototype.slice),A_sp:()=>c(a.Array.prototype.splice),A_sh:()=>c(a.Array.prototype.shift),A_j:()=>c(a.Array.prototype.join),A_pu:()=>C=c(a.Array.prototype.push),A_po:()=>c(a.Array.prototype.pop),A_m:()=>c(a.Array.prototype.map),A_c:()=>c(a.Array.prototype.concat),A_f:()=>c(a.Array.prototype.filter),A_iO:()=>c(a.Array.prototype.indexOf),O_k:()=>a.Object.keys,O_dP:()=>a.Object.defineProperties,O_dPy:()=>a.Object.defineProperty,O_gOPN:()=>
a.Object.getOwnPropertyNames,O_gOPD:()=>ha=a.Object.getOwnPropertyDescriptor,O_gOPDs:()=>a.Object.getOwnPropertyDescriptors||(a=>{const b={};for(const c in a)b[c]=ja.O_gOPD(a,c);return b}),O_gPO:()=>F=a.Object.getPrototypeOf,O_tS:()=>c(a.Object.prototype.toString),J_p:()=>U=a.JSON.parse,J_s:()=>D=a.JSON.stringify,c_l:()=>a.console.log.bind(a.console),c_i:()=>a.console.info.bind(a.console),c_w:()=>a.console.warn.bind(a.console),c_e:()=>a.console.error.bind(a.console),c_d:()=>a.console.debug.bind(a.console),
M_f:()=>a.Math.floor,M_r:()=>a.Math.random,M_m:()=>a.Math.max,M_i:()=>na=c(a.MutationEvent.prototype.initMutationEvent),N_tS:()=>c(a.Number.prototype.toString),P_r:()=>a.Promise?a.Promise.resolve.bind(a.Promise):void 0,P_t:()=>a.Promise?c(a.Promise.prototype.then):void 0,P_c:()=>a.Promise?c(a.Promise.prototype.catch):void 0,R_rAAB:()=>a.FileReader?c(a.FileReader.prototype.readAsArrayBuffer):void 0,S_fCC:()=>a.String.fromCharCode,S_m:()=>c(a.String.prototype.match),S_su:()=>c(a.String.prototype.substr),
S_se:()=>c(a.String.prototype.search),S_sp:()=>c(a.String.prototype.split),S_r:()=>c(a.String.prototype.replace),S_cCA:()=>c(a.String.prototype.charCodeAt),S_tLC:()=>c(a.String.prototype.toLowerCase),S_tUC:()=>c(a.String.prototype.toUpperCase),D_pFS:()=>c(a.DOMParser.prototype.parseFromString),X_o:()=>c(a.XMLHttpRequest.prototype.open),X_sRH:()=>c(a.XMLHttpRequest.prototype.setRequestHeader),X_oMT:()=>c(a.XMLHttpRequest.prototype.overrideMimeType),X_gARH:()=>c(a.XMLHttpRequest.prototype.getAllResponseHeaders),
X_gRH:()=>c(a.XMLHttpRequest.prototype.getResponseHeader),X_s:()=>c(a.XMLHttpRequest.prototype.send),X_a:()=>c(a.XMLHttpRequest.prototype.abort),D_n:()=>a.Date.now};Object.keys(ja).forEach(a=>{try{e.Context[a]=ja[a]()}catch(Q){e.Context[a]=N(Q,`internal.${a}`)}});"String Array Object Number parseInt JSON Math Date Event MutationEvent console location Error Uint8Array Blob FileReader DOMParser XMLHttpRequest Function RegExp frames self top document location Promise".split(" ").forEach(b=>{try{d[b]=
a[b]}catch(Q){d[b]=N(Q,`window.${b}`)}});["postMessage","addEventListener","removeEventListener","setTimeout","setInterval","clearTimeout","clearInterval","alert","prompt","confirm","encodeURIComponent",(a=>a.a+a.b)({a:"decodeURI",b:"Component"}),"encodeURI","decodeURI","escape","unescape","atob","btoa","close"].forEach(b=>{try{const c=a[b];d[b]=function(){return n(c,a,arguments)}}catch(Q){d[b]=N(Q,`window.${b}`)}});e.createSafeDocument=a=>{"getElementById createEvent createElement dispatchEvent addEventListener removeEventListener".split(" ").forEach(b=>
{try{const c=a[b];e.safeDocument[b]=function(){return n(c,a,arguments)}}catch(ka){e.safeDocument[b]=N(ka,`document.${b}`)}})};e.createSafeDocument(I)})()}catch(c){return N(c)}try{e.Message=((a,b)=>{const c=function(){return n(b.dispatchEvent,b,arguments)},d=function(){return n(b.addEventListener,b,arguments)},e=function(){return n(b.removeEventListener,b,arguments)},t=(a,c)=>{const d=b.createEvent("MutationEvent");na(d,a,!1,!1,null,null,null,D(c),d.ADDITION);return d};let m,u,r,P,F=1;const M={};let I=
[];const N=(a,b)=>{let c;a&&(c=M[a])&&(c(b),delete M[a])};let R=a=>{const b=U(a.attrName);"message.response"==b.m?N(b.r,b.a):m&&!1===m(b,b.r?a=>{a=t(r,{m:"message.response",a,r:b.r});c(a)}:()=>{})&&C(I,a)};return{init:function(a){P||(P=a);r=`2C_${P}`;u=`2P_${P}`;d(u,R,!1)},send:function(a,b,d){if(d){{const a=++F;M[F]=d;d=a}}else d=null;a=t(r,{m:a,a:b,r:d});c(a)},onMessage:{setListener:function(a,b){m=a;b||(J(I,a=>{R(a)}),I=null)}},cleanup:function(){R&&e(u,R,!1);R=null}}})(d,e.safeDocument),e.Message.init(r),
e.Message.onMessage.setListener(b=>{if(e)if("load"==b.m)e.Context.pageLoaded=!0;else if("DOMContentLoaded"==b.m)e.Context.domContentLoaded=!0;else if("cleanup"==b.m)e.Message.cleanup(),e=null;else if("next"==b.m)if(b.a.id)e.exec_script(b.a.id,e),e.exec_eval=!1;else{if(void 0===e.exec_eval)try{e.exec_eval=m(e.eval,a)("true")}catch(Y){e.exec_eval=!1}e.exec_eval?e.exec_fn(b.a.src,e):e.exec_csp(b.a.src,e)}else return!1},!0)}catch(c){return N(c)}},next:function(a,I,r,ba,n,m,b,C,J,D,U,F,ha,t,ia){{let n=
"";C&&(n+="let V = true;");D&&(n+="let EV = true;");J&&(n+="let ENV = true;");n+=`let logLevel = ${b};`;b="";if(ha||"complete"==document.readyState)b+="Context.pageLoaded |= true;Context.domContentLoaded |= true;";else if(t||"interactive"==document.readyState)b+="Context.domContentLoaded |= true;";a=`${n+`let contextId = "${a}";`+"const Event = function() {};const Window = function() {};Window.prototype = {};"+b}(${ia})(Context, contextId);\n`}return['const backup = this;(function TM_back() {const Context = backup.Context;const copy = function(src) {"use strict";const props = Context.O_gOPN(src);for (let kk, ii=0; (kk=props[ii]) !== undefined; ii++) {Context[kk] = src[kk];};};copy(backup);with (Context) {(() => {"use strict";copy({Context: Context,',
`V:!!${C},`,`ENV:!!${J},`,`TS:!!${U},`,`D:!!${F},`,`use:${m},`,`windowProps:${ba},`,`scripts:${I},`,`powers:${r},`,"_content: false,",`flags:${n},`,'write_listeners: []});const cleanup = evt => {Message.cleanup();safeWindow.removeEventListener("unload", cleanup, false);};safeWindow.addEventListener("unload", cleanup, false);Context.write_listeners.push(d => {Context.createSafeDocument(d);Message.init();});',a,"})();};})();"].join("")},environment:function(a,I){const r=a.V,ba=a.EV,n=a.D,m=a.Message,
b=a.safeWindow,C=window,J=a.safeDocument,D=a.flags,U=a.i_N,F=a.i_SS,ha=a.i_SG,t=a.F_a,ia=a.F_c,M=a.F_b,na=a.F_tS,d=a.A_fE,e=a.A_sl,N=a.A_sp,c=a.A_pu,Y=a.A_po,ja=a.A_sh,ca=a.A_j,Q=a.A_f,ka=a.A_iO,Da=a.A_c,u=a.O_k,oa=a.O_dP,P=a.O_dPy,Fa=a.O_gOPN,Ga=a.O_gOPD,Ha=a.O_gOPDs,Ia=a.O_tS,R=a.J_p,ta=a.J_s,y=a.c_l,Ea=a.c_i,S=a.c_w,pa=a.c_e,T=a.c_d,Ja=a.M_f,xa=a.M_r,ya=a.M_m,Ka=a.P_r,La=a.P_t,Ma=a.P_c,da=a.S_fCC,qa=a.S_m,za=a.S_su,Aa=a.S_sp,ea=a.S_r,ua=a.S_se,Ba=a.S_cCA,va=a.S_tLC,Na=a.S_tUC,Oa=a.R_rAAB,Pa=a.D_pFS,
Qa=a.X_o,Ra=a.X_sRH,Sa=a.X_oMT,Ta=a.X_gARH,Ua=a.X_gRH,Va=a.X_s,Wa=a.X_a,Xa=a.N_tS,ra=a.D_n,sa=b.Promise||(()=>{S("There is no browser Promise support!")});a.domContentLoaded|=0;a.pageLoaded|=0;a.domNodeInserted|=0;a.props={};const la=(()=>{const z=[],G=a=>{if(document.body)a&&(a(),a=null);else{const b=["load","DOMNodeInserted","DOMContentLoaded"],c=()=>{d(b,a=>{J.removeEventListener(a,c,!1)});G(a)};d(b,a=>{J.addEventListener(a,c,!1)})}},g=d=>{c(z,()=>{b.setTimeout(d,1)});a.domContentLoaded&&l.runListeners()};
var l={runListeners:function(){let a;for(;a=ja(z);)a()},run:function(b){const d=()=>{wa.create(b)};"document-start"==b.script.options.run_at?(n&&T(`env: run "${b.script.name}" ASAP -> document-start`),wa.create(b)):"document-body"==b.script.options.run_at?(n&&T(`env: schedule "${b.script.name}" for document-body`),G(d)):"context-menu"==b.script.options.run_at?(n&&T(`env: run "${b.script.name}" ASAP -> context-menu`),wa.create(b)):"document-end"==b.script.options.run_at?(n&&T(`env: schedule "${b.script.name}" for document-end`),
c(z,d),a.domContentLoaded&&l.runListeners()):(n&&T(`env: schedule "${b.script.name}" for document-idle`),g(d))}};return l})();(r||n)&&T(`env: initialized (content, id:${za(I,0,10)}..., ${b.location.origin}${b.location.pathname}) `);const Z={createUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const b=16*xa()|0;return Xa("x"==a?b:b&3|8,16)})},toType:function(a){return qa(Ia(a,{}),new b.RegExp("\\s([a-z|A-Z]+)"))[1]}},B={UTF8:{encode:function(a){return b.unescape(b.encodeURIComponent(a))},
decode:function(a){return b.decodeURIComponent(b.escape(a))}},Base64:{encode:function(a){let c="";for(let b=0;b<a.length;b++)c+=da(Ba(a,b)&255);return b.btoa(c)},decode:function(a){return b.atob(a)}},str2arrbuf:function(a){const c=new b.Uint8Array(a.length);for(let b=0;b<a.length;b++)c[b]=Ba(a,b);return c.buffer},arrbuf2str:function(a){let c="";a=new b.Uint8Array(a);for(let b=0;b<a.length;b+=32687)c+=t(da,null,a.subarray(b,b+32687));return c}},X=(()=>{const a={};let b;const g=b=>{let l=[],g=[];var e=
{postMessage:function(a){m.send("port.message",{response_id:b,value:a})},onMessage:{addListener:function(a){c(l,a)}},onDisconnect:{addListener:function(a){c(g,a)}},disconnect:function(){m.send("port.message",{response_id:b,disconnect:!0});e=g=l=null;delete a[b]}};a[b]={message:function(a){l&&d(l,b=>{b(a)})},disconnect:function(c){g&&d(g,a=>{a(c)});e=g=l=null;delete a[b]}};return e};return{message:function(c){let d;c.connect?b&&b(c.destination,g(c.response_id)):(d=a[c.response_id])?c.disconnect?d.disconnect():
d.message(c.value):n&&S("ports: unkown id",c.response_id,c)},connect:function(a){const b=Z.createUUID();m.send("port.message",{response_id:b,connect:!0,destination:a});return g(b)},onConnect:{addListener:function(a){b=a}}}})(),Ca=(()=>{const a={objs:{},push:function(b,c){0!==c&&1!==c&&(c=0);const d=Ja(19831206*xa()+1);a.objs[d]={fn:b,prio:c};return d},remove:function(b){delete a.objs[b]},get:function(b){const g=[];for(let l=0;1>=l;l++)d(u(a.objs),d=>{a.objs[d].prio!==l||void 0!==b&&d!=b||c(g,a.objs[d].fn)});
return void 0===b?g:g[0]},finalize:function(b){if(void 0===b){b=a.get();for(var c=0;c<b.length;c++)b[c]()}else return a.objs[b]&&(c=a.objs[b].fn(),delete a.objs[b]),c}};return a})(),g=D.statistics?(a,c)=>{b.setTimeout(()=>{m.send("api",{name:a,type:c},null)},1)}:()=>{},aa=(()=>{const a=(a,b)=>{g("GM_openInTab");let d=null,e=!1,l=null,t;const u=(()=>{const a=[];return{run:function(b){b&&c(a,b);if(d)for(;a.length;)Y(a)()}}})();let q=X.connect("openInTab");q.onMessage.addListener(a=>{a.tabId?e?q&&q.postMessage({close:!0}):
(d=a.tabId,u.run()):a.name?t=a.name:a.closed&&(e=!0,l&&(l(),l=void 0))});q.onDisconnect.addListener(()=>{q=null});q.postMessage({method:"openTab",url:a,options:b});a={};oa(a,{close:{value:function(){g("GM_openInTab.close");e?n&&T("env: attempt to close already closed tab!"):q&&q.postMessage({close:!0})}},closed:{get:function(){g("GM_openInTab.closed");return e}},onclose:{get:function(){return l},set:function(a){g("GM_openInTab.onclose=");l=a}},name:{get:function(){return t},set:function(a){u.run(()=>
{g("GM_openInTab.name=");q&&q.postMessage({name:a})})}}});return a},e=function(a,c){g("GM_download");const d="Object"===Z.toType(a)?a:{url:a,name:c},e=(a,c)=>{c=c||{};a&&b.setTimeout(()=>{t(a,c,[c])},1)};let l=X.connect("download");l.onMessage.addListener(a=>{try{a.load?d.onload&&e(d.onload,a.data):a.progress?d.onprogress&&e(d.onprogress,a.data):a.timeout?d.ontimeout&&e(d.ontimeout,a.data):d.onerror&&e(d.onerror,a.data)}catch(Ya){y("env: Error: TM_download - ",Ya,d)}});l.onDisconnect.addListener(()=>
{l=null});l.postMessage({details:d});return{abort:function(){if(l)return l.postMessage({cancel:!0}),l.disconnect(),l=null,!0}}},C={};return{log:function(){g("GM_log");t(y,this,arguments)},addStyle:(a,b)=>{g("GM_addStyle");const c=Z.createUUID();m.send("addStyle",{css:a,id:c},b?()=>{b()}:null);return J.getElementById(c)},addScript:(a,b)=>{g("GM_addScript");const c=Z.createUUID();m.send("addScript",{code:a,id:c},b?()=>{b()}:null);return J.getElementById(c)},closeTab:a=>{g("window.close");m.send("closeTab",
null,a?()=>{a()}:null)},focusTab:a=>{g("window.focus");m.send("focusTab",null,a?()=>{a()}:null)},setClipboard:(a,b,c)=>{g("GM_setClipboard");m.send("setClipboard",{content:a,info:b,id:I},c?()=>{c()}:null)},syntaxCheck:(a,b)=>{m.send("syntaxCheck",{code:a},a=>{b(a)})},of:function(l){const q=l.script,z=(()=>{let a=[];const E=l.storage;let V=0;const f=(a,c)=>{if("string"===typeof a){const h=a[0];a=za(a,1);switch(h){case "b":return"true"===a;case "n":return b.Number(a);case "x":return B.UTF8.decode(B.Base64.decode(a));
case "o":try{return R(a)}catch(w){y(`values: parseValueFromStorage: ${w}`)}return c;default:return a}}else return c},A=(b,c,h,V)=>{c!=h&&d(a,a=>{if(a&&a.key==b&&a.cb)try{a.cb(b,f(c),f(h),V)}catch(K){n&&S(`values: change listener of "${b}" failed with: ${K.message}`)}})},e=a=>{p.postMessage({method:"saveStorageKey",uuid:q.uuid,key:a,value:E.data[a],id:I,ts:E.ts})};var p=X.connect("values");p.onMessage.addListener(a=>{a.storage&&d(u(a.storage.data),b=>{const c=E.data[b];E.data[b]=a.storage.data[b];
const h=E.data[b];r&&y(`values: message - config key ${b}: ${c} -> ${h}`);A(b,c,h,!0)});a.removed&&(E[a.removed]=void 0)});p.onDisconnect.addListener(()=>{n&&y("values: port disconnected")});p.postMessage({method:"addStorageListener",uuid:q.uuid,id:I});return{set:function(a,b){g("GM_setValue");const c=E.data[a];E.ts=ra();var h=E.data;{let a=(typeof b)[0];switch(a){case "o":try{b=a+ta(b)}catch(Za){y(Za),b=void 0}break;case "s":const c=da(8232),h=da(8233);if(-1!==ua(b,c)||-1!==ua(b,h))a="x",b=B.Base64.encode(B.UTF8.encode(b));
b=a+b;break;default:b=a+b}}h[a]=b;e(a);A(a,c,E.data[a],!1)},get:function(a,b){g("GM_getValue");return f(E.data[a],b)},remove:function(a){g("GM_deleteValue");const b=E.data[a];E.ts=ra();delete E.data[a];e(a);A(a,b,E.data[a],!1)},list:function(){g("GM_listValues");return u(E.data)},registerChangeListener:function(b,h){g("GM_addValueChangeListener");const d=++V;c(a,{id:d,key:b,cb:h});return d},unregisterChangeListener:function(b){g("GM_removeValueChangeListener");a=Q(a,a=>a.id!==b?!0:!1)}}})(),G=(()=>
({getText:function(a){g("GM_getResourceText");for(let b=0;b<q.resources.length;b++){const c=q.resources[b];if(c.name==a&&!c.failed){try{if(null!==c.content)return B.UTF8.decode(c.content)}catch(f){}return""}}return null},getURL:function(a){g("GM_getResourceURL");for(let b=0;b<q.resources.length;b++){const c=q.resources[b];if(c.name==a&&!c.failed){if(null===c.content)return"";try{return`data:${c.meta||"application"};base64,${B.Base64.encode(c.content)}`}catch(f){}return c.url}}return null}}))(),F=
(()=>({set:function(a,b){g("GM_setTab");m.send("tabs",{action:"set",uuid:q.uuid,tab:a},b?()=>{b()}:null)},get:function(a){g("GM_getTab");m.send("tabs",{action:"get",uuid:q.uuid},a?b=>{a(b||{})}:null)},getAll:function(a){g("GM_getTabs");m.send("tabs",{action:"list",uuid:q.uuid},a?b=>{a(b||{})}:null)}}))(),N=a=>{g("GM_xmlhttpRequest");let h=!1;const V=a.context;delete a.context;const f=(()=>{const a={};d(u(b.XMLHttpRequest.__proto__),b=>{a[b]=!0});const c=()=>{};d(u(b.XMLHttpRequest),v=>{a[v]||(c[v]=
b.XMLHttpRequest[v])});return c})();let A=()=>{h=!0};const e=(a,c,v)=>{c=c||{};!a||h&&!v||b.setTimeout(()=>{c.__proto__=f;t(a,c,[c])},1)};"object"===typeof a.url&&a.url.href&&(a.url=a.url.href);const p=(a,c)=>{const v=new b.FileReader;v.onload=()=>{c(B.arrbuf2str(v.result))};Oa(v,a)},k=(a,d)=>{let v,f,H,h=Z.toType(a);if("Blob"===h||"File"===h)p(a,b=>{d({type:h,value:b,meta:a.type,name:a.name,lastModified:a.lastModified})});else if("FormData"===h)if(f=a.keys&&a.getAll?a.keys():null){let b;const h=
{};for(v=[];!(b=f.next()).done;)c(v,b.value);H=()=>{if(v.length){const b=Y(v);let c=a.getAll(b);-1===ua(b,/\[\]$/)&&(c=c[0]);k(c,a=>{h[b]=a;H()})}else d({type:"FormData",value:h})};H()}else d({error:h});else if(!(h=Z.toType(a))||"Array"!==h&&"Object"!==h)d({value:a});else{let c,K,V=0;f=0;"Object"===h?(v=u(a),K=a=>a<v.length?v[a]:null,c={}):(K=b=>b<a.length?b:null,c=[]);H=()=>{const v=K(V);null===v?d({type:h,value:c}):k(a[v],a=>{a.error?d(a):(c[v]=a,V++,1024>f++?H():(f=0,b.setTimeout(H,1)))})};H()}},
ma=a=>{const b={};a&&a.split("\n").forEach(a=>{(a=a.match(/^([^:]+): ?(.*)/))&&(b[a[1].toLowerCase()]=a[2]||"")});return b},L=(a,c,v,d)=>{if("text"==v)a="document"==c?a.document:a;else if("arraybuffer"==c)a=B.str2arrbuf(a);else if("blob"==c)a=new b.Blob([B.str2arrbuf(a)],{type:d});else if("json"==c)a=R(a);else if("document"==c){if(a.error){S("GM_xmlhttpRequest:",a.error);return}c=new b.DOMParser;return Pa(c,a.document,a.contentType)}return a};let w=!0;(b=>{if(a.url){const c=a.url.substr(0,5);if(-1!=
["data:","blob:"].indexOf(c))return w=!1,b()}if(!a.data)return b();k(a.data,c=>{c.error?(w=!1,S("GM_xmlhttpRequest:",`unable to handle data type ${c.error}. Going to use default xhr as fallback.`)):(a.binary&&(c.type="Blob"),a.data=c,a.data_type="typified");b()})})(()=>{"use strict";if(!h)if(w){let f=X.connect("xhr"),k=[];a.headers&&d(u(a.headers),b=>{"cookie"===va(b)&&(a.cookie=a.headers[b],delete a.headers[b])});f.postMessage({method:"xhr",details:a,callbacks:{onloadstart:!!a.onloadstart,onload:!!a.onload,
ondone:!!a.onloadend,onreadystatechange:!!a.onreadystatechange,onerror:!0,ontimeout:!!a.ontimeout,onprogress:!!a.onprogress,onpartial:!0},id:I,url:b.location.href,uuid:q.uuid});f.onMessage.addListener(b=>{b.data&&V&&(b.data.context=V);if(b.data&&b.onload){k.length&&(b.data.response_data=ca(k,""),k=null);if(b.data.response_data){const c=b.data.response_data,f=b.data;d(["response_data"],a=>{delete b.data[a]});const k={response:function(b,c){g(`${"GM_xmlhttpRequest"}.response[${a.responseType||"unknown"}]`);
const f=a.responseType?va(a.responseType):"";let d="binary/octet-stream";c&&(d=ma(c.responseHeaders)["content-type"]||d);return L(b,f,null,d)},responseText:function(b){g("GM_xmlhttpRequest.responseText");const c=a.responseType?va(a.responseType):"";return L(b,c,"text")},responseXML:function(a){g("GM_xmlhttpRequest.responseXML");return L({document:a,contentType:"text/xml"},"document")}};d(u(k),a=>{P(b.data,a,{get:function(){try{return k[a](c,f)}catch($a){S("GM_xmlhttpRequest:",$a)}}})})}e(a.onreadystatechange,
b.data);e(a.onload,b.data)}else if(b.onreadystatechange)4!=b.data.readyState&&e(a.onreadystatechange,b.data);else if(b.onpartial)c(k,b.data.partial);else if(b.onerror)b.exception&&pa(b.exception),e(a.onerror,b.data);else if(b.ondone)e(a.onloadend,b.data);else{const c=Q(["onloadstart","onprogress","ontimeout"],a=>!!b[a])[0]||"onerror";e(a[c],b.data)}});r&&f.onDisconnect.addListener(()=>{y("env: GM_xmlhttpRequest.onDisconnect! :)")});A=()=>{g("GM_xmlhttpRequest.abort");f&&(f.disconnect(),f=null,h=!0,
e(a.onabort,null,!0))}}else{const c=new b.XMLHttpRequest;void 0===a.async&&(a.async=!0);Qa(c,a.method,a.url,a.async,a.user,a.password);a.headers&&d(u(a.headers),b=>{Ra(c,b,a.headers[b])});a.overrideMimeType&&Sa(c,a.overrideMimeType);a.responseType&&(c.responseType=a.responseType);d("abort error load loadstart progress readystatechange timeout".split(" "),b=>{const d="abort"==b;c[`on${b}`]=()=>{var f="";let k=a.url;if(2<c.readyState&&(f=Ta(c),4==c.readyState)){f&&(f=ea(f,/TM-finalURL[0-9a-zA-Z]*: .*[\r\n]{1,2}/,
""));let a;try{a=Ua(c,`TM-finalURL${D.short_id}`)}catch(cb){}a&&(k=a)}f={readyState:c.readyState,status:"",statusText:"",responseHeaders:f,finalUrl:k,context:V};4==c.readyState&&(c.responseType?f.response=c.response:(f.responseText=c.responseText,f.responseXML=c.responseXML),f.status=c.status,f.statusText=c.statusText);e(a[`on${b}`],f,d)}});Va(c,a.data);A=()=>{g("GM_xmlhttpRequest.abort");Wa(c);h=!0}}});return{abort:function(){A()}}},J=a=>{const b={};d(u(a),c=>{b[c]=a[c]});b.id=I;g("GM_notification");
b.text||b.highlight?m.send("notification",b,a=>{if(b.onclick&&a.clicked)b.onclick();if(b.ondone)b.ondone(!0===a.clicked)}):S("GM_notification: neither a message text nor highlight options were given!")};let M;const T=()=>{if(M)return M;const a=l.script,b={id:1,enabled:1,hash:1,fileURL:1},c={script:{}};d(u(a),f=>{b[f]||(c.script[f]=a[f])});const f=a.options.updateURL||a.options.fileURL;c.script["run-at"]=a.options.override.run_at||a.options.run_at;c.script.excludes=a.options.override.orig_excludes;
c.script.includes=a.options.override.orig_includes;c.script.matches=a.options.override.orig_matches;c.script.grant=a.grant;c.script.unwrap=!1;c.scriptMetaStr=l.header;c.scriptSource=l.code;c.scriptWillUpdate=!!f;c.scriptUpdateURL=f;c.version=D.version;c.scriptHandler="Tampermonkey";c.isIncognito=D.inIncognitoContext;c.isFirstPartyIsolation=D.isFirstPartyIsolation;c.downloadMode=D.downloadMode;return M=c};let W;const U=(a,b)=>{g("GM_webRequest");const c=()=>{W==f&&(W=null);f=null};W&&W.disconnect();
var f=W=X.connect("webRequest");b&&f.onMessage.addListener(a=>{b(a.type,a.message||"ok",a.details)});f.onDisconnect.addListener(c);f.postMessage({rules:a,uuid:q.uuid});return{abort:function(){g("GM_webRequest.abort");f&&f.disconnect();c()}}},L=(()=>{let a=0;const c={},d={register:function(f,h,e){g("GM_registerMenuCommand");const L=++a,k=X.connect("registerMenuCommand");k.onMessage.addListener(a=>{"run"===a&&b.setTimeout(h,1)});k.onDisconnect.addListener(()=>{d.unregister(L)});k.postMessage({method:"register",
name:f,uuid:q.uuid,accessKey:e});r&&y(`env: ${"registerMenuCommand"} ${na(h)}`);c[L]=k.disconnect;return L},unregister:function(a){g("GM_unregisterMenuCommand");r&&y(`env: ${"unregisterMenuCommand"} ${a}`);let b;if(b=c[a])b(),delete c[a]}};return d})(),ma=(()=>{"use strict";const a=(a,c)=>({action:a,uuid:q.uuid,url:b.location.href,details:c});return{set:function(b,c){g("GM_cookie.set");m.send("cookie",a("set",b),c?a=>{c(a.error)}:null)},delete:function(b,c){g("GM_cookie.delete");m.send("cookie",a("delete",
b),c?a=>{c(a.error)}:null)},list:function(b,c){g("GM_cookie.list");m.send("cookie",a("list",b),c?a=>{c(a.cookies,a.error)}:null)}}})();C[l.script.uuid]=C[l.script.uuid]||{getInfo:T,registerMenuCommand:L.register,unregisterMenuCommand:L.unregister,download:e,webRequest:U,openInTab:a,setValue:z.set,getValue:z.get,deleteValue:z.remove,listValues:z.list,addValueChangeListener:z.registerChangeListener,removeValueChangeListener:z.unregisterChangeListener,getResourceText:G.getText,getResourceURL:G.getURL,
notification:J,xmlhttpRequest:N,cookie:ma,setTab:F.set,getTab:F.get,getTabs:F.getAll};return C[l.script.uuid]}}})();var wa=(()=>{const z=(a,b,c,e)=>{const h=Ha(b);d(u(h),c=>{const d=h[c];if(!d||!d.get||U(d.get)||e)"function"===typeof b[c]?a[c]=M(b[c],b):(()=>{P(a,c,{get:function(){"use strict";return b[c]}})})()});d(u(c),b=>{a[b]=c[b]});return a},G=(a,c,d,e,g)=>{const f=c[d],h=typeof f;e&&"string"===h?c[d]=new b.Function(f):g&&"function"===h&&(c[d]=function(){return t(f,g,arguments)});return t(a,C,c)},
W=(a,c,h,e)=>{const g={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:!0,srcElement:null,target:null,timeStamp:ra()};h="string"===typeof h?new b.Function(h):h;const f=new Event;d(u(g),a=>{f[a]=g[a]});d(u(c),a=>{f[a]=c[a]});f.type=a;t(h,e,[f])},l=(a,b,c,e)=>{void 0===e&&(e=(a,b)=>b);d(Da(["GM_info","GM.info"],b),b=>{let d;const h=c[b];h&&(d=e(b,h))&&
(a[b]=d)})},q=(a,b)=>{void 0===b&&(b=100);return b&&a&&(a==document||q(a.parentNode,b-1))},I=(()=>{let b=null;return c=>{b||(b={instance:c,is_open:!1},d(["write","writeln","open","close"],h=>{b[h]=c[h];c[h]=function(){let e=!1;-1!=ka(["write","writeln","open"],h)?b.is_open?e=!0:b.is_open=!0:"close"===h&&(b.is_open=!1);!e&&b.is_open&&m.send("document.write");const g=document.documentElement,f=t(b[h],c,arguments);if(!e&&b.is_open)return g!==document.documentElement&&(b.instance!==c&&(b=null,I(document)),
d(a.write_listeners,a=>{a(document)})),f}}))}})(),J={},B=[],Q=[],R=(d,e,h)=>{let g;Q.forEach(a=>{a.object===d&&(g=!0)});if(!g){const g={object:d,addEventListener:d.addEventListener,removeEventListener:d.removeEventListener};Q.push(g);const f=[],l=a=>{for(let b=0;b<f.length;b++)if(f[b].fn===a)return b};d.removeEventListener=function(a,b,c){c=!!c;let d,k,e;if(void 0!==(d=l(b))&&(k=f[d].listeners)){if(e=k[`${a}-${c}`])t(g.removeEventListener,this,[a,e,c]),delete k[`${a}-${c}`];Fa(k).length||N(f,d,1)}else return t(g.removeEventListener,
this,arguments)};const x=(a,d,f,e)=>{if(d){let c=B.length;d=b.parseInt(ca(["DOMContentLoaded"==f?1:2,e?1:2,e?d:3-d,ra()],"0"));for(f=0;f<B.length;f++)if(e=B[f],!e||!e.prio||e.prio>d){c=f;break}N(B,c,0,{prio:d,fn:a})}else c(B,{fn:a})};d.addEventListener=function(d,k,A){(r||ba)&&y(`env: addEventListener ${d}`);const p=this;if(k&&(1==e&&"load"==d||"DOMContentLoaded"==d||"DOMNodeInserted"==d)){A=!!A;var w;try{try{throw new b.Error;}catch(K){const a=/tms_[0-9a-f_]+/;var H=K.stack||K.stacktrace;if(H){const b=
Aa(H,"\n");for(let c,d=0;d<b.length&&(!(c=qa(b[d],a))||!(w=J[c[0]]));d++);}else{const c=(d,f)=>{void 0===f&&(f=10);if(0===f)return null;if(d.caller){let k,e;try{return e=na(d.caller),qa(e,new b.RegExp("^function[^(]+"))&&(void 0).length&&(k=qa((void 0)[0],a))?k[0]:c(d.caller,f-1)}catch(ab){n&&S("env: unable to detect caller context",ab)}}return null};let d;if(d=c(arguments.callee))w=J[d]}}}catch(K){n&&pa(`env: Error: event ${d}`,K)}if(w&&"document-idle"!==w.run_at&&(w=null,"load"==d?a.pageLoaded&&
(w=()=>{var a=k,c=p.document||p;(r||ba)&&y("env: postLoadEvent!");c=c||document;W("load",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:c,relatedNode:c,srcElement:c},a,p)},x(w,e,d,A)):"DOMContentLoaded"==d&&a.domContentLoaded&&(w=()=>{var a=k,c=p.document||p;(r||ba)&&y("env: postDomEventListener!");c=c||document;W("DOMContentLoaded",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,
target:c,relatedNode:c,srcElement:c},a,p)},x(w,e,d,A)),w)){b.setTimeout(()=>{if(B.length){const a=ja(B);a&&a.fn&&a.fn()}},1);return}H=function(a){return G(ia,[k,this,h(a)],0,!0,p)};void 0===(w=l(k))&&(w=f.length,c(f,{fn:k,listeners:{}}));f[w].listeners[`${d}-${A}`]=H;return t(g.addEventListener,p,[d,H,A])}return t(g.addEventListener,p,arguments)};try{const a=()=>"[native code]";[d.addEventListener,d.removeEventListener].forEach(b=>{F(b,"toString",a)})}catch(p){}}},X=a=>{a.__evaluate||(oa(a,{__evaluate:{value:a.evaluate,
enumerable:!1,configurable:!1}}),a.evaluate=function(a,b,c,d,f){r&&y(`env: document.evaluate ${a}`);b||(b=this);let e;if("undefined"!=typeof XPathResult){let h=a,g=null;try{e=this.__evaluate(h,b,c,d,f)}catch(fa){g=fa}let k=!1;try{k|=!!e.snapshotLength}catch(fa){}try{k|=!!e.singleNodeValue}catch(fa){}if(k||"."==a[0]||q(b))r&&y(`env: queried document for ${h}`);else{r&&y(`env: query added elem for ${h}`);h=("/"==a[0]?".":"./")+a;try{e=this.__evaluate(h,b,c,d,f)}catch(fa){}}r&&y("env: query returned ",
e,g);if(!k&&g)throw g;}else r&&y("env: XPathResult == undefined, but selectNodes via ",a),e=b.selectNodes(a);return e},c(Ca,()=>{a.evaluate=a.__evaluate}))},Y=(c,e)=>{const h=["eval"],g={};d(u(c),a=>{c[a].context_prop&&(g[(a.split(".")||[])[1]]=!0)});const l=(a,c,e,l)=>{const f=b=>b===c?a:b,p=(a,b,c,d)=>{c||(c=a);const e=a[b];a=function(){"use strict";let a=t(e,c,arguments);d&&(a=d(a));return a};a.__proto__=e;a.prototype=e.prototype;return a},n=c=>{let d;const e=c.substr(2);let f;P(a,c,{get:function(){return d},
set:function(c){"use strict";(d=c)&&!f?(f=function(){if("function"===typeof d)return t(d,a,arguments)},b.addEventListener(e,f,!0)):!d&&f&&(b.removeEventListener(e,f,!0),f=null)}})},w=(b,d,e,k)=>{let g,h,v;const O={enumerable:!0,configurable:!0};(v="function"===typeof d)?O.get=d:O.get=function(){"use strict";k&&k.get_cb&&t(k.get_cb,this,[arguments,w]);return h?g:f(c[b])};if("function"===typeof e)O.set=e;else if(!v||e)O.set=c=>{k&&k.overwrite?P(a,b,{value:c,enumerable:!0,configurable:!0}):(g=c,h=!0)};P(a,
b,O)};d(u(l),a=>{e[a]=e[a]||!1!==l[a]});const H=D.sandbox_allow_getters,K=D.detect_constructors_by_keys;d(u(e),b=>{let d,k,v,q,m,A,r,z,fa,x,E,ma,y,L;try{let O;(O=Ga(c,b))&&O.get&&(m=!U(O.get));try{if(!(k=l[b])||k.needs_grant&&!0!==g[b])if((d=e[b])&&d.event)y=!0;else if(O&&O.get)if(m)if(H)r=!0;else return;else r=()=>{"use strict";return f(t(O.get,C))};else"function"===(q=typeof(v=c[b]))?d.proto?A=!0:(O.enumerable||!(K&&u(v).length||!U(v)))&&-1==ka(h,b)&&"bind"in v?E=!0:x=!0:"number"===q||"string"===q?
r=!0:x=!0;else if(k.wrap)A=!0,ma=k.that;else if(k.direct)x=!0;else if(k.enhance)L=k.enhance;else if(k.get||k.set)r=k.get,z=k.set,fa=k.opts}catch(db){r=z=!0}if(L)a[b]=L;else if(!m||H)y?n(b):r||z?w(b,r,z,fa):A?a[b]=p(c,b,ma,f):x?a[b]=f(c[b]):E&&(a[b]=M(c[b],c))}catch(bb){S(`env: error while creating a new sandbox[${b}]: ${bb.message}`)}});return a};return(()=>{const c=new Window,g={setTimeout:{enhance:function(){"use strict";return G(b.setTimeout,arguments,0,!0,c)}},setInterval:{enhance:function(){"use strict";
return G(b.setInterval,arguments,0,!0,c)}},close:{needs_grant:!0,get:function(){"use strict";return b.self==b.top?a=>aa.closeTab(a):b.close}},focus:{needs_grant:!0,get:function(){return a=>{"use strict";return aa.focusTab(a)}}},location:{get:!0,set:function(a){"use strict";b.location.href=a}},name:{get:function(){"use strict";return ha(C,"name")},set:function(a){"use strict";F(C,"name",a)}},event:{get:!0,set:!0,opts:{overwrite:!0}},document:{get:function(){"use strict";const a=b.document;e(a);return a}},clearInterval:{get:function(){"use strict";
return b.clearInterval}},clearTimeout:{get:function(){"use strict";return b.clearTimeout}},addEventListener:{enhance:function(){"use strict";return G(b.addEventListener,arguments,1,!0)}},removeEventListener:{enhance:function(){"use strict";return G(b.removeEventListener,arguments,1,!0)}}};(()=>{let a=ya(b.frames.length,7);g.length={get:!0,opts:{get_cb:function(c,d){"use strict";c=b.frames.length;for(let e=a;e<c;e++)d(b.String(e),{get:!0});a=ya(c,a)}}};for(let c=0;c<a;c++)g[b.String(c)]={get:!0}})();d(u(b),a=>
{b[a]!=C&&(g[a]=g[a]||{enhance:b[a]})});const h=l(c,C,a.windowProps,g),p={context:h,filter:function(a){"use strict";return a==C?h:a},filterEvent:function(a){const b={};for(const c in a)if("function"===typeof a[c])b[c]=(()=>{const b=c;return function(){return t(a[b],a,arguments)}})();else{const d=p.filter(a[c]);b[c]=d}return b}};return p})()},da=()=>z({},b.console,{debug:T,log:y,info:Ea,warn:S,error:pa},!1),la=(e,g,h,l,q,f)=>{let r=null;const m=()=>"[Tampermonkey property]";try{const p=l.sandboxes[e.uuid],
k=["context","fapply"],n=[void 0,void 0],z=l.elements[e.uuid];d(u(z),a=>{const b=z[a];b.overwrite?(c(k,a),c(n,b.value)):b.context_prop||(c(k,a),c(n,`context.${a}`),b.getter?P(p,a,{get:b.getter}):p[a]=b.value);b.protect&&p[a]&&F(p[a],"toString",m)});let w;r=ca(["((context, fapply, console) => {","with (context) {","(module => {",'"use strict";',"try {",D.measure_scripts?`console.time("${w=`SCRIPT RUN TIME[${e.name.replace(/\W+/g," ")}]`}");\n`:"","fapply(module, context, [",ca(n,","),"]);",D.measure_scripts?
`console.timeEnd("${w}");\n`:"","} catch (e) {","if (e.message && e.stack) {","console.error(\"ERROR: Execution of script '",ea(e.name,new b.RegExp("[\"']","g"),"\\$1"),"' failed! \" + e.message);",'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));',"} else {","console.error(e);","}","}","})","(function ",q,"(",ca(k,","),") {",D.enforce_strict_mode?'"use strict";\n':"",h,g,"\n","})","}","})(that.context, that.fapply, that.console);\n",f?`//# sourceURL=${f}\n`:
""],"");const H={context:p,fapply:t,console:da()};a.E_u(r,H)}catch(p){aa.syntaxCheck(ca([h,g],""),a=>{let c="";if(a.errors){const b=Aa(h,"\n").length-1;let e="";a.errors&&d(u(a.errors),c=>{if((c=a.errors[c])&&0<=c.line&&c.reason){const a=c.line;e+=ca([a>b?"script:":"require:"," (",c.code,") ",ea(c.reason,/.$/,"")," on line: ",a>b?a-b:a," at character: ",c.character,"\n"],"")}});c=`JSHINT output:\n${e}`}else c=g;const f=p.stack?ea(p.stack,/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g,
""):"";n||a.errors?pa(`Syntax error @ "${e.name}"!\n##########################\n${c}##########################\n\n${f}`):pa(`Syntax error @ "${e.name}"!\n\n`,f);b.setTimeout(()=>{throw p;},1)})}};return{create:function(q){const m=q.script,h={},z=-1!==ka(m.grant,"none"),G=`${m.namespace}_${z}`;void 0===a.props[G]&&(a.props[G]={sandboxes:{},elements:{}},c(Ca,()=>{a.props[G]=null}));h.CDATA={value:function(a){g("CDATA");this.src=a;this.toXMLString=this.toString=function(){return this.src}}};h.uneval=
{value:function(a){g("window.uneval");try{return`\\$1 = ${ta(a)};`}catch(K){y(K)}}};h.define={value:void 0};h.module={value:void 0};h.exports={value:void 0};const f={},A={},x={},p={},k=aa.of(q);g(m.options.run_at||"<default>","run_at");if(z)g("none","grant");else{g("sandbox","grant");h.window={value:"context",overwrite:!0};const a={window:C};d(u(a),b=>{const c=`unsafe${ea(b,/^(.)/g,a=>Na(a))}`;h[c]={value:a[b]};-1!=ka(m.grant,c)&&g(c,"grant")});h.console={value:da()};h.cloneInto={value:function(a){g("compat.cloneInto");
return a}};h.exportFunction={value:function(a,b,c){g("compat.exportFunction");c&&void 0!==c.defineAs&&(b[c.defineAs]=a);return a}};h.createObjectIn={value:function(a,b){g("compat.createObjectIn");const c={};b&&void 0!==b.defineAs&&(a[b.defineAs]=c);return c}};f.addStyle=aa.addStyle;f.addScript=aa.addScript;f.deleteValue=k.deleteValue;f.listValues=k.listValues;f.getValue=k.getValue;f.setValue=k.setValue;f.log=aa.log;f.registerMenuCommand=k.registerMenuCommand;f.unregisterMenuCommand=k.unregisterMenuCommand;
f.openInTab=k.openInTab;f.addValueChangeListener=k.addValueChangeListener;f.removeValueChangeListener=k.removeValueChangeListener;p.xmlhttpRequest=k.xmlhttpRequest;p.download=k.download;f.webRequest=k.webRequest;A.getTab=k.getTab;f.setTab=k.setTab;f.saveTab=k.setTab;A.getTabs=k.getTabs;f.getResourceText=k.getResourceText;p.getResourceURL=k.getResourceURL;A.setClipboard={cb:2,fn:aa.setClipboard};const b=a=>function(){const b=Ka(t(a,this,arguments));F(b,"then",a=>La(b,a));F(b,"catch",a=>Ma(b,a));return b},
c=(a,b)=>{let c;const e=new sa((e,f)=>{const g={},h=b.onload,k=b.ontimeout,l=b.onerror;d(u(b),a=>{g[a]=b[a]});g.onerror=function(a){f(a);l&&t(l,this,arguments)};g.ontimeout=function(a){f(a);k&&t(k,this,arguments)};g.onload=function(a){e(a);h&&t(h,this,arguments)};const m=a(g).abort;!0===c?m():c=m});F(e,"abort",()=>{c?c():c=!0});return e};d(u(p),a=>{x[`GM_${a}`]={value:p[a]}});d(u(A),a=>{const b=A[a];x[`GM_${a}`]={value:b.fn||b};x[`GM.${a}`]={value:function(){let a,c=[];if(void 0===b.cb)a=b;else{a=
b.fn;for(let a=0;a<b.cb;a++)c.push(arguments[a]||void 0)}return new sa(b=>{t(a,this,[...c,b])})}}});d(u(f),a=>{const c=f[a];x[`GM_${a}`]={value:c};x[`GM.${a}`]={getter:function(){return b(c)}}});x["GM.getResourceUrl"]={getter:function(){return b(p.getResourceURL)}};x["GM.xmlHttpRequest"]={value:function(a){return c(p.xmlhttpRequest,a)}};x["GM.download"]={value:function(a){return c(p.download,a)}};x.GM_notification={value:function(a,b,c,e){let f=null;const g="timeout text image title highlight silent".split(" ");
let h=null;const l={};"object"===typeof a&&(h=a);h?(d(g,a=>{l[a]=h[a]}),f=h.ondone,e=h.onclick,"function"===typeof b&&(f=b)):(l.image=c,l.title=b,l.text=a);l.text&&(l.image=l.image||m.icon64||m.icon,l.title=l.title||m.name);l.onclick=e;l.ondone=f;k.notification(l)}};x["GM.notification"]={value:function(a){return"object"!==typeof a?S("GM.notification(details): received no details"):new sa((b,c)=>{d(u(a),a=>{});k.notification(a)})}};x.GM_cookie={value:(()=>{const a=k.cookie,b=(b,c,d)=>(a[b]||(()=>{}))(c,
d);d(u(a),c=>{b[c]=a[c]});return b})()};x["GM.cookie"]={value:(()=>{const a=(a,b)=>new sa((c,d)=>{"list"==a?x.GM_cookie.value(a,b,(a,b)=>{b?d(b):c(a)}):x.GM_cookie.value(a,b,a=>{a?d(a):c()})});d(u(k.cookie),b=>{a[b]=c=>a(b,c)});return a})()};x["window.close"]={context_prop:!0};x["window.focus"]={context_prop:!0}}x.GM_info=x["GM.info"]={getter:k.getInfo};const D={};h.GM={value:D,protect:!0};l(h,m.grant,x,(a,b)=>{if("GM."===a.substr(0,3))a=a.split(".")[1],P(D,a,{get:b.getter?b.getter:()=>b.value});
else return b.protect=!0,b});m.options.compat_prototypes&&((r||n)&&y("env: option: add toSource"),b.Object.prototype.toSource||oa(b.Object.prototype,{toSource:{value:function(){g("Object.toSource");var a=Z.toType(this);if("String"===a)return`(String("${ea(this,new b.RegExp('"',"g"),'\\"')}"))`;if("Number"===a)return`(Number("${b.Number(this)}"))`;if("Array"===a){a="(new Array(";for(let b=0;b<this.length;b++){const c=Z.toType(this[b]);a="Null"===c?a+"null":"Undefined"===c?a+"undefined":a+this[b].toSource();
b+1<this.length&&(a+=",")}return a+="))"}return`JSON.parse(unescape("${b.escape(ta(this))}"))`},enumerable:!1,writable:!0,configurable:!0}}),(r||n)&&y("env: option: add some array generics"),d("indexOf lastIndexOf filter forEach every map some slice".split(" "),a=>{if("function"!==typeof b.Array[a]){const c={};c[a]={value:function(c){g(`Array.${a}`);return t(b.Array.prototype[a],c,t(e.wrappedJSObject,arguments,[1]))},enumerable:!1,writable:!0,configurable:!0};oa(b.Array,c)}}));let B="";if(z)var w=
new Window;else{const a=Y(h,b=>{X(b);I(b);R(b,2,a.filterEvent)});w={run_at:m.options.run_at,uuid:m.uuid};B=`tms_${ea(m.uuid,/-/g,"_")}`;J[B]=w;R(a.context,1,a.filterEvent);w=a.context}a.props[G].sandboxes[m.uuid]=w;a.props[G].elements[m.uuid]=h;(r||n)&&T(`env: execute script ${m.name} @ the ${z?"un":""}safe context now!`);la(m,q.code,q.requires,a.props[G],B,q.source_url)}}})();(()=>{if(D.external_connect){var a;if(a=C.external){const b=(a,b)=>{m.send("external.message",a,a=>{b&&b(a)})};try{oa(a,{Tampermonkey:{get:function(){return{getVersion:function(a){b({method:"getVersion"},
a)},isInstalled:function(a,c,d){"function"===typeof c&&(d=c,c=null);b({method:"isInstalled",script:{name:a,namespace:c}},d)}}},configurable:!0}})}catch(W){}}}})();m.onMessage.setListener(b=>{const c=b.a;"load"==b.m?(a.pageLoaded=!0,la.runListeners()):"DOMContentLoaded"==b.m?(a.domContentLoaded=!0,la.runListeners()):"setForeignAttr"==b.m?C[c.attr]=c.value:"port.message"==b.m?X.message(c):"executeScript"==b.m?la.run(b.a):"cleanup"==b.m?m.cleanup():n&&y("env: unkown method",b)});n&&y("Tampermonkey started");
d(a.scripts,a=>{la.run(a)})}}))());