// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-tiptap-editor", "@sidebase/nuxt-auth"],
  compatibilityDate: "2024-09-24",
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
})