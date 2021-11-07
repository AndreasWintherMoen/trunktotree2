<template>
  <div class="flex justify-between select-none rounded py-2 px-3 bg-white shadow hover:shadow-md duration-200">
    <p class="mr-8 text-left">{{ challenge.text }}</p>
    <p class="font-bold text-green-500">{{ challenge.reward }} riksdaler</p>
  </div>
</template>

<script>
export default {
  props: ["challenge"],
};
</script>

<style></style>
