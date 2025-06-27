import React from "react";

const TextTypewriter = ({ children = "Sample Text", className = "" }) => {
  return (
    <span
      className={`animate-typewriter border-r-2 border-white pr-1 text-xl whitespace-nowrap text-white ${className}`}
    >
      {children}
    </span>
  );
};

export default TextTypewriter;
