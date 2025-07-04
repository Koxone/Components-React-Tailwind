import React from "react";

function SearchBar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row-reverse items-center justify-between border-gray-200 border-b-transparent bg-gray-50 p-4 sm:rounded-lg dark:border-gray-700 dark:bg-gray-800"
    >
      {/* INPUT A LA DERECHA */}
      <div className="flex w-full items-center justify-between sm:w-full">
        <a href="https://www.koxland.dev/" target="_blank">
          <img
            className="hidden w-11 md:block"
            src="/paralax.png"
            alt="Koxland Icon"
          />
        </a>
        <div className="relative w-full max-w-[600px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <label htmlFor="search" className="hidden">
            Search components
          </label>
          <input
            id="search"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search components..."
            defaultValue=""
          />
        </div>
      </div>

      {/* BOTÓN A LA IZQUIERDA */}
      <button onClick={onClick} type="button" className="sm:hidden">
        <svg
          className="h-10 w-10 cursor-pointer fill-current text-gray-500 hover:text-blue-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 72"
        >
          <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4H16c-2.209 0-4-1.791-4-4s1.791-4 4-4h40zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4H16c-2.209 0-4-1.791-4-4s1.791-4 4-4h40zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4H16c-2.209 0-4-1.791-4-4s1.791-4 4-4h40z"></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
