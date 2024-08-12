export const cloudinaryConnnect = async () => {
  // Configuration
  cloudinary.config({
    cloud_name: "manish19",
    api_key: process.env.CLOUDINARY_API_SECRET,
    api_secret: process.env.CLOUDINARY_API_KEY,
  });
};
