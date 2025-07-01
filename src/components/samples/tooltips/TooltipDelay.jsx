
import { useState } from "react";

export default function TooltipDelay() {
  const [hovered, setHovered] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    timeout = setTimeout(() => setHovered(true), 300);
  };
  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setHovered(false);
  };

  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
        >
          Hover Me
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-48 rounded bg-gray-700 px-4 py-2 text-sm text-white shadow">
            Tooltip with delay!
          </div>
        )}
      </div>
  );
}
