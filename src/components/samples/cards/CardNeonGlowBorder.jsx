import React from "react";

const CardNeonGlowBorder = () => {
  return (
    <div className="relative h-50 w-50 rounded-xl border-2 border-cyan-400 transition duration-500 hover:shadow-[0_0_20px_5px_rgba(6,182,212,0.7)]">
      <div className="flex h-full w-full flex-col items-center justify-center text-cyan-400">
        <h2 className="text-xl font-bold">Neon Glow</h2>
        <p className="text-sm opacity-80">Hover Border</p>
      </div>
    </div>
  );
};

export default CardNeonGlowBorder;
