import "./style.css";
//import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import templateHtml from "./template.html?raw";

// Reemplazar placeholders con las rutas reales
const html = templateHtml.replace("VITE_LOGO_PLACEHOLDER", viteLogo);
//.replace("JS_LOGO_PLACEHOLDER", javascriptLogo);

document.querySelector("#app").innerHTML = html;

setupCounter(document.querySelector("#counter"));
