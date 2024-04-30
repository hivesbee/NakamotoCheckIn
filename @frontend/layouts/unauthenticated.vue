<template>
  <div class="unauthenticated">
    <v-header />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<style scoped>
  .unauthenticated {
    @apply flex flex-col;
    @apply h-screen;
  }
</style>