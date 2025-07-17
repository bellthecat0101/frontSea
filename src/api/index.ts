import axios from "axios";

const api = axios.create({
  baseURL: "https://686f8d6e91e85fac42a189c4.mockapi.io/api/v1/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
