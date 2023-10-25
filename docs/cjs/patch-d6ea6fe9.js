"use strict";const index=require("./index-9cc129fb.js"),noop=()=>{},IS_DENO_ENV="undefined"!=typeof Deno,IS_NODE_ENV=!(IS_DENO_ENV||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),IS_DENO_WINDOWS_ENV=IS_DENO_ENV&&"windows"===Deno.build.os,getCurrentDirectory=IS_NODE_ENV?process.cwd:IS_DENO_ENV?Deno.cwd:()=>"/",exit=IS_NODE_ENV?process.exit:IS_DENO_ENV?Deno.exit:noop,getDynamicImportFunction=namespace=>"__sc_import_"+namespace.replace(/\s|-/g,"_"),patchEsm=()=>index.CSS&&index.CSS.supports&&index.CSS.supports("color","var(--c)")?index.promiseResolve():Promise.resolve().then((function(){return require("./css-shim-0abe6f52.js")})).then(()=>(index.plt.$cssShim$=index.win.__cssshim)?index.plt.$cssShim$.i():0),patchBrowser=()=>{index.plt.$cssShim$=index.win.__cssshim;const scriptElm=Array.from(index.doc.querySelectorAll("script")).find(s=>new RegExp(`/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src)||s.getAttribute("data-stencil-namespace")===index.NAMESPACE),opts=scriptElm["data-opts"]||{};return"onbeforeload"in scriptElm&&!history.scrollRestoration?{then(){}}:(opts.resourcesUrl=new URL(".",new URL(scriptElm.getAttribute("data-resources-url")||scriptElm.src,index.win.location.href)).href,patchDynamicImport(opts.resourcesUrl,scriptElm),index.win.customElements?index.promiseResolve(opts):Promise.resolve().then((function(){return require("./dom-c3bc978c.js")})).then(()=>opts))},patchDynamicImport=(base,orgScriptElm)=>{const importFunctionName="__sc_import_"+index.NAMESPACE.replace(/\s|-/g,"_");try{index.win[importFunctionName]=new Function("w","return import(w);//"+Math.random())}catch(e){const moduleMap=new Map;index.win[importFunctionName]=src=>{const url=new URL(src,base).href;let mod=moduleMap.get(url);if(!mod){const script=index.doc.createElement("script");script.type="module",script.crossOrigin=orgScriptElm.crossOrigin,script.src=URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`],{type:"application/javascript"})),mod=new Promise(resolve=>{script.onload=()=>{resolve(index.win[importFunctionName].m),script.remove()}}),moduleMap.set(url,mod),index.doc.head.appendChild(script)}return mod}}};exports.patchBrowser=patchBrowser,exports.patchEsm=patchEsm;