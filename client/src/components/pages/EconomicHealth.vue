<template>
  <div class="pt-4 flex flex-col gap-4">
    <month-selector /><bar-chart-card /><recommendations-card />
  </div>
</template>

<script>
import BarChartCard from "../molecules/BarChartCard.vue";
import MonthSelector from "../molecules/MonthSelector.vue";
import RecommendationsCard from "../molecules/RecommendationsCard.vue";
export default {
  components: {
    BarChartCard,
    MonthSelector,
    RecommendationsCard,
  },
};
</script>

<style></style>
, RecommendationsCard
