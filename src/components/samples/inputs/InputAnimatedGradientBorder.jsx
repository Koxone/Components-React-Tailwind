const InputAnimatedGradientBorder = (props) => (
  <input
    {...props}
    className="w-full rounded border-2 border-transparent bg-black p-3 text-white outline-none transition focus:border focus:border-transparent focus:bg-black focus:outline-none focus:ring-4 focus:ring-gradient-to-r focus:from-pink-500 focus:to-yellow-500"
    placeholder="Animated Gradient Border"
  />
);
export default InputAnimatedGradientBorder;
