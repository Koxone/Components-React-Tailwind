// TextWave.jsx
function TextWave({ children }) {
  return (
    <div className="animate-wave text-white text-[40px] font-bold">
      {children.split("").map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </div>
  );
}

export default TextWave;
