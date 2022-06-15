<template>
  <main class="flex flex-col h-full">
    <section class="flex flex-col pt-10 pb-20 bg-white">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <restaurant-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <head-image />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <div class="text-2xl font-semibold text-brand-red-2 pl-44">
      Exclusive Offers:
    </div>
    <offer class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/restaurants"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-grey-2 h-96"
        >
          <img :src="slotProps.offer.img" class="object-contain" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ slotProps.offer.title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ slotProps.offer.description }}
            </p>
          </div>
          <router-link
            to="/restaurants"
            class="px-6 pb-4 text-sm text-brand-red-2"
            >See Restaurants</router-link
          >
        </router-link>
      </template>
    </offer>
  </main>
</template>

<script>
import HeadLine from "@/components/restaurant_search/HeadLine.vue";
import RestaurantSearchForm from "@/components/restaurant_search/RestaurantSearchForm.vue";
import HeadImage from "@/components/restaurant_search/HeadImage.vue";
import Offer from "@/components/restaurant_search/Offer.vue";

export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    HeadImage,
    RestaurantSearchForm,
    Offer,
  },
  data() {
    return {
      foodImage: require("@/assets/images/foodImage01.jpg"),
    };
  },
};
</script>
