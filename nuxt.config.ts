// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "dev.mackdev.ca",
    https: {
      cert: "./dev.mackdev.ca.pem",
      key: "./dev.mackdev.ca-key.pem"
    },
    url: "https://dev.mackdev.ca:3000"
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
  ],
})
