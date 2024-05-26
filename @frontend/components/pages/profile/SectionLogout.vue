<template>
  <v-section>
    <template #heading>
      <svg-icon name="logout" />
      ログアウト
    </template>

    <template #body>
      <button
        class="sectionLogout_logout"
        type="button"
        @click="logout()"
      >
        ログアウト
      </button>
    </template>
  </v-section>
</template>

<script setup lang="ts">
const auth = useAuth()

const logout = () => {
  // ローカルのデータを削除
  document.cookie = 'userStore=; max-age=0'
  localStorage.removeItem('trackStore')
  localStorage.removeItem('shopStore')

  auth.signOut()
}
</script>

<style scoped>
 .sectionLogout_logout {
    @apply flex justify-center items-center;
    @apply w-8/12;
    @apply mx-auto mb-4 px-4 py-2;
    @apply text-slate-800;
    @apply rounded-xl shadow;
  }
</style>
