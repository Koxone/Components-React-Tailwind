// CardAnimatedConfettiCelebration.jsx
import React, { useState } from "react";
import Confetti from "react-confetti";

function CardAnimatedConfettiCelebration() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div
      className="relative flex h-40 w-60 cursor-pointer items-center justify-center rounded-lg bg-green-500 font-bold text-white"
      onClick={() => setShowConfetti(!showConfetti)}
    >
      {showConfetti && <Confetti width={240} height={160} />}
      Celebrate
    </div>
  );
}

// npm install react-confetti
// Necessary for this component to work

export default CardAnimatedConfettiCelebration;
