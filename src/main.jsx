import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import BrowserRoute from "./Routes/Routers.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Features/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={BrowserRoute} />
    </Provider>
  </React.StrictMode>
);
