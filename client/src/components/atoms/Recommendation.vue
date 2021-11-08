<template>
  <div class="rounded shadow border bg-white flex flex-row content-center px-1 py-3">
    <img :src="`${publicPath}lightning-bolt-outline.png`" class="w-8 h-8 self-center">
    <div class="flex-row text-left">
      <p class="text-lg font-bold">STRØMTING</p>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  setup() {
    const publicPath = process.env.BASE_URL;
    return { publicPath };
  },
};
</script>

<style></style>
