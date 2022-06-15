import { mount, RouterLinkStub } from "@vue/test-utils";
import RestauranListing from "@/components/restaurants/RestaurantListing.vue";

describe("RestauranListing", () => {
  const createConfig = () => ({
    props: {
      restaurant: {
        name: "Nyam Restaurant",
        location: "Dhanmondi",
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders restaurant name", () => {
    const wrapper = mount(RestauranListing, createConfig());
    expect(wrapper.text()).toMatch("Nyam Restaurant");
  });

  it("renders restaurant location", () => {
    const wrapper = mount(RestauranListing, createConfig());
    expect(wrapper.text()).toMatch("Dhanmondi");
  });
});
