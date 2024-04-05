import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Recipe from "./pages/recipe/Recipe.jsx";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";
import Category from "./pages/category/Category.jsx";
import Results from "./pages/results/Results.jsx";

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
  {
    path: "/results",
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
