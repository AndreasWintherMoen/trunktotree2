<template>
  <div class="py-2" :id="chartid"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  props: ["chartid", "chartSeries"],
  data() {
    return {
      chart: undefined,
      randoms: []
    };
  },
  mounted() {
    const options = {
          series: this.chartSeries,
          chart: {
          height: 310,
          type: 'donut',
        },
        labels: ['Public transit', 'Ecologic/local food', 'Sustainable purchases', 'Fuel', 'Airplane travel', 'Heating'],
        colors: ['#10bcad', '#10bcad', '#10bcad', '#ff4560', '#ff4560', '#ff4560'],
        dataLabels: {
          enabled: false
        },
        legend: {
          position: 'right',
          offsetY: -20,
          offsetX: 0,
        }
        };

    var chart = new ApexCharts(document.querySelector(`#${this.chartid}`), options);
    chart.render();
  },
};
</script>

<style>
    .apexcharts-legend-series {
        text-align: left !important;
        
    }
    .apexcharts-legend-text {
        color: rgba(237, 245, 225, 1) !important;
    }
    .apexcharts-legend.apexcharts-align-center.apx-legend-position-right{
      overflow: hidden;
    }
</style>
