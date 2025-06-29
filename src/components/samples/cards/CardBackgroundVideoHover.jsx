// CardBackgroundVideoHover.jsx
import React, { useState } from "react";

function CardBackgroundVideoHover() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-50 w-50 overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="relative z-10 flex h-full w-full items-center justify-center bg-black/50 text-white font-semibold">
        Hover for Video
      </div>
    </div>
  );
}

export default CardBackgroundVideoHover;
