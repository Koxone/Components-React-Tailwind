import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";
export default function ToggleDot() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
          on ? "bg-indigo-500" : "bg-gray-400"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            on ? "translate-x-10 scale-125" : ""
          }`}
        />
      </button>
    </TogglesWrapper>
  );
}
