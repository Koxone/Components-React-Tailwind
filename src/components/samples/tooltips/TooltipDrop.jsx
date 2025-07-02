import { useState } from "react";

export default function TooltipDrop() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="animate-dropIn absolute top-full left-1/2 mt-2 w-40 translate-x-[-50%] rounded bg-orange-600 px-3 py-2 text-sm text-white opacity-0">
          Drops from top!
        </div>
      )}
    </div>
  );
}
