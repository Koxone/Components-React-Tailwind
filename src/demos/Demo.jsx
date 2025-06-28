import React from "react";
import data from "/data.json";
import CodeSnippet from "./CodeSnippet";

function Demo({ element }) {
  const component = data.components[0];

  return (
    <div className="flex w-fit flex-col items-center justify-center space-y-8 self-center border border-amber-400 p-8">
      <h1 className="mb-2 flex w-full items-center justify-center border text-2xl font-semibold text-gray-400">
        {component.title}
      </h1>

      <div>
        <CodeSnippet
          snippetTitle="React"
          code={component.componentCode}
          lang="jsx"
        />
      </div>

      {component.tailwindConfigCode && (
        <CodeSnippet
          snippetTitle="Tailwind Configuration (Tailwind 4.x doesnt need this, use the Global CSS Code)"
          code={component.tailwindConfigCode}
          lang="json"
          filename="tailwind.config.js"
        />
      )}

      {component.cssCode && (
        <CodeSnippet
          snippetTitle="Global CSS"
          code={component.cssCode}
          lang="css"
          filename="styles.css"
        />
      )}
    </div>
  );
}

export default Demo;
