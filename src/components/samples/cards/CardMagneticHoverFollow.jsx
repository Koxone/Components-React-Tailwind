// CardMagneticHoverFollow.jsx
import React, { useRef } from "react";

function CardMagneticHoverFollow() {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateX(${(-y / 20)}deg) rotateY(${x / 20}deg)`;
  };

  const reset = () => {
    cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="w-60 h-40 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg font-bold transition-transform"
    >
      Hover Me
    </div>
  );
}

export default CardMagneticHoverFollow;
