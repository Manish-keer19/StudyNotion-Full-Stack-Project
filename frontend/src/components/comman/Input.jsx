import React from 'react';

const Input = ({ label, type = 'text', placeholder, width = 'w-[40%]', color = 'bg-[#212121]', value, onChange, autoComplete  }) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={name} className="block mb-2 text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value} // Controlled input value
        onChange={onChange} // Controlled input change handler
        className={`py-2 px-4 border border-gray-300 rounded-md ${width} ${color} placeholder-gray-500 flex items-start justify-center`}
        autoComplete={autoComplete}
      
  
      
      />
    </div>
  );
};

export default Input;
