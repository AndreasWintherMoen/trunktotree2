<template>
  <div>
    <div :id="chartid" class="capitalize"></div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  props: ['chartid'],
  mounted() {
    const month = new Date().toLocaleString("default", { month: "long" });
    const moneySpent = Math.random() * 100000;
    const moneyLimit = (moneySpent + Math.random() * 100000) / 100;

    const options = {
      chart: {
        height: 300,
        type: "radialBar",
      },
      series: [(moneySpent / moneyLimit)],
      colors: ["#0ba29d"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
          },
          track: {
            background: "rgba(255,255,255,0.5)",
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
              formatter: function () {
                return moneySpent.toFixed(2) + " NOK";
              },
              offsetY: -20
            },
            name: {
              offsetY: 20,
              color: "#fff",
              fontSize: "13px",
            },
          },
        },
      },
      labels: [`${month} Spending`],
    };
    var chart = new ApexCharts(document.querySelector(`#${this.chartid}`), options);

    chart.render();
  },
};
</script>

<style></style>
