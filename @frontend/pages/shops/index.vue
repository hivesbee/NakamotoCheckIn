<template>
  <NuxtLayout name="authenticated">
    <shop-list :shops="shopStore.shops" />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const shopStore = useShopStore()

  try {
    await shopStore.fetch()
  } catch {
    // catch error
  }
</script>
