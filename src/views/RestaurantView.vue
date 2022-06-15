<template>
  <div>Restaurant Page for {{ currentRestaurantId }}</div>
</template>

<script>
export default {
  name: "RestaurantView",
  computed: {
    currentRestaurantId() {
      return this.$route.params.id;
    },
  },
};
</script>
