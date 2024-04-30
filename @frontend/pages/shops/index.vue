<template>
  <NuxtLayout name="authenticated">
    <shop-list :shops="shop.shops" />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const shop = useShop()

  try {
    await shop.fetch()
  } catch {
    // catch error
  }
</script>
