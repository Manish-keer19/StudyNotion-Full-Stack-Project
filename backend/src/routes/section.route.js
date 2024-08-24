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

export const sectionroute = Router();

// section routes
sectionroute
  .route("/creatSection")
  .post(authantication, isInstructore, creatSection);
sectionroute
  .route("/deleteSection")
  .post(authantication, isInstructore, deleteSection);
sectionroute
  .route("/updateSection")
  .post(authantication, isInstructore, updateSection);
