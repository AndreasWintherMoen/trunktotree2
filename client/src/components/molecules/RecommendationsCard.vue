<template>
  <div :style="{backgroundColor: '#2c3e50'}">
    <h1 class="h-auto text-xl pt-2 pb-1 text-center text-custom-green-100">Insights</h1>
    <!-- <div class="h-32 bg-pink-300"></div> -->
    <div class="p-2 flex flex-col gap-2">
      <recommendation
        v-for="(r, i) in recommendations"
        :key="i"
        :recommendation="r"
      />
    </div>
  </div>
</template>

<script>
import { CATEGORIES } from "../../../util/moneySpent";
import Recommendation from "../atoms/Recommendation.vue";
export default {
  components: { Recommendation },
  data() {
    return {
      recommendations: [
        {
          text: "You spend 17% more on electricity than the average person with similar income. Click here to find out how you can reduce your electricity bill.",
          category: CATEGORIES.Utilities,
          isPositive: false,
          url: "https://tibber.com/no/magazine/power-hacks/5-stromsparetips",
        },
        {
          text: "You spend 25% less than the average person at cafés. Good job!",
          category: CATEGORIES.DiningOut,
          isPositive: true,
        },
        {
          text: "You spend 20% more than recommended on groceries. Click here to see our saving tips at the grocery store!",
          category: CATEGORIES.Groceries,
          isPositive: false,
          url: "https://www.kulinarisk.no/17-mater-a-spare-penger-pa-mat/",
        },
        {
          text: "You spend 45% more than the average person at night clubs. Oof!",
          category: CATEGORIES.DiningOut,
          isPositive: false,
        },
      ],
    };
  },
};
</script>

<style></style>
