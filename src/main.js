import "./style.css";
import main from "./main.html?raw";
import about from "./components/about.html?raw";
import blog from "./components/blog.html?raw";
import contact from "./components/contact.html?raw";
import navbar from "./components/navbar.html?raw";
import projects from "./components/projects.html?raw";
import skills from "./components/skills.html?raw";
import workExperience from "./components/workExperience.html?raw";
import footer from "./components/footer.html?raw";

// prettier-ignore
const asciiArt = String.raw`
      ██╗███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗    ██████╗ ███████╗██╗   ██╗
      ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██╔══██╗██╔════╝██║   ██║
      ██║███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
 ██   ██║╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ╚█████╔╝███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
  ╚════╝ ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  `;



const asciiArt2 = String.raw`
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
   ╚═════╝ ╚══════╝  ╚═══╝   `;

function setAsciiArt() {
    const container = document.getElementById('ascii-art-container');
    if (container) {
        if (window.innerWidth <= 768) {
            container.textContent = asciiArt2;
        } else {
            container.textContent = asciiArt;
        }
    }
}

window.addEventListener('resize', setAsciiArt);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("app").innerHTML = main;
    setAsciiArt();

    // add components to the app
    // document.getElementById("navbar").innerHTML = navbar;
    // document.getElementById("about").innerHTML = about;
    // document.getElementById("skills").innerHTML = skills;
    // document.getElementById("projects").innerHTML = projects;
    // document.getElementById("workExperience").innerHTML = workExperience;
    // document.getElementById("blog").innerHTML = blog;
    // document.getElementById("contact").innerHTML = contact;
    // document.getElementById("footer").innerHTML = footer;
});


// Function to open a simple dialog 
window.openSimpleDialog = function openSimpleDialog() {
    const dialog = document.getElementById('simpleDialog');
    dialog.showModal();
}

window.closeDialog = function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.close();
}

window.scrollToTop = function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}