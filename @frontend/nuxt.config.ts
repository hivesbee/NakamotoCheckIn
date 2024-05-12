export default defineNuxtConfig({
  alias: {
    '*': 'types/*'
  },
  components: {
    dirs: [{
        path: '~/components',
        ignore: ['pages/**/*.vue'],
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    googleClientId: '',
    googleClientSecret: '',
    public: {
      apiBaseUrl: ''
    }
  },

  // third party modules setting
  // @sidebase/nuxt-auth
  auth: {
    globalAppMiddleware: true,
    provider: {
        type: 'authjs',
        // pages: {
        //   login: '/signin'
        // }
    }
  },
  // @nuxtjs.svg-sprite
  svgSprite: {
    input: '~/assets/img/icons/svg',
    output: '~/assets/img/icons/gen/'
  },
  

  // development settings
  devtools: { enabled: true },
  devServer: {
    port: 8000
  }
})