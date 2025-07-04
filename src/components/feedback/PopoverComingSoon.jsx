import React from "react";

function PopoverComingSoon() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gray-800 p-8 text-center shadow-xl">
      <h2 className="mb-4 text-2xl font-bold text-white">Coming Soon 🚧</h2>
      <p className="mb-6 text-white">
        This category is still under construction.
        <br />
        Very soon, you’ll find ready-to-use components here just for you!
      </p>
    </div>
  );
}

export default PopoverComingSoon;

