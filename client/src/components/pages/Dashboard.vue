<template>
  <div class="p-3">
    <!--<h1 class="text-lg font-bold m-2">My spendings</h1>
    <div class="divider"></div>-->
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

<style>
.divider {
  width: 4rem;
  height: 0.25rem;
  background: #2c3e50;
  margin: 0 auto 1rem;
}
</style>
