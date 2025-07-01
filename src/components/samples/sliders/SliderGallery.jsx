import { useState, useEffect } from "react";

export default function SliderGallery() {
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
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-black shadow-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
