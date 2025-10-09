import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Care & Drive</Link>
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/cars" className="text-gray-700 hover:text-blue-600 font-medium">Cars</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>

        </div>

        {/* Right - Login/Register */}
        <div className="flex items-center space-x-6">
  <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
    Login
  </Link>
  <Link
    to="/signup"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Register
  </Link>
</div>

      </div>
    </nav>
  );
}
