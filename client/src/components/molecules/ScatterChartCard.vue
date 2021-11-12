<template>
  <div class="flex flex-col p-2 bg-custom-blue rounded-xl shadow-lg">
    <h1 class="text-center py-1 text-xl h-auto text-custom-green-100">
      Ecological impact
    </h1>
    <scatter-chart class="-mt-6" :chartid="'scatterchart'" />
    <div class="flex flex-row -mt-6 items-center bg-custom-blue">
        <!--<img class="h-6 w-6 rounded-full border" :src="`${publicPath}information-variant.png`">-->
        <p class="px-3 pb-1 text-custom-green-100 text-left text-sm">
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