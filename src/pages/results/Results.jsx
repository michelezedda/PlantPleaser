import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./results.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";

function Results() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchRecipe = queryParams.get("query") || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadMoreRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            tags: `vegan, vegetarian`,
            diet: "vegan, vegetarian",
            number: "7",
            offset: (currentPage - 1) * 8,
          },
        }
      );
      setSearchResults((prevResults) => [
        ...prevResults,
        ...response.data?.results,
      ]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  useEffect(() => {
    loadMoreRecipes();
  }, [searchRecipe]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Your results for ${searchRecipe}`}</title>
        <link rel="canonical" href="https://vegavocado.vercel.app/" />
      </Helmet>
      <Navbar setSearchResults={setSearchResults} />
      <Sidebar />
      <div className="search-result-container">
        <h2>Your results for "{searchRecipe}"</h2>
        <div className="search-result">
          {searchResults.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="result">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>&nbsp;{recipe.title}</h4>
              </div>
            </Link>
          ))}
          <div className="card" id="load-more" onClick={loadMoreRecipes}></div>
        </div>
      </div>
      <Download />
      <Footer />
    </>
  );
}

export default Results;
