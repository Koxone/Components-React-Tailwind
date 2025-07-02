import { useState, useEffect } from "react";

export default function Slider3D() {
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
    <div className="perspective-1000 relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-1000 ease-in-out`}
          style={{
            transform: `translateX(${(i - index) * 100}%) rotateY(${i === index ? 0 : i < index ? 45 : -45}deg)`,
            opacity: i === index ? 1 : 0.5,
            zIndex: i === index ? 10 : 0,
          }}
        />
      ))}
    </div>
  );
}
