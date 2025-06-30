import { useState } from "react";
import TogglesWrapper from "../wrapper/TogglesWrapper";

export default function ScalePulseToggle() {
  const [on, setOn] = useState(false);
  return (
    <TogglesWrapper>
      <button
        onClick={() => setOn(!on)}
        className={`h-12 w-12 rounded-full bg-gradient-to-r ${on ? "animate-scale-pulse from-green-400 to-blue-500" : "from-gray-400 to-gray-500"} transition-all duration-300`}
      />
    </TogglesWrapper>
  );
}
