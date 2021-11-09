<template>
  <div>
    <div :id="chartid" class="capitalize" />
    <div class="typical">Recommended<br />64 000 NOK</div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import moneySpent, { CATEGORIES } from "../../../util/moneySpent";

export default {
  props: ["chartid"],
  data() {
    return {
      chart: undefined,
    };
  },
  computed: {
    monthSelected() {
      return this.$store.state.monthSelected;
    },
    moneyTotal() {
      return moneySpent(this.monthSelected, CATEGORIES.ALL_CATEGORIES);
    },
    // TODO: Calculate moneyLimit properly
    moneyLimit() {
      return (this.moneyTotal + Math.random() * 100000) / 100;
    },
  },
  watch: {
    monthSelected() {
      this.chart.updateOptions({
        series: [this.moneyTotal / this.moneyLimit],
        labels: [`${this.monthSelected} Spending`],
      });
    },
  },
  mounted() {
    const options = {
      chart: {
        height: 300,
        type: "radialBar",
      },
      // series: [this.moneyTotal / this.moneyLimit],
      series: [80],
      colors: ["#0bd2bd"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
            background: "rgba(255,255,255,0.1)",
          },
          track: {
            // background: "rgba(255,255,255,0.5)",
            background: ["#ce82ee"],
            strokeWidth: "150%",
            startAngle: -90,
            endAngle: -86,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            value: {
              color: "#fff",
              fontSize: "1.25rem",
              show: true,
              formatter: () => `${this.moneyTotal.toFixed(2)} NOK`,
              // formatter: () => "80%",
              offsetY: -20,
            },
            name: {
              offsetY: 20,
              color: "#fff",
              fontSize: "12px",
            },
            total: {
              show: true,
              label: `${this.monthSelected} Spending`,
              color: "#fff",
              fontSize: "11px",
              formatter: () => {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return `${this.moneyTotal.toFixed(2)} NOK`;
              },
            },
          },
        },
      },
      labels: ["November spending"],
    };
    this.chart = new ApexCharts(
      document.querySelector(`#${this.chartid}`),
      options
    );

    this.chart.render();
  },
};
</script>

<style>
.typical {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(30px);
  color: #ee82ee;
  font-weight: 400;
}
</style>
