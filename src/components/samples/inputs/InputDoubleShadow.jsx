const InputDoubleShadow = (props) => (
  <input
    {...props}
    className="w-full rounded border border-gray-700 bg-black p-3 text-white outline-none transition focus:shadow-[inset_0_0_10px_#9333ea,inset_0_0_20px_#3b82f6]"
    placeholder="Double Shadow"
  />
);
export default InputDoubleShadow;
