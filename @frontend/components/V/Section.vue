<template>
  <section class="vSection">
    <v-h2>
      <slot name="heading"></slot>
    </v-h2>

    <slot name="body"></slot>
  </section>
</template>

<style scoped>
  .vSection {
    @apply py-4;
  }
</style>