import { axiosInstance } from "../axiosInstance";
import toast from "react-hot-toast";

class SubsectionService {
  async createSubsection(data) {
    // console.log("data in service sectins",data);
    const toastId = toast.loading("subSection Is Creating...");
    try {
      const res = await axiosInstance.post(
        "subsection/createSubsection",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 600000,
        }
      );
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("subsection created successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while creating subsection:", error);
    }
  }

  async updateSubsection(data) {
    const toastId = toast.loading("subSection Is Updating❤️🤞...");
    try {
      const res = await axiosInstance.post(
        "subsection/updateSubsection",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 600000,
        }
      );
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("subsection updated successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while upating subsection:", error);
    }
  }

  async deleteSubsection(data) {
    const toastId = toast.loading("subSection Is deleting...");
    try {
      const res = await axiosInstance.post(
        "subsection/deleteSubsection",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 600000,
        }
      );
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("subsection deleted successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while deleting subsection:", error);
    }
  }
}

export const subsectionService = new SubsectionService();
