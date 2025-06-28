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
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[250px] flex-shrink-0 md:block">
          <CategoriesSideBar />
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6">{content}</main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
