// TextWave.jsx
function TextWave({ children }) {
  return (
    <div className="animate-wave text-white text-xl font-bold">
      {children.split("").map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </div>
  );
}

export default TextWave;
