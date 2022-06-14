<template>
  <main>
    <section class="flex flex-col h-3/4 pt-10 pb-20 bg-brand-red-1">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <restaurant-search-form />
          <action-button
            text="Get Started"
            type="primary"
            class="mt-24 rounded-full"
          />
          <font-awesome-icon :icon="['fas', 'circle-play']" class="ml-6 mr-2" />
          Watch Video
          <div class="text-l text-brand-red-2 mt-12">
            <font-awesome-icon
              :icon="['fas', 'square-phone']"
              class="mr-2 h-4.5 rounded-full"
            />
            CALL US NOW: +880 1XXXXXXXXX
          </div>
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <head-image />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from "@/components/restaurant_search/HeadLine.vue";
import RestaurantSearchForm from "@/components/restaurant_search/RestaurantSearchForm.vue";
import HeadImage from "@/components/restaurant_search/HeadImage.vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    HeadImage,
    RestaurantSearchForm,
    ActionButton,
  },
  data() {
    return {
      foodImage: require("@/assets/images/foodImage01.jpg"),
    };
  },
};
</script>
