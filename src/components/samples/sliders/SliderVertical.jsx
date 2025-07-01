import { useState, useEffect } from "react";

export default function SliderVertical() {
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
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-black shadow-lg">
      <div
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="h-64 w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
