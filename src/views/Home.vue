<template>
  <b-container>
    <section class="page-section-top">
      <b-row>
        <b-col>
          <div class="heading-div">
            <h1 class="heading-h1">Tapos na ba?</h1>
            <h2 class="heading-h2">Hindi. <span>😷</span></h2>
            &nbsp;
            <h5 class="heading-h5">Updated: {{datetime}}</h5>
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
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color:#4169e1;">Confirmed</h4>
            <span class="number-span mr-4" style="font-weight:700">Today: {{ todayCases.toLocaleString() }}</span>
            <br>
            <span class="number-span" style="font-weight:500">Total: {{ cases.toLocaleString() }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
            <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold " style="color:#ff0038;">Deceased</h4>
            <span class="number-span mr-4" style="font-weight:700">Today: {{ todayDeaths.toLocaleString() }}</span>
            <br>
            <span class="number-span" style="font-weight:500">Total: {{ deaths.toLocaleString() }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color:#1ca9c9">Active</h4>
            <span class="number-span" style="font-weight:500">Total: {{ activeCases.toLocaleString() }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
         <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color:#004225">Critical</h4>
            <span class="number-span" style="font-weight:500">Total: {{ critical.toLocaleString() }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="highlight-statistics-div">
            <h3 class="heading-h3">Magandang balita!</h3>
            <b-row class="my-5">
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <StatisticsBlockSingle
                  ClassProp="highlight-statistics-inner-div"
                  Title="Recovered today 💪🏾"
                  :Total="todayRecovered"
                ></StatisticsBlockSingle>
              </b-col>
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <StatisticsBlockSingle
                  ClassProp="highlight-statistics-inner-div"
                  Title="Recovered 💪🏿"
                  :Total="recovered"
                ></StatisticsBlockSingle>
              </b-col>
            </b-row>
             <b-row class="my-5">
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
              <StatisticsBlockSingle
                ClassProp="highlight-statistics-inner-div"
                Title="Vaccinated individuals 💉"
                :Total="vaccineTotal"
              ></StatisticsBlockSingle>
              </b-col>
            <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
              <StatisticsBlockSingle
                ClassProp="highlight-statistics-inner-div"
                Title="Cumulative Samples Tested 🔬"
                :Total="castestses"
              ></StatisticsBlockSingle>
            </b-col>
             </b-row>
            <span class="number-span"
              >Palaging magpa-test kung mayroon kang mga sintomas! Para sa
              karagdagang impormasyon, bisitahin ang website ng:
              <b-link href="https://doh.gov.ph/" target="_blank"
                >DOH</b-link
              ></span
            >
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">Ano ang progress? 📈</h3>
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
/* eslint-disable vue/no-unused-components */
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
    this.recovered = this.$store.getters.recovered;
    this.todayRecovered = this.$store.getters.todayRecovered;
    this.critical = this.$store.getters.critical;
    this.activeCases = this.$store.getters.activeCases;
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
      date: '',
      time: '',
      year: '',
      timestamp: '',
      fulldatetime: '',
      datetime: ''
    };
  },
  methods: {
    async retrieveData() {
      await this.$store.dispatch("retrieveCovidData");
      await this.$store.dispatch("retrieveCovidChartData");
      await this.$store.dispatch("retrieveCovidVaccineData");
    },
      printDate: function () {
            return new Date().toLocaleDateString();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },
          printYear: function () {
            return new Date().getFullYear();
          },          
          printTimestamp: function () {
            return Date.now();
          },
          printFullDate: function(){
            return new Date();
          }
        },
        mounted: function () {
          this.date = this.printDate();
          this.time = this.printTime();
          this.timestamp = this.printTimestamp();
          this.year = this.printYear();
          this.fulldatetime = this.printFullDate();
          this.datetime = this.printDate() + '  ' + this.printTime();
        },
};
</script>