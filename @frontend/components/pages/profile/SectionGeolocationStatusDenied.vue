<template>
  <section-geolocation-status>
    <template v-slot:message>
      位置情報が有効化されていません。
      <br />
      ブラウザの設定から有効化してください。
    </template>
    <template v-slot:aside>
      ※ 位置情報が有効ではないと、
      <br />
      現在位置からのチェックインができません。
    </template>
  </section-geolocation-status>
</template>

<script setup lang="ts">
  import SectionGeolocationStatus from './SectionGeolocationStatus.vue'
</script>
