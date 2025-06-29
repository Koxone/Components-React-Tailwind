import { useState } from "react";
export default function EmojiToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="h-16 w-16 text-3xl transition-transform duration-300 hover:scale-110"
    >
      {on ? "🌞" : "🌜"}
    </button>
  );
}
