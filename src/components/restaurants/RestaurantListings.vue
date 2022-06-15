<template>
  <main class="flex-auto p-8 bg-brand-grey-2">
    <ol>
      <restaurant-listing />
      <restaurant-listing />
      <restaurant-listing />
      <restaurant-listing />
      <restaurant-listing />
    </ol>
  </main>
</template>

<script>
import RestaurantListing from "@/components/restaurants/RestaurantListing.vue";

export default {
  name: "RestaurantListings",
  components: {
    RestaurantListing,
  },
};
</script>
