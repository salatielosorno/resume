!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function o(){document.querySelectorAll(".nav__link-active").forEach((e,t)=>{"profile"==e.dataset.link&&(document.querySelector("#profile").style.height=window.innerHeight-73+"px",document.querySelector("#profile").style.display="none",document.querySelector("#about").style.display="block")})}!function(){let e=document.body.querySelectorAll(".nav__link");e.forEach((t,n)=>{t.addEventListener("click",()=>{!function(e){e.forEach((e,t)=>{let n=document.body.querySelector("#"+e.dataset.link);null==n&&window.innerWidth<=540&&(n=document.body.querySelector("."+e.dataset.link)),null==n&&null==n||(n.style.display="none"),function(e){document.body.querySelectorAll('[data-link="'+e+'"]').forEach((e,t)=>{e.classList.remove("nav__link-active")})}(e.dataset.link)})}(e);let n=document.body.querySelector("#"+t.dataset.link);null==n&&window.innerWidth<=540&&(n=document.body.querySelector("."+t.dataset.link)),null==n&&null==n||(n.style.display="block"),function(e){document.body.querySelectorAll('[data-link="'+e+'"]').forEach((e,t)=>{e.classList.add("nav__link-active")})}(t.dataset.link),document.getElementById("wrap__content").scrollTop=0,document.documentElement.scrollTop=0})})}(),window.onresize=(()=>{o()}),window.onload=(()=>{!function(){if(window.innerWidth<=540){let e=document.querySelector("#profile"),t=document.querySelector("#about");e.style.height=window.innerHeight-73+"px",e.style.display="block",t.style.display="none"}}()}),window.addEventListener("orientationchange",o)},function(e,t,n){}]);