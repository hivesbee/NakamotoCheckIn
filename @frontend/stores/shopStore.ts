export const useShopStore = defineStore('shopStore', () => {
  const shops = ref<Shop[]>([])

  const config = useRuntimeConfig()

  const fetch = async () => {
    shops.value = await $fetch<Shop[]>('/shops', {
      baseURL: config.public.apiBaseURL
    }) ?? []

    console.info('shopStore#fetch', shops.value)
  }

  return {
    shops,
    fetch
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
