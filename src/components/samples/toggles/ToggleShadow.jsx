import { useState } from "react";
export default function ToggleShadow() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
        on ? "bg-blue-500 shadow-lg shadow-blue-500/50" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition ${
          on ? "translate-x-8" : ""
        }`}
      />
    </button>
  );
}