<template>
  <div>
    <h1 class="h-auto text-xl text-center">Recommendations</h1>
    <!-- <div class="h-32 bg-pink-300"></div> -->
    <div class="p-4 flex flex-col gap-3">
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
          text: "Du bruker 17% mer strøm enn gjennomsnittet. Trykk her for å lære mer om hvordan du kan kutte ditt strømforbruk",
          category: CATEGORIES.Utilities,
          isPositive: false,
          url: "https://tibber.com/no/magazine/power-hacks/5-stromsparetips",
        },
        {
          text: "Du bruker 25% mindre enn gjennomsnittet på kafébesøk. Bra jobba!",
          category: CATEGORIES.DiningOut,
          isPositive: true,
        },
        {
          text: "Du bruker 20% mer enn anbefalt på matvarer. Klikk her for å se våre sparetips i matbutikken!",
          category: CATEGORIES.Groceries,
          isPositive: false,
          url: "https://www.kulinarisk.no/17-mater-a-spare-penger-pa-mat/",
        },
        {
          text: "Du bruker 45% mer enn gjennomsnittet på nattklubber. Uff da!",
          category: CATEGORIES.DiningOut,
          isPositive: false,
        },
      ],
    };
  },
};
</script>

<style></style>
