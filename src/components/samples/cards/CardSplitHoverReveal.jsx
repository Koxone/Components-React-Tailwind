import React from "react";

const CardSplitHoverReveal = () => {
  return (
    <div className="relative h-64 w-80 overflow-hidden rounded-xl bg-gray-800 text-white">
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-x-full">
        <h2 className="text-xl font-bold">Hover to Reveal</h2>
      </div>
      <div className="absolute inset-0 translate-x-full flex items-center justify-center bg-blue-500 transition-transform duration-500 group-hover:translate-x-0">
        <p className="text-sm">Revealed Content</p>
      </div>
    </div>
  );
};

export default CardSplitHoverReveal;
