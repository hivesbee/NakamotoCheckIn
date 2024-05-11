import { type CredentialResponse } from 'vue3-google-signin'
import { jwtDecode } from 'jwt-decode'

import { type Session, type DefaultSession } from 'next-auth'

export const useUserStore = defineStore('user', () => {
  const user = ref()

  const fetch = async (email: User['email']) => {
    const { data } = await useFetch('http://localhost:3000/users', {
      params: {
        email
      }
    })

    if (!Array.isArray(data.value)) {
      throw new Error ('user not found')
    }

    user.value = data.value[0]

    return true
  }

  const signIn = async (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse

    if (!credential) {
      throw new Error('credential not found')
    }

    const token = jwtDecode(credential) as any

    console.log(token)

    const { data } = await useFetch('http://localhost:3000/users', {
      params: {
        email: token.email
      }
    })

    if (!Array.isArray(data.value)) {
      throw new Error ('user not found')
    }

    user.value = data.value[0]

    return true

    // TODO: 未登録チェック
 }

  // FIXME: 未検証
  const signUp = async (name: string, email: string) => {
    const { data } = await useFetch('http://localhost:3000/users',{
      method: 'POST',
      body: {
        email,
        name
      }
    })

    user.value = data.value

    console.log(data)

    // TODO: 未登録時の登録処理、エラーハンドリング
  }

  return {
    user,
    fetch,
    signIn,
    signUp,
  }
}, {
  persist: true
})