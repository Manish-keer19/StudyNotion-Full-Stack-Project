import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../comman/Input";
import { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { courseService } from "../../../../api/services/courseService";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { catagoryService } from "../../../../api/services/catagoryService";
import {
  setCourse,
  removeAllCourse,
  removeCourse,
  setStage,
} from "../../../../features/course/courseslice";

export default function CreatCourse() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [catagorys, setCatagorys] = useState([]);
  const [selectedfile, setselectedfile] = useState();
  const [imagePreview, setImagePreview] = useState();
  const ref = useRef();
  console.log("selected file bahar me",selectedfile);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const onsubmit = async (data) => {
    console.log("before submiting form data is ", data);
    const formData = new FormData();

    // apend the fiedls puri filed ko append karo
    formData.append("courseName", data.courseName);
    formData.append("courseDetail", data.courseDetail);
    formData.append("price", data.price);
    formData.append("catagory", data.catagory);
    formData.append("tags", data.tags);
    formData.append("whatYouWillLearn", data.whatYouWillLearn);
    formData.append("requrement/instruction", data["requrement/instruction"]);

    // add the file in form ke data me
    if (selectedfile) {
      console.log("selected file in onsubmit",selectedfile);
      formData.append("courseThumbnail", selectedfile);
    } else {
      console.log("file ni he bhai");
    }

    console.log("form data is ",formData);
    try {
      const res = await courseService.createCourse(formData, token);
      console.log("res is", res);
      if (res.success) {
        dispatch(setCourse(res.newCourse));
        dispatch(setStage(2));
      }
    } catch (error) {
      console.log("error while creating course", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setselectedfile(file);
      setImagePreview(URL.createObjectURL(file));
      console.log("selected file is ",selectedfile);
    }
  };

  const getallcatagory = async (token) => {
    try {
      const data = await catagoryService.gellAllCatagory(token);
      console.log("catagory is", data);
      console.log("catagory is", data.allCatagory);
      console.log("updated catagory is ", catagorys);

      if (data.success) {
        setCatagorys(data.allCatagory);
      }
    } catch (error) {
      console.log(error);

      toast.error("could not fetch the catagory");
    }
  };
  useEffect(() => {
    getallcatagory(token);
  }, [token]);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="text-[#999daa] w-[35vw] min-h-[130vh] ml-[2vw] bg-[#161d29] flex flex-col gap-5 p-[2vw] rounded-lg relative ">
        <Input
          label="course Title*"
          placeholder={"enter the course title"}
          width={"w-[90%]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("courseName")}
        />
        <Input
          label={"Course short description*"}
          placeholder={"enter description"}
          width={"w-[90%]"}
          height={"h-[16vh]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("courseDetail")}
        />
        <Input
          label={"Price*"}
          placeholder={"enter the price"}
          type={"number"}
          width={"w-[90%]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("price")}
        />

        <label>Catagory</label>
        <select
          className=" text-[#999daa] border p-[1vw] rounded-sm w-[90%]  bg-[#2c333f] "
          {...register("catagory")}
        >
          <option value="value" disabled selected>
            choose a catagory
          </option>
          {catagorys.map((item, i) => (
            <option key={i} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        <Input
          label={"Tags*"}
          placeholder={"choose a tag"}
          type={"text"}
          width={"w-[90%]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("tags")}
        />

        <div className="w-[90%] bg-[#2c333f] h-[24vh] border border-dotted rounded-md flex flex-col items-center justify-center">
          <label
            htmlFor="courseThumbnail"
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
          >
            <FaCloudUploadAlt size={35} className="text-[#ffd60a]" />
            <h1>
              Drag and drop an image, or{" "}
              <span className="text-[#ffd60a]">browse</span>
            </h1>
            <h1>Max 6MB each (12 MB for videos)</h1>
            <input
              id="courseThumbnail"
              type="file"
              accept="image/*"
              {...register("courseThumbnail")}
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="w-[80%] flex items-center gap-10 mt-[3vh] ml-[4vw]">
              <h1>. Aspect ratio 16:9</h1>
              <h1>. Recommended size 1024*576</h1>
            </div>
          </label>
        </div>

        {imagePreview && (
          <div className="mt-4">
            <h2 className="text-[#ffd60a] mb-2">Image Preview:</h2>
            <img
              src={imagePreview}
              alt="Course Thumbnail Preview"
              className="w-[90%] h-auto rounded-md"
            />
          </div>
        )}

        <Input
          label={"Benifit of course*"}
          placeholder={"Enter benifit of the courses"}
          type={"text"}
          width={"w-[90%]"}
          color={"bg-[#2c333f]"}
          height={"h-[15vh]"}
          ref={ref}
          {...register("whatYouWillLearn")}
        />

        <Input
          label={"RequreMents/Instruction*"}
          placeholder={"Enter benifit of the courses"}
          type={"text"}
          width={"w-[90%]"}
          color={"bg-[#2c333f]"}
          ref={ref}
          {...register("requrement/instruction")}
        />
        {/* <button className="text-[#ffd60a] h-15 absolute bottom-[3vh] text-2xl font-medium">
          Add
        </button> */}
      </div>
      <button
        className="border p-4 bg-[yellow] text-black ml-[27vw] mt-[5vh] w-[8vw] rounded-md flex items-center font-bold justify-center"
        type="submit"
      >
        Next
        <MdNavigateNext size={30} />
      </button>
    </form>
  );
}
