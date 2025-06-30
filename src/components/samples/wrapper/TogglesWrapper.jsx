import React from "react";

function TogglesWrapper({ children }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-white">Click Me!</p>
      {children}
    </div>
  );
}

export default TogglesWrapper;
