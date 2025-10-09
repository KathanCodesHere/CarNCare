import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to GO Rentals 🚗
        </h1>
        <p className="text-gray-700 text-lg">
          You’ve successfully logged in using Google OAuth 2.0!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
