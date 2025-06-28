import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ code, lang = "jsx", snippetTitle }) {
  return (
    <div className="flex w-full flex-col items-start justify-center self-center">
      <h2 className="text-white">{snippetTitle}</h2>

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
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
