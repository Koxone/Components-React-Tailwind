import React, { useState } from "react";

function CardFlipGlassmorphism() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[200px] w-[200px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/20 text-lg font-semibold text-white backdrop-blur-md"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          Click Me!
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-purple-400/20 text-lg font-semibold text-white backdrop-blur-md"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          Click Me!
        </div>
      </div>
    </div>
  );
}

export default CardFlipGlassmorphism;
