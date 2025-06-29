const InputWithGradientText = (props) => (
  <input
    {...props}
    className="w-full rounded border border-gray-700 bg-black p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 placeholder-white/50 focus:border-blue-500"
    placeholder="Gradient Text"
  />
);
export default InputWithGradientText;
