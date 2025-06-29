// CardHoverRippleWave.jsx
import React, { useRef } from "react";

function CardHoverRippleWave() {
  const rippleRef = useRef();

  const handleClick = (e) => {
    const ripple = rippleRef.current;
    const rect = ripple.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.classList.add("animate-ripple");
    ripple.addEventListener("animationend", () => ripple.classList.remove("animate-ripple"), { once: true });
  };

  return (
    <div
      className="relative w-60 h-40 bg-blue-600 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center text-white font-bold"
      onClick={handleClick}
    >
      <span
        ref={rippleRef}
        className="absolute w-20 h-20 rounded-full bg-white/50 pointer-events-none scale-0"
      ></span>
      Ripple
    </div>
  );
}

export default CardHoverRippleWave;
