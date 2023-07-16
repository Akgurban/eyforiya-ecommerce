// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  pages: true,

  experimental: {
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

  i18n: {
    defaultLocale: "tk",
    locales: [
      {
        code: "tk",
        file: "tk.json",
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
