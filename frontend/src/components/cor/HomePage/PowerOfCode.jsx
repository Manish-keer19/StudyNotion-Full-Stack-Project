// // import React from "react";
// // import HighlightText from "./HighlightText";
// // import { useState } from "react";
// // import { HomePageExplore } from "../../../data/homepage-explore";

// // function PowerOfCode() {
// //   const [courses, setCourses] = useState(HomePageExplore[0].courses);

// //   const handlechangecourse = (value) => {
// //     // console.log(value);
// //     const result = HomePageExplore.filter((item) => item.tag === value);
// //     // console.log(result[0].courses);
// //     setCourses(result[0].courses);
// //     //   console.log("new courses is ",courses);
// //   };
// // //   console.log("courses is ", courses);
// //   return (
// //     <div className="w-full min-h-screen border flex flex-col items-center">
// //       <h1 className="text-center mt-4 text-3xl">
// //         {" "}
// //         Unlock the <HighlightText text={"Power of Code"} />
// //       </h1>
// //       <p className="text-center mb-5">
// //         Learn to built Anything you Can Imagine
// //       </p>

// //       <div
// //         className="w-[50vw] h-[7vh] border bg-[#282525] flex font-bold gap-2 items-center justify-center rounded-full border-none cursor-pointer"
// //         onClick={(e) => {
// //           handlechangecourse(e.target.innerText);
// //         }}
// //       >
// //         <div className="w-[12vw]  h-full flex items-center justify-center rounded-2xl ">
// //           <h3 className="w-fit font-bold">Free</h3>
// //         </div>
// //         <div className="w-[12vw] bg-[#632e2e] h-full flex items-center justify-center rounded-2xl ">
// //           <h3 className="w-fit font-bold">New to coding</h3>
// //         </div>
// //         <div className="w-[12vw] bg-[#632e2e] h-full flex items-center justify-center rounded-2xl ">
// //           <h3 className="text-2xl]">Most popular</h3>
// //         </div>
// //         <div className="w-[12vw] bg-[#632e2e] h-full flex items-center justify-center rounded-2xl ">
// //           <h3 className="w-fit font-bold">Skills paths</h3>
// //         </div>
// //         <div className="w-[12vw] bg-[#632e2e] h-full flex items-center justify-center rounded-2xl ">
// //           <h3 className="w-fit font-bold">Career paths </h3>
// //         </div>
// //       </div>
// //       <div className="cards w-[70vw] h-[45vh] border mt-5 flex  justify-center gap-4">
// //          {
// //             courses.map((item,i)=>(
// //                 <div className="card mt-10 w-[22vw] h-[35vh] bg-[#161D29] rounded-lg p-4 flex items-center flex-col justify-between cursor-pointer">
// //           <div className="flex flex-col ml-5 ">
// //             <h1 className="text-2xl">{item.heading}</h1>
// //             <p className="w-[20vw] mt-5">
// //              {item.description}
// //             </p>
// //           </div>
// //           <div className="flex items-center justify-evenly w-full">
// //             <h4>{item.level}</h4>
// //             <p>{item.lessionNumber}</p>
// //           </div>
// //         </div>
// //             ))
// //          }
// //       </div>
// //     </div>
// //   );
// // }

// // export default PowerOfCode;

// import React, { useState } from "react";
// import HighlightText from "./HighlightText";
// import { HomePageExplore } from "../../../data/homepage-explore";

// function PowerOfCode() {
//   const [courses, setCourses] = useState(HomePageExplore[0].courses);
//   const [selectedTag, setSelectedTag] = useState("Free"); // Initialize with the default selected tag

//   const handlechangecourse = (value) => {
//     setSelectedTag(value); // Set the selected tag
//     const result = HomePageExplore.filter((item) => item.tag === value);
//     setCourses(result[0].courses);
//   };

//   const tags = [
//     "Free",
//     "New to coding",
//     "Most popular",
//     "Skills paths",
//     "Career paths",
//   ];

//   return (
//     <div className="w-full min-h-screen border flex flex-col items-center">
//       <h1 className="text-center mt-4 text-3xl">
//         Unlock the <HighlightText text={"Power of Code"} />
//       </h1>
//       <p className="text-center mb-5">
//         Learn to build Anything you Can Imagine
//       </p>

//       <div className="w-[50vw] h-[7vh] border bg-[#282525] flex font-bold gap-2 items-center justify-center rounded-full border-none cursor-pointer">
//         {tags.map((tag, index) => (
//           <div
//             key={index}
//             className={`w-[12vw] h-full flex items-center justify-center rounded-2xl ${
//               selectedTag === tag ? "bg-[#f97316]" : "bg-[#632e2e]"
//             }`}
//             onClick={() => handlechangecourse(tag)}
//           >
//             <h3 className="w-fit font-bold">{tag}</h3>
//           </div>
//         ))}
//       </div>

//       <div className="cards w-[70vw] h-[45vh]  mt-5 flex justify-center gap-4">
//         {courses.map((item, i) => (
//           <div
//             key={i}
//             className="card mt-10 w-[22vw] h-[35vh] bg-[#161D29] rounded-lg p-4 flex items-center flex-col justify-between cursor-pointer"
//           >
//             <div className="flex flex-col ml-5">
//               <h1 className="text-2xl">{item.heading}</h1>
//               <p className="w-[20vw] mt-5">{item.description}</p>
//             </div>
//             <div className="flex items-center justify-evenly w-full">
//               <h4>{item.level}</h4>
//               <p>{item.lessionNumber}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PowerOfCode;


import React, { useState } from "react";
import HighlightText from "./HighlightText";
import { HomePageExplore } from "../../../data/homepage-explore";

function PowerOfCode() {
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [selectedTag, setSelectedTag] = useState("Free"); // Initialize with the default selected tag

  const handlechangecourse = (value) => {
    setSelectedTag(value); // Set the selected tag
    const result = HomePageExplore.filter((item) => item.tag === value);
    setCourses(result[0].courses);
  };

  const tags = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mt-4 text-2xl sm:text-3xl">
        Unlock the <HighlightText text={"Power of Code"} />
      </h1>
      <p className="text-center mb-5 text-sm sm:text-base">
        Learn to build Anything you Can Imagine
      </p>

      <div className="w-full sm:w-[63.2vw] h-[7vh] bg-[#282525] flex font-bold gap-2 items-center justify-center rounded-full cursor-pointer flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`px-3 py-2 sm:w-[12vw] h-full flex items-center justify-center rounded-2xl text-xs sm:text-base ${
              selectedTag === tag ? "bg-[#f97316]" : ""
            }`}
            onClick={() => handlechangecourse(tag)}
          >
            <h3 className="w-fit font-bold">{tag}</h3>
          </div>
        ))}
      </div>

      <div className="cards w-full sm:w-[70vw] mt-5 flex flex-wrap justify-center gap-4">
        {courses.map((item, i) => (
          <div
            key={i}
            className="card mt-10 w-full sm:w-[22vw] h-auto sm:h-[35vh] bg-[#161D29] rounded-lg p-4 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl">{item.heading}</h1>
              <p className="mt-5 text-sm sm:text-base">{item.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4 sm:mt-0">
              <h4 className="text-sm sm:text-base">{item.level}</h4>
              <p className="text-sm sm:text-base">{item.lessionNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PowerOfCode;
