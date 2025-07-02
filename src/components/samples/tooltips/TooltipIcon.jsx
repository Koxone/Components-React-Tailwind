
import { useState } from "react";
import { Info } from "lucide-react";

export default function TooltipIcon() {
  const [hovered, setHovered] = useState(false);
  return (
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-lg bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-700 flex items-center gap-2"
        >
          <Info className="w-4 h-4" />
          Info
        </button>
        {hovered && (
          <div className="absolute left-1/2 translate-x-[-50%] bottom-full mb-2 w-48 rounded bg-yellow-600 px-4 py-2 text-sm text-white flex items-center gap-2">
            <Info className="w-4 h-4" />
            Tooltip with icon!
          </div>
        )}
      </div>
  );
}
