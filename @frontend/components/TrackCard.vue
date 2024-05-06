<template>
  <div class="trackCard">
    <div class="trackCard_img" />
    <div class="trackCard_note">
      <client-only>
        <time class="trackCard_note_time">
          {{ formatedDate }}
        </time>
      </client-only>
      <br>
      <p class="trackCard_title">
        蒙古タンメン中本
        <br />
        {{ track.shop_name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { isValid } from 'date-fns'
  import { formatInTimeZone } from 'date-fns-tz'

  const props = defineProps<{
    track: Track
  }>()

  const shopImg = computed(() => `url("/img/shops/${props.track.shop_id}.jpg")`)

  const formatedDate = computed(() => {
    if (process.server) {
      return
    }

    if (!props.track.checked_at || !isValid(new Date(props.track.checked_at))) {
      return ''
    }

    return formatInTimeZone(props.track.checked_at, 'Asia/Tokyo', 'yyyy/MM/dd: HH:mm')
  })
</script>

<style scoped>
  .trackCard {
    @apply block;
    @apply flex;
    @apply w-80 h-24;
    @apply mx-auto mb-8;
    @apply rounded-xl shadow;
    @apply overflow-hidden;
  }

  .trackCard_img {
    @apply min-w-24;
    background: v-bind(shopImg);
    background-size: auto 100%;
  }

  .trackCard_note {
    @apply p-4;
  }

  .trackCard_note_time {
    @apply text-xs;
  }
</style>