// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '*': 'types/*'
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  // routeRules: {
  //   '/api/**': {
  //     cors: true,
  //     proxy: 'http://localhost:3000/**',
  //     headers: { 'access-control-allow-methods': '*' }
  //   }
  // },
  auth: {
    globalAppMiddleware: true,
    provider: {
        type: 'authjs',
        // pages: {
        //   login: '/signin'
        // }
    }
  },
  runtimeConfig: {
    googleClientId: '',
    googleClientSecret: ''
  },

  // development settings
  devtools: { enabled: true },
  devServer: {
    port: 8000
  }
})