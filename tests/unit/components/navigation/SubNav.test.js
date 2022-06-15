import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav.vue";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user is on Restaurants page", () => {
    it("dispalys restaurant count", () => {
      const routeName = "Restaurants";
      const wrapper = mount(SubNav, createConfig(routeName));
      const restaurantCount = wrapper.find("[data-test='restaurant-count']");
      expect(restaurantCount.exists()).toBe(true);
    });
  });

  describe("When user is NOT on Restaurants page", () => {
    it("does NOT dispaly restaurant counts", () => {
      const routeName = "Home";
      const wrapper = mount(SubNav, createConfig(routeName));
      const restaurantCount = wrapper.find("[data-test='restaurant-count']");
      expect(restaurantCount.exists()).toBe(false);
    });
  });
});
