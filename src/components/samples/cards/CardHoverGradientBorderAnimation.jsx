// CardHoverGradientBorderAnimation.jsx
import React from "react";

function CardHoverGradientBorderAnimation() {
  return (
    <div className="relative w-60 h-40 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] animate-gradient-x hover:scale-105 transition-transform">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-900">
        <p className="text-white">Hover Me</p>
      </div>
    </div>
  );
}

export default CardHoverGradientBorderAnimation;
