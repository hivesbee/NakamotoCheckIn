const useShopStore = defineStore('shop', () => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiBaseUrl as string

  const shops = ref<Shop[]>([])

  const fetch = async () => {
    const { data } = await useFetch<Shop[]>('/shops',{
      baseURL
    })

    if (!Array.isArray(data.value)) {
      throw new Error ('shops not found')
    }

    shops.value = data.value
  }

  return {
    shops,
    fetch
  }
}, {
  persist: true
})

export { useShopStore }