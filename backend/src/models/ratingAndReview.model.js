import mongoose, { Schema } from "mongoose";

const RatingAndReviewschema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const RatingAndReview = mongoose.model(
  "RatingAndReview",
  RatingAndReviewschema
);
