import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  color = "",             // Default background color
  text = "Click Me",          // Default text
  linkto ,              // Default link
  arrowActive = false,        // Default arrow visibility
  textcolor = "black",        // Default text color
  width = "w-auto",           // Default width
  outline = "",               // Outline class
  rounded = "rounded-md",     // Default border radius
  padding = "py-2 px-4",      // Default padding
  textSize = "text-sm",       // Default text size
  hoverEffect = true,         // Default hover effect
  disabled = false,           // Default disabled state
  customClasses = "",         // Additional custom classes
  ...rest                     // Spread remaining props
}) {
  return (
    <Link to={disabled ? "#" : linkto} className={`w-full sm:w-fit ${width}`}>
      <div
        style={{
          backgroundColor: disabled ? "gray" : color,
          color: textcolor,
          cursor: disabled ? "not-allowed" : "pointer"
        }}
        className={`
          ${padding} 
          ${rounded} 
          flex items-center justify-center gap-2 
          font-bold ${textSize} 
          transition-transform duration-300 ease-in-out 
          ${hoverEffect && !disabled ? "transform hover:scale-105 hover:shadow-lg hover:opacity-90" : ""} 
          ${outline} ${customClasses}
        `}
        {...rest}
      >
        {text}
        {arrowActive && <FaArrowRightLong className="text-base sm:text-lg" />}
      </div>
    </Link>
  );
}

export default Button;
