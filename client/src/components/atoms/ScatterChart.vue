<template>
  <div class="scatter-chart-custom-padding overflow-hidden" :id="chartid"></div>
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
    mounted(){
        var options = {
          series: [
          {
            data: [
              {
                x: 'Fuel',
                y: -2.500
              },
              {
                x: 'Airplane travel',
                y: -3.500
              },
              {
                x: 'Heating',
                y: -3.100
              },
              {
                x: 'Public transit',
                y: 1.500
              },
              {
                x: 'Ecological/local food',
                y: 7.250
              },
              {
                x: 'Sustainable purchases',
                y: 19.900
              }
            ]
          }
        ],
          legend: {
          show: false
        },
        chart: {
          width: '100%',
          height: 400,
          type: 'treemap',
          toolbar: { show: false },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '12px',
          },
          formatter: function(text, op) {
            return [text, `${op.value}K NOK`]
          },
          offsetY: -4
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            colorScale: {
              ranges: [
                {
                  from: -6,
                  to: 0,
                  color: '#CD363A'
                },
                {
                  from: 0.001,
                  to: 6,
                  color: '#52B12C'
                }
              ]
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector(`#${this.chartid}`), options);
        chart.render();
    }
}
</script>

<style scoped>
  .scatter-chart-custom-padding {
    padding-left: 1.5vw;
  }
</style>