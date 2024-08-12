import React from "react";
import { useNavigate } from "react-router-dom";

function Success({ title, message, buttonText }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page or any other page
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-100 to-green-200 flex flex-col justify-center items-center p-6">
      <div className="max-w-md w-full bg-[#212121] p-8 rounded-lg shadow-xl text-center">
        <div className="bg-green-500 p-4 rounded-full inline-block mb-6">
          <svg
            className="w-14 h-14 text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 16l-4-4 1.4-1.4L9 13.2l8.6-8.6L19 6z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          {title || "Success!"}{" "}
          {/* Default to "Success!" if no title is provided */}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {message ||
            "Your action was completed successfully. You can now proceed to the next step or navigate to the homepage."}
        </p>
        <button
          onClick={handleGoHome}
          className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300 ease-in-out"
        >
          {buttonText || "Go Home"}{" "}
          {/* Default to "Go Home" if no button text is provided */}
        </button>
      </div>
    </div>
  );
}

export default Success;
