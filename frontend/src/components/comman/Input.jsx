import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      width = "w-[40%]",
      color = "bg-[#161d29]",
      height = "h-[7vh]",
      value,
      onChange,
      autoComplete,
      outline,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={name} className="block mb-2 text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          {...rest}
          className={`py-2 px-4 border border-gray-300 rounded-md ${width} ${color} ${height} ${outline}   placeholder-gray-500 flex items-start  text-[#c5c7d4] `}
          autoComplete={autoComplete}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
