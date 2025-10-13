import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const VerifyOtpModal = ({ isOpen, onClose, onVerify, onResend }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    setIsResendActive(false);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsResendActive(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isOpen]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      onVerify(otpCode);
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  const handleResend = () => {
    setTimer(30);
    setIsResendActive(false);
    onResend?.(); // trigger resend callback
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Verify Your OTP
        </h2>
        <p className="text-gray-600 mb-6">
          Enter the 6-digit OTP sent to your email.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold
                         focus:border-blue-500 focus:outline-none transition"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition mb-4"
        >
          Verify OTP
        </button>

        {/* Resend Section */}
        <div className="text-gray-600 text-sm">
          {isResendActive ? (
            <button
              onClick={handleResend}
              className="text-blue-600 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <p>Resend available in {timer}s</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyOtpModal;
