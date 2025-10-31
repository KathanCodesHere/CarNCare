// src/services/authService.js
import apiClient from "../api/apiClient";

const profileService = {
  
  getProfile: async () => {
    try {
      const response = await apiClient.get("/user/profile");
      return response.data;
    } catch (error) {
      console.error("Fetching profile failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "Unable to fetch profile" };
    }
  },
  updateProfile: async (formData) => {
    try {
      const response = await apiClient.post("/user/Updateprofile",formData);
      return response.data;
    } catch (error) {
      console.error("Updating profile failed:", error.response?.data || error.message);
      throw error.response?.data || { message: "Unable to update profile" };
    }
  },
};

export default profileService;
