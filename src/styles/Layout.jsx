import CategoriesSideBar from "../components/nav/CategoriesSideBar";
import SearchBar from "../components/nav/SearchBar";
import Footer from "../components/footer/Footer";

function Layout({ content }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-50 w-full">
        <SearchBar />
      </div>

      {/* MAIN: SIDEBAR + CONTENT */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-1">
        {/* SIDEBAR */}
        <aside className="sticky top-[64px] hidden w-[250px] p-4 flex-shrink-0 md:block">
          <CategoriesSideBar />
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-4">{content}</main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
