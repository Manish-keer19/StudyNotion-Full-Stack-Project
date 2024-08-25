import { v2 as cloudinary } from "cloudinary";

export const uploadInCloudinary = async (data, folder, isUpload = true, publicId = null) => {
  // Configuration
  cloudinary.config({
    cloud_name: "manish19",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  if (isUpload) {
    try {
      const options = {
        folder: folder,
        quality: "auto",
        resource_type: "auto",
      };
      return await cloudinary.uploader.upload(data, options);
    } catch (error) {
      console.log("Some error occurred during the file upload to Cloudinary");
      console.log("Error in Cloudinary is:", error.message);
    }
  } else {
    try {
      if (!publicId) {
        throw new Error("Public ID is required for deletion");
      }
      return await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.log("Some error occurred during the file deletion from Cloudinary");
      console.log("Error in Cloudinary is:", error.message);
    }
  }
};
