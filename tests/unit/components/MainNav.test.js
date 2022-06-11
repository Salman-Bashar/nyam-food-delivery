import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Nyam.");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const mainNavItems = wrapper.findAll("[data-test='main-nav-menu-item']");
    const mainNavTexts = mainNavItems.map((item) => item.text());
    expect(mainNavTexts).toEqual([
      "Home",
      "Services",
      "Menu",
      "Contact",
      "Location",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to log in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile image", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
