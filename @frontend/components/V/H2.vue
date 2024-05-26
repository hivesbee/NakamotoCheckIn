<template>
  <h2 class="vH2">
    <slot />
  </h2>
</template>

<style scoped>
  .vH2 {
    @apply flex flex-wrap justify-start items-center;
    @apply pt-2 px-0 pb-4;
    @apply text-slate-800;
  }

  .vH2 :deep(svg) {
    @apply inline-block;
    @apply w-5 h-5;
    @apply mr-1;
    @apply fill-slate-800;
  }
</style>
