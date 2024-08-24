import React from "react";
import Input from "../../../comman/Input";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { sectionService } from "../../../../api/services/sectionService";
import toast from "react-hot-toast";
import {
  setCourse,
  setSection,
  setStage,
} from "../../../../features/course/courseslice";

function CreateSection() {
  const ref = useRef();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { stage } = useSelector((state) => state.course);

  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  console.log("Course is ", course);
  const CourseId = course._id;
  console.log("CourseID is ", CourseId);

  const onsubmit = async (data) => {
    console.log("data is ", data);
    const newData = { ...data, CourseId };
    console.log("new data is ", newData);
    try {
      const res = await sectionService.CreateSection(newData, token);
      console.log("res is ", res);
      if (res.success) {
        toast.success("section has been created");
        dispatch(setCourse(res.populatedCourse));
        dispatch(setStage(3));
      } else {
        toast.error("could not create the section");
      }
    } catch (error) {
      console.log("some error occured while creating section");
      console.log("error in create section", error);
    }
  };

  return (
    <div className="w-[40%] h-[30vh]  bg-[#161d29]  p-6 flex flex-col  gap-2 rounded-lg ml-[2vw] border ">
      <form onSubmit={handleSubmit(onsubmit)}>
        <Input
          label={"course Builder*"}
          placeholder={"Enter the section name"}
          type={"text"}
          width={"w-[80%]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("sectionName", {
            required: {
              value: true,
              message: "section required he bhai",
            },
          })}
        />
        {errors.sectionName && (
          <div className="text-[red]">{errors.sectionName.message}</div>
        )}
        <button
          className="border w-fit flex p-3 items-center justify-center gap-2 rounded-md border-[#ffd60a] text-[#ffd60a] mt-[3vh]"
          type="submit"
        >
          <CiCirclePlus />
          Create Section
        </button>
      </form>
    </div>
  );
}

export default CreateSection;
