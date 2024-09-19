import { Router } from "express";
import {
  createCourse,
  getCourseFullDetails,
  gettAllcourse,
  getallcourseOfInstructore,
  updateCourse,
  deleteCourse,
  updateCourseStatus
} from "../controllers/course.controller.js";

import {
  authantication,
  isAdmin,
  isInstructore,
  isStudent,
} from "../midlewares/auth.middelware.js";
export const courserouter = Router();
// course route
courserouter
  .route("/createCourse")
  .post(authantication, isInstructore, createCourse);
courserouter
  .route("/gettAllcourse")
  .get(authantication, isInstructore, gettAllcourse);
courserouter
  .route("/getCourseFullDetails/:CourseId")
  .get(authantication, isInstructore, getCourseFullDetails);
courserouter
  .route("/getallcourseOfInstructore")
  .post(authantication, isInstructore, getallcourseOfInstructore);
courserouter
  .route("/updateCourse")
  .post(authantication, isInstructore, updateCourse);
courserouter
  .route("/deleteCourse")
  .post(authantication, isInstructore, deleteCourse);
  
courserouter
  .route("/updateCourseStatus")
  .post(authantication, isInstructore, updateCourseStatus);
  
