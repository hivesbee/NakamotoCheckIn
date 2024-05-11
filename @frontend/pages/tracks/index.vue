<template>
  <nuxt-layout name="authenticated">
    <track-list :tracks="track.tracks" />
  </nuxt-layout>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'authenticated'
  })


  // NOTE: 仮置き 最初に到達するページのため
  //       将来的にはログイン処理中に実装
  const { data } = useAuth()
  const shop = useShopStore()
  const user = useUserStore()
  const track = useTrackStore()

  if (!data.value?.user?.email || !data.value.user.name) {
    throw new Error('authenticated email does not found.')
  }

  try {
    
    await user.fetch(data.value.user.email)
    if (!user.user.id) {
      await user.signUp(data.value.user.name, data.value.user.email)
      throw new Error('registered user does not found.')
    }

    await shop.fetch()
    await track.fetch(user.user.id)
  } catch {
    // catch error
  }

</script>

<style scoped>
</style>