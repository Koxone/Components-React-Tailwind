// CardGlitchHoverEffect.jsx
import React from "react";

function CardGlitchHoverEffect() {
  return (
    <div className="relative w-60 h-40 rounded-lg overflow-hidden bg-black group cursor-pointer">
      <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl glitch group-hover:animate-glitch">
        Glitch
      </p>
    </div>
  );
}

export default CardGlitchHoverEffect;
