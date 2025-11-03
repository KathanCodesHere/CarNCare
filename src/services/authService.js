// src/services/authService.js
import apiClient from "../api/apiClient";

const authService = {
  /**
   * Registers a new user
   * @param {Object} data - { name, email, phone, password, role }
   * @returns {Promise<Object>} API response
   */
  signup: async (data) => {
    try {
      const payload = {
        ...data,
        role: data.role || "customer", // ensure role is always 'customer'
      };
      const response = await apiClient.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "Signup failed" };
    }
  },

  /**
   * Logs in a user
   * @param {Object} data - { email, password }
   * @returns {Promise<Object>} API response
   */
  login: async (data) => {
    try {
      const response = await apiClient.post("/auth/login", data);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "Login failed" };
    }
  },

  /**
   * Logs out the current user
   * @returns {Promise<Object>} API response
   */
  logout: async () => {
    try {
      const response = await apiClient.post("/auth/logout");
      return response.data;
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "Logout failed" };
    }
  },
  verifyOtp: async () => {
    try {
      const response = await apiClient.post("/mail/verifyOtp");
      return response;
    } catch (error) {
      console.error("verify otp failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "verify otp failed" };
    }
  },

};

export default authService;
