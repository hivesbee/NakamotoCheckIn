import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: runtimeConfig.authSecret,
  pages: {
    signIn: '/login',
    signOut: '/login'
  },
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    GoogleProvider.default({
      clientId: runtimeConfig.googleClientId,
      clientSecret: runtimeConfig.googleClientSecret
    })
  ]
})
