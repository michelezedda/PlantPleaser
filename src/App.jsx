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
            apiKey: "9916ddb00d084027bdf1766ef68da8dd",
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Errore nella ricerca:", error);
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
