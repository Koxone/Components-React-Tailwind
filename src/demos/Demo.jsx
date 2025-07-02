import React, { useEffect, useState } from "react";
import data from "/data.json";
import CodeSnippet from "./CodeSnippet";
import { useNavigate, useParams } from "react-router-dom";
import MainCard from "../components/cards/MainCard";
import {
  buttons,
  text,
  inputs,
  cards,
  toggles,
} from "../components/data/ComponentsData";

function Demo() {
  const { component } = useParams();
  const decodedComponent = decodeURIComponent(component).replace(/-/g, " ");
  const componentData = data.components.find(
    (c) => c.title.toLowerCase() === decodedComponent,
  );

  const textComponent = text.find(
    (item) => item.title.toLowerCase() === decodedComponent,
  );
  const buttonComponent = buttons.find(
    (item) => item.title.toLowerCase() === decodedComponent,
  );
  const cardComponent = cards.find(
    (item) => item.title.toLowerCase() === decodedComponent,
  );
  const inputComponent = inputs.find(
    (item) => item.title.toLowerCase() === decodedComponent,
  );
  const toggleComponent = toggles.find(
    (item) => item.title.toLowerCase() === decodedComponent,
  );

  const currentComponent =
    textComponent ||
    buttonComponent ||
    cardComponent ||
    inputComponent ||
    toggleComponent;

  const navigate = useNavigate();

  const renderEffect = () => {
    if (inputComponent) {
      return <currentComponent.Component placeholder="Sample placeholder" />;
    } else if (textComponent) {
      return (
        <currentComponent.Component>Sample Text</currentComponent.Component>
      );
    } else if (buttonComponent) {
      return <currentComponent.Component>Click Me</currentComponent.Component>;
    } else if (cardComponent) {
      return (
        <currentComponent.Component>Card Content</currentComponent.Component>
      );
    } else if (toggleComponent) {
      return <currentComponent.Component>Toggle Me</currentComponent.Component>;
    }
    return <currentComponent.Component />;
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowModal(true);
    }
  }, []);

  if (!componentData || !currentComponent) {
    return (
      <div className="p-8 text-center text-red-400">Component not found.</div>
    );
  }

  return (
    <div className="relative grid grid-rows-[auto_1fr] items-center justify-center space-y-8 overflow-hidden p-4 md:overflow-visible">
      <button
        onClick={() => {
          sessionStorage.setItem("scrollToPosition", window.scrollY);
          navigate(-1);
        }}
        className="absolute top-4 left-4 z-50 cursor-pointer rounded-lg border border-white bg-black/60 p-3 text-white transition-all duration-300 hover:bg-blue-700"
      >
        Go Back
      </button>

      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="max-w-sm rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
            <h2 className="mb-2 text-lg font-semibold">Heads Up</h2>
            <p className="mb-4 text-sm text-gray-300">
              This snippets view is not optimized for mobile devices. For the
              best experience, please use a desktop.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}

      <div className="flex max-h-60 max-w-60 justify-self-center">
        <MainCard
          svg="hidden"
          effect={renderEffect()}
          url={`/demo/${encodeURIComponent(
            componentData.title.toLowerCase().replace(/\s+/g, "-"),
          )}`}
        />
      </div>

      <div className="flex w-fit flex-col sm:gap-8">
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
