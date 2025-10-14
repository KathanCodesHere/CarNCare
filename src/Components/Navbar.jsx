import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Check login status on route change
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, [location]);

  // ✅ Listen for login/logout in other tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🅰️ Left - Logo */}
        <div className="text-blue-600 font-bold text-xl sm:text-2xl md:text-3xl transition-all duration-300">
          <NavLink to="/">Care & Drive</NavLink>
        </div>

        {/* 🧭 Center - Desktop Links */}
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

        {/* 🧍‍♂️ Right Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* 👤 Profile Icon */}
              <FaUserCircle
                size={28}
                className="text-gray-700 cursor-pointer hover:text-blue-600 transition"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />

              {/* Dropdown menu (appears on click) */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 flex flex-col bg-white shadow-lg rounded-lg py-2 w-32 z-50">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/profile");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 text-left"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600 text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 🍔 Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
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
