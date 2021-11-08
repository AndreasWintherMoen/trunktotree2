<template>
  <div class="px-3 pt-3 rounded-lg shadow" :style="{ background: bgColor }">
    <h1 class="text-white text-center text-xl h-auto">
      {{ chartName }}
    </h1>
    <circle-chart class="custom-card-margin" :chartid="chartId" />
  </div>
</template>

<script>
import CircleChart from "../atoms/CircleChart.vue";

export default {
  props: ["chartId", "chartName", "bgColor"],
  components: {
    CircleChart,
  },
};
</script>

<style>
.custom-card-margin {
  margin: -6.5px auto;
}
</style>
