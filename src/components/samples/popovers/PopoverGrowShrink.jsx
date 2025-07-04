import { useState } from "react";

export default function PopoverGrowShrink() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
      >
        Open GrowShrink Popover
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 transform rounded bg-white p-4 shadow-xl animate-growShrink"
        >
          This is a Grow Shrink Popover
        </div>
      )}
    </div>
  );
}

