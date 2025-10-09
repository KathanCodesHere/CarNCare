import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
      <p className="text-gray-600 text-sm">{car.type}</p>
      <p className="mt-2 font-medium text-blue-600">₹{car.rentPerDay} / day</p>
      <p
        className={`mt-1 text-sm font-semibold ${
          car.availability === "Available" ? "text-green-600" : "text-red-500"
        }`}
      >
        {car.availability}
      </p>
      <button
        disabled={car.availability !== "Available"}
        className={`mt-4 py-2 rounded-xl font-medium text-white transition ${
          car.availability === "Available"
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {car.availability === "Available" ? "Book Now" : "Not Available"}
      </button>
    </div>
  );
};

export default CarCard;
