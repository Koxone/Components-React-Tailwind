// CardMagneticHoverFollow.jsx
import React, { useRef } from "react";

function CardMagneticHoverFollow() {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateX(${-y / 4}deg) rotateY(${x / 4}deg) scale(1.05)`;
  };

  const reset = () => {
    const card = cardRef.current;
    card.style.transition = "transform 0.4s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    setTimeout(() => {
      card.style.transition = "";
    }, 400);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-lg font-bold text-white shadow-2xl transition-transform duration-200 will-change-transform"
    >
      Hover Me
    </div>
  );
}

export default CardMagneticHoverFollow;
