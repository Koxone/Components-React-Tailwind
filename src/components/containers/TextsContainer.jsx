import MainCard from "../cards/MainCard";
import { text } from "../data/ComponentsData";

function CardsContainer({ searchTerm }) {
  const filteredText = text.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredText.map(({ title, Component, id }) => (
        <MainCard
          key={id}
          title={title}
          effect={<Component>Sample Text</Component>}
          url={`/demo/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
