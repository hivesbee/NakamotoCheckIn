
import { useUser } from './useUserStore'

const useTrackStore = defineStore('track', () => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiBaseUrl as string

  const userStore = useUserStore()

  const tracks = ref<CheckInLogDetail[]>([])

  const fetch = async (id: User['id']) => {
    const { data } = await useFetch<CheckInLogDetail[]>('/check_in_logs',{
      baseURL,
      params: {
        embed: 'shop',
        user_id: id
      }
    })
 
    if (!Array.isArray(data.value)) {
      throw new Error('tracks not found')
    }

    tracks.value = data.value
  }

  const checkIn = async (shopId: Shop['id'], checkedAt?: Track['checked_at']) => {
    const userStore = useUserStore()

    if (userStore.user === null) {
      throw new Error('User not found.')
    }

    const { data } = await useFetch('/check_in_logs',{
      method: 'POST',
      baseURL,
      body: {
        user_id: userStore.user.id,
        shop_id: shopId,
        checked_at: checkedAt
      }
    })

    tracks.value.push(data.value as CheckInLogDetail)
  }

  const remove = async (id: Track['id']) => {
    const { data } = await useFetch(`/check_in_logs/${id}`, {
      method: 'DELETE',
      baseURL
    })

    // tracks.value = tracks.value.filter((t) => t.id !== id)
  }

  return {
    tracks,
    fetch,
    checkIn,
    remove
  }

}, {
  persist: true
})

export { useTrackStore }
