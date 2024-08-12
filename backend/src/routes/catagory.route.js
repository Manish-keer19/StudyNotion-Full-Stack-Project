import { Router } from "express";
import {
  CreateCatagory,
  gellAllCatagory,
} from "../controllers/catagory.controller.js";
import {
  authantication,
  isAdmin,
  isInstructore,
  isStudent,
} from "../midlewares/auth.middelware.js";
export const catagoryroute = Router();

// catagory routes
catagoryroute
  .route("/createCatagory")
  .post(authantication, isAdmin, CreateCatagory);
catagoryroute.route("/gellAllCatagory").get(authantication, gellAllCatagory);
