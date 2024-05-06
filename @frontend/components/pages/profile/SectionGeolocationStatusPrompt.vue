<template>
  <section-geolocation-status>
    <template v-slot:message>
      位置情報の設定がされていません。
    </template>
    <template v-slot:aside>
      ※ 位置情報を常に有効にするには、
      <br />
      ブラウザの設定またはチェックイン時に設定してください。
    </template>
  </section-geolocation-status>
</template>

<script setup lang="ts">
  import SectionGeolocationStatus from './SectionGeolocationStatus.vue'
</script>
