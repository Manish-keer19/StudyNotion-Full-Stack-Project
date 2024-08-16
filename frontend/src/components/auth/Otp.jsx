import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import Navbar from "../cor/HomePage/Navbar";
import { authServices } from "../../api/services/authServices";
import { toast } from "react-hot-toast";
import { BiLeftArrowAlt } from "react-icons/bi";

function OtpVerification() {
  const [otp, setOtp] = useState(Array(6).fill("")); // Initialize OTP as an array of 6 empty strings
  const [resending, setResending] = useState(false); // State to track if OTP is being resent
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e, index) => {
    const newOtp = [...otp]; // Copy the current OTP state
    newOtp[index] = e.target.value.slice(-1); // Update the correct digit with the last entered value
    setOtp(newOtp); // Update the state with the new OTP

    // Move to the next input field if available
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  let userData = location.state?.userData;

  const handleVerifyOtp = async () => {
    const otpString = otp.join(""); // Convert the OTP array to a string
    userData = { ...userData, otp: otpString }; // Update userData with the OTP string
    console.log("userdata is", userData);

    try {
      const data = await authServices.Signup(userData);
      if (data.success) {
        toast.success("User created successfully");
        console.log("User created successfully", data);
        navigate("/login");
      } else {
        toast.error("user create nahi ho saka")
        console.log("error while creating user",data)
      }
    } catch (error) {
      toast.success("user could not create");
      console.log("An error occurred", error);
    }
  };

  const handleResendOtp = async () => {
    setResending(true);
    setError(""); // Reset any previous errors

    try {
      await authServices.generateOtp(userData); // Call the API to resend OTP
      toast.success("OTP resent successfully");
      console.log("OTP resent successfully");
      setResending(false);
    } catch (error) {
      toast.error("Failed to resend OTP");
      console.log("Failed to resend OTP", error);
      setError("Failed to resend OTP. Please try again.");
      setResending(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 flex items-center justify-center min-h-screen py-4 px-2">
        <div className="max-w-md w-full p-4 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold mb-4 text-center">Verify OTP</h1>
          <p className="text-center mb-4">
            A verification code has been sent to you. Enter the code below
          </p>
          <div className="flex justify-between mb-4">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md bg-[#161D29] text-white placeholder-gray-500 focus:outline-none"
              />
            ))}
          </div>
          <button
            onClick={handleVerifyOtp}
            className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
          >
            Verify OTP
          </button>
          <button
            onClick={handleResendOtp}
            disabled={resending} // Disable button while resending
            className="bg-[#0f26a5] p-2 rounded mt-4 w-full"
          >
            {resending ? "Resending..." : "Resend OTP"}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <Link to={"/login"}>
              <button className="flex items-center justify-center mt-[2vh]">
                <BiLeftArrowAlt /> back to login
              </button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
