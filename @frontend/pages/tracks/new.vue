<template>
  <NuxtLayout name="authenticated">
    <section-check-in-auto class="sectionCheckInAuto" />
    <hr>
    <section-check-in-manual class="sectionCheckInManual" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import SectionCheckInAuto from '~/components/pages/tracks/SectionCheckInAuto.vue'
import SectionCheckInManual from '~/components/pages/tracks/SectionCheckInManual.vue'
</script>

<style scoped>
  .sectionCheckInAuto {
    @apply pt-0 -mt-4;
  }
</style>
