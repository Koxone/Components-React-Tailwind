import { useState, useEffect } from "react";

export default function SliderFlip() {
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
  }, []);

  return (
    <div className="perspective relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 h-full w-full transform transition-transform duration-1000 ease-in-out ${
            i === index ? "rotate-y-0" : "rotate-y-180"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={img}
            alt={`slide-${i}`}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
}
