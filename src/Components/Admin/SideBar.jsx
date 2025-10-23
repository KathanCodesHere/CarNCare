// src/components/Sidebar.jsx
import React from "react";
import { FaUserFriends, FaUserCog, FaCar, FaBars } from "react-icons/fa";

const Sidebar = ({ setActiveComponent, active }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden p-4 text-gray-700 fixed top-2 left-2 z-50 bg-white rounded-md shadow-md"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full bg-blue-600 text-white w-64 p-6 flex flex-col transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">CarRental Admin</h2>

        <nav className="flex flex-col gap-4">
          <button
            onClick={() => {
              setActiveComponent("users");
              setOpen(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              active === "users" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaUserFriends /> Users
          </button>

          <button
            onClick={() => {
              setActiveComponent("profile");
              setOpen(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              active === "profile" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaUserCog /> Profile
          </button>

          <button
            onClick={() => {
              setActiveComponent("addcar");
              setOpen(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              active === "addcar" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaCar /> Add Car
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
