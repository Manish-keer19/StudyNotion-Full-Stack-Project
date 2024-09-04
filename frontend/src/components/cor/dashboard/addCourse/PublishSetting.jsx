import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "../../HomePage/Button";

function PublishSetting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { stage } = useSelector((stage) => stage.course);
  // console.log(stage);
  return (
    <div className="w-full  min-h-[55vh] flex  flex-col gap-12 ">
      <form className="flex flex-col gap-10  w-[60vw]" onSubmit={handleSubmit}>
        <div className="w-[40vw] bg-[#161d29] h-[20vh] p-5 flex flex-col gap-6 rounded-lg ml-[1vw]">
          <h1 className="text-2xl font-bold ">Publish Setting</h1>
          <div className="flex gap-3">
            <input type="checkbox" {...register("checkbox")} />
            <h1 className="text-[#6e727f] font-bold">
              Make this course public
            </h1>
          </div>
        </div>
        {stage == 3 && (
          <div className="flex items-center justify-between w-[50%] ml-[2vw]">
            <div className="w-[5vw] flex bg-[#161d29] items-center  p-2 rounded-lg justify-center cursor-pointer ">
              <MdOutlineKeyboardArrowLeft size={21} />
              <Button
                text="back"
                textcolor="white"
                color="#161d29"
                padding="p-1"
              />
            </div>
            <div className="min-w-[10vw]   flex gap-3">
              <Button
                text="Save as Draft"
                textcolor="white"
                color="#161d29"
                padding="p-2"
              />
              <Button
                text="Save and Public"
                textcolor="black"
                color="#ffd60a"
                padding="p-2"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default PublishSetting;
