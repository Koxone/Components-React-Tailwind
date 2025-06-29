import { useNavigate } from "react-router-dom";
import CategorieCard from "../cards/CategorieCard";

function DrawerMenu({ isToggle }) {
  const navigate = useNavigate();

  return (
    <aside
      className={`hide-scrollbar ${isToggle ? "flex" : "hidden"} absolute z-50 col-span-1 h-[100dvh] max-w-[250px] flex-1 rounded-lg border border-transparent bg-gray-50 p-5 pb-[400px] sm:hidden dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className="h-full grid-rows-[auto_auto_auto_auto] sm:grid">
        <div className="mb-5">
          <h5 className="mb-4 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Categories
          </h5>
          <div
            className="grid w-full grid-cols-2 rounded-md shadow-sm"
            role="group"
          >
            <button
              type="button"
              className="group inline-flex cursor-pointer items-center justify-center rounded-l-lg border border-gray-200 bg-gray-100 p-2 text-sm font-medium text-blue-700 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-blue-600 dark:focus:text-blue-600 dark:focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 opacity-60 transition group-hover:opacity-100 dark:opacity-70 dark:group-hover:opacity-100"
              >
                <path d="M48.63 24c8.29 0 12.31 4.31 16.96 9.31 2.19 2.35 4.45 4.79 7.31 6.9 2.19 1.62 7.4 3.7 12.08 2.39 0.85-0.24 1.64-0.58 2.37-1.01-3.4 6.84-8.57 10.77-14.46 10.77-4.31 0-10.45-4.24-17.3-11.94-5.09-5.73-12.2-7.75-17.3-7.75-1.19 0-2.3 0.13-3.31 0.38 4.99-5.87 8.53-9.05 14-9.05z" />
                <path d="M27.49 47.64c8.62 0 12.79 4.5 17.62 9.72 2.01 2.18 4.1 4.42 6.62 6.47 2.63 2.12 7.51 3.7 11.77 2.62 0.97-0.24 1.86-0.62 2.67-1.12-3.4 6.78-8.55 10.68-14.41 10.68-4.49 0-10.63-4.24-17.29-11.93-4.97-5.75-12.1-7.79-17.21-7.79-1.27 0-2.46 0.15-3.54 0.4 4.99-5.86 8.53-9.04 14-9.04z" />
              </svg>
              Tailwind
            </button>

            <button
              type="button"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-blue-600 dark:focus:text-blue-600 dark:focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 109.43"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 opacity-60 transition group-hover:opacity-100 dark:opacity-70 dark:group-hover:opacity-100"
              >
                <path d="M122.88,54.73c0-8.14-10.19-15.85-25.82-20.64c3.61-15.93,2-28.6-5.06-32.66c-1.63-0.95-3.53-1.4-5.61-1.4v5.59c1.15,0,2.08,0.23,2.86,0.65c3.41,1.95,4.88,9.39,3.73,18.96c-0.28,2.35-0.73,4.83-1.28,7.36c-4.91-1.2-10.27-2.13-15.9-2.73c-3.38-4.63-6.89-8.84-10.42-12.52C73.54,9.74,81.2,5.59,86.41,5.59V0c-6.89,0-15.9,4.91-25.02,13.43C52.27,4.96,43.26,0.1,36.37,0.1v5.59c5.18,0,12.87,4.13,21.04,11.67c-3.51,3.68-7.01,7.86-10.34,12.5c-5.66,0.6-11.02,1.53-15.93,2.75c-0.58-2.5-1-4.93-1.3-7.26c-1.18-9.57,0.28-17.01,3.66-18.99c0.75-0.45,1.73-0.65,2.88-0.65V0.13c-2.1,0-4.01,0.45-5.66,1.4c-7.04,4.06-8.62,16.71-4.98,32.59C10.14,38.92,0,46.61,0,54.73c0,8.14,10.19,15.85,25.82,20.64c-3.61,15.93-2,28.6,5.06,32.66c1.63,0.95,3.53,1.4,5.64,1.4c6.89,0,15.9-4.91,25.02-13.43c9.12,8.47,18.13,13.33,25.02,13.33c2.1,0,4.01-0.45,5.66-1.4c7.04-4.06,8.62-16.71,4.98-32.59C112.74,70.56,122.88,62.84,122.88,54.73zM72.86,54.73c0-6.32-5.12-11.45-11.45-11.45c-6.32,0-11.45,5.12-11.45,11.45s5.12,11.45,11.45,11.45C67.74,66.17,72.86,61.05,72.86,54.73zM90.27,38.02c-0.93,3.23-2.08,6.56-3.38,9.89c-1.03-2-2.1-4.01-3.28-6.01c-1.15-2-2.38-3.96-3.61-5.86C83.56,36.57,86.99,37.22,90.27,38.02zM78.8,64.7c-1.95,3.38-3.96,6.59-6.04,9.57c-3.73,0.33-7.51,0.5-11.32,0.5c-3.78,0-7.56-0.18-11.27-0.48c-2.08-2.98-4.11-6.16-6.06-9.52c-1.9-3.28-3.63-6.61-5.21-9.97c1.55-3.36,3.31-6.71,5.18-9.99c1.95-3.38,3.96-6.59,6.04-9.57c3.73-0.33,7.51-0.5,11.32-0.5c3.78,0,7.56,0.18,11.27,0.48c2.08,2.98,4.11,6.16,6.06,9.52c1.9,3.28,3.63,6.61,5.21,9.97C82.4,58.06,80.68,61.41,78.8,64.7zM86.89,61.44c1.35,3.36,2.5,6.71,3.46,9.97c-3.28,0.8-6.74,1.48-10.32,2c1.23-1.93,2.45-3.91,3.61-5.94C84.78,65.47,85.86,63.44,86.89,61.44zM61.49,88.16c-2.33-2.4-4.66-5.08-6.96-8.01c2.25,0.1,4.56,0.18,6.89,0.18c2.35,0,4.68-0.05,6.96-0.18C66.12,83.08,63.79,85.76,61.49,88.16zM42.86,73.41c-3.56-0.53-6.99-1.18-10.27-1.98c0.93-3.23,2.08-6.56,3.38-9.89c1.03,2,2.1,4.01,3.28,6.01C40.43,69.56,41.63,71.51,42.86,73.41zM61.36,21.29c2.33,2.4,4.66,5.08,6.96,8.01c-2.25-0.1-4.56-0.18-6.89-0.18c-2.35,0-4.68,0.05-6.96,0.18C56.73,26.37,59.06,23.69,61.36,21.29zM42.83,36.04c-1.23,1.93-2.45,3.91-3.61,5.94c-1.15,2-2.23,4.01-3.26,6.01c-1.35-3.36-2.5-6.71-3.46-9.97C35.79,37.24,39.25,36.57,42.83,36.04zM20.16,67.4c-8.87-3.78-14.6-8.74-14.6-12.67c0-3.93,5.74-8.92,14.6-12.67c2.15-0.93,4.51-1.75,6.94-2.53c1.43,4.91,3.31,10.02,5.64,15.25c-2.3,5.21-4.16,10.29-5.56,15.18C24.7,69.18,22.34,68.33,20.16,67.4zM33.64,103.19c-3.41-1.95-4.88-9.39-3.73-18.96c0.28-2.35,0.73-4.83,1.28-7.36c4.91,1.2,10.27,2.13,15.9,2.73c3.38,4.63,6.89,8.84,10.42,12.52c-8.17,7.59-15.83,11.75-21.04,11.75C35.34,103.84,34.39,103.62,33.64,103.19zM93.05,84.11c1.18,9.57-0.28,17.01-3.66,18.99c-0.75,0.45-1.73,0.65-2.88,0.65c-5.18,0-12.87-4.13-21.04-11.67c3.51-3.68,7.01-7.86,10.34-12.5c5.66-0.6,11.02-1.53,15.93-2.76C92.32,79.35,92.77,81.78,93.05,84.11zM102.69,67.4c-2.15,0.93-4.51,1.75-6.94,2.53c-1.43-4.91-3.31-10.02-5.64-15.25c2.3-5.21,4.16-10.29,5.56-15.18c2.48,0.78,4.83,1.63,7.04,2.55c8.87,3.78,14.6,8.74,14.6,12.67C117.29,58.66,111.56,63.64,102.69,67.4z" />
              </svg>
              React
            </button>
          </div>
        </div>

        <div className="mb-5 h-full max-h-full touch-none overflow-y-auto overscroll-contain pr-2">
          <h2 className="mb-4 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Components
          </h2>
          <CategorieCard onClick={() => navigate("/")} type="Text" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard
            onClick={() => navigate("/inputs")}
            type="Input Field"
          />
          <CategorieCard onClick={() => navigate("/cards")} type="Cards" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard onClick={() => navigate("/cards")} type="Cards" />
          <CategorieCard type="Input Field" />
          <CategorieCard type="Toggle" />
          <CategorieCard onClick={() => navigate("/")} type="Text" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard type="Cards" />
          <CategorieCard type="Input Field" />
          <CategorieCard type="Toggle" />
          <CategorieCard onClick={() => navigate("/")} type="Text" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard type="Cards" />
          <CategorieCard type="Input Field" />
          <CategorieCard type="Toggle" />
          <CategorieCard onClick={() => navigate("/")} type="Text" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard type="Cards" />
          <CategorieCard type="Input Field" />
          <CategorieCard type="Toggle" />
          <CategorieCard onClick={() => navigate("/")} type="Text" />
          <CategorieCard onClick={() => navigate("/buttons")} type="Buttons" />
          <CategorieCard type="Cards" />
          <CategorieCard type="Input Field" />
          <CategorieCard type="Toggle" />
        </div>

        <hr className="mb-5 bg-gray-200 dark:border-gray-700" />

        <div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            Welcome to your component library! Here you’ll find both our own
            handcrafted components and open-source gems from around the web,
            ready to power your projects.
          </p>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            Free under the MIT License
          </p>
        </div>
      </div>
    </aside>
  );
}

export default DrawerMenu;
