import { useState, useEffect } from "react";

export default function DropdownGlitch() {
  const [open, setOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    let glitchTimer;
    if (open) {
      setGlitchActive(true);
      glitchTimer = setTimeout(() => setGlitchActive(false), 300); // glitch duration
    } else {
      setGlitchActive(false);
    }
    return () => clearTimeout(glitchTimer);
  }, [open]);

  const glitchClass = glitchActive ? "animate-glitch" : "";

  const menuClass = open
    ? `opacity-100 ${glitchClass}`
    : "opacity-0 translate-y-4 pointer-events-none";

  return (
    <div
      className={`relative inline-block text-left transition-all duration-600 select-none ${
        open ? "mt-[-90px]" : "mt-0"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded hover:bg-blue-700 cursor-pointer bg-blue-500 px-4 py-2 text-white shadow focus:outline-none"
      >
        Click Me!
      </button>
      <ul
        className={`absolute left-0 mt-2 w-44 transform divide-y divide-gray-100 rounded bg-white shadow-lg transition-all duration-600 ease-in-out ${menuClass}`}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
