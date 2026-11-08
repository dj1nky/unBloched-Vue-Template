import { defineNuxtConfig } from "nuxt/config";

// Bump this to adopt layer updates (see CHANGELOG in the layer repo).
const designSystemVersion = "1.0.0";

export default defineNuxtConfig({
  // Required in the site too: makes ./app the source dir so site files can override layer files.
  future: { compatibilityVersion: 4 },

  // Design system version: must match a released tag of the layer repo.
  extends: [
    [
      `github:dj1nky/unBloched-Vue-Template#v${designSystemVersion}`,
      { install: true },
    ],
  ],

  runtimeConfig: {
    public: {
      cloudinaryCloudName: "",
      companyName: "",
    },
  },

  app: {
    head: {
      title: "Your Website Title",
      titleTemplate: "%s | Your Brand Name",
      meta: [
        { name: "description", content: "Your website description" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Your Brand Name" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  compatibilityDate: "2025-03-11",
});
