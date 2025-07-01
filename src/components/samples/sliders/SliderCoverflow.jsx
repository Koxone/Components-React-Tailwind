import { useState, useEffect } from "react";

export default function SliderCoverflow() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden">
      {images.map((img, i) => {
        const position = i - index;
        return (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className={`absolute h-48 w-2/3 rounded-lg object-cover shadow-lg transition-transform duration-700 ease-in-out`}
            style={{
              transform: `translateX(${position * 60}%) scale(${
                i === index ? 1 : 0.8
              }) rotateY(${position * 15}deg)`,
              zIndex: images.length - Math.abs(position),
              opacity: i === index ? 1 : 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
