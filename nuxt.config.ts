export default defineNuxtConfig({
  compatibilityDate: '2024-01-15',

  modules: ['@scalar/nuxt'],

  scalar: {
    spec: { url: '/openapi.yaml' },
    route: '/',
    darkMode: true,
    metaData: {
      title: 'LemiCraft API',
    },
  },

  nitro: {
    preset: 'node-server',
  },

  devtools: { enabled: false },
})
