import React from "react";
import data from "/data.json";
import CodeSnippet from "./CodeSnippet";
import { useNavigate, useParams } from "react-router-dom";

function Demo({ element }) {
  const { component } = useParams();
  const decodedComponent = decodeURIComponent(component).replace(/-/g, " ");
  const componentData = data.components.find(
    (c) => c.title.toLowerCase() === decodedComponent,
  );

  if (!componentData) {
    return (
      <div className="p-8 text-center text-red-400">Component not found.</div>
    );
  }

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center space-y-8 p-8">
      <button
        onClick={() => {
          sessionStorage.setItem("scrollToPosition", window.scrollY);
          navigate(-1);
        }}
        className="absolute cursor-pointer rounded-lg border border-white p-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 sm:top-7 sm:left-7"
      >
        Go Back
      </button>
      <div className="flex w-fit flex-col sm:gap-8">
        <h1
          className={`mb-2 flex w-full items-center justify-center text-2xl font-semibold ${componentData.effectClass}`}
        >
          {componentData.title}
        </h1>
        <CodeSnippet
          code={componentData.componentCode}
          snippetTitle="React"
          lang="jsx"
        />
        {componentData.tailwindConfigCode && (
          <CodeSnippet
            code={componentData.tailwindConfigCode}
            lang="json"
            filename="tailwind.config.js"
            snippetTitle="Tailwind Config (If you use Tailwind 4.x, use the Global CSS Code)"
          />
        )}
        {componentData.cssCode && (
          <CodeSnippet
            snippetTitle="Global CSS"
            code={componentData.cssCode}
            lang="css"
            filename="styles.css"
          />
        )}
      </div>
    </div>
  );
}

export default Demo;
