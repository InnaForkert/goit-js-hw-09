function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},u=r.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var u={id:e,exports:{}};return n[e]=u,r.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},r.parcelRequired7c6=u);var o=u("eWCmQ");const l=document.querySelector("input[name=delay]"),i=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]"),d=document.querySelector(".form");let f,m=1,s=Number(l.value),c=Number(i.value),p=Number(a.value);function v(){Math.random()>.3?e(o).Notify.success(`Fulfilled promise ${m} in ${s}ms`):e(o).Notify.failure(`Rejected promise ${m} in ${s}ms`),m+=1,s+=c,m>p&&(clearInterval(f),m=1)}d.addEventListener("submit",(function(e){return s=Number(l.value),c=Number(i.value),p=Number(a.value),e.preventDefault(),new Promise(((e,r)=>{setTimeout((()=>{f=setInterval(v,c)}),s)}))}));
//# sourceMappingURL=03-promises.f2fc249a.js.map
