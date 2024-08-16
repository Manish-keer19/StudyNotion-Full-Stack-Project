// import React from 'react';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// function Button({ color, text, linkto, arrowActive = false, textcolor  }) {
//   return (
//     <Link to={linkto}>
//       <div
//         style={{ backgroundColor: color, color: textcolor }}
//         className='text-black py-2 px-4 sm:py-3 sm:px-6 rounded-md w-full sm:w-fit cursor-pointer flex items-center justify-center gap-2 font-bold text-sm sm:text-base'
//       >
//         {text}
//         {arrowActive && <FaArrowRightLong className="text-base sm:text-lg" />}
//       </div>
//     </Link>
//   );
// }

// export default Button;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  color = "",
  text,
  linkto,
  arrowActive = false,
  textcolor,
  outline = "",
}) {
  return (
    <Link to={linkto}>
      <div
        style={{ backgroundColor: color, color: textcolor }}
        className={`text-black py-2 px-4 sm:py-3 sm:px-6 rounded-md w-full sm:w-fit cursor-pointer flex items-center justify-center gap-2 font-bold text-sm sm:text-base
                   transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:opacity-90
                  ${outline}`}
      >
        {text}
        {arrowActive && <FaArrowRightLong className="text-base sm:text-lg" />}
      </div>
    </Link>
  );
}

export default Button;
