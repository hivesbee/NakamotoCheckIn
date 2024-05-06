<template>
  <v-section>
    <template v-slot:heading>
      <svg-icon name="logout" />
      ログアウト
    </template>

    <template v-slot:body>
      <button class="sectionLogout_logout" type="button" @click="logout()">
        ログアウト
      </button>
    </template>
  </v-section>
</template>

<script setup lang="ts">
  const { signOut } = useAuth()

  const logout = () => {
    signOut()
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