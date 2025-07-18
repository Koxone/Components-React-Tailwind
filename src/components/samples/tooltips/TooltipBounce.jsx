
import { useState } from "react";

export default function TooltipBounce() {
  const [hovered, setHovered] = useState(false);
  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700"
        >
          Hover Me
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-48 rounded bg-violet-600 px-3 py-2 text-sm text-white animate-bounce">
            Bouncing tooltip
          </div>
        )}
      </div>
  );
}
