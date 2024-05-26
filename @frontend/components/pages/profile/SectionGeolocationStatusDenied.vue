<template>
  <section-geolocation-status>
    <template #message>
      位置情報が有効化されていません。
      <br>
      ブラウザの設定から有効化してください。
    </template>
    <template #aside>
      ※ 位置情報が有効ではないと、
      <br>
      現在位置からのチェックインができません。
    </template>
  </section-geolocation-status>
</template>

<script setup lang="ts">
import SectionGeolocationStatus from './SectionGeolocationStatus.vue'
</script>
