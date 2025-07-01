import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function ToggleBounce() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
          on ? "bg-orange-500" : "bg-gray-400"
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-300 ${
            on ? "translate-x-8 animate-bounce" : ""
          }`}
        />
      </button>
    </TogglesWrapper>
  );
}
