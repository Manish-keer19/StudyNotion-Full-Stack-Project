import mongoose from "mongoose";
import instance from "../config/rozorpay.config..js";
import { Course } from "../models/courses.model.js";
import { User } from "../models/user.model.js";
import { sendMail } from "../utility/sendMail.utils.js";
import e from "express";

// capture the payment and initaite the razorpay order
export const capturePayment = async (req, res) => {
  //  get courseId and userId
  // validation
  // valid courseId
  // valid coureseDetail
  // check if user already pay for same course
  // create order
  // return response

  try {
    //  get courseId and userId
    const { courseId } = req.body;
    const { userId } = req.user.id;
    // validation
    // valid courseId
    if (!courseId) {
      return res.json({
        succes: false,
        message: "please provide valid course id",
      });
    }
    // valid coureseDetail
    var coureseDetail;
    try {
      coureseDetail = await Course.findById(courseId);
      if (!coureseDetail) {
        return res.json({
          succes: false,
          message: "could not find the course",
        });
      }
      // check if user already pay for same course
      const uId = mongoose.Types.ObjectId(userId);
      if (coureseDetail.studentEnrolled.includes(userId)) {
        return res.json({
          succes: false,
          message: "student is already Enrolled",
        });
      }
    } catch (error) {
      return res.json({
        succes: false,
        message: error.message,
      });
    }
    // create order
    var options = {
      amount: coureseDetail.price * 100,
      currency: "INR",
      receipt: Math.floor(Date.now()),
      notes: {
        courseId,
        userId,
      },
    };

    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);
    // return response
    return res.json({
      succes: true,
      message: "order instance is created succefully",
      courseName: coureseDetail.courseName,
      coureseDescription: coureseDetail.courseDescription,
      thumbnail: coureseDetail.thumbnail,
      orderId: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    return res.json({
      succes: false,
      message: "error in payment initiate",
      error: error.message,
    });
  }
};

// varify singature razorpay and server:

export const verifySignature = async (req, res) => {
  const webHookSecrete = 123456;

  const signature = req.headers["x-razorpay-signature"];
  console.log(signature);

  const generated_signature = crypto
    .createHmac("sha256", webHookSecrete)
    .update(req.body)
    .digest("hex");

  if (signature === generated_signature) {
    console.log("payment is authoriesed");

    const { courseID, userId } = req.body.payload.payment.entity.notes;

    try {
      // course me student ki id ko store kar do

      const updatedCourese = await Course.findByIdAndUpdate(
        { _id: courseID },
        {
          $push: {
            studentEnrolled: userId,
          },
        },
        { new: true }
      );

      // student ke coureses setion me course ki id  ko stor kar do

      const updatedStudent = await User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: {
            courses: courseID,
          },
        },
        { new: true }
      );

      //   send mail to user that you are enrolled in courses succesfully
      const emailResponse = await sendMail(
        updatedStudent.email,
        "for study notion",
        "you have succefully purchased our course thank you have a greate day❤️"
      );
    //   return succefully response:
    return res.json({
        succes:true,
        message:"signature verifyied and course added",
    })
    } catch (error) {
        return res.json({
            succes:false,
           message: "some eroor has occured during payment authorization",
           error:error.message,
        })
    }
  }
};
