import { useState } from "react";

export default function TooltipZoom() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="animate-zoomIn absolute bottom-full left-1/2 mb-2 w-44 translate-x-[-50%] rounded bg-sky-600 px-3 py-2 text-sm text-white">
          Zoom in tooltip
        </div>
      )}
    </div>
  );
}
