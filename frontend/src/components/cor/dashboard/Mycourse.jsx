import React from "react";
import Sidebar from "../../../Pages/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../cor/HomePage/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

function Mycourse() {
  const [enrolledCourses, setEnrolledCourses] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex">
        <Sidebar />
        <div className="p-6 w-full min-h-screen">
          <div className="flex text-2xl p-4 gap-1 text-[#838894]">
            <Link to={"/"}>Home / </Link>
            <h1>Dashboard /</h1>
            <h1 className=" text-[#ffd60a]">Enrolled Courses</h1>
          </div>

          {enrolledCourses ? (
            <div className="w-full min-h-screen">
              <h1 className="text-3xl p-5">Enrolled Courses</h1>

              <div className="w-[30vw] h-[8vh] bg-[#161d29] ml-[3vw] mt-[3vh] rounded-full flex items-center justify-evenly font-bold ">
                <h1 className="text-[3vh] bg-[#000814] w-[7vw] p-1 rounded-full flex items-center justify-center">
                  All
                </h1>
                <h1 className="text-[3vh] bg-[#000814] w-[7vw] p-1 rounded-full flex items-center justify-center">
                  Pending
                </h1>
                <h1 className="text-[3vh] bg-[#000814] w-[9vw] p-1 rounded-full flex items-center justify-center">
                  Completed
                </h1>
              </div>
              <div className="w-[60vw] h-[40vh] mt-[4vh] rounded-lg  min-w-full ">
                <div className="bg-[#2c333f] rounded-lg flex items-center gap-[20vw] p-5">
                  <h1>Course Name</h1>
                  <div className="w-[50%] flex items-center gap-[15vw]">
                    <h1>Duration</h1>
                    <h1>Progress</h1>
                  </div>
                </div>
                <div className="cards w-full min-h-[80vh]">
                  <div className="card flex items-center gap-[10vw] p-3 relative">
                    <div className="flex gap-6 h-[10vh]">
                      <div className="w-[4vw] h-[100%]">
                        <img
                          className="w-full h-full rounded-lg"
                          src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1>The Copmlete Python</h1>
                        <h3>Short Description</h3>
                      </div>
                    </div>

                    <h1>2hr 30mins</h1>

                    <div className="w-[15vw] h-[2.1vh]">
                      <ProgressBar
                        completed={50}
                        maxCompleted={100}
                        bgColor="#47a5c5"
                        height="100%"
                        baseBgColor="#2c333f"
                      />
                    </div>
                    <BsThreeDotsVertical
                      size={27}
                      className="text-white cursor-pointer "
                      onClick={() => {
                        setMenu(!menu);
                      }}
                    />
                    {menu && (
                      <div
                        className={`w-[20vw] min-h-[15vh] bg-[#424854] rounded-md flex flex-col p-4 gap-5 absolute top-[10vh] right-[0vw] ${
                          !menu ? "hidden" : ""
                        }`}
                      >
                        <div className="font-bold flex items-center  text-2xl  gap-3 ">
                          <BsFillFileEarmarkCheckFill size={25} />
                          <h1 className="w-fit">Mark As Copmleted</h1>
                        </div>
                        <div className="font-bold flex items-center text-2xl gap-3">
                          <MdDelete size={30} />
                          <h1 className="w-fit">Remove</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center mt-[6vh] text-4xl">
              You have not Enrolled any courses{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mycourse;
