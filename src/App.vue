<template>
  <div>
    <main-nav />
    <hero-component />
    <page-footer />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import HeroComponent from "@/components/restaurant_search/HeroComponent.vue";
import PageFooter from "./components/footer/PageFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroComponent,
    PageFooter,
  },
};
</script>
