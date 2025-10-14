// src/hooks/useAuth.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      setLoading(true);
      const data = await authService.login(credentials);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      await authService.signup(userData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return { login, signup, logout, loading, error };
};
