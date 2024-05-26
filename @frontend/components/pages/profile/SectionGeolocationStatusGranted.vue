<template>
  <section-geolocation-status>
    <template #message>
      <svg-icon
        class="sectionGeolocationStatusGranted_message_icon"
        name="task-alt"
      />
      位置情報が有効化されています。
    </template>
    <template #aside>
      ※ 位置情報の設定を変更するには、
      <br>
      ブラウザの設定から変更してください。
    </template>
  </section-geolocation-status>
</template>

<script setup lang="ts">
import SectionGeolocationStatus from './SectionGeolocationStatus.vue'
</script>

<style scoped>
  .sectionGeolocationStatusGranted_message_icon {
    @apply inline-block;
    @apply w-8 h-8;
    @apply fill-green-600;
  }
</style>
