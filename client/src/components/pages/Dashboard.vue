<template>
  <div class="p-3">
    <div class="flex flex-col gap-3">
      <month-selector />
      <spendings-card :chartName="'Financial health'" :chartId="'financial-health'" />
      <spendings-card :chartName="'Ecologic health'" :chartId="'ecologic-health'" />
    </div>
  </div>
</template>

<script>
import SpendingsCard from "../molecules/SpendingsCard.vue";
import MonthSelector from "../molecules/MonthSelector.vue";

export default {
  data() {
    return {};
  },
  components: {
    SpendingsCard,
    MonthSelector,
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
