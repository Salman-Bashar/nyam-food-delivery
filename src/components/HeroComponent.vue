<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-brand-red-1">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <restaurant-search-form />
        </div>
        <div class="col-start-7 col-span-5">
          <head-image />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from "@/components/HeadLine.vue";
import RestaurantSearchForm from "@/components/RestaurantSearchForm.vue";
import HeadImage from "@/components/HeadImage.vue";

export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    HeadImage,
    RestaurantSearchForm,
  },
  data() {
    return {
      foodImage: require("@/assets/images/foodImage01.jpg"),
    };
  },
};
</script>
