import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer=()=> {
  return (
    <footer className="w-full bg-gray-100 py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-gray-600 text-sm font-medium">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Privacy & Cookies
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Careers
          </a>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex justify-center sm:justify-end gap-5 text-gray-600 text-lg">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom small text (optional) */}
      <div className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Care & Drive. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer