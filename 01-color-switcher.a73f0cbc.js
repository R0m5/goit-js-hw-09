const t=document.body,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500)})),d.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a73f0cbc.js.map
