import mongoose, { Schema } from "mongoose";

const Profileschema = new Schema({
     
    gender:{
        type:String,
        
    },
    dateOfBirth:{
        type:String,
    },
    contactNumber:{
        type:String,
        trim:true,
    },
    about:{
        type:String,
    }
   
});


export const Profile = mongoose.model("Profile",Profileschema);
