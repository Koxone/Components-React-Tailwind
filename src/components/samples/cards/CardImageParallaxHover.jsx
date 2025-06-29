import React from "react";

const CardImageParallaxHover = () => {
  return (
    <div className="group relative h-64 w-80 overflow-hidden rounded-xl">
      <img
        src="https://source.unsplash.com/random/800x600"
        alt="Parallax"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">Parallax Hover</h2>
        <p className="text-sm opacity-80">Image Zoom</p>
      </div>
    </div>
  );
};

export default CardImageParallaxHover;
