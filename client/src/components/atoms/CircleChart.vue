<template>
  <div>
    <div
      :id="chartid"
      class="capitalize"
    />
  </div>
</template>

<script>
import ApexCharts from 'apexcharts';
import moneySpent, { CATEGORIES } from '../../../util/moneySpent';

export default {
  props: ['chartid'],
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
        type: 'radialBar',
      },
      series: [this.moneyTotal / this.moneyLimit],
      colors: ['#0ba29d'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
          },
          track: {
            background: 'rgba(255,255,255,0.5)',
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
              color: '#fff',
              fontSize: '1.25rem',
              show: true,
              formatter: () => `${this.moneyTotal.toFixed(2)} NOK`,
              offsetY: -20,
            },
            name: {
              offsetY: 20,
              color: '#fff',
              fontSize: '13px',
            },
          },
        },
      },
      labels: [`${this.monthSelected} Spending`],
    };
    this.chart = new ApexCharts(
      document.querySelector(`#${this.chartid}`),
      options,
    );

    this.chart.render();
  },
};
</script>

<style></style>
