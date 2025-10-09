import React from "react";
import carsData from "../data/carsData";
import CarCard from "../components/CarCard";

const Cars = () => {
  return (
    <section className="bg-gray-50 py-18 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl pt-2 font-bold text-blue-600">Our Cars</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Explore our collection of luxury, SUV, and commuter cars available
            for rent.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {carsData.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
