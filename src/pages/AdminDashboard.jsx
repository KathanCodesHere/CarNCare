// src/components/Dashboard.jsx
import React, { useState } from "react";
import AddCar from "../Components/Admin/AddCar";
import AdminProfile from "../Components/Admin/AdminProfile";
import Users from "../Components/Admin/Users";
import Sidebar from "../Components/Admin/SideBar";
const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("users");

  const renderComponent = () => {
    switch (activeComponent) {
      case "users":
        return <Users />;
      case "profile":
        return <AdminProfile />;
      case "addcar":
        return <AddCar />;
      default:
        return <Users />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActiveComponent={setActiveComponent} active={activeComponent} />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
          {activeComponent === "users"
            ? "All Users"
            : activeComponent === "profile"
            ? "Admin Profile"
            : "Add New Car"}
        </h1>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
