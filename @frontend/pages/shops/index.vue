<template>
  <NuxtLayout name="authenticated">
    <client-only>
      <shop-list :shops="shopStore.shops" />
    </client-only>
  </NuxtLayout>
</template>

<script setup lang="ts">
const shopStore = useShopStore()
</script>
