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
    chartDataCases: {},
    chartDeathsCases: {},
    chartRecoveredCases: {},
    covidVaccineData: {}
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
      state.activeCases = covidData["active"]
      state.recovered = covidData["recovered"]
      state.todayRecovered = covidData["todayRecovered"]
      state.critical = covidData["critical"]
    },
    processCovidChartData(state, covidChartData) {
      state.chartDataCases = covidChartData["cases"];
      state.chartDeathsCases = covidChartData["deaths"];
      state.chartRecoveredCases = covidChartData["recovered"];
    },
    processCovidVacinneData(state, covidVaccineData) {
      state.covidVaccineData = covidVaccineData;
    }
  },
  actions: {
    retrieveCovidData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("countries/ph?strict=true")
          .then(response => {
            const covidData = response.data;
            context.commit("processCovidData", covidData);

            resolve(response);
          })
          .catch(error => {
            context.commit("apiError", error);
            reject(error);
          });
      });
    },
    retrieveCovidChartData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/historical/PH?lastdays=30")
          .then(response => {
            const covidChartData = response.data["timeline"];
            context.commit("processCovidChartData", covidChartData);

            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    retrieveCovidVaccineData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/vaccine/coverage/countries/ph?lastdays=30")
          .then(response => {
            const covidVaccineData = response.data["timeline"];
            context.commit("processCovidVacinneData", covidVaccineData);

            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  },
  getters: {
    cases: state => {
      return state.cases;
    },
    todayCases: state => {
      return state.todayCases;
    },
    deaths: state => {
      return state.deaths;
    },
    todayDeaths: state => {
      return state.todayDeaths;
    },
    casesPerOneMillion: state => {
      return state.casesPerOneMillion;
    },
    deathsPerOneMillion: state => {
      return state.deathsPerOneMillion;
    },
    tests: state => {
      return state.tests;
    },
    activeCases: state => {
      return state.activeCases;
    },
    recovered: state => {
      return state.recovered;
    },
    critical: state => {
      return state.critical;
    },
    todayRecovered: state => {
      return state.todayRecovered;
    },

    chartData: state => {
      const chartData = {
        labels: Object.keys(state.chartDataCases),
        datasets: [
          {
            label: 'Cases',
            backgroundColor: '#f3f7ff',
            data: Object.values(state.chartDataCases)
          },
          {
            label: 'Deaths',
            backgroundColor: '#f87979',
            data: Object.values(state.chartDeathsCases)
          },
          {
            label: 'Recoveries',
            backgroundColor: '#5d65ff',
            data: Object.values(state.chartRecoveredCases)
          },
          {
            label: "Vaccines administered",
            backgroundColor: "#eebb17",
            data: Object.values(state.covidVaccineData)
          }
        ]
      }
      return chartData;
    },
    covidVaccineDataTotal: state => {
      return Object.values(state.covidVaccineData).pop();
    }
  }
});
