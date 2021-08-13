<template>
  <div class="statistics-div">
    <h4 class="heading-h4">{{ Title }}</h4>
    <span class="number-span mr-3">Total: {{ Total.toLocaleString() }}</span>
    <span class="number-span">Today: {{ Today.toLocaleString() }}</span>
  </div>
</template>

<script>
export default {
  name: "StatisticsBlockDouble",
  props: {
    Title: String,
    Total: Number,
    Today: Number
  }
};
</script>
