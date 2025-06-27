function ButtonRipple({ children }) {
  return (
    <button className="btn-ripple px-4 py-2 rounded-md text-white text-xl overflow-hidden relative">
      {children}
    </button>
  );
}

export default ButtonRipple;
