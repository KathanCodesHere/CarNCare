import { useState } from "react";
import profileService from "../services/profileService";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getProfile = async () => {
    try {
      setLoading(true);
      const data = await profileService.getProfile();
    //   console.log("in user profile hook");
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Profile not fetched");
    } finally {
      setLoading(false);
    }
  };

//   export const updateProfile = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const getProfile = async () => {
//     try {
//       setLoading(true);
//       const data = await profileService.getProfile();
//     //   console.log("in user profile hook");
//       return data;
//     } catch (err) {
//       setError(err.response?.data?.message || "Profile not fetched");
//     } finally {
//       setLoading(false);
//     }
//   }
// };
  return { getProfile, loading, error };
};
