// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import Button from "../../HomePage/Button";
// import {
//   removeCourse,
//   setStage,
// } from "../../../../features/course/courseslice";
// import { useNavigate } from "react-router-dom";
// import { courseService } from "../../../../api/services/courseService";
// import toast from "react-hot-toast";

// function PublishSetting() {
//   const dispatch = useDispatch();
//   const [checkbox, setcheckbox] = useState(false);
//   const navigate = useNavigate();

//   const { stage } = useSelector((stage) => stage.course);
//   const { course } = useSelector((state) => state.course);
//   // console.log(course);
//   // console.log(stage);

//   const handleSaveasDraft = async () => {
//     if (!checkbox) {
//       const data = { courseStatus: "Draft", CourseId: course._id };
//       try {
//         const res = await courseService.updateCoursestatus(data);
//         console.log("res is ", res);
//         if (res) {
//           dispatch(removeCourse());
//            navigate("/dashboard/my-courses");
//            dispatch(setStage(1));
//         }
//       } catch (error) {
//         console.log("error in save as draft ", error);
//       }
//     } else {
//       toast.error("checkbox is checked");
//     }
//   };
//   const handleSaveasPublished = async () => {
//     if (checkbox) {
//       const data = { courseStatus: "Published", CourseId: course._id };
//       try {
//         const res = await courseService.updateCoursestatus(data);
//         console.log("res is ", res);
//         if (res) {
//           dispatch(removeCourse());
//           dispatch(setStage(1));

//           navigate("/dashboard/my-courses");
//         }
//       } catch (error) {
//         console.log("error in save as published ", error);
//       }
//     } else {
//       toast.error("checkbox is not checked");
//     }
//   };

//   return (
//     <div className="w-full  min-h-[55vh] flex  flex-col gap-12 ">
//       {/* <form className="flex flex-col gap-10  w-[60vw]" onSubmit={handleSubmit}> */}
//       <div className="w-[40vw] bg-[#161d29] h-[20vh] p-5 flex flex-col gap-6 rounded-lg ml-[1vw]">
//         <h1 className="text-2xl font-bold ">Publish Setting</h1>
//         <div className="flex gap-3">
//           <label name="checkbox" className="flex gap-3 cursor-pointer ">
//             <input
//               type="checkbox"
//               checked={checkbox}
//               onChange={() => setcheckbox(!checkbox)}
//               className="w-5 h-5 cursor-pointer"
//             />
//             <h1 className="text-[#6e727f] font-bold">
//               Make this course public
//             </h1>
//           </label>
//         </div>
//       </div>
//       {stage == 3 && (
//         <div className="flex items-center justify-between w-[50%] ml-[2vw]">
//           <div className="w-[5vw] flex bg-[#161d29] items-center  p-2 rounded-lg justify-center cursor-pointer ">
//             <MdOutlineKeyboardArrowLeft size={21} />
//             <Button
//               text="back"
//               textcolor="white"
//               color="#161d29"
//               padding="p-1"
//               onClick={() => {
//                 dispatch(setStage(2));
//               }}
//             />
//           </div>
//           <div className="min-w-[10vw]   flex gap-3">
//             <Button
//               text="Save as Draft"
//               textcolor="white"
//               color="#161d29"
//               padding="p-2"
//               onClick={handleSaveasDraft}
//             />
//             <Button
//               text="Save and Public"
//               textcolor="black"
//               color="#ffd60a"
//               padding="p-2"
//               onClick={handleSaveasPublished}
//             />
//           </div>
//         </div>
//       )}
//       {/* </form> */}
//     </div>
//   );
// }

// export default PublishSetting;







import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "../../HomePage/Button";
import { removeCourse, setStage } from "../../../../features/course/courseslice";
import { useNavigate } from "react-router-dom";
import { courseService } from "../../../../api/services/courseService";
import toast from "react-hot-toast";

function PublishSetting() {
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const { stage, course } = useSelector((state) => state.course);

  const handleSaveAsDraft = useCallback(async () => {
    if (!checkbox) {
      const data = { courseStatus: "Draft", CourseId: course._id };
      try {
        const res = await courseService.updateCoursestatus(data);
        console.log("res is ", res);
        if (res) {
          dispatch(removeCourse());
          dispatch(setStage(1));
          navigate("/dashboard/my-courses");
        }
      } catch (error) {
        console.log("error in save as draft ", error);
        toast.error("Failed to save as draft");
      }
    } else {
      toast.error("Checkbox is checked");
    }
  }, [checkbox, course._id, dispatch, navigate]);

  const handleSaveAsPublished = useCallback(async () => {
    if (checkbox) {
      const data = { courseStatus: "Published", CourseId: course._id };
      try {
        const res = await courseService.updateCoursestatus(data);
        console.log("res is ", res);
        if (res) {
          dispatch(removeCourse());
          dispatch(setStage(1));
          navigate("/dashboard/my-courses");
        }
      } catch (error) {
        console.log("error in save as published ", error);
        toast.error("Failed to publish the course");
      }
    } else {
      toast.error("Checkbox is not checked");
    }
  }, [checkbox, course._id, dispatch, navigate]);

  const handleBack = useCallback(() => {
    dispatch(setStage(2));
  }, [dispatch]);

  return (
    <div className="w-full min-h-[55vh] flex flex-col gap-12">
      <div className="w-[40vw] bg-[#161d29] h-[20vh] p-5 flex flex-col gap-6 rounded-lg ml-[1vw]">
        <h1 className="text-2xl font-bold">Publish Setting</h1>
        <div className="flex gap-3">
          <label className="flex gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={() => setCheckbox((prev) => !prev)}
              className="w-5 h-5 cursor-pointer"
            />
            <span className="text-[#6e727f] font-bold">
              Make this course public
            </span>
          </label>
        </div>
      </div>
      {stage === 3 && (
        <div className="flex items-center justify-between w-[50%] ml-[2vw]">
          <div
            className="w-[5vw] flex bg-[#161d29] items-center p-2 rounded-lg justify-center cursor-pointer"
            onClick={handleBack}
          >
            <MdOutlineKeyboardArrowLeft size={21} />
            <Button
              text="Back"
              textcolor="white"
              color="#161d29"
              padding="p-1"
            />
          </div>
          <div className="min-w-[10vw] flex gap-3">
            <Button
              text="Save as Draft"
              textcolor="white"
              color="#161d29"
              padding="p-2"
              onClick={handleSaveAsDraft}
            />
            <Button
              text="Save and Publish"
              textcolor="black"
              color="#ffd60a"
              padding="p-2"
              onClick={handleSaveAsPublished}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PublishSetting;

