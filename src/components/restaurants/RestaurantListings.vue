<template>
  <main class="flex-auto w-5/6 p-8 bg-brand-grey-2">
    <ol>
      <restaurant-listing
        v-for="restaurant in displayedRestaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'Restaurants', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-red-2"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'Restaurants', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-red-2"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import RestaurantListing from "@/components/restaurants/RestaurantListing.vue";

export default {
  name: "RestaurantListings",
  components: {
    RestaurantListing,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.restaurants.length / 4);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedRestaurants() {
      const pageNumber = this.currentPage;
      const firstRestaurantIndex = (pageNumber - 1) * 4;
      const lastRestaurantIndex = pageNumber * 4;
      return this.restaurants.slice(firstRestaurantIndex, lastRestaurantIndex);
    },
  },
  async mounted() {
    const baseUrl = "https://nyam-db.herokuapp.com/";
    const response = await axios.get(`${baseUrl}/restaurants`);
    this.restaurants = response.data;
  },
};
</script>
