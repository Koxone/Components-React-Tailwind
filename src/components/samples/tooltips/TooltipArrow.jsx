import { useState } from "react";

export default function TooltipArrow() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="absolute bottom-full left-1/2 mb-3 w-48 -translate-x-1/2 transform rounded bg-cyan-600 px-4 py-2 text-sm text-white">
          Tooltip with arrow!
          <div className="absolute top-[90%] left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1 rotate-45 bg-cyan-600"></div>
        </div>
      )}
    </div>
  );
}
