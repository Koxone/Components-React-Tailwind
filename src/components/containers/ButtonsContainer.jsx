import MainCard from "../cards/MainCard";
import { buttons } from "../data/ComponentsData";

function ButtonsContainer() {
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {buttons.map(({ title, Component }, index) => (
        <MainCard
          key={index}
          title={title}
          effect={<Component>Click Me</Component>}
        />
      ))}
    </div>
  );
}

export default ButtonsContainer;
