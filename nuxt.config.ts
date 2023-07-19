// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  pages: true,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://127.0.0.1:3000",
    },
  },
  app: {
    head: {
      title: "Duypbaha",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  experimental: {
    // viewTransition: true,

    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],

  routeRules: {},
  i18n: {
    defaultLocale: "tm",
    locales: [
      {
        code: "tm",
        file: "tm.json",
      },
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ru",
        file: "ru.json",
      },
    ],
    lazy: true,
    langDir: "lang/",
  },
});
