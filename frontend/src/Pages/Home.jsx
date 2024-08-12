// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import HighlightText from "../components/cor/HomePage/HighlightText";
// import Button from "../components/cor/HomePage/Button";
// import bannervideo from "../assets/Images/banner.mp4";
// import Writing from "../components/cor/HomePage/Writing";
// import CodingWords from "../components/cor/HomePage/CodingWords";
// import TimellineSection from "../components/cor/HomePage/TimellineSection";
// import LerningLanguageSection from "../components/cor/HomePage/LerningLanguageSection";
// import Instructor from "../components/cor/HomePage/Instructor";
// import PowerOfCode from "../components/cor/HomePage/PowerOfCode";

// function Home() {
//   return (
//     <div className="min-h-full min-w-ful ">
//       {/* setion 1  */}
//       <div className="relative mx-auto flex text-white flex-col w-11/12 items-center mt-12 ">
//         <Link to={"/signup"}>
//           <div className="bg-[#161D29] rounded-full">
//             <div className=" flex  items-center p-3 gap-3">
//               <p>Become an Instructore</p>
//               <FaArrowRightLong />
//             </div>
//           </div>
//         </Link>

//         <div className=" mt-10 flex flex-col items-center justify-between gap-3">
//           <h1 className="text-4xl">
//             Empower your Future with <HighlightText text={"Coding Skills"} />
//           </h1>
//           <p className="text-xl w-[65vw]">
//             With our online coding courses, you can learn at your own pace, from
//             anywhere in the world, and get access to a wealth of resources,
//             including hands-on projects, quizzes, and personalized feedback from
//             instructors.
//           </p>
//         </div>
//         <div className="mt-10  w-full flex gap-5 justify-center items-center">
//           <Button color={"yellow"} text={"Learn More"} arrowActive={true} />
//           <Button color={"#ffff"} text={"Book a Demo"} />
//         </div>

//         <div className="video-part w-[55vw] h-[60vh] mt-6">
//           <video loop autoPlay src={bannervideo} className="w-full h-full" />
//         </div>
//       </div>

//       <div className="cont1 w-[99%] m-2  h-[65vh] mt-5 flex gap-6 items-center p-16">
//         <Writing
//           text={
//             <h1 className="text-3xl">
//               Unlock your {<HighlightText text={"coding potential"} />} with our
//               online coureses
//             </h1>
//           }
//           subtext={
//             "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"
//           }
//           btn1text={"Try it Yourself"}
//           btn1color={"yellow"}
//           btn2color={"blue"}
//           btn2text={"Book a Demo"}
//         />
//         <CodingWords
//           text={`<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a> <a href="two/">Two\n</a> <a href="three/">Three</a></nav>\n</body>\n</html>`}
//         />
//       </div>

//       <div className="cont1  w-[99%] m-2  h-[65vh] mt-5 flex gap-6 items-center p-16">
//         <CodingWords
//           text={`<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a> <a href="two/">Two\n</a> <a href="three/">Three</a></nav>\n</body>\n</html>`}
//         />
//         <Writing
//           text={
//             <h1 className="text-3xl">
//               Start <HighlightText text={"coding in seconds"} />
//             </h1>
//           }
//           subtext={
//             "Go ahead, give it a try. Our hands-on learning environment means you ll be writing real code from your very first lesson."
//           }
//           btn1text={"Continue Lesson"}
//           btn1color={"yellow"}
//           btn2color={"blue"}
//           btn2text={"Learn More"}
//         />
//       </div>

//       {/* Section 2 */}
//       <PowerOfCode/>
//       <div className="min-h-screen w-full bg-[#212121] ">
//         <div className="image w-full  h-[40vh] flex items-center justify-center gap-7 ">
//           <Button
//             text={"Explore full catalog"}
//             color={"yellow"}
//             arrowActive={true}
//             linkto={"/singnup"}
//           />
//           <Button
//             text={"Learn More"}
//             color={"#161D29"}
//             textcolor={"white"}
//             linkto={"/signup"}
//           />
//           <Button />
//         </div>
//         <div className="w-full h-[40vh]  flex items-center gap-4 p-4">
//           <div className=" w-[50%] h-[80%] flex items-center justify-center ">
//             <h1 className="text-4xl">
//               Get the skill you need for a{" "}
//               <HighlightText text={"job that is in demand"} />
//             </h1>
//           </div>
//           <div className="w-[50%]   h-[80%] flex flex-col gap-8 justify-center p-3">
//             <p className="">
//               The modern StudyNotion is the dictates its own terms. Today, to be
//               a competitive specialist requires more than professional skills.
//             </p>
//             <Button text={"Learn More"} color={"yellow"} />
//           </div>
//         </div>
//         <TimellineSection />
//       </div>
//       {/* Section 3 */}
//       <div className="min-h-screen bg-[#212121] mt-10 p-20 ">
//         <div className=" text-center w-fit m-auto ">
//           <h1 className="text-3xl">
//             Your swiss knife for
//             <HighlightText text={"learning any language"} />
//           </h1>
//           <p className="w-[40vw]">
//             Using spin making learning multiple languages easy. with 20+
//             languages realistic voice-over, progress tracking, custom schedule
//             and more
//           </p>
//         </div>
//         <LerningLanguageSection />
//       </div>

//       {/* section 4 */}
//       <Instructor/>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../components/cor/HomePage/HighlightText";
import Button from "../components/cor/HomePage/Button";
import bannervideo from "../assets/Images/banner.mp4";
import Writing from "../components/cor/HomePage/Writing";
import CodingWords from "../components/cor/HomePage/CodingWords";
import TimellineSection from "../components/cor/HomePage/TimellineSection";
import LerningLanguageSection from "../components/cor/HomePage/LerningLanguageSection";
import Instructor from "../components/cor/HomePage/Instructor";
import PowerOfCode from "../components/cor/HomePage/PowerOfCode";
import Navbar from "../components/cor/HomePage/Navbar";
function Home() {
  return (
    <div className="home min-h-full min-w-full ">
      {/* Navebar */}
      <Navbar />
      {/* Section 1 */}
      <div className="relative mx-auto flex text-white flex-col w-11/12 items-center mt-12">
        <Link to="/signup">
          <div className="bg-[#161D29] rounded-full">
            <div className="flex items-center p-3 gap-3">
              <p>Become an Instructor</p>
              <FaArrowRightLong />
            </div>
          </div>
        </Link>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-center">
          <h1 className="text-3xl md:text-4xl">
            Empower your Future with <HighlightText text="Coding Skills" />
          </h1>
          <p className="text-lg md:text-xl w-full md:w-[65vw]">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="mt-10 w-full flex flex-col md:flex-row gap-5 justify-center items-center">
          <Button color="yellow" text="Learn More" arrowActive />
          <Button color="#ffff" text="Book a Demo" />
        </div>

        <div className="video-part w-full md:w-[55vw] h-[40vh] md:h-[60vh] mt-6">
          <video
            loop
            autoPlay
            src={bannervideo}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="cont1 w-full m-2 h-auto md:h-[65vh] mt-5 flex flex-col md:flex-row gap-6 items-center p-4 md:p-16">
        <Writing
          text={
            <h1 className="text-2xl md:text-3xl">
              Unlock your <HighlightText text="coding potential" /> with our
              online courses
            </h1>
          }
          subtext="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          btn1text="Try it Yourself"
          btn1color="yellow"
          btn2color="blue"
          btn2text="Book a Demo"
        />
        <CodingWords
          text={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a> <a href="two/">Two</a> <a href="three/">Three</a></nav>\n</body>\n</html>`}
        />
      </div>

      <div className="cont1 w-full m-2 h-auto md:h-[65vh] mt-5 flex flex-col md:flex-row gap-6 items-center p-4 md:p-16">
        <CodingWords
          text={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a> <a href="two/">Two</a> <a href="three/">Three</a></nav>\n</body>\n</html>`}
        />
        <Writing
          text={
            <h1 className="text-2xl md:text-3xl">
              Start <HighlightText text="coding in seconds" />
            </h1>
          }
          subtext="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          btn1text="Continue Lesson"
          btn1color="yellow"
          btn2color="blue"
          btn2text="Learn More"
        />
      </div>

      {/* Power of Code Section */}
      <PowerOfCode />

      <div className="min-h-screen w-full bg-[#212121]">
        <div className="image w-full h-[40vh] flex flex-col md:flex-row items-center justify-center gap-7 p-4">
          <Button
            text="Explore full catalog"
            color="yellow"
            arrowActive
            linkto="/signup"
          />
          <Button
            text="Learn More"
            color="#161D29"
            textcolor="white"
            linkto="/signup"
          />
        </div>

        <div className="w-full h-auto md:h-[40vh] flex flex-col md:flex-row items-center gap-4 p-4">
          <div className="w-full md:w-[50%] flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center md:text-left">
              Get the skill you need for a{" "}
              <HighlightText text="job that is in demand" />
            </h1>
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-8 justify-center p-3">
            <p>
              The modern StudyNotion dictates its own terms. Today, to be a
              competitive specialist requires more than professional skills.
            </p>
            <Button text="Learn More" color="yellow" />
          </div>
        </div>

        <TimellineSection />
      </div>

      {/* Section 3 */}
      <div className="min-h-screen bg-[#212121] mt-10 p-10 md:p-20">
        <div className="text-center w-full md:w-fit m-auto">
          <h1 className="text-3xl">
            Your swiss knife for <HighlightText text="learning any language" />
          </h1>
          <p className="w-full md:w-[40vw] mx-auto mt-4">
            Using spin making learning multiple languages easy. With 20+
            languages, realistic voice-over, progress tracking, custom
            schedules, and more.
          </p>
        </div>
        <LerningLanguageSection />
      </div>

      {/* Instructor Section */}
      <Instructor />
    </div>
  );
}

export default Home;
