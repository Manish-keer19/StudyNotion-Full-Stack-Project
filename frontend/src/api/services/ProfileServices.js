import toast from "react-hot-toast";
import { axiosInstance } from "../axiosInstance";

class ProfileService {
  async createProfile(data, token) {
    try {
      toast.loading("loading")
      const res = await axiosInstance.post("/profile/createProfile",data, {
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
}

export const profileservice = new ProfileService();
