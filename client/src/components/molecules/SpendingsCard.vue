<template>
  <div class="px-3 pt-3 rounded-lg shadow" id="haakon">
    <h1 class="text-white text-left text-xl h-auto">
      How financially healthy am I?
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
  background: linear-gradient(45deg, #13f1fc, #0470DC)
  /*background: radial-gradient(circle, #13f1fc 0%,#0470DC 100%)*/
}
</style>
