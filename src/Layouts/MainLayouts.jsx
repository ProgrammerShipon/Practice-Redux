import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      {/* <header id="header"></header> */}

      {/* <hr /> */}

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
