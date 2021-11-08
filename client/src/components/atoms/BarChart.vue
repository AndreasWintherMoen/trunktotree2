<template>
  <div :id="chartid"></div>
</template>

<script>
import ApexCharts from "apexcharts";
import moneySpent, { CATEGORIES } from "../../../util/moneySpent";

const initChart = (seriesData, categories, id) => {
  const options = {
    series: [
      {
        data: seriesData,
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
      categories: categories,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  const chart = new ApexCharts(document.querySelector(`#${id}`), options);
  return chart;
};

export default {
  props: ["chartid"],
  data() {
    return {
      chart: undefined,
    };
  },
  mounted() {
    this.chart = initChart(
      this.chartSeries,
      this.filteredCategories,
      this.chartid
    );
    this.chart.render();
  },
  computed: {
    monthSelected() {
      return this.$store.state.monthSelected;
    },
    filteredCategories() {
      return Object.values(CATEGORIES).filter(
        (c) =>
          c !== CATEGORIES.ALL_CATEGORIES &&
          c !== CATEGORIES.Salary &&
          moneySpent(this.monthSelected, c) > 1
      );
    },
    chartSeries() {
      return this.filteredCategories.map((cat) => {
        return moneySpent(this.monthSelected, cat);
      });
    },
  },
  watch: {
    monthSelected() {
      this.chart.updateOptions({
        series: [
          {
            data: this.chartSeries,
          },
        ],
        xaxis: {
          categories: this.filteredCategories,
        },
      });
    },
  },
};
</script>

<style></style>
