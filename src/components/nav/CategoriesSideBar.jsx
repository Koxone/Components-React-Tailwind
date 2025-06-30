import { useNavigate } from "react-router-dom";
import CategorieCard from "../cards/CategorieCard";
import { useState } from "react";

function CategoriesSideBar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const baseButtonClass =
    "group inline-flex cursor-pointer items-center justify-center border gap-1 border-gray-600 bg-gray-700 p-2 text-sm font-medium text-gray-100 hover:bg-gray-900 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-500";
  const activeClass = "text-blue-600 ring-2 ring-blue-500 bg-gray-900";

  const categories = [
    { type: "Text", path: "/" },
    { type: "Buttons", path: "/buttons" },
    { type: "Input Field", path: "/inputs" },
    { type: "Cards", path: "/cards" },
    { type: "Toggles", path: "/toggles" },
    { type: "Sliders", path: "/sliders" },
    { type: "Modals", path: "/modals" },
    { type: "Dropdowns", path: "/dropdowns" },
    { type: "Selects", path: "/selects" },
    { type: "Sidebars", path: "/sidebars" },
    { type: "Toolstips", path: "/tooltips" },
  ];

  return (
    <aside className="hide-scrollbar col-span-1 hidden h-[calc(100vh-100px)] max-h-[100dvh] max-w-[250px] flex-1 overflow-y-hidden rounded-lg border border-gray-700 bg-gray-800 p-5 sm:flex">
      <div className="hidden h-full grid-rows-[auto_auto_auto_auto] sm:grid">
        {/* HEADER */}
        <div className="mb-5">
          <h5 className="mb-4 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Categories
          </h5>
          <div
            className="grid w-full grid-cols-2 rounded-md shadow-sm"
            role="group"
          >
            {/* Tailwind Button */}
            <button
              id="categorieTailwind"
              type="button"
              onClick={() => handleButtonClick("tailwind")}
              className={`${baseButtonClass} rounded-l-lg ${
                activeButton === "tailwind" ? activeClass : ""
              }`}
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#44a8b3"
              >
                <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
              </svg>
              Tailwind
            </button>

            {/* React Button */}
            <button
              id="categorieReact"
              type="button"
              onClick={() => handleButtonClick("react")}
              className={`${baseButtonClass} rounded-r-lg px-4 py-2 ${
                activeButton === "react" ? activeClass : ""
              }`}
            >
              <svg
                viewBox="0 0 32 32"
                fillRule="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                    fill="#53C1DE"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                    fill="#53C1DE"
                  ></path>{" "}
                </g>
              </svg>
              React
            </button>
          </div>
        </div>

        {/* COMPONENTS LIST */}
        <div className="mb-5 h-full max-h-full touch-none overflow-y-auto overscroll-contain pr-2">
          <h2 className="mb-4 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Components
          </h2>
          {Array.from({ length: 1 }).map((_, i) =>
            categories.map((cat, idx) => (
              <CategorieCard
                key={`${i}-${idx}`}
                onClick={() => navigate(cat.path)}
                type={cat.type}
              />
            )),
          )}
        </div>

        {/* FOOTER */}
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

export default CategoriesSideBar;
