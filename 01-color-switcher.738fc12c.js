!function(){var t=document.body,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500)})),n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.738fc12c.js.map
