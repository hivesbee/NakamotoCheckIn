<template>
  <NuxtLayout name="authenticated">
    <button class="me_logout" type="button" @click="signOut()">
      ログアウト
    </button>
    <hr />
    <h2 class="me_heading">
      店舗めぐりチェック
    </h2>

    <ul class="storeTour_list">
      <store-tour-card
        v-for="s in checkedShops" :key="s.id"
        :shop="s"
      />
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { signOut } = useAuth()

  const shop = useShop()
  const track = useTrack()
  const user = useUser()
  await shop.fetch()
  await track.fetch(user.user.id)

  const trackIds = [ ...new Set(track.tracks.map(({shop_id}) => shop_id))]

  const checkedShops = ref<CheckedShops[]>([])
  
  checkedShops.value = shop.shops.map((s) => ({
    ...s,
    checked: trackIds.includes(s.id)
  }))
</script>

<style scoped>
  .me_logout {
    @apply flex justify-center items-center;
    @apply w-8/12;
    @apply mx-auto mb-4 px-4 py-2;
    
    @apply rounded-xl shadow;
  }

  .me_heading {
    @apply py-2 px-2;
  }

  .storeTour_list {
    @apply flex flex-wrap;
    @aply w-full;
  }
</style>