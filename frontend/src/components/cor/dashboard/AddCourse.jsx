import React from "react";
import Sidebar from "../../../Pages/Sidebar";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import Input from "../../comman/Input";
import Navbar from "../../cor/HomePage/Navbar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { MdIncompleteCircle } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
function AddCourse() {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [firstCopmlete, setFirstCopmlete] = useState(false);
  const [secondCopmlete, setSecondCopmlete] = useState(false);
  const [thirdCopmlete, setThirdCopmlete] = useState(false);
  const [isbutton1clicked, setisbutton1clicked] = useState(true);

  const onsubmit = (data) => {
    console.log("data is", data);
  };
  return (
    <>
      <Navbar />
      <div className="w-[100vw] min-h-screen flex">
        <Sidebar />
        <div className="w-full min-h-[150vh] p-5">
          <Link
            to={"/dashboard/my-profile"}
            className="flex items-center w-fit h-fit mt-[3vh] ml-[3vw]"
          >
            <IoChevronBackSharp size={25} />
            <h1 className="text-2xl">Back to dashboard</h1>
          </Link>
          <div className="w-[50vw] h-[19vh] m-[2vw] ml-[4vw] flex items-center gap-[5vw] pl-[10vw] ">
            <div className=" min-h-[8vw] w-[13vw] flex flex-col items-center gap-3">
              <div
                className={`w-[80px] h-[80px] bg-[#161d29] rounded-full flex items-center justify-center text-3xl
                ${firstCopmlete ? "border border-[#ffd60a] text-[#ffd60a]" : "text-[#ffd60a]"}
                `}
              >
                {firstCopmlete ? <MdIncompleteCircle /> : 1}
              </div>
              <h1 className={`${firstCopmlete ? "text-[#ffd60a]" : ""}
                `}>Course Information</h1>
            </div>

            <div className=" min-h-[8vw] w-[13vw] flex flex-col items-center gap-3">
              <div className={`w-[80px] h-[80px] bg-[#161d29] rounded-full flex items-center justify-center text-3xl
              
              ${firstCopmlete?"border border-[#ffd60a] text-[#ffd60a]":""}
             `} >
              
              {secondCopmlete ? <MdIncompleteCircle /> : 2}
              </div>
              <h1>Course Builder</h1>
            </div>
            <div className=" min-h-[8vw] w-[13vw] flex flex-col items-center gap-3">
              <div className="w-[80px] h-[80px] bg-[#161d29] rounded-full flex items-center justify-center text-3xl">
                3
              </div>
              <h1>Publish</h1>
            </div>
          </div>
          {isbutton1clicked ? (
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="text-[#999daa] w-[50vw] min-h-[130vh] ml-[2vw] bg-[#161d29] flex flex-col gap-5 p-[4vw] rounded-lg relative ">
                <Input
                  label="course Title*"
                  placeholder={"enter the course title"}
                  width={"w-[90%]"}
                  color={"bg-[#2c333f]"}
                  ref={ref}
                  {...register("coursetitle")}
                />
                <Input
                  label={"Course short description*"}
                  placeholder={"enter description"}
                  width={"w-[90%]"}
                  height={"h-[16vh]"}
                  color={"bg-[#2c333f]"}
                  ref={ref}
                  {...register("courseDescription")}
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
                  <option value="Dsa">Dsa</option>
                  <option value="c++">c++</option>
                  <option value="web">web Devlopment</option>
                  <option value="spring">Spring boot</option>
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

                <label>Course Thumbnail</label>
                <div className="w-[90%] bg-[#2c333f] h-[24vh] border border-dotted rounded-md flex flex-col items-center justify-center">
                  <FaCloudUploadAlt size={35} className="text-[#ffd60a]" />
                  <h1>
                    Drag and drop and image, or{" "}
                    <span className="text-[#ffd60a]">browse</span>
                  </h1>
                  <h1>Max 6MB each (12 Mb for videos)</h1>
                  <div className=" w-[80%] flex items-center gap-10 mt-[3vh] ml-[4vw]">
                    <h1>. Aspect ratio 16:9</h1>
                    <h1>. Receommended size 1024*576</h1>
                  </div>
                </div>

                <Input
                  label={"Benifit of course*"}
                  placeholder={"Enter benifit of the courses"}
                  type={"text"}
                  width={"w-[90%]"}
                  color={"bg-[#2c333f]"}
                  height={"h-[15vh]"}
                  ref={ref}
                  {...register("benifit of Course")}
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
                <button className="text-[#ffd60a] h-15 absolute bottom-[3vh] text-2xl font-medium">
                  Add
                </button>
              </div>
              <button
                className="border p-4 bg-[yellow] text-black ml-[45vw] mt-[5vh] w-[8vw] rounded-md flex items-center font-bold justify-center"
                type="submit"
              >
                Next
                <MdNavigateNext size={30} />
              </button>
            </form>
          ) : (
            <div className="w-[60%] h-[40vh]  bg-[#161d29] text-2xl p-6 flex flex-col  gap-5 rounded-lg ml-[2vw] ">
              <Input
                label={"course Builder*"}
                placeholder={"Enter benifit of the courses"}
                type={"text"}
                width={"w-[80%]"}
                color={"bg-[#2c333f]"}
                ref={ref}
                {...register("requrement/instruction")}
              />
              <button className="border w-fit flex p-3 items-center justify-center gap-2 rounded-md border-[#ffd60a] text-[#ffd60a] mt-[3vh]">
                <CiCirclePlus/>
                Create Section
                </button>
            </div>
          )}
          <button
            className="border p-4 bg-[yellow] text-black ml-[45vw] mt-[5vh] w-[8vw] rounded-lg flex items-center font-bold justify-center"
            onClick={() => {
              setisbutton1clicked(!isbutton1clicked);
              setFirstCopmlete(!firstCopmlete);
        
            }}
          >
            change
          </button>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
