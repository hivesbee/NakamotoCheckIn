<template>
  <v-section>
    <template v-slot:heading>
      <svg-icon name="touch-app" />
      手動でチェックイン
      <p class="sectionCheckInManual_note">
        ※ 以前に行った店舗の登録もできます
      </p>
    </template>

    <template v-slot:body>
      <form class="sectionCheckInManual_form">
        <label class="sectionCheckInManual_form_item">
          <span class="sectionCheckInManual_label_text">
            チェックイン日付
          </span>
          <input class="sectionCheckInManual_input" type="datetime-local" v-model="checkedAt" />
        </label>
        <label class="sectionCheckInManual_form_item">
          <span class="sectionCheckInManual_label_text">
            店舗名
          </span>
          <select class="sectionCheckInManual_select" v-model="selectedShop">
            <option disabled value="null">店舗名を選んでください</option>
            <template v-for="s in shopStore.shops" :key="s.id">
              <option :value="s">
                {{ s.name }}
              </option>
            </template>
          </select>
        </label>

        <button class="sectionCheckInManual_checkIn" type="button" @click="checkIn()">
          <svg-icon class="sectionCheckInManual_checkIn_icon" name="pin-drop" />
          チェックイン
        </button>
      </form>
    </template>
  </v-section>
</template>

<script setup lang="ts">
  import { formatInTimeZone, fromZonedTime } from 'date-fns-tz'

  const shopStore = useShopStore()
  const trackStore = useTrackStore()

  const checkedAt = ref()
  const selectedShop = ref<Shop>()

  const checkIn = async () => {
    if (!selectedShop.value || !checkedAt.value) {
      return
    }

    const utcTime = fromZonedTime(checkedAt.value, 'Asia/Tokyo')
    const formattedUtcTime = formatInTimeZone(utcTime, 'UTC', 'yyyy-MM-dd HH:mm:ss.TTTTTT')

    try {
      await trackStore.checkIn(selectedShop.value.id, formattedUtcTime)
    } catch {
      // catch error
    }

    navigateTo('/tracks')
  }
</script>

<style scoped>
  .sectionCheckInManual_note {
    @apply w-full;
    @apply pl-5;
    @apply text-sm text-slate-500;
  }

  .sectionCheckInManual_form {
    @apply flex flex-col justify-center items-center;
  }

  .sectionCheckInManual_form_item {
    @apply flex justify-between items-center;
    @apply w-10/12;
    @apply mb-4;
  }

  .sectionCheckInManual_form_item:last-of-type {
    @apply mb-8;
  }

  .sectionCheckInManual_label_text {
    @apply w-6/12;
    @apply text-sm;
  }

  .sectionCheckInManual_input {
    @apply w-6/12;
    @apply px-2 py-1;
    @apply text-sm;
    @apply border border-slate-300;
    @apply rounded;
  }

  .sectionCheckInManual_select {
    @apply w-6/12;
    @apply px-2 py-1;
    @apply text-sm;
    @apply border border-slate-300;
    @apply rounded;
  }
  
  .sectionCheckInManual_checkIn {
    @apply flex justify-center items-center;
    @apply w-6/12;
    @apply mx-auto py-2 px-4;
    @apply text-white fill-white;
    @apply shadow;
    @apply rounded-xl;
    background-color: #FF0000;
  }

  .sectionCheckInManual_checkIn_icon {
    @apply w-5 h-5;
    @apply mr-1;
  }
</style>