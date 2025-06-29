// CardFlipGlassmorphism.jsx
import React, { useState } from "react";

function CardFlipGlassmorphism() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative h-64 w-48 cursor-pointer rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg transition-transform duration-500 [transform-style:preserve-3d] ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold [backface-visibility:hidden]">
        Front
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rotate-y-180 [backface-visibility:hidden]">
        Back
      </div>
    </div>
  );
}

export default CardFlipGlassmorphism;
