import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function NeonBorderToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`h-12 w-32 rounded-full font-semibold text-white transition-all duration-300 ${on ? "shadow-neon-pink border-4 border-pink-500" : "border-2 border-gray-500"}`}
      >
        {on ? "ON" : "OFF"}
      </button>
    </TogglesWrapper>
  );
}
