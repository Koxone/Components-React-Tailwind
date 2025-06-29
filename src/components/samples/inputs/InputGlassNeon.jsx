import React from "react";

const InputGlassNeon = ({ placeholder = "Enter text", className = "", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-300 backdrop-blur-md shadow-[0_0_20px_#0ea5e9] transition-all duration-300 focus:shadow-[0_0_40px_#22d3ee] focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputGlassNeon;
