import CategoriesSideBar from "../nav/CategoriesSideBar";
import SearchBar from "../nav/SearchBar";
import CardsContainer from "./CardsContainer";
import ButtonsContainer from "./ButtonsContainer";

function MainContainer() {
  return (
    <main className="relative grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr] gap-4 overflow-hidden">
      {/* SearchBar fijo en la parte superior */}
      <div className="col-span-2">
        <SearchBar />
      </div>

      {/* CategoriesSideBar fijo a la izquierda */}
      <div className="row-start-2">
        <CategoriesSideBar />
      </div>

      {/* CardsContainer scrolleable dentro del área de contenido */}
      <div className="col-start-2 row-start-2 overflow-y-auto">
        {/* <CardsContainer /> */}
        <ButtonsContainer />
      </div>
    </main>
  );
}

export default MainContainer;
