import { useState } from "react";

const InputAnimatedLabelSlide = ({ label = "Label Slide", ...props }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== "")}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full border-b-2 border-gray-500 bg-transparent p-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
        placeholder={label}
      />
      <label
        className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 ${
          focused || value ? "-top-4 text-xs text-blue-500" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};
export default InputAnimatedLabelSlide;
