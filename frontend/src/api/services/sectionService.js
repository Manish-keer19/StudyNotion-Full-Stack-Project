import toast from "react-hot-toast";
import { axiosInstance } from "../axiosInstance";

class SectionService {
  async CreateSection(data, token) {
    const toastId = toast.loading("setion is creating😍...");
    try {
      console.log("data in sectionSerives", data);
      const res = await axiosInstance.post("section/creatSection", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res.data is ", res.data);
      toast.dismiss(toastId);
      return res.data;
    } catch (error) {
      toast.dismiss(toastId);
      console.log("error while creating sction", error);
    }
  }

  async updateSection(data) {
    const toastId = toast.loading("Updating the section...😎😉");
    try {
      const res = await axiosInstance.post("section/updateSection", data);
      toast.dismiss(toastId);
      return res.data;
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("update ni hora bhai", error.message);
      console.log("error while updating sction", error);
    }
  }
  async deleteSection(data) {
    const toastId = toast.loading("deleting  the section...😎😉");
    try {
      const res = await axiosInstance.post("section/deleteSection", data);
      toast.dismiss(toastId);
      return res.data;
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("delete ni hora bhai", error.message);
      console.log("error while deleting sction", error);
    }
  }
}

export const sectionService = new SectionService();
