import { buttons, text, inputs } from "../data/ComponentsData";

function CategorieCard({ type = "", onClick }) {
  let count = 0;

  if (type.toLowerCase() === "buttons") {
    count = buttons.length;
  } else if (type.toLowerCase() === "text") {
    count = text.length;
  } else if (type.toLowerCase() === "input field") {
    count = inputs.length;
  }
  return (
    <ul>
      <li className="mb-3">
        <button
          onClick={onClick}
          type="button"
          className="group flex w-full cursor-pointer items-center justify-between"
        >
          <span className="flex items-center">
            <span className="text-base font-medium text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-600">
              {type}
            </span>
          </span>
          <span className="text-base font-medium text-gray-500 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600">
            ({`${count}`})
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CategorieCard;
