<template>
  <div
    class="w-full h-16 bg-brand-red-1 border-b border-solid border-brand-grey-1"
  >
    <div class="flex h-full items-center px-44">
      <div v-if="onRestaurantsPage" data-test="restaurant-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span> <span class="text-green-700">12</span> Restaurants found </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    onRestaurantsPage() {
      return this.$route.name === "Restaurants";
    },
  },
};
</script>
