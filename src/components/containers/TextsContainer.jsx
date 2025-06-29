import MainCard from "../cards/MainCard";
import { text } from "../data/ComponentsData";

function CardsContainer() {
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {text.map(({ title, Component }, index) => (
        <MainCard
          key={index}
          title={title}
          effect={<Component>Sample Text</Component>}
          url={`/demo/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
