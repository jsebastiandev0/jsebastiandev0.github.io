(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const a=""+new URL("../vite.svg",import.meta.url).href;function l(s){let e=0;const t=o=>{e=o,s.innerHTML=`count is ${e}`};s.addEventListener("click",()=>t(e+1)),t(0)}const d=`<div class="max-w-4xl mx-auto">\r
  <hr />\r
  <h1>Hello there, I'm Sebastian!</h1>\r
  <h2>Software Engineer, FullStack Developer & Architect Enthusiast</h2>\r
  <p>\r
    Welcome to my personal website, portfolio, and blog. Here you can find\r
    information about my projects, skills, and interests.\r
  </p>\r
\r
  <footer>\r
    <p>© 2025 JSebastian Dev. All rights reserved. >:)</p>\r
  </footer>\r
  <hr />\r
\r
  <div class="card">\r
    <button id="counter" type="button"></button>\r
  </div>\r
  <hr />\r
</div>\r
<div class="bg-gray-900 min-h-screen flex items-center justify-center p-8">\r
  <div class="max-w-4xl mx-auto">\r
    <h1 class="text-4xl font-bold text-white text-center mb-12">\r
      Botones Llamativos\r
    </h1>\r
\r
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">\r
      <button\r
        class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"\r
      >\r
        <span class="relative z-10">✨ Botón Mágico</span>\r
        <div\r
          class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"\r
        ></div>\r
      </button>\r
\r
      <button\r
        class="relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"\r
      >\r
        <span class="relative z-10">🚀 Cyber Button</span>\r
        <div\r
          class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"\r
        ></div>\r
        <div\r
          class="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-20 animate-ping"\r
        ></div>\r
      </button>\r
\r
      <button\r
        class="relative px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"\r
      >\r
        <span class="relative z-10">🔥 Botón Fuego</span>\r
        <div\r
          class="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 hover:opacity-20 transition-opacity duration-300"\r
        ></div>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="flex flex-col items-center rounded-2xl">\r
  <div>\r
    <img class="size-48 shadow-xl" alt="" src="/img/cover.png" />\r
  </div>\r
  <div class="flex">\r
    <span>Class Warfare</span>\r
    <span>The Anti-Patterns</span>\r
    <span class="flex">\r
      <span>No. 4</span>\r
      <span>·</span>\r
      <span>2025</span>\r
    </span>\r
  </div>\r
</div>\r
`,c=d.replace("VITE_LOGO_PLACEHOLDER",a);document.querySelector("#app").innerHTML=c;l(document.querySelector("#counter"));
