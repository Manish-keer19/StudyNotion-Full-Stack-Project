import { Router } from "express";
import {
  Signup,
  login,
  generateOtp,
  changePassword,
} from "../controllers/auth.controller.js";
import {
  authantication,
  isAdmin,
  isInstructore,
  isStudent,
} from "../midlewares/auth.middelware.js";

import {
  resetPassword,
  resetPasswordToken,
  updatePassword,
} from "../controllers/resetPassword.controller.js";

export const authrouter = Router();

// auth route
authrouter.route("/otpGenerate").post(generateOtp);
authrouter.route("/signup").post(Signup);
authrouter.route("/login").post(login);
authrouter.route("/changePassword").post(authantication,changePassword);
authrouter.route("/resetPasswordToken").post(resetPasswordToken);
authrouter.route("/resetPassword").post(resetPassword);
authrouter.route("/updatePassword").post(authantication,updatePassword);
