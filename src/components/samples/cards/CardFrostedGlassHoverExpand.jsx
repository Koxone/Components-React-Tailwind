import React from "react";

const CardFrostedGlassHoverExpand = () => {
  return (
    <div className="group relative h-50 w-50 overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white/20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/30 to-white/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">Frosted Glass</h2>
        <p className="text-sm opacity-80">Hover to Expand</p>
      </div>
    </div>
  );
};

export default CardFrostedGlassHoverExpand;
