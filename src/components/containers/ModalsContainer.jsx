import MainCard from "../cards/MainCard";
import { modals } from "../data/ComponentsData";

function ModalsContainer() {
  return (
    <div className="hide-scrollbar grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {modals.map(({ title, Component, id }) => (
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

export default ModalsContainer;
