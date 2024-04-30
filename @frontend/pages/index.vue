<template>
  <nuxt-layout name="unauthenticated">
    インデックス
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({ auth: false })
</script>

<style scoped>
  .index_main {
    @apply grow;
    @apply relative;
  }

  .checkInLogs {
    @apply absolute block;
    @apply flex flex-col;
    @apply w-full h-full;
    @apply py-8;
    @apply overflow-y-scroll;
  }
</style>
