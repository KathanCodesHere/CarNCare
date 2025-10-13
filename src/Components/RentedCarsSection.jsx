// src/components/RentedCarsSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Car } from "lucide-react";

const RentedCarsSection = ({ rentedCars = [] }) => {
  const sampleRented = [
    {
      id: 1,
      brand: "Toyota",
      model: "Innova Crysta",
      rent_per_day: 2500,
      days_rented: 4,
      status: "Returned",
      image_url:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39003/toyota-innova-crysta-exterior1.jpeg",
    },
    {
      id: 2,
      brand: "Hyundai",
      model: "Creta",
      rent_per_day: 1800,
      days_rented: 2,
      status: "Active",
      image_url:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/143885/hyundai-creta-right-front-three-quarter0.jpeg",
    },
  ];

  const cars = rentedCars.length ? rentedCars : sampleRented;

  return (
    <motion.div
      key="rented-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <Car className="text-blue-500" /> Cars Rented
      </h2>

      {cars.length === 0 ? (
        <p className="text-gray-600 text-center py-8">
          You haven’t rented any cars yet 🕒
        </p>
      ) : (
        <div className="space-y-4">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden border border-gray-100"
            >
              <img
                src={
                  car.image_url ||
                  "https://cdn-icons-png.flaticon.com/512/7430/7430942.png"
                }
                alt={car.model}
                className="h-40 w-full sm:w-48 object-cover"
              />

              <div className="flex-1 p-4 w-full">
                <h3 className="text-lg font-semibold text-gray-800">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-500 text-sm">
                  Rent per day: ₹{car.rent_per_day}
                </p>
                <p className="text-gray-500 text-sm">
                  Days rented: {car.days_rented}
                </p>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    car.status === "Active"
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  Status: {car.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default RentedCarsSection;
