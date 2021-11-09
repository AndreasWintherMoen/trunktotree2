<template>
  <div class="p-2">
    <div class="flex flex-col gap-3 bg-custom-green-100">
      <!-- <month-selector /> -->
      <spendings-card
        :chartName="'Economic health'"
        :chartId="'economic-health'"
        :bg-color="'linear-gradient(170deg, #4b9eaf, #0450ac)'"
      />
      <spendings-card
        :chartName="'Ecologic health'"
        :chartId="'ecologic-health'"
        :bg-color="'linear-gradient(45deg, #3b9e3f, #34a07c)'"
      />
    </div>
  </div>
</template>

<script>
import SpendingsCard from "../molecules/SpendingsCard.vue";
// import MonthSelector from "../molecules/MonthSelector.vue";

export default {
  data() {
    return {};
  },
  components: {
    SpendingsCard,
    // MonthSelector,
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
