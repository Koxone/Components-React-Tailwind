import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 lg:flex-row dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full shrink-0 lg:flex lg:w-auto">
        <div className="relative mb-4 w-full shrink-0 lg:mr-5 lg:mb-0 lg:w-64 xl:w-96">
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
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 py-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search components..."
            defaultValue=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <div className="w-fit">
          <button
            type="button"
            className="mr-1 inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.22913 0H1.18746C0.899811 0 0.666626 0.223858 0.666626 0.5V1.5C0.666626 1.77614 0.899811 2 1.18746 2H2.22913C2.51677 2 2.74996 1.77614 2.74996 1.5V0.5C2.74996 0.223858 2.51677 0 2.22913 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M2.22913 4H1.18746C0.899811 4 0.666626 4.22386 0.666626 4.5V5.5C0.666626 5.77614 0.899811 6 1.18746 6H2.22913C2.51677 6 2.74996 5.77614 2.74996 5.5V4.5C2.74996 4.22386 2.51677 4 2.22913 4Z"
                fill="currentColor"
              ></path>
              <path
                d="M2.22913 8H1.18746C0.899811 8 0.666626 8.22386 0.666626 8.5V9.5C0.666626 9.77614 0.899811 10 1.18746 10H2.22913C2.51677 10 2.74996 9.77614 2.74996 9.5V8.5C2.74996 8.22386 2.51677 8 2.22913 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.2916 2H5.87496C5.59869 2 5.33374 1.89464 5.13839 1.70711C4.94304 1.51957 4.83329 1.26522 4.83329 1C4.83329 0.734784 4.94304 0.48043 5.13839 0.292893C5.33374 0.105357 5.59869 0 5.87496 0H16.2916C16.5679 0 16.8328 0.105357 17.0282 0.292893C17.2235 0.48043 17.3333 0.734784 17.3333 1C17.3333 1.26522 17.2235 1.51957 17.0282 1.70711C16.8328 1.89464 16.5679 2 16.2916 2Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.2916 6H5.87496C5.59869 6 5.33374 5.89464 5.13839 5.70711C4.94304 5.51957 4.83329 5.26522 4.83329 5C4.83329 4.73478 4.94304 4.48043 5.13839 4.29289C5.33374 4.10536 5.59869 4 5.87496 4H16.2916C16.5679 4 16.8328 4.10536 17.0282 4.29289C17.2235 4.48043 17.3333 4.73478 17.3333 5C17.3333 5.26522 17.2235 5.51957 17.0282 5.70711C16.8328 5.89464 16.5679 6 16.2916 6Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.2916 10H5.87496C5.59869 10 5.33374 9.89464 5.13839 9.70711C4.94304 9.51957 4.83329 9.26522 4.83329 9C4.83329 8.73478 4.94304 8.48043 5.13839 8.29289C5.33374 8.10536 5.59869 8 5.87496 8H16.2916C16.5679 8 16.8328 8.10536 17.0282 8.29289C17.2235 8.48043 17.3333 8.73478 17.3333 9C17.3333 9.26522 17.2235 9.51957 17.0282 9.70711C16.8328 9.89464 16.5679 10 16.2916 10Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">Toggle list view</span>
          </button>
        </div>

        <div className="w-fit">
          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2.5 text-center text-sm font-medium text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.61917 0.5H2.0475C1.19284 0.5 0.5 1.19284 0.5 2.0475V5.61917C0.5 6.47383 1.19284 7.16667 2.0475 7.16667H5.61917C6.47383 7.16667 7.16667 6.47383 7.16667 5.61917V2.0475C7.16667 1.19284 6.47383 0.5 5.61917 0.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.9525 0.5H10.3808C9.52617 0.5 8.83333 1.19284 8.83333 2.0475V5.61917C8.83333 6.47383 9.52617 7.16667 10.3808 7.16667H13.9525C14.8072 7.16667 15.5 6.47383 15.5 5.61917V2.0475C15.5 1.19284 14.8072 0.5 13.9525 0.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M5.61917 8.83333H2.0475C1.19284 8.83333 0.5 9.52617 0.5 10.3808V13.9525C0.5 14.8072 1.19284 15.5 2.0475 15.5H5.61917C6.47383 15.5 7.16667 14.8072 7.16667 13.9525V10.3808C7.16667 9.52617 6.47383 8.83333 5.61917 8.83333Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.9525 8.83333H10.3808C9.52617 8.83333 8.83333 9.52617 8.83333 10.3808V13.9525C8.83333 14.8072 9.52617 15.5 10.3808 15.5H13.9525C14.8072 15.5 15.5 14.8072 15.5 13.9525V10.3808C15.5 9.52617 14.8072 8.83333 13.9525 8.83333Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">Toggle grid view</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
