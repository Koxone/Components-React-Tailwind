import React from "react";

const InputGlassmorphism = ({ placeholder = "Enter text", className = "", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-300 backdrop-blur-md transition-all duration-300 focus:border-blue-400 focus:bg-white/20 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputGlassmorphism;
