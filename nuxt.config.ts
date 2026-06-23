// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxt/image', '@vercel/analytics/nuxt'],

  ui: {
    global: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: process.env.IMAGEKIT_URL,
    },
    format: ['webp'],
  },

  colorMode: {
    preference: 'light',
  },

  compatibilityDate: '2025-03-11',
});
