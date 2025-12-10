# jsebastiandev0.github.io

## Hi there 👋

-- Para correr en ambiente de desarrollo:
    npm install vite
    npm run dev

-- Para desplegar directamente en la rama de gh_pages
    npm run build
    npm run deploy

for UNIX:

  "scripts": {
    "dev": "vite",
    "build": "vite build && copy CNAME dist\\",

replace build to:
    "build": "vite build && cp CNAME dist/"

____________________________________________________________

🔭 