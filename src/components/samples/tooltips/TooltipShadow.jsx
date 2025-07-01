import { useState } from "react";

export default function TooltipShadow() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="absolute bottom-full left-1/2 mb-2 w-48 translate-x-[-50%] rounded bg-indigo-600 px-3 py-2 text-sm text-white shadow-lg shadow-indigo-900/50">
          Tooltip with heavy shadow
        </div>
      )}
    </div>
  );
}
