// src/hooks/useAuth.js
import { useState } from "react";
import carService from "../services/carService";

export const useCars = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllCars = async () => {
    try {
      setLoading(true);
      
      const data = await carService.getAllCars();
    //   console.log("hook usecar data",data)
      return data;
    //   localStorage.setItem("accessToken", data.token);
    } catch (err) {
      setError(err.response?.data?.message || "No car data");
    } finally {
      setLoading(false);
    }
  };

  return { getAllCars, loading, error };
};
