import CategoriesSideBar from "../nav/CategoriesSideBar";
import SearchBar from "../nav/SearchBar";
import Footer from "../footer/Footer";

function MainContainer({ content }) {
  return (
    <main className="relative grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr] gap-4">
      {/* SearchBar fijo en la parte superior */}
      <div className="col-span-2">
        <SearchBar />
      </div>

      {/* CategoriesSideBar fijo a la izquierda */}
      <div className="row-start-2">
        <CategoriesSideBar />
      </div>

      {/* Área dinámica scrollable */}
      <div className="col-start-2 row-start-2 overflow-y-auto">{content}</div>
    </main>
  );
}

export default MainContainer;
