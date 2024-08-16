import React from "react";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { Link, matchPath, matchRoutes, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { sidebarLinks } from "../data/dashboard-links";
import * as Icons from "react-icons/vsc";
import { useForm } from "react-hook-form";

function Sidebar({ setShowLogoutModal }) {
  const location = useLocation();
  // console.log("location is ", location.pathname);
  // console.log("mathch is ", matchPath(location.pathname, location.pathname));
  // const [togleLogout, setTogleLogout] = useState(false);

  const matchroute = (path) => {
    return matchPath({ path: path }, location.pathname);
  };

  return (
    <div className="bg-[#161D29] min-h-screen w-[15vw] h-full flex flex-col gap-4">
      <div className=" h-[49vh]  flex flex-col items-cente pt-7">
        {/* <div className='w-full h-[6vh] flex bg-[#3d2a01] items-center justify-center gap-5 rounded-md'>
      <CgProfile size={25}/>
      <h1 className='text-[#ffd60a]'>My Profile</h1>
     </div> */}
        {sidebarLinks.map((link, i) => {
          let isActive = matchroute(link.path);
          const Icon = Icons[link.icon];
          // console.log("isActive is ", isActive);
          return (
            <Link
              key={i}
              to={link.path}
              className={`w-full h-[6vh] flex items-center  gap-3 cursor-pointer
                ${
                  isActive
                    ? "bg-[#3d2a01] border-l-[3px] border-l-[#ffd60a]"
                    : ""
                }
                 `}
            >
              <div className="flex items-center justify-center gap-2 ml-[1.4vw]">
                <Icon className="md:text-lg text-3xl" />
                <h1
                  className={`${
                    isActive ? "text-[#ffd60a]" : ""
                  } text-[#838894] font-bold`}
                >
                  {link.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-[94%] bg-[#424854] h-[1.5px] ml-auto mr-auto"></div>

      <div className="bg-[#161D29] w-[15vw] flex flex-col gap-2 ">
        <div className="flex flex-col gap-2 ">
          <Link
            to={"/dashboard/setting"}
            className={`w-full h-[5vh] flex items-center gap-1  cursor-pointer text-[#838894] 
               ${
                 matchroute("/dashboard/setting") &&
                 "text-[rgb(255,214,10)] bg-[#3d2a01] border-l-[3px] border-l-[#ffd60a]"
               } `}
          >
            <div className="ml-[1.4vw] flex items-center justify-center gap-2">
              <CiSettings size={25} />
              <h1 className=" font-bold">Setting</h1>
            </div>
          </Link>

          <div
            className={`w-full h-[5vh] flex flex-col items-center justify-center  
           
            `}
            onClick={() => {
              setShowLogoutModal(true);
            }}
          >
            <button
              className={` w-full h-[4vh] flex items-center  gap-2 rounded-md cursor-pointer 
              text-[#838894] font-bold ml-[3vw]`}
            >
              <FiLogOut />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
