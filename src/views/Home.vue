<template>
  <b-container>
    <section class="page-section-top">
      <b-row>
        <b-col>
          <div class="heading-div">
            <h1 class="heading-h1">Tapos na ba ang COVID19?</h1>
            <h2 class="heading-h2">Hindi. <span>😷</span></h2>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">Kamusta na tayo?</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Cases</h4>
            <span class="number-span mr-3">For today: {{ todayCases }}</span>
            <span class="number-span">Total: {{ cases }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Deaths</h4>
            <span class="number-span mr-3">For today: {{ todayDeaths }}</span>
            <span class="number-span">Total: {{ cases }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Cases per 1 million people</h4>
            <span class="number-span">Total: {{ casecasesPerOneMillions }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Deaths per 1 million people</h4>
            <span class="number-span mr-3"
              >Total: {{ deathsPerOneMillion }}</span
            >
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="highlight-statistics-div">
            <h4 class="heading-h4">Number of individuals tested</h4>
            <span class="number-span">Total: {{ castestses }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">Ano ang itsura ng pag-unlad?</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div>
            <LineChart
              v-if="loaded"
              :chartdata="chartdata"
              :options="options"
            ></LineChart>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import LineChart from "@/components/Chart.vue";

export default {
  name: "Home",
  created() {
    this.$store.dispatch("retrieveCovidData").then(() => {
      this.cases = this.$store.getters.cases;
      this.todayCases = this.$store.getters.todayCases;
      this.deaths = this.$store.getters.deaths;
      this.todayDeaths = this.$store.getters.todayDeaths;
      this.casecasesPerOneMillions = this.$store.getters.casesPerOneMillion;
      this.deathsPerOneMillion = this.$store.getters.deathsPerOneMillion;
      this.castestses = this.$store.getters.tests;
    });
    this.$store.dispatch("retrieveCovidChartData").then(() => {
      this.chartdata = this.$store.getters.chartData;
      this.loaded = true;
    });
  },
  components: {
    LineChart,
  },
  data() {
    return {
      loaded: false,
      cases: 0,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      casecasesPerOneMillions: 0,
      deathsPerOneMillion: 0,
      castestses: 0,
      chartdata: {},
      options: {},
    };
  },
};
</script>