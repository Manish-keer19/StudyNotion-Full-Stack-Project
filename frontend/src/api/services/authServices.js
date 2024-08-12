import { axiosInstance } from "../axiosInstance";
import { toast } from "react-hot-toast";

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

  async updatePassword(password, confirmpassword,token) {
    try {
      const res = await axiosInstance.post("/auth/resetPassword", {
        password,
        confirmpassword,
        token
      });
      return res.data;
    } catch (error) {
      toast.error("could not change the password");
      console.log("erro while updating the password", error.message);
    }
  }
}

export const authServices = new AuthServices();
