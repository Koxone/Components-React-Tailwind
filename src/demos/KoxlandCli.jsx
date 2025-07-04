import { div } from "framer-motion/client";
import { useState } from "react";

export default function KoxlandCli({ url = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }


  };


  return (
    <div>
      <h2 className="font-medium text-white">NPM Auto Install</h2>
      <h2 className="mb-3 text-xs font-normal text-neutral-400">
        Simply click the command below to copy it, then paste it into your
        terminal inside your project directory. The component will install
        automatically.
      </h2>
      <button
        type="button"
        onClick={handleCopy}
        className="relative flex h-10 w-full max-w-[600px] min-w-[250px] cursor-pointer items-center justify-start gap-1 rounded-sm border border-black/10 px-2 text-xs font-medium text-black transition-all duration-200 hover:border hover:border-green-500 dark:border-white/10 dark:text-white"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center gap-1 transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-check h-3.5 w-3.5 text-green-500 dark:text-green-500"
            aria-hidden="true"
          >
            <path d="M18 6 7 17l-5-5"></path>
            <path d="m22 10-7.5 7.5L13 16"></path>
          </svg>
          <span className="truncate text-black/50 dark:text-white/50">
            Copied to clipboard
          </span>
        </span>
        <span
          className={`truncate text-black/50 transition-opacity duration-200 dark:text-white/50 ${
            copied ? "opacity-0" : "opacity-100"
          }`}
        >
          {url}
        </span>
      </button>
    </div>
  );
}
