import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* AnimatePresence for route transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }} // 👈 No exit movement — stays steady
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Layout;
