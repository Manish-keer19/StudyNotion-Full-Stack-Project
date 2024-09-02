import { User } from "../models/user.model.js";
import { Catagory } from "../models/catagory.model.js";
import { uploadInCloudinary } from "../utility/cloudinary.utils.js";
import { Course } from "../models/courses.model.js";

// Create course:

// export const createCourse = async (req, res) => {
//   try {
//     // fetch the from req.body;
//     console.log("files is ",req.files);
//     const { courseName, courseDetail, price, catagory, whatYouWillLearn } =
//       req.body;

//     console.log("courseName:", courseName);
//     console.log("courseDetail:", courseDetail);
//     console.log("price:", price);
//     console.log("catagory:", catagory);
//     console.log("whatYouWillLearn:", whatYouWillLearn);
//     // fetch the courseThumbnail from file:
//     const courseThumbnail = req.files.courseThumbnail;
//     console.log("courseThumbnail is ", courseThumbnail);

//     // validate

//     if (
//       (!courseName,
//       !courseDetail || !price || !courseThumbnail || !whatYouWillLearn)
//     ) {
//       return res.json({
//         success: false,
//         message: "all feiled are required",
//       });
//     }

//     //  check given tag exist or not :
//     const catagorydetail = await Catagory.findById(catagory);
//     console.log("catagory detail ", catagorydetail);

//     if (!catagorydetail) {
//       return res.json({
//         success: false,
//         message: "catagory is not available",
//       });
//     }

//     //   check for instructore:
//     const userid = req.user.id;
//     console.log("userid ", userid);

//     // upload thumnail on cloudinary:

//     const uploadedcourseThumbnail = await uploadInCloudinary(
//       courseThumbnail.tempFilePath,
//       "courseThumbnail"
//     );

//     //  create new entry in database:
//     const newCourse = await Course.create({
//       courseName: courseName,
//       courseDescription: courseDetail,
//       courseThumbnail: uploadedcourseThumbnail.secure_url,
//       instructore: userid,
//       price: price,
//       whatYouWillLearn: whatYouWillLearn,
//       catagory: catagory,
//     });

//     //   add new course to the user schema of instructore:

//     await User.findOneAndUpdate(
//       { _id: userid },
//       {
//         $push: {
//           courses: newCourse._id,
//         },
//       }
//     );
//     //    update the catagory schema:
//     await Catagory.findOneAndUpdate(
//       { _id: catagory },
//       {
//         $push: {
//           coureses: newCourse._id,
//         },
//       },
//       { new: true }
//     );

//     res.json({
//       success: true,
//       message: "course has created succefully",
//       newCourse,
//     });
//   } catch (error) {
//     console.log("error is", error.message);
//     res.json({
//       success: false,
//       message: "could not create the course some error",
//       error: error.message,
//     });
//   }
// };

export const createCourse = async (req, res) => {
  try {
    // Fetch data from req.body and req.files
    console.log("files are ", req.files);
    const { courseName, courseDetail, price, catagory, whatYouWillLearn } =
      req.body;

    console.log("courseName:", courseName);
    console.log("courseDetail:", courseDetail);
    console.log("price:", price);
    console.log("catagory:", catagory);
    console.log("whatYouWillLearn:", whatYouWillLearn);

    // Fetch the courseThumbnail from files
    const courseThumbnail = req.files?.courseThumbnail;
    console.log("courseThumbnail is ", courseThumbnail);

    // Validate
    if (
      !courseName ||
      !courseDetail ||
      !price ||
      !courseThumbnail ||
      !whatYouWillLearn
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the given category exists
    const catagorydetail = await Catagory.findById(catagory);
    console.log("catagory detail ", catagorydetail);

    if (!catagorydetail) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Upload thumbnail to Cloudinary (assuming you have a function to do this)
    const uploadedcourseThumbnail = await uploadInCloudinary(
      courseThumbnail.tempFilePath,
      "courseThumbnail"
    );

    // Create new course in the database
    const newCourse = await Course.create({
      courseName,
      courseDescription: courseDetail,
      thumbnail: uploadedcourseThumbnail.secure_url,
      instructore: req.user.id,
      price: price,
      whatYouWillLearn: whatYouWillLearn,
      catagory: catagory,
    });

    // Add new course to the user schema of instructor
    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    // Update the category schema
    await Catagory.findByIdAndUpdate(
      catagory,
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    res.json({
      success: true,
      message: "Course created successfully",
      newCourse,
    });
  } catch (error) {
    console.error("error is", error.message);
    res.status(500).json({
      success: false,
      message: "Could not create the course due to an error",
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
      success: true,
      message: "all courses fetched succefullly",
      allcourses,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "could not get the course some error",
      error: error.message,
    });
  }
};

// get course Full detail

export const getCourseFullDetails = async (req, res) => {
  try {
    //  fetch the data from req.body;
    const { CourseId } = req.params; // Extract CourseId from URL parameters

    if (!CourseId) {
      return res
        .status(400)
        .json({ success: false, message: "Course ID is required" });
    }
    console.log("CourseId", CourseId);

    //  validate the course id

    const coureseDetail = await Course.findById(CourseId);

    if (!coureseDetail) {
      return res.json({
        success: false,
        message: "course is invalid",
      });
    }

    // find the fulldetail of course:

    const courseFullDetails = await Course.findOne({ _id: CourseId })
      // .populate({
      //   path: "instructore",
      //   populate: {
      //     path: "additionalDetail",
      //   },
      // })
      // .populate("ratingAndReveiws")
      // .populate("catagory")
      .populate({
        path: "coursecontent",
        populate: {
          path: "Subsection",
        },
      })
      .exec();

    return res.json({
      success: true,
      message: "course full detail found successfully",
      data: courseFullDetails,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not find the course",
      error: error.message,
    });
  }
};
