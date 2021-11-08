<template>
  <div :id="chartid"></div>
</template>

<script>
import ApexCharts from "apexcharts";
import moneySpent, { CATEGORIES } from "../../../util/moneySpent";

export default {
  props: ["chartid", "monthSelected"],
  mounted() {
    const filteredCategories = Object.values(CATEGORIES).filter(
      (c) =>
        c !== CATEGORIES.ALL_CATEGORIES &&
        c !== CATEGORIES.Salary &&
        moneySpent(this.$props.monthSelected, c) > 1
    );

    const options = {
      series: [
        {
          data: filteredCategories.map((cat) => {
            return moneySpent(this.$props.monthSelected, cat);
          }),
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: { show: false },
        foreColor: "white",
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: filteredCategories,
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector(`#${this.chartid}`),
      options
    );
    chart.render();
  },
};
</script>

<style></style>
