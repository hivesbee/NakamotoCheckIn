<template>
  <nuxt-layout name="authenticated">
    <client-only>
      <track-list :tracks="trackStore.tracks" />
    </client-only>
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated'
})

const trackStore = useTrackStore()
</script>
