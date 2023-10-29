import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <p> Hi, I am Programmer Shipon </p>
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
