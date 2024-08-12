import React from "react";

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";

function TimellineSection() {
  const timeline = [
    {
      logo: logo1,
      heading: "Leadership",
      description: "Fully committed to the success company",
    },
    {
      logo: logo2,
      heading: "Responsibility",
      description: "Students will always be our top priority",
    },
    {
      logo: logo3,
      heading: "Flexibility",
      description: "The ability to switch is an important skill",
    },
    {
      logo: logo4,
      heading: "Solve the problem",
      description: "Code your way to a solution",
    },
  ];

  return (
    <div className="w-full p-5 flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-10">
      <div className="flex flex-col w-full lg:w-fit lg:ml-[10vw] gap-4 lg:gap-1">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={item.logo} alt="img" className="w-[2rem] lg:w-[3rem]" />
            <div>
              <h4 className="text-lg font-semibold lg:text-xl">
                {item.heading}
              </h4>
              <p className="text-sm lg:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full lg:w-[40vw] lg:ml-[7vw]">
        <img
          src={TimeLineImage}
          className="w-full h-auto object-cover"
          alt="img"
        />

        <div className="absolute bottom-[-40px] lg:bottom-[-50px] right-[5vw] lg:right-[7vw] bg-[#014A32] w-[90%] lg:w-[60%] flex gap-5 items-center p-5">
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl lg:text-4xl font-bold">10</h1>
            <h4 className="text-sm lg:text-base">YEAR EXPERIENCES</h4>
          </div>
          <div className="h-[40px] lg:h-[60px] w-[2px] bg-[#026748]"></div>
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl lg:text-4xl font-bold">250</h1>
            <h4 className="text-sm lg:text-base">TYPE OF COURSES</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimellineSection;
