// src/services/authService.js
import apiClient from "../api/apiClient";

const authService = {
  signup: async (data) => {
    const response = await apiClient.post("/auth/signup", data);
    return response.data;
  },

  login: async (data) => {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  getProfile: async () => {
    const response = await apiClient.get("/auth/profile");
    return response.data;
  },
};

export default authService;
