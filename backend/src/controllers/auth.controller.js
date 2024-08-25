import { User } from "../models/user.model.js";
import { Otp } from "../models/otp.model.js";
import bcrypt from "bcrypt";
import otpGenerater from "otp-generator";
import jwt from "jsonwebtoken";
import { sendMail } from "../utility/sendMail.utils.js";
import { changePasswordTemplet } from "../templets/changepassword.templet.js";

// we have three controller in this file
// 1. signup controller
// 2. signin/Login controller
// 3. Change password controller

//  send otp controller
export const generateOtp = async (req, res) => {
  try {
    // fetch the email from request.body.
    const { email } = req.body;

    console.log("email", email);
    // check if user is already registered:

    if (!email) {
      return res.json({
        success: false,
        message: "email is required",
      });
    }

    const isUserRegistered = await User.findOne({ email });
    console.log(isUserRegistered);

    if (isUserRegistered) {
      return res.json({
        success: false,
        message: "user already registered",
      });
    }

    // if user is not regitered
    function generatedOtp() {
      var otp = otpGenerater.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      return otp;
    }

    let otp = generatedOtp();

    console.log("Otp generated:-", otp);
    //  check the otp is unique or not :

    const result = await Otp.findOne({ otp: otp });

    while (result) {
      let otp = generatedOtp();
      const result = await Otp.findOne({ otp: otp });
    }

    const savevdOtp = await Otp.create({ email, otp });
    console.log("saved Otp is ", savevdOtp);

    res.json({
      success: true,
      message: "Otp generated succefully",
      otp,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "could not generate Otp",
      error,
    });
  }
};

// 2.signup/create user  controller
export const Signup = async (req, res) => {
  try {
    // fetch the data from req.body
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirm_password,
      accountType,
      otp,
    } = req.body;

    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);
    console.log("phoneNo", phoneNo);
    console.log("password", password);
    console.log("confirm_password", confirm_password);
    console.log("otp is ", otp);

    //   validate the data :
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNo ||
      !password ||
      !confirm_password ||
      !otp
    ) {
      return res.json({
        success: false,
        message: "all field are must require",
      });
    }

    // check both password are same or not:
    if (password !== confirm_password) {
      return res.json({
        success: false,
        message: "make sure both password filled are same",
      });
    }

    //   ceck the user already exits or not:

    const exixtUser = await User.findOne({ email });
    if (exixtUser) {
      return res.json({
        success: false,
        message: "user already registered",
      });
    }

    // find the most recent otp stored for user
    const recentOtp = await Otp.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recenotp ", recentOtp);
    console.log("recenotp ", recentOtp[0].otp);
    // validate the otp
    if (recentOtp.length == 0) {
      return res.json({
        success: false,
        message: "Otp Not Found",
      });
    } else if (recentOtp[0].otp !== otp) {
      //  Invalid Otp:
      return res.json({
        success: false,
        message: "Otp did not match",
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create entry in db

    const updatedUser = await User.create({
      firstName,
      lastName,
      accountType,
      email,
      phoneNo,
      password: hashedPassword,
      image: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&color=000`,
    });

    // return res
    return res.json({
      success: true,
      message: "user Registered succefully",
    });
  } catch (error) {
    console.log("error in sing up ", error.message);
    console.log("error in sing up ", error);
    return res.json({
      success: false,
      message: "user could not register please try again",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    // get the data from req.body
    const { email, password } = req.body;
    console.log("email:", email);
    console.log("password:", password);

    // validation the data
    if (!email || !password) {
      return res.json({
        success: false,
        message: "all field must be required",
      });
    }

    // check user exitst or
    const user = await User.findOne({ email })
      .populate("additionalDetail")
      .exec();
    if (!user) {
      return res.json({
        success: false,
        message: "user did not register please register first",
      });
    }

    // campare the password And create jwt token after mathing password
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1w",
      });
      user.token = token;
      console.log("user.token is ", user.token);
      user.password = undefined;
      console.log("user.password is ", user.password);

      // crate cookie and send res
      const option = {
        // maxAge: '1h',
        expiresIn: "2h",
        httpOnly: true,
        // secure: false, // Set to true if you're using HTTPS
        // sameSite: 'strict',
      };

      res.cookie("token", token, option).json({
        success: true,
        message: "user loggedin succefully",
        user,
        token,
      });
    } else {
      return res.json({
        success: false,
        message: "password is incorrect",
      });
    }
  } catch (error) {
    console.log("error is ", error.message);
    return res.json({
      success: false,
      message: "could not login ",
      error: error.message,
    });
  }
};

// 3. change passwordcontroller:

export const changePassword = async (req, res) => {
  try {
    // fetch the data from req.body
    // get oldPassword newPassword confirme the password
    const { email, oldPassword, newPassword } = req.body;

    // validate
    if (!oldPassword || !newPassword) {
      return res.json({
        success: false,
        message: "all feild must be filled",
      });
    }

    // check if password is right or not :
    const user = await User.findOne({ email });
    console.log("user is ", user);

    //  campare the password saved in db to sent by user pass

    const compare = await bcrypt.compare(oldPassword, user.password);
    // console.log("bcrypt compare response is :", compare);
    if (!compare) {
      return res.json({
        success: false,
        message: "old password is incorrect please enter the right password",
      });
    }
    // update the password in db:
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(
      { _id: user._id },
      { $set: { password: hashedPassword } },
      { new: true }
    );

    console.log("udpated user is ", updatedUser);

    // send mail password in updated
    let htmlcontent = changePasswordTemplet();
    sendMail(updatedUser.email, "for password quries", htmlcontent);
    // return res
    return res.json({
      success: true,
      message: "password has been update",
    });
  } catch (error) {
    console.log("error in change password ", error);
    return res.json({
      success: false,
      message: "could not change the password",
      error,
    });
  }
};
