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
    setError(null); // clear any previous error

    const data = await authService.signup(userData);
    return data; // you can navigate or show success toast here
  } catch (err) {
    console.error("Signup error:", err);

    // Normalize different types of possible errors
    const message =
      err?.response?.data?.message || // API error message
      err?.message ||                // Network or Axios message
      "Something went wrong during signup";

    setError(message); // store for UI display
    return null; // optional: helps caller know signup failed
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
  const verifyOtp = async (userData) => {
  try {
    setLoading(true);
    setError(null); // clear any previous error

    const data = await authService.verifyOtp(userData);
    return data; // you can navigate or show success toast here
  } catch (err) {
    console.error("Signup error:", err);

    // Normalize different types of possible errors
    const message =
      err?.response?.data?.message || // API error message
      err?.message ||                // Network or Axios message
      "Something went wrong during signup";

    setError(message); // store for UI display
    return null; // optional: helps caller know signup failed
  } finally {
    setLoading(false);
  }
};

  return { login, signup, logout, loading, error };
};
