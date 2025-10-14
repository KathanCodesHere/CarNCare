import React, { useEffect,useState } from "react";
import CarCard from "../Components/CarCard";
import  {useCars}  from "../hooks/useCars";
import { Link } from "react-router-dom";
const Cars = () => {
  const { getAllCars, loading, error } = useCars();
  const [cars,setCars]=useState([]);
  useEffect(()=>{
    const fetchCars=async()=>{
      try{
        const data=await getAllCars();
        setCars(data.data.cars);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchCars();
  },[]);

  useEffect(() => {
  console.log("Cars updated:", cars); // ✅ Logs after state updates
}, [cars]);

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
          {cars.map((car) => (
            <Link key={car.car_id} to={`/car/${car.car_id}`} state={{ car }}>
              <CarCard car={car} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
