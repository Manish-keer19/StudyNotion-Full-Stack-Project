import mongoose, { Schema } from "mongoose";

const catagorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    coureses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

export const Catagory = mongoose.model("Catagory", catagorySchema);
