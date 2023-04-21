import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    build: {
      outDir: "dist",
      assetsInclude: ["registerSW.js"],
    },
    plugins: [react(), VitePWA({})],
  };
});
