import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import Sidebar from "../../../Pages/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import Button from "../HomePage/Button";
import { CiCirclePlus } from "react-icons/ci";
import { RiFileEditFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { courseService } from "../../../api/services/courseService";
import { removeCourse, removeStage, setCourse } from "../../../features/course/courseslice";
function MyCourses() {
  const { user } = useSelector((state) => state.profile);
  //  console.log("user detail in may course is ",user);
  const userId = user._id;
  console.log("userId is ", userId);

  const [courses, setCourses] = useState([]);
  // const [isCourse, setIsCourse] = useState(false)
  console.log("courses is ", courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchInstructoreData = async () => {
    try {
      const res = await courseService.getallcourseOfInstructore({ userId });
      console.log("res is ", res);
      if (res) {
        setCourses(res.userData.courses);
      }
    } catch (error) {
      console.log("error in mycourse while fetching instructure data");
      console.log("error is ", error);
    }
  };
  useEffect(() => {
    fetchInstructoreData();
  }, []);

  const handleEditMycourses = (item) => {
    console.log("item in my course ", item);
    const course = { ...item, isCourseEdited: true };
    console.log("course is ", course);
    dispatch(setCourse(course));
    dispatch(removeStage());
    navigate("/dashboard/add-course");
  };

  const handleDelete = (CourseId) => {
    console.log("CourseId is ", CourseId);
    try {
      courseService.deleteCourse({ CourseId }).then((res) => {
        console.log("res is ", res);
        if (res) {
          console.log("deleted successfully");
          dispatch(removeStage());
          dispatch(removeCourse())
          fetchInstructoreData();
        }
      });
    } catch (error) {
      console.log("error in mycourse while fetching instructure data");
      console.log("error is ", error);
    }
  };

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
            
              <>
                {courses.map((item, i) => (
                  <div className="Course " key={i}>
                    <div className="flex items-center justify-between ">
                      <div className=" flex gap-5 ">
                        <div className="w-[18vw]  h-[29vh]">
                          <img
                            className="w-full h-full object-cover rounded-lg"
                            src={item.thumbnail}
                            alt="img"
                          />
                        </div>
                        <div className="flex flex-col w-[30vw]  gap-4">
                          <h1 className="font-bold text-2xl ">
                            {item.courseName}
                          </h1>
                          <p className="text-[#afb2bf] w-[26vw]">
                            {item.courseDescription}
                          </p>
                          <h4>Created: April 27, 2023 | 05:15 PM</h4>
                          <div className="text-[#e7c009] w-fit  flex items-center rounded-2xl bg-[#2c333f]">
                            <IoCheckmarkDoneCircle size={25} />
                            <Button
                              text={item.courseStatus}
                              textcolor="#e7c009"
                              width="w-fit"
                              padding="p-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[32vw]  flex items-center justify-between mr-[2vw] gap-6 ">
                        <h1 className="">20H 10M</h1>
                        <div className="flex items-center">
                          <MdCurrencyRupee />
                          <h1 className="">{item.price}</h1>
                        </div>
                        <div className="flex gap-5 ">
                          <RiFileEditFill
                            size={25}
                            className=" hover:text-[#e7c009] cursor-pointer "
                            onClick={() => {
                              handleEditMycourses(item);
                            }}
                          />
                          <RiDeleteBin6Line
                            size={25}
                            className=" hover:text-[#e7c009]  cursor-pointer "
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
