import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-03-11",
});
