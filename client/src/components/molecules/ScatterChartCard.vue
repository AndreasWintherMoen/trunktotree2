<template>
  <div class="flex flex-col bg-custom-blue">
    <h1 class="text-center py-2 text-xl h-auto text-custom-green-100">
      Ecological impact
    </h1>
    <scatter-chart class="-mt-6" :chartid="'scatterchart'" />
    <div class="flex flex-row -mt-6 items-center bg-custom-blue">
        <!--<img class="h-6 w-6 rounded-full border" :src="`${publicPath}information-variant.png`">-->
        <p class="px-3 pb-3 text-custom-green-100 text-left text-sm">
          In the chart above, you see your recent purchases and how they impact the environment.
        </p>
    </div>
  </div>
</template>

<script>
import ScatterChart from '../atoms/ScatterChart.vue';

export default {
    setup() {
        const publicPath = process.env.BASE_URL;
        return { publicPath };
    },
    components: {
        ScatterChart
    }
}
</script>

<style scoped>

</style>