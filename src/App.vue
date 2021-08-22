<template>
  <div id="app">
    <Navbar></Navbar>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
}
</script>

<style>
body {
  color: #1a1b37;
}

.navbar-link {
  font-size: 1.5rem;
}

.heading-div {
  text-align: center;
}

.heading-h1 {
  font-size: 3.5rem;
}

@media (min-width: 576px) {
  .heading-h1 {
    font-size: 5rem;
  }
}

.heading-h2 {
  font-size: 3.5rem;
  text-decoration: underline;
}

@media (min-width: 576px) {
  .heading-h2 {
    font-size: 5rem;
    text-decoration: underline;
  }
}

.page-section {
  margin-top: 5rem;
}

.heading-h3 {
  font-size: 2rem;
  
}

@media screen and (max-width: 575px){
  .heading-h3{
        text-align: center;
  }
}

@media (min-width: 576px) {
  .heading-h3 {
    font-size: 3rem;

  }
}

.heading-h31 {
  font-size: 2rem;
  margin-bottom:5px;
  
}

@media (min-width: 576px) {
  .heading-h31 {
    font-size: 3rem;
    margin-bottom:50px;
  }
}

.heading-h4 {
  font-size: 1.5rem;
}

@media (min-width: 576px) {
  .heading-h4 {
    font-size: 2rem;
  }
}

.heading-h5 {
  font-style:italic;
  text-align: justify;

}
@media (min-width: 576px) {
  .heading-h5 {
    text-align: justify;
  }
}

.heading-h7 {
  font-style:italic;

}
.container{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* footer */
.footer{
    text-align: center;
    background: var(--black);
    color: var(--white-smoke);
    padding: 2rem 0;
    height: 15vh;
}
.footer .text{
    opacity: 0.8;
    font-size:1.5rem;
}
@media screen and (max-width: 576px) {
  .footer .text {
    font-size: 0.8rem;
  }
}

.number-span {
  font-size: 1.25rem;
}

@media (min-width: 576px) {
  .number-span {
    font-size: 2rem;
  }
}

.number-span1 {
  font-size: 1.25rem;
  
}

@media (min-width: 576px) {
  .number-span1 {
    font-size: 2rem;
    text-align: justify;
  }
}

.statistics-div {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f3f7ff;
  border-radius: 1rem;
}

@media (min-width: 992px) {
  .statistics-div {
    margin: 0rem;
    padding: 1rem;
    background-color: #f3f7ff;
    border-radius: 1rem;
  }
}

.container{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1rem;
}

.statistics-div1 {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f3f7ff;
  border-radius: 1rem;
  text-align: left;
  display:flex;
  justify-content: space-between;
}

@media (min-width: 992px) {
  .statistics-div1 {
    margin: 0rem;
    padding: 1rem;
    background-color: #f3f7ff;
    border-radius: 1rem;
  }
}

.statistics-row {
  margin-bottom: 0.5rem;
}

@media (min-width: 992px) {
  .statistics-row {
    margin-bottom: 2.5rem;
  }
}

.page-section-top {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.highlight-statistics-div {
  background-color: #1a1b37;
  color: #fff;
  border-radius: 1rem;
  padding: 1rem;
}
@media (max-width: 991px) {
  .highlight-statistics-inner-column {
    margin-top: 2rem;
  }
}
.highlight-statistics-inner-div {
  background-color: #5d65ff;
  border-radius: 1rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
