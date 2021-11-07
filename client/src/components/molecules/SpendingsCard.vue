<template>
  <div class="p-1 rounded-lg shadow" id="haakon">
    <h1 class="text-white text-left text-xl h-auto">
      How financially healthy am I?
    </h1>
    <circle-chart />
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
  background: radial-gradient(
    circle,
    rgba(0, 255, 68, 1) -45%,
    rgba(58, 63, 175, 1) 60%
  );
}
</style>
