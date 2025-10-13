import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { User, Heart, Car } from "lucide-react";
import Profile from "./Profile";
import WishlistSection from "../Components/WishlistSection";
import RentedCarsSection from "../Components/RentedCarsSection";



const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile/>;
      case "wishlist":
        return <WishlistSection/>;
      case "rented":
        return <RentedCarsSection />;
      default:
        return null;
    }
  };

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: <User size={20} /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart size={20} /> },
    { id: "rented", label: "Cars Rented", icon: <Car size={20} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-md border-r border-gray-200">
        <div className="p-5 flex md:flex-col flex-row md:justify-start justify-around items-center gap-4 md:gap-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full md:w-auto justify-center md:justify-start transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {item.icon}
              <span className="hidden md:inline font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
