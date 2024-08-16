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
//               label={"Create password:"}
//               type="password"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Enter password"}
//             />
//             <Input
//               label={"Confirm password:"}
//               type="password"
//               width="w-[13vw]"
//               color="bg-[#161D29]"
//               placeholder={"Confirm password"}
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
import { authServices } from "../../api/services/authServices";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
  const [accountType, setaccountType] = useState("Student");
  const navigate = useNavigate();
  const ref = useRef();
  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const onsubmit = async (userData) => {
    if (userData.password !== userData.confirm_password) {
      alert("passwords do not match");
      return;
    }

    userData = { ...userData, accountType: accountType };
    console.log("data is ", userData);
    try {
      toast.success("loading");
      const res = await authServices.generateOtp(userData.email);
      console.log("res in singhup", res);
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
              onClick={() => setaccountType("Student")}
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

          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <Input
                    label={"First Name:"}
                    type="text"
                    width="w-[13vw]"
                    color={`bg-[#161D29] ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    placeholder={"Enter your first name"}
                    autoComplete="given-name"
                    ref={ref}
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    label={"Last Name:"}
                    type="text"
                    width="w-[13vw]"
                    color={`bg-[#161D29] ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    placeholder={"Enter your last name"}
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                    })}
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <Input
                    type="email"
                    placeholder={"Enter your email"}
                    label={"Email Address"}
                    width="w-full"
                    color={`bg-[#161D29] ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    type="text"
                    placeholder={"Enter your number"}
                    label={"Phone Number:"}
                    width="w-full"
                    color={`bg-[#161D29] ${
                      errors.phoneNo ? "border-red-500" : ""
                    }`}
                    {...register("phoneNo", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                      minLength: {
                        value: 10,
                        message: "Minimum length should be 10 for phone number",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximum length of phone number is 10",
                      },
                    })}
                    autoComplete="tel"
                  />
                  {errors.phoneNo && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.phoneNo.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <Input
                    label={"Create password:"}
                    type="password"
                    width="w-[13vw]"
                    color={`bg-[#161D29] ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder={"Enter password"}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      maxLength: {
                        value: 15,
                        message: "Maximum length of password is 15",
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum length of password is 3",
                      },
                    })}
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    label={"Confirm password:"}
                    type="password"
                    width="w-[13vw]"
                    color={`bg-[#161D29] ${
                      errors.confirm_password ? "border-red-500" : ""
                    }`}
                    placeholder={"Confirm password"}
                    {...register("confirm_password", {
                      required: {
                        value: true,
                        message: "Confirm password is required",
                      },
                      maxLength: {
                        value: 15,
                        message: "Maximum length of password is 15",
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum length of password is 3",
                      },
                    })}
                    autoComplete="new-password"
                  />
                  {errors.confirm_password && (
                    <div className="text-[red] text-sm mt-1">
                      {errors.confirm_password.message}
                    </div>
                  )}
                </div>
              </div>
              <button
                className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
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
