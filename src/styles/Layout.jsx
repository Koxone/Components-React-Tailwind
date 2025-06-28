import CategoriesSideBar from "../components/nav/CategoriesSideBar";
import SearchBar from "../components/nav/SearchBar";
import Footer from "../components/footer/Footer";
import Demo from "../demos/Demo";

function Layout({ content, Demo = false }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-50 mb-6 w-full sm:mb-10">
        <SearchBar />
      </div>

      {/* MAIN: SIDEBAR + CONTENT */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-1">
        {/* SIDEBAR */}
        {!Demo && (
          <aside className="sticky top-[64px] hidden w-[250px] flex-shrink-0 p-4 md:block">
            <CategoriesSideBar />
          </aside>
        )}

        {/* CONTENT */}
        <main className="flex-1 p-4">{Demo ? <Demo /> : content}</main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
