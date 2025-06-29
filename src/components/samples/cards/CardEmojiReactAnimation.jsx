// CardEmojiReactAnimation.jsx
import React, { useState } from "react";

function CardEmojiReactAnimation() {
  const [showEmojis, setShowEmojis] = useState(false);
  const emojis = ["🎉", "🔥", "✨", "💥", "💫"];

  return (
    <div
      className="relative h-50 w-50 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden"
      onMouseEnter={() => setShowEmojis(true)}
      onMouseLeave={() => setShowEmojis(false)}
    >
      {showEmojis &&
        emojis.map((emoji, idx) => (
          <span
            key={idx}
            className="absolute text-2xl animate-bounce"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {emoji}
          </span>
        ))}
      Hover Me! 🎈
    </div>
  );
}

export default CardEmojiReactAnimation;
