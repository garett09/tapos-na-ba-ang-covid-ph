<template>
  <b-container>
    <section class="page-section-top">
      <b-row>
        <b-col>
          <div class="heading-div">
            <h1 class="heading-h1">Tapos na ba?</h1>
            <h2 class="heading-h2">Hindi. <span>😷</span></h2>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">Kamusta na tayo? 🤔</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <StatisticsBlockDouble
            Title="Infections"
            :Total="cases"
            :Today="todayCases"
          ></StatisticsBlockDouble>
        </b-col>
        <b-col cols="12" lg="6">
          <StatisticsBlockDouble
            Title="Deaths"
            :Total="deaths"
            :Today="todayDeaths"
          ></StatisticsBlockDouble>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <StatisticsBlockSingle
            ClassProp="statistics-div"
            Title="Infections Per 1 Million"
            :Total="casecasesPerOneMillions"
          ></StatisticsBlockSingle>
        </b-col>
        <b-col cols="12" lg="6">
          <StatisticsBlockSingle
            ClassProp="statistics-div"
            Title="Deaths Per 1 Million"
            :Total="deathsPerOneMillion"
          ></StatisticsBlockSingle>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <StatisticsBlockSingle
            ClassProp="highlight-statistics-div"
            Title="Total number of Tested individuals"
            :Total="castestses"
          ></StatisticsBlockSingle>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <StatisticsBlockSingle
            ClassProp="highlight-statistics-div"
            Title="Total number of Vaccinated individuals"
            :Total="vaccineTotal"
          ></StatisticsBlockSingle>
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
import StatisticsBlockDouble from "@/components/StatisticsBlockDouble.vue";
import StatisticsBlockSingle from "@/components/StatisticsBlockSingle.vue";

export default {
  name: "Home",
  async created() {
    await this.retrieveData();
    this.cases = this.$store.getters.cases;
    this.todayCases = this.$store.getters.todayCases;
    this.deaths = this.$store.getters.deaths;
    this.todayDeaths = this.$store.getters.todayDeaths;
    this.casecasesPerOneMillions = this.$store.getters.casesPerOneMillion;
    this.deathsPerOneMillion = this.$store.getters.deathsPerOneMillion;
    this.castestses = this.$store.getters.tests;
    this.chartdata = this.$store.getters.chartData;
    this.vaccineTotal = this.$store.getters.covidVaccineDataTotal;
    this.loaded = true;
  },
  components: {
    StatisticsBlockDouble,
    StatisticsBlockSingle,
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
      vaccineTotal: 0,
      chartdata: {},
      options: {},
    };
  },
  methods: {
    async retrieveData() {
      await this.$store.dispatch("retrieveCovidData");
      await this.$store.dispatch("retrieveCovidChartData");
      await this.$store.dispatch("retrieveCovidVaccineData");
    },
  },
};
</script>