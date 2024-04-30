<template>
  <NuxtLayout name="authenticated">
    <h2 class="new_heading">
      一番近い中本にチェックイン
    </h2>
    <ClientOnly>
      <template v-if="nearestShop">
        <shop-card class="new_shopCard" :shop="nearestShop" />
        <p class="new_distanceMessage">
          {{ distanceMessage }}
        </p>
      </template>
    </ClientOnly>
    <button class="new_checkIn" type="button" @click="checkIn">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z"/></svg>
      チェックイン
    </button>
    <!-- あとで実装
    <hr />
    手動で入力 -->
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { Geodesic } from 'geographiclib-geodesic'
  
  const shop = useShop()
  const track = useTrack()
  const user = useUser()

  await shop.fetch()

  const nearestShop = ref()

  const _getCurrentPosition = () => {
    return new Promise(
      (resolve: (value?: GeolocationPosition) => void, reject: (reason?: GeolocationPositionError) => void) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      }
    )
  }

  const calcNearestShop = async () => {
    if (!process.client) {
      return
    }

    const p = await _getCurrentPosition()
    if (!p) {
      return
    }

    const geod = Geodesic.WGS84
    const r = geod.Inverse(p.coords.latitude, p.coords.longitude, shop.shops[1].latitude, shop.shops[1].longitude)
    console.log(r.s12?.toFixed(3))

    nearestShop.value = shop.shops.map((s) => ({
      ...s,
      distance: geod.Inverse(p.coords.latitude, p.coords.longitude, s.latitude, s.longitude).s12 ?? Infinity
    })).reduce((a, b) => Math.min(a.distance, b.distance) === a.distance ? a : b)

    console.log(nearestShop.value.name)
  }

  await calcNearestShop()

  const distanceMessage = computed(() => !nearestShop.value ? '' : `店舗まで${nearestShop.value.distance.toFixed(2)}m`)

  const checkIn = async () => {
    try {
      await track.checkIn(user.user.id, nearestShop.value.id)
    } catch {
      // catch error
    }

    navigateTo('/tracks')
  }
</script>

<style scoped>
  .new_heading {
    @apply mb-4;  
  }

  .new_shopCard {
    @apply mb-4;
  }

  .new_distanceMessage {
    @apply flex justify-end;
    @apply w-full;
    @apply mb-8;
    @apply text-xs;
  }

  .new_checkIn {
    @apply flex justify-center items-center;
    @apply w-6/12;
    @apply mx-auto py-2 px-4;
    @apply text-white fill-white;
    @apply shadow;
    @apply rounded-xl;
    background-color: #FF0000;
  }
</style>