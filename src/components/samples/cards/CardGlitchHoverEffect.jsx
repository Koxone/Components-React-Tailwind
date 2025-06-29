import React, { useState, useEffect } from "react";

function CardGlitchHoverEffect() {
  const [glitchStyle, setGlitchStyle] = useState({});

  useEffect(() => {
    let interval;
    const glitch = () => {
      const translateX = Math.random() * 8 - 4; // -4 to 4 px
      const translateY = Math.random() * 8 - 4;
      const skewX = Math.random() * 10 - 5; // -5 to 5 deg
      const skewY = Math.random() * 10 - 5;

      setGlitchStyle({
        transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`,
      });
    };

    interval = setInterval(glitch, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-lg border bg-black text-xl font-bold text-white">
      <span className="absolute text-white" style={glitchStyle}>
        GLITCH
      </span>
      <span className="text-white opacity-30">GLITCH</span>
    </div>
  );
}

export default CardGlitchHoverEffect;
