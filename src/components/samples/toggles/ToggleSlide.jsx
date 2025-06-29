import { useState } from "react";
export default function ToggleSlide() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative flex h-8 w-16 items-center rounded-full p-1 transition ${
        on ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
          on ? "translate-x-8" : ""
        }`}
      />
    </button>
  );
}