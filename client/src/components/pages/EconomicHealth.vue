<template>
  <div class="pt-2 flex flex-col">
    <month-selector />
    <bar-chart-card />
    <positive-negative-card />
    <recommendations-card />
    <information-card />
  </div>
</template>

<script>
import BarChartCard from "../molecules/BarChartCard.vue";
import InformationCard from '../molecules/InformationCard.vue';
import MonthSelector from "../molecules/MonthSelector.vue";
import PositiveNegativeCard from '../molecules/PositiveNegativeCard.vue';
import RecommendationsCard from "../molecules/RecommendationsCard.vue";
export default {
  components: {
    BarChartCard,
    MonthSelector,
    RecommendationsCard,
    PositiveNegativeCard,
    InformationCard,
  },
};
</script>

<style></style>
, RecommendationsCard
