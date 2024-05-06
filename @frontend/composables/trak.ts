
import { useUser } from './user'

export const useTrack = defineStore('track', () => {
  const user = useUser()

  const tracks = ref<CheckInLogDetail[]>([])

  const fetch = async (id: User['id']) => {
    const { data } = await useFetch<CheckInLogDetail[]>('http://localhost:3000/check_in_logs',{
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
    const user = useUser()

    if (user.user === null) {
      throw new Error('User not found.')
    }

    const { data } = await useFetch('http://localhost:3000/check_in_logs',{
      method: 'POST',
      body: {
        user_id: user.user.id,
        shop_id: shopId,
        checked_at: checkedAt
      }
    })

    tracks.value.push(data.value as CheckInLogDetail)
  }

  const remove = async (id: Track['id']) => {
    const { data } = await useFetch(`http://localhost:3000/check_in_logs/${id}`, {
      method: 'DELETE'
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