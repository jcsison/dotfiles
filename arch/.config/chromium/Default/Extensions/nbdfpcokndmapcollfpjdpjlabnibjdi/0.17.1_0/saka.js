!function(e){function t(t){for(var s,o,a=t[0],c=t[1],l=t[2],h=0,u=[];h<a.length;h++)o=a[h],r[o]&&u.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n,o=i[t],a=!0,c=1;c<o.length;c++)n=o[c],0!==r[n]&&(a=!1);a&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}var o={},r={2:0},i=[];s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;i.push([20,0]),n()}([,function(e,t,n){"use strict";function s(e){return l?e.metaKey:e.ctrlKey}function o(e,t){const n={};return e.forEach(e=>{n[e[t]]=e}),n}async function r(e,{getSuggestions:t,threshold:n,keys:s}){const o=await t(e);return new a.a(o,{shouldSort:!0,threshold:n,minMatchCharLength:1,includeMatches:!0,keys:s,distance:500}).search(e).map(({item:e,matches:t,score:n})=>c({},e,{score:n,matches:t}))}n.d(t,"a",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return r});var i=n(5),a=n.n(i),c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e};const l=-1!==navigator.appVersion.indexOf("Mac"),d=l?"⌘":"ctrl"},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});const s="rgba(152,78,163,1)",o="rgba(152,78,163,0.44)",r={tab:"rgba(55,126,184,1)",closedTab:"rgba(0,0,0,1)",search:"rgba(77,175,74,1)",history:"rgba(228,26,28,1)",recentlyViewed:s,bookmark:"rgba(255,127,0,1)",mode:s,calculator:"rgba(166,86,40,1)",unknown:"rgba(153,153,153,1)"},i={tab:"rgba(55,126,184,0.44)",closedTab:"rgba(0,0,0,0.44)",search:"rgba(77,175,74,0.44)",history:"rgba(228,26,28,0.44)",recentlyViewed:o,bookmark:"rgba(255,127,0,0.44)",mode:o,calculator:"rgba(166,86,40,0.44)",unknown:"rgba(153,153,153,0.44)"}},function(e,t,n){"use strict";function s(e,t){let n=e;return e.endsWith("/")&&(n=e.substr(0,e.length-1)),!t.startsWith("http://")&&n.startsWith("http://")&&(n=n.substr(7)),n}function o(e){let t;try{t=!!new URL(e)}catch(e){t=!1}return t}function r(e){return e&&e.match(/^\w+:/,"")?e.match(/^\w+:/,"")[0]:""}function i(e){return-1!==c.indexOf(e)}async function a(e){if(void 0!==e){const t=browser.runtime.getURL("saka.html"),n=t.substring(0,t.indexOf("/"));return e.includes(n)}return!1}n.d(t,"e",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a});const c=["http:","https:","file:","ftp:","about:","chrome:","chrome-extension:","moz-extension:"]},function(e,t,n){var s=n(17);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(s,o),s.locals&&(e.exports=s.locals)},,,function(e,t,n){n(9)},function(e,t,n){"use strict";n.d(t,"b",function(){return c});var s=n(1),o=n(2),r=n(5),i=n.n(r),a=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e};const c=[{type:"mode",mode:"tab",label:"Tabs",shortcut:`${s.a}-shift-a`,color:o.a.tab,fadedColor:o.b.tab,icon:"tab"},{type:"mode",mode:"closedTab",label:"Recently Closed Tabs",shortcut:`${s.a}-shift-c`,color:o.a.closedTab,fadedColor:o.b.closedTab,icon:"restore_page"},{type:"mode",label:"Bookmarks",mode:"bookmark",shortcut:`${s.a}-b`,color:o.a.bookmark,fadedColor:o.b.bookmark,icon:"bookmark_border"},{type:"mode",label:"History",mode:"history",shortcut:`${s.a}-shift-e`,color:o.a.history,fadedColor:o.b.history,icon:"history"},{type:"mode",label:"Recently Viewed",mode:"recentlyViewed",shortcut:`${s.a}-shift-x`,color:o.a.recentlyViewed,fadedColor:o.b.recentlyViewed,icon:"timelapse"}],l=new i.a(c,{shouldSort:!0,threshold:1,includeMatches:!0,keys:["label"]});t.a=async function(e){return""===e?c:l.search(e).map(({item:e,matches:t,score:n})=>a({},e,{score:n,matches:t}))}},,,,,,,,,function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  margin: 0; }\n\n#GUIContainer {\n  background-color: #ffffff;\n  position: absolute;\n  left: 50%;\n  right: 0;\n  width: 680px;\n  border-width: 0;\n  transform-origin: 50% 0%;\n  -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  overflow: hidden; }\n\n#background-image {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover; }\n\n#pagination-bar {\n  display: flex;\n  flex-flow: row no-wrap;\n  justify-content: space-around;\n  width: 100%;\n  height: 14px;\n  font-size: 12px;\n  line-height: 14px;\n  color: gray; }\n\n.pagination-item {\n  cursor: pointer;\n  opacity: 0.44; }\n\n.pagination-item:hover {\n  opacity: 1; }\n\n.paginator-next-button {\n  flex-grow: 3;\n  opacity: 0.6;\n  text-align: center;\n  cursor: pointer; }\n\n.paginator-next-button:hover {\n  color: white;\n  background-color: gray; }\n\n.paginator-text-info {\n  flex-grow: 2;\n  text-align: center; }\n\n.arrow-normalizer {\n  font-size: 15px;\n  line-height: 9px;\n  margin-right: 1px; }\n\n.search-bar-container {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\nsection.search-field-wrapper {\n  font-size: 26px;\n  padding-right: 16px;\n  display: flex;\n  width: 624px;\n  border-bottom: none; }\n\ninput.search-field-input {\n  font-size: inherit; }\n\nspan.suggestion-text {\n  align-self: center; }\n\n#search-bar {\n  color: #000000;\n  padding-left: 20px; }\n\n#search-bar::selection {\n  background-color: rgba(63, 81, 245, 0.15); }\n\n#action-button {\n  height: 56px;\n  width: 56px;\n  min-width: 56px;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(63, 81, 245, 0.6);\n  background-color: rgba(63, 81, 245, 0);\n  cursor: pointer; }\n\n#action-button:hover {\n  /* color: #ffffff;\n  background-color: rgba(63, 81, 245, 1.0); */\n  /* -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); */ }\n\n#action-button > i {\n  font-size: 32px; }\n\n#settings-bar {\n  display: flex;\n  flex-flow: row no-wrap;\n  justify-content: space-around;\n  width: 100%;\n  height: 12px;\n  font-size: 10px;\n  line-height: 10px;\n  color: rgba(0, 0, 0, 0.34);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.settings-item {\n  cursor: pointer;\n  opacity: 0.44; }\n\n.settings-item:hover {\n  opacity: 1; }\n\nul.list-container {\n  padding: 0px; }\n\n.search-item {\n  padding: 0px 16px; }\n\n.search-icon {\n  color: rgba(0, 0, 0, 0.26); }\n\n.two-line-avatar-text-icon-demo .mdc-list-item__graphic {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  /*color: white;*/ }\n\nkbd {\n  color: #3f51f5;\n  font-family: roboto, sans-serif;\n  font-weight: normal;\n  letter-spacing: 0.56px;\n  -webkit-font-smoothing: antialiased;\n  border: 1px solid #3f51f5;\n  border-bottom: 5px solid;\n  border-left: 3px solid;\n  padding: 0px 4px;\n  border-radius: 4px;\n  border-bottom-left-radius: 3px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: auto 1px; }\n\n.grey-bg {\n  background: rgba(0, 0, 0, 0.26); }\n\nspan.kbd-end-detail {\n  white-space: nowrap;\n  color: gray;\n  text-decoration: none;\n  margin-right: 6px; }\n\n.search-item {\n  padding-left: 10px !important;\n  border-left: 6px solid;\n  cursor: pointer; }\n\n.search-item:hover {\n  background-color: whitesmoke !important; }\n\n.suggestion-wrap-text {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 530px;\n  overflow-x: hidden; }\n\n.suggestion-icon {\n  width: 25px;\n  height: 25px; }\n\n.mode-switcher-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mode-switcher-icon {\n  flex-grow: 1;\n  flex-wrap: nowrap;\n  background-color: white;\n  text-align: center;\n  padding: 2px 0px 2px 0px;\n  border-top: 3px solid transparent;\n  cursor: pointer; }\n\n.mode-switcher-icon + .mode-switcher-icon {\n  border-left: 2px solid rgba(0, 0, 0, 0.05); }\n\n.mode-switcher-icon:hover {\n  background-color: whitesmoke; }\n",""])},,,function(e,t,n){"use strict";function s(e,t,n){const s=n&&n.find(e=>e.key===t);return s?function(e,t){const n=[];let s="",o=0,r=t[o];o+=1;for(let a=0;a<e.length;a++){const c=e[a];r&&a===r[0]&&(n.push(s),s=""),s+=c,r&&a===r[1]&&(n.push(Object(i.b)("span",{style:{"font-weight":"bold"}},s)),s="",r=t[o],o+=1)}return""!==s&&n.push(s),n}(e,s.indices):e}var o=Math.max,r=Math.min;n.r(t);var i=n(0),a=(n(7),n(6),n(4),n(13));var c=Object(a.a)({zoom:e=>{window.dispatchEvent(new CustomEvent("zoom",{detail:{zoom:e}}))}}),l=n(3),d=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e};const h={mode:"apps",tab:"tab",closedTab:"restore_page",history:"history",recentlyViewed:"timelapse",bookmark:"bookmark_border",incognito:"visibility_off"};var u=n(1);class b extends i.a{render(){const{placeholder:e,searchString:t,onKeyDown:n,onInput:s,onBlur:o}=this.props;return Object(i.b)("section",{className:"mdc-text-field mdc-text-field--fullwidth search-field-wrapper"},Object(i.b)("input",{id:"search-bar",className:"mdc-text-field__input search-field-input",type:"text",placeholder:e,"aria-label":e,onKeyDown:n,onInput:s,value:t,onBlur:o,ref:e=>e&&e.focus()}))}}var p=({placeholder:e,searchString:t,suggestion:n,onKeyDown:s,onInput:o,onBlur:r})=>Object(i.b)("form",{className:"search-bar-container"},Object(i.b)(b,{placeholder:e,searchString:t,suggestion:n,onKeyDown:s,onInput:o,onBlur:r})),g=n(2),m=({type:e,title:t,titleColor:n,secondary:s,secondaryColor:o,url:r,favIconUrl:a,incognito:c,selected:l,index:d,onClick:b})=>{const p=g.b[e],m=h[e],f=h.incognito;let x;return x=!0===c?Object(i.b)("i",{className:"material-icons","aria-hidden":"true",style:{color:p}},f):r?Object(i.b)("div",{className:"suggestion-icon",style:`content: -webkit-image-set(url(chrome://favicon/size/16@1x/${r}) 1x, url(chrome://favicon/size/16@2x/${r}) 2x)`}):Object(i.b)("i",{className:"material-icons","aria-hidden":"true",style:{color:p}},m),Object(i.b)("li",{className:"mdc-list-item search-item",style:{backgroundColor:l?"rgb(237, 237, 237)":"#ffffff",borderLeftColor:p},onKeyPress:()=>b(d),onClick:()=>b(d)},Object(i.b)("span",{className:"mdc-list-item__graphic search-icon",role:"presentation"},x),Object(i.b)("span",{className:"mdc-list-item__text suggestion-text"},Object(i.b)("span",{className:"suggestion-wrap-text",style:{color:n}},t),s&&Object(i.b)("span",{className:"mdc-list-item__secondary-text suggestion-wrap-text",style:{color:o||"inherit"}},s)),Object(i.b)("span",{className:"mdc-list-item__meta kbd-end-detail"},l?Object(i.b)("i",{className:"material-icons","aria-hidden":"true",style:{color:p}},m):`${u.a}-${d+1}`))},f=({suggestion:{title:e,url:t,matches:n,favIconUrl:o,incognito:r},selected:a,index:c,onClick:l})=>Object(i.b)(m,{type:"tab",title:s(e,"title",n),titleColor:"#000000",secondary:s(t,"url",n),secondaryColor:"rgba(63, 81, 245, 1.0)",url:t,favIconUrl:o,incognito:r,icon:"star_border",selected:a,index:c,onClick:l,class:"tab-suggestion"}),x=({suggestion:{title:e,url:t,matches:n,favIconUrl:o,incognito:r},selected:a,index:c,onClick:l})=>Object(i.b)(m,{type:"closedTab",title:s(e,"title",n),titleColor:"#000000",secondary:s(t,"url",n),secondaryColor:"rgba(63, 81, 245, 1.0)",url:t,favIconUrl:o,incognito:r,icon:"star_border",selected:a,index:c,onClick:l}),y=({suggestion:{title:e,url:t,matches:n},selected:o,index:r,onClick:a})=>Object(i.b)(m,{type:"bookmark",title:s(e,"title",n),titleColor:"#000000",secondary:s(t,"url",n),secondaryColor:"rgba(63, 81, 245, 1.0)",url:t,icon:"star_border",selected:o,index:r,onClick:a}),w=({suggestion:{title:e,url:t,matches:n},selected:o,index:r,onClick:a})=>Object(i.b)(m,{type:"history",title:s(e,"title",n),titleColor:"#000000",secondary:s(t,"url",n),secondaryColor:"rgba(63, 81, 245, 1.0)",icon:"history",url:t,selected:o,index:r,onClick:a}),S=({suggestion:{title:e,url:t,matches:n,favIconUrl:o,incognito:r},selected:a,index:c,onClick:l})=>Object(i.b)(m,{type:"recentlyViewed",title:s(e,"title",n),titleColor:"#000000",secondary:s(t,"url",n),secondaryColor:"rgba(63, 81, 245, 1.0)",icon:"recentlyViewed",favIconUrl:o,incognito:r,url:t,selected:a,index:c,onClick:l}),k=({suggestion:{title:e},selected:t,index:n,onClick:s})=>Object(i.b)(m,{type:"command",title:e,icon:"input",titleColor:"rgb(75, 165, 75)",selected:t,index:n,onClick:s}),v=({suggestion:{title:e,isURL:t,prettyURL:n},selected:s,index:o,onClick:r})=>Object(i.b)(m,{type:"search",title:t?n:e,titleColor:t?"rgba(63, 81, 245, 1.0)":"rgba(0, 0, 00, 0.87)",secondary:t?e:void 0,icon:t?"insert_drive_file":"search",selected:s,index:o,onClick:r}),O=({suggestion:{title:e},selected:t,index:n,onClick:s})=>Object(i.b)(m,{type:"unknown",title:e,icon:"error_outline",titleColor:"red",selected:t,index:n,onClick:s}),j=e=>{switch(e.suggestion.type){case"tab":return Object(i.b)(f,e);case"closedTab":return Object(i.b)(x,e);case"bookmark":return Object(i.b)(y,e);case"history":return Object(i.b)(w,e);case"recentlyViewed":return Object(i.b)(S,e);case"command":return Object(i.b)(k,e);case"searchEngine":return Object(i.b)(v,e);default:return Object(i.b)(O,e)}},C=({searchString:e,suggestions:t,selectedIndex:n,firstVisibleIndex:s,maxSuggestions:o,onSuggestionClick:r})=>Object(i.b)("ul",{className:"mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo list-container"},t.slice(s,s+o).map((t,s)=>Object(i.b)(j,{suggestion:t,searchString:e,selected:s===n,index:s,onClick:r}))),I=({firstVisibleIndex:e,suggestions:t,maxSuggestions:n,onClickPrevious:s,onClickNext:o})=>0===t.length?void 0:Object(i.b)("section",{id:"pagination-bar"},Object(i.b)("div",{role:"button",onClick:s,onKeyPress:s,className:"paginator-next-button",tabIndex:0},Object(i.b)("span",{className:"arrow-normalizer"},"◄")," ",u.a,"-S"),Object(i.b)("div",{className:"paginator-text-info"},`${e+1} - ${e+r(t.length,n)} / ${t.length}`),Object(i.b)("div",{role:"button",onClick:o,onKeyPress:o,className:"paginator-next-button",tabIndex:0},u.a,"-D ►"));class M extends i.a{constructor(...e){var t;return t=super(...e),this.state={zoom:0},this.onZoomChange=(e=>{this.setZoom(e.detail.zoom)}),this.setZoom=(e=>{this.setState({zoom:e})}),t}componentWillMount(){window.addEventListener("zoom",this.onZoomChange),c("zoom").then(this.setZoom)}componentWillUnmount(){window.removeEventListener("zoom",this.onZoomChange)}render(){const{children:e,onWheel:t}=this.props,{zoom:n}=this.state;return Object(i.b)("main",{id:"GUIContainer",onWheel:t,style:0===n?{opacity:"0.01"}:{transform:`translateX(-50%) scale(${1/n})`,maxWidth:`${100*n}%`,top:`${o(0,(window.innerHeight-504/n)/2)}px`}},e)}}class H extends i.a{constructor(...e){var t;return t=super(...e),this.state={screenshot:void 0},t}componentDidMount(){(async()=>{const{screenshot:e}=await browser.storage.local.get("screenshot");this.setState({screenshot:e}),await c("focusTab"),await browser.storage.local.remove("screenshot")})()}render(){const{children:e}=this.props,{screenshot:t}=this.state;return Object(i.b)("div",{id:"background-image",style:t&&`background-image: url("${t}")`},e)}}var D=n(8),V=({icon:e,color:t})=>Object(i.b)("i",{id:"icon",className:"material-icons","aria-hidden":"true",style:{color:t}},e),_=({mode:e,setMode:t})=>{const n=D.b.map(n=>{const s=n.mode===e?n.fadedColor:g.b.unknown;return Object(i.b)("div",{className:"mode-switcher-icon",style:n.mode===e?`border-top: 3px solid  ${n.fadedColor};`:{},onClick:()=>t(n.mode)},Object(i.b)(V,{icon:n.icon,color:s}))});return Object(i.b)("div",{className:"mode-switcher-wrapper"},n)},z=class extends i.a{constructor(...e){var t;return t=super(...e),this.state={searchString:"",suggestions:[],selectedIndex:0,firstVisibleIndex:0,maxSuggestions:6,undoIndex:this.props.searchHistory.size-1},this.getPreviousSearchString=(()=>{0!==this.state.undoIndex&&(this.setState({searchString:[...this.props.searchHistory][this.state.undoIndex],undoIndex:this.state.undoIndex-1}),this.updateAutocompleteSuggestions(this.state.searchString))}),this.getNextSearchString=(()=>{this.state.undoIndex<this.props.searchHistory.size&&(this.setState({searchString:[...this.props.searchHistory][this.state.undoIndex],undoIndex:this.state.undoIndex+1}),this.updateAutocompleteSuggestions(this.state.searchString))}),this.handleWheel=function(e,t,n,s=0){return o=>{o.preventDefault();let r=s;(r+=o.deltaY)>=e?(r=0,t(o)):r<=-e&&(r=0,n(o))}}(50,()=>{this.incrementSelectedIndex(1)},()=>{this.incrementSelectedIndex(-1)}),this.handleKeyDown=(e=>{switch(e.key){case"Escape":browser.runtime.sendMessage({key:"closeSaka",searchHistory:[...this.props.searchHistory]});break;case"Backspace":Object(u.b)(e)?(e.preventDefault(),this.closeTab()):!e.repeat&&""===e.target.value&&browser.runtime.sendMessage({key:"closeSaka",searchHistory:[...this.props.searchHistory]});break;case"ArrowLeft":case"ArrowRight":break;case"ArrowDown":e.preventDefault(),this.props.updateSearchHistory(this.state.searchString),this.incrementSelectedIndex(1);break;case"ArrowUp":e.preventDefault(),this.props.updateSearchHistory(this.state.searchString),this.incrementSelectedIndex(-1);break;case"Tab":e.preventDefault(),this.props.updateSearchHistory(this.state.searchString),e.shiftKey?this.incrementSelectedIndex(-1):this.incrementSelectedIndex(1);break;case"1":case"2":case"3":case"4":case"5":case"6":Object(u.b)(e)&&(e.preventDefault(),this.tryActivateSuggestion(Number.parseInt(10,e.key)-1));break;case"Enter":e.preventDefault(),this.props.updateSearchHistory(this.state.searchString,this.tryActivateSuggestion);break;case"k":Object(u.b)(e)&&(e.preventDefault(),this.setState({searchString:""}),this.updateAutocompleteSuggestions(""));break;case"s":Object(u.b)(e)&&(e.preventDefault(),this.previousPage());break;case"d":Object(u.b)(e)&&(e.preventDefault(),this.nextPage());break;case" ":(e.shiftKey||""===this.state.searchString)&&(e.preventDefault(),this.props.shuffleMode());break;case"A":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("tab"));break;case"C":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("closedTab"));break;case"M":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("mode"));break;case"b":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("bookmark"));break;case"E":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("history"));break;case"z":Object(u.b)(e)&&(e.preventDefault(),this.getPreviousSearchString());break;case"y":Object(u.b)(e)&&(e.preventDefault(),this.getNextSearchString());break;case"X":Object(u.b)(e)&&(e.preventDefault(),this.props.setMode("recentlyViewed"));break;default:this.setState({undoIndex:this.props.searchHistory.size-1})}}),this.nextPage=(()=>{const{firstVisibleIndex:e,maxSuggestions:t,suggestions:{length:n}}=this.state,s=o(0,r(e+t,n-t));this.setState({firstVisibleIndex:s,selectedIndex:0})}),this.previousPage=(()=>{const{firstVisibleIndex:e,maxSuggestions:t}=this.state,n=o(0,e-t);this.setState({firstVisibleIndex:n,selectedIndex:0})}),this.incrementSelectedIndex=(e=>{const{selectedIndex:t}=this.state;this.trySetIndex(t+e)}),this.trySetIndex=(e=>{if(this.indexInRange(e))this.setState({selectedIndex:e});else{const{firstVisibleIndex:t,maxSuggestions:n,suggestions:s}=this.state;0>e&&0<t?this.setState({firstVisibleIndex:t-1}):e>=n&&t+n<s.length&&this.setState({firstVisibleIndex:t+1})}}),this.indexInRange=(e=>{const{suggestions:t,maxSuggestions:n}=this.state;return 0<=e&&e<=o(0,r(t.length,n)-1)}),this.closeTab=(async(e=this.state.selectedIndex)=>{const{suggestions:t,firstVisibleIndex:n}=this.state,s=t[n+e];s&&"tab"===this.props.mode&&(await async function(e){return c("closeTab",e)}(s),t.splice(n+e,1),this.setState({suggestions:t}))}),this.tryActivateSuggestion=(async(e=this.state.selectedIndex)=>{const{suggestions:t,firstVisibleIndex:n}=this.state,s=t[n+e];s&&("mode"===s.type?this.props.setMode(s.mode):(async function(e){c("activateSuggestion",e)}(s),await browser.runtime.sendMessage({key:"closeSaka",searchHistory:[...this.props.searchHistory]})))}),this.handleInput=(e=>{const t=e.target.value,{oldSearchString:n}=this.state;this.setState({searchString:t}),t!==n&&(this.setState({selectedIndex:0,searchString:t}),this.updateAutocompleteSuggestions(t))}),this.updateAutocompleteSuggestions=(async e=>{const t=await async function(e,t){return c("sg",[e,t])}(this.props.mode,e),{searchString:n}=this.state;n===e&&this.setState({suggestions:t.map(t=>(function(e,t){switch(e.type){case"tab":case"closedTab":{const n=Object(l.e)(e.url,t);return d({},e,{prettyURL:n,text:e.title})}case"mode":return e;case"bookmark":case"history":case"recentlyViewed":{const n=Object(l.e)(e.url,t);return d({},e,{prettyURL:n,text:n})}default:return{type:"error",title:`Error. Unknown Suggestion type: ${e.type}`,text:`Error. Unknown Suggestion type: ${e.type}`}}})(t,e)),firstVisibleIndex:0,selectedIndex:0})}),this.handleBlur=(e=>{this.props.updateSearchHistory(e.target.value)}),this.handleButtonClick=(()=>{this.props.setMode("mode")}),this.handleSuggestionClick=(e=>{this.tryActivateSuggestion(e)}),t}componentDidMount(){this.updateAutocompleteSuggestions("").then(()=>{const{suggestions:e}=this.state;1<e.length&&this.setState({selectedIndex:1})})}componentDidUpdate(e){this.props.mode!==e.mode&&this.updateAutocompleteSuggestions(this.state.searchString)}render(){const{placeholder:e,mode:t,showEmptySearchSuggestions:n}=this.props,{searchString:s,suggestions:o,selectedIndex:r,firstVisibleIndex:a,maxSuggestions:c}=this.state,l=o[a+r];return n||s?Object(i.b)(H,{suggestion:l},Object(i.b)(M,{onWheel:this.handleWheel},Object(i.b)(_,{mode:t,setMode:this.props.setMode}),Object(i.b)(p,{placeholder:e,searchString:s,suggestion:l,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onBlur:this.handleBlur,onButtonClick:this.handleButtonClick,onSuggestionClick:this.handleSuggestionClick,mode:t}),Object(i.b)(C,{searchString:s,suggestions:o,selectedIndex:r,firstVisibleIndex:a,maxSuggestions:c,onSuggestionClick:this.handleSuggestionClick}),Object(i.b)(I,{selectedIndex:r,suggestions:o,firstVisibleIndex:a,maxSuggestions:c,onClickPrevious:this.previousPage,onClickNext:this.nextPage}))):Object(i.b)(H,{suggestion:l},Object(i.b)(M,{onWheel:this.handleWheel},Object(i.b)(_,{setMode:this.props.setMode}),Object(i.b)(p,{placeholder:e,searchString:s,suggestion:l,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onBlur:this.handleBlur,onButtonClick:this.handleButtonClick,onSuggestionClick:this.handleSuggestionClick,mode:t})))}};Object(i.c)(Object(i.b)(class extends i.a{constructor(e){super(e),this.setMode=(e=>{this.setState({mode:e})}),this.shuffleMode=(()=>{const{mode:e,modes:t}=this.state,n=t.indexOf(e)+1,s=n>=t.length?0:n;this.setMode(t[s])}),this.fetchSakaSettings=async function(){const{sakaSettings:e}=await browser.storage.sync.get(["sakaSettings"]);let{searchHistory:t}=await browser.storage.sync.get(["searchHistory"]);if(t=void 0!==t&&0<t.length?new Set(t):new Set([""]),void 0!==e){const{mode:n,showEmptySearchSuggestions:s}=e;return{isLoading:!1,mode:n,showEmptySearchSuggestions:s,searchHistory:t}}return{isLoading:!1,searchHistory:t}},this.updateSearchHistory=((e,t)=>{const{searchHistory:n}=this.state;n.delete(e),n.add(e),this.setState({searchHistory:n},t)}),this.state={mode:"tab",modes:["tab","closedTab","bookmark","history","recentlyViewed"],isLoading:!0,showEmptySearchSuggestions:!0,searchHistory:new Set([])}}async componentDidMount(){const e=await this.fetchSakaSettings();this.setState(e)}render(){const{mode:e,isLoading:t,showEmptySearchSuggestions:n,searchHistory:s}=this.state,{setMode:o,shuffleMode:r}=this;return t?Object(i.b)("div",null):"tab"===e?Object(i.b)(z,{mode:e,placeholder:"Tabs",setMode:o,shuffleMode:r,showEmptySearchSuggestions:n,searchHistory:s,updateSearchHistory:this.updateSearchHistory}):"closedTab"===e?Object(i.b)(z,{mode:e,placeholder:"Recently Closed",setMode:o,shuffleMode:r,showEmptySearchSuggestions:n,searchHistory:s,updateSearchHistory:this.updateSearchHistory}):"bookmark"===e?Object(i.b)(z,{mode:e,placeholder:"Bookmarks",setMode:o,shuffleMode:r,showEmptySearchSuggestions:n,searchHistory:s,updateSearchHistory:this.updateSearchHistory}):"history"===e?Object(i.b)(z,{mode:e,placeholder:"History",setMode:o,shuffleMode:r,showEmptySearchSuggestions:n,searchHistory:s,updateSearchHistory:this.updateSearchHistory}):"recentlyViewed"===e?Object(i.b)(z,{mode:e,placeholder:"Recently Viewed",setMode:o,shuffleMode:r,showEmptySearchSuggestions:n,searchHistory:s,updateSearchHistory:this.updateSearchHistory}):Object(i.b)("div",null,"Error, invalid mode")}},null),document.body)}]);