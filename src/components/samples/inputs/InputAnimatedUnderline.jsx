import React, { useState } from "react";

const InputAnimatedUnderline = ({ placeholder = "Enter text", className = "", ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border-b-2 border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none"
        {...props}
      />
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-500 transition-transform duration-300 ${focused ? "scale-x-100" : "scale-x-0"} origin-left`}
      />
    </div>
  );
};

export default InputAnimatedUnderline;
