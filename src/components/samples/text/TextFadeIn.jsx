import React from "react";

const TextFadeIn = ({ children = "Sample Text", className = "" }) => {
  return (
    <span className={`animate-fadeInUp inline-block text-[40px] text-white`}>
      {children}
    </span>
  );
};

export default TextFadeIn;
