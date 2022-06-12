<template>
  <div>
    <main-nav />
    <hero-component />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroComponent from "@/components/HeroComponent.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroComponent,
  },
};
</script>
