import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function CodeSnippet({ code, lang = "jsx", snippetTitle, snippetSubtitle }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-center self-center">
      <h2 className="font-medium text-white">{snippetTitle}</h2>
      <p className="text-neutral-500 text-sm">{snippetSubtitle}</p>
      <div className="relative h-full w-full">
        <button
          onClick={handleCopy}
          className={`absolute top-5 right-5 z-50 cursor-pointer rounded-lg border-transparent p-1 transition-all duration-300 ease-in-out ${copied ? "bg-green-400/60" : "bg-neutral-600/50 hover:bg-green-400/60"}`}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <svg
              className="w-5 text-green-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M20.285 6.709a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0l-4.192-4.193a1 1 0 011.414-1.414l3.485 3.485 8.485-8.485a1 1 0 011.415 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <img className="w-5" src="/clipboard.svg" alt="Copy" />
          )}
        </button>
        <SyntaxHighlighter
          language={lang}
          style={vscDarkPlus}
          wrapLines={true}
          customStyle={{
            borderRadius: "0.5rem",
            background: "#0d1117",
            maxWidth: "700px",
            width: "100%",
            placeSelf: "center",
            maxHeight: "200px",
            position: "relative",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
