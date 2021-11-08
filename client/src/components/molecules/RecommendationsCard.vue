<template>
  <div class="mx-4 px-3 pt-3 rounded-lg shadow">
    <h1 class="h-auto text-xl text-center">Recommendations</h1>
    <!-- <div class="h-32 bg-pink-300"></div> -->
    <recommendation v-for="(r, i) in recommendations" :key="i" :text="r" />
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
