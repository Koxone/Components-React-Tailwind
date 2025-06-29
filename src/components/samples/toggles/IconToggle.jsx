import { useState } from "react";
export default function IconToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700"
    >
      {on ? (
        <span className="text-xl text-white">✅</span>
      ) : (
        <span className="text-xl text-white">❌</span>
      )}
    </button>
  );
}
