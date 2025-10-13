import React,{useState} from "react";
import BookCarModal from "./BookCarModal";

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
  className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-700 p-4 flex flex-col
    hover:shadow-2xl border-blue-600 hover:scale-105 hover:-rotate-2 hover:border-blue-600 hover:border-2 hover:bg-blue-50"
>
       <img
    src={car.image_url}
    alt={car.model}
    className="w-full h-48 object-cover rounded-xl mb-4 transition-all duration-700
      group-hover:scale-110 group-hover:opacity-90"
  />
      <h3 className="text-xl font-semibold text-gray-800">{`${car.brand} ${car.model}`}</h3>
      <p className="text-gray-600 text-sm">{car.type ? car.type : "Xuv"}
</p>
      <p className="mt-2 font-medium text-blue-600">₹{car.rent_per_day} / day</p>
      <p
        className={`mt-1 text-sm font-semibold ${
          car.status === "Available" ? "text-green-600" : "text-red-500"
        }`}
      >
        {car.status}
      </p>
      <button
        disabled={car.status !== "Available"}
        onClick={() => setIsModalOpen(true)}
        className={`mt-4 py-2 rounded-xl font-medium text-white transition ${
          car.status === "Available"
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {car.status === "Available" ? "Book Now" : "Not Available"}
      </button>
      {/* Book Car Modal */}
      <BookCarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
