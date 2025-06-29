import React from "react";
import { Mail } from "lucide-react";

const InputIconInside = ({
  placeholder = "Your email",
  className = "",
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Mail
        className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-600 bg-gray-900 p-3 pl-10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
        {...props}
      />
    </div>
  );
};

// npm install lucide-react
// This is necessary for this component to work

export default InputIconInside;
