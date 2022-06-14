import { mount } from "@vue/test-utils";
import TextInput from "@/components/shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("T");
    input.setValue("TE");
    input.setValue("TES");
    input.setValue("TEST");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["T"], ["TE"], ["TES"], ["TEST"]]);
  });
});
