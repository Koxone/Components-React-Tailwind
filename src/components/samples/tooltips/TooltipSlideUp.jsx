import { useState } from "react";

export default function TooltipSlideUp() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="animate-slideUp absolute bottom-full left-1/2 mb-2 w-40 translate-x-[-50%] rounded bg-gray-800 px-3 py-2 text-sm text-white opacity-0">
          This is a sliding tooltip!
        </div>
      )}
    </div>
  );
}
