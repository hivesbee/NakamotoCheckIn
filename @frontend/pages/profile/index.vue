<template>
  <NuxtLayout name="authenticated">
    <section-geolocation class="sectionGeolocation" />
    <hr>
    <section-shop-tour :shops="checkedShops" />
    <hr>
    <section-logout class="sectionLogout" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import SectionGeolocation from '~/components/pages/profile/SectionGeolocation.vue'
import SectionShopTour from '~/components/pages/profile/SectionShopTour.vue'
import SectionLogout from '~/components/pages/profile/SectionLogout.vue'

const shop = useShopStore()
const track = useTrackStore()

const trackIds = [...new Set(track.tracks.map(({ shop_id }) => shop_id))]

const checkedShops = computed<CheckedShops[]>(() => shop.shops.map(s => ({
  ...s,
  checked: trackIds.includes(s.id)
})))
</script>

<style scoped>
  .sectionGeolocation {
    @apply pt-0 -mt-4;
  }

  .sectionLogout {
    @apply pb-0 -mb-4;
  }
</style>
