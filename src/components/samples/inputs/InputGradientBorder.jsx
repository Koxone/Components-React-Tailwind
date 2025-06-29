import React from "react";

const InputGradientBorder = ({ placeholder = "Enter text", className = "", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full rounded-md border-2 border-transparent bg-gray-900 p-3 text-white placeholder-gray-400 transition-all duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-padding ${className}`}
      {...props}
    />
  );
};

export default InputGradientBorder;
