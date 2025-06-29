import React from "react";

const CardGlassReflectionShine = () => {
  return (
    <div className="relative group h-[200px] w-[200px] overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg">
      {/* Shine overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-full top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/60 to-white/0 opacity-30 transition-transform duration-700 group-hover:translate-x-[400%]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">Hover Me!</h2>
      </div>
    </div>
  );
};

export default CardGlassReflectionShine;
