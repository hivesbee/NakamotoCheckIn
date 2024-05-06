<template>
  <v-section>
    <template v-slot:heading>
      <svg-icon name="my-location" />
      位置情報の設定
    </template>

    <template v-slot:body>
      <client-only>
        <component :is="SectionGeolocationStatus[geolocationStatus]"></component>
      </client-only>
    </template>
  </v-section>
</template>

<script setup lang="ts">
  import SectionGeolocationStatusGranted from './SectionGeolocationStatusGranted.vue'
  import SectionGeolocationStatusDenied from './SectionGeolocationStatusDenied.vue'
  import SectionGeolocationStatusPrompt from './SectionGeolocationStatusPrompt.vue'
  import SectionGeolocationStatusLoading from './SectionGeolocationStatusLoading.vue'

  const SectionGeolocationStatus = {
    'granted': SectionGeolocationStatusGranted,
    'denied': SectionGeolocationStatusDenied,
    'prompt': SectionGeolocationStatusPrompt,
    'loading': SectionGeolocationStatusLoading
  }

  const geolocationStatus = computedAsync< PermissionState | 'loading'>(async () => {
    const { state } = await navigator.permissions.query({ name: 'geolocation' })
    return state
  }, 'loading')
</script>