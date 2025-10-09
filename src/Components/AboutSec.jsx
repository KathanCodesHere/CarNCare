const  AboutSec=()=> {
  return (
    <section className="w-full bg-gray-50 py-25">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About GO Rentals"
            className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            About <span className="text-blue-600">Care & Drive</span>
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Here at CND we’re all about helping our customers turn their daydream into reality.
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Whether it’s a weekend away or the adventure of a lifetime, we’re excited to be part of your trip.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We'll take care of the important stuff and point out the fun things you can do while on the road — freeing you up to really enjoy the journey.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            GO love every moment with the perfect rental car for your journey.
          </p>
        </div>

      </div>
    </section>
  );
}
export default AboutSec