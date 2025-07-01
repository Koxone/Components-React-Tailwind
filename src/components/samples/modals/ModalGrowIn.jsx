import { useState } from "react";

export default function ModalGrowIn() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded bg-lime-600 px-4 py-2 text-white hover:bg-lime-700"
      >
        Open GrowIn Modal
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 transform rounded bg-white p-4 shadow-xl animate-growIn"
        >
          This is a Grow In Modal
        </div>
      )}
    </div>
  );
}
