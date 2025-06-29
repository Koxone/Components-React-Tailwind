import { Search } from "lucide-react";

const InputIconRight = (props) => (
  <div className="relative flex items-center">
    <input
      {...props}
      className="w-full rounded border border-gray-700 bg-black p-3 pr-10 text-white outline-none focus:border-blue-500"
      placeholder="Icon Right"
    />
    <Search className="absolute right-3 text-gray-400" size={18} />
  </div>
);
export default InputIconRight;
