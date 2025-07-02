import { useState, useEffect, useRef } from "react";

export default function SliderParallax() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      className="relative h-64 w-full overflow-hidden rounded-lg bg-black shadow-lg"
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-64 w-full object-cover transition-transform duration-[2000ms] ease-in-out ${
            i === index
              ? "translate-x-0 scale-110"
              : "-translate-x-full scale-100"
          }`}
        />
      ))}
    </div>
  );
}
