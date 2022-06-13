<template>
  <div>
    <main-nav />
    <hero-component />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import HeroComponent from "@/components/restaurant_search/HeroComponent.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroComponent,
  },
};
</script>
