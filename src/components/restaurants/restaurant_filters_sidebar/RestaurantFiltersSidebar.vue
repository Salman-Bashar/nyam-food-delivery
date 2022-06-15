<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-dark-1 w-1/6"
  >
    <section class="pb-5">
      <div class="text-center">
        <h3 class="my-4 text-base font-semibold">Search using Filter</h3>
      </div>
      <restaurant-filters-sidebar-location />
      <restaurant-filters-sidebar-food />
    </section>
    <div class="text-center text-sm">
      <action-button text="Clear Filters" type="primary" />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import RestaurantFiltersSidebarLocation from "./RestaurantFiltersSidebarLocation.vue";
import RestaurantFiltersSidebarFood from "./RestaurantFiltersSidebarFood.vue";

export default {
  name: "RestaurantFiltersSidebar",
  components: {
    ActionButton,
    RestaurantFiltersSidebarLocation,
    RestaurantFiltersSidebarFood,
  },
};
</script>
