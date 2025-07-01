
import { useState } from "react";

export default function TooltipGradient() {
  const [hovered, setHovered] = useState(false);
  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-lg bg-teal-600 px-4 py-2 text-white transition hover:bg-teal-700"
        >
          Hover Me
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-52 rounded bg-gradient-to-r from-teal-500 to-green-500 px-4 py-2 text-sm text-white shadow-lg">
            Gradient background tooltip!
          </div>
        )}
      </div>
  );
}
