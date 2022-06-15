<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">
        Page for Restaurant ID: {{ currentRestaurantId }}
      </h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">! Under Construction !</h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/shared/HeaderContainer.vue";

export default {
  name: "RestaurantView",
  components: {
    HeaderContainer,
  },
  computed: {
    currentRestaurantId() {
      return this.$route.params.id;
    },
  },
};
</script>
