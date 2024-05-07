import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: runtimeConfig.authSecret,
  pages: {
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error
    GoogleProvider.default({
        clientId: runtimeConfig.googleClientId,
        clientSecret: runtimeConfig.googleClientSecret
    })
  ]
})
