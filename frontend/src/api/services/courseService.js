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

  async getCourseFullDetails(courseId) {
    console.log("courseId in courseservice", courseId);
    const toastId = toast.loading("Course data feting......");
    try {
      const res = await axiosInstance.get(
        `course/getCourseFullDetails/${courseId}`,
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
  async getallcourseOfInstructore(userId) {
    console.log("userId in courseservice", userId);
    const toastId = toast.loading("Instructore data feting......");
    try {
      const res = await axiosInstance.post(
        `course/getallcourseOfInstructore`,
        userId,
        {
          timeout: 60000, // Increased timeout
        }
      );
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("Instructore data feched succesfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while fetching the instructore data:", error);
    }
  }

  async updateCourse(updateCourse, token) {
    const toastId = toast.loading("course is updating....");
    console.log("updated course is in course service ", updateCourse);
    try {
      const res = await axiosInstance.post(
        "course/updateCourse",
        updateCourse,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          timeout: 60000, // Increased timeout
        }
      );
      const data = await res.data;
      toast.dismiss(toastId);
      if (data.success) {
        toast.success("Course updated successfully");
        return data;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.log("error while creating course", error);
      toast.error(error.message);
    }
  }

  async deleteCourse(courseId, token) {
    const toastId = toast.loading("course is deleting....");
    try {
      const res = await axiosInstance.post(`course/deleteCourse`, courseId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 60000, // Increased timeout
      });
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("Course deleted successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
      console.log("Error while deleting the course:", error);
    }
  }

  async updateCoursestatus(data) {
    const toastId = toast.loading("coursestatus is updating....");
    try {
      const res = await axiosInstance.post("course/updateCourseStatus", data, {
    
        timeout: 60000, // Increased timeout
      });
      toast.dismiss(toastId);
      console.log("res is ", res.data);
      if (res.data.success) {
        toast.success("Course status updated successfully");
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  }
}

export const courseService = new CourseService();
