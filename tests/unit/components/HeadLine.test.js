import { mount } from "@vue/test-utils";
import HeadLine from "@/components/HeadLine.vue";
import { nextTick } from "process";

describe("HeadLine", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Fastest Food Delivery");
  });

  it("changes action verb at a consistent interval", () => {
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Delicious Food Delivery");
  });

  it("removes interval when the compoenent disappears", () => {
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
