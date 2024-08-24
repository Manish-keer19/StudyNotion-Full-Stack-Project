import mongoose, { Schema } from "mongoose";

const sectionShcema = new Schema(
  {
    sectionName: {
      type: String,
      required: true,
    },
    Subsection: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subsection",
      },
    ],
  },
  { timestamps: true }
);

export const Section = mongoose.model("Section", sectionShcema);
