// import React from "react";
// import Navbar from "../cor/HomePage/Navbar";
// import Input from "../comman/Input";
// import { BiLeftArrowAlt } from "react-icons/bi";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { authServices } from "../../api/services/authServices";
// import { toast } from "react-hot-toast";
// import HighlightText from "../cor/HomePage/HighlightText";

// function ResetPasswordtoken() {
//   const [email, setEmail] = useState("");
//   const [isEmailSend, setIsEmailSend] = useState(false);
//   const token = useSelector((state) => state.auth.token);

//   console.log("token is ", token);

//   const handleClick = async () => {
//     try {
//       const data = await authServices.resetPasswordToken(email, token);
//       console.log(data);
//        setIsEmailSend(true);
//     } catch (error) {
//       console.log("error could not generate resetToken");
//       toast.success("error could not generate resetToken");
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-[70vh] flex items-center justify-center mt-[7vh]">

        
//         {isEmailSend?(
//            <div className="w-[35%] h-[75%] flex flex-col gap-5  items-center justify-center">
//            <div className="flex items-center flex-col justify-center">
//              <h1 className="font-bold text-3xl ">Check Email</h1>
//              <p className="w-[30vw] mt-[3vh] text-center">
//                We have sent the reset email to {<HighlightText text={email}/>}
//              </p>
//            </div>
//            <button
//              className="w-[70%] bg-[yellow] text-black p-2 rounded-lg"
//              onClick={handleClick}
//            >
//              Resend Email
//            </button>
 
//            <Link to={"/login"}>
//              <button className="flex items-center justify-center">
//                <BiLeftArrowAlt /> back to login
//              </button>
//            </Link>
//          </div>
//         ):( <div className="w-[35%] h-[75%] flex flex-col gap-5  items-center justify-center">
//           <div className="flex items-center flex-col justify-center">
            
//           <h1 className="font-bold text-3xl ">Reset your password</h1>
//           <p className="w-[30vw] mt-[3vh]">
//             Have no fear. We'll email you instructions to reset your password.
//             If you dont have access to your email we can try account recovery
//           </p>
//           </div>
//           <div className="p-4 w-[86%]">
//             <Input label={"Email Address *"} placeholder={"Enter you email"} width="w-[100%]" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//           </div>
//           <button className="w-[86%] bg-[yellow] text-black p-2 rounded-lg"
//           onClick={handleClick}
//           >Reset password</button>

//      <Link to={'/login'}>
//           <button className="flex items-center justify-center"><BiLeftArrowAlt /> back to login</button>
//      </Link>
          
//         </div>)}



       
//       </div>
//     </>
//   );
// }

// export default ResetPasswordtoken;



import React, { useState } from "react";
import Navbar from "../cor/HomePage/Navbar";
import Input from "../comman/Input";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authServices } from "../../api/services/authServices";
import { toast } from "react-hot-toast";
import HighlightText from "../cor/HomePage/HighlightText";
import Loader from "../comman/Loader";

function ResetPasswordtoken() {
  const [email, setEmail] = useState("");
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);

  // if(token){
  //   console.log("token is ", token);
  // }

  const handleClick = async () => {
    console.log("email is ",email);
    setLoading(true);
    try {
      const data = await authServices.resetPasswordToken(email, token);
      console.log(data);
      setIsEmailSend(true);
    } catch (error) {
      console.log("error could not generate resetToken");
      toast.error("error could not generate resetToken");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[70vh] flex items-center justify-center mt-[7vh]">
        {loading ? (
          <Loader />
        ) : isEmailSend ? (
          <div className="w-[35%] h-[75%] flex flex-col gap-5  items-center justify-center">
            <div className="flex items-center flex-col justify-center">
              <h1 className="font-bold text-3xl ">Check Email</h1>
              <p className="w-[30vw] mt-[3vh] text-center">
                We have sent the reset email to{" "}
                <HighlightText text={email} />
              </p>
            </div>
            <button
              className="w-[70%] bg-[yellow] text-black p-2 rounded-lg"
              onClick={handleClick}
            >
              Resend Email
            </button>

            <Link to={"/login"}>
              <button className="flex items-center justify-center">
                <BiLeftArrowAlt /> back to login
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-[35%] h-[75%] flex flex-col gap-5  items-center justify-center">
            <div className="flex items-center flex-col justify-center">
              <h1 className="font-bold text-3xl ">Reset your password</h1>
              <p className="w-[30vw] mt-[3vh]">
                Have no fear. We'll email you instructions to reset your
                password. If you don't have access to your email, we can try
                account recovery.
              </p>
            </div>
            <div className="p-4 w-[86%]">
              <Input
                label={"Email Address *"}
                placeholder={"Enter your email"}
                width="w-[100%]"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button
              className="w-[86%] bg-[yellow] text-black p-2 rounded-lg"
              onClick={handleClick}
            >
              Reset password
            </button>

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

export default ResetPasswordtoken;
