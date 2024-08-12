import mongoose, { Schema } from "mongoose";
import { sendMail } from "../utility/sendMail.utils.js";
import { generateOtpTemplate } from "../templets/otptemplete.js";
const OtpSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, expires: 5 * 60 }
);

OtpSchema.pre("save",async function sendOtp(){
  const userName = this.email.split('@')[0];
  const htmlContent = generateOtpTemplate(userName, this.otp);
const response = await sendMail(this.email,"for varify you",htmlContent);
console.log("email has sent succesfully",response);
})

export const Otp = mongoose.model("Otp", OtpSchema);
