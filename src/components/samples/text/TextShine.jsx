import React from "react";

function TextShine({ children }) {
  return (
    <span className="animate-background-shine inline-flex bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
      {children}
    </span>
  );
}

export default TextShine;
