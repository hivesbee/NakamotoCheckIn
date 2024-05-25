import { skipHydrate } from 'pinia'

export const useShopStore = defineStore('shop', () => {


  const shops = ref<Shop[]>([])

  const fetch = async () => {
    const config = useRuntimeConfig()


    const { data } = await useFetch<Shop[]>('/shops', {
      baseURL: config.public.apiBaseURL
    })

    console.log(data.value)

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