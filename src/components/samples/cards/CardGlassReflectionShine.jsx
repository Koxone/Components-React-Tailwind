import React from "react";

const CardGlassReflectionShine = () => {
  return (
    <div className="relative h-64 w-80 overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg">
      <div className="absolute -left-full h-full w-full rotate-45 bg-gradient-to-r from-white/20 to-white/0 transition-all duration-700 group-hover:left-full"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">Glass Reflection</h2>
        <p className="text-sm opacity-80">Shine on Hover</p>
      </div>
    </div>
  );
};

export default CardGlassReflectionShine;
