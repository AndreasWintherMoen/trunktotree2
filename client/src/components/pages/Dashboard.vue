<template>
  <div class="p-3">
    <!--<h1 class="m-2 text-lg font-bold">My spendings</h1>
    <div class="divider"></div>-->
    <div class="flex flex-col gap-3">
      <month-selector />
      <spendings-card />
      <bar-chart-card />
    </div>
  </div>
</template>

<script>
import SpendingsCard from "../molecules/SpendingsCard.vue";
/*import LineChartCard from "../molecules/LineChartCard.vue";*/
import BarChartCard from "../molecules/BarChartCard.vue";
import MonthSelector from "../molecules/MonthSelector.vue";

export default {
  data() {
    return {};
  },
  components: {
    SpendingsCard,
    BarChartCard,
    /*LineChartCard,*/
    MonthSelector,
  },
};
</script>

<style>
.divider {
  width: 4rem;
  height: 0.25rem;
  background: #2c3e50;
  margin: 0 auto 1rem;
}
</style>
