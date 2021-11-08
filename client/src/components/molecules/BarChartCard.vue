<template>
  <div class="px-3 pt-3 rounded-lg shadow" id="barchart-cart">
    <h1 class="h-auto text-xl text-center text-white">Spending categories</h1>
    <bar-chart :chartid="'barchart'" />
  </div>
</template>

<script>
import BarChart from "../atoms/BarChart.vue";

export default {
  components: { BarChart },
};
</script>

<style>
#barchart-cart {
  background: #0e4166;
}
</style>
