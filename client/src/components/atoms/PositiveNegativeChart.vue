<template>
    <div class="flex flex-col px-2 pt-2">
        <div class="flex flex-row items-center">
            <!--<p class="text-sm">Where's my money?</p>-->
            <div class="flex flex-row">
                <div class="flex flex-col justify-between px-3">
                    <p class="text-sm text-left">Available balance</p>
                    <p class="text-md text-left text-custom-green-500 font-bold">{{availableBalance}}.93 NOK</p>
                </div>
                <!--<img class="" :src="`${publicPath}currency-usd.png`">-->
            </div>
        </div>
        <div class="ml-2 flex flex-row">
            <div :id="chartid" class="-ml-6 bg-custom-green-100 overflow-hidden"></div>
            <div class="px-2 mb-8 flex flex-col justify-center text-left" id="pos-neg-desc-container">
                <div class="flex flex-col">
                    <p class="text-sm">Balance</p>
                    <p class="text-sm font-bold">23.2K</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm">Loans</p>
                    <p class="text-sm font-bold">328.54K</p>
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
          data: [/*{
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
            },*/
            {
              x: 2017,
              y: 23400
            },
            {
              x: 2018,
              y: 56000
            },
            {
              x: 2019,
              y: 15000
            },
            {
              x: 2020,
              y: 12500
            },
            {
              x: 2021,
              y: 26000
            }
          ]
        }, {
          name: 'Loans',
          data: [
            /*{
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
            },*/
            {
              x: 2017,
              y: -0
            },
            {
              x: 2018,
              y: -120000
            },
            {
              x: 2019,
              y: -240000
            },
            {
              x: 2020,
              y: -360000
            },
            {
              x: 2021,
              y: -480000
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
            const val = 17042;
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style>

</style>