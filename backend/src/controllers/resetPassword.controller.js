import { User } from "../models/user.model.js";
import { sendMail } from "../utility/sendMail.utils.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

// reset password give link to user in email

export const resetPasswordToken = async (req, res) => {
  // ALGO FOR GENERATE RESET PASSWORD TOKEN
  // fetch data email from req.body;
  // check user is registered or not :
  // upadate user and adding token and it's expiration time:
  // if user exixst in database crete a link in frontend and send link to user's email
  // send email to user:
  //   send response:

  try {
    // fetch data email from req.body;
    const { email } = req.body;
    console.log("email is ", email);
    // check user is registered or not :

    const user = await User.findOne({ email: email });

    console.log("user is ", user);
    if (!user) {
      res.json({
        success: false,
        meassage: "you are not registerd please do singup befor reset password",
      });
    }

    const token = crypto.randomUUID();
    const url = `http://localhost:5173/update-password/${token}`;
    // upadate user and adding token and it's expiration time:
    const updatedDeatails = await User.findOneAndUpdate(
      { email: email },
      { token: token, resetPasswordExpires: Date.now() + 5 * 60 * 60 * 1000 },
      { new: true }
    );
    // if user exixst in database crete a link in frontend and send link to user's email
    console.log("update detail is", updatedDeatails);

    // send email to user:
    await sendMail(
      email,
      "Reset password Link",
      `password Reset Link URL:${url}`
    );
    //   send response:

    res.json({
      success: true,
      message: "email has been sent you in gmail check out",
      token,
    });
  } catch (error) {
    console.log("error in reset password token", error);
    res.json({
      success: false,
      message: "could not reset the password please try again",
      error: error.meassage,
    });
  }
};

export const resetPassword = async (req, res) => {
  //  ALGO FOR RESET PASSWORD;
  // fetch the dat from req.body:
  // validation
  // get user detail from db
  //  if no entry in db means invalid token,
  // check the token expires which is stored in db
  // hash the password
  // update the password in db
  // return response

  try {
    // fetch the dat from req.body:
    const { password, confirmpassword, token } = req.body;
    console.log("data");
    console.log("password:", password);
    console.log("confirmpassword:", confirmpassword);
    console.log("token is", token);
    console.log(typeof token);

    // validation
    if (!password || !confirmpassword) {
      return res.json({
        success: false,
        meassage: "all filed required",
      });
    }

    if (password !== confirmpassword) {
      return res.json({
        success: false,
        meassage: "both password is not same",
      });
    }

    // get user detail from db
    const user = await User.findOne({ token: token });
    console.log("user", user);

    //  if no entry in db means invalid token,
    if (!user) {
      return res.json({
        success: false,
        meassage: "token is invalid",
      });
    }
    // check the token expires which is stored in db
    if (user.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        meassage: "token has been expired",
      });
    }
    // hash the password
    const hashedpassword = await bcrypt.hash(password, 10);
    // update the password in db
    const upadatedUser = await User.findOneAndUpdate(
      { token: token },
      {
        password: hashedpassword,
      },
      { new: true }
    );
    console.log("updated user", upadatedUser);
    // return response
    return res.json({
      success: true,
      meassage: "passed has changed succefully",
    });
  } catch (error) {
    return res.json({
      success: false,
      meassage: "could not change the password please try again",
      error,
    });
  }
};
