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
            <h3 class="heading-h3">
              Kamusta na tayo?
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Mga Impeksyon</h4>
            <span class="number-span mr-3">Kabuuan {{ cases }}</span>
            <span class="number-span">Sa araw na ito {{ cases }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Nasawi</h4>
            <span class="number-span mr-3">Kabuuan {{ cases }}</span>
            <span class="number-span">Sa araw na ito {{ cases }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Mga impeksyon sa bawat 1 milyon</h4>
            <span class="number-span mr-3">Total {{ cases }}</span>
            <span class="number-span">Sa araw na ito {{ cases }}</span>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="statistics-div">
            <h4 class="heading-h4">Nasawi sa bawat 1 milyon</h4>
            <span class="number-span mr-3">Total {{ cases }}</span>
            <span class="number-span">Sa araw na ito {{ cases }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="highlight-statistics-div">
            <h4 class="heading-h4">Bilang ng tests</h4>
            <span class="number-span">Total {{ cases }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">
              Ano ang itsura ng pag-unlad?
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div>
            <LineChart v-if="loaded" :chartdata="chartdata" :options="options"></LineChart>
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
    this.$store.dispatch("retrieveCovidData");
    this.$store.dispatch("retrieveCovidChartData")
  },
  mounted() {
    console.log(this.$store.getters.chartData)
    this.chartdata = this.$store.getters.chartData;
    this.loaded = true;
  },
  components: {
    LineChart
  },
  data() {
    return {
      loaded: false,
      cases: 12345,
      chartdata: {},
      options: {},
    }
  }
};
</script>