<template>
  <main class="vMain">
    <div class="vMain_container">
      <slot />
    </div>
  </main>
</template>

<style scoped>
  .vMain {
    @apply grow;
    @apply relative;
  }

  .vMain_container {
    @apply absolute block;
    @apply flex flex-col;
    @apply w-full h-full;
    @apply py-8 px-4;
    @apply overflow-y-scroll;
  }
</style>