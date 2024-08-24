import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  stage: localStorage.getItem("stage") || 1,
  course: JSON.parse(localStorage.getItem("course")) || null,
  allCourses: JSON.parse(localStorage.getItem("allCourses")) || [],
  Sections: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
      if (action.payload) {
        localStorage.setItem("course", JSON.stringify(action.payload));
      }
    },
    removeAllCourse: (state, action) => {
      state.course = null;
      localStorage.removeItem("course");
    },
    removeCourse: (state, action) => {
      const newCourse = state.course.filter(
        (item) => item.id != action.payload
      );
      console.log("new course is ", newCourse);
      if (newCourse) {
        (state.course = newCourse),
          localStorage.setItem("course", JSON.stringify(newCourse));
      }
    },
    setStage: (state, action) => {
      state.stage = action.payload;
      localStorage.setItem("stage", state.stage);
      toast.success("stage changed", state.stage);
    },
    removeStage: (state, action) => {
      state.stage = 1;
      localStorage.setItem("stage", 1);
    },
    setAllCourses: (state, action) => {
      state.course.push(action.payload);
      localStorage.setItem("allCourses", JSON.stringify(state.allCourses));
    },
    setSection: (state, action) => {
      state.Sections = action.payload;
      console.log("section in courseslice", state.Sections);
    },
  },
});

export const {
  setCourse,
  removeAllCourse,
  removeCourse,
  setStage,
  setAllCourses,
  setSection,
  removeStage
} = courseSlice.actions;
export default courseSlice.reducer;
