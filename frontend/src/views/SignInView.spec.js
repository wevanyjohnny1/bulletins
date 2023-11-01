import { mount } from "@vue/test-utils";
import { ref } from "vue";
import SignInView from "./SignInView.vue";

describe("SignIn view", () => {
  it("should renders the login form", () => {
    const email = ref("");
    const password = ref("");
    const wrapper = mount(SignInView, {
      data() {
        return { email, password };
      },
    });

    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("should submits the login form with valid input", async () => {
    const email = ref("test@email.com");
    const password = ref("test");
    const wrapper = mount(SignInView, {
      data() {
        return { email, password };
      },
    });

    const submitButton = wrapper.find("button[type='submit']");
    await submitButton.trigger("submit");
  });
});
