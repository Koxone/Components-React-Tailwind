import React from "react";

const TextAnimatedGradient = ({ children = "Sample Text", className = "" }) => {
  return (
    <span
      className={`inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-[40px] text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default TextAnimatedGradient;
