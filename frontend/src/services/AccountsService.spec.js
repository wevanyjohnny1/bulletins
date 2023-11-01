import AccountsService from "./AccountsService";
import http from "@/http-common";

jest.mock("@/http-common", () => {
  return {
    post: jest.fn(),
  };
});

describe("AccountsService", () => {
  it("should make a login request", async () => {
    const email = "test@example.com";
    const password = "password";
    const responseData = { id: 1, name: "Test User" };

    http.post.mockResolvedValue({ data: responseData });

    const accountsService = new AccountsService();

    const response = await accountsService.login(email, password);

    expect(http.post).toHaveBeenCalledWith("/users/login", { email, password });
    expect(response).toEqual({ data: responseData });
  });

  it("should make a create request", async () => {
    const name = "Test User";
    const email = "test@example.com";
    const password = "password";
    const responseData = {
      id: 1,
      name: "Test User",
      email: "test@example.com",
    };

    http.post.mockResolvedValue({ data: responseData });

    const accountsService = new AccountsService();

    const response = await accountsService.create(name, email, password);

    expect(http.post).toHaveBeenCalledWith("/users", { name, email, password });
    expect(response).toEqual({ data: responseData });
  });
});
