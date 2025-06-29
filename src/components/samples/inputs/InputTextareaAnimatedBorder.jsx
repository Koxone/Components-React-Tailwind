import React from "react";

const InputTextareaAnimatedBorder = ({ placeholder = "Enter your message...", className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className={`w-full rounded-lg border-2 border-transparent bg-gray-900 p-3 text-white placeholder-gray-400 transition duration-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

export default InputTextareaAnimatedBorder;
