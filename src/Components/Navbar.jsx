import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <NavLink to="/">Care & Drive</NavLink>
        </div>

        {/* Center - Links */}
        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["/", "/cars", "/about", "/contact"].map((path, idx) => {
            const names = ["Home", "Cars", "About", "Contact Us"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:scale-110 transition-transform duration-200 px-2 py-1 rounded
                  ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-700 font-medium"}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {names[idx]}
              </NavLink>
            );
          })}
        </div>

        {/* Right - Login/Register with responsive smaller size on mobile */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium text-sm md:text-base"
          >
            Login
          </NavLink>
          <NavLink
  to="/signup"
  className="hidden md:block px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
>
  Register
</NavLink>

        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col gap-4">
          {["/", "/cars", "/about", "/contact"].map((path, idx) => {
            const names = ["Home", "Cars", "About", "Contact Us"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 px-2 py-2 rounded transition hover:bg-blue-100 hover:text-blue-700
                  ${isActive ? "bg-blue-100 text-blue-700 font-bold" : ""}`
                }
              >
                {names[idx]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
