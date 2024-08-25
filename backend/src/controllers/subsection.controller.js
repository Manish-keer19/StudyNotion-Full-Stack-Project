import { Subsection } from "../models/subsection.model.js";
import { Section } from "../models/section.model.js";
import { uploadInCloudinary } from "../utility/cloudinary.utils.js";
// create a subsection:

export const createSubsection = async (req, res) => {
  // fetch the data:
  // fetch the file/video
  // validation
  //  upload vidoe to cloudinay
  // create a subsection in db
  // add subsection id in section shcema
  // return response:

  try {
    // fetch the data:
    console.log("files are ", req.files);
    const { sectionId, title, description } = req.body;
    console.log("sectionId", sectionId);
    console.log("title", title);
    console.log("description", description);
    // fetch the file/video
    // const video = req.files.video;
    const video = req.files ? req.files.video : null;
    console.log("video", video);

    // validation
    if (!sectionId || !title || !description || !video) {
      return res.status(400).json({
        succes: false,
        message: "all fields are requerd",
      });
    }

    const sectionData = await Section.findById(sectionId);
    console.log("sectiondata is ", sectionData);
    if (!sectionData) {
      return res.status(400).json({
        succes: false,
        message: "Section not found",
      });
    }

    //  upload vidoe to cloudinay
    const uploadVideo = await uploadInCloudinary(
      video.tempFilePath,
      "lectures"
    );
    console.log("uploadVideo", uploadVideo);
    // create a subsection in db
    const updatedSubsection = await Subsection.create({
      title: title,
      description: description,
      videoUrl: uploadVideo.secure_url,
    });

    console.log("updatedSubsection", updatedSubsection);
    // add subsection id in section shcema
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      {
        $push: {
          Subsection: updatedSubsection._id,
        },
      },
      { new: true }
    )
      .populate("Subsection")
      .exec();
    console.log("updated section", updatedSection);

    // return response:
    return res.json({
      success: true,
      message: "subsection has been created successfully",
      updatedSection,
    });
  } catch (error) {
    console.log("error is ", error);
    return res.json({
      success: false,
      message: "subsection could not create",
      error: error.message,
    });
  }
};

export const updateSubsection = async (req, res) => {
  //  fethc the data from req.body:
  // ceck subsection present or not using subSectionId
  // remove the old video from cloudinary
  // upload video in cloudinary
  // update the subsection in db

  try {
    //  fetch the data from req.body:
    console.log("files ", req.files);
    const { subSectionId, title, description } = req.body;
    console.log("subSectionId", subSectionId);
    console.log("title", title);
    console.log("description", description);
    // fecth the vidoe from req.files
    const video = req.files ? req.files.video : null;
    console.log("video", video);
    // validate
    if (!subSectionId || !title || !video || !description) {
      return res.json({
        success: false,
        message: "all field required",
      });
    }
    // ceck subsection present in db or not using subSectionId
    const subsection = await Subsection.findById(subSectionId);

    if (!subsection) {
      return res.json({
        success: false,
        message: "subsection is not present",
      });
    }
    console.log("subsection is ", subsection);

    const videourl = subsection.videoUrl;
    console.log("video url", videourl);
    // remove the old video from cloudinary

    // upload video in cloudinary
    const uploadedVideo = await uploadInCloudinary(
      video.tempFilePath,
      "lectures"
    );
    console.log("uploadedVideo", uploadedVideo);
    // update the subsection in db
    const newSubsection = await Subsection.findByIdAndUpdate(
      subSectionId,
      {
        $set: {
          title: title,
          description: description,
          videoUrl: uploadedVideo.secure_url,
        },
      },
      { new: true }
    );
    //  return success response
    return res.json({
      success: true,
      message: "subsection updated successfully",
      newSubsection,
    });
  } catch (error) {
    console.log("errois while updating subsection", error);
    return res.json({
      success: false,
      message: "error while updating subsection",
      error: error.message,
    });
  }
};

export const deleteSubsection = async (req, res) => {
  //  fetch the data from req.body
  // validate the data
  // remove the subsectionId from section schema
  // remove the subsection form db
  // return success response

  try {
    //  fetch the data from req.body
    const { subSectionId } = req.body;
    console.log("subSectionId", subSectionId);
    // validate the data
    if (!subSectionId) {
      return res.json({
        success: false,
        message: "all field is required",
      });
    }
    // remove the subsectionId from section schema

    const updatedSection = await Section.findOneAndUpdate(
      { Subsection: subSectionId },
      {
        $pull: {
          Subsection: subSectionId,
        },
      }
    );
    console.log("udpatedsection", updatedSection);

    // remove the subsection form db
    const removedSubsection = await Subsection.findOneAndDelete(subSectionId);

    console.log("romovedsubsection", removedSubsection);

    // return success response
    return res.json({
      success: true,
      message: "subsection delete successfully",
    });
  } catch (error) {
    console.log("errois while deleting subsection", error);
    return res.json({
      success: false,
      message: "error while deleting subsection",
      error: error.message,
    });
  }
};
