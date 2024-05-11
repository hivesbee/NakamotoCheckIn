
export const useShopStore = defineStore('shop', () => {
  const shops = ref<Shop[]>([])

  const fetch = async () => {
    const { data } = await useFetch<Shop[]>('http://localhost:3000/shops')

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