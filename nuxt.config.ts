// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui"
  ],
  colorMode: {
    preference: 'light'
  }
})