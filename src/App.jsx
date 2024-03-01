import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Popular from "./Popular.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/search",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            diet: "vegan, vegetarian",
            number: "4",
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
        searchRecipe={searchRecipe}
        setSearchRecipe={setSearchRecipe}
        handleSearch={handleSearch}
      />
      <Home searchResults={searchResults} />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
