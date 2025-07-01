import { useState } from "react";

export default function TooltipScale() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="animate-scaleUp absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 transform rounded border border-white bg-black/90 px-4 py-2 text-sm text-white">
          Tooltip with scale effect!
        </div>
      )}
    </div>
  );
}
