// CardCircularRevealHover.jsx
import React from "react";

function CardCircularRevealHover() {
  return (
    <div className="relative group h-50 w-50 bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-pink-500 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
      <p className="relative z-10 flex h-full w-full items-center justify-center text-white font-bold">
        Hover Me
      </p>
    </div>
  );
}

export default CardCircularRevealHover;
