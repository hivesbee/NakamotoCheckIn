<template>
  <v-section>
    <template v-slot:heading>
      <svg-icon name="near-me" />
      一番近い店舗にチェックイン
    </template>

    <template v-slot:body>
      <client-only>
        <template v-if="nearestShop">
          <shop-card class="sectionCheckInAuto_card" :shop="nearestShop" />
        </template>
        <template v-else>
          <p class="sectionCheckInAuto_searchingMessage">
            検索中です…
          </p>
        </template>
        <p class="sectionCheckInAuto_distance">
          {{ distanceMessage }}
        </p>
      </client-only>
      <button class="sectionCheckInAuto_checkIn" type="button" @click="checkIn">
        <svg-icon class="sectionCheckInAuto_checkIn_icon" name="pin-drop" />
        チェックイン
      </button>
    </template>
  </v-section>
</template>

<script setup lang="ts">
  import { Geodesic } from 'geographiclib-geodesic'

  const shop = useShop()
  const track = useTrack()
  const user = useUser()

  const nearestShop = ref<Shop | null>(null)
  const distance = ref<number | null>(null)
  const distanceMessage = computed(() => distance.value === null ? '' : `店舗まで${distance.value.toFixed(2)}m`)

  onMounted(async () => {
    const p = await _getCoords()
    if (!p) {
      return
    }

    const geod = Geodesic.WGS84

    const { shop: s, distance: d } = shop.shops.map((s) => ({
      shop: { ...s },
      distance: geod.Inverse(p.coords.latitude, p.coords.longitude, s.latitude, s.longitude).s12 ?? Infinity
    })).reduce((a, b) => Math.min(a.distance, b.distance) === a.distance ? a : b)

    if (d === Infinity) {
      return
    }

    nearestShop.value = s
    distance.value = d
  })

  const checkIn = async () => {
    if (nearestShop.value === null) {
      return
    }

    try {
      await track.checkIn(nearestShop.value.id)
    } catch {
      // catch error
    }

    navigateTo('/tracks')
  }

  const _getCoords = () => new Promise(
    (resolve: (value?: GeolocationPosition) => void, reject: (reason?: GeolocationPositionError) => void) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  )
</script>

<style scoped>
  .sectionCheckInAuto_card {
    @apply mb-4;
  }

  .sectionCheckInAuto_searchingMessage {
    @apply flex justify-center items-center;
    @apply pt-4;
    @apply text-xs text-slate-500;
  }

  .sectionCheckInAuto_distance {
    @apply flex justify-end items-center;
    @apply w-full;
    @apply mb-8;
    @apply text-xs;
  }

  .sectionCheckInAuto_checkIn {
    @apply flex justify-center items-center;
    @apply w-6/12;
    @apply mx-auto py-2 px-4;
    @apply text-white fill-white;
    @apply shadow;
    @apply rounded-xl;
    background-color: #FF0000;
  }

  .sectionCheckInAuto_checkIn_icon {
    @apply w-5 h-5;
    @apply mr-1;
  }
</style>