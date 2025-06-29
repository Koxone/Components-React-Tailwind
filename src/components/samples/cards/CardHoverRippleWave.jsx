import React, { useRef } from "react";

function CardHoverRippleWave() {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const circle = document.createElement("span");

    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - container.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - container.getBoundingClientRect().top - radius}px`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    circle.style.transform = "scale(0)";
    circle.style.animation = "rippleEffect 0.6s linear";
    circle.style.pointerEvents = "none";

    container.appendChild(circle);

    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-600 font-bold text-white select-none"
    >
      Click Me!
    </div>
  );
}

export default CardHoverRippleWave;
