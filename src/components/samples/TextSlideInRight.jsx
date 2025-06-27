function TextSlideInRight({ children }) {
  return (
    <div className="relative inline-block w-full overflow-hidden">
      <span className="animate-slideInRightLoop inline-block text-xl text-white">
        {children}
      </span>
    </div>
  );
}

export default TextSlideInRight;
