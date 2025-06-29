import { useState } from "react";
export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative h-8 w-16 rounded-full transition-colors duration-300 ${enabled ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-8" : ""}`}
      />
    </button>
  );
}
