import { mount } from "@vue/test-utils";
import RestaurantSearchForm from "@/components/restaurant_search/RestaurantSearchForm.vue";

describe("RestaurantSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to restaurants page with search parameters", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(RestaurantSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const foodInput = wrapper.find("[data-test='food-input']");
      await foodInput.setValue("Burger");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Uttara");

      const submitButton = wrapper.find("[data-test='submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "Restaurants",
        query: {
          food: "Burger",
          location: "Uttara",
        },
      });
    });
  });
});
