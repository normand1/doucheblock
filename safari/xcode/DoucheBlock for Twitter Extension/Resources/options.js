!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o={blockWords:"catalyst,innovator,futurist,serial entrepreneur,midas list",confirm:!0,count:0,whiteList:{}},r=navigator.userAgent.indexOf("Firefox")>-1,s=navigator.userAgent.indexOf("Edg/")>-1,i=!!window.opr,a=navigator.vendor.match(/apple/i)&&!navigator.userAgent.match(/crios/i)&&!navigator.userAgent.match(/fxios/i),l=t=>r?browser:window.chrome,c={github:{label:"source",url:"https://github.com/MobileFirstLLC/doucheblock",svgPath:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"},rate:{...r?{label:"rate_addon",url:"https://addons.mozilla.org/en-US/firefox/addon/doucheblock-for-twitter"}:!(s||i||r||a)?{label:"rate_extension",url:"https://chrome.google.com/webstore/detail/eeledoologbepiegnccedjigjkblhmhi/reviews"}:s?{label:"rate_addon",url:"https://microsoftedge.microsoft.com/addons/detail/jjamkfoaemeiacomhpidlhkjinmpmkpj"}:i?{label:"rate_extension",url:"https://addons.opera.com/en/extensions/details/doucheblock-for-twitter/"}:a?{label:"rate_extension",url:"about:blank"}:void 0,svgPath:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"},twitter:{label:"share_twitter",url:"https://twitter.com/intent/tweet?text=%23DoucheBlock%20",svgPath:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}};class u{static get keys(){return{blockWords:"blockWords",confirm:"confirm",count:"count",whiteList:"whiteList"}}static get storageImplementation(){return i||r?chrome.storage.local:chrome.storage.sync}static parseKeywords(t){return(t[u.keys.blockWords]||o.blockWords).split(",")}static getSettings(t){u.get(null,e=>{const{confirm:n,blockWords:r,whiteList:s}=u.keys,i={...o,...e,[n]:void 0===e[n]?o.confirm:e[n],[r]:u.parseKeywords(e),[s]:e[s]||{}};t(i)})}static getBlockCount(t){u.get(u.keys.count,e=>t(parseInt(e[u.keys.count]||0)))}static setBlockedWords(t,e){const n=(t||"").toLowerCase().split(",").map(t=>(t||"").trim()).filter(t=>t.length).join(",");u.save(u.keys.blockWords,n,e)}static setConfirmationSetting(t,e){u.save(u.keys.confirm,!!t,e)}static incrementCount(){u.get(u.keys.count,t=>{const e=(t[u.keys.count]||0)+1;u.save(u.keys.count,e),l().runtime.sendMessage({increment:e})})}static addWhiteList(t,e){u.get(u.keys.whiteList,n=>{const o={...n[u.keys.whiteList]||{},...t};u.save(u.keys.whiteList,o),e(o)})}static get(t,e){u.storageImplementation.get(t,e)}static save(t,e,n){u.storageImplementation.set({[t]:e},n)}}class d{constructor(t){d.setTitle(t),d.setupShare()}static translate(t,e){return window.chrome.i18n.getMessage(t,e)}static setTitle(t){d.getElement("title").innerText=document.title=d.translate(t)}static getElement(t){return document.getElementById(t)}static setupShare(){const t=Object.values(c).map(d.makeShareLink).join(""),e=document.createElement("p");e.innerHTML=d.translate("links"),d.getElement("share").innerHTML=t,d.getElement("share").prepend(e)}static makeShareLink({label:t,url:e,svgPath:n}){const o=`<svg viewBox="0 0 24 24"><path d="${n}" /></svg>`;return`<a href="${e}" title="${d.translate(t)}">${o}</a>`}}class g extends d{constructor(){super("appName"),g.getElement("block-label").innerText=g.translate("blockedWords"),g.getElement("confirm-label").innerText=g.translate("confirmBlock"),g.getElement("help").innerText=g.translate("help"),g.saveButton.onclick=g.saveButton.onkeypress=g.saveSettings,g.resetButtonText(),g.loadSettings(),g.loadIntro()}static get saveButton(){return g.getElement("save")}static get blockInput(){return g.getElement("block-words")}static get confirmInput(){return g.getElement("confirm")}static get isIntro(){return""===new URLSearchParams(window.location.search).get("i")}static resetButtonText(){g.saveButton.innerText=g.translate("saveChanges")}static saveSettings(){u.setBlockedWords(g.blockInput.value,()=>{u.setConfirmationSetting(g.confirmInput.checked,()=>{g.saveButton.innerText=g.translate("saved"),class{static notifyTabsOfUpdate(){l().tabs.query({},t=>{for(let e=0;e<t.length;++e)l().tabs.sendMessage(t[e].id,{updateSettings:!0})})}}.notifyTabsOfUpdate(),window.setTimeout(g.resetButtonText,1e3)})})}static loadSettings(){u.getSettings(t=>{const e=parseInt(t[u.keys.count]);g.blockInput.value=(t[u.keys.blockWords]||[]).join(", "),g.confirmInput.checked=t[u.keys.confirm],e>1&&!g.isIntro&&(g.getElement("block-count").innerText=g.translate("blockCount",e.toString()),g.getElement("bmc").setAttribute("visible","visible"))})}static loadIntro(){if(g.isIntro){const t=g.getElement("intro-container"),e=g.getElement("close-intro");g.getElement("intro-greeting").innerHTML=g.translate("intro_greeting"),g.getElement("intro-text").innerHTML=g.translate("intro_text"),g.getElement("intro").parentNode.style.display="block",e.onclick=e=>t.parentNode.removeChild(t),e.onkeypress=e=>t.parentNode.removeChild(t)}}}new g}]);