// src/components/AdminProfile.jsx
import React, { useState } from "react";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@carrental.com",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={admin.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={admin.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          value={admin.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Update Profile
      </button>
    </form>
  );
};

export default AdminProfile;
