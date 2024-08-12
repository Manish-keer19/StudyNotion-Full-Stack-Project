import { Catagory } from "../models/catagory.model.js";

export const CreateCatagory = async (req, res) => {
  // fetch the data from req.body;
  // vallidate the data
  // create entry in db
  // return response

  try {
    // fetch the data from req.body;
    const { name, description } = req.body;

    // vallidate the data
    if (!name || !description) {
      return res.json({
        succes: false,
        message: "please fill all the filed",
      });
    }
    // create entry in db
    const updatedCatagory = await Catagory.create({
      name: name,
      description: description,
    });
    console.log("updatedCatagory", updatedCatagory);
    // return response

    res.json({
      succes: true,
      message: "Catagory created succefully",
      updatedCatagory,
    });
  } catch (error) {
    console.log("erro in createCatagory ",error);
    return res.json({
      succes: false,
      message: "some error occured while create Catagory",
      error,
    });
  }
};

export const gellAllCatagory = async (req, res) => {
  try {
    const allCatagory = await Catagory.find(
      {},
      { name: true, description: true }
    );

    res.json({
      succes: true,
      message: "all catagory retrive succefullly",
      allCatagory,
    });
  } catch (error) {
    return res.json({
      succes: false,
      message: "could not get Catagory",
      error,
    });
  }
};

// catogory page details controller

export const catogoryPageDetails = async (req, res) => {
  // geth catagoryId
  // fetch all the courses for specified catagory id
  // validate the course
  //  get courses for diff catagory
  // top selling courses
  // return response

  try {
    // geth catagoryId
    const { catagoryId } = req.body;
    // fetch all the courses for specified catagory id
    const selectedCatagory = await Catagory.find(catagoryId)
      .populate("Course")
      .exec();
    // validate the course
    if (!selectedCatagory) {
      return res.json({
        succes: false,
        message: "could not found the catagory ",
      });
    }
    //  get courses for diff catagory
    const diffrenatCatagories = await Catagory.find({
      _id: { $ne: catagoryId },
    })
      .populate("Courese")
      .exec();
    // top selling courses
    // return response
    return res.json({
      succes: true,
      message: "all catagory found",
      data: {
        selectedCatagory,
        diffrenatCatagories,
      },
    });
  } catch (error) {
    return res.json({
      succes: false,
      message: "find catagory details",
      error,
    });
  }
};
