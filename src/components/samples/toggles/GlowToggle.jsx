import { useState } from "react";
export default function GlowToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`h-10 w-20 rounded-full ${on ? "shadow-glow-purple bg-purple-600" : "bg-gray-600"} transition-all duration-300`}
    />
  );
}
