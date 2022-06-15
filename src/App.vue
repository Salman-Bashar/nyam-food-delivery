<template>
  <div>
    <main-nav />
    <router-view />
    <page-footer />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import PageFooter from "@/components/footer/PageFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    PageFooter,
  },
};
</script>
