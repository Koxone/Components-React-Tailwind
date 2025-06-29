import MainCard from "../cards/MainCard";
import { inputs } from "../data/ComponentsData";

function InputsContainer() {
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {inputs.map(({ title, Component }, index) => (
        <MainCard
          key={index}
          title={title}
          effect={<Component />}
          url={`/demo/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
        />
      ))}
    </div>
  );
}

export default InputsContainer;
