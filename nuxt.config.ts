export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  components: true,
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxtjs/robots", "@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    vueI18n: "./i18n.config.ts",
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      { code: "en", name: "English" },
      { code: "de", name: "Deutsch" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
});
