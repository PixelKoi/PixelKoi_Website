import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    includeAssets: ["**/*.png", "public/*.png"],
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,jpg,,png,svg,webmanifest}"],
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Pixel Koi Company",
          short_name: "Pixel Koi",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#2196f3",
          description:
            "PixelKoi.com: Web Development, Mobile Development, UX/UI Design",
          icons: [
            {
              src: "/img/icons/pixelKoi.png",
              type: "image/png",
              sizes: "192x192",
              purpose: "any maskable",
            },
            {
              src: "img/icons/pixelKoiLarge.png",
              type: "image/png",
              sizes: "520x520",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
  };
});
