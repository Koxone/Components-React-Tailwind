function CategorieCard({ type = "", onClick }) {
  return (
    <ul>
      <li className="mb-3">
        <button
          onClick={onClick}
          type="button"
          className="group flex w-full cursor-pointer items-center justify-between"
        >
          <span className="flex items-center">
            <div>
              <svg
                className="mr-2 h-[18px] w-[18px] text-gray-400 group-hover:text-blue-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a9.995 9.995 0 0 1 1.2 8.486l-.004.01-.005.015a2.958 2.958 0 0 1-2.836 2.001h-2.69a1.037 1.037 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.626 9.626 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.992 9.992 0 0 1 6.6-10.415Zm3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12ZM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01Zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2h-.01Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-base font-medium text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-600">
              {type}
            </span>
          </span>
          <span className="text-base font-medium text-gray-500 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600">
            (340)
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CategorieCard;
