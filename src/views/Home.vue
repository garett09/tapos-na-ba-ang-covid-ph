<template>
  <b-container>
    <h1 class="h1-heading">Tapos na ba ang COVID19?</h1>
    <h2 class="h2-heading">Hindi. 😷</h2>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$store.dispatch("retrieveCovidData");
  }
};
</script>
