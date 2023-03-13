(function(){"use strict";var t={771:function(t,e,n){var o=n(9242),r=n(3396),u=n(7736);const i={class:"flex gap-5 font-normal text-gray-500"};var a={__name:"SiteNavigation",setup(t){return(t,e)=>{const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(u.Z,{class:"h-12 font-bold flex items-center justify-between"},{default:(0,r.w5)((()=>[(0,r._)("p",null,[(0,r.Wm)(n,{class:"home",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Portfolio.")])),_:1})]),(0,r._)("ul",i,[(0,r._)("li",null,[(0,r.Wm)(n,{to:"/work"},{default:(0,r.w5)((()=>[(0,r.Uk)("Work")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(n,{to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact")])),_:1})])])])),_:1})}}},c=n(89);const l=(0,c.Z)(a,[["__scopeId","data-v-4d106722"]]);var s=l,f={__name:"App",setup(t){return(t,e)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(n)],64)}}};const d=f;var m=d,p=n(2483);const v={class:"home"},b=(0,r._)("aside",{class:"flex-1"},[(0,r._)("p",null,"Hi, I'm Jeff")],-1),h=(0,r._)("section",{class:"w-3/4 text-7xl font-bold"},[(0,r._)("h1",{class:"mb-6"},"I develop cutting edge websites and apps using modern tools like Laravel and VueJS."),(0,r._)("p",{class:"text-2xl text-amber-500"},"I will turn your design into a working product.")],-1);var g={__name:"HomeView",setup(t){return(t,e)=>((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(u.Z,{class:"flex items-center h-[calc(100vh-3rem)] font-semibold text-3xl"},{default:(0,r.w5)((()=>[b,h])),_:1})]))}};const w=g;var _=w;const y=[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8924))},{path:"/work",name:"work",component:()=>n.e(443).then(n.bind(n,4170))},{path:"/contact",name:"contact",component:()=>n.e(443).then(n.bind(n,3032))}],k=(0,p.p7)({history:(0,p.PO)("/"),routes:y});var j=k,x=n(65),O=(0,x.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(m).use(O).use(j).mount("#app")},7736:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(3396);const r={class:"w-full md:w-3/4 mx-auto"};function u(t,e){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.WI)(t.$slots,"default")])}var i=n(89);const a={},c=(0,i.Z)(a,[["render",u]]);var l=c}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return t[o](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,u){if(!o){var i=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],u=t[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}u=u||0;for(var s=t.length;s>0&&t[s-1][2]>u;s--)t[s]=t[s-1];t[s]=[o,r,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.0eeae077.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="jeffreymills:";n.l=function(o,r,u,i){if(t[o])t[o].push(r);else{var a,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+u){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+u),a.src=o),t[o]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=u);var i=n.p+n.u(e),a=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,u,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var s=c(n)}for(e&&e(o);l<i.length;l++)u=i[l],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(s)},o=self["webpackChunkjeffreymills"]=self["webpackChunkjeffreymills"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(771)}));o=n.O(o)})();
//# sourceMappingURL=app.66ff170a.js.map