<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-dark-1 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="m-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-8">Eat</label>
        <text-input v-model="food" placeholder="Pizza, Burger, Steak etc..." />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-dark-1 bg-brand-grey-1"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-8">Location</label>
        <text-input v-model="location" placeholder="Dhanmondi" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
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
};
</script>
