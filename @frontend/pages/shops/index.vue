<template>
  <NuxtLayout name="authenticated">
    <client-only>
    <shop-list :shops="shopStore.shops" />
      </client-only>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const shopStore = useShopStore()

  onMounted(async () => {
    try {
      await shopStore.fetch()
    } catch (e) {
      // catch error
      console.error(e)
    }
  })
</script>
