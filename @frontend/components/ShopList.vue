<template>
  <ul class="shopList">
    <li
      v-for="shop in props.shops"
      :key="shop.id"
    >
      <shop-card
        class="shopList_card"
        :shop="shop"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  shops: Shop[]
}>()
</script>

<style scoped>
  .shopList_card {
    @apply mb-8;
  }
</style>
