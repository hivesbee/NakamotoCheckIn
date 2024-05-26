<template>
  <li class="sectionShopTourCard">
    <div class="sectionShopTourCard_img" />
    <div class="sectionShopTourCard_note">
      {{ shop.name }}
    </div>
    <template v-if="shop.checked">
      <div class="sectionShopTourCard_checked" />
      <div class="sectionShopTourCard_checked_mark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        ><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
      </div>
    </template>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  shop: CheckedShops
}>()

const shopImg = computed(() => `url("/img/shops/${props.shop.id}.jpg")`)
</script>

<style scoped>
  .sectionShopTourCard {
    @apply relative;
    @apply flex justify-center items-center;
    @apply w-5/12 h-16;
    @apply mx-auto mb-4;
    @apply rounded-xl shadow;
    @apply overflow-hidden;
  }

  .sectionShopTourCard_checked {
    @apply absolute;
    @apply top-0 left-0;
    @apply w-full h-16;
    @apply bg-white opacity-50;
  }

  .sectionShopTourCard_checked_mark {
    @apply absolute;
    @apply flex justify-start items-center;
    @apply top-0 bottom-0 left-0;
    @apply w-full h-full;
  }

  .sectionShopTourCard_checked_mark svg {
    @apply w-12 h-12;
    @apply drop-shadow-2xl;
    fill: #FF0000;
    stroke-width: 4px;
  }

  .sectionShopTourCard_img {
    @apply w-4/12 h-full bg-no-repeat;
    background: v-bind(shopImg);
    background-size: auto 100%;
  }

  .sectionShopTourCard_note {
    @apply w-8/12;
    @apply py-2 pl-2;
  }
</style>
