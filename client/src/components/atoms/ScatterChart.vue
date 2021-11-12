<template>
  <div class="overflow-hidden" :id="chartid"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
    props: ["chartid", "chartSeries"],
    data() {
        return {
          chart: undefined,
          randoms: [],
          days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        };
    },
    methods: {
      generateData(num, minmax){
        const {min, max} = minmax;
        const mappingArr = Array.from({length: num}, (_) => null);
        return mappingArr.map((_, i) => {
          return {x: this.days[i], y: Math.floor(Math.random() * (max - min + 1) + min)};
        })
      }
    },
    mounted(){
      let options = {
          series: [{
          name: 'Week 45',
          data: this.generateData(7, {
            min: 0,
            max: 100
          })
        },
        {
          name: 'Week 44',
          data: this.generateData(7, {
            min: 0,
            max: 100
          })
        },
        {
          name: 'Week 43',
          data: this.generateData(7, {
            min: 0,
            max: 100
          })
        },
        {
          name: 'Week 42',
          data: this.generateData(7, {
            min: 0,
            max: 100
          })
        },
        {
          name: 'Week 41',
          data: this.generateData(7, {
            min: 0,
            max: 100
          })
        },
        ],
          chart: {
          height: 350,
          type: 'heatmap',
          toolbar: { show: false },
          foreColor: 'rgba(237, 245, 225, 1)'
        },
        colors: ["#FF2F00"],
        legend: {
          labels: {
            colors: ['white'] //['rgba(237, 245, 225, 1)']
          }
        },
        dataLabels: {
          enabled: false
        },
        //colors: ['#FF0000', '#00FF00'],
        
        /*plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [
                {
                  f
                }
              ]
            }
          }
        }*/
        };

        var chart = new ApexCharts(document.querySelector(`#${this.chartid}`), options);
        chart.render();
    }
}
</script>

<style scoped>
</style>