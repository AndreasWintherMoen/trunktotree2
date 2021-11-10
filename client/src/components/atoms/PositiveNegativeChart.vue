<template>
    <div class="flex flex-col px-2 pt-2">
        <div class="flex flex-row items-center justify-between">
            <p class="text-sm">Where's my money?</p>
            <div class="flex flex-row justify-end">
                <div class="flex flex-col justify-end">
                    <p class="text-md text-right text-custom-green-500 font-bold">{{availableBalance}}.00 NOK</p>
                    <p class="text-sm text-right font-bold">Available balance</p>
                </div>
                <img class="" :src="`${publicPath}currency-usd.png`">
            </div>
        </div>
        <div class="ml-2 flex flex-row">
            <div :id="chartid" class="-ml-6 bg-custom-green-100 overflow-hidden"></div>
            <div class="px-2 mb-8 flex flex-col justify-center text-left" id="pos-neg-desc-container">
                <div class="flex flex-col">
                    <p class="text-sm">Balance</p>
                    <p class="text-sm font-bold">3,700M</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm">Loans</p>
                    <p class="text-sm font-bold">450K</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
    props: ['chartid'],
    setup() {
        const publicPath = process.env.BASE_URL;
        return { publicPath };
    },
    data() {
        return {
            chart: undefined,
            options: {}
        }
    },
    mounted(){
        console.log(this.chartid)
        this.options = {
          series: [{
          name: 'Assets',
          data: [{
              x: 1996,
              y: 1200000
            },
            {
              x: 1997,
              y: 1400000
            },
            {
              x: 1998,
              y: 1500000
            },
            {
              x: 1999,
              y: 1400000
            },
            {
              x: 2000,
              y: 1200000
            },
            {
              x: 2001,
              y: 4000000
            },
            {
              x: 2002,
              y: 3750000
            },
            {
              x: 2003,
              y: 3500000
            },
            {
              x: 2004,
              y: 3567000
            },
            {
              x: 2005,
              y: 3100000
            },
            {
              x: 2006,
              y: 2400000
            },
            {
              x: 2007,
              y: 2500000
            },
            {
              x: 2008,
              y: 2700000
            },
            {
              x: 2009,
              y: 2200000
            },
            {
              x: 2010,
              y: 1900000
            },
            {
              x: 2011,
              y: 1200000
            },
            {
              x: 2012,
              y: 1800000
            },
            {
              x: 2013,
              y: 1400000
            },
            {
              x: 2014,
              y: 1500000
            },
            {
              x: 2015,
              y: 2300000
            },
            {
              x: 2016,
              y: 3000000
            },
            {
              x: 2017,
              y: 3400000
            },
            {
              x: 2018,
              y: 2900000
            },
            {
              x: 2019,
              y: 3300000
            },
            {
              x: 2020,
              y: 3600000
            },
            {
              x: 2021,
              y: 3700000
            }
          ]
        }, {
          name: 'Loans',
          data: [
            {
              x: 1996,
              y: 0
            },
            {
              x: 1997,
              y: 0
            },
            {
              x: 1998,
              y: 0
            },
            {
              x: 1999,
              y: 0
            },
            {
              x: 2000,
              y: 0
            },
            {
              x: 2001,
              y: -2450000
            },
            {
              x: 2002,
              y: -2140000
            },
            {
              x: 2003,
              y: -2140000
            },
            {
              x: 2004,
              y: -1900250
            },
            {
              x: 2005,
              y: -1200000
            },
            {
              x: 2006,
              y: -900000
            },
            {
              x: 2007,
              y: -700000
            },
            {
              x: 2008,
              y: -500000
            },
            {
              x: 2009,
              y: -500000
            },
            {
              x: 2010,
              y: -125000
            },
            {
              x: 2011,
              y: -0
            },
            {
              x: 2012,
              y: -0
            },
            {
              x: 2013,
              y: -0
            },
            {
              x: 2014,
              y: -0
            },
            {
              x: 2015,
              y: -0
            },
            {
              x: 2016,
              y: -1400000
            },
            {
              x: 2017,
              y: -1200000
            },
            {
              x: 2018,
              y: -850000
            },
            {
              x: 2019,
              y: -750000
            },
            {
              x: 2020,
              y: -500000
            },
            {
              x: 2021,
              y: -450000
            }
          ]
        }],
        chart: {
          type: 'area',
          height: 270,
          toolbar: { show: false },
          foreColor: "#2c3e50"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        
        title: {
          align: 'left',
          style: {
            fontSize: '14px'
          }
        },
        xaxis: {
          show: false,
          type: 'datetime',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: false,
          tickAmount: 4,
          floating: false,
        
          labels: {
            style: {
              colors: '#2c3e50',
            },
            offsetY: -7,
            offsetX: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 0.5
        },
        tooltip: {
          x: {
            format: "yyyy",
          },
          fixed: {
            enabled: false,
            position: 'topRight'
          }
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30
            }
          },
          padding: {
            left: 20
          }
        }
        };

        var chart = new ApexCharts(document.querySelector(`#${this.chartid}`), this.options);
        chart.render();
    },
    computed: {
        availableBalance(){
            if (!this.options){
                return '0';
            }
            //const val = this.options.series[0].data[this.options.series[0].data.length - 1].y - this.options.series[1].data[this.options.series[1].data.length - 1].y;
            //return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const val = 3250000;
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style>

</style>