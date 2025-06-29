import React, { useState } from "react";

const InputAnimatedPlaceholder = ({ placeholder = "Type something...", className = "", ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <input
      placeholder={focused ? placeholder : ""}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-400 transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputAnimatedPlaceholder;
