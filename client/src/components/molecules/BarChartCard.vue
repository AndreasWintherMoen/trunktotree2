<template>
    <div class="px-3 pt-3 rounded-lg shadow">
        <h1 class="text-white text-left text-xl h-auto">
        This is a title :)
        </h1>
        <bar-chart :chartid="'barchart'" />
    </div>
</template>

<script>
import BarChart from '../atoms/BarChart.vue';


export default {
  components: { BarChart },

};
</script>

<style>
</style>
