import { useState, useEffect } from "react";

export default function SliderCards() {
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
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg shadow-xl">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute h-56 w-4/5 rounded-lg object-cover shadow-lg transition-all duration-700 ease-in-out ${
            i === index
              ? "z-30 scale-100 opacity-100"
              : "z-10 scale-90 opacity-0"
          }`}
          style={{
            transform: `translateX(${(i - index) * 100}%)`,
          }}
        />
      ))}
    </div>
  );
}
