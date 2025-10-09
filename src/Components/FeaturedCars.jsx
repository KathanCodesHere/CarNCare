import React from "react";
import { motion } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    price: "₹8,000/day",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series/10182/1750747451665/exterior-image-172.jpg",
    availability: "Available",
  },
  {
    id: 2,
    name: "Mahindra Thar",
    type: "Off-Road SUV",
    price: "₹3,500/day",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/12264/1759841599514/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    availability: "Available",
  },
  {
    id: 3,
    name: "Rolls Royce Ghost",
    type: "Ultra Luxury",
    price: "₹25,000/day",
    image:
      "https://imgd.aeplcdn.com/664x374/ec/EE/0d/10758/img/m/Rolls-Royce-Ghost-Right-Front-Three-Quarter-50925_ol.jpg?v=201711021421&q=80",
    availability: "Not Available",
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-600">Featured Cars</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Drive your dream car today — explore our top picks!
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <span
                className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold rounded-lg ${
                  car.availability === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {car.availability}
              </span>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h3>
              <p className="text-gray-500">{car.type}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-bold">{car.price}</span>
                <button
                  disabled={car.availability !== "Available"}
                  className={`px-4 py-2 rounded-xl text-sm font-medium text-white ${
                    car.availability === "Available"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {car.availability === "Available" ? "Book Now" : "Unavailable"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
