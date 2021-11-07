<template>
  <div :id="chartid"></div>
</template>

<script>
import ApexCharts from 'apexcharts';

export default {
    props: ['chartid'],
    mounted(){
        const options = {
          series: [{
          data: [4500, 423, 999]
        }],
          chart: {
          height: 350,
          type: 'bar',
          toolbar: {show: false},
          foreColor: 'white'
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['Food'],
            ['Transport'],
            ['Other'],
          ],
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        }
        };

        const chart = new ApexCharts(document.querySelector(`#${this.chartid}`), options);
        chart.render();
    }
}
</script>

<style>

</style>