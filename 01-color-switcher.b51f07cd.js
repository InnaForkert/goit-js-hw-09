const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r;const d=document.querySelector("body");t.addEventListener("click",(function(){r=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",""),t.removeAttribute("disabled")})),e.setAttribute("disabled","");
//# sourceMappingURL=01-color-switcher.b51f07cd.js.map
