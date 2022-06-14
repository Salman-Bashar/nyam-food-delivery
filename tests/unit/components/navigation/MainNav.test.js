import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Nyam.");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const mainNavItems = wrapper.findAll("[data-test='main-nav-menu-item']");
    const mainNavTexts = mainNavItems.map((item) => item.text());
    expect(mainNavTexts).toEqual(["Home", "Services", "Restaurants"]);
  });

  describe("when user is logged out", () => {
    it("prompts user to log in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays sub-navigation menu", async () => {
      const wrapper = shallowMount(MainNav);
      let subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
