const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let o=null;t.disabled=!0,e.addEventListener("click",(()=>{o=setInterval((()=>{color=`#${Math.floor(16777215*Math.random()).toString(16)}`,d.style.backgroundColor=color}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(o),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a6726924.js.map
