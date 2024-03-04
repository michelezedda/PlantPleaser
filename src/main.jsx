import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Recipe from "./Recipe.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Vegan from "./Vegan.jsx";
import Appetizer from "./Appetizer.jsx";
import MainCourse from "./MainCourse.jsx";
import SideDish from "./SideDish.jsx";
import Fingerfood from "./Fingerfood.jsx";
import Snack from "./Snack.jsx";
import Salad from "./Salad.jsx";
import Dessert from "./Dessert.jsx";
import Beverage from "./Beverage.jsx";

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
    path: "/vegan",
    element: <Vegan />,
  },
  {
    path: "/appetizer",
    element: <Appetizer />,
  },
  {
    path: "/maincourse",
    element: <MainCourse />,
  },
  {
    path: "/sidedish",
    element: <SideDish />,
  },
  {
    path: "/fingerfood",
    element: <Fingerfood />,
  },
  {
    path: "/snack",
    element: <Snack />,
  },
  {
    path: "/salad",
    element: <Salad />,
  },
  {
    path: "/dessert",
    element: <Dessert />,
  },
  {
    path: "/beverage",
    element: <Beverage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
