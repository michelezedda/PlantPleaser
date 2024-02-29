import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer.jsx";
import axios from "axios";

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/search",
        {
          params: {
            query: searchRecipe,
            diet: "vegan",
            number: "9",
            apiKey: "9e0c96ea51a24d6d86010dbcabec905f",
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <Navbar
        searchTerm={searchRecipe}
        setSearchTerm={setSearchRecipe}
        handleSearch={handleSearch}
      />
      <Home searchResults={searchResults} />
      <Footer />
    </>
  );
}

export default App;
