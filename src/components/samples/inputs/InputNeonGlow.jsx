import React from "react";

const InputNeonGlow = ({ placeholder = "Enter text", className = "", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full rounded-md border border-gray-700 bg-black p-3 text-white placeholder-gray-500 shadow-[0_0_10px_#8b5cf6] transition focus:border-purple-500 focus:shadow-[0_0_20px_#c084fc] focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputNeonGlow;
