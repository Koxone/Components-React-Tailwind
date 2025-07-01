import { useState, useEffect } from "react";

export default function SliderZoom() {
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
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-64 w-full object-cover transition-transform duration-1000 ease-in-out ${
            i === index
              ? "z-10 scale-110 opacity-100"
              : "z-0 scale-100 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
