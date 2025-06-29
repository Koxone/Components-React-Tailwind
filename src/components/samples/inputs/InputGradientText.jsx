import React from "react";

const InputGradientText = ({ placeholder = "Enter text", className = "", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full rounded-md border border-gray-600 bg-gray-900 p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 placeholder-gray-400 focus:border-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputGradientText;
