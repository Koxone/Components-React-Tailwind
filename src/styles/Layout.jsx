import CategoriesSideBar from "../components/nav/CategoriesSideBar";
import SearchBar from "../components/nav/SearchBar";
import Footer from "../components/footer/Footer";
import DrawerMenu from "../components/nav/DrawerMenu";
import React, { useEffect, useState } from "react";
import "../styles/TextStyles.css";
import "../styles/ButtonsStyles.css";
import "../styles/CardsStyles.css";
import "../styles/TogglesStyles.css";
import "../styles/TooltipsStyles.css";
import "../styles/PopoversStyles.css";
import "../styles/DropdownsStyles.css";

function Layout({ content, Demo = false }) {
  const [isToggle, setIsToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // NUEVO

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  // Inyectamos searchTerm al content
  const contentWithSearch = React.cloneElement(content, { searchTerm });

  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 mb-6 w-full sm:mb-0">
        <SearchBar onClick={handleClick} onChange={setSearchTerm} />{" "}
        {/* PASAMOS onChange */}
        <DrawerMenu isToggle={isToggle} />
      </div>

      {/* MAIN: SIDEBAR + CONTENT */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 p-6">
        {/* SIDEBAR */}
        {!Demo && (
          <aside className="sticky top-[64px] hidden w-[250px] flex-shrink-0 p-4 md:block">
            <CategoriesSideBar />
          </aside>
        )}

        {/* CONTENT */}
        <main className="relative flex-1 p-4">
          {Demo ? <Demo /> : contentWithSearch} {/* USAMOS contentWithSearch */}
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
