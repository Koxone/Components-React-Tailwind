import { useState } from "react";

export default function TooltipFade() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="animate-fadeIn absolute bottom-full left-1/2 mb-2 w-40 translate-x-[-50%] rounded bg-emerald-600 px-3 py-2 text-sm text-white opacity-0">
          Smooth fade-in tooltip
        </div>
      )}
    </div>
  );
}
