import { useState } from "react";

export default function TooltipGradientBorder() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-900"
      >
        Hover Me
      </button>
      {hovered && (
        <div className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2">
          <div className="tooltip-gradient-border">
            <div className="tooltip-gradient-border-inner">
              Gradient border tooltip!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
