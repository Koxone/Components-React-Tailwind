import { useState } from "react";

export default function ModalFadeIn() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Open FadeIn Modal
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="animate-fadeIn absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 transform cursor-pointer rounded bg-white p-4 shadow-xl"
        >
          This is a Fade In Modal
        </div>
      )}
    </div>
  );
}
