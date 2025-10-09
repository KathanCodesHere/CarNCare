import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderSection=()=> {
  const slides = [
    {
      id: 1,
      logo: "🚗",
      title: "Luxury at Your Fingertips",
      desc: "Experience the finest rides with unbeatable comfort and premium design — drive your dream car today!",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      logo: "⚡",
      title: "Power and Performance",
      desc: "Choose from our wide range of high-performance vehicles and feel the thrill on every drive.",
      img: "https://images.unsplash.com/photo-1600121779030-f5ae6a21befc?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      logo: "🌆",
      title: "City Drives, Simplified",
      desc: "Perfect cars for your daily commute or weekend getaways — reliable, stylish, and affordable.",
      img: "https://images.unsplash.com/photo-1758218921385-375f487730bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-2xl shadow-xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row p-8 px-15 items-center justify-between gap-10 ">
                {/* Left Side - Text */}
                <div className="flex-1 space-y-5 text-center md:text-left">
                  <div className="text-4xl">{slide.logo}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
                    {slide.desc}
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Learn More
                  </button>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default SliderSection