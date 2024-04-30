import type { RouteLocationNormalized } from 'vue-router'
// import { useUser } from '~/composables/user'

export default defineNuxtRouteMiddleware(async (from: RouteLocationNormalized, to: RouteLocationNormalized) => {
    if (from.path === '/login' && to.path === 'tracks') {
      console.log('logging in!')
      return
    }
    // if (to.path == '/login') {
    //   return
    // }

    // const { user } = useUser()
    // if (!user) {
    //     console.log('not authenticated')
    //     return await navigateTo('/login')
    // }
});