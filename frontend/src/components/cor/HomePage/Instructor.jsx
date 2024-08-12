import React from "react";
import Button from "./Button";
import instructorimg from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";

function Instructor() {
  return (
    <div className="w-full min-h-[50vh] bg-[#212121] flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-20">
      <div className="w-full md:w-[35vw] h-[40vh] md:h-[65vh] border">
        <img
          className="w-full h-full object-cover"
          src={instructorimg}
          alt="Instructor"
        />
      </div>
      <div className="w-full md:w-[50%] h-auto md:h-[70vh] flex flex-col items-center justify-center gap-6 md:gap-14">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-4xl w-fit">
            Become an <HighlightText text={"instructor"} />{" "}
          </h1>
          <p className="text-sm md:text-base w-full md:w-[31vw] mt-2">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
        </div>
        <Button
          text={"Start Teaching Today"}
          arrowActive={true}
          color={"yellow"}
        />
      </div>
    </div>
  );
}

export default Instructor;
