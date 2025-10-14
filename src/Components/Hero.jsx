import { Link } from "react-router-dom"
const Hero=()=> {
  return (
    <section className="w-full bg-gray-50 pt-20 pb-16 overflow-hidden"> 
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-extrabold text-gray-800 leading-tight break-words">
            Drive Your Dream Car <br />
            <span className="text-blue-600">With RentRide </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Experience comfort, luxury, and freedom. Choose from the best selection of cars and hit the road with confidence.
          </p>

          <Link to="/cars" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">Explore Cars</Link>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6">
          {/* Top Image */}
          <div className="w-full md:w-[480px] h-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=80"
              alt="Main Car"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="flex gap-6 w-full md:w-[480px]">
            <div className="w-1/2 h-[190px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80"
                alt="Car 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-1/2 h-[190px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80"
                alt="Car 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
}
export default Hero