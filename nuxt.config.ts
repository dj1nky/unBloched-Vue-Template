import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
// eslint-disable-next-line import/order
import { defineNuxtConfig } from "nuxt/config";

// package.json is the source of truth for the layer version.
const { version } = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  // Absolute paths: "~" would point at the consuming site when used as a layer.
  css: [
    fileURLToPath(new URL("./app/assets/css/tailwind.css", import.meta.url)),
    fileURLToPath(new URL("./app/assets/scss/styles.scss", import.meta.url)),
  ],

  hooks: {
    // Page-local components live in pages/<page>/components: keep them out of the router.
    "pages:extend"(pages) {
      for (let i = pages.length - 1; i >= 0; i--) {
        if (pages[i].file?.includes("/components/")) pages.splice(i, 1);
      }
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    },
  },

  // Override per site in its own nuxt.config.ts (or NUXT_PUBLIC_* env vars).
  runtimeConfig: {
    public: {
      cloudinaryCloudName: "dsuj8bw8y",
      companyName: "unbloched",
      designSystemVersion: version,
    },
  },

  compatibilityDate: "2025-03-11",
  // Lets editors read the props of the layer's JS components from node_modules.
  typescript: {
    tsConfig: {
      compilerOptions: {
        maxNodeModuleJsDepth: 2,
      },
    },
  },

  modules: ["@nuxt/image", "@pinia/nuxt"],

  // Auto-import the layer's stores (e.g. useToastStore) in consuming sites.
  pinia: {
    storesDirs: [fileURLToPath(new URL("./app/stores/**", import.meta.url))],
  },
});
