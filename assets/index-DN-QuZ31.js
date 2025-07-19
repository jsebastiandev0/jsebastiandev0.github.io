(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const s=`<div class="container">\r
    <div id="navbar"></div>\r
    <div id="ascii-art-container"></div>\r
    <div id="about"></div>\r
    <div id="skills"></div>\r
    <div id="projects"></div>\r
    <div id="workExperience"></div>\r
    <div id="blog"></div>\r
    <div id="contact"></div>\r
    <div id="footer"></div>\r
</div>`,d=`<p class="text" style="margin-top: 3em;">\r
    I'm Sebastián, and I've been professionally involved in the fullstack development world for over 6 years.\r
    I've worked with a variety of technologies, cloud services, and business models.\r
    I'm a deeply analytical and observant person—I like to understand the how and why behind everything.\r
    I believe real value lies in attention to detail and finding the logic behind each challenge.\r
</p>`,l="<h1>blog.html</h1>",c=`<h1>\r
    Contact\r
</h1>`,m=`<div class="container">\r
    <div class="terminal-nav">\r
        <header class="terminal-logo">\r
            <div class="logo terminal-prompt"><a href="/" class="no-style">root@JSebastianDev</a></div>\r
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
</div>`,u="<h1>projects.html</h1>",v=`<section>\r
    <header>\r
        <h2>\r
            Technologies I've worked with:\r
        </h2>\r
    </header>\r
    <ul>\r
        <li>Languages: C#, TypeScript, Python, PHP, </li>\r
        <li>Frameworks: .NET, Angular, Laravel, FastAPI, </li>\r
        <li>Databases: MS SQL Server, MySQL, PostgreSQL, MongoDB,</li>\r
        <li>Platforms: Azure, AWS, Firebase, DigitalOcean</li>\r
        <li>Tools: Git, Figma, Power BI, </li>\r
    </ul>\r
\r
</section>`,p=`<section>\r
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
</section>`,h="<h1>footer.html</h1>",f=String.raw`
      ██╗███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗    ██████╗ ███████╗██╗   ██╗
      ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██╔══██╗██╔════╝██║   ██║
      ██║███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
 ██   ██║╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ╚█████╔╝███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
  ╚════╝ ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  

              Software Engineer | Full-Stack Developer | Software Architect Enthusiast`;document.addEventListener("DOMContentLoaded",function(){document.getElementById("app").innerHTML=s,document.getElementById("navbar").innerHTML=m,document.getElementById("about").innerHTML=d,document.getElementById("skills").innerHTML=v,document.getElementById("projects").innerHTML=u,document.getElementById("workExperience").innerHTML=p,document.getElementById("blog").innerHTML=l,document.getElementById("contact").innerHTML=c,document.getElementById("footer").innerHTML=h;const r=document.getElementById("ascii-art-container");r&&(r.textContent=f)});
