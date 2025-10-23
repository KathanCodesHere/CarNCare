// src/components/AddCar.jsx
import React, { useState } from "react";

const AddCar = () => {
  const [car, setCar] = useState({
    name: "",
    model: "",
    rentPerDay: "",
    image: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Car Added:", car);
    alert("Car added successfully!");
    setCar({ name: "", model: "", rentPerDay: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-gray-700 font-medium">Car Name</label>
        <input
          type="text"
          name="name"
          value={car.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Model</label>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Rent / Day ($)</label>
        <input
          type="number"
          name="rentPerDay"
          value={car.rentPerDay}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          value={car.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Add Car
      </button>
    </form>
  );
};

export default AddCar;
