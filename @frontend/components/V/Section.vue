<template>
  <section class="vSection">
    <v-h2>
      <slot name="heading" />
    </v-h2>

    <slot name="body" />
  </section>
</template>

<style scoped>
  .vSection {
    @apply py-4;
  }
</style>
