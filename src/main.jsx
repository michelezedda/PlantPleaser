import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

import App from "./App.jsx";
import Recipe from "./pages/Recipe.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Category from "./pages/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
