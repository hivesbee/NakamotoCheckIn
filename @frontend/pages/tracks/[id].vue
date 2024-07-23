<template>
  <nuxt-layout name="authenticated">
    <section class="trackDetail">
      <nuxt-link
        class="trackDetail_back"
        to="/tracks"
      >
        <svg-icon
          class="trackDetail_back_icon"
          name="arrow-back"
        />
        戻る
      </nuxt-link>
      <v-h2>
        <svg-icon name="store" />
        チェックイン詳細
      </v-h2>
      <template v-if="detailTrack">
        <track-card
          class="trackList_card"
          :track="detailTrack"
        />
      </template>
      <div class="trackDetail_delete">
        <button
          class="trackDetail_deleteButton"
          type="button"
          @click="deleteTrack()"
        >
          <svg-icon
            class="trackDetail_deleteButton_icon"
            name="delete"
          />
          削除
        </button>
      </div>
    </section>
  </nuxt-layout>
</template>

<script setup lang="ts">
const route = useRoute()
const track = useTrackStore()

const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
console.log(id)

const detailTrack = track.tracks.find(t => t.id === id)

const deleteTrack = async () => {
  if (!window.confirm('削除してよろしいですか？')) {
    return
  }

  try {
    await track.remove(id)
    navigateTo('/tracks')
  }
  catch {
    // catch Error
  }
}
</script>

<style scoped>
  .trackDetail {
    @apply -mt-4;
  }

  .trackDetail_back {
    @apply flex justify-center items-center;
    @apply w-1/5;
    @apply mb-2 px-2 py-1;
    @apply text-sm text-slate-800;
    @apply rounded shadow;
    @apply align-middle;
  }

  .trackDetail_back_icon {
    @apply inline-block;
    @apply w-5 h-5;
    @apply mr-1;
    @apply fill-slate-800;
  }

  .trackDetail_delete {
    @apply flex justify-center items-center;
  }

  .trackDetail_deleteButton {
    @apply flex justify-center items-center;
    @apply px-4 py-1;
    @apply border-2;
    @apply bg-white;
    @apply rounded shadow;
    color: #FF0000;
    border-color: #FF0000;
  }

  .trackDetail_deleteButton_icon {
    @apply w-5 h-5;
    @apply mr-1;
    fill: #FF0000;
  }
</style>
