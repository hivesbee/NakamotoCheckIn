<template>
  <nav class="vNav">
    <div class="vNav_left">
      <NuxtLink :class="trackClass" to="/tracks">
        <svg-icon class="vNav_link_icon" name="footprint" />
      </NuxtLink>
      <NuxtLink :class="shopClass" to="/shops">
        <svg-icon class="vNav_link_icon" name="store" />
      </NuxtLink>
    </div>
    <div class="vNav_right">
      <NuxtLink :class="meClass" to="/profile">
        <p class="vNav_link_text">
          <ClientOnly>
            {{ userName }}
          </ClientOnly>
        </p>
        <svg-icon class="vNav_link_icon" name="person" />
      </NuxtLink>
    </div>
    <NuxtLink class="vNav_checkIn" to="/tracks/new">
      <svg-icon class="vNav_checkIn_icon" name="location-on" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { user } = useUserStore()

  const trackClass = computed(() => ({
    'vNav_link_track': true,
    'vNav_link-active': route.path === '/tracks'
  }))

  const shopClass = computed(() => ({
    'vNav_link_shop': true,
    'vNav_link-active': route.path.includes('/shops')
  }))

  const meClass = computed(() => ({
    'vNav_link_profile': true,
    'vNav_link-active': route.path.includes('/profile')
  }))

  const userName = computed(() => user.name ? user.name : '')
</script>

<style scoped>
  .vNav {
    @apply relative flex justify-between items-center;
    @apply w-full;
    background-color: #FF3030;
  }

  .vNav_left, .vNav_right {
    @apply flex justify-between items-center;
    @apply w-1/2;
  }

  [class*="vNav_link"] {
    @apply py-2 px-4;
    @apply box-border;
  }

  [class*="vNav_link"] svg {
    @apply fill-white;
  }

  .vNav_link-active {
    background-color: #FF0000;
  }

  .vNav_link_icon {
    @apply w-6 h-6;
    @apply p-0;
    @apply fill-white;
  }

  .vNav_link_track {
    @apply flex justify-center;
    @apply w-5/12;
    @apply border-r-2 border-red-300;
  }

  .vNav_link_shop {
    @apply w-7/12;
    @apply pl-8;
    @apply border-r-2 border-red-300;
  }

  .vNav_link_profile {
    @apply flex justify-end;
    @apply w-full;
    @apply pr-5;
    @apply text-white;
  }

  .vNav_link_text {
    @apply w-8/12;
    @apply p-0 pr-1;
    @apply text-end;
    @apply truncate;
  }

  .vNav_checkIn {
    @apply absolute flex justify-center items-center;
    @apply left-0 right-0 bottom-0 w-14 h-14;
    @apply mx-auto;
    @apply fill-white;
    @apply rounded-full;
    @apply drop-shadow-2xl;
    border: solid 1px #FF3A3A;
    background-color: #FF0000;
  }

  .vNav_checkIn_icon {
    @apply w-12 h-12;
    @apply fill-white;
  }
</style>