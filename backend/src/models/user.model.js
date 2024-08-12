import mongoose, { Schema } from "mongoose";

const Userschema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    additionalDetail: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    image: {
      type: String,
    },
    coursesProgress: [
      {
        type: Schema.Types.ObjectId,
        ref: "CourseProgress",
      },
    ],
    token:{
      type:String,
    },
    resetPasswordExpires:{
      type:Date
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", Userschema);
