import React from "react";

const CardSplitHoverReveal = () => {
  return (
    <div className="group relative h-50 w-50 cursor-pointer overflow-hidden rounded-xl bg-gray-800 text-white">
      <div className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-x-full">
        <h2 className="text-lg font-semibold">Hover to Reveal</h2>
      </div>

      <div className="absolute inset-0 flex translate-x-full items-center justify-center rounded-xl bg-blue-500 transition-transform duration-500 group-hover:translate-x-0">
        <p className="text-sm">Revealed Content</p>
      </div>
    </div>
  );
};

export default CardSplitHoverReveal;
