import { RatingAndReview } from "../models/ratingAndReview.model.js";
import { Course } from "../models/courses.model";
import { User } from "../models/user.model";

export const createRatingAndReview = async (req, res) => {
  // fatch the user id
  // feth the data of rating and review from req.body
  // check if user if enrolled or not
  // check if user gave already review
  // create rativeAndReview
  //  update the  course jisme user ne rating and review diya he

  try {
    // fatch the user id
    const { userId } = req.user.id;
    // feth the data of rating and review from req.body
    const { rating, reivew, CourseId } = req.id;
    // check if user is enrolled or not
    const isUserEnrolled = await Course.findOne({
      _id: CourseId,
      studentsEnrolled: userId,
    });

    if (!isUserEnrolled) {
      return res.json({
        success: false,
        message: "you have not enrolled the course",
      });
    }
    // check if user gave already review
    const isgivereview = await RatingAndReview.findOne({ user: userId });

    if (!isgivereview) {
      return res.json({
        success: false,
        message: "you have already give review",
      });
    }

    // create rativeAndReview

    const newRatingAndReview = new RatingAndReview({
      rating: rating,
      review: reivew,
      user: userId,
    });

    const saveRatingReview = await newRatingAndReview.save();
    //  update the  course jisme user ne rating and review diya he
    const updatedcourse = await Course.findOneAndUpdate(
      { _id: CourseId },
      {
        $push: {
          ratingAndReveiws: saveRatingReview._id,
        },
      },
      { new: true }
    )
      .populate("RatingAndReview")
      .exec();

    return res.json({
      success: true,
      message: "rating and review created succefully",
      saveRatingReview,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not create rating and reivew",
      error: error.message,
    });
  }
};

// get avarage ratingAndReview:
export const calculateAverageRating = async (courseId) => {
  try {
    const courseId = req.body.courseId;

    const result = await RatingAndReview.aggregate([
      { $match: { course: mongoose.Types.ObjectId(courseId) } }, // Match reviews for the specific course
      {
        $group: {
          _id: null, // Group by null to get a single result
          averageRating: { $avg: "$rating" }, // Calculate the average rating
        },
      },
    ]);

    if (result.length > 0) {
      return res.json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    // if no rating and review exist:
    return res.json({
      success: false,
      message: "average rating is 0 no rating given till now",
      averageRating: 0,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "some error occured in avergae rating and reivew",
      error: error.message,
    });
  }
};

// get all reiveiw

export const getAllratingAndreivew = async (req, res) => {
  try {
    const allReview = await RatingAndReview.find({})
      .sort({
        rating: "desc",
      })
      .populate({
        path: "User",
        select: "firstName lastName email",
      })
      .populate({
        path: "Courese",
        select: "courseName",
      })
      .exec();

    // return response:
    return res.status(200).json({
      success: true,
      message: "all review sent succefullly",
      data: allReview,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not get all rating and reivew",
      error: error.message,
    });
  }
};
