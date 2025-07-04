import { useRef, useState, useEffect } from "react";

export default function DropdownAccordion() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open && menuRef.current) {
      setHeight(`${menuRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

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
        className="absolute left-0 mt-2 w-44 divide-y divide-gray-100 overflow-hidden rounded bg-white shadow-lg transition-all duration-600 ease-in-out"
        style={{
          height: height,
        }}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
