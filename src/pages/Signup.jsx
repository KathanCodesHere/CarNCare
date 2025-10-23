import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import VerifyOtpModal from "../Components/VerifyOtpModal";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();

  // Use the hook (it already manages loading & error)
  const { signup, loading, error } = useAuth();

  // Local state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer", // fixed default
  });

  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [localError, setLocalError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLocalError(null); // clear local errors when typing
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    try {
      const res = await signup(formData);
      console.log("Signup Response:", res);

      if (res?.success) {
        setIsOtpOpen(true);
      } else if (res?.message) {
        setLocalError(res.message);
      }
    } catch (err) {
      console.error("Signup Error:", err);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong during signup.";
      setLocalError(message);
    }
  };

  // OTP Handlers
  const handleOtpVerify = (otp) => {
    console.log("Verified OTP:", otp);
    alert("OTP verified successfully 🎉");
    navigate("/login");
  };

  const handleResend = () => {
    console.log("Resending OTP...");
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8081/api/auth/google";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 mt-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Your Account
        </h2>

        {/* Error message (from hook or local) */}
        {(error || localError) && (
          <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 mb-4 text-center text-sm">
            {error || localError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hidden Role */}
          <input type="hidden" name="role" value="customer" />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 mt-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>
      </div>

      {/* OTP Modal */}
      <VerifyOtpModal
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        onVerify={handleOtpVerify}
        onResend={handleResend}
      />
    </div>
  );
};

export default Signup;
