<template>
  <div class="px-3 pt-3 rounded-lg shadow" id="haakon">
    <h1 class="text-white text-center text-xl h-auto">
      Financial health
    </h1>
    <circle-chart :chartid="'circlechart'" />
  </div>
</template>

<script>
import CircleChart from "../atoms/CircleChart.vue";

export default {
  components: {
    CircleChart,
  },
};
</script>

<style>
#haakon {
  background: linear-gradient(45deg, #1bcedf, #0470dc)
  /*background: radial-gradient(circle, #13f1fc 0%,#0470DC 100%)*/
}
</style>
