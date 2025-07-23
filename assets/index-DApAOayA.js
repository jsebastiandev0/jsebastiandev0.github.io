(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const d=`<!-- <div class="container">\r
    <div id="navbar"></div>\r
    <div id="ascii-art-container" style="color: var(--primary-color)"></div>\r
    <div id="about"></div>\r
    <div id="skills"></div>\r
    <div id="projects"></div>\r
    <div id="workExperience"></div>\r
    <div id="blog"></div>\r
    <div id="contact"></div>\r
    <div id="footer"></div>\r
</div> -->\r
\r
\r
<div class="container main-container">\r
    <div id="ascii-art-container"></div>\r
    <div class=" subtitle-container">\r
        <span class="subtitle">Software Engineer | Full-Stack Developer | Software Architect Enthusiast</span>\r
    </div>\r
    <div class="menu-button-container">\r
        <button class="menu-button">About</button>\r
        <button class="menu-button">Projects</button>\r
        <button class="menu-button">Skills</button>\r
        <button class="menu-button">Blog</button>\r
        <button class="menu-button">Contact</button>\r
    </div>\r
</div>`,l=String.raw`
      ██╗███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗    ██████╗ ███████╗██╗   ██╗
      ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██╔══██╗██╔════╝██║   ██║
      ██║███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
 ██   ██║╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ╚█████╔╝███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
  ╚════╝ ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝ `,a=String.raw`
      ██╗███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗
      ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║
      ██║███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║
 ██   ██║╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║
 ╚█████╔╝███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║ 
  ╚════╝ ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
        ██████╗ ███████╗██╗   ██╗
        ██╔══██╗██╔════╝██║   ██║
        ██║  ██║█████╗  ██║   ██║
        ██║  ██║██╔══╝  ╚██╗ ██╔╝
        ██████╔╝███████╗ ╚████╔╝ 
        ╚═════╝ ╚══════╝  ╚═══╝ 
  `;function c(){const e=document.getElementById("ascii-art-container");e&&(window.innerWidth<=768?e.textContent=a:e.textContent=l)}window.addEventListener("resize",c);document.addEventListener("DOMContentLoaded",function(){document.getElementById("app").innerHTML=d,c()});window.openSimpleDialog=function(){document.getElementById("simpleDialog").showModal()};window.closeDialog=function(o){document.getElementById(o).close()};window.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})};
