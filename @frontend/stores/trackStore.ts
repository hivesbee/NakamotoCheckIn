import { differenceInMilliseconds } from 'date-fns'

export const useTrackStore = defineStore('trackStore', () => {
  const tracks = ref<CheckInLogDetail[]>([])

  const config = useRuntimeConfig()

  const fetch = async () => {
    const userStore = useUserStore()
    const userId = userStore.user?.id ?? null

    if (!userId) {
      throw new Error('userStore#user.id is null')
    }

    tracks.value = await $fetch<CheckInLogDetail[]>('/check_in_logs', {
      baseURL: config.public.apiBaseURL,
      params: {
        user_id: userId
      }
    }) ?? []

    console.info('trackStore#fetch', tracks.value)
  }

  const checkIn = async (shopId: Shop['id'], checkedAt?: Track['checked_at']) => {
    const user = useUserStore()
    // const shopStore = useShopStore()

    if (user.user === null) {
      throw new Error('User not found.')
    }

    const data = await $fetch<CheckInLogDetail>('/check_in_logs', {
      baseURL: config.public.apiBaseURL,
      method: 'POST',
      body: {
        user_id: user.user.id,
        shop_id: shopId,
        checked_at: checkedAt
      }
    })

    if (!data) {
      throw new Error('Check in failed.')
    }

    console.log(data)

    tracks.value = [data, ...tracks.value].sort((a, b) =>
      differenceInMilliseconds(new Date(a.checked_at), new Date(b.checked_at))
    )
  }

  const remove = async (id: Track['id']) => {
    await useFetch(`/check_in_logs/${id}`, {
      baseURL: config.public.apiBaseURL,
      method: 'DELETE'
    })

    tracks.value = tracks.value.filter(t => t.id !== id)
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
