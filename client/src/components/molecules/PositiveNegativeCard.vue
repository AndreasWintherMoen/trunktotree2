<template>
    <div>
        <h1 class="h-auto text-xl pt-2 text-center text-custom-blue">Yearly development</h1>
        <positive-negative-chart :chartid="'positive-negative'" />
    </div>
</template>

<script>
import PositiveNegativeChart from '../atoms/PositiveNegativeChart.vue';
export default {
    components: {
        PositiveNegativeChart
    }
}
</script>

<style>

</style>