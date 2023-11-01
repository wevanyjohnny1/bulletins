import http from "@/http-common";

class EmployeesService {
  getAllEmployees() {
    return http.get("/employees");
  }

  createEmployee(employee) {
    return http.post("/employees", { ...employee });
  }
}

export default new EmployeesService();
