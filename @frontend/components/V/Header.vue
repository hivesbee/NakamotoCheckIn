<template>
  <header class="vHeader">
    <h1 class="vHeader_heading">
      中本
      <span class="vHeader_heading-small">
        チェックイン
      </span>
    </h1>
  </header>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Yuji+Boku&family=Yuji+Syuku&display=swap');

  .vHeader {
    @apply flex justify-center items-center;
    @apply w-full;

    background-color: #FF0000;
  }

  .vHeader_heading {
    @apply flex justify-center items-center;
    @apply pt-1 pb-3;
    @apply text-5xl leading-none;
    font-family: "Yuji Syuku", serif;
    color: #e6b422;
    text-shadow: 0.25rem 0.25rem 0.5rem #000000;
  }

  .vHeader_heading-small {
    @apply leading-none;
    @apply text-4xl leading-none;
  }
</style>
