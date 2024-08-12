import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config();


export const connectDb = ()=>{
    
    mongoose.connect(process.env.DATABASE_URL)
  .then(()=>{
    console.log("Database connected succesfully");
  })
  .catch((error)=>{
    console.log("could not connect to db")
    console.log("Error is :",error.message);
  })
}