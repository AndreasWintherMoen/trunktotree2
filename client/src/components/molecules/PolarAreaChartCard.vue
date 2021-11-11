<template>
  <div class="rounded-lg p-1 pb-4 shadow bg-custom-blue">
    <h1 class="text-center text-xl h-auto text-custom-green-100 py-2">
      Ecological footprint
    </h1>
    <polar-area-chart :chartSeries="chartSeries" :chartid="'polarareachart'" />
    <div class="flex flex-row px-8 pt-2 items-center">
        <img class="h-6 w-6 rounded-full border" :src="`${publicPath}information-variant.png`">
        <p class="pl-3 text-custom-green-100 text-left"><span class="font-bold">{{ percentEcological }}%</span> of your purchases are concidered healthy for the environment.</p>
    </div>
  </div>
</template>

<script>
import PolarAreaChart from '../atoms/PolarAreaChart.vue'

export default {
    setup() {
        const publicPath = process.env.BASE_URL;
        return { publicPath };
    },
    components: {
        PolarAreaChart
    },
    data(){
        return {
            chartSeries: [1500, 7250, 19900, 2500, 3500, 3100]
        }
    },
    computed: {
        percentEcological(){
            const percentageNice = 100 - ((this.chartSeries[3] + this.chartSeries[4] + this.chartSeries[5]) / (this.chartSeries[0] + this.chartSeries[1] + this.chartSeries[2])) * 100;
            return percentageNice.toFixed(2);
        }
    }
}
</script>

<style>

</style>