<template>
  <h2 class="text-3xl font-light pl-1">
    <span class="font-bold">Feeling Hungry?</span>
    <br />
    Search for your favourite food here!
  </h2>
  <h3 class="text-2xl font-light pl-1">
    Find your next meal at <span class="text-brand-red-2 font-bold">Nyam.</span>
  </h3>
  <form
    class="flex items-center w-full h-12 mt-6 border border-solid border-brand-dark-1 rounded-3xl"
    @submit.prevent="searchForRestaurants"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="m-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <text-input
          v-model="food"
          placeholder="Pizza, Burger, Steak etc..."
          data-test="food-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-dark-1 bg-brand-grey-1"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <text-input
          v-model="location"
          placeholder="Dhanmondi"
          data-test="location-input"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import TextInput from "../shared/TextInput.vue";

export default {
  name: "RestaurantSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      food: "",
      location: "",
    };
  },
  methods: {
    searchForRestaurants() {
      this.$router.push({
        name: "Restaurants",
        query: { food: this.food, location: this.location },
      });
    },
  },
};
</script>
