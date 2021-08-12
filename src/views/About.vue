<template>
  <b-container>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">Tungkol sa Proyekto na ito</h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">Saan ko kinuha ang mga data?</h4>
            <span class="number-span mr-3">
              Ang data na ipinapakita ay nagmula sa
              <b-link
                href="https://www.worldometers.info/coronavirus/"
                target="_blank"
                >Worldometers</b-link
              >
              at
              <b-link href="https://www.jhu.edu/" target="_blank"
                >Johns Hopkins University</b-link
              >. Parehong nakolekta sa pamamagitan ng
              <b-link href="https://github.com/disease-sh/API" target="_blank"
                >disease.sh API</b-link
              >
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">Bakit mo ginawa ang website na ito?</h4>
            <span class="number-span mr-3">
              Mas mabuti na ang tumulong ka kaysa wala kang magawa. Ginawa ko
              rin ito upang matuto ng bagong programming language.
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">
              Saan ko makikita ang code para sa website?
            </h4>
            <span class="number-span mr-3">
              Dito:
              <b-link href="https://github.com/garett09" target="_blank"
                >Adrian Sian's Github</b-link
              >
            </span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {
  name: "About",
};
</script>