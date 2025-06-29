import React from "react";
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

  if (!componentData || !currentComponent) {
    return (
      <div className="p-8 text-center text-red-400">Component not found.</div>
    );
  }

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

  return (
    <div className="grid grid-rows-[auto_1fr] items-center justify-center space-y-8 p-4">
      <button
        onClick={() => {
          sessionStorage.setItem("scrollToPosition", window.scrollY);
          navigate(-1);
        }}
        className="absolute cursor-pointer rounded-lg border border-white p-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 sm:top-7 sm:left-7"
      >
        Go Back
      </button>

      <div className="flex max-h-60 max-w-60 justify-self-center">
        <MainCard
          svg="hidden"
          effect={renderEffect()}
          url={`/demo/${encodeURIComponent(componentData.title.toLowerCase().replace(/\s+/g, "-"))}`}
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
