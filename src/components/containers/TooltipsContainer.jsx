import MainCard from "../cards/MainCard";
import { tooltips } from "../data/ComponentsData";

function TooltipsContainer({ searchTerm }) {
  const filteredTooltips = tooltips.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredTooltips.map(({ title, Component, id }) => (
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

export default TooltipsContainer;
