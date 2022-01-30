(()=>{"use strict";var e={},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".index.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=self.location+"";var e={796:1};r.f.i=(t,n)=>{e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunk=self.webpackChunk||[],n=t.push.bind(t);t.push=t=>{var[a,o,s]=t;for(var i in o)r.o(o,i)&&(r.m[i]=o[i]);for(s&&s(r);a.length;)e[a.pop()]=1;n(t)}})();const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return u(e,t),[r,[r]]},deserialize:e=>(e.start(),f(e,[],undefined))}],["throw",{canHandle:e=>i(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:a,type:o,path:i}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(y);let p;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),r=i.reduce(((e,t)=>e[t]),e);switch(o){case"GET":p=r;break;case"SET":t[i.slice(-1)[0]]=y(n.data.value),p=!0;break;case"APPLY":p=r.apply(t,c);break;case"CONSTRUCT":p=m(new r(...c));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;u(e,r),p=function(e,t){return h.set(e,t),e}(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(e){p={value:e,[s]:0}}Promise.resolve(p).catch((e=>({value:e,[s]:0}))).then((e=>{const[n,s]=g(e);t.postMessage(Object.assign(Object.assign({},n),{id:a}),s),"RELEASE"===o&&(t.removeEventListener("message",r),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],r=function(){}){let n=!1;const s=new Proxy(r,{get(r,a){if(p(n),a===o)return()=>b(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{l(e),n=!0}));if("then"===a){if(0===t.length)return{then:()=>s};const r=b(e,{type:"GET",path:t.map((e=>e.toString()))}).then(y);return r.then.bind(r)}return f(e,[...t,a])},set(r,a,o){p(n);const[s,i]=g(o);return b(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:s},i).then(y)},apply(r,o,s){p(n);const i=t[t.length-1];if(i===a)return b(e,{type:"ENDPOINT"}).then(y);if("bind"===i)return f(e,t.slice(0,-1));const[c,u]=d(s);return b(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(y)},construct(r,a){p(n);const[o,s]=d(a);return b(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},s).then(y)}});return s}function d(e){const t=e.map(g);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const h=new WeakMap;function m(e){return Object.assign(e,{[n]:!0})}function g(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},a]}return[{type:"RAW",value:e},h.get(e)||[]]}function y(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function b(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}function w({search:e}){return t=>{const r=performance.now();return{result:e(t),time:performance.now()-r}}}u({handlers:async function(){let[e,t]=await Promise.all([(async()=>{const e=await r.e(783).then(r.bind(r,783));return await e.default(),w(e)})(),(async()=>{if(!await(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])))return;const e=await r.e(700).then(r.bind(r,522));return await e.default(),await e.initThreadPool(navigator.hardwareConcurrency),w(e)})()]);return m({singleThread:e,supportThreads:!!t,multiThread:t})}()})})();