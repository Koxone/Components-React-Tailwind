import { useRef, useState } from "react";

export default function DropdownCurtain() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
        ref={menuRef}
        className={`absolute left-0 mt-2 w-44 origin-top transform divide-y divide-gray-100 overflow-hidden rounded bg-white shadow-lg transition-all duration-600 ease-in-out ${
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-0 opacity-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
