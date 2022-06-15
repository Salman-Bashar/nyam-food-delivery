<template>
  <div class="flex flex-row flex-nowrap w-full bg-brand-red-1">
    <restaurant-filters-sidebar />
    <RestaurantListings />
  </div>
</template>

<script>
import RestaurantFiltersSidebar from "@/components/restaurants/restaurant_filters_sidebar/RestaurantFiltersSidebar.vue";
import RestaurantListings from "@/components/restaurants/RestaurantListings.vue";

export default {
  name: "RestaurantView",
  components: {
    RestaurantFiltersSidebar,
    RestaurantListings,
  },
};
</script>
