import mongoose, { Schema } from "mongoose";
const coureseSchema = new Schema(
  {
    courseName: {
      type: String,
      trim: true,
      required: true,
    },
    courseDescription: {
      type: String,
      trim: true,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    requrement_instruction: {
      type: String,
      required:true
    },
    instructore: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    whatYouWillLearn: {
      type: String,
    },
    coursecontent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    ratingAndReveiws: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
    price: {
      type: Number,
    },
    thumbnail: {
      type: String,
    },
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catagory",
    },
    studentsEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    courseStatus: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", coureseSchema);
