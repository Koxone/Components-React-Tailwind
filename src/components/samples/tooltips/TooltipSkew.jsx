
import { useState } from "react";

export default function TooltipSkew() {
  const [hovered, setHovered] = useState(false);
  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded bg-teal-700 px-4 py-2 text-white transition hover:bg-teal-800"
        >
          Hover Me
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-48 skew-y-2 rounded bg-teal-700 px-3 py-2 text-sm text-white">
            Skewed tooltip
          </div>
        )}
      </div>
  );
}
