import { useState } from "react";

export default function DropdownFlip() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative inline-block text-left transition-all duration-600 select-none ${
        open ? "mt-[-90px]" : "mt-0"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded bg-blue-500 px-4 py-2 text-white shadow focus:outline-none"
      >
        Click Me!
      </button>
      <ul
        className={`absolute left-0 mt-2 w-44 divide-y divide-gray-100 rounded bg-white shadow-lg transition-transform duration-600 ease-out`}
        style={{
          transform: open
            ? "perspective(800px) rotateX(0deg)"
            : "perspective(800px) rotateX(-90deg)",
          transformOrigin: "top",
        }}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
