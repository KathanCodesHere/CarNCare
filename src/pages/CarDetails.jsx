import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import BookCarModal from "../Components/BookCarModal";

const CarDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const car = state?.car;
  const [liked, setLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!car) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-600 mt-10">
        <p>No car details found.</p>
        <button
          onClick={() => navigate("/cars")}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Cars
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6 pt-10 sm:p-10 sm:pt-24 flex flex-col lg:flex-row gap-10 items-center lg:items-start"
    >
      {/* Car Image */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={
            car.image_url ||
            "https://via.placeholder.com/600x400?text=Car+Image+Unavailable"
          }
          alt={car.model}
          className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Car Info */}
      <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
        {/* Car Name + Like */}
        <div className="flex justify-center lg:justify-between items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            {car.brand} {car.model}
          </h2>
          <button
            onClick={() => setLiked(!liked)}
            className="p-2 rounded-full hover:bg-blue-50 transition"
          >
            <Heart
              size={28}
              className={`transition-all ${
                liked ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        {/* Car Details */}
        <div className="text-gray-600 space-y-2">
          <p>
            <span className="font-semibold text-gray-800">Year:</span>{" "}
            {car.year}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Fuel Type:</span>{" "}
            {car.fuel_type}
          </p>
          <p>
            <span className="font-semibold text-gray-800">
              Seating Capacity:
            </span>{" "}
            {car.seating_capacity}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Status:</span>{" "}
            <span
              className={`${
                car.status === "Available" ? "text-green-600" : "text-red-500"
              } font-semibold`}
            >
              {car.status}
            </span>
          </p>
        </div>

        {/* Rent + Price */}
        <div className="text-2xl font-semibold text-blue-600 mt-6">
          ₹{car.rent_per_day} / day
        </div>
        <div className="text-gray-500">
          <p>Car Price: ₹{Number(car.price).toLocaleString()}</p>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl font-medium transition shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Book Car Modal */}
      <BookCarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default CarDetails;
