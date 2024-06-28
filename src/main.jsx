import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Recipe from "./pages/recipe/Recipe.jsx";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";
import Category from "./pages/category/Category.jsx";
import Results from "./pages/results/Results.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
