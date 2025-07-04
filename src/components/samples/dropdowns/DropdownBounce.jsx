import { useState, useEffect } from "react";

export default function DropdownBounce() {
  const [open, setOpen] = useState(false);
  const [bounceClass, setBounceClass] = useState("");

  useEffect(() => {
    if (open) {
      setBounceClass("animate-bounceIn");
      const timer = setTimeout(() => setBounceClass(""), 600);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const menuClass = open
    ? `opacity-100 scale-100 ${bounceClass}`
    : "opacity-0 scale-95 pointer-events-none";

  return (
    <div
      className={`relative inline-block text-left transition-all duration-600 ease-in-out select-none ${
        open ? "mt-[-90px]" : "mt-0"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded cursor-pointer hover:bg-blue-700 bg-blue-500 px-4 py-2 text-white shadow focus:outline-none"
      >
        Click Me!
      </button>
      <ul
        className={`absolute left-0 mt-2 w-44 transform divide-y divide-gray-100 rounded bg-white shadow-lg transition-all duration-600 ease-out ${menuClass}`}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
