<template>
  <div class="mt-2 focus-within:px-3 pt-2 shadow" id="barchart-cart">
    <h1 class="h-auto text-xl text-center text-custom-green-100">Spending categories</h1>
    <bar-chart class="-mb-6" :chartid="'barchart'" />
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
  background: #2c3e50; /*linear-gradient(45deg, #0e4166, #0e71a6)*/
}
</style>
