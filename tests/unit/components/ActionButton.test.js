import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Demo Text",
      },
    });
    expect(wrapper.text()).toMatch("Demo Text");
  });

  it("applies one of the styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Demo Text",
        type: "primary",
      },
    });
    const button = wrapper.find("[data-test='action-button']");
    expect(button.classes("primary")).toBe(true);
  });
});
