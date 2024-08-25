// import { axiosInstance } from "../axiosInstance";
// import toast from "react-hot-toast";

// class CourseService {
//   async createCourse(formData, token) {
//     const toastId = toast.loading("Course Is Creating...");
//     try {
//       const res = await axiosInstance.post("course/createCourse", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//         timeout:30000
//       });
//       toast.dismiss(toastId);
//       console.log("res is ", res.data);
//       if (res.data.success) {
//         toast.success("course created succefully");
//         return res.data;
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.dismiss(toastId);
//       toast.error(error.message);
//       console.log("Error while creating course:", error);

//       // throw error; // Re-throwing the error if you need to handle it elsewhere
//     }
//   }
// }

// export const courseService = new CourseService();

import { axiosInstance } from "../axiosInstance";
import toast from "react-hot-toast";

class CourseService {
  async createCourse(formData, token) {
    const toastId = toast.loading("Course Is Creating...");
    try {
      const res = await axiosInstance.post("course/createCourse", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000, // Increased timeout
      });
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("Course created successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
        return res;
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while creating course:", error);
    }
  }

  async getCourseFullDetails(CourseId) {
    const toastId = toast.loading("Course data feting......");
    try {
      const res = await axiosInstance.get(
        `course/getCourseFullDetails/${CourseId}`,
        {
          timeout: 60000, // Increased timeout
        }
      );
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("courese data feched succesfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while fetching the course:", error);
    }
  }
}

export const courseService = new CourseService();
