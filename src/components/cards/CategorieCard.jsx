import { useLocation } from "react-router-dom";
import {
  buttons,
  text,
  inputs,
  cards,
  toggles,
  tooltips,
  modals,
  sliders,
  dropdowns,
} from "../data/ComponentsData";

function CategorieCard({ type = "", path, onClick }) {
  const location = useLocation();
  let count = 0;

  if (type.toLowerCase() === "buttons") {
    count = buttons.length;
  } else if (type.toLowerCase() === "text") {
    count = text.length;
  } else if (type.toLowerCase() === "input field") {
    count = inputs.length;
  } else if (type.toLowerCase() === "cards") {
    count = cards.length;
  } else if (type.toLowerCase() === "toggles") {
    count = toggles.length;
  } else if (type.toLowerCase() === "tooltips") {
    count = tooltips.length;
  } else if (type.toLowerCase() === "modals") {
    count = modals.length;
  } else if (type.toLowerCase() === "sliders") {
    count = sliders.length;
  } else if (type.toLowerCase() === "dropdowns") {
    count = dropdowns.length;
  }

  const isActive = location.pathname === path;

  return (
    <ul>
      <li className="mb-3">
        <button
          onClick={onClick}
          type="button"
          className="group flex w-full cursor-pointer items-center justify-between"
        >
          <span className="flex items-center">
            <span
              className={`text-base font-medium ${
                isActive
                  ? "text-blue-700 dark:text-blue-600"
                  : "text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-600"
              }`}
            >
              {type}
            </span>
          </span>
          <span
            className={`text-base font-medium ${
              isActive
                ? "text-blue-700 dark:text-blue-600"
                : "text-gray-500 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600"
            } `}
          >
            ({`${count}`})
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CategorieCard;
