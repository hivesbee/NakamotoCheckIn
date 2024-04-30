<template>
  <ul class="trackList">
    <li v-for="track in props.tracks" :key="track.id">
      <nuxt-link :to="detailUrl(track.id)">
        <track-card class="trackList_card" :track="track" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
  const props = defineProps<{
    tracks: Track[]
  }>()

  const detailUrl = (id: Track['id']) => `/tracks/${id}`
</script>

<style scoped>
  .trackList_card {
    @apply mb-8;
  }
</style>
