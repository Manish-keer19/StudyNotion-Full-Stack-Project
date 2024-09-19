import React, { useEffect } from "react";
import { MdFormatLineSpacing } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Input from "../../../comman/Input";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { useRef, useState } from "react";
import { setCourse, setStage } from "../../../../features/course/courseslice";
import { sectionService } from "../../../../api/services/sectionService";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../../HomePage/Button";
import { courseService } from "../../../../api/services/courseService";
import { subsectionService } from "../../../../api/services/subsectionService";
import { MdEditSquare } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function CreateSubsection() {
  const { stage } = useSelector((state) => state.course);
  console.log(stage);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const {
    register: subsectionRegister,
    handleSubmit: handlesubsectionseubmit,
    reset: subsectionReset,
    setValue: subsectionSetValue,
    getValues: subsectionGetValues,
    formState: { errors: subsectionError },
  } = useForm();

  const ref = useRef();
  const videoInputRef = useRef(null);

  const dispatch = useDispatch();

  const [sections, setSections] = useState(
    useSelector((state) => state.course.sections)
  );
  console.log("section after usestate ", sections);
  const [editIndex, setEditIndex] = useState(null);
  const [isAddlectureclicked, setIsAddlectureclicked] = useState(false);
  const [selectedfile, setSelectedfile] = useState();
  const [videoPreview, setvideoPreview] = useState(null);
  const [sectionId, setSectionId] = useState();
  const [isLectureEditButtonClicked, setIsLectureEditButtonClicked] =
    useState(false);
  const [subSectionId, setSubSectionId] = useState();
  const [isWorkDone, setIsWorkDone] = useState(false);

  const { course } = useSelector((state) => state.course);
  console.log("course before", course);

  // const subsection = course.coursecontent[0].Subsection;
  // console.log("susection is ",subsection);

  const CourseId = course?._id;

  // console.log("CourseId is", CourseId);
  // console.log("section are", sections);

  // Section creating function and update handler
  const onsubmit = async (data) => {
    console.log("data is", data);

    if (editIndex !== null) {
      // const updatedSection = sections.map((item, i) =>
      //   i === editIndex ? { ...item, sectionName: data.sectionName } : item
      // );

      // console.log("updatedsection", updatedSection);
      // setSections(updatedSection);
      // setEditIndex(null);
      // reset();

      console.log("updating value is ", sections[editIndex]);
      console.log("updating value is ", sections[editIndex].sectionName);

      const updatedata = {
        CourseId,
        sectionName: data.sectionName,
        sectionId: sections[editIndex]._id,
      };
      console.log("updated data is ", updatedata);
      try {
        const res = await sectionService.updateSection(updatedata);
        console.log("res is ", res);
        if (res.success) {
          toast.success("section has been updated");
          dispatch(setCourse(res.populatedCourse));
          setEditIndex(null);
          setIsWorkDone(!isWorkDone);
        } else {
          toast.error("could not update  the section");
        }
      } catch (error) {
        console.log("some error occured while updating the section");
        console.log("error in update section", error);
      }
      reset();
    } else {
      const values = { ...data, CourseId };
      console.log("values is ", values);
      try {
        const res = await sectionService.CreateSection(values);
        console.log("res is ", res);
        if (res.success) {
          toast.success("section has been created");
          dispatch(setCourse(res.populatedCourse));
          setIsWorkDone(!isWorkDone);
        } else {
          toast.error("could not create the section");
        }
      } catch (error) {
        console.log("some error occured while creating section");
        console.log("error in create section", error);
      }
      reset();
    }
  };

  const setSection = () => {
    const coursecontent = course.coursecontent;

    const newcourseContent = coursecontent.map((item, i) => {
      return { ...item, isDropdownClicked: false };
    });
    console.log("newcourseContent", newcourseContent);
    setSections(newcourseContent);
  };

  useEffect(() => {
    setSection();
  }, [course]);

  const toggleDropdown = (index) => {
    console.log("dropdown button clicked");
    const newSection = sections.map((item, i) => {
      if (i === index) {
        // console.log("toogle item is ",sections[i]);
        return { ...item, isDropdownClicked: !item.isDropdownClicked };
      } else {
        // console.log('item is ',item);
        return item;
      }
    });

    console.log("new Section is ", newSection);
    setSections(newSection);
    console.log("section is ", sections);
  };

  const handleDelete = async (index, i) => {
    // const updatedSection = sections.filter((item, i) => i !== index);
    // // console.log("updatedSection", updatedSection);
    // setSections(updatedSection);
    console.log(sections[index].sectionName);
    //  console.log(sections[index]._id);
    const deletedata = {
      sectionId: sections[index]._id,
      CourseId,
    };
    try {
      const res = await sectionService.deleteSection(deletedata);
      console.log("res is ", res);
      if (res.success) {
        toast.success("section has been deleted");
        dispatch(setCourse(res.populatedCourse));
        setIsWorkDone(!isWorkDone);
      } else {
        toast.error("could not delete the section");
      }
    } catch (error) {
      console.log("some error occured while creating section");
      console.log("error in create section", error);
    }
  };

  const handleEdit = (index) => {
    // console.log("edit button is clicked");
    console.log(sections[index]);

    setEditIndex(index);
    setValue("sectionName", sections[index].sectionName);
    console.log("Updated EditIndex to:", index);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    console.log("file is", file);
    if (file) {
      setSelectedfile(file);
      setvideoPreview(URL.createObjectURL(file));
      console.log("videoPreview is ", videoPreview);
    }
  };

  const getCourseFullDetails = async () => {
    if (CourseId) {
      console.log("CourseId: is ", CourseId);
      const res = await courseService.getCourseFullDetails(CourseId);
      if (res) {
        console.log("getCourseFullDetails is  ", res.data);
      }
      // const data = res.data.toObject();
      const newCourse = {
        ...res.data,
        isCourseEdited: false,
        courseStatus: "Draft",
      };
      dispatch(setCourse(newCourse));
      console.log("course is ", course);
    } else {
      console.error("CourseId is undefined");
    }
  };

  useEffect(() => {
    getCourseFullDetails();
  }, [isWorkDone]);

  // subsection handler
  const subSectionHandler = async (data) => {
    if (isLectureEditButtonClicked) {
      const newdata = { ...data, subSectionId, video: selectedfile };
      try {
        const updatedSubRes = await subsectionService.updateSubsection(newdata);
        console.log("res is ", updatedSubRes);
        subsectionReset();
        dispatch(setCourse(course));
        setIsWorkDone(!isWorkDone);
        setIsAddlectureclicked(false);
      } catch (error) {
        console.log("could not update subsection");
        console.log("error in update subsecton", error);
      }
    } else {
      // const formData = new FormData();

      // formData.append("CourseId", CourseId);
      // formData.append("description", data.description);
      // formData.append("sectionId", sectionId);
      // formData.append("title", data.title);

      // if (file) {
      //   formData.append("video", file);
      //   console.log(file);
      // } else {
      //   console.log("file is undifind");
      // }
      // console.log("form data is ", formData);

      const newData = { ...data, video: selectedfile, sectionId };
      console.log("newData is ", newData);

      try {
        const subsectionRes = await subsectionService.createSubsection(newData);
        console.log("res is ", subsectionRes);
        subsectionReset();
        dispatch(setCourse(course));
        setIsAddlectureclicked(false);
        setIsWorkDone(!isWorkDone);
      } catch (error) {
        console.log("could not create the subsection");
      }
    }
  };

  const handleRemoveVideo = () => {
    // Clear file input value
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
    setSelectedfile(null);
    setvideoPreview(null);
  };

  const handleLectureForm = (id) => {
    if (!id) {
      console.log("id is undifiend");
    } else {
      setSectionId(id);
      console.log("section id is ", sectionId);
      setIsAddlectureclicked(true);
    }
  };

  const handlerLectureEdit = (subsection) => {
    console.log("subsection edit clicked");
    console.log("subsection is", subsection);
    setSubSectionId(subsection._id);
    console.log("subsectionID is ", subSectionId);
    subsectionSetValue("title", subsection.title);
    subsectionSetValue("video", subsection.videoUrl);
    setvideoPreview(subsection.videoUrl);
    subsectionSetValue("description", subsection.description);
    setIsAddlectureclicked(true);
    setIsLectureEditButtonClicked(true);
  };

  const handleDeleteSubSection = async (subSectionId) => {
    console.log("subsection Id is ", subSectionId);
    try {
      const deleteres = await subsectionService.deleteSubsection({
        subSectionId,
      });
      console.log("res is ", deleteres);
      setIsWorkDone(!isWorkDone);
      dispatch(setCourse(course));
    } catch (error) {
      console.log("could not delete subsection");
      console.log("error in delete subsecton", error);
    }
  };

  const handleback = () => {
    dispatch(setCourse({ ...course, isCourseEdited: true }));
    if (stage != 1) {
      dispatch(setStage(stage - 1));
    }
  };

  return (
    <div className="min-h-[85vh]  flex flex-col gap-16">
      <div className="w-[35vw] min-h-[20vh] bg-[#161d29]  ml-[4vw] p-5 rounded-md">
        <h1 className="text-2xl ">Course Builder</h1>
        <div className="w-[99%] min-h-[24vh] bg-[#2c333f] rounded-md p-4 m-2 ">
          {sections.map((item, i) => (
            <div
              key={i}
              className={` font-bold text-[#c5c7d4] bordermin-h-[20vh]`}
            >
              <div className="section p-3  w-[98%] border-[#424854]  border-b-2 flex items-center justify-between">
                <h1 className="flex gap-2 font-bold min-w-fit">
                  <MdFormatLineSpacing size={25} />
                  {item.sectionName}
                </h1>

                <div className=" flex gap-3">
                  {/* edit icon */}
                  <MdEditSquare
                    size={23}
                    className="cursor-pointer hover:text-[yellow]"
                    onClick={() => {
                      handleEdit(i);
                    }}
                  />
                  {/* delete icon */}
                  <RiDeleteBin6Line
                    size={23}
                    onClick={() => handleDelete(i)}
                    className="cursor-pointer hover:text-[yellow]"
                  />
                  {/* Dropdown icon */}
                  {item.isDropdownClicked ? (
                    <IoMdArrowDropup
                      className="cursor-pointer hover:text-[yellow]"
                      size={23}
                      onClick={() => {
                        toggleDropdown(i);
                      }}
                    />
                  ) : (
                    <IoMdArrowDropdown
                      className="cursor-pointer hover:text-[yellow]"
                      size={23}
                      onClick={() => {
                        toggleDropdown(i);
                      }}
                    />
                  )}
                </div>
              </div>

              <div
                className={`  ${
                  item.isDropdownClicked ? "min-h-[10vh]" : "max-h-0 hidden"
                }`}
              >
                {item.Subsection.map((subsection, i) => (
                  <div className=" p-2  border-[#424854]  border-b-2 min-w-[85%] flex items-center justify-between gap-[8vw] ml-6   ">
                    <h1 className="flex gap-2 min-w-fit">
                      <MdFormatLineSpacing size={25} />
                      {subsection.title}
                    </h1>

                    <div className=" flex gap-3 ">
                      {/* edit icon */}
                      <MdEdit
                        size={23}
                        className="cursor-pointer hover:text-[yellow]"
                        onClick={() => {
                          handlerLectureEdit(subsection);
                        }}
                      />
                      {/* delete icon */}
                      <RiDeleteBin6Line
                        size={23}
                        className="cursor-pointer hover:text-[yellow]"
                        onClick={() => {
                          handleDeleteSubSection(item._id);
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  className="text-[#ffd60a]  flex  gap-2 items-center mt-[2vh]  ml-[2vw]"
                  onClick={() => {
                    handleLectureForm(item._id);
                  }}
                >
                  <FaPlus />
                  Add Lecture
                </button>
              </div>
            </div>
          ))}
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="w-[99%] mt-[3vh]">
              <Input
                placeholder={"Add a section to build your course"}
                width={"w-[100%]"}
                color={"bg-[#2c333f]"}
                outline={"outline-none"}
                ref={ref}
                {...register("sectionName", {
                  required: {
                    value: true,
                    message: "section filed is required",
                  },
                })}
              />
              {errors.sectionName && (
                <div className="text-[red]">{errors.sectionName.message}</div>
              )}
            </div>
            <button
              className="border w-fit flex p-3 items-center justify-center gap-2 rounded-md border-[#ffd60a] text-[#ffd60a] mt-[3vh]"
              type="submit"
            >
              <CiCirclePlus />
              {editIndex !== null ? "Update Section" : "Create Section"}
            </button>
          </form>
        </div>
      </div>
      {isAddlectureclicked && (
        <div className="absolute w-[46vw] min-h-[95vh] bg-[#161d29] top-5 ml-[10vw] z-40 rounded-lg flex flex-col items-center gap-10">
          <div className="w-full bg-[#2c333f] flex p-5 items-center justify-between rounded-lg">
            <h1 className="font-bold">Editing Lecture</h1>
            <ImCross
              className="cursor-pointer hover:text-[yellow]"
              onClick={() => {
                subsectionReset();
                setvideoPreview(null);
                setIsAddlectureclicked(false);
              }}
            />
          </div>
          <form
            className="w-full flex flex-col items-center gap-7 "
            onSubmit={handlesubsectionseubmit(subSectionHandler)}
          >
            <div className="vidoesection w-[90%] flex flex-col gap-2">
              <h1>Lecture Video</h1>

              <div className="w-[100%] bg-[#2c333f] h-[24vh] border border-dotted rounded-md flex flex-col items-center justify-center  ">
                <label
                  htmlFor="videoLecture"
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
                >
                  <FaCloudUploadAlt size={35} className="text-[#ffd60a]" />
                  <h1>
                    Drag and drop an image, or{" "}
                    <span className="text-[#ffd60a]">browse</span>
                  </h1>
                  <h1>Max 6MB each (12 MB for videos)</h1>
                  <input
                    id="videoLecture"
                    type="file"
                    accept="video/*"
                    {...subsectionRegister("video")}
                    className="hidden"
                    ref={videoInputRef}
                    onChange={handleVideoChange}
                  />
                  <div className="w-[80%] flex items-center gap-10 mt-[3vh] ml-[4vw]">
                    <h1>. Aspect ratio 16:9</h1>
                    <h1>. Recommended size 1024*576</h1>
                  </div>
                </label>
              </div>
              {videoPreview && (
                <div className="mt-3 min-h-[60vh]   ">
                  <h2 className="text-[#ffd60a] mb-2 text-2xl">
                    Image Preview:
                  </h2>
                  <div className=" flex flex-col w-full items-center p-2 h-[70vh]">
                    <video
                      controlsList="nodownload nofullscreen noremoteplayback"
                      controls
                      src={videoPreview}
                      alt="Course Thumbnail Preview"
                      className="w-[100%] h-full rounded-md  object-cover"
                    />
                    <Button
                      color="yellow"
                      text={"remove"}
                      width="w-[2vw]"
                      customClasses="mt-[1vh] "
                      onClick={handleRemoveVideo}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className=" w-[90%] flex flex-col gap-4">
              <div>
                <Input
                  label={"Lecture title**"}
                  placeholder="enter the lecture title"
                  color="bg-[#2c333f]"
                  width="w-full"
                  {...subsectionRegister("title")}
                />
              </div>
              <div>
                <Input
                  label={"Lecture Description**"}
                  placeholder="enter Lecture description"
                  color="bg-[#2c333f]"
                  width="w-full"
                  height="h-[10vh]"
                  {...subsectionRegister("description")}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-end w-full pr-[3vw] items-center ">
              <Button
                text={"cancle"}
                textcolor={"white"}
                color="#2c333f"
                outline="outline-white"
                onClick={() => {
                  subsectionReset();
                  setvideoPreview(null);
                  setIsAddlectureclicked(false);
                }}
              />
              <button
                type="submit"
                className="bg-[yellow]  text-black p-2 font-bold rounded-md"
              >
                {isLectureEditButtonClicked ? "Save" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className=" w-[50%]  flex items-center p-2 justify-center gap-10">
        <div
          className="w-[8vw] flex bg-[#161d29] items-center  p-2 rounded-lg justify-center cursor-pointer "
          onClick={handleback}
        >
          <MdOutlineKeyboardArrowLeft size={21} />
          <Button text="back" textcolor="white" color="#161d29" padding="p-1" />
        </div>
        <div className="w-[8vw] flex bg-[yellow] items-center  p-2 rounded-lg justify-center  text-[black] cursor-pointer">
          <Button
            text="next"
            textcolor="black"
            padding="p-1"
            onClick={() => {
              dispatch(setStage(3));
            }}
          />
          <MdKeyboardArrowRight size={21} />
        </div>
      </div>
    </div>
  );
}

export default CreateSubsection;
