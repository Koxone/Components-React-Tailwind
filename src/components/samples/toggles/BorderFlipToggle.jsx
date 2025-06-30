import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function BorderFlipToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`h-10 w-10 rounded-full border-4 transition-transform duration-500 ${on ? "rotate-45 border-blue-500" : "border-gray-400"}`}
      />
    </TogglesWrapper>
  );
}
