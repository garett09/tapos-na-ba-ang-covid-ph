<template>
  <b-container>
    <section class="page-section-top">
      <b-row>
        <b-col>
          <div class="heading-div">
            <h1 class="heading-h1">Tapos na ba?</h1>
            <h2 class="heading-h2">
              <span style="color: #cf352e">Hindi.</span>
            </h2>
            &nbsp;
            <h3 class="heading-h3">
              Lockdown counter:
              <span style="color: #4d4dff">{{ days.toLocaleString() }} </span
              >days
            </h3>
            <h5 class="heading-h7">Huling update: {{ datetime }}</h5>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3 mb-4">Kumusta na tayo?</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color: #4169e1">
              Confirmed
            </h4>
            <span class="number-span" style="font-weight: 500"
              >Total: {{ cases.toLocaleString() }}
              <span class="number-span" style="color: #009000">
                (+{{ todayCases.toLocaleString() }})
              </span></span
            >
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color: #ff0038">
              Deceased
            </h4>
            <span class="number-span" style="font-weight: 500"
              >Total: {{ deaths.toLocaleString() }}
              <span class="number-span" style="color: #009000">
                (+{{ todayDeaths.toLocaleString() }})
              </span></span
            >
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color: #1ca9c9">
              Active
            </h4>
            <span class="number-span" style="font-weight: 500"
              >Total: {{ activeCases.toLocaleString() }}
              <span class="number-span" style="color: #009000">
                ({{ computationActive.toLocaleString() }})
              </span></span
            >
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold" style="color: #004225">
              Critical
            </h4>
            <span class="number-span" style="font-weight: 500"
              >Total: {{ critical.toLocaleString()
              }}<span class="number-span" style="color: #009000">
                ({{ computationCritical.toLocaleString() }})
              </span>
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="12">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold">Positivity rate</h4>
            <span class="number-span" style="font-weight: 500">
              <span style="color: #ff0038">{{ positivityRate }}% </span>ang
              positivity rate ngayong araw.</span
            >
            <hr />
            <h5 class="heading-h5" style="font-weight: 400">
              Ang positivity rate ay ang pangunahing sukatan na ginagamit upang masuri
              ang pagkalat ng COVID sa lugar. <br> <span style="font-weight:500"> Ang 10% o higit ay inuturing na "sobrang taas". Mas maging maingat kapag narating ito. </span><br>
              <br>
              <span style="font-weight: bold">Note: </span> Maaring maging mali
              ang data nito dahil late ang binibigay na data ng API.
            </h5>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="12">
          <div class="statistics-div">
            <h4 class="heading-h4 font-weight-bold">Herd Immunity</h4>
            <span class="number-span" style="font-weight: 500">
              <span style="color: green">
                {{ totalDose.toLocaleString() }}% </span
              >ng 70M ang nababakunahan.</span
            >
            <hr />
            <h5 class="heading-h5" style="font-weight: 400">
              Kasama na rito yung mga nag-second dose vaccine na at nakakuha pa lamang ng
              first dose. Para maabot ang herd immunity, kailangan na 140M doses
              ang mabigay ng DOH sa populasyon.
            </h5>
          </div>
        </b-col>
      </b-row>

      <b-row class="statistics-row">
        <b-col>
          <div class="highlight-statistics-div">
            <h3 class="heading-h31">Magandang balita!</h3>
            <b-row class="statistics-row">
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <div class="highlight-statistics-inner-div">
                  <h4 class="heading-h4">Recovered</h4>
                  <span class="number-span"
                    >Total: {{ recovered.toLocaleString() }}
                    <span class="number-span" style="color: #3fff00"
                      >(+{{ todayRecovered.toLocaleString() }})</span
                    ></span
                  >
                </div>
              </b-col>
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <div class="highlight-statistics-inner-div">
                  <h4 class="heading-h4">Cumulative Samples Tested</h4>
                  <span class="number-span"
                    >Total: {{ castestses.toLocaleString() }}
                    <span class="number-span" style="color: #3fff00">
                      (+{{ computationTests.toLocaleString() }})
                    </span></span
                  >
                </div>
              </b-col>
            </b-row>
            <b-row class="statistics-row">
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <div class="highlight-statistics-inner-div">
                  <h4 class="heading-h4">Vaccines Administered</h4>
                  <span class="number-span"
                    >Total: {{ vaccineTotal.toLocaleString() }}</span
                  >
                </div>
              </b-col>
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <div class="highlight-statistics-inner-div">
                  <h4 class="heading-h4">Tests per 1 million people</h4>
                  <span class="number-span"
                    >Total: {{ tests1mil.toLocaleString() }}
                    <span class="number-span" style="color: #3fff00">
                      (+{{ computationTests1m.toLocaleString() }})
                    </span>
                  </span>
                </div>
              </b-col>
            </b-row>
            <span class="number-span1"
              >Palaging magpa-test kapag mayroon kang mga sintomas! Para sa
              karagdagang impormasyon, bisitahin ang website ng
              <b-link href="https://doh.gov.ph/2019-ncov" target="_blank"
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
            <h3 class="heading-h3">Ano ang progress ng pagbakuna?</h3>
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
      <!-- footer -->
    <footer class="footer center">
      <div class="container">
        <p class="text">
          Copyright &copy;Adrian Garett C. Sian | All Rights Reserved
        </p>
      </div>
    </footer>
    <!-- end of footer -->
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
    this.tests1mil = this.$store.getters.tests1mil;
    this.late = this.$store.getters.late;
    this.computationActive = this.activeCases - this.late;
    this.lateCritical = this.$store.getters.lateCritical;
    this.computationCritical = this.critical - this.lateCritical;
    this.lateTests = this.$store.getters.lateTests;
    this.lateTests1m = this.$store.getters.lateTests1m;
    this.computationTests = this.castestses - this.lateTests;
    this.computationTests1m = this.tests1mil - this.lateTests1m;
    this.positivityRate = Math.ceil(
      (this.todayCases / this.computationTests) * 100
    );
    this.doses = this.$store.getters.totalVaccines;
    this.minus = this.doses + 28762840;
    this.totalDose = Math.abs((this.vaccineTotal / this.minus) * 100);
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
      tests1mil: 0,
      vaccineTotal: 0,
      chartdata: {},
      options: {},
      date: "",
      time: "",
      year: "",
      timestamp: "",
      fulldatetime: "",
      datetime: "",
      days: "",
      late: 0,
      computationActive: 0,
      lateCritical: 0,
      computationCritical: 0,
      lateTests: 0,
      lateTests1m: 0,
      computationTests: 0,
      computationTests1m: 0,
      positivityRate: 0,
      totalDose: 0,
      doses: 0,
    };
  },
  methods: {
    async retrieveData() {
      await this.$store.dispatch("retrieveCovidData");
      await this.$store.dispatch("retrieveCovidChartData");
      await this.$store.dispatch("retrieveCovidVaccineData");
      await this.$store.dispatch("retrievePastData");
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
    printFullDate: function () {
      return new Date();
    },
    days_between: function () {
      const date1 = new Date("3/12/2020");
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays.toLocaleString();
    },
  },
  mounted: function () {
    this.date = this.printDate();
    this.time = this.printTime();
    this.timestamp = this.printTimestamp();
    this.year = this.printYear();
    this.fulldatetime = this.printFullDate();
    this.datetime = this.printDate() + "  " + this.printTime();
    this.days = this.days_between();
  },
};
</script>
