<template>
  <nav class="vNav">
    <div class="vNav_left">
      <NuxtLink :class="trackClass" to="/tracks">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M315-240q-77 0-117-57t-38-128l-18-27q-11-17-36.5-77T80-680q0-103 51-171.5T260-920q85 0 132.5 75.5T440-680q0 58-16 107t-28 79l8 13q8 14 22 44.5t14 63.5q0 57-35.5 95T315-240ZM210-496l110-22q13-32 26.5-73t13.5-89q0-60-27.5-110T260-840q-45 0-72.5 50T160-680q0 63 17.5 111.5T210-496Zm105 176q19 0 32-14t13-39q0-17-8-35t-16-32l-96 20q0 40 17.5 70t57.5 30ZM645-40q-54 0-89.5-38T520-173q0-33 14-63.5t22-44.5l8-13q-12-30-28-79t-16-107q0-89 47.5-164.5T700-720q78 0 129 68.5T880-480q0 91-25.5 150.5T818-253l-18 28q1 71-38.5 128T645-40Zm105-256q15-24 32.5-72T800-480q0-60-27.5-110T700-640q-45 0-72.5 50T600-480q0 48 13.5 88.5T640-318l110 22ZM645-120q40 0 57.5-30t17.5-70l-96-20q-8 14-16 32t-8 35q0 20 12.5 36.5T645-120Z"/></svg>
      </NuxtLink>
      <NuxtLink :class="shopClass" to="/shops">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z"/></svg>
      </NuxtLink>
    </div>
    <div class="vNav_right">
      <NuxtLink :class="meClass" to="/me">
        <p class="vNav_link_text">
          <ClientOnly>
            {{ userName }}
          </ClientOnly>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
      </NuxtLink>
    </div>
    <NuxtLink class="vNav_checkIn" to="/tracks/new">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { user } = useUser()

  const trackClass = computed(() => ({
    'vNav_link_track': true,
    'vNav_link-active': route.path.includes('/tracks')
  }))

  const shopClass = computed(() => ({
    'vNav_link_shop': true,
    'vNav_link-active': route.path.includes('/shops')
  }))

  const meClass = computed(() => ({
    'vNav_link_user': true,
    'vNav_link-active': route.path.includes('/me')
  }))

  // const tracksClass2 = computed(() => route.path.includes('/tracks') ? ['vNav_link_track', 'vNav_link-active']: 'vNav_link_track')
  // const shopClass2 = computed(() => route.path.includes('/shops') ? ['vNav_link_shop', 'vNav_link-active']: 'vNav_link_shop')
  // const meClass2 = computed(() => route.path.includes('/me') ? ['vNav_link_user', 'vNav_link-active']: 'vNav_link_user')

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

  .vNav_link_user {
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
    /* @apply border-2 border-white; */
    @apply drop-shadow-2xl;
    border: solid 1px #FF3A3A;
    background-color: #FF0000;
  }
</style>