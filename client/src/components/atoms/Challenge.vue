<template>
  <div class="flex justify-between">
    <p class="mr-8 mb-2 text-left">{{ challenge.text }}</p>
    <p class="font-bold text-green-500">{{ challenge.reward }}</p>
  </div>
</template>

<script>
export default {
  props: ["challenge"],
};
</script>

<style></style>
