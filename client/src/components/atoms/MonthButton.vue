<template>
  <div
    :class="isActive ? active : unactive"
    class="inline-block cursor-pointer rounded-2xl px-2 py-1"
    @click="updateMonth"
  >
    <p class="text-custom-green-100">{{ month }}</p>
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
      active: "bg-custom-green-700",
      unactive: "bg-custom-green-600 bg-opacity-50",
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
