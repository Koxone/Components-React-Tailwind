import { useState } from "react";

export default function TooltipBlur() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="absolute bottom-full left-1/2 mb-3 w-44 translate-x-[-50%] rounded border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
          Tooltip with blur glass effect!
        </div>
      )}
    </div>
  );
}
