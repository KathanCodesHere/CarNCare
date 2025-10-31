// src/services/authService.js
import apiClient from "../api/apiClient";

const carService = {
  getAllCars: async () => {
    const response = await apiClient.get("/cars/getAllCar");
    return response.data;
  },
};

export default carService;
