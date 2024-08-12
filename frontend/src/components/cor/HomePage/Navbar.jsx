import React from "react";
import { useState, useEffect } from "react";
import { NavbarLinks } from "../../../data/navbar-links";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { catagoryService } from "../../../api/services/catagoryService";
import { useSelector } from "react-redux";

function Navbar({ color = "bg-[#161D29]" }) {
  const [sublink, setSublink] = useState();
  const token = useSelector((state) => state.auth.token);

  // if(token){

  //   console.log("token  in navbar ",token);
  // }

  const fetchAllCategories = async () => {
    if (!token) {
      console.log("token is not availabe cant fetchallcatagorys");
      return;
    }
    try {
      const data = await catagoryService.gellAllCatagory(token);
      if (data) {
        // console.log("data", data);
        // console.log("data", data.allCatagory);

        setSublink(data.allCatagory);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.log("Some error occurred");
      console.log("Error is", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div
      className={`w-full ${color} flex items-center justify-between p-3 md:p-6 lg:p-5`}
    >
      <Link to={"/"}>
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
      <div className="hidden md:flex gap-6">
        <Button text={"Signup"} color={"yellow"} linkto={"/signup"} />
        <Button text={"Login"} color={"green"} linkto={"/login"} />
      </div>
      <div className="md:hidden flex items-center">
        <Button text={"Menu"} color={"yellow"} linkto={"/menu"} />{" "}
        {/* Assuming a mobile menu button */}
      </div>
    </div>
  );
}

export default Navbar;
