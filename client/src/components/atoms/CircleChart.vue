<template>
  <div id="chart"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  mounted() {
    var month = new Date().toLocaleString("default", { month: "long" });

    var options = {
      chart: {
        height: "300",
        type: "radialBar",
      },
      series: [67],
      colors: ["rgba(32, 255, 24, 0.6)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
          },
          track: {
            background: "rgba(255,255,255,0.2)",
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
              fontSize: "2em",
              show: true,
              formatter: function (val) {
                return val + " NOK";
              },
            },
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px",
            },
          },
        },
      },
      labels: [`${month} Spending`],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  },
};
</script>

<style></style>
