(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){var i=document.querySelectorAll(".animated-element"),n=function(o){var e=o.getBoundingClientRect();return e.top>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)},r=function(){i.forEach(function(o){n(o)&&!o.classList.contains("visible")&&o.classList.add("visible")})};window.addEventListener("load",function(){r()}),document.addEventListener("scroll",r)});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".mobile-menu-link"),e=()=>{const t=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!t),i.classList.toggle("is-open")};o.forEach(t=>t.addEventListener("click",e)),n.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(i.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),typeof bodyScrollLock<"u"&&bodyScrollLock.enableBodyScroll&&bodyScrollLock.enableBodyScroll(document.body))})});
//# sourceMappingURL=nft-page-e21bc140.js.map