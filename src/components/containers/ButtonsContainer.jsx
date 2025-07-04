import MainCard from "../cards/MainCard";
import { buttons } from "../data/ComponentsData";

function ButtonsContainer({ searchTerm }) {
  const filteredButtons = buttons.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredButtons.map(({ title, Component, id }) => (
        <MainCard
          key={id}
          title={title}
          effect={<Component>Click Me</Component>}
          url={`/demo/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
        />
      ))}
    </div>
  );
}


export default ButtonsContainer;
