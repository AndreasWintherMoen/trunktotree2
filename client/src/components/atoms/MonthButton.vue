<template>
  <div
    :class="clicked ? active : unactive"
    class="inline-block cursor-pointer rounded-2xl"
  >
    <p class="m-2 text-white">{{ month }}</p>
  </div>
</template>

<script>
export default {
  props: ["clicked", "month"],
  data() {
    return {
      active: "bg-green-900 shadow-md",
      unactive: "bg-green-500 shadow-xl",
    };
  },
  setClicked() {
    this.state.clicked = !this.state.clicked;
  },
};
</script>

<style></style>
