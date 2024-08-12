import mongoose, { Schema } from "mongoose";

const SubsectionSchema = new Schema({
   title:{
    type:String,
   },
   timeDuration:{
    type:String,

   },
   description:{
    type:String,
   },
   videoUrl:{
    type:String
   }
  
});


export const Subsection = mongoose.model("Subsection",SubsectionSchema);
