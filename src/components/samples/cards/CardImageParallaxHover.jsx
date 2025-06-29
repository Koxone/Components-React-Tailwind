import React, { useRef } from "react";

const CardImageParallaxHover = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = Math.max(Math.min(-y / 15, 10), -10);
    const rotateY = Math.max(Math.min(x / 15, 10), -10);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transition = "transform 0.3s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    setTimeout(() => {
      card.style.transition = "";
    }, 300);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-50 w-50 cursor-pointer overflow-hidden rounded-xl bg-gray-900 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src="/paralax.png
        "
        alt="Parallax"
        className="pointer-events-none h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white">
        <h2 className="text-2xl font-bold drop-shadow-lg">Parallax Hover</h2>
        <p className="text-sm text-gray-300 drop-shadow-lg">3D Tilt Effect</p>
      </div>
    </div>
  );
};

export default CardImageParallaxHover;
