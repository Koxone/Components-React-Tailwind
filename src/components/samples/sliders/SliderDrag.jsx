import { useState, useRef } from "react";

export default function SliderDrag() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

  const images = [
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
    "https://picsum.photos/1000",
  ];

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (startX !== null) {
      const endX = e.clientX;
      const diff = startX - endX;
      if (diff > 50) {
        // drag left
        setIndex((prev) => (prev + 1) % images.length);
      } else if (diff < -50) {
        // drag right
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      setStartX(null);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative h-64 w-full cursor-grab overflow-hidden rounded-lg shadow-lg select-none"
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(${(i - index) * 100}%)`,
          }}
        />
      ))}
    </div>
  );
}
