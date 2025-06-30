import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";
export default function SlideTextToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className="relative h-12 w-32 overflow-hidden rounded-full bg-gray-700 text-white"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${on ? "-translate-y-full" : "translate-y-0"}`}
        >
          OFF
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${on ? "translate-y-0" : "translate-y-full"}`}
        >
          ON
        </span>
      </button>
    </TogglesWrapper>
  );
}
