import { useNavigate } from "react-router-dom";
import SpotlightWrapper from "../samples/cards/SpotlightWrapper";

function MainCard({ title = "", effect, url, svg = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
    window.scrollTo(0, 0);
  };

  return (
    <SpotlightWrapper>
      <div
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className="relative grid aspect-square grid-cols-1 grid-rows-[auto_1fr] items-center justify-center rounded-xl border border-gray-700 bg-gray-950/60 p-4"
      >
        <div className="flex w-full items-center justify-between">
          <button
            onClick={handleClick}
            className="cursor-pointer text-left text-sm text-gray-400 transition-all duration-300 ease-in-out hover:scale-110 hover:text-green-400 hover:underline"
          >
            {title}
          </button>
          <button onClick={handleClick}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 cursor-pointer fill-current ${svg} text-gray-400 transition-all duration-300 ease-in-out hover:scale-200 hover:text-green-400`}
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="z-0 flex items-center justify-center text-center">
          {effect}
        </div>
      </div>
    </SpotlightWrapper>
  );
}

export default MainCard;
