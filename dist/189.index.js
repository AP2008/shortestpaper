"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[189,783,517],{783:(e,n,t)=>{t.r(n),t.d(n,{greet:()=>b,search:()=>g,initThreadPool:()=>p,wbg_rayon_start_worker:()=>h,wbg_rayon_PoolBuilder:()=>v,default:()=>k});var r=t(517);let o,i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let a=null;function s(){return null!==a&&a.buffer===o.memory.buffer||(a=new Uint8Array(o.memory.buffer)),a}function c(e,n){return i.decode(s().slice(e,e+n))}const u=new Array(32).fill(void 0);u.push(void 0,null,!0,!1);let _=u.length;function l(e){_===u.length&&u.push(u.length+1);const n=_;return _=u[n],u[n]=e,n}let w=0,f=new TextEncoder("utf-8");function b(e){var n=function(e,n,t){if(void 0===t){const t=f.encode(e),r=n(t.length);return s().subarray(r,r+t.length).set(t),w=t.length,r}let r=e.length,o=n(r);const i=s();let a=0;for(;a<r;a++){const n=e.charCodeAt(a);if(n>127)break;i[o+a]=n}if(a!==r){0!==a&&(e=e.slice(a)),o=t(o,r,r=a+3*e.length);const n=function(e,n){const t=f.encode(e);return n.set(t),{read:e.length,written:t.length}}(e,s().subarray(o+a,o+r));a+=n.written}return w=a,o}(e,o.__wbindgen_malloc,o.__wbindgen_realloc),t=w;o.greet(n,t)}let d=null;function m(){return null!==d&&d.buffer===o.memory.buffer||(d=new Int32Array(o.memory.buffer)),d}function g(e){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.search(r,e);var n=m()[r/4+0],t=m()[r/4+1];return c(n,t)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(n,t)}}function y(e){const n=function(e){return u[e]}(e);return function(e){e<36||(u[e]=_,_=e)}(e),n}function p(e){return y(o.initThreadPool(e))}function h(e){o.wbg_rayon_start_worker(e)}class v{static __wrap(e){const n=Object.create(v.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}const k=async function e(n,i){void 0===n&&(n=new URL(t(269),t.b));const a={wbg:{}};a.wbg.__wbg_alert_c42083aef2121968=function(e,n){alert(c(e,n))},a.wbg.__wbindgen_throw=function(e,n){throw new Error(c(e,n))},a.wbg.__wbindgen_module=function(){return l(e.__wbindgen_wasm_module)},a.wbg.__wbindgen_memory=function(){return l(o.memory)},a.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,n,t){return l((0,r.Q)(y(e),y(n),v.__wrap(t)))},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),a.wbg.memory=i||new WebAssembly.Memory({initial:17,maximum:16384,shared:!0});const{instance:s,module:u}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await n,a);return o=s.exports,e.__wbindgen_wasm_module=u,o.__wbindgen_start(),o}},517:(e,n,t)=>{function r(e,n){return new Promise((t=>{e.addEventListener("message",(function r({data:o}){null!=o&&o.type===n&&(e.removeEventListener("message",r),t(o))}))}))}let o;async function i(e,n,i){const a={type:"wasm_bindgen_worker_init",module:e,memory:n,receiver:i.receiver()};o=await Promise.all(Array.from({length:i.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(517),t.b),{type:void 0});return e.postMessage(a),await r(e,"wasm_bindgen_worker_ready"),e}))),i.build()}t.d(n,{Q:()=>i}),r(self,"wasm_bindgen_worker_init").then((async e=>{const n=await t.e(783).then(t.bind(t,783));await n.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),n.wbg_rayon_start_worker(e.receiver)}))},269:(e,n,t)=>{e.exports=t.p+"2c00c17c98679a499d86.wasm"}}]);