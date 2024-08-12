import { Router } from "express";
import {
  changeProfile,
  createProfile,
  updateProfile,
} from "../controllers/profile.controller.js";
import {
  authantication,
  isAdmin,
  isInstructore,
  isStudent,
} from "../midlewares/auth.middelware.js";

export const profileRoute = Router();

// Profile route
profileRoute.route("/setProfileImage").post(authantication, changeProfile);
profileRoute.route("/createProfile").post(authantication, createProfile);
profileRoute.route("/updateProfile").post(authantication, updateProfile);
