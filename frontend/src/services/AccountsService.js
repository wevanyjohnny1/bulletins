import http from "@/http-common";

class AccountsService {
  getUserById(userId) {
    return http.get(`/users/${userId}`);
  }

  login(email, password) {
    return http.post("/users/login", { email, password });
  }

  create(name, email, password) {
    return http.post("/users", { name, email, password });
  }
}

export default AccountsService;
