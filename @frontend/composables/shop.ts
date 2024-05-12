export const useShop = defineStore('shop', () => {
  const runtimeConfig = useRuntimeConfig()

  const shops = ref<Shop[]>([])
  const baseURL = runtimeConfig.public.apiBaseUrl as string

  const fetch = async () => {
    const { data } = await useFetch<Shop[]>('/shops',{
      baseURL
    })

    if (!Array.isArray(data.value) || !data.value) {
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