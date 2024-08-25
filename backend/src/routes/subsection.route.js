import { Router } from "express";
import {
  authantication,
  isAdmin,
  isInstructore,
  isStudent,
} from "../midlewares/auth.middelware.js";

import {
  creatSection,
  updateSection,
  deleteSection,
  getAllSection,
} from "../controllers/section.controller.js";
import {
  createSubsection,
  updateSubsection,
  deleteSubsection,
} from "../controllers/subsection.controller.js";

export const subsectionRoute = Router();

subsectionRoute
  .route("/createSubsection")
  .post(authantication, isInstructore, createSubsection);
subsectionRoute
  .route("/updateSubsection")
  .post(authantication, isInstructore, updateSubsection);
subsectionRoute
  .route("/deleteSubsection")
  .post(authantication, isInstructore, deleteSubsection);
