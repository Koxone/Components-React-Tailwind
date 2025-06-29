import React from "react";

const Card3DTiltWithShadow = () => {
  return (
    <div className="relative h-50 w-50 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105">
      <div className="absolute inset-0 rounded-xl bg-black/10"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">3D Tilt</h2>
        <p className="text-sm opacity-80">Shadow & Hover Effect</p>
      </div>
    </div>
  );
};

export default Card3DTiltWithShadow;
