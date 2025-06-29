import React from "react";

const CardLayeredGradientAccent = () => {
  return (
    <div className="relative h-64 w-80 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 p-1">
      <div className="h-full w-full rounded-xl bg-gray-900 flex flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold">Layered Gradient</h2>
        <p className="text-sm opacity-80">Accent Border</p>
      </div>
    </div>
  );
};

export default CardLayeredGradientAccent;
