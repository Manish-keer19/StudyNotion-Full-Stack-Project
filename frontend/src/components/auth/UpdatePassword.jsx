import React, { useState } from "react";
import Navbar from "../cor/HomePage/Navbar";
import Input from "../comman/Input";
import { BiLeftArrowAlt, BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../comman/Loader";
import { authServices } from "../../api/services/authServices";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function UpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setShowconfirmpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  // const urlParams = new URLSearchParams(location.search);
  // console.log("urlparms",urlParams);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const token = location.pathname.split("/").pop();
  console.log("token is ", token);
  const onsubmit = async (data) => {
    console.log("data in udpate password", data);
    if (data.password !== data.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await authServices.updatePassword(
        data.password,
        data.confirmpassword,
        token
      );
      console.log("res is ", res);
      if (!res.success) {
        toast.error("could not update the password");
      } else {
        console.log("Password updated successfully");
        toast.success("Password updated successfully");
      }
      // navigate("/success-password");
    } catch (error) {
      console.log("Error updating password");
      toast.error("Error updating password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex items-center justify-center mt-[6vh]">
        {loading ? (
          <Loader />
        ) : (
          <div className=" w-[35%] h-[80%] flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center flex-col justify-center">
              <h1 className="font-bold text-3xl">Choose new password</h1>
              <p className="w-[25vw] mt-[3vh] text-center">
                Almost done. Enter your new password and you're all set.
              </p>
            </div>

            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="p-4 w-[86%] relative">
                <Input
                  label={"New Password *"}
                  placeholder={"Enter your new password"}
                  width="w-[100%]"
                  type={showPassword ? "text" : "password"}
                  ref={ref}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  color="bg-[#161d29]"
                  autoComplete={"password"}
                />
                <span
                  className="absolute top-[8vh] right-5 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BiHide size={24} /> : <BiShow size={24} />}
                </span>
              </div>
              {errors.password && (
                <div className="text-[red]">{errors.password.message}</div>
              )}

              <div className="p-4 w-[86%] relative flex ">
                <Input
                  label={"Confirm Password *"}
                  placeholder={"Confirm your new password"}
                  width="w-[100%]"
                  ref={ref}
                  {...register("confirmpassword", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  color="bg-[#161d29]"
                  autoComplete={"confirmpassword"}
                />
                <span
                  className="absolute top-[8vh] right-5 cursor-pointer text-gray-500"
                  onClick={() => setShowconfirmpassword(!showconfirmpassword)}
                >
                  {showconfirmpassword ? (
                    <BiHide size={24} />
                  ) : (
                    <BiShow size={24} />
                  )}
                </span>
              </div>
              {errors.confirmpassword && (
                <div className="text-[red]">
                  {errors.confirmpassword.message}
                </div>
              )}
              <button
                className="w-[86%] bg-[yellow] text-black p-2 rounded-lg"
                type="submit"
              >
                Update password
              </button>
            </form>
            <Link to={"/login"}>
              <button className="flex items-center justify-center">
                <BiLeftArrowAlt /> back to login
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default UpdatePassword;
