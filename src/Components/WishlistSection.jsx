// src/components/WishlistSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const WishlistSection = ({ wishlist = [] }) => {
  // demo fallback data
  const sampleWishlist = [
    {
      id: 1,
      brand: "Tesla",
      model: "Model 3",
      price: "35,000",
      image_url:
        "https://www.tesla.com/sites/default/files/modelsx-new/social/model-3-hero-social.jpg",
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5",
      price: "60,000",
      image_url:
        "https://www.bmwusa.com/content/dam/bmwusa/X5/2023/overview/BMW-MY23-X5-Overview-Stage2-Desktop.jpg",
    },
  ];

  const cars = wishlist.length ? wishlist : sampleWishlist;

  return (
    <motion.div
      key="wishlist-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <Heart className="text-red-500" /> Wishlist
      </h2>

      {cars.length === 0 ? (
        <p className="text-gray-600 text-center py-8">
          No cars in your wishlist yet 🚗💨
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100"
            >
              <img
                src={
                  car.image_url ||
                  "https://cdn-icons-png.flaticon.com/512/7430/7430942.png"
                }
                alt={car.model}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-500 text-sm mb-2">₹ {car.price}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WishlistSection;
