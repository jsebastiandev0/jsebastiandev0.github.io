(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const s=`<div class="container">\r
    <div id="navbar"></div>\r
    <div id="ascii-art-container"></div>\r
    <div id="about"></div>\r
    <div id="skills"></div>\r
    <div id="projects"></div>\r
    <div id="workExperience"></div>\r
    <div id="blog"></div>\r
    <div id="contact"></div>\r
    <div id="footer"></div>\r
</div>`,l=`<div class="component-container">\r
    <h3 class="terminal-prompt">root@jsebastiandev:~$\r
        <span style="color: var(--primary-color)">\r
            About Me...\r
        </span>\r
    </h3>\r
    <blockquote>\r
        <p>\r
            I'm Sebastián, and I've been professionally involved in the fullstack development world for over 6 years.\r
            I've worked with a variety of technologies, cloud services, and business models.\r
            I'm a deeply analytical and observant person—I like to understand the how and why behind everything.\r
            I believe real value lies in attention to detail and finding the logic behind each challenge.\r
        </p>\r
    </blockquote>\r
</div>`,c="",d=`<div>\r
    <section>\r
        <header>\r
            <h3 class="terminal-prompt">root@jsebastiandev:~$\r
                <span style="color: var(--primary-color)">\r
                    Contact Me...\r
                </span>\r
            </h3>\r
        </header>\r
        <form action="#">\r
            <fieldset>\r
                <legend>Form legend</legend>\r
                <div class="form-group">\r
                    <label for="email">Email:</label>\r
                    <input id="email" name="email" type="email" required minlength="5"\r
                        placeholder="email@example.com" />\r
                </div>\r
                <div class="form-group">\r
                    <label for="text">Subject:</label>\r
                    <input id="text" name="text" type="text" required minlength="5" placeholder="example" />\r
                </div>\r
                <div class="form-group">\r
                    <label for="textarea">Message:</label>\r
                    <textarea id="textarea" cols="30" rows="5" name="textarea"></textarea>\r
                </div>\r
                <div class="form-group">\r
                    <button class="btn btn-primary" type="submit" role="button" name="submit" id="submit">Send</button>\r
                </div>\r
            </fieldset>\r
        </form>\r
    </section>\r
</div>\r
\r
<br>`,m=`<div class="container">\r
    <div class="terminal-nav">\r
        <header class="terminal-logo">\r
            <div class="logo"><a href="/" class="no-style">root@JSebastianDev</a></div>\r
        </header>\r
        <nav class="terminal-menu">\r
            <ul vocab="https://schema.org/" typeof="BreadcrumbList">\r
                <li><a href="/" class="menu-item"><span>Light</span></a>\r
                    <meta property="position">\r
                </li>\r
                <li><a href="/dark" class="menu-item"><span>Dark</span></a>\r
                    <meta property="position">\r
            </ul>\r
        </nav>\r
    </div>\r
</div>`,p=`<div class="component-container">\r
    <h3 class="terminal-prompt">root@jsebastiandev:~$\r
        <span style="color: var(--primary-color)">\r
            Some of my projects...\r
        </span>\r
    </h3>\r
\r
\r
\r
    <section>\r
        <div class="terminal-card">\r
            <header>Electronic Components Inventory</header>\r
            <div>\r
                <p>\r
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas\r
                    ex vero enim in doloribus officiis ullam vel nam esse sapiente velit\r
                    incidunt. Eaque quod et, aut maiores excepturi sint.\r
                </p>\r
                <!-- <figure>\r
                    <img src="https://picsum.photos/1000/600?random&imageWithCaption" alt="Image with caption"\r
                        title="Image with caption" />\r
                    <figcaption>Build with: HTML, CSS, JavaScript</figcaption>\r
                </figure> -->\r
\r
                <div class="button-group">\r
                    <button class="btn btn-primary">Details...</button>\r
                    <button class="btn btn-secondary"> GitHub</button>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <br>\r
\r
    <section>\r
        <div class="terminal-card">\r
            <header>FinanzApp Project </header>\r
            <div>\r
                <p>\r
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas\r
                    ex vero enim in doloribus officiis ullam vel nam esse sapiente velit\r
                    incidunt. Eaque quod et, aut maiores excepturi sint.\r
                </p>\r
                <!-- <figure>\r
                    <img src="https://picsum.photos/1000/600?random&imageWithCaption" alt="Image with caption"\r
                        title="Image with caption" />\r
                    <figcaption>Build with: HTML, CSS, JavaScript</figcaption>\r
                </figure> -->\r
\r
                <div class="button-group">\r
                    <button class="btn btn-primary">Details...</button>\r
                    <button class="btn btn-secondary"> GitHub</button>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <br>\r
\r
    <section>\r
        <div class="terminal-card">\r
            <header>Structured Daily Workflow\r
            </header>\r
            <div>\r
                <p>\r
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas\r
                    ex vero enim in doloribus officiis ullam vel nam esse sapiente velit\r
                    incidunt. Eaque quod et, aut maiores excepturi sint.\r
                </p>\r
                <!-- <figure>\r
                    <img src="https://picsum.photos/1000/600?random&imageWithCaption" alt="Image with caption"\r
                        title="Image with caption" />\r
                    <figcaption>Build with: HTML, CSS, JavaScript</figcaption>\r
                </figure> -->\r
\r
                <div class="button-group">\r
                    <button class="btn btn-primary">Details...</button>\r
                    <button class="btn btn-secondary"> GitHub</button>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <br>\r
</div>`,u=`<section>\r
    <header>\r
        <h3 class="terminal-prompt">root@jsebastiandev:~$\r
            <span style="color: var(--primary-color)">Technologies I've worked with...</span>\r
        </h3>\r
    </header>\r
    <div class="terminal-alert">\r
        <span style="color: var(--primary-color)">Languages:</span> C#, TypeScript, Python, PHP,\r
    </div>\r
    <div class="terminal-alert">\r
        <span style="color: var(--primary-color)">Frameworks:</span> .NET, Angular, Laravel, FastAPI,\r
    </div>\r
    <div class="terminal-alert">\r
        <span style="color: var(--primary-color)">Databases:</span> MS SQL Server, MySQL, PostgreSQL, MongoDB,\r
    </div>\r
    <div class="terminal-alert">\r
        <span style="color: var(--primary-color)">Platforms:</span> Azure, AWS, Firebase, DigitalOcean\r
    </div>\r
    <div class="terminal-alert">\r
        <span style="color: var(--primary-color)">Tools:</span> Git, Figma, Power BI,\r
    </div>\r
</section>`,v=`<!-- <section>\r
    <header>\r
        <h2 id="Timeline">Timeline</h2>\r
    </header>\r
    <div class="terminal-timeline">\r
        <div class="terminal-card">\r
            <header>Card Title</header>\r
            <div>\r
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas\r
                ex vero enim in doloribus officiis ullam vel nam esse sapiente velit\r
                incidunt. Eaque quod et, aut maiores excepturi sint.\r
            </div>\r
        </div>\r
        <div class="terminal-card">\r
            <header>Card Title</header>\r
            <div>\r
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas\r
                ex vero enim in doloribus officiis ullam vel nam esse sapiente velit\r
                incidunt. Eaque quod et, aut maiores excepturi sint.\r
            </div>\r
        </div>\r
    </div>\r
    <br />\r
</section> -->`,g="",b=String.raw`
      ██╗███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗    ██████╗ ███████╗██╗   ██╗
      ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██╔══██╗██╔════╝██║   ██║
      ██║███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
 ██   ██║╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ╚█████╔╝███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
  ╚════╝ ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  

              Software Engineer | Full-Stack Developer | Software Architect Enthusiast`;document.addEventListener("DOMContentLoaded",function(){document.getElementById("app").innerHTML=s,document.getElementById("navbar").innerHTML=m,document.getElementById("about").innerHTML=l,document.getElementById("skills").innerHTML=u,document.getElementById("projects").innerHTML=p,document.getElementById("workExperience").innerHTML=v,document.getElementById("blog").innerHTML=c,document.getElementById("contact").innerHTML=d,document.getElementById("footer").innerHTML=g;const r=document.getElementById("ascii-art-container");r&&(r.textContent=b)});window.openSimpleDialog=function(){document.getElementById("simpleDialog").showModal()};window.closeDialog=function(i){document.getElementById(i).close()};window.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})};
