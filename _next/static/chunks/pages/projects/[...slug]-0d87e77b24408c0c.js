(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[256],{8348:function(e,t,a){var r={"./BasicLayout":[8969,959,538,518,794,969],"./BasicLayout.jsx":[8969,959,538,518,794,969],"./BasicOverflowLayout":[3340,959,538,518,794,340],"./BasicOverflowLayout.jsx":[3340,959,538,518,794,340],"./DoubleParallaxLayout":[6267,959,538,518,794,267],"./DoubleParallaxLayout.jsx":[6267,959,538,518,794,267],"./FullpageLayout":[8566,959,538,518,794,566],"./FullpageLayout.jsx":[8566,959,538,518,794,566],"./LandscapeLayout":[7450,959,538,518,794,450],"./LandscapeLayout.jsx":[7450,959,538,518,794,450],"./ParallaxAltLayout":[366,959,538,518,794,366],"./ParallaxAltLayout.jsx":[366,959,538,518,794,366],"./ParallaxLayout":[5193,959,538,518,794,193],"./ParallaxLayout.jsx":[5193,959,538,518,794,193],"./PortraitLayout":[6835,959,538,518,794,835],"./PortraitLayout.jsx":[6835,959,538,518,794,835],"./SimpleLayout":[3657,959,538,518,794,657],"./SimpleLayout.jsx":[3657,959,538,518,794,657]};function l(e){if(!a.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then(function(){return a(l)})}l.keys=function(){return Object.keys(r)},l.id=8348,e.exports=l},5949:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[...slug]",function(){return a(2620)}])},4564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,a(2648).Z)(a(7294));var r=a(2983)},7645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=o.default,l={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=r({},l,e)),l=r({},l,t);let s=l.loader,u=()=>null!=s?s().then(n):Promise.resolve(n(()=>null));return l.loadableGenerated&&delete(l=r({},l,l.loadableGenerated)).loadableGenerated,"boolean"!=typeof l.ssr||l.ssr||(delete l.webpack,delete l.modules),a(r({},l,{loader:u}))};var r=a(6495).Z,l=a(2648).Z;l(a(7294));var o=l(a(4588));function n(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,a(2648).Z)(a(7294));let l=r.default.createContext(null);t.LoadableContext=l},4588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,l=(0,a(2648).Z)(a(7294)),o=a(4564),n=a(3644);let s=[],u=[],i=!1;function d(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t);a.lazy=l.default.lazy(a.loader);let r=null;function s(){if(!r){let t=new c(e,a);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let e=a.webpack?a.webpack():a.modules;e&&u.push(t=>{for(let a of e)if(-1!==t.indexOf(a))return s()})}function d(e){!function(){s();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let t=a.loading,r=l.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),u=a.ssr?l.default.Fragment:o.NoSSR,i=a.lazy;return l.default.createElement(l.default.Suspense,{fallback:r},l.default.createElement(u,null,l.default.createElement(i,Object.assign({},e))))}return d.preload=()=>s(),d.displayName="LoadableComponent",d}(d,e)}function h(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return h(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{h(s).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(i=!0,t());h(u,e).then(a,a)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},2620:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return y},default:function(){return m}});var r=a(5893),l=a(5152),o=a.n(l),n=a(7294),s=a(3935),u=a(1220);let i=(e,t={})=>{let a={React:n,ReactDOM:s,_jsx_runtime:u.i,...t},r=Function(...Object.keys(a),e);return r(...Object.values(a)).default},d=(e,t={})=>n.useMemo(()=>i(e,t),[e,t]),c=e=>{let{toc:t,indentDepth:a=3,fromHeading:l=1,toHeading:o=6,asDisclosure:n=!1,exclude:s=""}=e,u=Array.isArray(s)?RegExp("^("+s.join("|")+")$","i"):RegExp("^("+s+")$","i"),i=t.filter(e=>e.depth>=l&&e.depth<=o&&!u.test(e.value)),d=(0,r.jsx)("ul",{children:i.map(e=>(0,r.jsx)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,r.jsx)("a",{href:e.url,children:e.value})},e.value))});return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("details",{open:!0,children:[(0,r.jsx)("summary",{className:"ml-6 py-2 text-xl font-bold",children:"Table of Contents"}),(0,r.jsx)("div",{className:"ml-6",children:d})]}):d})},f=e=>{let t=(0,n.useRef)(null),[a,l]=(0,n.useState)(!1),[o,s]=(0,n.useState)(!1),u=()=>{l(!0)},i=()=>{l(!1),s(!1)},d=()=>{s(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout(()=>{s(!1)},2e3)};return(0,r.jsxs)("div",{ref:t,onMouseEnter:u,onMouseLeave:i,className:"relative",children:[a&&(0,r.jsx)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-4 top-4 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(o?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:d,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:o?"text-green-400":"text-gray-300",children:o?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,r.jsx)("pre",{children:e.children})]})},h={TOCInline:c,pre:f,wrapper:e=>{let{components:t,layout:l,...n}=e,s=o()(()=>a(8348)("./".concat(l)));return(0,r.jsx)(s,{...n})}},p=e=>{let{layout:t,code:a,...l}=e,o=d(a);return(0,r.jsx)(o,{layout:t,components:h,...l})},_=e=>{var t;let{doc:a,authordetails:l,prev:o,next:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p,{layout:null!==(t=a.layout)&&void 0!==t?t:"FullpageLayout",doc:a,code:a.body.code,authordetails:l,prev:o,next:n})})};var y=!0,m=_},5152:function(e,t,a){e.exports=a(7645)},1220:function(e,t,a){let r=a(5893);e.exports.i=r}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5949)}),_N_E=e.O()}]);