import React from "react";

const brands = [
  {
    id: 1,
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
  {
    id: 3,
    name: "Audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/640px-Audi-Logo_2016.svg.png",
  },
  {
    id: 4,
    name: "Rolls Royce",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95dUm_m_rcGQ66U3EpDpMOsIY_XhY6cmsgw&s",
  },
  {
    id: 5,
    name: "Mahindra",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7AHOwR6hHRb3RkL8wKj9e5zUGhE5EgfmGA&s",
  },
  {
    id: 6,
    name: "Tata Motors",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTN_CF_A9TYb2Pyp02iAMne7XZSnw36Snxw&s",
  },
  {
    id: 7,
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/640px-Toyota_logo_%28Red%29.svg.png",
  },
  {
    id: 8,
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hyundai_badge.jpg/640px-Hyundai_badge.jpg",
  },
  {
    id: 9,
    name: "Kia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/KIA-Logo-1994-2012.png/640px-KIA-Logo-1994-2012.png",
  },
];

const BrandsGrid = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-600">
          Brands Available at Care & Drive
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          We’re proud to offer cars from the world’s most trusted brands.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center justify-center bg-blue-100 border-1 rounded-xl p-6 shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsGrid;
