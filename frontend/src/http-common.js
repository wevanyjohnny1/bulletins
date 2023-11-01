import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
