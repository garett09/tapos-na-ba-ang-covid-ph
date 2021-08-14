<template>
  <div :class="ClassProp">
    <h4 class="heading-h4 " style = "font-weight: bolder">{{ Title }}</h4>
    <span class="number-span" style="font-weight: 600">Total: {{ Total.toLocaleString() }}</span>
  </div>
</template>

<script>
export default {
  name: "StatisticsBlockSingle",
  props: {
    ClassProp: String,
    Title: String,
    Total: Number
  }
};
</script>
