<template>
  <div
    :class="isActive ? active : unactive"
    class="inline-block cursor-pointer rounded-2xl"
    @click="updateMonth"
  >
    <p class="m-2 text-white">{{ month }}</p>
  </div>
</template>

<script>
export default {
  props: ["clicked", "month"],
  computed: {
    isActive() {
      return this.$store.state.monthSelected === this.month;
    },
  },
  data() {
    return {
      active: "bg-green-900 shadow-md",
      unactive: "bg-green-500 shadow-xl",
    };
  },
  methods: {
    updateMonth() {
      this.$store.commit("setMonth", this.month);
    },
  },
};
</script>

<style></style>
