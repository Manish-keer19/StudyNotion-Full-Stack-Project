import { Section } from "../models/section.model.js";
import { Course } from "../models/courses.model.js";
import { User } from "../models/user.model.js";
import { Subsection } from "../models/subsection.model.js";

// create section controller
export const creatSection = async (req, res) => {
  // fetch the data from req.body
  // validate tha data
  // crete a enry in db in section document:
  // add the section in courese
  // return res

  try {
    // fetch the data from req.body
    const { sectionName, CourseId } = req.body;
    console.log("sectionName", sectionName);
    console.log("CourseId is ", CourseId);
    // validate tha data
    if (!sectionName || !CourseId) {
      return res.json({
        success: false,
        message: "all filled must be required",
      });
    }
    // crete a enry in db in section document:
    const newSection = await Section.create({
      sectionName: sectionName,
    });
    // add the section in courese  note:- add kardo section in course ke coursecontent me

    const updatedCourse = await Course.findByIdAndUpdate(
      CourseId,
      {
        $push: {
          coursecontent: newSection._id,
        },
      },
      { new: true }
    );

    // Retrieve the course and populate sections and subsections
    // const populatedCourse = await Course.findById(CourseId);
    const populatedCourse = await Course.findById(CourseId).populate({
      path: "coursecontent",
      populate: {
        path: "Subsection",
      },
    });
    console.log("populated courese", populatedCourse);
    // return res
    return res.json({
      success: true,
      message: "section has beed created successfully",
      populatedCourse,
    });
  } catch (error) {
    console.log("error in creat section", error);
    return res.json({
      success: false,
      message: "could not create section some error",
      error: error.message,
    });
  }
};

// updateSection controller:

export const updateSection = async (req, res) => {
  // fetch the data
  // validate the data
  // update dat data from db in sectino
  // return response
  try {
    // fetch the data
    const { sectionName, sectionId, CourseId } = req.body;

    console.log("sectionName", sectionName);
    console.log("sectionId", sectionId);
    console.log("CourseId", CourseId);
    // validate the data
    if (!sectionName || !sectionId || !CourseId) {
      return res.json({
        success: false,
        message: "both fieled are reuquired",
      });
    }
    // update the data from db in section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName: sectionName },
      { new: true }
    );
    const populatedCourse = await Course.findById(CourseId).populate({
      path: "coursecontent",
      populate: {
        path: "Subsection",
      },
    });
    // return response
    return res.json({
      success: true,
      message: "section updated succefully",
      populatedCourse,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not update the section",
      error: error.message,
    });
  }
};

// delete section controller;

export const deleteSection = async (req, res) => {
  // fetch the sectionId - we are assuming that we are sending sectionId in params;
  // delete the section based on it's id in db
  // return res

  try {
    // fetch the sectionId - we are assuming that we are sending sectionId in params;
    const { sectionId, CourseId } = req.body;
    const section = await Section.findById(sectionId);

    if (!section) {
      return {
        success: false,
        message: "Section not found",
      };
    }

    // Get the list of Subsection IDs
    const subsectionIds = section.Subsection;

    // Delete all the subsections in this section
    await Subsection.deleteMany({ _id: { $in: subsectionIds } });
    // delete the section based on it's id in db
    await Section.findByIdAndDelete(sectionId);

    // TODO:- [it will check in Testing]:- Do we need to delete the entry from couresse shcema after delete section
    // YES WE NEED TO DELETE THE SECTION IN COURSE SCHEMA
    const updatedUser = await Course.updateOne(
      { _id: CourseId },
      {
        $pull: {
          coursecontent: sectionId,
        },
      }
    );
    // return res
    const subsection = await Subsection.del;

    const populatedCourse = await Course.findById(CourseId).populate({
      path: "coursecontent",
      populate: {
        path: "Subsection",
      },
    });
    return res.status(200).json({
      success: true,
      message: "section has deleted succefullly",
      populatedCourse,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not delete the section",
      error: error.message,
    });
  }
};

// get all section controoler:

export const getAllSection = async (req, res) => {
  try {
    // fetch all section from db:
    const allSection = await Section.find(
      {},
      { sectionName: true, subsection: true },
      { new: true }
    );

    // return response

    return res.status(200).json({
      success: true,
      message: "all section has been fetched successfully",
      allSection,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "could not fetch the section some error",
      error: error.message,
    });
  }
};
