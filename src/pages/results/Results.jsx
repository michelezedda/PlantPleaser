import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./results.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";

function Results() {
  const { myResult } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  const loadMoreRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            tags: `vegan, vegetarian,`,
            number: "8",
          },
        }
      );
      setSearchResults(response.data?.results || []);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  useEffect(() => {
    loadMoreRecipes();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Avocado: ${myResult}`}</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar setSearchResults={setSearchResults} />
      <Sidebar />
      <div className="search-result-container">
        <h2>
          Your results for <em>{searchRecipe}</em>
        </h2>
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
        </div>
      </div>
      <Download />
      <Footer />
    </>
  );
}

export default Results;
