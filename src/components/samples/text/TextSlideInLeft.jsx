function TextSlideInLeft({ children }) {
  return (
    <div className="overflow-hidden w-full">
      <div className="animate-slideInLeftLoop text-[40px] text-white">
        {children}
      </div>
    </div>
  );
}

export default TextSlideInLeft;
