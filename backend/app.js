import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
// all routes
import { catagoryroute } from "./src/routes/catagory.route.js";
import { authrouter } from "./src/routes/auth.route.js";
import { courserouter } from "./src/routes/Course.route.js";
import { profileRoute } from "./src/routes/Profile.route.js";
import { sectionroute } from "./src/routes/section.route.js";

const app = express();


// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// all routers
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/course", courserouter);
app.use("/api/v1/catagory", catagoryroute);
app.use("/api/v1/section", sectionroute);

export default app;
