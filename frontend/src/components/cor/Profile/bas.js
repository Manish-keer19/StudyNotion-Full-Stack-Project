import React from "react";
import Sidebar from "../../../Pages/Sidebar";
import Navbar from "../HomePage/Navbar";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Input from "../../comman/Input";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../features/Profile/profileslice";
import { profileservice } from "../../../api/services/ProfileServices";
import toast from "react-hot-toast";
import { authServices } from "../../../api/services/authServices";

function Setting() {
  const user = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // console.log("token in setting",token);

  // Use separate useForm instances for each form
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const handleProfileSubmit = async (data) => {
    console.log("Profile data is ", data);
    try {
      const res = await profileservice.createProfile(data, token);
      // console.log("res in setting", res);
      if (res.success) {
        // toast.success("profile created succefully");
        dispatch(setUser(res.userDetail));
      }
    } catch (error) {
      console.log("could not create profile in setting", error);
      toast.error("could not create Profile");
    }
  };

  const handlePasswordSubmit = async (data) => {
    console.log("Password data is ", data);
    try {
      const res = await authServices.updatePassword(data, token);
      console.log("res in setting", res);
    } catch (error) {
      toast.error(res.message);
      console.log("eror aya he password update karne me");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <div className="w-[85vw] min-h-screen h-[200vh]">
          <Link to={"/dashboard/my-profile"}>
            <div className="flex h-fit w-fit p-2 items-center justify-center gap-1 text-[#838894] mt-[4vh] ml-[3vw] cursor-pointer">
              <IoChevronBackOutline size={25} />
              <h1 className="font-bold text-2xl">Back</h1>
            </div>
          </Link>
          <h1 className="text-3xl ml-[3vw] mt-[2vh]">Edit Profile</h1>
          <div className="w-[80%] m-auto mt-[3vh] min-h-[80%] flex flex-col gap-3">
            <div className="bg-[#161d29] flex gap-6 min-h-[17vh] items-center rounded-lg ">
              <div className="w-[85px] h-[85px] ml-[3vw]">
                <img
                  className="w-full h-full rounded-full"
                  src={user.image}
                  alt="userimg"
                />
              </div>
              <div className="flex flex-col gap-3 p-2 w-[20vw]">
                <h1 className="text-[1.3vw]">Change the profile picture</h1>
                <div className="flex gap-5 items-center ml-[1vw]">
                  <button className="p-3 bg-[#2c333f] text-[#c5c7d4] rounded-lg font-bold">
                    {" "}
                    Select
                  </button>
                  <button className="p-3 bg-[yellow] text-[black] rounded-lg font-bold flex items-center justify-center gap-2">
                    Upload
                    <MdOutlineFileUpload size={25} />
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitProfile(handleProfileSubmit)}>
              <div className="w-full min-h-[50vh] bg-[#161d29] p-5 rounded-md">
                <h1 className="text-2xl">Profile Information</h1>
                <div className="flex w-full h-[10vh] mt-[2vh] items-center justify-evenly p-5">
                  <Input
                    label={"Display Name"}
                    placeholder={"enter your name"}
                    width={"w-[25vw]"}
                    {...registerProfile("displayName")}
                    autoComplete={"name"}
                  />

                  <div>
                    <label>Profession</label>
                    <select
                      className="p-2 rounded-lg w-[30vw] bg-[#2c333f] text-[#c5c7d4]"
                      {...registerProfile("profession")}
                    >
                      <option value="" disabled>
                        choose your Profession
                      </option>
                      <option value="Developer">Developer</option>
                      <option value="Student">Student</option>
                      <option value="Designer">Designer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full h-[10vh] mt-[2vh] items-center justify-evenly p-5">
                  <Input
                    label={"Date Of Birth"}
                    placeholder={"enter your birth date"}
                    width={"w-[25vw]"}
                    type={"date"}
                    {...registerProfile("dateOfBirth")}
                    autoComplete={"dateOfBirth"}
                  />
                  <div>
                    <label className="text-[#c5c7d4]">Gender</label>
                    <select
                      name="gender"
                      className="p-2 rounded-lg w-[30vw] bg-[#2c333f] text-[#c5c7d4]"
                      {...registerProfile("gender")}
                    >
                      <option value="" disabled>
                        select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full h-[10vh] mt-[2vh] items-center justify-evenly p-5">
                  <Input
                    label={"Phone No"}
                    placeholder={"enter phone no"}
                    width={"w-[25vw]"}
                    {...registerProfile("phoneNo")}
                    autoComplete={"phoneNo"}
                  />

                  <Input
                    label={"About"}
                    placeholder={"Enter bio detail"}
                    width={"w-[30vw]"}
                    {...registerProfile("about")}
                    autoComplete={"about"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-5 p-6">
                <Link to={"/dashboard/my-profile"}>
                  <button className="bg-[#161d29] w-[5vw] p-[1vw] font-bold rounded-lg outline outline-richblack-500">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-[yellow] w-[5vw] p-[1vw] font-bold rounded-lg outline outline-[#29292b] text-[black]"
                >
                  Save
                </button>
              </div>
            </form>

            <form
              onSubmit={handleSubmitPassword(handlePasswordSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="w-full min-h-[25vh] bg-[#161d29] p-5 flex flex-col rounded-md">
                <h1 className="text-2xl font-bold text-[#f1f2ff]">Password</h1>
                <div className="flex w-full h-[9vh] mt-[2vh] items-center justify-evenly p-5">
                  <Input
                    label={"Current Password*"}
                    placeholder={"enter current password"}
                    width={"w-[25vw]"}
                    type={"password"}
                    {...registerPassword("currentPassword")}
                    autoComplete={"currentPassword"}
                  />

                  <Input
                    label={"Change Password"}
                    placeholder={"Enter new password"}
                    width={"w-[30vw]"}
                    type={"password"}
                    {...registerPassword("newPassword")}
                    autoComplete={"newPassword"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-5 p-6">
                <Link to={"/dashboard/my-profile"}>
                  <button className="bg-[#161d29] w-[5vw] p-[1vw] font-bold rounded-lg outline outline-richblack-500">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-[yellow] w-[5vw] p-[1vw] font-bold rounded-lg outline outline-[#29292b] text-[black]"
                >
                  Save
                </button>
              </div>
            </form>

            <div className="w-full min-h-[24vh] bg-[#340019] p-5 rounded-md flex gap-5 pl-[4vw] pt-[5vh]">
              <div className="w-[4em] h-[4rem] bg-[#691432] rounded-full flex items-center justify-center">
                <RiDeleteBin5Line size={40} />
              </div>
              <div className="font-medium">
                <h1 className="text-2xl">Delete Account</h1>
                <p>Would you like to delete your account?</p>
                <p>
                  This account contains Paid Courses. Deleting your account will
                  remove all the
                </p>
                <p>content associated with it.</p>

                <button className="text-[#d43d63] mt-[1vh]">
                  I want to delete my account.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
