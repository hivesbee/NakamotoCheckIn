<template>
  <div class="authenticated">
    <v-header />
    <v-main>
      <slot />
    </v-main>
    <v-nav />
  </div>
</template>

<style scoped>
  .authenticated {
    @apply flex flex-col;
    @apply h-screen;
  }
</style>
