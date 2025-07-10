(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function l(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=l(r);fetch(r.href,e)}})();const s=""+new URL("../vite.svg",import.meta.url).href,o=`<section class="bg-white dark:bg-gray-900">\r
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
        Contact me\r
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
        Download CV\r
      </a>\r
    </div>\r
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">\r
      <img\r
        src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png"\r
        alt="mockup"\r
      />\r
    </div>\r
  </div>\r
</section>\r
`,i=`<nav class="bg-white border-gray-200 dark:bg-gray-900">\r
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
`,d=`<footer>\r
  <div class="container mx-auto py-4">\r
    <p class="text-center text-gray-500">\r
      &copy; 2025 My Website. All rights reserved.\r
    </p>\r
  </div>\r
</footer>\r
`,g=`<section class="bg-white dark:bg-gray-900">\r
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">\r
    <h2\r
      class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"\r
    >\r
      Contact me\r
    </h2>\r
    <p\r
      class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"\r
    >\r
      Got a technical issue? Want to send feedback about a beta feature? Need\r
      details about our Business plan? Let us know.\r
    </p>\r
    <form action="#" class="space-y-8">\r
      <div>\r
        <label\r
          for="email"\r
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"\r
          >Your email</label\r
        >\r
        <input\r
          type="email"\r
          id="email"\r
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"\r
          placeholder="name@flowbite.com"\r
          required\r
        />\r
      </div>\r
      <div>\r
        <label\r
          for="subject"\r
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"\r
          >Subject</label\r
        >\r
        <input\r
          type="text"\r
          id="subject"\r
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"\r
          placeholder="Let us know how we can help you"\r
          required\r
        />\r
      </div>\r
      <div class="sm:col-span-2">\r
        <label\r
          for="message"\r
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"\r
          >Your message</label\r
        >\r
        <textarea\r
          id="message"\r
          rows="6"\r
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"\r
          placeholder="Leave a comment..."\r
        ></textarea>\r
      </div>\r
      <button\r
        type="submit"\r
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"\r
      >\r
        Send message\r
      </button>\r
    </form>\r
  </div>\r
</section>\r
`,c=`<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">\r
  <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">\r
    <h2\r
      class="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"\r
    >\r
      Work experience:\r
    </h2>\r
    <div class="mt-6 flow-root">\r
      <div class="-my-6 divide-y divide-gray-200 dark:divide-gray-800">\r
        <!-- TCS -->\r
        <div class="space-y-4 py-6 md:py-8">\r
          <div class="grid gap-4">\r
            <a\r
              href="#"\r
              class="text-xl font-semibold text-gray-900 hover:underline dark:text-white"\r
              >Senior FullStack Developer · Tata Consultancy Services · (Feb\r
              2023 - Jul 2024)\r
            </a>\r
          </div>\r
\r
          <ul class="list-disc pl-6">\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Implementation of functionalities to the electronic billing system\r
              for Avianca Airlines\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Migrated legacy systems to .NET Core &amp; Angular\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Developed and maintained REST APIs and web apps\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Implementation and integration of Azure Functions into the core\r
              solution\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Collaborated with cross-functional teams and participate in Scrum\r
              ceremonies\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Maintaining stored procedures and functions (in SQL Server)\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Use Azure DevOps for PBIs management (requirements, documentation,\r
              deploy CI/CD, etc.)\r
            </li>\r
          </ul>\r
\r
          <!-- <p class="text-sm font-medium text-gray-500 dark:text-gray-400">\r
            Answered 1 day ago by\r
            <a href="#" class="text-gray-900 hover:underline dark:text-white"\r
              >Bonnie Green</a\r
            >\r
          </p> -->\r
\r
          <div>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              .NET Core\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              Angular\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              Azure Functions\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              SQL Server\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              REST APIs\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- SoulSystem -->\r
        <div class="space-y-4 py-6 md:py-8">\r
          <div class="grid gap-4">\r
            <a\r
              href="#"\r
              class="text-xl font-semibold text-gray-900 hover:underline dark:text-white"\r
              >Full Stack Developer · SoulSystem SAS · (Feb 2020 - Feb 2023)\r
            </a>\r
          </div>\r
\r
          <ul class="list-disc pl-6">\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Designed and developed applications for pharmaceutical and\r
              microbiological laboratories\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Managed full development lifecycle from requirements gathering to\r
              production deployment\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Bug fixes and implementation of improvements\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Automated laboratory processes, reducing manual errors\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Integrated third-party systems (ERP, CRM) through custom APIs\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Training new developers in technical and business functionalities\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Code reviews, requirement analysis, validation of requirements\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              AWS (S3, E2C, Lambda, deployments)\r
            </li>\r
          </ul>\r
\r
          <div>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              Laravel\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              Angular\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              AWS\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              MySQL\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              REST APIs\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- NovoClick -->\r
        <div class="space-y-4 py-6 md:py-8">\r
          <div class="grid gap-4">\r
            <a\r
              href="#"\r
              class="text-xl font-semibold text-gray-900 hover:underline dark:text-white"\r
              >Web Developer · Novoclick · (Sep 2019 – Feb 2020)\r
            </a>\r
          </div>\r
\r
          <ul class="list-disc pl-6">\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Maintaining monolithic (MVC) applications and lead management\r
              dashboards.\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Web developer and systems administrator focused on lead management\r
              and high-impact marketing campaigns through social media.\r
            </li>\r
            <li class="text-base font-normal text-gray-500 dark:text-gray-400">\r
              Integration of landing pages and tools like Zapier, mass emails\r
              senders and WordPress pages.\r
            </li>\r
          </ul>\r
\r
          <!-- <p class="text-sm font-medium text-gray-500 dark:text-gray-400">\r
            Answered 1 day ago by\r
            <a href="#" class="text-gray-900 hover:underline dark:text-white"\r
              >Bonnie Green</a\r
            >\r
          </p> -->\r
\r
          <div>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              PHP\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              .NET Framework\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              WordPress\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              MySQL\r
            </span>\r
            <span\r
              class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"\r
            >\r
              REST APIs\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mt-6 flex items-center justify-center lg:justify-start">\r
      <button\r
        type="button"\r
        class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"\r
      >\r
        View all experiences\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
`,m=`<section class="bg-white dark:bg-gray-900">\r
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">\r
    <div class="max-w-screen-md mb-8 lg:mb-16">\r
      <h2\r
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"\r
      >\r
        Services I offered\r
      </h2>\r
      <p class="text-gray-500 sm:text-xl dark:text-gray-400">\r
        Here at Flowbite we focus on markets where technology, innovation, and\r
        capital can unlock long-term value and drive economic growth.\r
      </p>\r
    </div>\r
    <div\r
      class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"\r
    >\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"\r
              clip-rule="evenodd"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Plan it, create it, launch it. Collaborate seamlessly with all the\r
          organization and hit your marketing goals every month with our\r
          marketing plan.\r
        </p>\r
      </div>\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Protect your organization, devices and stay compliant with our\r
          structured workflows and custom permissions made for you.\r
        </p>\r
      </div>\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"\r
              clip-rule="evenodd"\r
            ></path>\r
            <path\r
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">\r
          Business Automation\r
        </h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Auto-assign tasks, send Slack messages, and much more. Now power up\r
          with hundreds of new templates to help you get started.\r
        </p>\r
      </div>\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"\r
            ></path>\r
            <path\r
              fill-rule="evenodd"\r
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"\r
              clip-rule="evenodd"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Audit-proof software built for critical financial operations like\r
          month-end close and quarterly budgeting.\r
        </p>\r
      </div>\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">\r
          Enterprise Design\r
        </h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Craft beautiful, delightful experiences for both marketing and product\r
          with real cross-company collaboration.\r
        </p>\r
      </div>\r
      <div>\r
        <div\r
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"\r
        >\r
          <svg\r
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"\r
            fill="currentColor"\r
            viewBox="0 0 20 20"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"\r
              clip-rule="evenodd"\r
            ></path>\r
          </svg>\r
        </div>\r
        <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3>\r
        <p class="text-gray-500 dark:text-gray-400">\r
          Keep your company’s lights on with customizable, iterative, and\r
          structured workflows built for all efficient teams and individual.\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,x=o.replace("VITE_LOGO_PLACEHOLDER",s),p=i.replace("VITE_LOGO_PLACEHOLDER",s),u=d.replace("YEAR_PLACEHOLDER",new Date().getFullYear());document.querySelector("#app").innerHTML=x;document.querySelector("#header").innerHTML=p;document.querySelector("#contact").innerHTML=g;document.querySelector("#footer").innerHTML=u;document.querySelector("#about").innerHTML=c;document.querySelector("#services").innerHTML=m;
