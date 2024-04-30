<template>
  <nuxt-layout name="authenticated">
    <nuxt-link to="/tracks">
      戻る
    </nuxt-link>
    <h2>お店の詳細</h2>
    <button type="button" @click="deleteTrack()">削除</button>
    {{ route.params.id }}
  </nuxt-layout>
</template>

<script setup lang="ts">
  const route = useRoute()
  const track = useTrack()

  console.log(route.params.id)

  const deleteTrack = async () => {
    if (!window.confirm('削除してよろしいですか？')) {
      return
    }

    try {
      await track.remove(route.params.id as string) // FIXME: 強制キャスト
      navigateTo('/tracks')
    } catch {
      // catch Error
    }
  }
</script>

<style scoped>
</style>