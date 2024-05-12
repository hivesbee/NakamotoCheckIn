<template>
  <nuxt-layout name="authenticated">
    <track-list :tracks="trackStore.tracks" />
  </nuxt-layout>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'authenticated'
  })


  // NOTE: 仮置き 最初に到達するページのため
  //       将来的にはログイン処理中に実装
  const { data } = useAuth()
  const shopStore = useShopStore()
  const userStore = useUserStore()
  const trackStore = useTrackStore()

  if (!data.value?.user?.email || !data.value.user.name) {
    throw new Error('authenticated email does not found.')
  }

  try {
    
    await userStore.fetch(data.value.user.email)
    if (!userStore.user.id) {
      await userStore.signUp(data.value.user.name, data.value.user.email)
      throw new Error('registered user does not found.')
    }

    await shopStore.fetch()
    await trackStore.fetch(userStore.user.id)
  } catch {
    // catch error
  }

</script>

<style scoped>
</style>