import React from "react";
import Sidebar from "../../../../Pages/Sidebar";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { useState } from "react";
import Navbar from "../../HomePage/Navbar";
import { MdDone } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import CreatCourse from "./CreatCourse";
import CreateSection from "./CreateSection";
import CreateSubsection from "./CreateSubsection";
import Button from "../../HomePage/Button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { setCourse, setStage } from "../../../../features/course/courseslice";
import PublishSetting from "./PublishSetting";
function AddCourse() {
  const dispatch = useDispatch();

  const { stage, course } = useSelector((state) => state.course);
  console.log("course is add course", course);

  console.log("stage is ", stage);

  
  return (
    <>
      <Navbar />
      <div className="w-[100vw]  flex relative ">
        <Sidebar />

        <div className="w-full  p-5  relative  min-h-[100vh]">
          <Link
            to={"/dashboard/my-profile"}
            className="flex items-center w-fit h-fit mt-[3vh] ml-[3vw]"
          >
            <IoChevronBackSharp size={25} />
            <h1 className="text-2xl">Back to dashboard</h1>
          </Link>
          <div className="w-fit h-[20vh] m-[2vw] flex items-center gap-[8vw]">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-[5vw] h-[5vw] bg-[#161d29] rounded-full flex items-center justify-center text-3xl `}
              >
                1
              </div>
              <h1>Course Information</h1>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="w-[5vw] h-[5vw] bg-[#161d29] rounded-full flex items-center justify-center text-3xl">
                2
              </div>
              <h1>Course Builder</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[5vw] h-[5vw] bg-[#161d29] rounded-full flex items-center justify-center text-3xl">
                3
              </div>
              <h1>Publish</h1>
            </div>
          </div>
          <div className="absolute top-[4vh] right-[10vw] w-[35%] min-h-[40vh] bg-[#161d29] rounded-lg p-6">
            <h1 className="flex gap-2 items-center text-2xl ">
              <BsLightningChargeFill size={30} className=" text-[#ffa900] ab" />{" "}
              Course Upload Tips
            </h1>
            <ul className="flex flex-col gap-2 p-2 mt-[1vh] w-[28vw]">
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} /> Set the Course Price option or make it
                free.
              </li>
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} />
                Standard size for the course thumbnail is 1024x576.
              </li>
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} />
                Video section controls the course overview video.
              </li>
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} />
                Course Builder is where you create & organize a course.
              </li>
              <li className="flex gap-1   w-fit">
                <GoDotFill size={25} />
                Add Topics in the Course Builder section to create lessons,
                quizzes, and assignments.
              </li>
              <li className="flex gap-1  w-fit">
                <GoDotFill size={25} />
                Information from the Additional Data section shows up on the
                course single page.
              </li>
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} />
                Make Announcements to notify any important
              </li>
              <li className="flex items-center   w-fit">
                <GoDotFill size={20} />
                Notes to all enrolled students at once.
              </li>
            </ul>
          </div>
          {stage == 1 && <CreatCourse />}
          {stage == 2 && <CreateSubsection />}
          {stage == 3 && <PublishSetting/>}
        </div>
       
        
      </div>
    </>
  );
}

export default AddCourse;
