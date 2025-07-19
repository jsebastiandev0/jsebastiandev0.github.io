import "./style.css";
import viteLogo from "/vite.svg";

// Import all templates
import mainTemplate from "./templates/main.html?raw";
import headerTemplate from "./templates/header.html?raw";
import footerTemplate from "./templates/footer.html?raw";
import contactTemplate from "./templates/contact.html?raw";
import workExperienceTemplate from "./templates/workExperience.html?raw";
import servicesTemplate from "./templates/services.html?raw";
import projectsTemplate from "./templates/projects.html?raw";

// Replace placeholders in templates
// This is a simple example, you can use a more sophisticated templating engine if needed

const mainHtml = mainTemplate.replace("VITE_LOGO_PLACEHOLDER", viteLogo);
const headerHtml = headerTemplate.replace("VITE_LOGO_PLACEHOLDER", viteLogo);
const footerHtml = footerTemplate.replace(
  "YEAR_PLACEHOLDER",
  new Date().getFullYear()
);

// Use the templates
document.querySelector("#app").innerHTML = mainHtml;
document.querySelector("#header").innerHTML = headerHtml;
document.querySelector("#contact").innerHTML = contactTemplate;
document.querySelector("#footer").innerHTML = footerHtml;
document.querySelector("#workExperience").innerHTML = workExperienceTemplate;
document.querySelector("#services").innerHTML = servicesTemplate;
document.querySelector("#projects").innerHTML = projectsTemplate;
// Add any additional JavaScript functionality here
