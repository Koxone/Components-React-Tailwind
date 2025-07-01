import { useState, useEffect, useRef } from "react";

export default function SliderProgress() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
  ];

  const progressRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.classList.remove("animate-progressbar");
      void progressRef.current.offsetWidth; // reflow to restart animation
      progressRef.current.classList.add("animate-progressbar");
    }
  }, [index]);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-black shadow-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-64 w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
        <div
          ref={progressRef}
          className="animate-progressbar h-full bg-emerald-400"
        />
      </div>
    </div>
  );
}
