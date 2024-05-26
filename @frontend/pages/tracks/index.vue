<template>
  <nuxt-layout name="authenticated">
    <track-list :tracks="track.tracks" />
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated'
})

const track = useTrackStore()
</script>

<style scoped>
</style>
