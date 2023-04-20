import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
      assetsInclude: ["registerSW.js"],
    },
    plugins: [
      react(),
      VitePWA({
        manifest: {
          name: "Pixel Koi Company",
          short_name: "Pixel Koi",
          description:
            "PixelKoi.com: Web Development, Mobile Development, UX/UI Design",
          icons: [
            {
              src: "dist/pixelKoi.png",
              type: "image/png",
              sizes: "192x192",
              purpose: "any maskable",
            },
            {
              src: "dist/pixelKoiLarge.png",
              type: "image/png",
              sizes: "520x520",
              purpose: "any maskable",
            },
          ],
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#2196f3",
        },
      }),
    ],
  };
});
