<template>
    <div>
        <h1 class="h-auto text-xl text-center">Yearly spendings</h1>
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