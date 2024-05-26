<template>
  <div class="shopCard">
    <div class="shopCard_img" />
    <div class="shopCard_note">
      <p class="shopCard_title">
        蒙古タンメン中本
        {{ shop.name }}
      </p>
      <address class="shopCard_address">
        {{ shop.address }}
      </address>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  shop: Shop
}>()

const shopImg = computed(() => {
  return `url("/img/shops/${props.shop.id}.jpg")`
})
</script>

<style scoped>
  .shopCard {
    @apply block;
    @apply flex;
    @apply w-80 h-24;
    @apply mx-auto;
    @apply rounded-xl shadow;
    @apply overflow-hidden;
  }

  .shopCard_img {
    @apply min-w-20;
    @apply bg-no-repeat;
    background: v-bind(shopImg);
    background-size: auto 100%;
  }

  .shopCard_note {
    @apply flex flex-col justify-start items-start;
    @apply p-4;
  }

  .shopCard_title {
    @apply mb-2;
  }

  .shopCard_address {
    @apply text-xs whitespace-pre-wrap;
  }
</style>
