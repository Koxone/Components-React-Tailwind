import { useState } from "react";
export default function ToggleRing() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
        on ? "bg-pink-500" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white ring-2 ring-pink-500 transition ${
          on ? "translate-x-8" : ""
        }`}
      />
    </button>
  );
}