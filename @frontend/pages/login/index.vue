<template>
  <nuxt-layout name="unauthenticated">
    <div class="login_main">
      <p class="login_note">
        ログイン、または新規登録には
        <br>
        google ログインが必要です
      </p>
      <google-button @click="login()" />
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/login/check'
  }
})

const auth = useAuth()

const login = async () => {
  await auth.signIn('google')
}
</script>

<style scoped>
  .login_main {
    @apply grow;
    @apply flex flex-col justify-center items-center;
  }

  .login_note {
    @apply mb-4;
    @apply text-xs text-center text-slate-500;
  }
</style>
