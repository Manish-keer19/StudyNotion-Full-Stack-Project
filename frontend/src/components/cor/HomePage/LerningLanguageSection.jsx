import React from "react";
import Button from "../HomePage/Button";
import img1 from "../../../assets/Images/Know_your_progress.png";
import img2 from "../../../assets/Images/Compare_with_others.png";
import img3 from "../../../assets/Images/Plan_your_lessons.png";

function LerningLanguageSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 mt-10 p-5">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh]">
        <img
          className="absolute left-[10%] md:left-[20%] w-[30%] md:w-[20%] h-full object-contain"
          src={img1}
          alt="Know Your Progress"
        />
        <img
          className="absolute left-[35%] md:left-[40%] w-[35%] md:w-[30%] h-full object-contain"
          src={img2}
          alt="Compare with Others"
        />
        <img
          className="absolute left-[65%] md:left-[60%] w-[35%] md:w-[30%] h-full object-contain"
          src={img3}
          alt="Plan Your Lessons"
        />
      </div>
      <Button text={"Learn More"} color={"yellow"} />
    </div>
  );
}

export default LerningLanguageSection;
