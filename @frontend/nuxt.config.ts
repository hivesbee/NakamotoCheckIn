// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '*': 'types/*'
  },
  components: {
    dirs: [{
      path: '~/components',
      ignore: ['pages/**/*.vue']
    }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    '@nuxt/eslint'
  ],
  // routeRules: {
  //   '/api/**': {
  //     cors: true,
  //     proxy: 'http://localhost:8000/auth'
  //     // headers: { 'access-control-allow-methods': '*' }
  //   }
  // },
  runtimeConfig: {
    authSecret: '',
    googleClientId: '',
    googleClientSecret: '',
    authOrigin: '',
    public: {
      apiBaseURL: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  // third party modules setting
  // @sidebase/nuxt-auth
  auth: {
    baseURL: process.env.NUXT_AUTH_URL,
    globalAppMiddleware: true,
    provider: {
      type: 'authjs'
      // pages: {
      //   login: '/signin'
      // }
    }
  },
  // eslint
  eslint: {
    config: {
      stylistic: true
    }
  },
  // nitro
  nitro: {
    esbuild: {
      options: {
        target: 'es2022'
      }
    }
  },
  // pinia
  pinia: {
    storesDirs: ['./stores/**']
  },
  // @nuxtjs.svg-sprite
  svgSprite: {
    input: '~/assets/img/icons/svg',
    output: '~/assets/img/icons/gen/'
  },
  vite: {
    build: {
      target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15']
    }
  },

  // development settings
  devtools: { enabled: true },
  devServer: {
    port: 8000
    // https: {
    //   key: './cert/server.key',
    //   cert: './cert/server.crt'
    // }
  }
})
