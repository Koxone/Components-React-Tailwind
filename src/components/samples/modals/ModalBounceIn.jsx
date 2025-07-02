import { useState } from "react";

export default function ModalBounceIn() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Open BounceIn Modal
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 transform rounded bg-white p-4 shadow-xl animate-bounceIn"
        >
          This is a Bounce In Modal
        </div>
      )}
    </div>
  );
}
