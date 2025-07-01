import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

import { CheckIcon, XIcon } from "@heroicons/react/solid";
export default function ToggleIconInside() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative flex h-8 w-16 items-center justify-between rounded-full px-2 transition ${
          on ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <span className="text-white">
          {on ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <XIcon className="h-4 w-4" />
          )}
        </span>
        <span
          className={`absolute top-1 left-1 h-6 w-6 transform rounded-full bg-white transition ${
            on ? "translate-x-8" : ""
          }`}
        />
      </button>
    </TogglesWrapper>
  );
}
// npm install @heroicons/react
// Needed for this component to work
