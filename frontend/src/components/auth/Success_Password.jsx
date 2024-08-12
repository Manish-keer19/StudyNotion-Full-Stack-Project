import React from "react";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import Navbar from "../cor/HomePage/Navbar";
import HighlightText from "../cor/HomePage/HighlightText";

function Success_Password() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[70vh] flex items-center justify-center mt-[7vh]">
        <div className="w-[35%] h-[75%] flex flex-col gap-5 items-center justify-center">
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-3xl">Password Reset Complete</h1>
            <p className="w-[30vw] mt-[3vh] text-center">
              Your password has been successfully reset. You can now log in with
              your new password.
            </p>
          </div>
          <Link to={"/login"}>
            <button className="text-[#ecebec] bg-[#0022ff] font-bold p-2 rounded-lg flex items-center justify-center">
              <BiLeftArrowAlt /> Back to Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success_Password;
