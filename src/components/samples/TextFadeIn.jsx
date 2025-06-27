import React from "react";

const TextFadeIn = ({ children = "Sample Text", className = "" }) => {
  return (
    <span
      className={`animate-fadeInUp inline-block text-lg text-white ${className}`}
    >
      {children}
    </span>
  );
};

export default TextFadeIn;
