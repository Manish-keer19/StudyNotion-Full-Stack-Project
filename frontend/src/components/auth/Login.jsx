import React from "react";
import Navbar from "../cor/HomePage/Navbar";
import Input from "../comman/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/Images/login.webp";
import { authServices } from "../../api/services/authServices";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../features/auth/auth.slice";
import { toast } from "react-hot-toast";

function Login() {
  const [accountType, setAccountType] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  console.log("token in login:", token);  // Log the token in the component
  

  const dispatch = useDispatch();
  const handleClick = async () => {
    const data = {
      email,
      password,
    };
    console.log("data is", data);
    try {
      const res = await authServices.login(data.email, data.password);
      console.log("data in ressponse", res);
      console.log("token is", res.token);
      if(!res.success){
         toast.error(res.message);
      }
      else{

        toast.success("User hogan logged in succesfully");
        dispatch(setToken(res.token));
        navigate("/success");
      }
    } catch (error) {
      console.log("login nahi ho saka");
      console.log("error is ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center pl-[10vw] gap-32 ">
        <div className=" w-[40%] h-[70%] p-5">
          <div className="">
            <h1 className="text-4xl font-bold ml-[3vw]">Welcome Back</h1>
            <p className="w-[27vw] ml-[3vw] m-2">
              Build skills for today, tomorrow, and beyond.{" "}
              <span> Education to future-proof your career.</span>{" "}
            </p>
          </div>
          <div className="w-[16vw] h-[8vh] bg-[#161D29] flex ml-[2vw] rounded-full gap-4 items-center cursor-pointer mt-[2vh] ">
            <h3
              className={`${
                accountType == "Student" ? "bg-[#000814]" : ""
              } pl-5 pr-5 pt-2 pb-2 rounded-3xl`}
              onClick={() => {
                setAccountType("Student");
              }}
            >
              Student
            </h3>
            <h3
              className={`${
                accountType == "instructors" ? "bg-[#000814]" : ""
              } pl-5 pr-5 pt-2 pb-2 rounded-3xl`}
              onClick={() => {
                setAccountType("instructors");
              }}
            >
              instructors
            </h3>
          </div>
          <div className="inputs w-full  flex mt-5 flex-col gap-3 relative">
            <Input
              placeholder={"Enter email Address"}
              label={"Email Address"}
              color="bg-[#161D29]"
              width="w-[97%]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete={"password"}
            />
            <Input
              placeholder={"Enter Password"}
              label={"Password"}
              color="bg-[#161D29]"
              width="w-[97%]"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete={"confirmpassword"}
            />
            <Link to={"/reset-password-Token"}>
              <span className="absolute bottom-[9vh] right-[2vw] cursor-pointer text-[#47A5C5] ">
                Forget Password
              </span>
            </Link>
            <button
              className="w-[95%] bg-[yellow] text-black  font-bold mt-[5vh] p-2 rounded-full"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </div>
        <div className=" w-[40%] h-[65%]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={loginImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Login;
