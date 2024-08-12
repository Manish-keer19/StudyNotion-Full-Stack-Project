// import React, { useState } from "react";
// import Navbar from "../cor/HomePage/Navbar";
// import Input from "../comman/Inpupt";
// import signupImg from '../../assets/Images/signup.webp'
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [userType, setUserType] = useState("Student");

//    const navigate = useNavigate();
//   const handleUserTypeChange = (type) => {
//     setUserType(type);
//   };

//   return (
//     <>

//       <Navbar />
//     <div className="min-h-screen w-full bg-gray-100 flex gap-10">
//       <div className="w-[34vw] ml-[10vw] h-full p-4 rounded-lg shadow-md">
//         <div className="p-4 flex flex-col items-center w-full">
//           <h1 className="text-3xl font-bold text-[#F1F2FF]">
//             Join the millions learning to code with StudyNotion for free
//           </h1>
//           <p className="text-lg mt-2 text-gray-700">
//             Build skills for today, tomorrow, and beyond.{" "}
//             <span>Education to future-proof your career.</span>
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4 mb-4">
//           <button
//             className={`text-white p-2 rounded-full ${
//               userType === "Student" ? "bg-[#161D29]" : "bg-gray-300"
//             }`}
//             onClick={() => handleUserTypeChange("Student")}
//           >
//             Student
//           </button>
//           <button
//             className={`text-white p-2 rounded-full ${
//               userType === "Instructor" ? "bg-[#161D29]" : "bg-gray-300"
//             }`}
//             onClick={() => handleUserTypeChange("Instructor")}
//           >
//             Instructor
//           </button>
//         </div>
//         <div className="flex flex-col gap-4">
//           <div className="flex gap-4">
//             <Input
//               label={"First Name:"}
//               type="text"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Enter your first name"}
//             />
//             <Input
//               label={"Last Name:"}
//               type="text"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Enter your last name"}
//             />
//           </div>
//           <div className="flex flex-col gap-4">
//             <Input
//               type="email"
//               placeholder={"Enter your email"}
//               label={"Email Address"}
//               width="w-full"
//               color="bg-[#161D29]"
//             />
//             <Input
//               type="text"
//               placeholder={"Enter your number"}
//               label={"Phone Number:"}
//               width="w-full"
//               color="bg-[#161D29]"
//             />
//           </div>
//           <div className="flex gap-4">
//             <Input
//               label={"Create Password:"}
//               type="password"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Enter Password"}
//             />
//             <Input
//               label={"Confirm Password:"}
//               type="password"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Confirm Password"}
//             />
//           </div>
//           <button className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
//           onClick={}
//           >
//             Create Account
//           </button>
//         </div>
//       </div>
//       <div className=" w-[40%] h-[60vh] mt-[15vh] ml-[5vw]">
//         <img className="w-full h-full object-cover" src={signupImg} alt="signupImg" />
//       </div>
//     </div>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../cor/HomePage/Navbar";
import Input from "../comman/Input";
import signupImg from "../../assets/Images/signup.webp";
import {authServices} from "../../api/services/authServices"

function Signup() {
  const [accountType, setaccountType] = useState("Student");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleCreateAccount = async () => {
    if (password !== confirm_password) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      accountType,
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirm_password
    };
    console.log("userdata is ",userData);

    try {
     const res =  await authServices.generateOtp(userData.email);
      console.log("otp hase been send to you gmail");
    } catch (error) {
      console.log("error occured to generate otp");
    }
    console.log("user data is ", userData);

    navigate("/otp", {
      state: {
        userData,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gray-100 flex gap-10">
        <div className="w-[34vw] ml-[10vw] h-full p-4 rounded-lg shadow-md">
          <div className="p-4 flex flex-col items-center w-full">
            <h1 className="text-3xl font-bold text-[#F1F2FF]">
              Join the millions learning to code with StudyNotion for free
            </h1>
            <p className="text-lg mt-2 text-gray-700">
              Build skills for today, tomorrow, and beyond.{" "}
              <span>Education to future-proof your career.</span>
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className={`text-white p-2 rounded-full ${
                accountType === "Student" ? "bg-[#161D29]" : "bg-gray-300"
              }`}
              onClick={() =>setaccountType("Student")}
            >
              Student
            </button>
            <button
              className={`text-white p-2 rounded-full ${
                accountType === "Instructor" ? "bg-[#161D29]" : "bg-gray-300"
              }`}
              onClick={() => setaccountType("Instructor")}
            >
              Instructor
            </button>
          </div>

         <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
                label={"First Name:"}
                type="text"
                width="w-[13vw]"
                color="bg-[#161D29]"
                placeholder={"Enter your first name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
              />
              <Input
                label={"Last Name:"}
                type="text"
                width="w-[13vw]"
                color="bg-[#161D29]"
                placeholder={"Enter your last name"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete= "lastename"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder={"Enter your email"}
                label={"Email Address"}
                width="w-full"
                color="bg-[#161D29]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete= "email"
              />
              <Input
                type="text"
                placeholder={"Enter your number"}
                label={"Phone Number:"}
                width="w-full"
                color="bg-[#161D29]"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                autoComplete= "phone no"
              />
            </div>
            <div className="flex gap-4">
              <Input
                label={"Create Password:"}
                type="password"
                width="w-[13vw]"
                color="bg-[#161D29]"
                placeholder={"Enter Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete= "password"
              />
              <Input
                label={"Confirm Password:"}
                type="password"
                width="w-[13vw]"
                color="bg-[#161D29]"
                placeholder={"Confirm Password"}
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
                autoComplete={"confirm-password"}
              />
            </div>
            <button
              className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
              onClick={handleCreateAccount}
              type="submit"
            >
              Create Account
            </button>
          </div>
          </form>
        </div>
        <div className="w-[40%] h-[60vh] mt-[15vh] ml-[5vw]">
          <img
            className="w-full h-full object-cover"
            src={signupImg}
            alt="signupImg"
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
