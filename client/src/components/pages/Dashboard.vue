<template>
  <div class="p-3">
    <h1>Mine Penger</h1>
    <div class="flex flex-col gap-3">
      <spendings-card />
      <bar-chart-card />
    </div>
  </div>
</template>

<script>
import SpendingsCard from "../molecules/SpendingsCard.vue";
/*import LineChartCard from "../molecules/LineChartCard.vue";*/
import BarChartCard from "../molecules/BarChartCard.vue";

export default {
  components: {
    SpendingsCard,
    BarChartCard,
    /*LineChartCard,*/
  },
};
</script>

<style></style>
