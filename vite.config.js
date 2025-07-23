import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
  },
  // plugins: [tailwindcss()],
  server: {
    host: true, // for access from other devices in the network
  },
});
