import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../cor/HomePage/Navbar";
import { authServices } from "../../api/services/authServices";

function OtpVerification() {
  const [otp, setOtp] = useState(""); // Initialize OTP as an empty string
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e, index) => {
    let newOtp = otp.split(""); // Convert the string to an array for manipulation
    newOtp[index] = e.target.value.slice(-1); // Update the correct digit
    setOtp(newOtp.join("")); // Convert back to string and update state

    // Move to the next input field
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  let userData = location.state?.userData;

  const handleVerifyOtp = async () => {
    userData = { ...userData, otp }; // OTP is already a string
    try {
      const data = await userService.Signup(userData);
      if (data) {
        console.log("User created successfully", data);
        // Navigate to a different page or show a success message
        navigate("/Success");
      } else {
        console.log("Data is null");
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 flex h-[70vh] items-center justify-center">
        <div className="w-[35vw] p-4 rounded-lg shadow-md bg-white">
          <h1 className="text-2xl font-bold text-[#161D29] mb-4">Verify OTP</h1>
          <div className="flex justify-between mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index] || ""}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md bg-[#161D29] text-white placeholder-gray-500"
              />
            ))}
          </div>
          <button
            onClick={handleVerifyOtp}
            className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
