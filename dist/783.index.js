"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[783],{783:(e,n,t)=>{let r;t.r(n),t.d(n,{greet:()=>f,search:()=>w,default:()=>m});let a=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let i=null;function s(){return null!==i&&i.buffer===r.memory.buffer||(i=new Uint8Array(r.memory.buffer)),i}function o(e,n){return a.decode(s().slice(e,e+n))}let c=0,l=new TextEncoder("utf-8");function f(e){var n=function(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length);return s().subarray(r,r+t.length).set(t),c=t.length,r}let r=e.length,a=n(r);const i=s();let o=0;for(;o<r;o++){const n=e.charCodeAt(o);if(n>127)break;i[a+o]=n}if(o!==r){0!==o&&(e=e.slice(o)),a=t(a,r,r=o+3*e.length);const n=function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}}(e,s().subarray(a+o,a+r));o+=n.written}return c=o,a}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;r.greet(n,t)}let u=null;function b(){return null!==u&&u.buffer===r.memory.buffer||(u=new Int32Array(r.memory.buffer)),u}function w(e){try{const a=r.__wbindgen_add_to_stack_pointer(-16);r.search(a,e);var n=b()[a/4+0],t=b()[a/4+1];return o(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}const m=async function e(n,a){void 0===n&&(n=new URL(t(269),t.b));const i={wbg:{}};i.wbg.__wbg_alert_c42083aef2121968=function(e,n){alert(o(e,n))},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),i.wbg.memory=a||new WebAssembly.Memory({initial:17,maximum:16384,shared:!0});const{instance:s,module:c}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await n,i);return r=s.exports,e.__wbindgen_wasm_module=c,r.__wbindgen_start(),r}},269:(e,n,t)=>{e.exports=t.p+"9460edb2161e35cca5c8.wasm"}}]);