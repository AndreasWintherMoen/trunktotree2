<template>
  <div class="px-3 pt-3 rounded-lg shadow spending-card">
    <h1 class="text-white text-center text-xl h-auto">
      {{chartName}}
    </h1>
    <circle-chart class="custom-card-margin" :chartid="chartId" />
  </div>
</template>

<script>
import CircleChart from "../atoms/CircleChart.vue";

export default {
  props: ['chartId', 'chartName'],
  components: {
    CircleChart,
  },
};
</script>

<style>
.spending-card {
  background: linear-gradient(45deg, #1bcedf, #0470dc)
}
.custom-card-margin{
  margin: -6.5px auto;
}
</style>
