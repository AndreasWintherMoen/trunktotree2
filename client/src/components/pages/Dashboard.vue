<template>
  <div class="p-3">
    <h1>Mine Penger</h1>
    <spendings-card />
    <line-chart-card />
  </div>
</template>

<script>
import SpendingsCard from "../molecules/SpendingsCard.vue";
import LineChartCard from "../molecules/LineChartCard.vue";

export default {
  components: {
    SpendingsCard,
    LineChartCard,
  },
};
</script>

<style></style>
