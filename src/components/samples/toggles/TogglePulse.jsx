import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";
export default function TogglePulse() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
          on ? "animate-pulse bg-emerald-500" : "bg-gray-400"
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
            on ? "translate-x-8" : ""
          }`}
        />
      </button>
    </TogglesWrapper>
  );
}
