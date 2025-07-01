import { useState, useEffect } from "react";

export default function SliderScale() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-black shadow-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-64 w-full object-cover transition-transform duration-700 ease-in-out ${
            i === index ? "animate-scalein opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
