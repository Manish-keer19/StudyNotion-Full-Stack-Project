import { Router } from "express";
import {
  changeProfilePicture,
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
profileRoute.route("/setProfileImage").post(authantication, changeProfilePicture);
profileRoute.route("/createProfile").post(authantication, createProfile);
profileRoute.route("/updateProfile").post(authantication, updateProfile);
