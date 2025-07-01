
import { useState } from "react";

export default function TooltipGlow() {
  const [hovered, setHovered] = useState(false);
  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
        >
          Hover Me
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-44 rounded bg-indigo-700 px-4 py-2 text-sm text-white shadow-xl shadow-indigo-500/50">
            Glowing tooltip effect!
          </div>
        )}
      </div>
  );
}
