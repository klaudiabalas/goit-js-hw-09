function e(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements[0].value),n=Number(t.target.elements[1].value),l=Number(t.target.elements[2].value);for(let t=0;t<l;t++)e(t,o+t*n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.adb41e6f.js.map