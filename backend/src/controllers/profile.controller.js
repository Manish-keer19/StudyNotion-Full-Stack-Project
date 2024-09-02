import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";
import { uploadInCloudinary } from "../utility/cloudinary.utils.js";

// crete profile controller:

export const createProfile = async (req, res) => {
  // fetch the data from req.body
  // validate the data
  // crete entry in db
  // if entry is created add profile in user's additionalDetails
  // return response

  try {
    // fetch the data from req.body
    const {
      dateOfBirth = "",
      about = "",
      phoneNo,
      gender,
      displayName,
      profession,
    } = req.body;
    // validate the data
    console.log("dateOfBirth", dateOfBirth);
    console.log("about", about);
    console.log("phoneNo", phoneNo);
    console.log("gender", gender);
    console.log("displayName", displayName);
    console.log("Profession", profession);
    if (
      !phoneNo ||
      !gender ||
      !about ||
      !displayName ||
      !profession ||
      !dateOfBirth
    ) {
      return res.json({
        succes: false,
        message: "all field are required",
      });
    }
    // crete entry in db
    const newProfile = new Profile({
      dateOfBirth: dateOfBirth,
      contactNumber: phoneNo,
      about: about,
      gender: gender,
      displayName: displayName,
      Profession: profession,
    });

    const createdProfile = await newProfile.save();
    console.log("createdProfile", createdProfile);
    // fetch the use id from req.user.id where is filled during login:
    const userId = req.user.id;
    // if entry is created add profile in user's additionalDetails
    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "user note found",
      });
    }

    const userDetail = await User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          additionalDetail: createdProfile._id,
        },
      },
      { new: true }
    )
      .populate("additionalDetail")
      .exec();

    console.log("userDetail is ", userDetail);
    // return response

    return res.status(200).json({
      success: true,
      message: "profile is created succefully",
      userDetail,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: "some error has occured while create profile",
      error: error.message,
    });
  }
};

// update profile controller

export const updateProfile = async (req, res) => {
  // fetch the data from req.body
  // validate that
  // check the profile is present or note
  // update the profile in db
  // return responese

  try {
    // fetch the data from req.body
    const { dateOfBirth = "", about = "", phoneNo, gender } = req.body;
    // validate the data
    if (!phoneNo || !gender) {
      return res.status(400).json({
        success: false,
        message: "all fieled are required",
      });
    }

    // update the profile in db
    const userID = req.user.id;
    const user = await User.findById(userID);
    const profileId = user.additionalDetail._id;

    const updatedProfile = await Profile.findOneAndUpdate(profileId, {
      $set: {
        dateOfBirth: dateOfBirth,
        about: about,
        contactNumber: phoneNo,
        gender: gender,
      },
    });
    // return responese
    return res.status(200).json({
      success: true,
      message: "profile has been updated succesfully",
    });
  } catch (error) {
    console.log("error in update profile", error);
    return res.status(200).json({
      success: false,
      message: "could not update the profile",
      error: error.message,
    });
  }
};

// const delete user:

export const deleteUser = async (req, res) => {
  // fetch the user id
  // validate
  // delete the userProfile
  // delter the user account

  try {
    // fetch the user id
    const { userId } = req.user.id;
    // validate
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "user is not found",
      });
    }
    // delete the userProfile
    const profileId = user.additionalDetail._id;
    await Profile.findOneAndDelete(profileId);
    // delter the user account
    await User.findByIdAndDelete(userId);
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "could not delete the user",
      error: error.message,
    });
  }
};

// update profile picture:

// export const update profile

export const changeProfilePicture = async (req, res) => {
  try {
    // fetch the file from req.filese
    const file = req.files ? req.files.file : null;
    const userId = req.user.id;
    console.log("file is ", file);
    console.log("user id is", userId);

    // validate the file
    if (!file) {
      return res.json({
        success: false,
        message: "fille is not present",
      });
    }
    const responeseCloudinary = await uploadInCloudinary(
      file.tempFilePath,
      "manish"
    );

    const updateduser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          image: responeseCloudinary.secure_url,
        },
      },
      { new: true }
    );

    console.log("updated user is ", updateduser);
    console.log("updated user is ", updateduser);
    return res.json({
      success: true,
      message: "profile picture updated succesfully",
      updateduser,
    });
  } catch (error) {
    console.log("erorr is ", error);
    return res.json({
      success: false,
      message: "could not update the profile pictrue",
      error: error.message,
    });
  }
};
