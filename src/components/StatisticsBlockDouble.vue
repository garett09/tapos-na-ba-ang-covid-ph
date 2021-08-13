<template>
  <div class="statistics-div">
    <h4 class="heading-h4" style = "font-weight: bolder">{{ Title }}</h4>
    <span class="number-span  mr-3" style="font-weight: 700;">Today: {{ Today.toLocaleString() }}</span>
    <br>
    <span class="number-span" style = "font-weight: 500; color:#292f33 ">Total: {{ Total.toLocaleString() }}</span>

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
