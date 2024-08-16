import React from "react";
import Navbar from "../components/cor/HomePage/Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import ProfileImg from "../assets/Images/profile.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/auth.slice";
import { removeUser } from "../features/Profile/profileslice";
import toast from "react-hot-toast";
function Profile() {
  const user = useSelector((state) => state.profile.user);
  console.log("user in profile ", user);
  const dispatch = useDispatch();

  const [ShowLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-[90vh] flex relative">
        <Sidebar setShowLogoutModal={setShowLogoutModal} />
        <div
          className={`w-[84vw]  min-h-[90vh] relative
          ${ShowLogoutModal ? "blur-sm" : ""}
          `}
        >
          <div className="w-fit  text-2xl flex gap-2 m-4 ml-[2vw] text-[#838894] cursor-pointer h-fit">
            <Link to={"/"}>
              <h1>Home /</h1>
            </Link>
            <h1>Dashboard /</h1>
            <h1 className="text-[#ffd60a]">Profile</h1>
          </div>

          <h1 className="text-3xl ml-[4vw]">My Profile</h1>

          <div className="w-[70vw]  min-h-[50vh]  m-auto mt-[4vh] flex flex-col  gap-4">
            <div className=" bg-[#161d29]  flex items-center justify-between p-6 rounded-lg">
              <div className="flex items-center justify-center gap-6">
                <div className="w-[6vw] h-[6vw] flex ">
                  <img
                    className="w-full h-full rounded-full"
                    src={user.image}
                    alt="profileImg"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[#f1f2ff]">
                    {user.firstName + user.lastName}
                  </h1>
                  <h4 className="text-[#7d818d]">{user.email}</h4>
                </div>
              </div>
              <button
                className="p-3 pl-3 pr-3 bg-[yellow] text-[black] font-bold rounded-lg flex  items-center justify-center gap-2"
                onClick={() => {
                  navigate("/dashboard/setting");
                }}
              >
                <FiEdit />
                Edit
              </button>
            </div>

            <div className="w-full min-h-[45vh]  bg-[#161d29] rounded-lg">
              <div className="flex items-center justify-between pr-[1.4vw] pl-[3vw] p-[2vh]">
                <h1 className="font-bold">Personal Detail</h1>
                <button
                  className="p-3 pl-3 pr-3 bg-[yellow] text-[black] font-bold rounded-lg flex  items-center justify-center gap-2"
                  onClick={() => {
                    navigate("/dashboard/setting");
                  }}
                >
                  <FiEdit />
                  Edit
                </button>
              </div>

              <div className="flex mt-[3vh] min-h-[30vh]">
                <div className="flex w-[30%] h-fit ml-[3vw] flex-col gap-1">
                  <div className="">
                    <h1 className="text-[#424853] font-bold">first Name</h1>
                    <h3 className="text-[#777b86]">{user.firstName}</h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853]">Email</h1>
                    <h3 className="text-[#777b86]">{user.email}</h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853]">DataofBirth</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.dateOfBirth}
                    </h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853]">Gender</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.gender}
                    </h3>
                  </div>
                </div>
                <div className="flex w-[50%] h-fit ml-[3vw] flex-col gap-3">
                  <div>
                    <h1 className="text-[#424853] font-bold">last Name</h1>
                    <h3 className="text-[#777b86]">{user.lastName}</h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853] font-bold">phone no</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.contactNumber}
                    </h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853] font-bold">About</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.about}
                    </h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853] font-bold">About</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.Profession}
                    </h3>
                  </div>
                  <div>
                    <h1 className="text-[#424853] font-bold">DisplayName</h1>
                    <h3 className="text-[#777b86]">
                      {user.additionalDetail?.displayName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {ShowLogoutModal && (
          <div
            className="w-[20vw] h-[20vh] bg-[#485874] absolute top-[35vh] left-[45vw] flex flex-col items-center justify-between
            p-4 rounded-lg z-20 "
          >
            <h1>You will be logged Out Do you want </h1>

            <div className="flex w-full gap-7 justify-end">
              <button
                className="p-2 rounded-lg bg-[yellow] text-[black] hover:outline outline-[rgb(172,122,122)] "
                onClick={() => {
                  dispatch(removeUser());
                  dispatch(logout());
                  toast.success("you logout succefully");
                }}
              >
                Logout
              </button>
              <button
                className="p-2 rounded-lg bg-[blue] text-white  hover:outline outline-[gold]"
                onClick={() => {
                  setShowLogoutModal(false);
                }}
              >
                Cancle
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
