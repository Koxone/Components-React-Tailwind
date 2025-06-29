import React from "react";

const CardMorphingShapeHover = () => {
  return (
    <div className="flex h-50 w-50 items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white transition-all duration-500 ease-in-out hover:rounded-full hover:ease-in-out">
      <h2 className="text-xl font-bold">Hover Me!</h2>
    </div>
  );
};

export default CardMorphingShapeHover;
