import { useState } from "react";

export default function TooltipTextChange() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-rose-600 px-4 py-2 text-white transition hover:bg-rose-700"
      >
        Hover Me
      </button>

      <div className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 transform rounded bg-rose-600 px-3 py-2 text-sm text-white">
        {hovered ? "You are hovering!" : "Hover to see message"}
      </div>
    </div>
  );
}
