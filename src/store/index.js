import Vue from "vue";
import Vuex from "vuex";
import Api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    critical: 0,
    todayRecovered: 0,
    activeCases: 0,
    casesPerOneMillion: 0,
    deathsPerOneMillion: 0,
    tests: 0,
    late: 0,
    lateCritical: 0,
    tests1mil: 0,
    lateTests: 0,
    lateTests1m: 0,
    totalVaccines: {},
    chartDataCases: {},
    chartDeathsCases: {},
    chartRecoveredCases: {},
    covidVaccineData: {},
  },
  mutations: {
    processCovidData(state, covidData) {
      state.cases = covidData["cases"];
      state.todayCases = covidData["todayCases"];
      state.deaths = covidData["deaths"];
      state.todayDeaths = covidData["todayDeaths"];
      state.casesPerOneMillion = covidData["casesPerOneMillion"];
      state.deathsPerOneMillion = covidData["deathsPerOneMillion"];
      state.tests = covidData["tests"];
      state.activeCases = covidData["active"];
      state.recovered = covidData["recovered"];
      state.todayRecovered = covidData["todayRecovered"];
      state.critical = covidData["critical"];
      state.tests1mil = covidData["testsPerOneMillion"];
      state.totalVaccines = covidData["population"];
    },
    processPastData(state, pastData) {
      state.late = pastData["active"];
      state.lateCritical = pastData["critical"];
      state.lateTests1m = pastData["testsPerOneMillion"];
      state.lateTests = pastData["tests"];
    },
    processCovidChartData(state, covidChartData) {
      state.chartDataCases = covidChartData["cases"];
      state.chartDeathsCases = covidChartData["deaths"];
      state.chartRecoveredCases = covidChartData["recovered"];
    },
    processCovidVacinneData(state, covidVaccineData) {
      state.covidVaccineData = covidVaccineData;
    },
  },
  actions: {
    retrieveCovidData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("countries/ph?strict=true")
          .then((response) => {
            const covidData = response.data;
            context.commit("processCovidData", covidData);

            resolve(response);
          })
          .catch((error) => {
            context.commit("apiError", error);
            reject(error);
          });
      });
    },
    retrievePastData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("countries/ph?yesterday=true&strict=true")
          .then((response) => {
            const pastData = response.data;
            context.commit("processPastData", pastData);

            resolve(response);
          })
          .catch((error) => {
            context.commit("apiError", error);
            reject(error);
          });
      });
    },
    retrieveCovidChartData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/historical/PH?lastdays=30")
          .then((response) => {
            const covidChartData = response.data["timeline"];
            context.commit("processCovidChartData", covidChartData);

            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
    retrieveCovidVaccineData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/vaccine/coverage/countries/ph?lastdays=30")
          .then((response) => {
            const covidVaccineData = response.data["timeline"];
            context.commit("processCovidVacinneData", covidVaccineData);

            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },

  getters: {
    cases: (state) => {
      return state.cases;
    },
    todayCases: (state) => {
      return state.todayCases;
    },
    deaths: (state) => {
      return state.deaths;
    },
    todayDeaths: (state) => {
      return state.todayDeaths;
    },
    casesPerOneMillion: (state) => {
      return state.casesPerOneMillion;
    },
    deathsPerOneMillion: (state) => {
      return state.deathsPerOneMillion;
    },
    tests: (state) => {
      return state.tests;
    },
    activeCases: (state) => {
      return state.activeCases;
    },
    recovered: (state) => {
      return state.recovered;
    },
    critical: (state) => {
      return state.critical;
    },
    todayRecovered: (state) => {
      return state.todayRecovered;
    },
    tests1mil: (state) => {
      return state.tests1mil;
    },
    late: (state) => {
      return state.late;
    },
    lateCritical: (state) => {
      return state.lateCritical;
    },
    lateTests: (state) => {
      return state.lateTests;
    },
    lateTests1m: (state) => {
      return state.lateTests1m;
    },
    totalVaccines: (state) => {
      return state.totalVaccines;
    },

    chartData: (state) => {
      const chartData = {
        labels: Object.keys(state.chartDataCases),
        datasets: [
          {
            label: "Vaccines administered",
            backgroundColor: "#eebb17",
            data: Object.values(state.covidVaccineData),
          },
        ],
      };
      return chartData;
    },
    covidVaccineDataTotal: (state) => {
      return Object.values(state.covidVaccineData).pop();
    },
  },
});
