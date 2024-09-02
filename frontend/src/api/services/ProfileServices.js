import toast from "react-hot-toast";
import { axiosInstance } from "../axiosInstance";

class ProfileService {
  async createProfile(data, token) {
    try {
      toast.loading("loading");
      const res = await axiosInstance.post("/profile/createProfile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res ka data is", res.data);
      if (res.data.success) {
        toast.dismiss();
        toast.success("profile created succesfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("error in create profile", res);
    }
  }

  async changeProfileImg(data, token) {
    const toastId = toast.loading("Profile in changing...❤️");
    try {
      const res = await axiosInstance.post("/profile/setProfileImage", data, {
        headers: {
          Authorization: `Bearer ${token}`,

          "Content-Type": "multipart/form-data",
        },
      });
      toast.dismiss(toastId);
      console.log("res ka data is", res.data);
      if (res.data.success) {
        toast.success("profileImg changed  succesfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.log("error in profileImg changed ", error);
    }
  }
}

export const profileservice = new ProfileService();
