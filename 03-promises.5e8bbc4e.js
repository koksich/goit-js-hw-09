function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function u(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}function l({position:t,delay:n}){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}function a({position:t,delay:n}){e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.delay.value),n=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value);!function(e,t,n){let o=e;for(let e=1;e<=n;e+=1)u(e,o).then(l).catch(a),o+=t}(t,n,o)}));
//# sourceMappingURL=03-promises.5e8bbc4e.js.map