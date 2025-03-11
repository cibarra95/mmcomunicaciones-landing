// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: '2024-08-18',
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
});
