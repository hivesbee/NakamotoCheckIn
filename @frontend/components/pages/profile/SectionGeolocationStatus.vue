<template>
  <div class="sectionGeolocationStatus_container">
    <p class="sectionGeolocationStatus_message">
      <slot name="message"></slot>
    </p>
    <aside class="sectionGeolocationStatus_aside">
      <slot name="aside"></slot>
    </aside>
  </div>
</template>

<style scoped>
  .sectionGeolocationStatus_container {
    @apply flex flex-col justify-center items-center;
  }

  .sectionGeolocationStatus_message {
    @apply mb-2;
    @apply text-sm text-slate-500;
  }

  .sectionGeolocationStatus_aside {
    @apply text-xs text-slate-500;
  }
</style>