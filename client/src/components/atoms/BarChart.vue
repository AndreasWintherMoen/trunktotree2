<template>
  <div :id="chartid"></div>
</template>

<script>
import ApexCharts from "apexcharts";
import moneySpent, { CATEGORIES } from "../../../util/moneySpent";

export default {
  props: ["chartid"],
  data() {
    return {
      chart: undefined,
      randoms: [],
    };
  },
  mounted() {
    this.randoms = this.chartSeries.map((_) => Math.random() + 0.5);
    const options = {
      series: [
        {
          data: this.chartSeries,
          name: "NOK spent",
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
      colors: this.chartSeries.map((spending, i) => {
        console.log(
          `Spending: ${spending}, recommended: ${
            this.recommendedSpendings[i]
          }. Color: ${
            spending > this.recommendedSpendings[i] ? "#F44336" : "#04F336"
          }`
        );
        if (spending < 1000) return "#04F336";
        return spending > this.recommendedSpendings[i] ? "#F44336" : "#04F336";
      }),
      xaxis: {
        categories: this.filteredCategories,
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    };
    this.chart = new ApexCharts(
      document.querySelector(`#${this.chartid}`),
      options
    );

    this.chart.render();
  },
  computed: {
    monthSelected() {
      return this.$store.state.monthSelected;
    },
    filteredCategories() {
      return Object.values(CATEGORIES).filter(
        (c) => c !== CATEGORIES.ALL_CATEGORIES && c !== CATEGORIES.Salary
        // moneySpent(this.monthSelected, c) > 1
      );
    },
    chartSeries() {
      return this.filteredCategories.map((cat) => {
        return moneySpent(this.monthSelected, cat);
      });
    },
    recommendedSpendings() {
      return this.chartSeries.map(
        (spending, i) => (spending *= this.randoms[i])
      );
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
        colors: this.chartSeries.map((spending, i) =>
          spending > this.recommendedSpendings[i] ? "#F44336" : "#04F336"
        ),
      });
    },
  },
};
</script>

<style></style>
