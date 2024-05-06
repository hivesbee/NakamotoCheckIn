<template>
  <v-section>
    <template v-slot:heading>
      <svg-icon name="map" />
      店舗めぐりチェック
    </template>

    <template v-slot:body>
      <client-only>
        <ul class="sectionShopTour_list">
          <template v-for="shop in props.shops" :key="shop.id">
            <section-shop-tour-card :shop="shop" />
          </template>
        </ul>
      </client-only>
    </template>
  </v-section>
</template>

<script setup lang="ts">
  import SectionShopTourCard from './SectionShopTourCard.vue'

  const props = defineProps<{
    shops: CheckedShops[]
  }>()
</script>

<style scoped>
  .sectionShopTour_list {
    @apply flex flex-wrap;
    @apply w-full;
  }
</style>