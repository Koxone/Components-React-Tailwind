import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";
export default function GlowDotToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative h-12 w-12 rounded-full transition-all duration-500 ${on ? "shadow-glow-green bg-green-500" : "bg-gray-500"}`}
      >
        <span className="absolute inset-0 flex items-center justify-center font-bold text-white">
          {on ? "✔" : "✖"}
        </span>
      </button>
    </TogglesWrapper>
  );
}
