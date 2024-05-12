<template>
  <NuxtLayout name="authenticated">
    <section-geolocation class="sectionGeolocation" />
    <hr />  
    <section-shop-tour :shops="checkedShops" />
    <hr />
    <section-logout class="sectionLogout" />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import SectionGeolocation from '~/components/pages/profile/SectionGeolocation.vue'
  import SectionShopTour from '~/components/pages/profile/SectionShopTour.vue'
  import SectionLogout from '~/components/pages/profile/SectionLogout.vue'

  const { signOut } = useAuth()

  const shopStore = useShopStore()
  const trackStore = useTrackStore()
  const userStore = useUserStore()
  await shopStore.fetch()
  await trackStore.fetch(userStore.user.id)

  const trackIds = [ ...new Set(trackStore.tracks.map(({shop_id}) => shop_id))]

  const checkedShops = computed<CheckedShops[]>(() => shopStore.shops.map((s) => ({
    ...s,
    checked: trackIds.includes(s.id)
  })))

  const logout = () => {
    signOut()
  }
</script>

<style scoped>
  .sectionGeolocation {
    @apply pt-0 -mt-4;
  }

  .sectionLogout {
    @apply pb-0 -mb-4;
  }
</style>