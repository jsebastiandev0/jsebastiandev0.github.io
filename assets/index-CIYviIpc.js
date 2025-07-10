(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function l(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=l(r);fetch(r.href,e)}})();const s=""+new URL("../vite.svg",import.meta.url).href,i=`<section class="bg-white dark:bg-gray-900">\r
  <div\r
    class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"\r
  >\r
    <div class="mt-8 lg:mt-0 lg:col-span-5 flex justify-center">\r
      <img\r
        src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png"\r
        alt="mockup"\r
      />\r
    </div>\r
    <div class="mr-auto place-self-center lg:col-span-7">\r
      <h1\r
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"\r
      >\r
        Hello there, I'm Sebastian, Software Engineer\r
      </h1>\r
      <p\r
        class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"\r
      >\r
        FullStack Developer | Solutions Architect Enthusiast | Systems Designer\r
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
  </div>\r
</section>\r
<section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">\r
  <div\r
    class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16"\r
  >\r
    <div class="lg:col-span-5 lg:mt-0">\r
      <a href="#">\r
        <img\r
          class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"\r
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"\r
          alt="peripherals"\r
        />\r
        <img\r
          class="mb-4 hidden dark:block md:h-full"\r
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"\r
          alt="peripherals"\r
        />\r
      </a>\r
    </div>\r
    <div class="me-auto place-self-center lg:col-span-7">\r
      <h1\r
        class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl"\r
      >\r
        A little about me...\r
      </h1>\r
      <p class="mb-6 text-gray-500 dark:text-gray-400">\r
        Software Engineer with 6+ years of experience designing and developing\r
        scalable software solutions across multiple technology stacks.\r
        Implementing best practices and agile methodologies to deliver\r
        high-quality systems that solve technical challenges. Passionate about\r
        solutions architecture, systems design, and driving business value\r
        through robust, maintainable code.\r
      </p>\r
      <a\r
        href="#"\r
        class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"\r
      >\r
        Know more about me?\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`,o=`<nav class="bg-white border-gray-200 dark:bg-gray-900">\r
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
`,m=`<section class="bg-white dark:bg-gray-900 antialiased">\r
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">\r
    <div class="max-w-2xl mx-auto text-center">\r
      <h2\r
        class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"\r
      >\r
        Services I offer\r
      </h2>\r
      <p\r
        class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400"\r
      >\r
        Crafted with skill and care to help our clients grow their business!\r
      </p>\r
    </div>\r
\r
    <div\r
      class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"\r
    >\r
      <div class="space-y-4">\r
        <span\r
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"\r
        >\r
          Alphabet Inc.\r
        </span>\r
        <h3\r
          class="text-2xl font-bold leading-tight text-gray-900 dark:text-white"\r
        >\r
          Official website\r
        </h3>\r
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">\r
          Flowbite helps you connect with friends, family and communities of\r
          people who share your interests.\r
        </p>\r
        <a\r
          href="#"\r
          title=""\r
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"\r
          role="button"\r
        >\r
          View case study\r
          <svg\r
            aria-hidden="true"\r
            class="w-5 h-5 ml-2 -mr-1"\r
            xmlns="http://www.w3.org/2000/svg"\r
            viewBox="0 0 20 20"\r
            fill="currentColor"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"\r
              clip-rule="evenodd"\r
            />\r
          </svg>\r
        </a>\r
      </div>\r
\r
      <div class="space-y-4">\r
        <span\r
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"\r
        >\r
          Microsoft Corp.\r
        </span>\r
        <h3\r
          class="text-2xl font-bold leading-tight text-gray-900 dark:text-white"\r
        >\r
          Management system\r
        </h3>\r
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">\r
          Flowbite helps you connect with friends, family and communities of\r
          people who share your interests.\r
        </p>\r
        <a\r
          href="#"\r
          title=""\r
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"\r
          role="button"\r
        >\r
          View case study\r
          <svg\r
            aria-hidden="true"\r
            class="w-5 h-5 ml-2 -mr-1"\r
            xmlns="http://www.w3.org/2000/svg"\r
            viewBox="0 0 20 20"\r
            fill="currentColor"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"\r
              clip-rule="evenodd"\r
            />\r
          </svg>\r
        </a>\r
      </div>\r
\r
      <div class="space-y-4">\r
        <span\r
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"\r
        >\r
          Adobe Inc.\r
        </span>\r
        <h3\r
          class="text-2xl font-bold leading-tight text-gray-900 dark:text-white"\r
        >\r
          Logo design\r
        </h3>\r
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">\r
          Flowbite helps you connect with friends, family and communities of\r
          people who share your interests.\r
        </p>\r
        <a\r
          href="#"\r
          title=""\r
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"\r
          role="button"\r
        >\r
          View case study\r
          <svg\r
            aria-hidden="true"\r
            class="w-5 h-5 ml-2 -mr-1"\r
            xmlns="http://www.w3.org/2000/svg"\r
            viewBox="0 0 20 20"\r
            fill="currentColor"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"\r
              clip-rule="evenodd"\r
            />\r
          </svg>\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,x=`<section class="bg-white dark:bg-gray-900">\r
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">\r
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">\r
      <h2\r
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"\r
      >\r
        Projects\r
      </h2>\r
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">\r
        You can check all my projects on my Gitub profile, but here are some of\r
        the most recent ones I have worked on.\r
      </p>\r
    </div>\r
    <div class="grid gap-8 lg:grid-cols-3">\r
      <article\r
        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"\r
      >\r
        <div class="flex justify-between items-center mb-5 text-gray-500">\r
          <span\r
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"\r
          >\r
            <svg\r
              class="mr-1 w-3 h-3"\r
              fill="currentColor"\r
              viewBox="0 0 20 20"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"\r
              ></path>\r
            </svg>\r
            Tutorial\r
          </span>\r
          <span class="text-sm">14 days ago</span>\r
        </div>\r
        <h2\r
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"\r
        >\r
          <a href="#">How to quickly deploy a static website</a>\r
        </h2>\r
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">\r
          Static websites are now used to bootstrap lots of websites and are\r
          becoming the basis for a variety of tools that even influence both web\r
          designers and developers influence both web designers and developers.\r
        </p>\r
        <div class="flex justify-between items-center">\r
          <div class="flex items-center space-x-4">\r
            <img\r
              class="w-7 h-7 rounded-full"\r
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"\r
              alt="Jese Leos avatar"\r
            />\r
            <span class="font-medium dark:text-white"> Jese Leos </span>\r
          </div>\r
          <a\r
            href="#"\r
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"\r
          >\r
            Read more\r
            <svg\r
              class="ml-2 w-4 h-4"\r
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
        </div>\r
      </article>\r
      <article\r
        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"\r
      >\r
        <div class="flex justify-between items-center mb-5 text-gray-500">\r
          <span\r
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"\r
          >\r
            <svg\r
              class="mr-1 w-3 h-3"\r
              fill="currentColor"\r
              viewBox="0 0 20 20"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                fill-rule="evenodd"\r
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"\r
                clip-rule="evenodd"\r
              ></path>\r
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>\r
            </svg>\r
            Article\r
          </span>\r
          <span class="text-sm">14 days ago</span>\r
        </div>\r
        <h2\r
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"\r
        >\r
          <a href="#">Our first project with React</a>\r
        </h2>\r
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">\r
          Static websites are now used to bootstrap lots of websites and are\r
          becoming the basis for a variety of tools that even influence both web\r
          designers and developers influence both web designers and developers.\r
        </p>\r
        <div class="flex justify-between items-center">\r
          <div class="flex items-center space-x-4">\r
            <img\r
              class="w-7 h-7 rounded-full"\r
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"\r
              alt="Bonnie Green avatar"\r
            />\r
            <span class="font-medium dark:text-white"> Bonnie Green </span>\r
          </div>\r
          <a\r
            href="#"\r
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"\r
          >\r
            Read more\r
            <svg\r
              class="ml-2 w-4 h-4"\r
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
        </div>\r
      </article>\r
      <article\r
        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"\r
      >\r
        <div class="flex justify-between items-center mb-5 text-gray-500">\r
          <span\r
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"\r
          >\r
            <svg\r
              class="mr-1 w-3 h-3"\r
              fill="currentColor"\r
              viewBox="0 0 20 20"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                fill-rule="evenodd"\r
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"\r
                clip-rule="evenodd"\r
              ></path>\r
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>\r
            </svg>\r
            Article\r
          </span>\r
          <span class="text-sm">14 days ago</span>\r
        </div>\r
        <h2\r
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"\r
        >\r
          <a href="#">Our first project with React</a>\r
        </h2>\r
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">\r
          Static websites are now used to bootstrap lots of websites and are\r
          becoming the basis for a variety of tools that even influence both web\r
          designers and developers influence both web designers and developers.\r
        </p>\r
        <div class="flex justify-between items-center">\r
          <div class="flex items-center space-x-4">\r
            <img\r
              class="w-7 h-7 rounded-full"\r
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"\r
              alt="Bonnie Green avatar"\r
            />\r
            <span class="font-medium dark:text-white"> Bonnie Green </span>\r
          </div>\r
          <a\r
            href="#"\r
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"\r
          >\r
            Read more\r
            <svg\r
              class="ml-2 w-4 h-4"\r
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
        </div>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
`,p=i.replace("VITE_LOGO_PLACEHOLDER",s),u=o.replace("VITE_LOGO_PLACEHOLDER",s),y=d.replace("YEAR_PLACEHOLDER",new Date().getFullYear());document.querySelector("#app").innerHTML=p;document.querySelector("#header").innerHTML=u;document.querySelector("#contact").innerHTML=g;document.querySelector("#footer").innerHTML=y;document.querySelector("#workExperience").innerHTML=c;document.querySelector("#services").innerHTML=m;document.querySelector("#projects").innerHTML=x;
