<template>
  <li class="mb-7">
    <router-link
      :to="restaurantPageLink"
      class="block mx-auto bg-brand-red-1 border border-solid border-brand-grey-2 rounded hover:shadow-grey"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-grey-2">
        <h2 class="mb-2 text-2xl">{{ restaurant.name }}</h2>
        <div class="mr-5">
          <span>{{ restaurant.location }}</span>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Restaurant Info:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li>Ratings: {{ restaurant.ratings }}</li>
              <li>Total Reviews: {{ restaurant.totalReviews }}</li>
              <li>{{ restaurant.description }}</li>
              <li>Opening Hours: {{ restaurant.openingHours }}</li>
              <li>Day Closed: {{ restaurant.dayClosed }}</li>
              <li>Available Food Items:</li>
              <li
                v-for="menuItem in restaurant.menuItems"
                :key="menuItem"
                class="inline-block mr-5"
              >
                {{ menuItem }}
              </li>
              <li class="text-lg text-brand-red-2 pt-3">
                Ongoing Offer: {{ restaurant.currentOffer }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link
            :to="restaurantPageLink"
            class="font-bold text-brand-dark-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "RestaurantListing",
  props: { restaurant: { type: Object, required: true } },
  computed: {
    restaurantPageLink() {
      return `/restaurants/${this.restaurant.id}`;
    },
  },
};
</script>
