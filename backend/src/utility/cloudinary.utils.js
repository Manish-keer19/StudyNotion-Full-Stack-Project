import { v2 as cloudinary } from "cloudinary";

export const uploadInCloudinary = async (data, folder) => {
  try {
    // Configuration
    cloudinary.config({
      cloud_name: "manish19",
      api_key: process.env.CLOUDINARY_API_KEY,
      
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const option = {
      folder: folder,
      quality: "auto",
      resource_type: "auto",
    };

    return await cloudinary.uploader.upload(data, option);
  } catch (error) {
    console.log("some error has been occured during upload file in cloudinary");
    console.log("error in cloudinary is ",error.message);
  }
};
