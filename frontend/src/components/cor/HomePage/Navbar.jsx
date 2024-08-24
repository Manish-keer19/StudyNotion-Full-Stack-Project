// import React from "react";
// import { useState, useEffect } from "react";
// import { NavbarLinks } from "../../../data/navbar-links";
// import logo from "../../../assets/Logo/Logo-Full-Light.png";
// import { Link, Navigate } from "react-router-dom";
// import { IoIosArrowDropdown } from "react-icons/io";
// import Button from "./Button";
// import { catagoryService } from "../../../api/services/catagoryService";
// import ProfileImg from "../../../assets/Images/profile.jpg";
// import { GoTriangleDown } from "react-icons/go";
// import { IoCartOutline } from "react-icons/io5";
// import { authServices } from "../../../api/services/authServices";
// import { setToken, logout } from "../../../features/auth/auth.slice";
// import {removeUser} from "../../../features/Profile/profileslice"
// import { useDispatch ,useSelector} from "react-redux";
// import { toast } from "react-hot-toast";

// function Navbar({ color = "bg-[#161D29]" }) {
//   const [sublink, setSublink] = useState();
//   const token = useSelector((state) => state.auth.token);

//   const [dropdown, setDropdown] = useState(false);
//   const dispatch = useDispatch();
//   const user = useSelector((state)=>state.profile.user);
//   // console.log("user in navbar",user)

//   // console.log("token  in navbar ", token);

//   const fetchAllCategories = async () => {
//     if (!token) {
//       console.log("token is not availabe cant fetchallcatagorys");
//       return;
//     }
//     try {
//       const data = await catagoryService.gellAllCatagory(token);
//       if (data) {
//         // console.log("data", data);
//         // console.log("data", data.allCatagory);

//         setSublink(data.allCatagory);
//       } else {
//         console.log("No data received");
//       }
//     } catch (error) {
//       console.log("Some error occurred");
//       console.log("Error is", error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       // Optionally, you might want to call an API to log out on the server-side
//       // await authServices.logout(token); // If applicable, depending on your API design
//       dispatch(logout()); // Dispatch the logout action to remove the token from state
//       dispatch(removeUser())
//       toast.success("User logged out successfully");
//       setDropdown(false); // Close the dropdown after logging out
//     } catch (error) {
//       console.error("Error during logout", error);
//       toast.error("Failed to log out. Please try again.");
//     }
//   };

//   useEffect(() => {
//     fetchAllCategories();
//   }, []);

//   return (
//     <div
//       className={`w-full ${color} flex items-center justify-between h-[10vh] md:p-6 lg:p-5 border relative`}
//     >
//       <Link to={"/"}>
//         <img
//           className="w-[8vw] md:w-[6vw] lg:w-[10vw] object-cover p-2 md:p-3"
//           src={logo}
//           alt="Logo"
//         />
//       </Link>
//       <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
//         {NavbarLinks.map((item, i) =>
//           item.title === "Catalog" ? (
//             <div key={i} className="relative group">
//               <div className="flex items-center gap-2 cursor-pointer text-white">
//                 <p className="font-bold text-sm md:text-lg lg:text-base">
//                   {item.title}
//                 </p>
//                 <IoIosArrowDropdown className="text-sm md:text-lg lg:text-base" />
//               </div>

//               <div className="absolute top-full left-0 hidden group-hover:block w-[12vw] md:w-[15vw] lg:w-[20vw] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-20 mt-2">
//                 <div className="p-4">
//                   {sublink &&
//                     sublink.map((subItem, i) => (
//                       <Link key={i} to={subItem.linkto}>
//                         <p className="text-black text-sm p-2 hover:bg-gray-200 rounded transition-colors duration-200">
//                           {subItem.name}
//                         </p>
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <Link key={i} to={item.path}>
//               <h3 className="font-bold text-white text-sm md:text-lg lg:text-base">
//                 {item.title}
//               </h3>
//             </Link>
//           )
//         )}
//       </div>
//       <div className="hidden md:flex gap-6">
//         {token != null ? (
//           <div className="w-[10vw] flex items-center gap-6 cursor-pointer">
//             <div className="cart">
//               <IoCartOutline size={30} />
//             </div>
//             <div className="flex items-center">
//               <div className="img w-[55px] h-[55px] flex items-center justify-center">
//                 <img
//                   className="w-full h-full object-cover rounded-full"
//                   src={user.image}
//                   alt="profile-img"
//                   onClick={() => {
//                     setProfileDetail(!profileDetail);
//                   }}
//                 />
//               </div>
//               <GoTriangleDown
//                 size={25}
//                 className="text-gray-600 cursor-pointer"
//                 onClick={() => {
//                   setDropdown(!dropdown);
//                 }}
//               />

//             </div>
//           </div>
//         ) : (
//           <>
//             <Button text={"Signup"} textcolor={'#afb2bf'} linkto={"/signup"} outline="outline outline-[#2c333f]"  />
//             <Button text={"Login"}  textcolor={"#afb2bf"} linkto={"/login"} outline="outline outline-[#2c333f]" />
//           </>
//         )}
//       </div>
//       {dropdown && (
//                 <div className=" absolute right-[2vw] text-white h-[15vh] w-[7vw] top-[1vh] flex flex-col font-bold rounded-lg  gap-3 bg-[#041e4d] items-center justify-center cursor-pointer">
//                   <Link
//                     to="/dashboard/my-profile"
//                     className="px-4 hover:bg-gray-700 hover:text-yellow-500 transition duration-200 cursor-pointer"
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     className="px-4 hover:bg-gray-700 hover:text-yellow-500 transition duration-200 cursor-pointer h-[5vh]"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavbarLinks } from "../../../data/navbar-links";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { catagoryService } from "../../../api/services/catagoryService";
import { GoTriangleDown } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { logout } from "../../../features/auth/auth.slice";
import { removeUser } from "../../../features/Profile/profileslice";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { removeStage } from "../../../features/course/courseslice";

function Navbar({ color = "bg-[#161D29]" }) {
  const [sublink, setSublink] = useState();
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);

  const fetchAllCategories = async () => {
    if (!token) {
      console.log("Token is not available, can't fetch all categories");
      return;
    }
    try {
      const data = await catagoryService.gellAllCatagory(token);
      setSublink(data.allCatagory);
    } catch (error) {
      console.error("Some error occurred:", error);
    }
  };

  const handleLogout = () => {
    try {
      dispatch(logout());
      dispatch(removeUser());
      toast.success("User logged out successfully");
      setDropdown(false);
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Failed to log out. Please try again hello bhai.", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div
      className={`w-full ${color} flex items-center justify-between h-[10vh] md:p-6 lg:p-5`}
    >
      <Link to="/">
        <img
          className="w-[8vw] md:w-[6vw] lg:w-[10vw] object-cover p-2 md:p-3"
          src={logo}
          alt="Logo"
        />
      </Link>
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        {NavbarLinks.map((item, i) =>
          item.title === "Catalog" ? (
            <div key={i} className="relative group">
              <div className="flex items-center gap-2 cursor-pointer text-white">
                <p className="font-bold text-sm md:text-lg lg:text-base">
                  {item.title}
                </p>
                <IoIosArrowDropdown className="text-sm md:text-lg lg:text-base" />
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block w-[12vw] md:w-[15vw] lg:w-[20vw] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-20 mt-2">
                <div className="p-4">
                  {sublink &&
                    sublink.map((subItem, i) => (
                      <Link key={i} to={subItem.linkto}>
                        <p className="text-black text-sm p-2 hover:bg-gray-200 rounded transition-colors duration-200">
                          {subItem.name}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={i} to={item.path}>
              <h3 className="font-bold text-white text-sm md:text-lg lg:text-base">
                {item.title}
              </h3>
            </Link>
          )
        )}
      </div>
      <div className="hidden md:flex gap-6 items-center">
        {token ? (
          <div className="flex items-center gap-6">
            <div className="cart">
              <IoCartOutline size={30} />
            </div>
            <div className="relative flex items-center">
              <img
                className="w-[55px] h-[55px] object-cover rounded-full cursor-pointer"
                src={user.image || ProfileImg} // Fallback to default profile image if user.image is not available
                alt="profile-img"
                onClick={() => setDropdown(!dropdown)}
              />
              <GoTriangleDown
                size={25}
                className="text-gray-600 cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              />
              {dropdown && (
                <div className="absolute right-0 mt-2 w-[7vw] bg-[#161d29] text-white rounded-lg shadow-lg z-20 flex top-[8vh] flex-col items-center">
                  <Link
                    to="/dashboard/my-profile"
                    className="px-4 py-2 hover:bg-gray-700 hover:text-yellow-500 transition duration-200 flex items-center justify-center gap-2 font-bold"
                    onClick={() => setDropdown(false)}
                  >
             
                    <CgProfile size={23}/>
                    Profile
                  </Link>
                  <button
                    className="px-4 py-2 hover:bg-gray-700 hover:text-yellow-500 transition duration-200 font-bold flex items-center justify-center gap-2"
                    onClick={handleLogout}
                  >
                    <BiLogOut size={23}/>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Button
              text={"Signup"}
              textcolor={"#afb2bf"}
              linkto={"/signup"}
              outline="outline outline-[#2c333f]"
            />
            <Button
              text={"Login"}
              textcolor={"#afb2bf"}
              linkto={"/login"}
              outline="outline outline-[#2c333f]"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
