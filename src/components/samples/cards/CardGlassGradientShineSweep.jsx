// CardGlassGradientShineSweep.jsx
import React from "react";

function CardGlassGradientShineSweep() {
  return (
    <div className="relative w-60 h-40 rounded-xl bg-white/10 backdrop-blur-lg overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3 h-full translate-x-[-100%] group-hover:translate-x-full transition-transform duration-700"></div>
      <p className="relative z-10 flex h-full w-full items-center justify-center text-white font-semibold">
        Shine
      </p>
    </div>
  );
}

export default CardGlassGradientShineSweep;
