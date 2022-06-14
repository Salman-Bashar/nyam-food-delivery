import { shallowMount } from "@vue/test-utils";

import SubNav from "@/components/navigation/SubNav.vue";

describe("Subnav", () => {
  describe("When user is on Restaurants page", () => {
    it("dispalys restaurant counts", () => {
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onRestaurantResultPage: true,
          };
        },
      });
      const restaurantCount = wrapper.find("[data-test='restaurant-count']");
      expect(restaurantCount.exists()).toBe(true);
    });
  });

  describe("When user is NOT on Restaurants page", () => {
    it("does NOT dispaly restaurant counts", () => {
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onRestaurantResultPage: false,
          };
        },
      });
      const restaurantCount = wrapper.find("[data-test='restaurant-count']");
      expect(restaurantCount.exists()).toBe(false);
    });
  });
});
