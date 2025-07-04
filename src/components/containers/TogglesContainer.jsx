import MainCard from "../cards/MainCard";
import { toggles } from "../data/ComponentsData";

function TogglesContainer({ searchTerm }) {
  const filteredToggles = toggles.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredToggles.map(({ title, Component, id }) => (
        <MainCard
          key={id}
          title={title}
          effect={<Component />}
          url={`/demo/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
        />
      ))}
    </div>
  );
}

export default TogglesContainer;
