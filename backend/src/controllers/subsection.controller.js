import { Subsection } from "../models/subsection.model";
import { Section } from "../models/section.model";
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
    const { sectionId, title, timeDuration, description } = req.body;
    // fetch the file/video
    const video = req.files.video;
    // validation
    if (!sectionId || !title || !description || video) {
      return res.status(400).json({
        succes: false,
        message: "all fields are requerd",
      });
    }
    //  upload vidoe to cloudinay
    // create a subsection in db
    // add subsection id in section shcema
    // return response:
  } catch (error) {}
};
