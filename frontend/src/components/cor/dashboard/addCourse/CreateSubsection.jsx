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
import { setCourse } from "../../../../features/course/courseslice";
import { sectionService } from "../../../../api/services/sectionService";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
function CreateSubsection() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const ref = useRef();

  const dispatch = useDispatch();

  const [sections, setSections] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
 const [isAddlectureclicked, setIsAddlectureclicked] = useState(true);

  const { course } = useSelector((state) => state.course);
  console.log("course", course);

  const CourseId = course._id;

  // console.log("sectios are", sections);

  console.log("section are", sections);
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

  return (
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
                <MdEdit
                  size={23}
                  className="cursor-pointer"
                  onClick={() => {
                    handleEdit(i);
                  }}
                />
                {/* delete icon */}
                <RiDeleteBin6Line
                  size={23}
                  onClick={() => handleDelete(i)}
                  className="cursor-pointer"
                />
                {/* Dropdown icon */}
                {item.isDropdownClicked ? (
                  <IoMdArrowDropup
                    className="cursor-pointer"
                    size={23}
                    onClick={() => {
                      toggleDropdown(i);
                    }}
                  />
                ) : (
                  <IoMdArrowDropdown
                    className="cursor-pointer"
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
              <div className=" p-2  border-[#424854]  border-b-2 w-[85%] flex items-center justify-evenly gap-[12vw] ml-8   ">
                <h1 className="flex gap-2 min-w-fit">
                  <MdFormatLineSpacing size={25} />
                  Lesson-01.1
                </h1>

                <div className=" flex gap-3 ">
                  {/* edit icon */}
                  <MdEdit size={23} />
                  {/* delete icon */}
                  <RiDeleteBin6Line size={23} />
                </div>
              </div>
              <button className="text-[#ffd60a]  flex  gap-2 items-center mt-[2vh] m-5">
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
  );
}

export default CreateSubsection;
