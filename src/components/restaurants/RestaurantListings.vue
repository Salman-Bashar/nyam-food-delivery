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
import RestaurantListing from "@/components/restaurants/RestaurantListing.vue";

export default {
  name: "RestaurantListings",
  components: {
    RestaurantListing,
  },
  data() {
    return {
      restaurants: [
        {
          id: 1,
          name: "Nyam Restaurant",
          location: "Dhanmondi",
          menuItems: ["Pizza", "Burger", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.5,
          totalReviews: 313,
          currentOffer: "Buy One Get One on all Burger items!",
        },
        {
          id: 2,
          name: "Vooter Adda",
          location: "Mirpur",
          menuItems: ["Fried Rice", "Fried Chicken", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 2.5,
          totalReviews: 143,
          currentOffer: "N/A",
        },
        {
          id: 3,
          name: "Burgerology",
          location: "Dhanmondi",
          menuItems: ["French Fry", "Burger", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Sunday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.0,
          totalReviews: 196,
          currentOffer: "Free French Fries if You Buy 2 Jumbo Burgers!",
        },
        {
          id: 4,
          name: "Mr. Manik",
          location: "Uttara",
          menuItems: ["Burger", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.2,
          totalReviews: 218,
          currentOffer: "N/A",
        },
        {
          id: 5,
          name: "Burger King",
          location: "Uttara",
          menuItems: ["Fried Chicken", "Burger", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Sunday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 3.9,
          totalReviews: 284,
          currentOffer: "20% Discount on All Regular Burgers!",
        },
        {
          id: 6,
          name: "Sultan's Dine",
          location: "Dhanmondi",
          menuItems: ["Kacchi", "Tehari", "Morog Polao", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.2,
          totalReviews: 821,
          currentOffer: "Buy 3 Get 1 Offer!",
        },
        {
          id: 7,
          name: "Ajo Idea Space",
          location: "Uttara",
          menuItems: ["Pasta", "Onthon", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Saturday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.7,
          totalReviews: 412,
          currentOffer: "N/A",
        },
        {
          id: 8,
          name: "Muslim Biriyani Ghor",
          location: "Dhanmondi",
          menuItems: ["Biriyani", "Tehari", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 3.9,
          totalReviews: 86,
          currentOffer: "N/A",
        },
        {
          id: 9,
          name: "Oz Cafe",
          location: "Dhanmondi",
          menuItems: ["Fried Rice", "Fried Chicken", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Friday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.2,
          totalReviews: 140,
          currentOffer: "N/A",
        },
        {
          id: 10,
          name: "Dark Music Cafe",
          location: "Dhanmondi",
          menuItems: ["Pasta", "Fried Rice", "Fried Chicken", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.1,
          totalReviews: 254,
          currentOffer: "N/A",
        },
        {
          id: 11,
          name: "Steak House",
          location: "Dhanmondi",
          menuItems: ["Steak", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "N/A",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 4.8,
          totalReviews: 452,
          currentOffer: "Free Cold Drinks per Person!",
        },
        {
          id: 12,
          name: "Pizza Hut",
          location: "Mirpur",
          menuItems: ["Pizza", "Cold Drinks"],
          openingHours: "10AM to 8 PM",
          dayClosed: "Friday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ratings: 3.5,
          totalReviews: 13,
          currentOffer: "None",
        },
      ],
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
};
</script>
