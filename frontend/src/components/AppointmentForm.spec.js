import { mount } from "@vue/test-utils";
import AppointmentForm from "./AppointmentForm.vue";
import BulletinsService from "../services/BulletinsService";

jest.mock("@/services/BulletinsService");

describe("AppointmentForm", () => {
  it("should fetch activities and populate the dropdown", async () => {
    const activities = [
      { id: 1, description: "Activity 1" },
      { id: 2, description: "Activity 2" },
    ];

    BulletinsService.getActivities.mockResolvedValue({ data: activities });

    const wrapper = mount(AppointmentForm);
    await wrapper.vm.$nextTick();

    const options = wrapper.findAll("option");
    expect(options).toHaveLength(3);
    expect(options[0].text()).toBe("Selecione uma atividade");
    expect(options[1].text()).toBe("Activity 1");
    expect(options[2].text()).toBe("Activity 2");
  });
});
