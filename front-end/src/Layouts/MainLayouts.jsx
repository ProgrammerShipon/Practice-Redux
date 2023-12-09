import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <header id="header">
        <div class="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
          Simple Todo Application with Redux
        </div>
      </header>

      <hr />

      <main>
        <Outlet />
      </main>

      <hr />

      <footer>
        <div className="container mx-auto">
          <p> &copy;Programmer Shipon </p>
        </div>
      </footer>
    </>
  );
};

export default MainLayouts;
