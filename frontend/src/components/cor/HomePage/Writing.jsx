// import React from "react";
// import Button from "./Button";
// import HighlightText from "./HighlightText";
// function Writing({
//   text,
//   subtext,
//   btn1text,
//   btn2text,
//   btn1color,
//   btn2color,
//   linkto1,
//   linkto2,
// }) {
//   return (
//     <div className="w-[50%] h-[75%] m-10 flex flex-col items-center gap-4 ">
//       <div className="flex flex-col gap-4">
//         {text}

//         <p className="">{subtext}</p>
//       </div>
//       <div className="flex gap-10 items-center ">
//         <Button
//           text={btn1text}
//           color={btn1color}
//           arrowActive={true}
//           linkto={linkto1}
//         />
//         <Button text={btn2text} color={btn2color} linkto={linkto2} />
//       </div>
//     </div>
//   );
// }

// export default Writing;

import React from "react";
import Button from "./Button";

function Writing({
  text,
  subtext,
  btn1text,
  btn2text,
  btn1color,
  btn2color,
  linkto1,
  linkto2,
}) {
  return (
    <div className="w-full sm:w-[75%] md:w-[50%] h-auto m-4 sm:m-6 md:m-10 flex flex-col items-center gap-4 ">
      <div className="flex flex-col gap-2 sm:gap-4">
        {text}
        <p className="text-sm sm:text-base md:text-lg text-center">{subtext}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
        <Button
          text={btn1text}
          color={btn1color}
          arrowActive={true}
          linkto={linkto1}
        />
        <Button text={btn2text} color={btn2color} linkto={linkto2} />
      </div>
    </div>
  );
}

export default Writing;
