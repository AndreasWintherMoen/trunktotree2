<template>
  <div>
    <h1 class="h-auto text-xl text-center">Recommendations</h1>
    <!-- <div class="h-32 bg-pink-300"></div> -->
    <div class="p-4 flex flex-col gap-3">
      <recommendation v-for="(r, i) in recommendations" :key="i" :text="r" />
    </div>
  </div>
</template>

<script>
import Recommendation from "../atoms/Recommendation.vue";
export default {
  components: { Recommendation },
  data() {
    return {
      recommendations: ["du suger", "bruk mindre penger", "noob"],
    };
  },
};
</script>

<style></style>
