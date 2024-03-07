import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/index.css";

import App from "./App.jsx";
import Recipe from "../src/pages/Recipe.jsx";
import NotFoundPage from "../src/pages/NotFoundPage.jsx";
import Category from "../src/pages/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "../src/pages/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "../src/pages/category/:category",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
