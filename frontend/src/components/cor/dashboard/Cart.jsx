import React from "react";
import Navbar from "../HomePage/Navbar";
import Sidebar from "../../../Pages/Sidebar";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReactStars from "react-stars";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full border min-h-screen">
          <div className="flex text-2xl p-4 gap-1 text-[#838894]">
            <Link to={"/"}>Home / </Link>
            <h1>Dashboard /</h1>
            <h1 className=" text-[#ffd60a]">Enrolled Courses</h1>
          </div>
          <h1 className="text-3xl p-5">My Whishlist</h1>
          <p className="ml-[3vw]">3 course in Whishlist</p>
          <div className="w-[95%] h-[.4vh] bg-[#161d29] m-auto mt-[2vh]"></div>
          <div className="items w-[95%] min-h-[60vh] border m-auto mt-[2vh] p-7">
            <div className="item w-[55vw] min-h-[25vh] flex p-3 gap-10 border-b ">
              <div className="w-[12vw] h-[21vh] ">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1721332155637-8b339526cf4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-[35vw] ">
                <h1 className="font-bold text-[1.3vw]">
                  the python bootcamp for zero to hero in python
                </h1>
                <span className="text-[#6e727f]">Name</span>
                <div className="flex ">
                  <div className="flex gap-3 items-center ">
                    <span className="text-[#e7c009] ">4.5</span>
                    <ReactStars
                      count={5}
                      className="text-[#e7c009]"
                    />
                  <span className="text-[#6e727f]">(review Count)</span>
                  </div>
                </div>
                <div className="text-[#6e727f]">totle Lessone*beginner</div>
              </div>

              <div className=" min-w-[15vw] flex items-center flex-col gap-7 p-4">
                <button className=" flex  items-center justify-center bg-[#161d29] text-[#e4446a]  w-fit p-4 gap-3 rounded-lg">
                  <RiDeleteBin5Line size={20} />
                  Remove
                </button>
                <h1 className="text-2xl font-bold text-[#ffd901]">Rs.1,700</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
