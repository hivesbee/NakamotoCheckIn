export const useShopStore = defineStore('shopStore', () => {
  const shops = ref<Shop[]>([])

  const config = useRuntimeConfig()

  const getShopById = (id: Shop['id']) => shops.value.find((shop: Shop) => shop.id === id)

  const fetch = async () => {
    shops.value = await $fetch<Shop[]>('/shops', {
      baseURL: config.public.apiBaseURL
    }) ?? []

    console.info('shopStore#fetch', shops.value)
  }

  return {
    // states
    shops,
    // getters
    getShopById,
    // actions
    fetch
  }
}, {
  persist: true
})
