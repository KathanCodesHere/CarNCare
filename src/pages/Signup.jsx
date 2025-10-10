import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signup Details:", formData);
    alert("Signup successful! 🎉");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-blue-600 mb-6"
        >
          Create Your Account 🚗
        </motion.h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Select Role
            </label>
            <select
              name="role"
              onChange={handleChange}
              value={formData.role}
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Already have an account */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mt-6"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
