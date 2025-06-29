import React from "react";

const CardSlideContentOnHover = () => {
  return (
    <div className="group relative h-64 w-80 overflow-hidden rounded-xl bg-indigo-600 text-white">
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
        <h2 className="text-xl font-bold">Slide Content</h2>
      </div>
      <div className="absolute inset-0 translate-y-full flex items-center justify-center bg-indigo-800 transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-sm">More Info</p>
      </div>
    </div>
  );
};

export default CardSlideContentOnHover;
