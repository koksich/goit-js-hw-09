function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");function i(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n(e,t):o(e,t)}),t)}))}function l(t,r){e(u).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)}function a(t,r){e(u).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.delay.value),r=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);let o=t;for(let e=1;e<=n;e+=1)i(e,o).then(l).catch(a),o+=r}));
//# sourceMappingURL=03-promises.b11e2d1b.js.map