import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/scss/styles.scss"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Your Website Title",
      titleTemplate: "%s | Your Brand Name",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "Your website description" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://yourwebsite.com/" },
        { property: "og:title", content: "Your Website Title" },
        { property: "og:description", content: "Your website description" },
        { property: "og:image", content: "/your-og-image.jpg" },
        { property: "og:site_name", content: "Your Brand Name" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://yourwebsite.com/" },
        { name: "twitter:title", content: "Your Website Title" },
        { name: "twitter:description", content: "Your website description" },
        { name: "twitter:image", content: "/your-og-image.jpg" },

        // Additional important SEO tags
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Your Name or Company" },
        { name: "keywords", content: "keyword1, keyword2, keyword3" },
        { "http-equiv": "Content-Language", content: "en" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://yourwebsite.com/" },
        { rel: "alternate", hreflang: "en", href: "https://yourwebsite.com/" },
        { rel: "home", href: "https://yourwebsite.com/" },
        { rel: "about", href: "https://yourwebsite.com/about" },
        { rel: "contact", href: "https://yourwebsite.com/contact" },
      ],
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    },
  },

  compatibilityDate: "2025-03-11",
  modules: ["@nuxt/image", "@pinia/nuxt"],
});
