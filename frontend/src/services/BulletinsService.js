import http from "@/http-common";

class BulletinsService {
  getBulletinsByEmployeeId(employeeId) {
    return http.get(`/bulletins/${employeeId}`);
  }

  getActivities() {
    return http.get("/activities");
  }

  createAppointment(appointment) {
    return http.post("/appointments", { ...appointment });
  }
}

export default new BulletinsService();
