import { mount } from "@vue/test-utils";
import Bulletin from "./Bulletin.vue";
import BulletinsService from "../services/BulletinsService";

jest.mock("@/services/BulletinsService");

describe("Bulletin", () => {
  it("should display 'Sem agendamentos.' when there are no appointments", async () => {
    const bulletinsData = [
      {
        id: "123",
        employee: {
          name: "Test Employee",
        },
        appointments: [],
      },
    ];

    BulletinsService.getBulletinsByEmployeeId.mockResolvedValue({
      data: bulletinsData,
    });

    const wrapper = mount(Bulletin, {
      props: {
        employeeId: "123",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Sem agendamentos.");
  });
});
