import React, { useState } from "react";

const InputFloatingLabel = ({ label = "Label", className = "", ...props }) => {
  const [value, setValue] = useState("");

  return (
    <div className={`relative w-full ${className}`}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full border-b-2 border-gray-600 bg-transparent p-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
        placeholder={label}
        {...props}
      />
      <label
        className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 ${value ? "-top-3 text-sm text-blue-400" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputFloatingLabel;
