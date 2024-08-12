import { Section } from "../models/section.model.js";
import { Course } from "../models/courses.model.js";

// create section controller
export const creatSection = async (req, res) => {
  // fetch the data from req.body
  // validate tha data
  // crete a enry in db in section document:
  // add the section in courese
  // return res

  try {
    // fetch the data from req.body
    const { SectionName, courseId } = req.body;
    // validate tha data
    if (!SectionName || !courseId) {
      return res.json({
        succes: false,
        message: "all filled must be required",
      });
    }
    // crete a enry in db in section document:
    const newSection = await Section.create({
      sectionName: SectionName,
    });
    // add the section in courese  note:- add kardo section in course ke coursecontent me

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          coursecontent: newSection._id,
        },
      },
      { new: true }
    );

    // Retrieve the course and populate sections and subsections
    const populatedCourse = await Course.findById(courseId);
    // const populatedCourse = await Course.findById(courseId).populate({
    //   path: "coursecontent",
    //   populate: {
    //     path: "subsection",
    //   },
    // });

    // return res
    res.json({
      succes: true,
      message: "section has beed created succesfully",
      populatedCourse,
    });
  } catch (error) {
    console.log("error in creat section", error);
    return res.json({
      succes: false,
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
    const { sectionName, sectionId } = req.body;
    // validate the data
    if (!sectionName || !sectionId) {
      return res.json({
        succes: false,
        message: "both fieled are reuquired",
      });
    }
    // update the data from db in section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName: sectionName },
      { new: true }
    );
    // return response
    return res.json({
      succes: true,
      message: "section updated succefully",
    });
  } catch (error) {
    return res.json({
      succes: false,
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
    const { sectionId } = req.params;
    // delete the section based on it's id in db
    await Section.findByIdAndDelete(sectionId);
    // TODO:- [it will check in Testing]:- Do we need to delete the entry from couresse shcema after delete section
    // return res
    return res.status(200).json({
      succes: true,
      message: "section has deleted succefullly",
    });
  } catch (error) {
    return res.json({
      succes: false,
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
      succes: true,
      message: "all section has been fetched succesfully",
      allSection,
    });
  } catch (error) {
    return res.json({
      succes: false,
      message: "could not fetch the section some error",
      error: error.message,
    });
  }
};
