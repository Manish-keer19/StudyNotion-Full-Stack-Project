import { User } from "../models/user.model.js";
import { Catagory } from "../models/catagory.model.js";
import { uploadInCloudinary } from "../utility/cloudinary.utils.js";
import { Course } from "../models/courses.model.js";

// Create course:

export const createCourse = async (req, res) => {
  try {
    // fetch the from req.body;
    const { coureseName, courseDetail, price, catagory, whatYouWillLearn } =
      req.body;

    console.log("coureseName:", coureseName);
    console.log("courseDetail:", courseDetail);
    console.log("price:", price);
    console.log("catagory:", catagory);
    console.log("whatYouWillLearn:", whatYouWillLearn);
    // fetch the thumbnail from file:
    const thumbnail = req.files.thumbnail;
    console.log("thumbnail is ", thumbnail);

    // validate

    if (
      (!coureseName, !courseDetail || !price || !thumbnail || !whatYouWillLearn)
    ) {
      return res.json({
        succes: false,
        message: "all feiled are required",
      });
    }

    //  check given tag exist or not :
    const catagorydetail = await Catagory.findById(catagory);
    console.log("catagory detail ", catagorydetail);

    if (!catagorydetail) {
      return res.json({
        succes: false,
        message: "catagory is not available",
      });
    }

    //   check for instructore:
    const userid = req.user.id;
    console.log("userid ", userid);

    // upload thumnail on cloudinary:

    const uploadedThumbnail = await uploadInCloudinary(
      thumbnail.tempFilePath,
      "thumbnail"
    );

    //  create new entry in database:
    const newCourse = await Course.create({
      courseName: coureseName,
      courseDescription: courseDetail,
      thumbnail: uploadedThumbnail.secure_url,
      instructore: userid,
      price: price,
      whatYouWillLearn: whatYouWillLearn,
      catagory:catagory,
    });

    //   add new course to the user schema of instructore:

    await User.findOneAndUpdate(
      { _id: userid },
      {
        $push: {
          courses: newCourse._id,
        },
      }
    );
    //    update the tags schema:
    await Catagory.findOneAndUpdate(
      { _id: catagory },
      {
        $push: {
          coureses: newCourse._id,
        },
      },
      { new: true }
    );

    res.json({
      succes: true,
      message: "course has created succefully",
      newCourse,
    });
  } catch (error) {
    console.log("error is",error.message);
    res.json({
      succes: false,
      message: "could not create the course some error",
      error: error.message,
    });
  }
};

// gettAllcourse Handler:

export const gettAllcourse = async (req, res) => {
  try {
    const allcourses = await Course.find({}, { new: true })
      .populate("instructore")
      .exec();
    res.json({
      succes: true,
      message: "all courses fetched succefullly",
      allcourses,
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "could not get the course some error",
      error: error.message,
    });
  }
};

// get course Full detail

export const getCourseFullDetails = async (req, res) => {
  try {
    //  fetch the data from req.body;
    const { courseId } = req.body;

    //  validate the course id

    const coureseDetail = await Course.findById(courseId);

    if (!coureseDetail) {
      return res.json({
        succes: false,
        message: "course is invalid",
      });
    }

    // find the fulldetail of course:

    const courseFullDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructore",
        populate: {
          path: "additionalDetail",
        },
      })
      .populate("ratingAndReveiws")
      .populate("catagory")
      .populate({
        path: "coursecontent",
        populate: {
          path: "subsection",
        },
      })
      .exec();

    return res.json({
      succes: true,
      message: "course full detail found succesfully",
      data: courseFullDetails,
    });
  } catch (error) {
    return res.json({
      succes: false,
      message: "could not find the course",
      error: error.message,
    });
  }
};
