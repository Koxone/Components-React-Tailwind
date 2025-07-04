import { useState } from "react";

export default function DropdownCube() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative inline-block text-left transition-all duration-600 select-none ${
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
        className={`absolute left-0 mt-2 w-44 origin-top-left divide-y divide-gray-100 rounded bg-white shadow-lg transition-transform duration-600`}
        style={{
          transform: open
            ? "perspective(600px) rotateY(0deg)"
            : "perspective(600px) rotateY(90deg)",
          transformOrigin: "top left",
        }}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
