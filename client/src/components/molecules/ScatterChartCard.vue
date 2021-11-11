<template>
  <div class="rounded-lg pb-4 shadow bg-custom-blue">
    <scatter-chart :chartid="'scatterchart'" />
    <div class="flex flex-row px-8 pt-2 items-center">
        <img class="h-6 w-6 rounded-full border" :src="`${publicPath}information-variant.png`">
        <p class="pl-3 text-custom-green-100 text-left"><span class="font-bold">{{ percentEcological }}%</span> of your purchases are concidered healthy for the environment.</p>
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