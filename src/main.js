import "./style.css";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

// Importar templates
import mainTemplate from "./templates/main.html?raw";
import headerTemplate from "./templates/header.html?raw";
import footerTemplate from "./templates/footer.html?raw";

// Procesar cada template individualmente
const mainHtml = mainTemplate.replace("VITE_LOGO_PLACEHOLDER", viteLogo);
const headerHtml = headerTemplate.replace("VITE_LOGO_PLACEHOLDER", viteLogo);
const footerHtml = footerTemplate.replace(
  "YEAR_PLACEHOLDER",
  new Date().getFullYear()
);

// Usar los templates
document.querySelector("#app").innerHTML = mainHtml;
document.querySelector("#header").innerHTML = headerHtml;
document.querySelector("#footer").innerHTML = footerHtml;

setupCounter(document.querySelector("#counter"));
