<template>
  <nuxt-layout name="unauthenticated">
    <div class="loginCheck_main">
      <p class="loginCheck_note">
        ログインチェック中です
      </p>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const userStore = useUserStore()

const trackStore = useTrackStore()
const shopStore = useShopStore()

try {
  await useAsyncData('userStore', () => userStore.signIn())
}
catch (e) {
  console.error(e)
}

if (!userStore.user) {
  await useAsyncData('userStore', () => userStore.signUp())
}

try {
  trackStore.fetch()
  shopStore.fetch()

  // await useAsyncData('trackStore', () => trackStore.fetch())
  // await useAsyncData('shopStore', () => shopStore.fetch())
}
catch (e) {
  console.error(e)
}

if (import.meta.client) {
  navigateTo('/tracks')
}
</script>

<style scoped>
  .loginCheck_main {
    @apply grow;
    @apply flex flex-col justify-center items-center;
  }

  .loginCheck_note {
    @apply mb-4;
    @apply text-xs text-center text-slate-500;
  }
</style>
