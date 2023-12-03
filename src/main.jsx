import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./Features/store.js";
import BrowserRoute from "./Routes/Routers.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <RouterProvider router={BrowserRoute} />
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
