(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();const l=""+new URL("../vite.svg",import.meta.url).href;function d(o){let n=0;const t=a=>{n=a,o.innerHTML=`count is ${n}`};o.addEventListener("click",()=>t(n+1)),t(0)}const i=`<section class="bg-white dark:bg-gray-900">\r
  <div\r
    class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"\r
  >\r
    <div class="mr-auto place-self-center lg:col-span-7">\r
      <h1\r
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"\r
      >\r
        Hello there, I'm Sebastian, Software Engineer\r
      </h1>\r
      <p\r
        class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"\r
      >\r
        Software Engineer with 6+ years of experience designing and developing\r
        scalable software solutions across multiple technology stacks.\r
        Implementing best practices and agile methodologies to deliver\r
        high-quality systems that solve technical challenges. Passionate about\r
        solutions architecture, systems design, and driving business value\r
        through robust, maintainable code.\r
      </p>\r
      <a\r
        href="#"\r
        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"\r
      >\r
        Get started\r
        <svg\r
          class="w-5 h-5 ml-2 -mr-1"\r
          fill="currentColor"\r
          viewBox="0 0 20 20"\r
          xmlns="http://www.w3.org/2000/svg"\r
        >\r
          <path\r
            fill-rule="evenodd"\r
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"\r
            clip-rule="evenodd"\r
          ></path>\r
        </svg>\r
      </a>\r
      <a\r
        href="#"\r
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"\r
      >\r
        Speak to Sales\r
      </a>\r
    </div>\r
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">\r
      <img\r
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"\r
        alt="mockup"\r
      />\r
    </div>\r
  </div>\r
</section>\r
`,c=`<nav class="bg-white border-gray-200 dark:bg-gray-900">\r
  <div\r
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"\r
  >\r
    <a\r
      href="https://flowbite.com/"\r
      class="flex items-center space-x-3 rtl:space-x-reverse"\r
    >\r
      <img\r
        src="https://flowbite.com/docs/images/logo.svg"\r
        class="h-8"\r
        alt="Flowbite Logo"\r
      />\r
      <span\r
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"\r
        >JSebastianDev0</span\r
      >\r
    </a>\r
    <button\r
      data-collapse-toggle="navbar-default"\r
      type="button"\r
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"\r
      aria-controls="navbar-default"\r
      aria-expanded="false"\r
    >\r
      <span class="sr-only">Open main menu</span>\r
      <svg\r
        class="w-5 h-5"\r
        aria-hidden="true"\r
        xmlns="http://www.w3.org/2000/svg"\r
        fill="none"\r
        viewBox="0 0 17 14"\r
      >\r
        <path\r
          stroke="currentColor"\r
          stroke-linecap="round"\r
          stroke-linejoin="round"\r
          stroke-width="2"\r
          d="M1 1h15M1 7h15M1 13h15"\r
        />\r
      </svg>\r
    </button>\r
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">\r
      <ul\r
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"\r
      >\r
        <li>\r
          <a\r
            href="#"\r
            class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"\r
            aria-current="page"\r
            >Home</a\r
          >\r
        </li>\r
        <li>\r
          <a\r
            href="#"\r
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"\r
            >About</a\r
          >\r
        </li>\r
        <li>\r
          <a\r
            href="#"\r
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"\r
            >Projects</a\r
          >\r
        </li>\r
        <li>\r
          <a\r
            href="#"\r
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"\r
            >Blog</a\r
          >\r
        </li>\r
        <li>\r
          <a\r
            href="#"\r
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"\r
            >Contact</a\r
          >\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
</nav>\r
`,g=`<footer>\r
  <div class="container mx-auto py-4">\r
    <p class="text-center text-gray-500">\r
      &copy; 2023 My Website. All rights reserved.\r
    </p>\r
  </div>\r
</footer>\r
`,m=i.replace("VITE_LOGO_PLACEHOLDER",l),u=c.replace("VITE_LOGO_PLACEHOLDER",l),p=g.replace("YEAR_PLACEHOLDER",new Date().getFullYear());document.querySelector("#app").innerHTML=m;document.querySelector("#header").innerHTML=u;document.querySelector("#footer").innerHTML=p;d(document.querySelector("#counter"));
