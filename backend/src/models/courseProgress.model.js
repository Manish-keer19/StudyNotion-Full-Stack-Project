import mongoose, { Schema } from "mongoose";

const CourseProgressschema = new Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    copmletedVideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subsection"
        }
    ]
  
});


export const courseProgress = mongoose.model("courseProgress",CourseProgressschema);
