import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function ToggleOutline() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative flex h-8 w-16 items-center rounded-full border-2 p-1 transition ${
          on ? "border-green-500" : "border-gray-400"
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-green-500 transition ${
            on ? "translate-x-8" : "bg-gray-400"
          }`}
        />
      </button>
    </TogglesWrapper>
  );
}
