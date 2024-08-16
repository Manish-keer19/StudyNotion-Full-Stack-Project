import toast from "react-hot-toast";
import { axiosInstance } from "../axiosInstance";
class AuthServices {
  async Signup(userdata) {
    try {
      const response = await axiosInstance.post("/auth/signup", userdata);
      return response.data;
    } catch (error) {}
  }

  async generateOtp(email) {
    try {
      const res = await axiosInstance.post("/auth/otpGenerate", {
        email: email,
      });
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: email,
        password: password,
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.log("some error occured during login");
      console.log(error.message);
      throw error.message;
    }
  }

  async resetPasswordToken(email, token) {
    try {
      const res = await axiosInstance.post("/auth/resetPasswordToken", {
        email: email,
        token: token,
      });
      toast.success("check the email we send the email");
      return await res.data;
    } catch (error) {
      toast.error("error while generatereset Token");
      console.log("error is ", error);
    }
  }

  async resetPassword(password, confirmpassword, token) {
    try {
      const res = await axiosInstance.post("/auth/resetPassword", {
        password,
        confirmpassword,
        token,
      });
      return res.data;
    } catch (error) {
      toast.error("could not change the password");
      console.log("erro while updating the password", error.message);
    }
  }

  async updatePassword(data, token) {
    try {
      toast.loading("Loading.....");
      const res = await axiosInstance.post("/auth/updatePassword", data);
      console.log(res.data);
      if (res.data.success) {
        toast.dismiss();
        toast.success("password has been updated");
        return res.data;
      } else {
        toast.dismiss();
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("error while update the password");
      console.log("error is ", error);
    }
  }
}

export const authServices = new AuthServices();
