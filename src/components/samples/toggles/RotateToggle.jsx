import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function RotateToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-500 ${on ? "rotate-180" : ""}`}
      >
        ⟳
      </button>
    </TogglesWrapper>
  );
}
