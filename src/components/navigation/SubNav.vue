<template>
  <h1
    class="w-full h-16 bg-brand-red-1 border-b border-solid border-brand-grey-1"
  >
    <div class="flex h-full items-center px-44">
      <div v-if="onRestaurantResultPage" data-test="restaurant-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-green-700">{{ searchResult }}</span> Restaurants
          found
        </span>
      </div>
    </div>
  </h1>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onRestaurantResultPage: true,
      searchResult: 87,
    };
  },
};
</script>
