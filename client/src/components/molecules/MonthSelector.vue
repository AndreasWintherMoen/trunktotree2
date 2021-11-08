<template>
  <div class="overflow-x-auto flex" id="scrollingThroughTheMonths">
    <month-button :month="m" v-for="(m, i) in months" :key="i" class="mx-1" />
  </div>
</template>

<script>
import MonthButton from "../atoms/MonthButton.vue";
import { MONTHS } from "../../../util/moneySpent";

export default {
  components: { MonthButton },
  computed: {
    month() {
      return this.$store.state.monthSelected;
    },
    months() {
      return Object.values(MONTHS).filter((m) => m !== MONTHS.YEAR);
    },
  },
};
</script>

<style>
#scrollingThroughTheMonths::-webkit-scrollbar {
  display: none;
}

#scrollingThroughTheMonths {
  scrollbar-width: none;
}
</style>
