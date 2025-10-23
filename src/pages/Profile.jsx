import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useProfile } from "../hooks/useProfile";

const Profile = () => {
  const { getProfile, loading, error } = useProfile();

  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        const userData = res.data;

        setUser(userData);
        setFormData({
          name: userData.name || "",
          mobile: userData.phone || "",
          image: null,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    alert("Profile updated successfully ✅");
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <motion.div
      key="profile-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
    >
      {/* LEFT: Profile Image */}
      <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-2xl shadow-sm w-full lg:w-1/2">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4 shadow-md">
          {preview ? (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : user.image ? (
            <img
              src={user.image}
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Default Avatar"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h2 className="text-xl font-semibold text-blue-600">
          {user.name || "Care & Drive User"}
        </h2>
        <p className="text-gray-600 mt-1 text-center text-sm">
          Update your personal details and photo easily.
        </p>
      </div>

      {/* RIGHT: Profile Form */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Update Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <p>{user.email}</p>
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-2 py-2 border rounded-lg text-gray-700 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Profile;
