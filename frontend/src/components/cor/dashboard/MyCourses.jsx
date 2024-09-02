import React from "react";
import Navbar from "../HomePage/Navbar";
import Sidebar from "../../../Pages/Sidebar";
import { Link } from "react-router-dom";
import Button from "../HomePage/Button";
import { CiCirclePlus } from "react-icons/ci";
import { RiFileEditFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
function MyCourses() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex ">
        <Sidebar />
        <div className="w-full  min-h-screen ">
          <div className="flex  items-center justify-between ">
            <div className="flex flex-col  w-fit ">
              <div className="flex text-2xl p-4 gap-1 text-[#838894] ">
                <Link to={"/"}>Home / </Link>
                <h1>Dashboard /</h1>
                <h1 className=" text-[#ffd60a]">Courses</h1>
              </div>
              <h1 className="text-3xl p-3">My Courses</h1>
            </div>

            <div className=" min-w-[5vw] mr-[3vw] bg-[yellow] flex  items-center p-2 rounded-md ">
              <CiCirclePlus className="text-black" size={26} />
              <Button text="New" textcolor="black" width="w-[40%]" />
            </div>
          </div>

          <div className="w-[95%] min-h-[50vh] m-auto  flex flex-col gap-5 ">
            <div className="text-[#afb2bf] flex  p-3 font-bold uppercase  items-center justify-between border-b ">
              <h1>courses</h1>
              <div className=" w-[30vw] flex items-center justify-between mr-[1vw]">
                <h1>Duration</h1>
                <h1>Price</h1>
                <h1>action</h1>
              </div>
            </div>

            <div className="Course">
              <div className="flex items-center justify-between ">
                <div className=" flex gap-5 ">
                  <div className="w-[18vw]  h-[29vh]">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1722917123868-f6e4a2d29652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col w-[30vw]  gap-4">
                    <h1 className="font-bold text-2xl ">
                      introductionn to Design
                    </h1>
                    <p className="text-[#afb2bf] w-[26vw]">
                      This course provides an overview of the design process,
                      design thinking, and basic design principles
                    </p>
                    <h4>Created: April 27, 2023 | 05:15 PM</h4>
                    <div className="text-[#e7c009] w-fit  flex items-center rounded-2xl bg-[#2c333f]">
                      <IoCheckmarkDoneCircle size={25} />
                      <Button
                        text="published"
                        textcolor="#e7c009"
                        width="w-fit"
                        padding="p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[32vw]  flex items-center justify-between mr-[2vw] gap-6 ">
                  <h1 className="">20H 10M</h1>
                  <h1 className="">520</h1>
                  <div className="flex gap-5 ">
                    <RiFileEditFill
                      size={25}
                      className=" hover:text-[#e7c009] cursor-pointer "
                    />
                    <RiDeleteBin6Line
                      size={25}
                      className=" hover:text-[#e7c009]  cursor-pointer "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
