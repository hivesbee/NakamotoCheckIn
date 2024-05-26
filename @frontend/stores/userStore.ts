export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const config = useRuntimeConfig()

  const auth = useAuth()
  const name = auth.data.value?.user?.name ?? null
  const email = auth.data.value?.user?.email ?? null

  const signIn = async () => {
    if (!email) {
      throw new Error('email does not found')
    }

    user.value = await $fetch<User>('/users', {
      baseURL: config.public.apiBaseURL,
      params: {
        email
      }
    })

    console.info('userStore#signIn', user.value)
  }

  const signUp = async () => {
    if (!name || !email) {
      throw new Error('name or email does not found')
    }

    user.value = await $fetch<User>('/users', {
      baseURL: config.public.apiBaseURL,
      method: 'POST',
      body: {
        email,
        name
      }
    })

    console.info('userStore#signUp', user.value)
  }

  return {
    user,
    signIn,
    signUp
  }
}, {
  persist: true
})
