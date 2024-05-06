<template>
  <section-geolocation-status>
    <template v-slot:message>
      位置情報の設定を読込中です…
    </template>
    <template v-slot:aside>
    </template>
  </section-geolocation-status>
</template>

<script setup lang="ts">
  import SectionGeolocationStatus from './SectionGeolocationStatus.vue'
</script>
