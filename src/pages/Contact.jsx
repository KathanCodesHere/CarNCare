import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Palasia Square, Indore coordinates
  const location = { lat: 22.7170, lng: 75.8800 };

  // Google Maps container style
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
    borderRadius: "1rem",
  };

  return (
    <section className="bg-gray-50 py-22 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Contact Care & Drive</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Get in touch or visit our showroom — we’d love to meet you!
          </p>
        </div>

        {/* Contact + Images Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: Contact Details */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">About Care & Drive</h3>

            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
                Palasia Square, Indore, Madhya Pradesh, India
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-blue-600 text-lg" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-blue-600 text-lg" />
                careanddrive@gmail.com
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mt-4">
              At <span className="font-semibold text-blue-600">Care & Drive</span>, 
              we’re passionate about turning your travel dreams into reality. 
              Whether it’s a weekend escape or a long adventure, we’ll ensure 
              your journey is smooth, stylish, and memorable with our top-quality rental cars.
            </p>
          </div>

          {/* Right: Showroom Images */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
              alt="Showroom 1"
              className="rounded-xl object-cover h-52 w-full shadow-md hover:scale-105 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1511910849309-0dffb8785142?auto=format&fit=crop&w=600&q=80"
              alt="Showroom 2"
              className="rounded-xl object-cover h-52 w-full shadow-md hover:scale-105 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
              alt="Showroom 3"
              className="rounded-xl object-cover h-52 w-full shadow-md hover:scale-105 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80"
              alt="Showroom 4"
              className="rounded-xl object-cover h-52 w-full shadow-md hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
          <LoadScript googleMapsApiKey="AIzaSyCXBcQMPLMEFm9tLw4CWUOXb9NiSjdFU0A">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={15}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default Contact;
