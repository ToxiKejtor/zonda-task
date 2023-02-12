import { fileURLToPath, URL } from "node:url";

//import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    setupFiles: "../vuetify.config.ts",
    deps: {
      inline: ["vuetify"],
    },
    globals: true,
  },
});
