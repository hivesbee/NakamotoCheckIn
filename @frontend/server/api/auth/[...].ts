import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
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
